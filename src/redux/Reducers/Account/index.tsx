import * as types from "../../Types/Account";
import { ISAVE_PAYMENTDETAILS } from "../../Protocols/Account";

const SAVE_PAYMENT_DETAILS = (
  state: ISAVE_PAYMENTDETAILS = {
    defaultPaymentMethod: null,
    CreditCardsData: [],
  },
  action: { type: string; payload: ISAVE_PAYMENTDETAILS }
) => {
  const { type, payload } = action;
  switch (type) {
    case types.SAVE_PAYMENTDETAILS:
      return {...state, ...payload};
    default:
      return state;
  }
};

export { SAVE_PAYMENT_DETAILS };
