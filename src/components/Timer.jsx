import React from "react";
import "./Timer.css";

function Timer(props) {
  const startTimer = () => {
    props.setStart(true);
    const timer = setInterval(() => {
      props.setSeconds((prevSeconds) => {
        if (prevSeconds + 1 >= 60) {
          props.setMinutes((prevMinutes) => {
            if (prevMinutes + 1 >= 10 || props.stopTimer) {
              clearInterval(timer);

              return prevMinutes + 1;
            } else {
              return prevMinutes + 1;
            }
          });
          return 0;
        } else {
          return prevSeconds + 1;
        }
      });
    }, 70);
  };

  return (
    <div className="timer">
      <h2>
        {props.minutes}:{props.seconds}
      </h2>
      {!props.start && <button onClick={startTimer}>Start Game</button>}
    </div>
  );
}

export default Timer;
