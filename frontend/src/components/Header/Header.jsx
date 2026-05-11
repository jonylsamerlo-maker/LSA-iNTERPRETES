import { Link } from 'react-router-dom';
import './Header.css';

function Header() {

  return (
    <header className="header">

      <h2 className="logo">
        LSA Accesibles
      </h2>

      <nav className="nav">

        <Link to="/">
          Inicio
        </Link>

        <Link to="/diccionario">
          Diccionario
        </Link>

        <Link to="/contacto">
          Contacto
        </Link>

      </nav>

    </header>
  );
}

export default Header;