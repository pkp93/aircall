import React from "react";

import { BsFillCameraVideoFill } from "react-icons/bs";

import { BRAND_COLOR } from "../Constants";
import "./VideoButton.css";

const VideoButton = ({
  color = "black",
  size = "20px",
  bgColor = "white",
  onclick = () => {}
}) => {
  return (
    <div
      onClick={onclick}
      className="video-container"
      style={{
        backgroundImage: `linear-gradient(190deg, black, ${BRAND_COLOR})`
      }}
    >
      <BsFillCameraVideoFill color={color} size={size} />
    </div>
  );
};

export default VideoButton;
