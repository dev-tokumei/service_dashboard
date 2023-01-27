import { configureStore } from "@reduxjs/toolkit";
import { modalReduser } from "./reducercers";

export const store = configureStore({
  reducer: {
    isModal: modalReduser,
  },
});
