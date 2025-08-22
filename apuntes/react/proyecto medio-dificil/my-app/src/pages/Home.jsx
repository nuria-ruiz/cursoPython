import React, { useState } from 'react'
import Hero from '../components/Hero.jsx'
function FeatureCard({ t, title, children }){ // props + children
return (
<div className="panel" style={{background:t.panel}}>
<h3 style={{marginTop:0}}>{title}</h3>
<div style={{color:t.sub}}>{children}</div>
</div>
)
}
export default function Home({ t }){
const [clics, setClics] = useState(0) // useState en la página
const handleCTA = () => setClics(n => n + 1)
return (
<div className="grid">
<Hero
t={t}
title="Soluciones digitales para tu negocio"
subtitle="Desarrollamos experiencias web rápidas, accesibles

y orientadas a resultados."

ctaText={`Quiero hablar (${clics})`}
onCta={handleCTA}
/>
<section id="servicios" className="grid grid-3">
<FeatureCard t={t} title="Desarrollo Web">
Sitios y apps modernas con React. SEO, rendimiento y

accesibilidad.

</FeatureCard>
<FeatureCard t={t} title="eCommerce">
Tiendas online optimizadas para conversión y analítica.
</FeatureCard>
<FeatureCard t={t} title="Consultoría">
Auditorías técnicas, formación y planes de mejora

continua.

</FeatureCard>
</section>
<section id="equipo" className="panel"
style={{background:t.panel}}>
<h2>Equipo</h2>
<p style={{color:t.sub}}>Un equipo senior de producto, UX y

desarrollo.</p>

<div className="row">
<span className="badge">Frontend</span>
<span className="badge">Backend</span>
<span className="badge">DevOps</span>
<span className="badge">UX/UI</span>
</div>
</section>
<section id="contacto" className="panel"
style={{background:t.panel}}>
<h2>Contacto</h2>
<p style={{color:t.sub}}>¿Hablamos? Escríbenos a <a
href="mailto:hola@miempresa.com">hola@miempresa.com</a>.</p>
</section>
</div>
)
}