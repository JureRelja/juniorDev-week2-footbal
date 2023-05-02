import React from "react";
import "./ResultInProgres.css";

function ResultInProgres(props) {
  return (
    <div
      className={props.start ? "result-in-progres" : "result-in-proges-hide"}
    >
      {props.results.map((result) => (
        <h2 key={result.id}>
          {result.home}:{result.away} - {result.minute}' min
        </h2>
      ))}
    </div>
  );
}

export default ResultInProgres;
