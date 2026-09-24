const habilidades = [
  "Análisis y desarrollo de software",
  "Trabajo en equipo",
  "Responsabilidad",
  "Puntualidad",
  "Dedicación",
];

const Habilidades = () => {
  return (
    <section id="habilidades" className="bg-slate-50 px-6 py-20">
      <article className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <section>
          <p className="text-sm font-bold uppercase tracking-wider text-blue-600">Fortalezas</p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 md:text-4xl">
            Habilidades
          </h2>
          <p className="mt-4 leading-7 text-gray-600">
            Cualidades y área de formación que forman parte de mi perfil.
          </p>
        </section>

        <ul className="grid gap-3 sm:grid-cols-2">
          {habilidades.map((habilidad) => (
            <li key={habilidad} className="rounded-xl border border-gray-200 bg-white px-5 py-4 font-semibold text-gray-700 shadow-sm">
              {habilidad}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Habilidades;