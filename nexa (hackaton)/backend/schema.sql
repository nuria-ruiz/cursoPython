PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('ADMIN','TRABAJADOR'))
);

CREATE TABLE IF NOT EXISTS beneficiaries (
    id  INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name TEXT NOT NULL,
    dni TEXT UNIQUE,
    disability_pct INTEGER CHECK (disability_pct BETWEEN 0 AND 100),
    city TEXT
);

CREATE TABLE IF NOT EXISTS requests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    beneficiary_id INTEGER NOT NULL REFERENCES beneficiaries(id) ON DELETE CASCADE,
    type TEXT NOT NULL CHECK (type IN ('transporte','orientacion','fisioterapia','psicologia')),
    status TEXT NOT NULL CHECK (status IN ('pendiente','en_curso','completado')) DEFAULT 'pendiente',
    notes TEXT
);
