import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { getDB } from "./db.js";

const app = express();
const PORT = 3001;
const JWT_SECRET = "amparitose fue a la playa";

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
const db = getDB();

// Middleware auth
function auth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token" });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ message: "Token inválido" });
  }
}

// Crear usuario (solo admin debería poder hacerlo)
// Crear nuevo usuario (cualquier usuario autenticado puede hacerlo)
app.post("/users", async (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return res.status(400).json({ message: "Faltan datos (email, password, role)" });
  }

  try {
    const password_hash = await bcrypt.hash(password, 10);

    db.run(
      "INSERT INTO users(email,password_hash,role) VALUES (?,?,?)",
      [email, password_hash, role],
      function (err) {
        if (err) {
          return res.status(400).json({ message: err.message });
        }
        res.json({
          id: this.lastID,
          email,
          role
        });
      }
    );
  } catch (error) {
    res.status(500).json({ message: "Error creando usuario" });
  }
});

// Login
app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;
  db.get("SELECT * FROM users WHERE email=?", [email], async (err, user) => {
    if (!user) return res.status(401).json({ message: "Credenciales" });
    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ message: "Credenciales" });
    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, role: user.role });
  });
});

// Beneficiarios
app.get("/beneficiaries", auth, (req, res) => {
  db.all("SELECT * FROM beneficiaries", (err, rows) => res.json(rows));
});
app.post("/beneficiaries", auth, (req, res) => {
  const { full_name, dni, disability_pct, city } = req.body;
  db.run(
    "INSERT INTO beneficiaries(full_name,dni,disability_pct,city) VALUES (?,?,?,?)",
    [full_name, dni, disability_pct, city],
    function (err) {
      if (err) return res.status(400).json({ message: err.message });
      res.json({ id: this.lastID });
    }
  );
});

// Solicitudes
app.get("/requests", auth, (req, res) => {
  db.all("SELECT * FROM requests", (err, rows) => res.json(rows));
});
app.post("/requests", auth, (req, res) => {
  const { beneficiary_id, type, notes } = req.body;
  db.run(
    "INSERT INTO requests(beneficiary_id,type,notes) VALUES (?,?,?)",
    [beneficiary_id, type, notes],
    function (err) {
      if (err) return res.status(400).json({ message: err.message });
      res.json({ id: this.lastID });
    }
  );
});

// Estadísticas
app.get("/stats", auth, (req, res) => {
  db.all("SELECT status, COUNT(*) as total FROM requests GROUP BY status", (err, rows) => res.json(rows));
});

app.listen(PORT, () => console.log(`API en http://localhost:${PORT}`));
