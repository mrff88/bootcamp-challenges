import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Box, Rating } from "@mui/material";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "darkorchid",
  },
  "& .MuiRating-iconEmpty": {
    color: "darkorchid",
  },
});

const StyledButton = styled(Button)({
  textTransform: "none",
  fontSize: "1.2rem",
  fontWeight: "normal",
});

export const CustomCard = ({ cardData }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          maxWidth: "25rem",
          border: 4,
          borderColor: "darkorchid",
          padding: "1rem",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            alt={cardData.name}
            src={cardData.url}
            sx={{
              width: 150,
              height: 150,
              border: 3,
              borderColor: "white",
              outline: 3,
              outlineColor: "darkorchid",
              outlineStyle: "solid",
              marginBottom: "1rem",
            }}
          />
          <Typography
            color="secondary"
            sx={{ fontWeight: "bold" }}
            variant="h6"
          >
            {cardData.name}
          </Typography>
          <StyledRating
            sx={{ marginBottom: "0.5rem" }}
            name="read-only"
            value={cardData.rating}
            readOnly
          />
          <Typography
            variant="p"
            sx={{ textAlign: "justify", fontWeight: "500" }}
          >
            {" "}
            {cardData.description}{" "}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <StyledButton
            sx={{ width: "50%" }}
            color="secondary"
            size="large"
            variant="outlined"
          >
            Read More
          </StyledButton>
          <StyledButton
            sx={{ width: "50%" }}
            color="secondary"
            size="large"
            variant="contained"
          >
            Contact
          </StyledButton>
        </CardActions>
      </Card>
    </Box>
  );
};
