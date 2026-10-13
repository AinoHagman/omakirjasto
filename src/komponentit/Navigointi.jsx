import { Link } from "react-router-dom";

function Navigointi({ suosikitMaara }) {
  return (
    <nav style={tyylit.palkki}>
      <Link to="/" style={tyylit.logo}>
        📚 Kirjanurkka
      </Link>
      <div style={tyylit.linkit}>
        <Link to="/" style={tyylit.linkki}>Etusivu</Link>
        <Link to="/haku" style={tyylit.linkki}>Haku</Link>
        <Link to="/suosikit" style={tyylit.linkki}>
          Suosikit {suosikitMaara > 0 && <span style={tyylit.maara}>({suosikitMaara})</span>}
        </Link>
      </div>
    </nav>
  );
}

const tyylit = {
  palkki: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1a140e",
    borderBottom: "2px solid #8b6d3b",
    padding: "15px 25px",
    fontFamily: "Georgia, serif",
  },
  logo: {
    color: "#d4af37",
    textDecoration: "none",
    fontSize: "1.3rem",
    fontWeight: "bold",
  },
  linkit: {
    display: "flex",
    gap: "20px",
  },
  linkki: {
    color: "#e6d3a3",
    textDecoration: "none",
    fontSize: "1rem",
  },
  maara: {
    color: "#ff6b6b",
    fontWeight: "bold",
  },
};

export default Navigointi;