const Contacto = () => {
  return (
    <section id="contacto" className="bg-blue-600 px-6 py-20 text-white">
      <article className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-blue-100">Contacto</p>
        <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
          Hablemos sobre tu próximo proyecto
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
          Agrega aquí tu correo, teléfono, GitHub o red profesional para que
          las personas puedan contactarte.
        </p>
        <a href="#inicio" className="mt-8 inline-block rounded-xl bg-white px-6 py-3 font-bold text-blue-700 hover:bg-blue-50">
          Volver al inicio
        </a>
      </article>
    </section>
  );
};

export default Contacto;