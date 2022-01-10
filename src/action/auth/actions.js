/** @format */

import { authActionType } from "./actionType";

export function loginhandle(payload, history) {
  return async (dispatch) => {
    try {
      dispatch({ type: authActionType.Login });
      const res = await axios.post("/", payload);
      dispatch({ type: authActionType.LoginSuccess, data: res.data });
      history.push("/");
    } catch (error) {
      dispatch({ type: authActionType.LoginFail });
    }
  };
}
