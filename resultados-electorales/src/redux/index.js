import { configureStore } from "@reduxjs/toolkit";
import candidatosReducer from "./features/candidatosSlice";
import notificacionesReducer from "./features/notificacionesSlice";
import applicationStateObject from "../utils/applicationStateObject";

const applicationState = "applicationState";

const localStorageMiddleware = (store) => {
  return (next) => (action) => {
    const result = next(action);
    if (action.type.includes("candidatos/")) {
      localStorage.setItem(
        applicationState,
        JSON.stringify({ candidatos: store.getState().candidatos })
      );
    }
    return result;
  };
};

const loadStateFromLocalStorage = () => {
  localStorage.getItem(applicationState) === null &&
    localStorage.setItem(
      applicationState,
      JSON.stringify(applicationStateObject)
    );
  if (localStorage.getItem(applicationState) !== null) {
    return JSON.parse(localStorage.getItem(applicationState));
  }
};

export default configureStore({
  reducer: {
    candidatos: candidatosReducer,
    notificaciones: notificacionesReducer,
  },
  preloadedState: loadStateFromLocalStorage(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
