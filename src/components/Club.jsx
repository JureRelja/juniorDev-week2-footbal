import React from "react";
import "./Club.css";

function Club(props) {
  return (
    <div className="club">
      <img src={props.location} className="logo" />
      <h2>{props.club}</h2>
    </div>
  );
}

export default Club;
