import React from 'react';
import './ElementCard.css';

const ElementCard = ({ element, onClose }) => {
  return (
    <div className="element-card">
      <button onClick={onClose} className="close-button">Close</button>
      <h2>{element.name}</h2>
      <p>Symbol: {element.symbol}</p>
      <p>Atomic Number: {element.number}</p>
      <p>Atomic Mass: {element.atomic_mass}</p>
    </div>
  );
};

export default ElementCard;
