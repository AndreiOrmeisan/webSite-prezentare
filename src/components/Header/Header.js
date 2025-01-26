import "./Header.css";
import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DownloadCVSection from "../Utils/DownloadCV";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false); // State for mobile menu

  const handleClick = (route) => {
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
          className={
            location.pathname === "/" ? "button-oa-active" : "button-oa"
          }
          onClick={(e) => handleClick("/")}
        >
          About Me
        </button>
        <button
          className={
            location.pathname === "/juniorMind"
              ? "button-oa-active"
              : "button-oa"
          }
          onClick={() => handleClick("/juniorMind")}
        >
          Junior Mind (2019 - 2020)
        </button>
        <button
          className={
            location.pathname === "/beckEtAl" ? "button-oa-active" : "button-oa"
          }
          onClick={() => handleClick("/beckEtAl")}
        >
          Beck et Al (2020 - 2021)
        </button>
        <button
          className={
            location.pathname === "/cognizant"
              ? "button-oa-active"
              : "button-oa"
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
