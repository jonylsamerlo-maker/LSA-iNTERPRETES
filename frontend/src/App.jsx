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

function App() {

  const [servicios, setServicios] = useState([]);

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

      .catch(() => setServicios([]));

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