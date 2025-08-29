import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from './components/Navbar';
import Usuario from './components/Usuario';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Config from './pages/Config';
import './App.css'

function App() {
  return (
  <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/usuario/:id" element={<Usuario />} />
       <Route path="/dashboard" element={<Dashboard />}>
          <Route path="perfil" element={<Profile />} />
          <Route path="config" element={<Config />} />
        </Route>
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </>
  )
}

export default App;