import React from 'react'
import Layout from './components/Layout.jsx'
import Card from './components/Card.jsx'
import Section from './components/Section.jsx'
import Navbar from './components/Navbar.jsx'
import CounterProvider from './components/CounterProvider.jsx'

export default function App() {
  return (
    <Layout>
      {/* Navbar secundario manipulando children */}
      <Navbar>
        <Navbar.Item href="#servicios">Servicios</Navbar.Item>
        <Navbar.Item href="#equipo">Equipo</Navbar.Item>
        <Navbar.Item href="#contacto">Contacto</Navbar.Item>
      </Navbar>

      {/* Section con “slots” nombrados via children */}
      <Section>
        <Section.Title>Soluciones digitales</Section.Title>
        <Section.Content>
          Webs y apps con enfoque en rendimiento, UX y accesibilidad.
        </Section.Content>
      </Section>

      {/* Card con children + footer por prop */}
      <Card title="Quiénes somos" footer={<em>+10 años construyendo productos digitales.</em>}>
        Somos un equipo multidisciplinar de frontend, backend y diseño.
      </Card>

      {/* Render prop: children como función */}
      <CounterProvider initial={3}>
        {({ count, inc, dec, reset }) => (
          <Card title="Contador (render prop)">
            <p>Valor: <strong>{count}</strong></p>
            <div className="row">
              <button className="btn" onClick={dec}>−1</button>
              <button className="btn" onClick={reset}>Reset</button>
              <button className="btn" onClick={inc}>+1</button>
            </div>
          </Card>
        )}
      </CounterProvider>
    </Layout>
  )
}
