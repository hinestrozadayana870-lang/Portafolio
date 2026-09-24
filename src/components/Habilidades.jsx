const habilidades = [
  "Análisis y desarrollo de software",
  "Trabajo en equipo",
  "Responsabilidad",
  "Puntualidad",
  "Dedicación",
];

const Habilidades = () => {
  return (
    <section id="habilidades" className="bg-rose-50 px-6 py-20">
      <article className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <section>
          <p className="text-sm font-bold uppercase tracking-wider text-rose-500">
            Mi perfil
          </p>
          <h2 className="mt-2 font-serif text-4xl font-bold text-gray-900">
            Habilidades que me representan
          </h2>
          <p className="mt-5 max-w-xl leading-7 text-gray-600">
            Cualidades y área de formación que hacen parte de mi perfil
            personal y académico.
          </p>
        </section>

        <ul className="grid gap-4 sm:grid-cols-2">
          {habilidades.map((habilidad, indice) => (
            <li
              key={habilidad}
              className="rounded-2xl border border-white bg-white px-5 py-5 font-semibold text-gray-700 shadow-sm"
            >
              <span className="mr-2 text-rose-400">♡</span>
              {habilidad}
              <span className="mt-2 block text-xs font-normal text-gray-400">
                0{indice + 1}
              </span>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Habilidades;