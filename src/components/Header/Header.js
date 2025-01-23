import "./Header.css";

import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [selected, setSelected] = React.useState("/");

  const handleClick = (route) => {
    setSelected(route);
    navigate(route);
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/2025-Ormenisa Andrei CV.pdf";
    link.download = "2025-Ormenisa Andrei CV.pdf";
    link.click();
  };

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
        Junior Mind (2019 - 2020)
      </button>
      <button
        className={selected === "/beckEtAl" ? "button-oa-active" : "button-oa"}
        onClick={() => handleClick("/beckEtAl")}
      >
        Beck et Al (2020 - 2021)
      </button>
      <button
        className={selected === "/cognizant" ? "button-oa-active" : "button-oa"}
        onClick={() => handleClick("/cognizant")}
      >
        Cognizant (2021 - Present)
      </button>
      <button className="button-oa" onClick={() => downloadCV()}>
        Download CV
      </button>
    </div>
  );
}
