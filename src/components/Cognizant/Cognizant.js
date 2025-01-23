import Card from "../Utils/Card";
import * as React from "react";
import "./Cognizant.css";

const jobInfo = [
  {
    id: 1,
    title: "Description",
    text: (
      <ul>
        <li>
          Development, troubleshooting and maintenance of website software
          taking into account customer requirements
        </li>
        <li>
          Experienced Web Developer with a strong background in front-end
          development, and solid experience working on back-end.
        </li>
        <li>
          Contributed to diverse projects across industries such as HR,
          pharmacy, banking and education.
        </li>
      </ul>
    ),
  },
  {
    id: 2,
    title: "Description",
    text: (
      <ul>
        <li>
          Proficient in modern technologies including JavaScript, React.js,
          Node.js and TypeScript.
        </li>
        <li>
          Skilled in building intuitive and responsive user interfaces using
          HTML, CSS or SCSS.
        </li>
        <li>Experienced with database management using MongoDB</li>
      </ul>
    ),
  },
  {
    id: 3,
    title: "Description",
    text: (
      <ul>
        <li>
          Adept at implementing scalable and high-performance solutions in Agile
          team environments.
        </li>
        <li>
          Strong experience with version control systems, particularly Git
        </li>
        <li>
          Passionate about solving complex problems and delivering robust and
          secure functionalities
        </li>
      </ul>
    ),
  },
  {
    id: 4,
    title: "Tech stack",
    text: (
      <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React.Js</li>
        <li>Node.Js</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    id: 5,
    title: "Tools",
    text: (
      <ul>
        <li>GitHub</li>
        <li>Visual Studio Code</li>
        <li>Atlas MongoDB</li>
        <li>Postman</li>
      </ul>
    ),
  },
];

export default function Cognizant() {
  return (
    <div className="container">
      {jobInfo.map((info) => (
        <Card
          sx={{ maxWidth: 800 }}
          id={info.id}
          title={info.title}
          text={info.text}
        />
      ))}
    </div>
  );
}
