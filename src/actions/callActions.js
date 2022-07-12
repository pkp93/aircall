import {
  GET_CALL_DATA,
  UPDATE_CALL_DATA,
  GET_CALL_DATA_FAILED,
  UPDATE_CALL_DATA_FETCHING,
  UPDATE_CALL_DATA_FAILED,
  UPDATE_CALL_DATA_RESET
} from "./types";

import { BASE_URL } from "../components/Constants";
import axios from "axios";

export const getCallData = () => (dispatch) => {
  axios
    .get(`${BASE_URL}/activities`, {}, {})
    .then((res) => {
      dispatch({ type: GET_CALL_DATA, data: res.data });
    })
    .catch((err) => {
      // console.log("error in gettng user data", err);
      dispatch({ type: GET_CALL_DATA_FAILED });
    });
};

export const updateCallData = (id, type = true) => async (dispatch) => {
  dispatch({ type: UPDATE_CALL_DATA_FETCHING });
  var data = JSON.stringify({
    is_archived: type
  });
  // console.log("calling updateCallData", id, data);

  var config = {
    method: "post",
    url: `${BASE_URL}/activities/${id}`,
    headers: {
      "Content-Type": "application/json"
    },
    data: {
      is_archived: type
    }
  };
  // console.log("config is", config);
  axios(config)
    .then((res) => {
      // console.log("1res in updateCallData", res);
      dispatch({ type: UPDATE_CALL_DATA, data: res.data });
    })
    .catch((err) => {
      // console.log("error in gettng updating data", err.response);
      dispatch({ type: UPDATE_CALL_DATA_FAILED });
    });
};

export const resetUpdate = () => ({
  type: UPDATE_CALL_DATA_RESET
});
