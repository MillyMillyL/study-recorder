import React from "react";
import "./ConfirmModal.css";
import Card from "../card/Card";
import BackDrop from "../BackDrop/BackDrop";

const ConfirmModal = (props) => {
  return (
    <BackDrop>
      <Card className="confirmModal">
        <div className="confirm-text">
          <p>{props.conformText}</p>
        </div>
        <div className="confirm-button">
          <button className="confirm-btn" onClick={props.confirmHandler}>
            Confirm
          </button>
          <button className="cancel-btn" onClick={props.cancelHandler}>
            Cancel
          </button>
        </div>
      </Card>
    </BackDrop>
  );
};

export default ConfirmModal;
