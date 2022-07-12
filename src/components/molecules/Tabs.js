// This component can be used to show tabs. Pass in tabNames params in {title: "", val: "", bgColor: ""}

import React from "react";

const Tabs = ({ currTab, setCurrTab, tabNames }) => {
  let tabsAre = JSON.parse(tabNames) || [];
  return (
    <div className="flex-w100">
      {tabsAre.map((tab) => (
        <div
          onClick={() => setCurrTab(tab.val)}
          className="tab-style"
          style={{
            backgroundColor: currTab === tab.val ? tab.bgCol : "white",
            color: currTab === tab.val ? "white" : "black"
          }}
        >
          {tab.title}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
