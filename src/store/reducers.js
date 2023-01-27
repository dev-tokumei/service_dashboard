import { combineReducers } from "@reduxjs/toolkit";
import modalSlice from "./slices/modalSlice";

export const modalReduser = combineReducers({
  isModal: modalSlice,
});
