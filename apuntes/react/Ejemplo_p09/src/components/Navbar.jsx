import React from 'react'

function Item({ href, children }) {
  return <a href={href}>{children}</a>
}

export default function Navbar({ children }) {
  const items = React.Children.map(children, child => {
    if (child.type === Item) {
      return React.cloneElement(child, {
        // inyectamos estilo/clase a cada Item
        style: { padding:'8px 12px', border:'1px solid var(--border)', borderRadius:10, background:'var(--panel)' }
      })
    }
    return child
  })

  return (
    <nav className="row" aria-label="Secundaria" style={{marginBottom:12}}>
      {items}
    </nav>
  )
}

Navbar.Item = Item
