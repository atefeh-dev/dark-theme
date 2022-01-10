/** @format */

import { controllerActionType } from "./actiontype";

const initialState = {
  theme: "light-theme",
};

export const ControllerReducer = (state = initialState, action) => {
  switch (action.type) {
    case controllerActionType.changeTheme:
      return {
        ...state,
        theme: action.theme,
      };

    default:
      return {
        ...state,
      };
  }
};
