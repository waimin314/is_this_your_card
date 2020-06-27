import React from "react";

export default function Card(props) {
  const cardStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "25px",
    height: "25px",
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "27px",
    margin: "10px 20px",
    border: "2px solid #7400b8",
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
