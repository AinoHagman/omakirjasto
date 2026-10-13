import { useState } from "react";
import Kirjakortti from "../komponentit/Kirjakortti";

function Haku({ onLisaaSuosikki, suosikit = [] }) {
  const [hakusana, setHakusana] = useState("");
  const [tulokset, setTulokset] = useState([]);
  const [latautuu, setLatautuu] = useState(false);

  const teeHaku = async (e) => {
    e.preventDefault();
    if (!hakusana.trim()) return;

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
    <div>
      <h1>Hae kirjoja</h1>
      <form onSubmit={teeHaku}>
        <input
          type="text"
          value={hakusana}
          onChange={(e) => setHakusana(e.target.value)}
          placeholder="Kirjoita kirjan nimi..."
        />
        <button type="submit">Hae</button>
      </form>

      {latautuu && <p>Etsitään...</p>}

      <div>
        {tulokset.map((kirja, indeksi) => {
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
    </div>
  );
}

export default Haku;
