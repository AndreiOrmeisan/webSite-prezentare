import Card from "../Utils/Card";
import * as React from "react";
import "./JuniorMind.css";

const jobInfo = [
  {
    id: 1,
    title: "Description",
    text: "I started learning programming, and as a first step, I completed an online course focused on JavaScript. Following that, I built a solid foundation in HTML and CSS. From there, I applied the knowledge I gained by working on various projects, utilizing React for frontend development or Node.js for backend development, depending on the area I was focusing on.",
  },
  {
    id: 2,
    title: "Stack Overflow Project",
    text: "I created a Stack Overflow clone using React for the frontend, with the backend implemented in Node.js. This was the final project of the course. The application allowed users to search for specific names, filter results based on rating or alphabetically, and displayed paginated results.",
  },
  {
    id: 3,
    title: "Tech stack",
    text: (
      <ul>
        <li>JavaScript</li>
        <li>React.Js</li>
        <li>Node.Js</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    ),
  },
  {
    id: 4,
    title: "Tools",
    text: (
      <ul>
        <li>GitHub</li>
        <li>Visual Studio Code</li>
        <li>SQL Server</li>
        <li>Postman</li>
      </ul>
    ),
  },
];

export default function JuniorMind() {
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
