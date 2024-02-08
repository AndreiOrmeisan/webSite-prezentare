import "./Card.css";

import * as React from "react";

export default function Card({ title, text }) {
  return (
    <div className="cards-oa">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
