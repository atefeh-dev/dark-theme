/** @format */

import { HomeActionTypes } from "./actiontype";
import axios from "axios";
export const fetchCvData = (formData) => {
  return async (dispatch, getState) => {
    dispatch({ type: HomeActionTypes.fetchData });
    axios
      .post("https://ai.djuno.io/api/upload", formData)
      .then((respnse) => {
        dispatch({ type: HomeActionTypes.fetchDataSuccess, payload: respnse });
      })
      .catch((err) => {
        dispatch({ type: HomeActionTypes.fetchDataFail });
      });
  };
};
