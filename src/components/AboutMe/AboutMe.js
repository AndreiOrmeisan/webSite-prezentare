import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function AboutMe() {
  return (
    <Container maxWidth="sm">
      <Card sx={{ maxWidth: 800 }}>
        <CardMedia sx={{ height: 100 }} title="C#" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Details
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Later...
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
