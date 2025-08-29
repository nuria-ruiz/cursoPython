export default function Header(props) {
  return (
    <header>
      <div className="container">
        <h1>{props.titulo}</h1>
        <p style={{ margin: 0, opacity: 0.8 }}>{props.subtitulo}</p>
      </div>
    </header>
  );
}
