import React from "react";

export default function Card(props) {
  const cardStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "20px",
    height: "30px",
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "5px",
    margin: "10px 20px",
    boxShadow:
      "0 2.8px 2.2px rgba(0, 0, 0, 0.02),0 6.7px 5.3px rgba(0, 0, 0, 0.028)",
  };

  const numStyle = {
    fontSize: "20px",
    fontFamily: "Poppins,sans-serif",
    fontWeight: "400",
    color: "#3D3B90",
  };

  return (
    <div style={cardStyle}>
      <h1 style={numStyle}>{props.number}</h1>
    </div>
  );
}
