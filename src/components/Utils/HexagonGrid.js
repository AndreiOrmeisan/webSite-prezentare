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
    setTooltip((prev) => ({ ...prev, x: clientX, y: clientY }));
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
            top: `${tooltip.y + 10}px`, // 10px distanță sub cursor
            left: `${tooltip.x + 10}px`,
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
