import { useContext } from "react";
import { createContext, useState } from "react";
import { NotificacionesContext } from "./NotificacionesContext";

export const CandidatosContext = createContext();

export const CandidatosProvider = ({ children }) => {
  const [candidatos, setCandidatos] = useState([
    { nombre: "Hugo", votos: 0 },
    { nombre: "Paco", votos: 0 },
    { nombre: "Luis", votos: 0 },
  ]);
  const { setNotificacion } = useContext(NotificacionesContext);

  const votar = (votarPor) => {
    const nuevosVotos = votarPor.votos + 1;

    const nuevos = candidatos.map((candidato) => {
      if (candidato.nombre === votarPor.nombre) {
        return {
          ...candidato,
          votos: nuevosVotos,
        };
      }
      return { ...candidato };
    });

    setCandidatos(nuevos);
    setNotificacion(`Votaste por el candidato: ${votarPor.nombre}`);
  };

  const nuevoCandidato = (datosCandidato) => {
    if (datosCandidato !== null) {
      const nuevosCandidatos = [
        ...candidatos,
        { nombre: datosCandidato.firstName, votos: 0 },
      ];
      setCandidatos(nuevosCandidatos);
      setNotificacion("Candidato añadido");
    }
  };

  return (
    <CandidatosContext.Provider value={{ candidatos, votar, nuevoCandidato }}>
      {children}
    </CandidatosContext.Provider>
  );
};
