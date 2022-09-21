import {
  IAddItem,
  IDecrementCart,
  IIncrementCart,
  IRemoveItem,
} from "../../Protocols/cart";
import { INCREMENT, DECREMENT, REMOVE_ITEM, ADD_ITEM } from "../../Types/cart";

export const incrementCartItem = (payload: IIncrementCart) => ({
  type: INCREMENT,
  payload,
});

export const decrementCartItem = (payload: IDecrementCart) => ({
  type: DECREMENT,
  payload,
});

export const removeCartItem = (payload: IRemoveItem) => ({
  type: REMOVE_ITEM,
  payload,
});

export const addItemToCart = (payload: IAddItem) => ({
  type: ADD_ITEM,
  payload,
});
