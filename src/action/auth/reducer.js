/** @format */

import { authActionType } from "./actionType";

const initialState = {
  loading: false,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionType.Login:
      return {
        ...state,
        loading: true,
      };
    case authActionType.LoginSuccess:
      return {
        ...state,
        loading: false,
      };
    case authActionType.LoginFail:
      return {
        ...state,
        loading: false,
      };

    default:
      return {
        ...state,
      };
  }
};
