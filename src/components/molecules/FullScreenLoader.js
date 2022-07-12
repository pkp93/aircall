import React from "react";

import { ThreeDots } from "react-loader-spinner";

import "./FullScreenLoader.css";
import { BRAND_COLOR } from "../Constants";

const FullScreenLoader = ({ show = true }) => {
  return (
    <>
      {show && (
        <div className="loader-container">
          <ThreeDots
            height="100"
            width="100"
            color={BRAND_COLOR}
            ariaLabel="loading"
          />
        </div>
      )}
    </>
  );
};

export default FullScreenLoader;
