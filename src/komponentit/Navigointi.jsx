import { Link } from "react-router-dom";

function Navigointi({ suosikitMaara }) {
  return (
    <nav>
      <Link to="/">Kirjanurkka</Link>
      <div>
        <Link to="/">Etusivu</Link>
        <Link to="/haku">Haku</Link>
        <Link to="/suosikit">
          Suosikit {suosikitMaara > 0 && <span>({suosikitMaara})</span>}
        </Link>
      </div>
    </nav>
  );
}

export default Navigointi;

