import testReducer from "./test.reducer";
// import userReducer from "./user.reducer";
// import productReducer from "./product.reducer";
// import categoryReducer from "./category.reducer";
// import orderReducer from "./order.reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  testState: testReducer,
});
export default rootReducer;
