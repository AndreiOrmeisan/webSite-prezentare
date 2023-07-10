import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function JuniorMind() {
  return (
    <Container maxWidth="sm">
      <Card sx={{ maxWidth: 800 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            JuniorMind
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Details...
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 800 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Tools
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Postman
          </Typography>
          <Typography variant="body2" color="text.secondary">
            GitHub
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
