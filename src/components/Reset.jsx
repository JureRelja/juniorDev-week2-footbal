import React from "react";
import "./Reset.css";

function Reset(props) {
  const resetHandler = () => {
    props.resetHomeScore(0);
    props.resetAwayScore(0);
    props.resetMinutes(0);
    props.resetSeconds(0);
    props.resetTimer(false);
    props.resetReseultProgress();
  };

  return (
    <div className="reset">
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default Reset;
