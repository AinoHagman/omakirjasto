import Kirjakortti from "../komponentit/Kirjakortti";

function Suosikit({ suosikit, onPoistaSuosikki }) {
  return (
    <div>
      <h1>Omat Suosikit</h1>
      {suosikit.length === 0 ? (
        <p>Ei vielä tallennettuja kirjoja.</p>
      ) : (
        <div>
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
