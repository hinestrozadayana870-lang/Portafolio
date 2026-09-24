const servicios = [
  {
    nombre: "Desarrollo web",
    texto: "Creación de interfaces web sencillas, organizadas y adaptables a diferentes pantallas.",
  },
  {
    nombre: "Análisis de software",
    texto: "Apoyo en el análisis, organización y definición de soluciones para proyectos de software.",
  },
  {
    nombre: "Bases de datos",
    texto: "Organización de información y estructuras de datos para proyectos de software.",
  },
];

const Servicios = () => {
  return (
    <section id="servicios" className="bg-white px-6 py-20">
      <article className="mx-auto max-w-6xl">
        <header className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-600">Lo que presento</p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 md:text-4xl">
            Servicios
          </h2>
          <p className="mt-4 text-gray-600">
            Áreas relacionadas con mi formación en Análisis y Desarrollo de Software.
          </p>
        </header>

        <ul className="grid gap-6 md:grid-cols-3">
          {servicios.map((servicio, indice) => (
            <li key={servicio.nombre}>
              <article className="h-full rounded-2xl border border-gray-200 bg-gray-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <p className="text-sm font-bold text-blue-600">0{indice + 1}</p>
                <h3 className="mt-4 text-xl font-bold text-gray-900">{servicio.nombre}</h3>
                <p className="mt-3 leading-7 text-gray-600">{servicio.texto}</p>
              </article>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Servicios;