import * as types from "../../Types/common";
import {
  ILOADER,
  ITOAST_ERROR_PAYLOAD,
  IUserData_PAYLOAD,
} from "../../Protocols/common";

const SET_TOAST_ERROR = (
  state: ITOAST_ERROR_PAYLOAD = { error: false, message: "" },
  action: { type: string; payload: ITOAST_ERROR_PAYLOAD }
) => {
  const { type, payload } = action;
  switch (type) {
    case types.TOAST_ERROR:
      return payload;
    default:
      return state;
  }
};

const SET_USER_DATA = (
  state: IUserData_PAYLOAD = {},
  action: { type: string; payload: IUserData_PAYLOAD }
) => {
  const { type, payload } = action;
  switch (type) {
    case types.USER_DATA:
      return payload;
    default:
      return state;
  }
};

const SET_LOADER = (
  state: ILOADER = { loader: false },
  action: { type: string; payload: ILOADER }
) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOADER:
      return payload;
    default:
      return state;
  }
};

export { SET_TOAST_ERROR, SET_LOADER, SET_USER_DATA };
