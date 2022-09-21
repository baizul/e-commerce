import { combineReducers } from "redux";
import * as common from "./common";
import * as Account from './Account';
import * as cart from "./cart";
import { ILOADER, ITOAST_ERROR_PAYLOAD, IUserData_PAYLOAD } from "../Protocols/common";
import { ICartPayload } from "../Protocols/cart";
import { ISAVE_PAYMENTDETAILS } from "../Protocols/Account";

const appReducer = combineReducers({
  toast_error: common.SET_TOAST_ERROR,
  user_data: common.SET_USER_DATA,
  save_payment_details: Account.SAVE_PAYMENT_DETAILS,
  cart: cart.CART,
  loader: common.SET_LOADER
});

export default appReducer;

export interface IReducer {
  toast_error: ITOAST_ERROR_PAYLOAD;
  user_data: IUserData_PAYLOAD;
  save_payment_details: ISAVE_PAYMENTDETAILS;
  cart: ICartPayload;
  loader: ILOADER
}
