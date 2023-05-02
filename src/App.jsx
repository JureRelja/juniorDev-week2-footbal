import { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import GetDate from "./components/GetDate";
import Controls from "./components/Controls";
import Timer from "./components/Timer";
import Reset from "./components/Reset";
import ResultInProgres from "./components/ResultInProgres";

function App() {
  //Score
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  //Timer
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);

  //Result in progress
  const [resultProgres, setResultProgres] = useState([]);

  //Score
  const homeScoreIncrement = () => {
    setHomeScore((prevScore) => prevScore + 1);
    resultChange(homeScore + 1, awayScore, minutes);
  };

  const homeScoreDecrement = () => {
    if (homeScore === 0) return;
    setHomeScore((prevScore) => prevScore - 1);
    resultChange(homeScore - 1, awayScore, minutes);
  };

  const awayScoreIncrement = () => {
    setAwayScore((prevScore) => prevScore + 1);
    resultChange(homeScore, awayScore + 1, minutes);
  };

  const awayScoreDecrement = () => {
    if (awayScore === 0) return;
    setAwayScore((prevScore) => prevScore - 1);
    resultChange(homeScore, awayScore - 1, minutes);
  };

  //Result in progress
  const resultChange = (homeScore, awayScore, minutes) => {
    setResultProgres((prevResult) => {
      return [
        {
          home: homeScore,
          away: awayScore,
          minute: minutes,
          id: Math.random().toString(),
        },
        ...prevResult,
      ];
    });
  };

  const resetReseultProgress = () => {
    setResultProgres([]);
  };

  return (
    <div className="app">
      <div className="container">
        <GetDate />
        <Timer
          setMinutes={setMinutes}
          setSeconds={setSeconds}
          minutes={minutes}
          seconds={seconds}
          start={start}
          setStart={setStart}
        />
        {minutes >= 10 && (
          <Reset
            resetHomeScore={setHomeScore}
            resetAwayScore={setAwayScore}
            resetMinutes={setMinutes}
            resetSeconds={setSeconds}
            resetTimer={setStart}
            resetReseultProgress={resetReseultProgress}
          />
        )}
        <Game homeScore={homeScore} awayScore={awayScore} />
        <Controls
          homeScoreIncrement={homeScoreIncrement}
          homeScoreDecrement={homeScoreDecrement}
          awayScoreIncrement={awayScoreIncrement}
          awayScoreDecrement={awayScoreDecrement}
          start={start}
          minutes={minutes}
        />
      </div>
      <ResultInProgres results={resultProgres} start={start} />
    </div>
  );
}

export default App;
