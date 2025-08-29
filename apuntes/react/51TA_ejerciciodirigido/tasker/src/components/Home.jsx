import Header from "./Header"
import Footer from "./Footer"

export default function Home({children, title = 'titulo por defecto', subtitle = 'subtitulo por defecto'}) {

  return (
    <div className="app">
      <Header titulo = {title} subtitulo = {subtitle}/>
      <main className="container">
        {children}
      </main>
      <Footer />
    </div>
  );
}
