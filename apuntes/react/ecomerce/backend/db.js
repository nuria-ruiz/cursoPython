const Database = require("better-sqlite3");
const fs = require("fs");
const path = require("path");

const DB_PATH = path.join(__dirname, "ecommerce.db");
const db = new Database(DB_PATH);

// inicializa esquema
const schema = fs.readFileSync(path.join(__dirname, "schema.sql"), "utf8");
db.exec(schema);

// si products está vacío, sembrar datos
const row = db.prepare("SELECT COUNT(*) AS n FROM products").get();
if (row.n === 0) {
  const seed = fs.readFileSync(path.join(__dirname, "seed.sql"), "utf8");
  db.exec(seed);
  console.log("✅ DB seeded with sample products");
}

module.exports = db;