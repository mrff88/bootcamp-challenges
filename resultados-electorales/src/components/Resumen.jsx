import { Escrutinio } from "./Escrutinio";
import { Porcentaje } from "./Porcentaje";
import { Total } from "./Total";

export const Resumen = () => {
  return (
    <>
      <Total />
      <Escrutinio />
      <Porcentaje />
    </>
  );
};
