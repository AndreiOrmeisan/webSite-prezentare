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
      <div className="container-aboutMe">
        <Card
          title="About me"
          text={
            <ui>
              <li>
                Extensive experience in developing and maintaining web
                application using <b>JavaScript</b>
              </li>
              <li>
                Proficient in technologies such as <b>React.js</b>,
                <b> Node.js</b>, <b> Jest</b>, <b> HTML </b>
                and <b>CSS</b>
              </li>
              <li>
                Skilledin utilizing tools like <b>JIRA</b>, <b> Git</b>,
                <b> MySQL</b>, <b> Oracle SQL Developer</b>,
                <b> MongoDB Atlas</b>, <b> Postman</b>, <b> ServiceBus</b>,
                <b> Confluence</b>, <b> Robo 3T </b> and <b>Lucidchart</b>
              </li>
              <li>
                Possess strong analytical, debugging, and troubleshooting
                skills, with a proven ability to learn and adapt quickly
              </li>
            </ui>
          }
        />
      </div>
    </div>
  );
}
