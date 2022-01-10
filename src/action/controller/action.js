/** @format */

import { controllerActionType } from "./actiontype";

export const changeTheme = (themeName) => {
  return async (dispatch, getState) => {
    dispatch({ type: controllerActionType.changeTheme, theme: themeName });
  };
};
