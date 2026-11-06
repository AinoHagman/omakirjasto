import Kirjakortti from "../komponentit/Kirjakortti";

function Suosikit({ suosikit, onPoistaSuosikki }) {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Omat suosikit</h1>
      </div>

      {suosikit.length === 0 ? (
        <p className="loading-text">
          Et ole vielä lisännyt suosikkeja.
        </p>
      ) : (
        <section className="books-section">
          <div className="book-grid">
            {suosikit.map((kirja) => (
              <Kirjakortti
                key={kirja.key}
                kirja={kirja}
                onSuosikkiPaina={onPoistaSuosikki}
                onkoSuosikki={true}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default Suosikit;