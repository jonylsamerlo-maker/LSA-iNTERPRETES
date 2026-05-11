import ServiceCard from '../../components/ServiceCard/ServiceCard';
import './Home.css';

function Home({ servicios }) {
  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">
        <h1>Servicios LSA Accesibles</h1>

        <p>
          Facilitando la comunicación mediante
          Lengua de Señas Argentina.
        </p>

        <a href="#servicios" className="hero-btn">
          Ver servicios
        </a>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="services-section">
        <h2 className="section-title">
          Nuestros Servicios
        </h2>

        <div className="services-grid">
          {servicios.map((s) => (
            <ServiceCard
              key={s.id}
              service={s}
            />
          ))}
        </div>
      </section>

    </main>
  );
}

export default Home;