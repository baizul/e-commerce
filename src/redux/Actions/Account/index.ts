import * as types from "../../Types/Account";
import { ISAVE_PAYMENTDETAILS } from "../../Protocols/Account";

export const savePaymentDetails = (payload: ISAVE_PAYMENTDETAILS) => ({
  type: types.SAVE_PAYMENTDETAILS,
  payload,
});