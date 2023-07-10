import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function handleClick(route) {
    console.log(route);
    navigate(route);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => handleClick("/")}>
            About me
          </Button>
          <Button color="inherit" onClick={() => handleClick("/juniorMind")}>
            JuniorMind
          </Button>
          <Button color="inherit" onClick={() => handleClick("/beckEtAl")}>
            Beck et Al
          </Button>
          <Button color="inherit" onClick={() => handleClick("/cognizant")}>
            Cognizant
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
