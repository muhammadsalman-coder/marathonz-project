import { testConstant } from "../action/constants";

const initialState = {
  loading: false,
  data: undefined,
  error: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case testConstant.TEST_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
      break;
    case testConstant.TEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: "added",
        error: false,
      };
      break;
    case testConstant.TEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
      break;

    default:
      return state;
  }
};
