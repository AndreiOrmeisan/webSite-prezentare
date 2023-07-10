import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body2" color="text.secondary">
            I am a web developer, I work in both frontend and backend.
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Developing, troubleshooting and maintaining website software according to client's requirements.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Me
            </Typography>
            <Typography variant="body2" color="text.secondary">
              11C Republicii Street, Apahida, Cluj
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: ormenisanandrei0102@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +40 751 259 269
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Me
            </Typography>
            <Link href="https://github.com/AndreiOrmeisan" color="inherit">
              <GitHub />
            </Link>
            <Link href="https://www.linkedin.com/in/ormenisan-andrei-a9524516a/" color="inherit">
              <LinkedIn />
            </Link>
            <Link
              href="https://www.instagram.com/andreiormenisan/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}