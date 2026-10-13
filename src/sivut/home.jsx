import "../App.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Kirjakortti from "../komponentit/Kirjakortti";

function Home({ onLisaaSuosikki, suosikit = [] }) {
  const [kirjat, setKirjat] = useState([]);
  const [latautuu, setLatautuu] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let onAktiivinen = true;

    const haeKirjat = async () => {
      try {
        const vastaus = await fetch("https://openlibrary.org/search.json?q=bestseller&limit=6");
        const data = await vastaus.json();
        if (onAktiivinen) {
          setKirjat(data.docs || []);
        }
      } catch (virhe) {
        console.error("Virhe haettaessa kirjoja:", virhe);
      } finally {
        if (onAktiivinen) {
          setLatautuu(false);
        }
      }
    };

    haeKirjat();

    return () => {
      onAktiivinen = false;
    };
  }, []);

return (
    <div className="home-container">
      <header className="home-header">
        <h1>Kirjanurkka</h1>
        <blockquote className="quote-box">
          <p>
            ”Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.”
          </p>
          <footer>— Neil Gaiman, <em>Coraline</em></footer>
        </blockquote>
      </header>

      <div className="home-actions">
        <button className="btn-primary" onClick={() => navigate("/haku")}>
          Hae kirjoja
        </button>
      </div>

      <section className="books-section">
        <h2>Suositellut kirjat</h2>

        {latautuu ? (
          <p className="loading-text">Ladataan kirjoja...</p>
        ) : (
          <div className="book-grid">
            {kirjat && kirjat.map((kirja, indeksi) => {
              const onkoSuosikki = Array.isArray(suosikit) && suosikit.some((s) => s?.key === kirja?.key);
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
        )}
      </section>
    </div>
  );
}
export default Home;