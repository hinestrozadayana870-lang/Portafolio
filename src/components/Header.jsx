const Header = () => {
  return (
    <header className="sticky top-0 z-10 border-b bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5" aria-label="Navegación principal">
        <a href="#inicio" className="text-lg font-bold text-green-700">
          Leydi Dayana
        </a>
        <ul className="hidden gap-6 md:flex">
          <li><a href="#sobre-mi" className="text-gray-700 hover:text-green-700">Sobre mí</a></li>
          <li><a href="#servicios" className="text-gray-700 hover:text-green-700">Servicios</a></li>
          <li><a href="#habilidades" className="text-gray-700 hover:text-green-700">Habilidades</a></li>
          <li><a href="#proyectos" className="text-gray-700 hover:text-green-700">Proyectos</a></li>
          <li><a href="#contacto" className="text-gray-700 hover:text-green-700">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;