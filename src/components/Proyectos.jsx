const Proyectos = () => {
  return (
    <section id="proyectos" className="bg-white px-6 py-20">
      <article className="mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Proyectos</h2>
          <p className="mt-3 text-gray-600">
            Proyectos desarrollados durante mi formación.
          </p>
        </header>
        <ul className="grid gap-6 md:grid-cols-2">
          <li className="rounded-2xl border bg-gray-50 p-8 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-green-700">Proyecto de formación</h3>
            <p className="text-gray-600">
              Espacio preparado para agregar la información del proyecto que deseas presentar.
            </p>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Proyectos;