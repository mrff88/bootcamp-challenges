import { Card, CardContent, Typography, Grid } from "@mui/material";
import { useContext } from "react";
import { CandidatosContext } from "../utils/CandidatosContext";

export const Porcentaje = () => {
  const { candidatos } = useContext(CandidatosContext);
  const total = candidatos.reduce(
    (accumulator, candidato) => accumulator + candidato.votos,
    0
  );

  return (
    <Grid item xs={12} md={6}>
      <Card>
        <CardContent>
          <Typography variant="h5">Porcentaje:</Typography>

          <Grid container item spacing={2}>
            {candidatos.map((candidato) => (
              <Grid item xs={12} md={4} key={candidato.nombre}>
                <Typography variant="h3">
                  {total !== 0
                    ? ((candidato.votos / total) * 100).toFixed(0) + "%"
                    : "0%"}
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  {candidato.nombre}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
