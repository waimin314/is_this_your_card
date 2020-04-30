import React from "react";
import Card from "./Card";
import "./../styles/Popup.css";

export default function Popup(props) {
  let isVisible = false;

  if (!props.isVisible) return null;

  return (
    <div className="container">
      <div className="content">
        <Card number={props.number} />
        <div className="btnContainer">
          <button className="btn btn-restart">Restart</button>
          <button className="btn btn-close">Close</button>
        </div>
      </div>
    </div>
  );
}
