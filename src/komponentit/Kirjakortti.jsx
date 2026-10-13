function Kirjakortti({ kirja, onSuosikkiPaina, onkoSuosikki }) {
  if (!kirja) return null;

  const kansikuva = kirja.cover_i
    ? `https://covers.openlibrary.org/b/id/${kirja.cover_i}-M.jpg`
    : "https://via.placeholder.com/150x220?text=Ei+kuvaa";

  const tekijat = Array.isArray(kirja.author_name) 
    ? kirja.author_name.join(", ") 
    : "Tuntematon tekijä";

  const julkaisuvuosi = kirja.first_publish_year || "Tuntematon vuosi";

  return (
    <div style={korttiTyylit.kortti}>
      <img 
        src={kansikuva} 
        alt={kirja.title || "Kirjan kansi"} 
        style={korttiTyylit.kuva} 
      />
      <div style={korttiTyylit.sisus}>
        <h3 style={korttiTyylit.nimi}>{kirja.title || "Ei nimeä"}</h3>
        <p style={korttiTyylit.tekija}>{tekijat}</p>
        <p style={korttiTyylit.vuosi}>Kirjattu: {julkaisuvuosi}</p>
        <button
          type="button"
          style={{
            ...korttiTyylit.suosikkiNappi,
            backgroundColor: onkoSuosikki ? "#800000" : "#3d3023",
          }}
          onClick={() => onSuosikkiPaina && onSuosikkiPaina(kirja)}
        >
          {onkoSuosikki ? "💔 Poista suosikeista" : "✨ Lisää aarteisiin"}
        </button>
      </div>
    </div>
  );
}

const korttiTyylit = {
  kortti: {
    backgroundColor: "#1f1912",
    border: "2px solid #5a4527",
    borderRadius: "6px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "10px",
    fontFamily: "Georgia, serif",
  },
  kuva: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "4px",
  },
  sisus: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  nimi: {
    fontSize: "1rem",
    color: "#f0e6d2",
    margin: "0 0 5px 0",
  },
  tekija: {
    fontSize: "0.85rem",
    color: "#a89880",
    margin: "0 0 5px 0",
  },
  vuosi: {
    fontSize: "0.8rem",
    color: "#8b7d6b",
    margin: "0 0 10px 0",
  },
  suosikkiNappi: {
    marginTop: "auto",
    border: "1px solid #8b6d3b",
    color: "#fff",
    padding: "8px",
    cursor: "pointer",
    borderRadius: "4px",
    fontSize: "0.85rem",
  },
};

export default Kirjakortti;