import { useState } from 'react';
import './Contacto.css';

function Contacto() {

  const [enviando, setEnviando] = useState(false);

  const handleSubmit = (e) => {

    e.preventDefault();

    setEnviando(true);

    setTimeout(() => {
      setEnviando(false);
      alert('Mensaje enviado correctamente');
    }, 2000);
  };

  return (

    <section className="contacto">

      <h1>Contacto</h1>

      <p>
        ¿Necesitás más información?
        Completá el formulario y nos comunicaremos con vos.
      </p>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          placeholder="Ingrese su nombre"
          required
        />

        <input
          type="email"
          placeholder="Ingrese su email"
          required
        />

        <textarea
          placeholder="Escriba su mensaje"
          rows="6"
          required
        />

        <button type="submit">

          {enviando
            ? 'Enviando...'
            : 'Enviar'}

        </button>

      </form>

    </section>
  );
}

export default Contacto;