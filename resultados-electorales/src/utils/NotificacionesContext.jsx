import { useState } from "react";
import { createContext } from "react";
import { Notificaciones } from "../components/Notificaciones";

export const NotificacionesContext = createContext();

export const NotificacionesProvider = ({ children }) => {
  const [notificacion, setNotificacion] = useState("Mensaje de prueba");

  return (
    <NotificacionesContext.Provider value={{ notificacion, setNotificacion }}>
      {children}
      <Notificaciones />
    </NotificacionesContext.Provider>
  );
};
