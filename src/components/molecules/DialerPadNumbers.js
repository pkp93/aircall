import React from "react";

import "./DialerPadNumbers.css";
import DialerButton from "../atom/DialerButton";
import { DIAL_NUMBERS } from "../Constants";

const DialerPadNumbers = ({ number, setNumber }) => {
  return (
    <div className="dialer-pad-numbers-container">
      {DIAL_NUMBERS.map((nums) => (
        <div style={{ display: "flex" }}>
          {nums.map((num) => (
            <DialerButton
              compStyle={{
                display: "flex",
                flexDirection: "column",
                width: "33.33%",
                height: "80px",
                alignItems: "center",
                justifyContent: "center"
              }}
              number={number}
              setNumber={setNumber}
              title={num.main}
              subTitle={num.sub}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default DialerPadNumbers;
