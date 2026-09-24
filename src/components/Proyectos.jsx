const Proyectos = () => {
  return (
    <section id="proyectos" className="bg-white px-6 py-20">
      <article className="mx-auto max-w-6xl">
        <header className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-purple-500">
            Mi trabajo
          </p>
          <h2 className="mt-2 font-serif text-4xl font-bold text-gray-900">
            Proyectos destacados
          </h2>
          <p className="mt-4 leading-7 text-gray-600">
            Un espacio para presentar proyectos desarrollados durante mi formación.
          </p>
        </header>

        <ul className="grid gap-7 md:grid-cols-2">
          <li>
            <article className="rounded-[1.75rem] bg-gradient-to-br from-rose-100 to-purple-100 p-8 shadow-sm">
              <p className="text-sm font-bold text-rose-600">Proyecto 01</p>
              <h3 className="mt-3 text-2xl font-bold text-gray-900">
                Solución digital
              </h3>
              <p className="mt-4 leading-7 text-gray-600">
                Espacio para presentar el objetivo, las tecnologías utilizadas
                y el resultado de un proyecto.
              </p>
              <p className="mt-6 font-semibold text-rose-600">Ver proyecto →</p>
            </article>
          </li>

          <li>
            <article className="rounded-[1.75rem] bg-gradient-to-br from-purple-100 to-pink-100 p-8 shadow-sm">
              <p className="text-sm font-bold text-purple-600">Proyecto 02</p>
              <h3 className="mt-3 text-2xl font-bold text-gray-900">
                Nuevo proyecto
              </h3>
              <p className="mt-4 leading-7 text-gray-600">
                Espacio preparado para agregar otro trabajo a tu portafolio.
              </p>
              <p className="mt-6 font-semibold text-purple-600">Ver proyecto →</p>
            </article>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Proyectos;