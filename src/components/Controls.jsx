import React from "react";
import "./Controls.css";

function Controls(props) {
  return (
    <div>
      {props.start && props.minutes < 10 ? (
        <div className="controls">
          <div className="plus-minus">
            <button className="plus" onClick={() => props.homeScoreIncrement()}>
              +
            </button>
            <button
              className="minus"
              onClick={() => props.homeScoreDecrement()}
            >
              -
            </button>
          </div>
          <div className="plus-minus">
            <button className="plus" onClick={() => props.awayScoreIncrement()}>
              +
            </button>
            <button
              className="minus"
              onClick={() => props.awayScoreDecrement()}
            >
              -
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Controls;
