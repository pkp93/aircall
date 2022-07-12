import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import "./MobileView.css";
import { ACTIVITY_COLOR, ARCHIVE_COLOR } from "../../Constants";
import Dialpad from "../Dialpad";
import Activities from "../../molecules/Activities";
import BrandHeader from "../../molecules/BrandHeader";
import Tabs from "../../molecules/Tabs";
import DialPadCircleButton from "../../atom/DialPadCircleButton";

const MobileView = () => {
  const [currTab, setCurrTab] = useState("activity");
  const [showPad, setShowPad] = useState(false);
  const callData = useSelector((state) => state.callReducers.callData);
  const {
    data: { missedCallCount }
  } = callData;

  const tabNames = [
    {
      bgCol: ACTIVITY_COLOR,
      val: "activity",
      title: `Activity ${missedCallCount > 0 ? `(${missedCallCount})` : ""}`
    },
    { bgCol: ARCHIVE_COLOR, val: "archive", title: "Archives" }
  ];

  return (
    <div
      className="mobile-container"
      // style={{
      //   overflow: "hidden",
      //   position: "absolute",
      //   top: 0,
      //   bottom: 0,
      //   left: 0,
      //   right: 0
      // }}
    >
      <BrandHeader />

      {showPad ? (
        <div
          className="mobile-dial-pad-container"
          style={{
            display: "flex",
            width: "100%",
            position: "absolute"
          }}
        >
          <Dialpad handleBack={() => setShowPad(false)} />
        </div>
      ) : (
        <div style={{ width: "100vw" }}>
          <DialPadCircleButton onclick={() => setShowPad(true)} />

          <div
            className="mobile-activities-container "
            // style={{
            //   display: "flex",
            //   width: "100%",
            //   height: "100vh",
            //   overflowY: "hidden"
            // }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100vh"
              }}
            >
              <Tabs
                currTab={currTab}
                setCurrTab={setCurrTab}
                tabNames={JSON.stringify(tabNames)}
              />

              {currTab === "activity" && (
                <Activities
                  primColor={"#8F00FF"}
                  style={{ display: "flex", width: "100%" }}
                  type={"activity"}
                />
              )}
              {currTab === "archive" && (
                <Activities
                  primColor={"#FFA500"}
                  style={{ display: "flex", width: "100%" }}
                  type={"archive"}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileView;
