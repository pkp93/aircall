import React from "react";

import { BiDialpad } from "react-icons/bi";

import { BRAND_COLOR } from "../Constants";
import "./DialPadCircleButton.css";

const DialPadCircleButton = ({ onclick }) => {
  return (
    <div
      onClick={onclick}
      className="dial-pad-button-container"
      style={{
        backgroundImage: `linear-gradient(${BRAND_COLOR}, black)`
      }}
    >
      <BiDialpad color={"white"} size={"30px"} />
    </div>
  );
};

export default DialPadCircleButton;
