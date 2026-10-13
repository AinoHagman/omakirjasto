import { Link } from "react-router-dom";

function Navigointi({ suosikitMaara }) {
  return (
<header className="navbar-container">
      <nav className="nav-links">
        <Link to="/" className="nav-link">Etusivu</Link>
        <Link to="/haku" className="nav-link">Haku</Link>
        <Link to="/suosikit" className="nav-link">
          Suosikit {suosikitMaara > 0 && <span>({suosikitMaara})</span>}
        </Link>
      </nav>
    </header>
  );
}

export default Navigointi;

