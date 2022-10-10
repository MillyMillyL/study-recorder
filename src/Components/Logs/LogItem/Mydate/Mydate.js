import React from "react";
import "./Mydate.css";

function Mydate(props) {
  return (
    <div className="date">
      <div className="month">
        {props.date.toLocaleString("en-US", { month: "long" })}
      </div>
      <div className="day">{props.date.getDate()}</div>
    </div>
  );
}

export default Mydate;
