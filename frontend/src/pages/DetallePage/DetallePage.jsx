import { Link, useParams } from 'react-router-dom';
import './DetallePage.css';

function DetallePage({ servicios }) {
  const { id } = useParams();
  const servicio = servicios.find(item => item.id === id);
  const videoUrl = servicio?.videoExplicativo || servicio?.videoUrl || servicio?.videoPreview;

  if (!servicio) {
    return (
      <main className="page detail-page">
        <h1>Cargando...</h1>
      </main>
    );
  }

  return (
    <main className="page detail-page">
      <h1>{servicio.titulo}</h1>
      <div className="detail-page__video-box">
        {videoUrl ? (
          <video
            className="detail-page__video"
            src={videoUrl}
            controls
            playsInline
            preload="metadata"
          />
        ) : (
          <p>Aqui ira el video de YouTube: {servicio.youtubeId}</p>
        )}
      </div>
      <h2>Costo del servicio: ${servicio.precio}</h2>
      <Link className="detail-page__back" to="/">
        Volver al inicio
      </Link>
    </main>
  );
}

export default DetallePage;
