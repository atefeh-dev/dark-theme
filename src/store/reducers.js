/** @format */

import { combineReducers } from "redux";
import { AuthReducer } from "../action/auth/reducer";
import { ControllerReducer } from "../action/controller/reducer";
import { HomeReducer } from "../action/home/reducer";

export default combineReducers({
  auth: AuthReducer,
  controller: ControllerReducer,
  home: HomeReducer,
});
