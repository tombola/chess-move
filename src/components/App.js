import React from "react";
import { BrowserRouter } from "react-router-dom";
import "../App.css";
import Game from "./Game";

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
