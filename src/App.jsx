import Header from "./components/Header";
import About from "./components/About";
import Servicios from "./components/Servicios";
import Habilidades from "./components/Habilidades";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Servicios />
        <Habilidades />
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

export default App;