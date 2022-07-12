import React from "react";

import { IoCallSharp } from "react-icons/io5";

import { BRAND_COLOR } from "../Constants";
import "./PhoneButton.css";

const PhoneButton = ({
  color = "black",
  size = "20px",
  bgColor = "white",
  onclick = () => {}
}) => {
  return (
    <div
      onClick={onclick}
      className="phone-container"
      style={{
        backgroundImage: `linear-gradient(190deg, black, ${BRAND_COLOR})`
      }}
    >
      <IoCallSharp color={color} size={size} />
    </div>
  );
};

export default PhoneButton;
