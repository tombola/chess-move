import React from 'react';
import '../App.css';
import { BrowserRouter } from 'react-router-dom';
import Game from './Game';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Game />
      </BrowserRouter>
    </div>
  );
}

export default App;
