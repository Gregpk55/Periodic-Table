import React, { useState } from 'react';
import './App.css';
import PeriodicTable from './PeriodicTable';
import ElementCard from './ElementCard';

function App() {
  const [selectedElement, setSelectedElement] = useState(null);

  const handleElementClick = (element) => {
    setSelectedElement(element);
  };

  const handleClose = () => {
    setSelectedElement(null);
  };

  return (
    <div className="App">
      <h1>Periodic Table of Elements</h1>
      <small>with React + CSS Grid</small>
      <PeriodicTable onElementClick={handleElementClick} />
      {selectedElement && 
        <ElementCard element={selectedElement} onClose={handleClose} />}
    </div>
  );
}

export default App;
