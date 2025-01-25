import "./Header.css";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import DownloadCVSection from "../Utils/DownloadCV";

export default function Header() {
  const navigate = useNavigate();
  const [selected, setSelected] = React.useState("/");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false); // State for mobile menu

  const handleClick = (route) => {
    setSelected(route);
    navigate(route);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false); // Close menu when a route is selected
    }
  };

  return (
    <div className="header-oa">
      <div
        className="menu-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`menu ${isMobileMenuOpen ? "open" : ""}`}>
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
          className={
            selected === "/beckEtAl" ? "button-oa-active" : "button-oa"
          }
          onClick={() => handleClick("/beckEtAl")}
        >
          Beck et Al (2020 - 2021)
        </button>
        <button
          className={
            selected === "/cognizant" ? "button-oa-active" : "button-oa"
          }
          onClick={() => handleClick("/cognizant")}
        >
          Cognizant (2021 - Present)
        </button>
        <DownloadCVSection />
      </div>
    </div>
  );
}
