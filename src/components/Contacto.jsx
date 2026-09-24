const Contacto = () => {
  return (
    <section id="contacto" className="bg-gradient-to-r from-rose-500 to-purple-500 px-6 py-20 text-white">
      <article className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-rose-100">
          Contacto
        </p>
        <h2 className="mt-2 font-serif text-4xl font-bold">
          ¿Trabajamos juntas?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-rose-50">
          Agrega aquí tu correo, teléfono, GitHub o red profesional para que
          puedan contactarte.
        </p>
        <a href="#inicio" className="mt-8 inline-block rounded-full bg-white px-7 py-3 font-bold text-rose-600 shadow-md hover:bg-rose-50">
          Volver al inicio
        </a>
      </article>
    </section>
  );
};

export default Contacto;