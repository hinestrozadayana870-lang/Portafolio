const Servicios = () => {
  return (
    <section id="servicios" className="bg-white px-6 py-20">
      <article className="mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Servicios</h2>
          <p className="mt-3 text-gray-600">
            Servicios relacionados con mi formación en desarrollo de software.
          </p>
        </header>
        <ul className="grid gap-6 md:grid-cols-3">
          <li className="rounded-2xl border bg-gray-50 p-7 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-green-700">Desarrollo web</h3>
            <p className="text-gray-600">Creación y desarrollo de páginas web.</p>
          </li>
          <li className="rounded-2xl border bg-gray-50 p-7 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-green-700">Desarrollo de software</h3>
            <p className="text-gray-600">Apoyo en proyectos de análisis y desarrollo de software.</p>
          </li>
          <li className="rounded-2xl border bg-gray-50 p-7 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-green-700">Bases de datos</h3>
            <p className="text-gray-600">Trabajo con bases de datos dentro de proyectos de software.</p>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Servicios;