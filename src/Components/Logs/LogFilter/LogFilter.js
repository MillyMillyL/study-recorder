import React from "react";

const LogFilter = ({ year, setYear }) => {
  const changeHandler = (e) => {
    setYear(+e.target.value);
  };

  return (
    <div>
      Year:{" "}
      <select onChange={changeHandler} value={year}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
    </div>
  );
};

export default LogFilter;
