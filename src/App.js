import Logs from "./Components/Logs/Logs";
import LogsForm from "./Components/LogsForm/LogsForm";
import "./App.css";
import { useState } from "react";

function App() {
  const [logsData, setLogsData] = useState([]);

  const saveLogHandler = (newLog) => {
    newLog.id = Date.now() + "";
    setLogsData([newLog, ...logsData]);
  };

  const deleteLogItem = (id) => {
    const newLogsData = logsData.filter((log) => log.id !== id);
    setLogsData(newLogsData);
  };

  return (
    <div className="app">
      <LogsForm onSaveLog={saveLogHandler} />
      <Logs logsData={logsData} deleteLogItem={deleteLogItem} />
    </div>
  );
}

export default App;
