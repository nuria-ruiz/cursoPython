import React from 'react'

export default function Layout({ children }) {
  return (
    <div>
      <header style={{position:'sticky', top:0, backdropFilter:'blur(6px)', borderBottom:'1px solid var(--border)'}}>
        <div className="container row" style={{justifyContent:'space-between'}}>
          <div className="row">
            <div style={{width:28, height:28, borderRadius:8, background:'var(--brand)'}} />
            <strong>MiEmpresa</strong>
            <span className="badge">Demo children</span>
          </div>
          <small className="badge">Navbar fijo</small>
        </div>
      </header>

      <main className="container" style={{paddingTop:24, paddingBottom:24}}>
        {/** 👇 Aquí se renderizan los children del layout */}
        {children}
      </main>

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} MiEmpresa</div>
      </footer>
    </div>
  )
}
