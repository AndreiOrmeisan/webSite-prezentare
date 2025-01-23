import Card from "../Utils/Card";
import * as React from "react";
import "./BeckEtAl.css";

const jobInfo = [
  {
    id: 1,
    title: "Description",
    text: (
      <ul>
        <li>
          Discuss and consult with clients to understand their digitalization
          needs
        </li>
        <li>Develop workflows for customers in JobRouter platform</li>
        <li>Analysis sheet and user manual at the end of the projec</li>
      </ul>
    ),
  },
  {
    id: 2,
    title: "Tech stack",
    text: (
      <ul>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>SQL</li>
        <li>PHP</li>
      </ul>
    ),
  },
  {
    id: 3,
    title: "Tools",
    text: (
      <ul>
        <li>JobRouter</li>
        <li>SQL Server</li>
        <li>Microsoft Power App</li>
      </ul>
    ),
  },
];

export default function BeckEtAl() {
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
