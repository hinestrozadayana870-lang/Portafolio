const Habilidades = () => {
  return (
    <section id="habilidades" className="bg-gray-50 px-6 py-20">
      <article className="mx-auto max-w-5xl text-center">
        <h2 className="mb-10 text-3xl font-bold text-gray-900">Habilidades</h2>
        <ul className="flex flex-wrap justify-center gap-4">
          <li className="rounded-full bg-green-100 px-5 py-3 font-semibold text-green-800">Puntualidad</li>
          <li className="rounded-full bg-green-100 px-5 py-3 font-semibold text-green-800">Responsabilidad</li>
          <li className="rounded-full bg-green-100 px-5 py-3 font-semibold text-green-800">Dedicación</li>
          <li className="rounded-full bg-green-100 px-5 py-3 font-semibold text-green-800">Trabajo en equipo</li>
          <li className="rounded-full bg-green-100 px-5 py-3 font-semibold text-green-800">Análisis y desarrollo de software</li>
        </ul>
      </article>
    </section>
  );
};

export default Habilidades;