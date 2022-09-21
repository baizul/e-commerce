import {
  IIncrementCart,
  ICartPayload,
  IDecrementCart,
  IRemoveItem,
  IAddItem,
} from "../../Protocols/cart";
import * as types from "../../Types/cart";
import { cartItemsData } from "../../../mockData/Cart";
export const CART = (
  state: ICartPayload = [],
  action: {
    type: string;
    payload: IIncrementCart | IDecrementCart | IRemoveItem | IAddItem;
  }
) => {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_ITEM:
      return [...state, { ...payload }];
    case types.INCREMENT:
      const cartState: ICartPayload = [...JSON.parse(JSON.stringify(state))]; //deep copy
      const i = cartState.findIndex((item) => item.id === payload.id);
      cartState[i].qty++;
      return cartState;
    case types.DECREMENT:
      const stateCpy: ICartPayload = [...JSON.parse(JSON.stringify(state))]; // deep copy
      const index = stateCpy.findIndex((item) => item.id === payload.id);
      stateCpy[index].qty--;
      return stateCpy;
    case types.REMOVE_ITEM:
      const newState = state.filter((item) => item.id !== payload.id);
      return [...newState];
    default:
      return state;
  }
};
