import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./component/profile";

function Home() {
  return <h2>Página de Inicio</h2>;
}
function About() {
  return <h2>Acerca de Nosotros</h2>;
}
function Contact() {
  return <h2>Contacto</h2>;
}
export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/about">Acerca</Link> |{" "}
        <Link to="/contact">Contacto</Link> |{" "}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
      </>
  );
}
