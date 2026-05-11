import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

function ServiceCard({ service }) {
  const [isHover, setIsHover] = useState(false);
  const videoRef = useRef(null);
  const hasVideo = Boolean(service.videoPreview);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (isHover) {
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isHover]);

  return (
    <article
      className={`service-card ${isHover ? 'service-card--hover' : ''}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="service-card__media">
        {hasVideo ? (
          <video
            ref={videoRef}
            className="service-card__video"
            src={service.videoPreview}
            muted
            loop
            playsInline
            preload="metadata"
            poster={service.imagenIcono}
          />
        ) : (
          <img className="service-card__icon" src={service.imagenIcono} alt="" />
        )}
      </div>
      <h3 className="service-card__title">{service.titulo}</h3>
      <Link className="service-card__button" to={`/detalle/${service.id}`}>
        Saber mas
      </Link>
    </article>
  );
}

export default ServiceCard;
