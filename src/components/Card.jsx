import React from "react";

export default function Card(props) {
  const cardStyle = {
    display: "flex",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    width: "20px",
    height: "30px",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    borderRadius: "5px",
    margin: "10px 20px"
  };

  const numStyle = {
    fontSize: "20px"
  };

  return (
    <div style={cardStyle}>
      <h1 style={numStyle}>{props.number}</h1>
    </div>
  );
}
