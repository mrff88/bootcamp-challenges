import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export const Candidatos = () => {
  const candidatos = useSelector((state) => state.candidatos.candidatos);
  return (
    <Grid container item xs={12} md={6} spacing={2}>
      {candidatos.map((candidato, index) => {
        return (
          <Grid item xs={6} md={6} key={candidato.nombre}>
            <Card>
              <CardContent>
                <Typography variant="h3">{candidato.nombre}</Typography>
                <Typography variant="h5">
                  {candidato.propuestas || "no tiene propuestas "}
                </Typography>
                <Typography variant="h6">Votos: {candidato.votos}</Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
