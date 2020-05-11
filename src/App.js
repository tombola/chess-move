import React from 'react';
import './App.css';
import MoveDescription from './components/MoveDescription';

function App() {
  return (
    <div className="App">
      <MoveDescription moveFrom={['B', 1]} moveTo={['C', 3]}/>
    </div>
  );
}

export default App;
