import React from "react";

import { SiFacepunch } from "react-icons/si";

import { BRAND_COLOR } from "../Constants";
import "./ErrorScreen.css";

const ErrorScreen = () => {
  return (
    <div className={"error-screen-container"}>
      <SiFacepunch size={"30%"} color={BRAND_COLOR} />
      <p>This almost never happens ! Give us sometime to fix things</p>
    </div>
  );
};

export default ErrorScreen;
