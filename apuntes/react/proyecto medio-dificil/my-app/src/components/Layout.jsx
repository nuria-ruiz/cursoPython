import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
export default function Layout({ t, dark, onToggleTheme, children }) {
  const wrapperStyle = {
    background: t.bg,
    color: t.text,
    minHeight: "100vh",
    transition: "background .25s ease, color .25s ease",
  };
  return (
    <div style={wrapperStyle}>
      <header className="app">
        <div className="container">
          <Navbar t={t} dark={dark} onToggleTheme={onToggleTheme} />
        </div>
      </header>
      <main className="container" style={{ paddingTop: 24, paddingBottom: 24 }}>
        {children /* 👈 children renderizado aquí */}
      </main>
      <footer className="footer" style={{ background: t.panel }}>
        <div className="container">
          <Footer t={t} />
        </div>
      </footer>
    </div>
  );
}
