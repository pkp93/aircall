// This component checks the dimension of the client window,
// and displays either the desktop view if width is greater than 480px
// or the mobile view if less than 480px

import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { MOBILE_WIDTH } from "./Constants";
import { getCallData } from "../actions/callActions";
import MobileView from "./elements/mobileView/MobileView";
import DesktopView from "./elements/desktopView/DesktopView";
import FullScreenLoader from "./molecules/FullScreenLoader";
import ErrorScreen from "./elements/ErrorScreen";

const HomePage = ({ goBack }) => {
  const dispatch = useDispatch();
  const callData = useSelector((state) => state.callReducers.callData);
  const { isFetching, error } = callData;

  useEffect(() => {
    // To get call data and store in redux store.
    dispatch(getCallData());
  }, []);

  const [screenSize, setDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });

  const handleDimensionChange = () => {
    // Capturing current window dimensions
    setDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    });
  };

  useEffect(() => {
    // To listen to change in window dimensions
    window.addEventListener("resize", handleDimensionChange);

    return () => {
      window.removeEventListener("resize", handleDimensionChange);
    };
  }, []);

  return (
    <div style={{ overflowY: "hidden" }}>
      {isFetching ? (
        <FullScreenLoader />
      ) : !isFetching && !error ? (
        screenSize.dynamicWidth > MOBILE_WIDTH ? (
          <DesktopView />
        ) : (
          <MobileView />
        )
      ) : (
        <ErrorScreen />
      )}
    </div>
  );
};

export default HomePage;
