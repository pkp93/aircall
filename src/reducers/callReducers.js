import {
  GET_CALL_DATA,
  GET_CALL_DATA_FAILED,
  UPDATE_CALL_DATA_FETCHING,
  UPDATE_CALL_DATA,
  UPDATE_CALL_DATA_FAILED,
  UPDATE_CALL_DATA_RESET
} from "../actions/types";
import moment from "moment";
const INITIAL_STATE = {
  callData: {
    data: {},
    isFetching: true,
    error: null
  },
  updateData: {
    data: null,
    isFetching: false,
    error: null
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CALL_DATA: {
      const { data } = action;
      let byDate = {},
        byName = {},
        byDateAr = {},
        byDateAc = {},
        missedCallCount = 0;
      data.map((d) => {
        if (d.is_archived) {
          if (!byDateAr[moment(d.created_at).format("YYYY-MM-DD")]) {
            byDateAr[moment(d.created_at).format("YYYY-MM-DD")] = [];
          }
          byDateAr[moment(d.created_at).format("YYYY-MM-DD")].push(d);
        } else {
          if (d.call_type === "missed") {
            missedCallCount++;
          }
          if (!byDateAc[moment(d.created_at).format("YYYY-MM-DD")]) {
            byDateAc[moment(d.created_at).format("YYYY-MM-DD")] = [];
          }
          byDateAc[moment(d.created_at).format("YYYY-MM-DD")].push(d);
        }
        if (!byDate[moment(d.created_at).format("YYYY-MM-DD")]) {
          byDate[moment(d.created_at).format("YYYY-MM-DD")] = [];
        }
        byDate[moment(d.created_at).format("YYYY-MM-DD")].push(d);
        if (!byName[d.from] || !byName[d.to]) {
          !byName[d.from] && (byName[d.from] = []);
          !byName[d.to] && (byName[d.to] = []);
        }
        byName[d.from].push(d);
        byName[d.to].push(d);
      });
      return {
        ...state,
        callData: {
          isFetching: false,
          error: null,
          data: { byDate, byName, byDateAr, byDateAc, missedCallCount }
        }
      };
    }
    case GET_CALL_DATA_FAILED: {
      // const { data } = action;
      return {
        ...state,
        callData: {
          isFetching: false,
          error: true,
          data: null
        }
      };
    }
    case UPDATE_CALL_DATA_RESET: {
      return {
        ...state,
        updateData: {
          isFetching: false,
          error: false,
          data: null
        }
      };
    }
    case UPDATE_CALL_DATA_FETCHING: {
      // const { data } = action;
      return {
        ...state,
        updateData: {
          isFetching: true,
          error: false,
          data: null
        }
      };
    }
    case UPDATE_CALL_DATA: {
      const { data } = action;
      return {
        ...state,
        updateData: {
          isFetching: false,
          error: false,
          data: data
        }
      };
    }
    case UPDATE_CALL_DATA_FAILED: {
      // const { data } = action;
      console.log("update call reducer failed");
      return {
        ...state,
        updateData: {
          isFetching: false,
          error: true,
          data: null
        }
      };
    }
    default:
      return state;
  }
};
