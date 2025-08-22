import React from 'react'

function Title({ children }) {
  return <h2 style={{marginTop:0}}>{children}</h2>
}
function Content({ children }) {
  return <div style={{color:'var(--sub)'}}>{children}</div>
}

export default function Section({ children }) {
  const items = React.Children.toArray(children)
  const title = items.find(child => child.type === Title)
  const content = items.find(child => child.type === Content)

  return (
    <section className="panel">
      {title}
      {content}
    </section>
  )
}

// Slots nombrados
Section.Title = Title
Section.Content = Content