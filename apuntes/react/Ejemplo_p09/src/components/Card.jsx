import React from 'react'

export default function Card({ title, children, footer }) {
  return (
    <section className="panel">
      {title && <h3 style={{marginTop:0}}>{title}</h3>}
      <div>{children /* contenido libre dentro de la tarjeta */}</div>
      {footer && <div style={{marginTop:12, opacity:.8}}>{footer}</div>}
    </section>
  )
}
