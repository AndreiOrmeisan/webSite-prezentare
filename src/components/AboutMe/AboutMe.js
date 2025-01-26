import "./AboutMe.css";

import { Avatar } from "@mui/material";
import * as React from "react";
import profilImage from "./profilImage.JPG";
import Card from "../Utils/Card";
import SkillMeter from "../Utils/SkillMeter";
import HexagonGrid from "../Utils/HexagonGrid";
import { Group, Whatshot, Autorenew, Lightbulb } from "@mui/icons-material";

const skills = [
  { skill: "JavaScript", percentage: 100, color: "#F7DF1E" },
  { skill: "React.js", percentage: 70, color: "#61DAFB" },
  { skill: "Node.js", percentage: 40, color: "#68A063" },
  { skill: "HTML", percentage: 80, color: "#E34F26" },
  { skill: "CSS", percentage: 80, color: "#1572B6" },
];

const hexagons = [
  {
    id: 1,
    title: "Team player",
    description: "More info about Hexagon 1",
    icon: <Group style={{ fontSize: 80, color: "#D4AF37" }} />,
  },
  {
    id: 2,
    title: "Motivated",
    description: "More info about Hexagon 2",
    icon: <Whatshot style={{ fontSize: 80, color: "#D4AF37" }} />,
  },
  {
    id: 3,
    title: "Easy to adapt to change",
    description: "More info about Hexagon 3",
    icon: <Autorenew style={{ fontSize: 80, color: "#D4AF37" }} />,
  },
  {
    id: 4,
    title: "Focus on problem solving",
    description: "More info about Hexagon 4",
    icon: <Lightbulb style={{ fontSize: 80, color: "#D4AF37" }} />,
  },
];

export default function AboutMe() {
  return (
    <div className="aboutMe">
      <div className="avatar-oa">
        <Avatar
          alt="Ormenisan Andrei"
          src={profilImage}
          sx={{ width: 250, height: 250 }}
        />
      </div>
      <div className="container-aboutMe">
        <div className="skillMeterWrapper">
          <h3 style={{ color: "white" }}>
            I have 4 years of experience. During these 4 years, I worked with
            the following technologies in the given proportions :
          </h3>
          <div className="skillMeterContainer">
            {skills.map((skill) => (
              <SkillMeter
                key={skill.skill}
                skill={skill.skill}
                percentage={skill.percentage}
                color={skill.color}
              />
            ))}
          </div>
        </div>
        <div className="wrapper-aboutMe-oa">
          <div className="card-aboutMe">
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
      </div>
      <HexagonGrid hexagons={hexagons} />
    </div>
  );
}
