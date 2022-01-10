/** @format */

import { HomeActionTypes } from "./actiontype";
const initialState = {
  loading: false,
  sowaCvData: null,
};

export const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HomeActionTypes.fetchData:
      return {
        ...state,
        loading: true,
      };
    case HomeActionTypes.fetchDataSuccess:
      return {
        ...state,
        sowaCvData: action.payload,
        loading: true,
      };
    case HomeActionTypes.fetchDataFail:
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
