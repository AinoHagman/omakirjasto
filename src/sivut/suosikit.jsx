import Kirjakortti from "../komponentit/Kirjakortti";

function Suosikit({ suosikit, onPoistaSuosikki }) {
  return (
    <div style={{ backgroundColor: "#2b2319", color: "#e6d3a3", minHeight: "100vh", padding: "30px 20px", fontFamily: "Georgia, serif" }}>
      <h1 style={{ textAlign: "center", color: "#d4af37", marginBottom: "20px" }}>⭐ Omat Suosikit</h1>
      {suosikit.length === 0 ? (
        <p style={{ textAlign: "center", fontStyle: "italic" }}>Ei vielä tallennettuja kirjoja.</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "20px", maxWidth: "1100px", margin: "0 auto" }}>
          {suosikit.map((kirja) => (
            <Kirjakortti
              key={kirja.key}
              kirja={kirja}
              onSuosikkiPaina={onPoistaSuosikki}
              onkoSuosikki={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Suosikit;