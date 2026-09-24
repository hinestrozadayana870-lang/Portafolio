const servicios = [
  {
    numero: "01",
    nombre: "Desarrollo web",
    texto: "Creación de interfaces web sencillas, organizadas y adaptables a diferentes pantallas.",
    fondo: "bg-rose-50",
    color: "text-rose-600",
  },
  {
    numero: "02",
    nombre: "Análisis de software",
    texto: "Apoyo en el análisis, organización y definición de soluciones para proyectos de software.",
    fondo: "bg-purple-50",
    color: "text-purple-600",
  },
  {
    numero: "03",
    nombre: "Bases de datos",
    texto: "Organización de información y estructuras de datos para proyectos de software.",
    fondo: "bg-pink-50",
    color: "text-pink-600",
  },
];

const Servicios = () => {
  return (
    <section id="servicios" className="bg-white px-6 py-20">
      <article className="mx-auto max-w-6xl">
        <header className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-rose-500">
            Lo que puedo ofrecer
          </p>
          <h2 className="mt-2 font-serif text-4xl font-bold text-gray-900">
            Mis servicios
          </h2>
          <p className="mt-4 text-gray-600">
            Áreas relacionadas con mi formación en Análisis y Desarrollo de Software.
          </p>
        </header>

        <ul className="grid gap-7 md:grid-cols-3">
          {servicios.map((servicio) => (
            <li key={servicio.nombre}>
              <article className={"h-full rounded-[1.75rem] border border-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg " + servicio.fondo}>
                <p className={"text-sm font-extrabold " + servicio.color}>{servicio.numero}</p>
                <h3 className="mt-5 text-xl font-bold text-gray-900">{servicio.nombre}</h3>
                <p className="mt-4 leading-7 text-gray-600">{servicio.texto}</p>
                <p className={"mt-6 font-semibold " + servicio.color}>Conocer más →</p>
              </article>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Servicios;