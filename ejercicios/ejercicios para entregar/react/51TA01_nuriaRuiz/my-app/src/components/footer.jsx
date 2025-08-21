import React, { useState, useEffect } from 'react';

function Footer() {
  const [horaActual, setHoraActual] = useState(new Date());

  useEffect(() => {
    // Configurar el intervalo para actualizar la hora cada segundo
    const intervalo = setInterval(() => {
      setHoraActual(new Date());
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalo);
  }, []);

  // Formatear fecha y hora
  const fechaFormateada = horaActual.toLocaleDateString();
  const horaFormateada = horaActual.toLocaleTimeString();

  return (
    <footer className="footer">
      <div className="footer-info">
        <p>Hoy es dia {fechaFormateada} </p>
        <p className="hora-actual"> Son las {horaFormateada}</p>
      </div>
    </footer>
  );
}

export default Footer;