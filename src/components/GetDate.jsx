import React from "react";
import "./GetDate.css";

function GetDate() {
  const todaysDate = new Date();
  const date =
    todaysDate.getDate() +
    "/" +
    (todaysDate.getMonth() + 1) +
    "/" +
    todaysDate.getFullYear();

  return (
    <div className="date">
      <h1>{date}</h1>
    </div>
  );
}

export default GetDate;
