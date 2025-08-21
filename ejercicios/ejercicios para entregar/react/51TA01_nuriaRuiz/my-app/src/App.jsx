import Header from './components/header';
import Card from './components/card';
import Footer from './components/footer'

function App() {
  const productos = [
    {
      nombre: "Producto 1",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora magni, similique necessitatibus deleniti nam quaerat non pariatur laborum. Nostrum est aut ad adipisci aliquam, tempora repellendus sed debitis animi. Consequuntur!",
      imagen: "https://placehold.co/150"
    },
    {
      nombre: "Producto 2", 
      descripcion: "Descripción del producto 2Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora magni, similique necessitatibus deleniti nam quaerat non pariatur laborum. Nostrum est aut ad adipisci aliquam, tempora repellendus sed debitis animi. Consequuntur!",
      imagen: "https://placehold.co/150"
    },
    {
      nombre: "Producto 3",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora magni, similique necessitatibus deleniti nam quaerat non pariatur laborum. Nostrum est aut ad adipisci aliquam, tempora repellendus sed debitis animi. Consequuntur!", 
      imagen: "https://placehold.co/150"
    }
  ];

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <h2>Nuestros Productos</h2>
        <div className="cards-container">
          {productos.map((producto, index) => (
            <Card
              key={index}
              nombre={producto.nombre}
              descripcion={producto.descripcion}
              imagen={producto.imagen}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;