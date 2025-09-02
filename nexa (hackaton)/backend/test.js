import sqlite3 from "sqlite3";

const db = new sqlite3.Database("nexa.sqlite");

db.all("INSERT INTO users (email, password_hash, role) VALUES ('admin1@nexa.org','$2a$10$7Y9uMyM9Y/EJnpvTrk6gxOt9yDsXLyA0b4PR0HJ0dPPbQw8qGrw2G','ADMIN'
);
", (err, rows) => {
  if (err) throw err;
  console.log("Usuarios existentes:", rows);
  db.close();
});
