import * as types from "../../Types/common";
import {
  IUserData_PAYLOAD,
  ITOAST_ERROR_PAYLOAD,
  ILOADER,
} from "../../Protocols/common";

export const SET_TOAST_ERROR = (payload: ITOAST_ERROR_PAYLOAD) => ({
  type: types.TOAST_ERROR,
  payload,
});

export const SET_USER_DATA = (payload: IUserData_PAYLOAD) => ({
  type: types.USER_DATA,
  payload,
});

export const SET_LOADER = (payload: ILOADER) => ({
  type: types.LOADER,
  payload
})

