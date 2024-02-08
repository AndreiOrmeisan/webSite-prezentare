import "./Header.css";

import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [selected, setSelected] = React.useState("/");

  function handleClick(route) {
    setSelected(route);
    navigate(route);
  }

  return (
    <div className="header-oa">
      <button
        className={selected === "/" ? "button-oa-active" : "button-oa"}
        onClick={(e) => handleClick("/")}
      >
        About Me
      </button>
      <button
        className={
          selected === "/juniorMind" ? "button-oa-active" : "button-oa"
        }
        onClick={() => handleClick("/juniorMind")}
      >
        Junior Mind
      </button>
      <button
        className={selected === "/beckEtAl" ? "button-oa-active" : "button-oa"}
        onClick={() => handleClick("/beckEtAl")}
      >
        Beck et Al
      </button>
      <button
        className={selected === "/cognizant" ? "button-oa-active" : "button-oa"}
        onClick={() => handleClick("/cognizant")}
      >
        Cognizant
      </button>
    </div>
  );
}
