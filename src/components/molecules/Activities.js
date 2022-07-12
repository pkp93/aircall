import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import "./Activities.css";
import Details from "../molecules/Details";
import ActivityCard from "../atom/ActivityCard";
import FullScreenLoader from "./FullScreenLoader";
import { resetUpdate } from "../../actions/callActions";

const Activities = ({ items = [], type, primColor }) => {
  const dispatch = useDispatch();
  const [showDets, setShowDets] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const callData = useSelector((state) => state.callReducers.callData);
  const { isFetching, data: updateData, error: updateError } = useSelector(
    (state) => state.callReducers.updateData
  );
  const {
    data: { byDateAc, byDateAr }
  } = callData;
  let keysAc = Object.keys(byDateAc);
  let keysAr = Object.keys(byDateAr);
  // const [] = useState()
  useEffect(() => {
    if (updateData || isFetching) {
      setShowLoader(true);
    } else {
      setShowLoader(false);
    }
  }, [updateData, isFetching]);

  const notifyError = () => {
    alert("Something went wrong ! Try again later");
  };

  useEffect(() => {
    if (updateError) {
      notifyError();
      dispatch(resetUpdate());
    }
  }, [updateError]);

  return (
    <div
      className="activites-container"
    >
      <FullScreenLoader show={showLoader} />
      {showDets ? (
        <Details item={showDets} goBack={() => setShowDets(false)} />
      ) : (
        <div
          className="activities-feed-container"
        >
          {type === "activity" && keysAc.length
            ? keysAc.map((date) => (
                <div
                  className="activities-map"
                >
                  <p>{moment(date).format("DD MMM YYYY, dddd")}</p>
                  {byDateAc[date].map((item) => (
                    <ActivityCard
                      primColor={primColor}
                      type={type}
                      details={() => setShowDets(item)}
                      item={item}
                    />
                  ))}
                </div>
              ))
            : type === "activity" && <div>No Activity</div>}

          {type === "archive" && keysAr.length
            ? keysAr.map((date) => (
                <div
                  className="activities-map"
                >
                  <p>{moment(date).format("DD MMM YYYY, dddd")}</p>
                  {byDateAr[date].map((item) => (
                    <ActivityCard
                      primColor={primColor}
                      type={type}
                      details={() => setShowDets(item)}
                      item={item}
                    />
                  ))}
                </div>
              ))
            : type === "archive" && <div>No archived calls</div>}
        </div>
      )}
    </div>
  );
};

export default Activities;
