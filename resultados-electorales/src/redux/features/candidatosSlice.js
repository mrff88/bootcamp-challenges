import { createSlice } from "@reduxjs/toolkit";

export const canditadosSlice = createSlice({
  name: "candidatos",
  initialState: {
    candidatos: [
      { nombre: "Hugo", votos: 0, propuestas: "mis propuestas son muy buenas" },
      { nombre: "Paco", votos: 0, propuestas: "mis propuestas son mejores" },
      {
        nombre: "Luis",
        votos: 0,
        propuestas: "mis propuestas son las mejores",
      },
    ],
  },
  reducers: {
    votar: (state, { payload }) => {
      state.candidatos[payload].votos += 1;
    },
    nuevoCandidato: (state, { payload: candidato }) => {
      if (candidato !== null) {
        state.candidatos.push({
          nombre: candidato.firstName,
          votos: 0,
          propuestas: candidato.propuestas,
        });
      }
    },
  },
});

export const { votar, nuevoCandidato } = canditadosSlice.actions;

export default canditadosSlice.reducer;
