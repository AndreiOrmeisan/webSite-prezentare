import React, { useEffect, useState } from "react";
import "./HexagonGrid.css";

const HexagonGrid = ({ hexagons }) => {
  const [selectedHexagon, setSelectedHexagon] = useState(null);

  const openModal = (hexagon) => {
    setSelectedHexagon(hexagon);
  };

  const closeModal = () => {
    setSelectedHexagon(null);
  };

  return (
    <div className="hexagon-grid">
      {hexagons.map((hexagon) => (
        <div
          key={hexagon.id}
          className="hexagon"
          onClick={() => openModal(hexagon)}
        >
          <div className="hexagon-content">
            <h3>{hexagon.title}</h3>
          </div>
        </div>
      ))}

      {selectedHexagon && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedHexagon.title}</h2>
            {selectedHexagon.icon}
            <p>{selectedHexagon.description}</p>
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HexagonGrid;
