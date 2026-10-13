import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navigointi from "./komponentit/Navigointi";
import Home from "./sivut/home";
import Haku from "./sivut/haku";
import Suosikit from "./sivut/suosikit";

function App() {
  const [suosikit, setSuosikit] = useState(() => {
    const tallennetut = localStorage.getItem("omat_kirjasuosikit");
    return tallennetut ? JSON.parse(tallennetut) : [];
  });

  useEffect(() => {
    localStorage.setItem("omat_kirjasuosikit", JSON.stringify(suosikit));
  }, [suosikit]);

  const kasitteleSuosikki = (kirja) => {
    const loytyyJo = suosikit.some((s) => s.key === kirja.key);
    if (loytyyJo) {
      setSuosikit(suosikit.filter((s) => s.key !== kirja.key));
    } else {
      setSuosikit([...suosikit, kirja]);
    }
  };

  return (
    <Router>
      <Navigointi suosikitMaara={suosikit.length} />
      <Routes>
        <Route 
          path="/" 
          element={<Home onLisaaSuosikki={kasitteleSuosikki} suosikit={suosikit} />} 
        />
        <Route 
          path="/haku" 
          element={<Haku onLisaaSuosikki={kasitteleSuosikki} suosikit={suosikit} />} 
        />
        <Route 
          path="/suosikit" 
          element={<Suosikit suosikit={suosikit} onPoistaSuosikki={kasitteleSuosikki} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;