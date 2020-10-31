import React from "react";
import Card from "./Card";
import "./../styles/Popup.css";

export default function Popup(props) {
  if (!props.isVisible) return null;

  const title = props.number.length !== 1?'Invalid number':'Is this your Number?'

  return (
    <div className="container">
      <div className="content">
        <div className="title">{title}</div>
        <div className="cardWrapper">
          {
            props.number.length!==1?'Please try again':<Card number={props.number} />
          }
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
