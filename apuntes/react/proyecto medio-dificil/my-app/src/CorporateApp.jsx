import React, { useMemo, useState } from "react";
import Layout from "./components/Layout.jsx";

import Home from "./pages/Home.jsx";
// Paletas de colores (light/dark) pasadas por props
const palette = {
  light: {
    bg: "#f7fafc",
    panel: "#ffffff",
    text: "#0f172a",
    sub: "#475569",
    border: "#e2e8f0",
    brand: "#2563eb",
  },
  dark: {
    bg: "#0b1220",
    panel: "#101826",
    text: "#e7ecf6",
    sub: "#9fb0d0",
    border: "#1c2840",
    brand: "#6aa9ff",
  },
};
export default function CorporateApp() {
  const [dark, setDark] = useState(true);
  //[nombre de la variable, funcion que la va a cambiar siempre que nos haga falta]
  //use state recoge la variable y el escuchador de la variable para poder guardar los valores
  //dark= "oscar" (X) setDark = "oscar" (O)
  const t = useMemo(() => (dark ? palette.dark : palette.light), [dark]);
  const toggleTheme = () => setDark((d) => !d);
  // Ejemplo de props a la página (colores) + children en Layout
  return (
    <Layout t={t} dark={dark} onToggleTheme={toggleTheme}>
      <Home t={t} />
    </Layout>
  );
}
