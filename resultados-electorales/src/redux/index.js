import { configureStore } from "@reduxjs/toolkit";
import candidatoReducer from "./features/candidatosSlice";

export default configureStore({
  reducer: {
    candidatos: candidatoReducer,
  },
});
