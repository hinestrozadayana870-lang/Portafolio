const Header = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Navegación principal">
        <a href="#inicio" className="text-xl font-extrabold text-gray-900">
          LD<span className="text-blue-600">.</span>
        </a>
        <ul className="hidden gap-6 text-sm font-semibold md:flex">
          <li><a href="#inicio" className="text-gray-700 hover:text-blue-600">Inicio</a></li>
          <li><a href="#servicios" className="text-gray-700 hover:text-blue-600">Servicios</a></li>
          <li><a href="#habilidades" className="text-gray-700 hover:text-blue-600">Habilidades</a></li>
          <li><a href="#proyectos" className="text-gray-700 hover:text-blue-600">Proyectos</a></li>
          <li><a href="#contacto" className="text-gray-700 hover:text-blue-600">Contacto</a></li>
        </ul>
        <a href="#contacto" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white hover:bg-blue-700">
          Contactarme
        </a>
      </nav>
    </header>
  );
};

export default Header;