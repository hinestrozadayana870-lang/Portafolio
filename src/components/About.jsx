const About = () => {
  return (
    <section id="inicio" className="bg-slate-950 px-6 py-24 text-white md:py-32">
      <article className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <section id="sobre-mi">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            Portafolio de servicios
          </p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Leydi Dayana Hinestroza
          </h1>
          <h2 className="mt-5 text-2xl font-semibold text-slate-200 md:text-3xl">
            Análisis y Desarrollo de Software
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Portafolio enfocado en soluciones digitales, desarrollo web y apoyo
            en proyectos de software.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            <li className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200">Responsabilidad</li>
            <li className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200">Puntualidad</li>
            <li className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200">Trabajo en equipo</li>
          </ul>
          <a href="#servicios" className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700">
            Ver servicios
          </a>
        </section>

        <aside className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <p className="text-sm font-semibold text-blue-400">Perfil</p>
          <h3 className="mt-3 text-2xl font-bold">Soluciones sencillas y organizadas</h3>
          <p className="mt-4 leading-7 text-slate-300">
            En este portafolio se presentan áreas de servicio y proyectos
            relacionados con mi formación en software.
          </p>
        </aside>
      </article>
    </section>
  );
};

export default About;