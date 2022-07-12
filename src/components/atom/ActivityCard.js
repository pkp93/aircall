import React, { useEffect } from "react";

import {
  BsArrowDownLeftCircleFill,
  BsArrowUpRightCircleFill
} from "react-icons/bs";
import { RiUserVoiceFill } from "react-icons/ri";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

import "./ActivityCard.css";
import {
  updateCallData,
  getCallData,
  resetUpdate
} from "../../actions/callActions";
import { secondsToHms, getInitialForCard } from "../utils";
import { BRAND_COLOR } from "../Constants";

const ActivityCard = ({ details, type, primColor, ...props }) => {
  const dispatch = useDispatch();
  const { isFetching, data } = useSelector(
    (state) => state.callReducers.updateData
  );
  const {
    id,
    created_at,
    direction,
    from,
    to,
    via,
    duration,
    is_archived,
    call_type
  } = props.item;

  const handleArchiveClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("id, from", id, from);
    dispatch(updateCallData(id, type === "activity" ? true : false));
  };

  useEffect(() => {
    if (!isFetching && data) {
      dispatch(getCallData());
      dispatch(resetUpdate());
    }
  }, [isFetching]);

  return (
    <div
      className="activity-card-container"
      style={{
        boxShadow: `0px 1px 1px 1px rgba(0,0,0,0.2)`
      }}
    >
      <div style={{ display: "flex", width: "70%" }}>
        <div
          className="card-initial"
          style={{
            // borderRight: `2px solid ${BRAND_COLOR}`,
            color: BRAND_COLOR
          }}
        >
          <p>{getInitialForCard(from)}</p>
        </div>

        <div
          style={{
            height: "100%",
            width: "2px",
            display: "flex",
            alignItems: "center"
          }}
        >
          <div
            style={{
              height: "80%",
              width: "1px",
              backgroundColor: BRAND_COLOR
            }}
          />
        </div>

        <div className="card-details">
          <div
            className="card-details-from"
            style={{
              color:
                call_type === "missed"
                  ? "red"
                  : call_type === "voicemail"
                  ? "blue"
                  : "black"
            }}
          >
            {from}
            {call_type === "voicemail" && (
              <div style={{ marginLeft: "10px" }}>
                <RiUserVoiceFill />
              </div>
            )}
          </div>
          <div className="card-details-via">
            {to} {via ? `(via ${via})` : ""}
          </div>
          <div className="card-details-via">{secondsToHms(duration)}</div>
        </div>
      </div>

      <div className="card-action">
        <div className="card-action-time-type">
          <p style={{ fontSize: "10px" }}>
            {moment(created_at).format("hh:mm A")}
          </p>
          {direction === "inbound" ? (
            <BsArrowDownLeftCircleFill
              color={call_type === "answered" ? "green" : "red"}
            />
          ) : (
            <BsArrowUpRightCircleFill
              color={call_type === "answered" ? "green" : "red"}
            />
          )}
        </div>
        <div
          onClick={handleArchiveClick}
          className="card-action-button "
          style={{
            backgroundImage: `linear-gradient(to left, white,${primColor}, ${primColor})`
          }}
        >
          <p>{type === "activity" ? "Archive" : "Un-Archive"}</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
