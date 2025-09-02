import fs from "fs";
import path from "path";
import sqlite3 from "sqlite3";

const dbPath = path.join(process.cwd(), "nexa.sqlite");

export function getDB() {
  sqlite3.verbose();
  return new sqlite3.Database(dbPath);
}

export function runSqlFile(file) {
  const db = getDB();
  const sql = fs.readFileSync(path.join(process.cwd(), file), "utf-8");
  return new Promise((resolve, reject) => {
    db.exec(sql, (err) => (err ? reject(err) : resolve()));
  }).finally(() => db.close());
}