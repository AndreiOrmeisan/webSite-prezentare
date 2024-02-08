import "./AboutMe.css";

import { Avatar } from "@mui/material";
import * as React from "react";
import profilImage from "./profilImage.JPG";
import Card from "../Utils/Card";

export default function AboutMe() {
  return (
    <div className="wrapper-aboutMe-oa">
      <div className="avatar-oa">
        <Avatar
          alt="Ormenisan Andrei"
          src={profilImage}
          sx={{ width: 250, height: 250 }}
        />
      </div>
      <Card
        title="Description"
        text="I am a web developer, I work in both frontend and backend. Developing, troubleshooting and maintaining website software according
          to client's requirements."
      />
      <Card
        title="Description"
        text="I am a web developer, I work in both frontend and backend. Developing, troubleshooting and maintaining website software according
          to client's requirements."
      />
      <Card
        title="Description"
        text="I am a web developer, I work in both frontend and backend. Developing, troubleshooting and maintaining website software according
        to client's requirements."
      />
    </div>
  );
}
