function Card({ nombre, descripcion, imagen, highlight }) {
  const bordeEspecial = {
    border: highlight ? '2px solid var(--brand)' : 'none',
  };

  return (
    <div className="card" style={bordeEspecial}>
      <img src={imagen} alt={nombre} className="card-image"/>
      <div className="card-content">
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
      </div>
    </div>
  );
}

export default Card;