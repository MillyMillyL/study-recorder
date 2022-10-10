import React, { useState } from "react";
import Mydate from "./Mydate/Mydate";
import "./LogItem.css";
import Card from "../../UI/Card/card/Card";
import ConfirmModal from "../../UI/Card/confirmModal/ConfirmModal.js";

const LogItem = ({ date, desc, time, deleteLogItem }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const deleteHandler = () => {
    setShowConfirm(true);
  };

  const cancelHandler = () => {
    setShowConfirm(false);
  };

  const confirmHandler = () => {
    setShowConfirm(false);
    deleteLogItem();
  };

  return (
    <Card className="item">
      <Mydate date={date} />
      <div className="content">
        <h2 className="desc">{desc}</h2>
        <div className="time">{time}</div>
      </div>
      <div>
        <div className="delete" onClick={deleteHandler}>
          ❌
        </div>
        {showConfirm && (
          <ConfirmModal
            conformText="Are you sure to delete?"
            cancelHandler={cancelHandler}
            confirmHandler={confirmHandler}
          />
        )}
      </div>
    </Card>
  );
};

export default LogItem;
