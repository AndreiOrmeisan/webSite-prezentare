import React, { useState } from "react";
import "./HexagonGrid.css";

const HexagonGrid = ({ hexagons }) => {
  const [tooltip, setTooltip] = useState({ hexagon: null, x: 0, y: 0 });

  const handleMouseEnter = (hexagon, e) => {
    const { clientX, clientY } = e;
    setTooltip({ hexagon, x: clientX, y: clientY });
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    // Verificăm limitele ecranului
    const tooltipWidth = 200; // Lățimea tooltip-ului în CSS
    const tooltipHeight = 100; // Înălțimea aproximativă a tooltip-ului
    const padding = 10; // Margine suplimentară

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    let x = clientX + padding;
    let y = clientY + padding;

    // Ajustăm poziția pe orizontală dacă iese din ecran
    if (x + tooltipWidth > screenWidth) {
      x = clientX - tooltipWidth - padding;
    }

    // Ajustăm poziția pe verticală dacă iese din ecran
    if (y + tooltipHeight > screenHeight) {
      y = clientY - tooltipHeight - padding;
    }

    setTooltip((prev) => ({ ...prev, x, y }));
  };

  const handleMouseLeave = () => {
    setTooltip({ hexagon: null, x: 0, y: 0 });
  };

  return (
    <div className="hexagon-grid">
      {hexagons.map((hexagon) => (
        <div
          key={hexagon.id}
          className="hexagon"
          onMouseEnter={(e) => handleMouseEnter(hexagon, e)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="hexagon-content">
            <h3>{hexagon.title}</h3>
          </div>
        </div>
      ))}

      {tooltip.hexagon && (
        <div
          className="tooltip"
          style={{
            top: `${tooltip.y}px`,
            left: `${tooltip.x}px`,
          }}
        >
          <h2>{tooltip.hexagon.title}</h2>
          {tooltip.hexagon.icon}
          <p>{tooltip.hexagon.description}</p>
        </div>
      )}
    </div>
  );
};

export default HexagonGrid;
