import React, { useState } from "react";
import Card from "../UI/Card/card/Card";
import "./LogsForm.css";

const LogsForm = ({ onSaveLog }) => {
  const [formData, setFormData] = useState({
    inputDate: "",
    inputDesc: "",
    inputTime: "",
  });

  const dateChangeHandle = (e) => {
    setFormData({ ...formData, inputDate: e.target.value });
  };

  const descChangeHandle = (e) => {
    setFormData({ ...formData, inputDesc: e.target.value });
  };

  const timeChangeHandle = (e) => {
    setFormData({ ...formData, inputTime: e.target.value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const newLog = {
      date: new Date(formData.inputDate),
      desc: formData.inputDesc,
      time: +formData.inputTime,
    };

    onSaveLog(newLog);

    setFormData({
      inputDate: "",
      inputDesc: "",
      inputTime: "",
    });
  };

  return (
    <Card className="logs-form">
      <form onSubmit={formSubmitHandler}>
        <div className="form-item">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            onChange={dateChangeHandle}
            value={formData.inputDate}
          />
        </div>
        <div className="form-item">
          <label htmlFor="desc">Content</label>
          <input
            id="desc"
            type="text"
            onChange={descChangeHandle}
            value={formData.inputDesc}
          />
        </div>
        <div className="form-item">
          <label htmlFor="time">Time</label>
          <input
            id="time"
            type="number"
            onChange={timeChangeHandle}
            value={formData.inputTime}
          />
        </div>
        <div className="form-btn">
          <button type="submit">Add</button>
        </div>
      </form>
    </Card>
  );
};

export default LogsForm;
