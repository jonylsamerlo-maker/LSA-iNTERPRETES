import { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton.jsx';

import Home from './pages/Home/Home.jsx';
import DetallePage from './pages/DetallePage/DetallePage.jsx';
import Diccionario from './pages/Diccionario/Diccionario.jsx';
import Contacto from './pages/Contacto/Contacto.jsx';

import './styles/global.css';

const fallbackServicios = [
  {
    id: 'interpretacion',
    titulo: 'Interpretacion en LSA',
    imagenIcono: '/imagenes/interpetacion.png',
    videoPreview: 'https://res.cloudinary.com/dazrigpz7/video/upload/v1778451849/VID-20260510-WA0043_cr7r59.mp4',
    videoExplicativo: 'https://res.cloudinary.com/dazrigpz7/video/upload/v1778451849/VID-20260510-WA0043_cr7r59.mp4',
    youtubeId: 'dQw4w9WgXcQ',
    precio: 12000
  },
  {
    id: 'capacitacion',
    titulo: 'Judicial',
    imagenIcono: '/imagenes/juzgado.jpg',
    videoPreview: 'https://res.cloudinary.com/dazrigpz7/video/upload/v1778451849/VID-20260510-WA0042_ri8f5y.mp4',
    videoExplicativo: 'https://res.cloudinary.com/dazrigpz7/video/upload/v1778451849/VID-20260510-WA0042_ri8f5y.mp4',
    youtubeId: 'dQw4w9WgXcQ',
    precio: 18000
  },
  {
    id: 'subtitulado',
    titulo: 'Medico',
    imagenIcono: '/imagenes/medico.webp',
    videoPreview: 'https://res.cloudinary.com/dazrigpz7/video/upload/v1778451848/VID-20260510-WA0041_ufhafa.mp4',
    videoExplicativo: 'https://res.cloudinary.com/dazrigpz7/video/upload/v1778451848/VID-20260510-WA0041_ufhafa.mp4',
    youtubeId: 'dQw4w9WgXcQ',
    precio: 15000
  }
];

function App() {

  const [servicios, setServicios] = useState(fallbackServicios);

  useEffect(() => {

    const apiUrl =
      import.meta.env.VITE_API_URL ||
      'http://localhost:3000';

    fetch(`${apiUrl}/servicios`)

      .then(res => {

        if (!res.ok) {
          throw new Error(
            'No se pudieron cargar los servicios'
          );
        }

        return res.json();
      })

      .then(data => setServicios(data))

      .catch(() => setServicios(fallbackServicios));

  }, []);

  return (

    <Router>

      <div className="app-shell">

        <Header />

        <Routes>

          <Route
            path="/"
            element={
              <Home servicios={servicios} />
            }
          />

          <Route
            path="/detalle/:id"
            element={
              <DetallePage servicios={servicios} />
            }
          />

          <Route
            path="/diccionario"
            element={<Diccionario />}
          />

          <Route
            path="/contacto"
            element={<Contacto />}
          />

        </Routes>

        <WhatsAppButton />

        <Footer />

      </div>

    </Router>
  );
}

export default App;
