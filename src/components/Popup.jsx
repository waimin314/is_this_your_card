import React from "react";
import Card from "./Card";
import "./../styles/Popup.css";

export default function Popup(props) {
  if (!props.isVisible) return null;

  return (
    <div className="container">
      <div className="content">
        <div className="title">Is this your Number?</div>
        <div className="cardWrapper">
          <Card number={props.number} />
        </div>
        <div className="btnContainer">
          <button onClick={props.restartHandler} className="btn btn-restart">
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}
