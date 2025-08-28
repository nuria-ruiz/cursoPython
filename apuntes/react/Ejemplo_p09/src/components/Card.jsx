import React from 'react'

export default function Card({ title, children, footer, highlight}) {
  const bordeEspecial = highlight ? 'border:3px solid #e4e0e0ff' : 'panel'

  return (
    <section className="panel" style={{ border: bordeEspecial }}>
      {title && <h3 style={{marginTop:0}}>{title}</h3>}
      <div>{children /* contenido libre dentro de la tarjeta */}</div>
      {footer && <div style={{marginTop:12, opacity:.8}}>{footer}</div>}
    </section>
  )
}
