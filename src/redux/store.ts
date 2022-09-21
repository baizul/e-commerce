import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import Reducers from "./Reducers";
import thunk from "redux-thunk";

export const Store = configureStore({
  reducer: Reducers,
  middleware: [thunk]
});
