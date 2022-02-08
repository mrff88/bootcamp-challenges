import { createSlice } from "@reduxjs/toolkit";

const candidatosSlice = createSlice({
  name: "candidatos",
  initialState: {
    candidatos: [],
  },
  reducers: {
    votar: (state, { payload: candidatoIndex }) => {
      state.candidatos[candidatoIndex].votos += 1;
    },
    nuevoCandidato: (state, { payload: candidato }) => {
      state.candidatos.push({
        nombre: `${candidato.nombre} ${candidato.apellido}`,
        votos: 0,
        propuestas: candidato.propuestas,
      });
    },
  },
});

export const { votar, nuevoCandidato } = candidatosSlice.actions;

export default candidatosSlice.reducer;
