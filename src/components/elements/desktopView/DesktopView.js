import React, { useState } from "react";

import { useSelector } from "react-redux";

import "./DesktopView.css";
import { ACTIVITY_COLOR, ARCHIVE_COLOR } from "../../Constants";
import Dialpad from "../Dialpad";
import Activities from "../../molecules/Activities";
import Tabs from "../../molecules/Tabs";

const DesktopView = () => {
  const [currTab, setCurrTab] = useState("activity");
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
    <div className="desktop-container">
      <div className="dial-pad-container">
        <Dialpad showBrand />
      </div>

      <div className="activities-container">
        <Tabs
          currTab={currTab}
          setCurrTab={setCurrTab}
          tabNames={JSON.stringify(tabNames)}
        />
        {currTab === "activity" && (
          <Activities primColor={ACTIVITY_COLOR} type={"activity"} />
        )}
        {currTab === "archive" && (
          <Activities primColor={ARCHIVE_COLOR} type={"archive"} />
        )}
      </div>
    </div>
  );
};

export default DesktopView;
