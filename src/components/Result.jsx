import React from "react";
import "./Result.css";

function Result(props) {
  return (
    <div className="result">
      <h2>{props.score.homeScore}</h2>
      <h2>:</h2>
      <h2>{props.score.awayScore}</h2>
    </div>
  );
}

export default Result;
