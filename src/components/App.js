import React from 'react';
import '../App.css';
import MoveDescription from './MoveDescription';

function App() {
  return (
    <div className="App">
      <MoveDescription moveFrom="B1" moveTo="C3" />
    </div>
  );
}

export default App;
