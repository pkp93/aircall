import React from "react";

import "./DialerButton.css";

const DialerButton = ({ title, subTitle, compStyle, number, setNumber }) => {
  return (
    <div
      onClick={() => setNumber(number + "" + title)}
      style={{ ...compStyle, display: "flex", justifyContent: "space-between" }}
    >
      <div className="dialler-button">
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>{title}</div>
        <div style={{ fontSize: "12px" }}>{subTitle}</div>
      </div>
    </div>
  );
};

export default DialerButton;
