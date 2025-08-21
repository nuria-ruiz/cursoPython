const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());                 // ajusta origin si lo necesitas en prod
app.use(express.json());

// --- Productos ---
app.get("/api/products", (req, res) => {
  const { q } = req.query;
  if (q) {
    const stmt = db.prepare(
      "SELECT * FROM products WHERE LOWER(name) LIKE ? ORDER BY id DESC"
    );
    return res.json(stmt.all(`%${q.toLowerCase()}%`));
  }
  const stmt = db.prepare("SELECT * FROM products ORDER BY id DESC");
  res.json(stmt.all());
});

app.get("/api/products/:id", (req, res) => {
  const stmt = db.prepare("SELECT * FROM products WHERE id = ?");
  const product = stmt.get(req.params.id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
});

// --- Ordenes (Checkout) ---
app.post("/api/orders", (req, res) => {
  const { customer, email, address, items } = req.body;
  if (!customer || !email || !address || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: "Invalid payload" });
  }
  // calcular total verificando precios desde DB
  const getP = db.prepare("SELECT id, price FROM products WHERE id = ?");
  let total = 0;
  for (const it of items) {
    const p = getP.get(it.id);
    if (!p) return res.status(400).json({ error: `Invalid product id ${it.id}` });
    total += p.price * (it.qty ?? 1);
  }

  const insertOrder = db.prepare(
    "INSERT INTO orders (customer, email, address, total) VALUES (?, ?, ?, ?)"
  );
  const info = insertOrder.run(customer, email, address, total);
  const orderId = info.lastInsertRowid;

  const insertItem = db.prepare(
    "INSERT INTO order_items (order_id, product_id, qty, price) VALUES (?, ?, ?, ?)"
  );
  const getPrice = db.prepare("SELECT price FROM products WHERE id = ?");
  const tx = db.transaction((rows) => {
    for (const it of rows) {
      const price = getPrice.get(it.id).price;
      insertItem.run(orderId, it.id, it.qty ?? 1, price);
    }
  });
  tx(items);

  res.status(201).json({ id: orderId, total });
});

app.get("/api/orders/:id", (req, res) => {
  const order = db.prepare("SELECT * FROM orders WHERE id = ?").get(req.params.id);
  if (!order) return res.status(404).json({ error: "Order not found" });
  const items = db
    .prepare(`SELECT oi.id, oi.product_id, oi.qty, oi.price, p.name
              FROM order_items oi JOIN products p ON p.id = oi.product_id
              WHERE oi.order_id = ?`)
    .all(order.id);
  res.json({ ...order, items });
});

// --- Arranque ---
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ API running on http://localhost:${PORT}`);
});