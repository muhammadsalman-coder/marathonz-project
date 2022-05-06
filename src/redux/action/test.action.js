// import axios from "../../helpers/axios";
import { testConstant } from "./constants";
export const test = () => {
  // alert("work");
  return async (dispatch) => {
    dispatch({ type: testConstant.TEST_REQUEST });
    // dispatch({ type: todosConstants.ADD_RECORD_SUCCESS });

    setTimeout(() => {
      dispatch({ type: testConstant.TEST_SUCCESS });
    }, 3000);
  };
};
