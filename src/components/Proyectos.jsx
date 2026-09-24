const Proyectos = () => {
  return (
    <section id="proyectos" className="bg-white px-6 py-20">
      <article className="mx-auto max-w-6xl">
        <header className="mb-10 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-600">Trabajo</p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 md:text-4xl">
            Proyectos
          </h2>
          <p className="mt-4 leading-7 text-gray-600">
            Espacio para mostrar trabajos y proyectos desarrollados durante la formación.
          </p>
        </header>

        <ul className="grid gap-6 md:grid-cols-2">
          <li>
            <article className="rounded-2xl border border-gray-200 bg-slate-950 p-8 text-white">
              <p className="text-sm font-bold text-blue-400">Proyecto de formación</p>
              <h3 className="mt-3 text-2xl font-bold">Solución digital</h3>
              <p className="mt-4 leading-7 text-slate-300">
                Aquí puedes presentar el objetivo, las tecnologías utilizadas
                y el resultado de uno de tus proyectos.
              </p>
            </article>
          </li>
          <li>
            <article className="rounded-2xl border border-gray-200 bg-blue-50 p-8">
              <p className="text-sm font-bold text-blue-600">Próximo proyecto</p>
              <h3 className="mt-3 text-2xl font-bold text-gray-900">Nuevo trabajo</h3>
              <p className="mt-4 leading-7 text-gray-600">
                Espacio preparado para agregar otro proyecto de tu portafolio.
              </p>
            </article>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Proyectos;