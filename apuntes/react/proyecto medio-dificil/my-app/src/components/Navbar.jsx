import React, { useState } from "react";
export default function Navbar({ t, dark, onToggleTheme }) {
  const [open, setOpen] = useState(false); // menú móvil
  const linkStyle = {
    padding: "8px 12px",
    borderRadius: 10,
    color: t.text,
    border: `1px solid ${t.border}`,
    background: t.panel,
  };
  return (
    <nav className="nav" aria-label="Principal">
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 8,

            background: t.brand,
          }}
        />

        <strong style={{ color: t.text }}>MiEmpresa</strong>
        <span className="badge">Corporativo</span>
      </div>
      {/* Desktop */}
      <div className="row" style={{ alignItems: "center" }}>
        <div
          className="row"
          style={{ gap: 8 }}
          aria-hidden={open ? "true" : "false"}
        >
          <a href="#servicios" style={linkStyle}>
            Servicios
          </a>
          <a href="#equipo" style={linkStyle}>
            Equipo
          </a>
          <a href="#contacto" style={linkStyle}>
            Contacto
          </a>
        </div>
        <button
          className="btn ghost"
          onClick={onToggleTheme}
          aria-pressed={dark}
        >
          {dark ? "☀️ Claro" : "🌙 Oscuro"}
        </button>
        {/* Hamburguesa móvil */}
        <button className="btn" onClick={() => setOpen((o) => !o)}
          aria-expanded={open} aria-controls="menu-movil">☰</button>
      </div>
      {/* Menú móvil desplegable */}
      <div
        id="menu-movil"
        className={open ? "" : "hidden"}
        style={{ marginTop: 10 }}
      >
        <div className="row" style={{ gap: 8 }}>
          <a href="#servicios" style={linkStyle} onClick={() => setOpen(false)}>
            Servicios
          </a>
          <a href="#equipo" style={linkStyle} onClick={() => setOpen(false)}>
            Equipo
          </a>

          <a href="#contacto" style={linkStyle} onClick={() => setOpen(false)}>
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}
