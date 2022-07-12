import React, { useState } from "react";

import { BsArrowLeft } from "react-icons/bs";

import "./Dialpad";
import { PHONE_DIAL_COLOR, VIDEO_DIAL_COLOR, BRAND_COLOR } from "../Constants";
import PhoneButton from "../atom/PhoneButton";
import VideoButton from "../atom/VideoButton";
import DialerNumber from "../molecules/DialerNumber";
import DialerPadNumber from "../molecules/DialerPadNumbers";
import BrandHeader from "../molecules/BrandHeader";

const Dialpad = ({ handleBack, showBrand }) => {
  const [showPlanModal, setShowPlanModal] = useState(false);
  const [number, setNumber] = useState("");

  return (
    <div
      // className="dialpad-container1"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        justifyContent: "space-between"
      }}
    >
      {showBrand && (
        <div style={{ width: "99.3%" }}>
          <BrandHeader />
        </div>
      )}
      <DialerNumber number={number} setNumber={setNumber} />
      <div
        style={{
          marginBottom: "20%"
        }}
      >
        <DialerPadNumber number={number} setNumber={setNumber} />
        <div
          style={{
            display: "flex",
            marginBottom: "20px",
            marginTop: "20px",
            justifyContent: "space-around"
          }}
        >
          <VideoButton
            onclick={() => {
              setShowPlanModal(true);
            }}
            size={"25px"}
            color={"white"}
            bgColor={VIDEO_DIAL_COLOR}
          />
          <PhoneButton
            onclick={() => {
              setShowPlanModal(true);
            }}
            size={"25px"}
            color={"white"}
            bgColor={PHONE_DIAL_COLOR}
          />
          {handleBack && (
            <div
              onClick={handleBack}
              style={{
                padding: "10px",
                height: "30px",
                width: "30px",
                borderRadius: "15px",
                cursor: "pointer"
              }}
            >
              <BsArrowLeft size={"25px"} />
            </div>
          )}
        </div>
      </div>
      {showPlanModal && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 0,

            bottom: 0,
            left: 0,
            right: 0,
            height: "100vh",
            width: "100vw"
          }}
        >
          <div
            style={{
              width: "45%",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: `0px 1px 1px 1px grey`
            }}
          >
            <p>
              Sorry ! You don't have enough credits to make this call. Recharge
              now to avail unlimited calling facility.
            </p>
            <button
              style={{
                width: "80%",
                backgroundColor: "black",
                color: "white",
                border: "0",
                padding: "10px",
                borderRadius: "5px",
                marginTop: "20px",
                cursor: "pointer",
                backgroundImage: `linear-gradient(to right, black, ${BRAND_COLOR})`
              }}
              onClick={() => setShowPlanModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dialpad;
