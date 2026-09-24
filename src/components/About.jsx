const About = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-rose-50 via-white to-purple-50 px-6 py-24 md:py-32">
      <article className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <section id="sobre-mi">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-rose-500">
            Portafolio de servicios
          </p>

          <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
            Hola, soy{" "}
            <span className="font-serif italic text-rose-600">Leydi Dayana</span>
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-purple-700 md:text-3xl">
            Estudiante de Análisis y Desarrollo de Software
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Presento servicios relacionados con el desarrollo de soluciones
            digitales, interfaces web y proyectos de software.
          </p>

          <ul className="mt-8 flex flex-wrap gap-3">
            <li className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-rose-700 shadow-sm ring-1 ring-rose-100">
              Responsable
            </li>
            <li className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-purple-700 shadow-sm ring-1 ring-purple-100">
              Puntual
            </li>
            <li className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-rose-700 shadow-sm ring-1 ring-rose-100">
              Dedicada
            </li>
            <li className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-purple-700 shadow-sm ring-1 ring-purple-100">
              Trabajo en equipo
            </li>
          </ul>

          <a href="#servicios" className="mt-8 inline-block rounded-full bg-rose-500 px-7 py-3 font-bold text-white shadow-md hover:bg-rose-600">
            Conocer mis servicios
          </a>
        </section>

        <aside className="rounded-[2rem] border border-white bg-white p-8 text-center shadow-xl shadow-rose-100">
          <p className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-purple-400 text-3xl font-bold text-white">
            LD
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-rose-500">
            Mi enfoque
          </p>
          <h3 className="mt-2 text-2xl font-bold text-gray-900">
            Soluciones sencillas, bonitas y organizadas
          </h3>
          <p className="mt-4 leading-7 text-gray-600">
            Un espacio para presentar mis capacidades, servicios y proyectos
            relacionados con mi formación.
          </p>
        </aside>
      </article>
    </section>
  );
};

export default About;