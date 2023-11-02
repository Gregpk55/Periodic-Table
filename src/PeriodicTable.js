import React, { useState } from "react";
import data from "./PeriodicTableJSON.json";
import "./PeriodicTable.css";
import ElementCard from "./ElementCard";

const colorMap = {
  "noble gas": "#FFBC42",
  "alkaline earth metal": "#EC674E",
  "diatomic nonmetal": "#D81159",
  "alkali metal": "#8F2D56",
  "transition metal": "#58586B",
  "post-transition metal": "#218380",
  lanthanide: "#4AABAF",
  metalloid: "#73D2DE",
};

const PeriodicTable = () => {
  const [selectedElement, setSelectedElement] = useState(null);

  const handleElementClick = (element) => {
    setSelectedElement(element);
  };

  const closeElementCard = () => {
    setSelectedElement(null);
  };

  return (
    <div>
      <div className="periodic-table">
        {data.elements.map((element) => (
          <div
            className="element"
            key={element.name}
            style={{
              gridRow: element.ypos,
              gridColumn: element.xpos,
              borderColor: colorMap[element.category],
            }}
            onClick={() => handleElementClick(element)}
          >
            <strong>{element.symbol}</strong>
            <small className="number">{element.number}</small>
            <small className="name">{element.name}</small>
          </div>
        ))}
      </div>
      {selectedElement && (
        <ElementCard element={selectedElement} onClose={closeElementCard} />
      )}
    </div>
  );
};

export default PeriodicTable;
