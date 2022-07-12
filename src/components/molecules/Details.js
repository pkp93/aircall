import React from "react";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector } from "react-redux";

const Details = ({ goBack, ...props }) => {
  const callData = useSelector((state) => state.callReducers.callData);
  const { byName } = callData.data;
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

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          paddingLeft: "20px"
        }}
      >
        <AiOutlineArrowLeft style={{ cursor: "pointer" }} onClick={goBack} />
      </div>
      <div>
        <p style={{ fontSize: "30px" }}>{from}</p>
      </div>

      {/* <div>
        <p>History</p>
        {byName?.[from].map((i) => (
          <div key={i.id}>{i.to}</div>
        ))}
      </div> */}
    </div>
  );
};

export default Details;
