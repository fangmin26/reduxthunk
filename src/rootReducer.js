import { combineReducers } from "redux";

import userReducer from "./redux/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
