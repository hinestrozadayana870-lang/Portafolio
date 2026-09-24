const Header = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-rose-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Navegación principal">
        <a href="#inicio" className="text-xl font-bold text-rose-700">
          Leydi <span className="text-purple-500">Dayana</span>
        </a>

        <ul className="hidden gap-6 text-sm font-semibold md:flex">
          <li><a href="#inicio" className="text-gray-600 hover:text-rose-600">Inicio</a></li>
          <li><a href="#servicios" className="text-gray-600 hover:text-rose-600">Servicios</a></li>
          <li><a href="#habilidades" className="text-gray-600 hover:text-rose-600">Habilidades</a></li>
          <li><a href="#proyectos" className="text-gray-600 hover:text-rose-600">Proyectos</a></li>
          <li><a href="#contacto" className="text-gray-600 hover:text-rose-600">Contacto</a></li>
        </ul>

        <a href="#contacto" className="rounded-full bg-rose-500 px-5 py-2 text-sm font-bold text-white shadow-sm hover:bg-rose-600">
          Contactarme
        </a>
      </nav>
    </header>
  );
};

export default Header;