export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">© {year} · Proyecto Global React</div>
    </footer>
  );
}
