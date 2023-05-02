import React from "react";
import Club from "./Club";
import Result from "./Result";
import "./Game.css";

function Game(props) {
  return (
    <div className="game">
      <Club club="FC Barcelona" location="../src/assets/barcelona-logo.png" />
      <Result score={props} />
      <Club club="Real Madrid" location="../src/assets/real-madrid-logo.png" />
    </div>
  );
}

export default Game;
