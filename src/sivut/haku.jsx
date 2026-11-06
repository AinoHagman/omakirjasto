import { useState } from "react";
import Kirjakortti from "../komponentit/Kirjakortti";

function Haku({ onLisaaSuosikki, suosikit = [] }) {
  const [hakusana, setHakusana] = useState("");
  const [tulokset, setTulokset] = useState([]);
  const [latautuu, setLatautuu] = useState(false);
  const [haettu, setHaettu] = useState(false);


  const teeHaku = async (e) => {
    e.preventDefault();
    if (!hakusana.trim()) return;
    setHaettu(true);
    setLatautuu(true);
    try {
      const vastaus = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(hakusana)}&limit=10`);
      const data = await vastaus.json();
      setTulokset(data.docs || []);
    } catch (virhe) {
      console.error("Virhe haussa:", virhe);
    } finally {
      setLatautuu(false);
    }
  };

  return (
  <div className="home-container">
    <div className="home-header">
      <h1>Hae kirjoja</h1>
    </div>

    <form onSubmit={teeHaku} className="search-form">
      <input
        className="search-input"
        type="text"
        value={hakusana}
        onChange={(e) => setHakusana(e.target.value)}
        placeholder="Kirjoita kirjan nimi..."
      />

      <button className="btn-primary" type="submit">
        Hae
      </button>
    </form>

    {latautuu && (
      <p className="loading-text">Etsitään kirjoja...</p>
    )}
    {haettu && !latautuu && tulokset.length === 0 && (
      <p className="loading-text">
        hakutuloksia ei löytynyt. Yritä uudelleen.
      </p>
    )}

    <section className="books-section">
      <div className="book-grid">
        {tulokset.map((kirja, indeksi) => {
          const onkoSuosikki =
            Array.isArray(suosikit) &&
            suosikit.some((s) => s?.key === kirja?.key);

          return (
            <Kirjakortti
              key={kirja.key || indeksi}
              kirja={kirja}
              onSuosikkiPaina={onLisaaSuosikki}
              onkoSuosikki={onkoSuosikki}
            />
          );
        })}
      </div>
    </section>
  </div>
);
}

export default Haku;
