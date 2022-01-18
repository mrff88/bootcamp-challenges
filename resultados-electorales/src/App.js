import { useState } from "react";
import { Elecciones } from "./pages/Elecciones";
import { CandidatosContext } from "./utils/CandidatosContext";

function App() {
  const [candidatos, setCandidatos] = useState([
    { nombre: "Hugo", votos: 0 },
    { nombre: "Paco", votos: 0 },
    { nombre: "Luis", votos: 0 },
  ]);

  return (
    <CandidatosContext.Provider value={{ candidatos, setCandidatos }}>
      <Elecciones />;
    </CandidatosContext.Provider>
  );
}

export default App;
