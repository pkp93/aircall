import React from "react";

import { RiDeleteBackFill } from "react-icons/ri";

import "./DialerNumber.css";

const DialerNumber = ({ number, setNumber }) => {
  return (
    <div className="dialer-number-container">
      {number}
      <div
        className="dialer-number-delete"
        onClick={() => {
          let numCopy = JSON.parse(JSON.stringify(number));
          setNumber(numCopy.slice(0, numCopy.length - 1));
        }}
      >
        <RiDeleteBackFill color={"gray"} size={"30px"} />
      </div>
    </div>
  );
};

export default DialerNumber;
