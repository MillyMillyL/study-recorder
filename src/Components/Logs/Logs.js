import React from "react";
import Card from "../UI/Card/card/Card";
import LogFilter from "./LogFilter/LogFilter";
import LogItem from "./LogItem/LogItem";
import "./Logs.css";
import { useState } from "react";

const Logs = ({ logsData, deleteLogItem }) => {
  const [year, setYear] = useState(2022);
  let filterData = logsData.filter((item) => item.date.getFullYear() === year);

  filterData = filterData.map((item) => (
    <LogItem
      key={item.id}
      date={item.date}
      desc={item.desc}
      time={item.time}
      deleteLogItem={() => deleteLogItem(item.id)}
    />
  ));

  if (filterData.length === 0) {
    filterData = (
      <p className="no-logs">No Records yet. Go to add your first record</p>
    );
  }

  return (
    <Card className="logs">
      <LogFilter year={year} setYear={setYear} />
      {filterData}
    </Card>
  );
};

export default Logs;
