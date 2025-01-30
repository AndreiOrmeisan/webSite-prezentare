import "./Header.css";
import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DownloadCVSection from "../Utils/DownloadCV";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleClick = (route) => {
    navigate(route);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="header-oa">
      <div className="logo">My Portfolio</div>
      <div
        className="menu-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`menu ${isMobileMenuOpen ? "open" : ""}`}>
        <button
          className={
            location.pathname === "/" ? "button-oa-active" : "button-oa"
          }
          onClick={() => handleClick("/")}
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
      </nav>
    </header>
  );
}
