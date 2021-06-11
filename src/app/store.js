import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../features/mail-slice";

export const store = configureStore({
  reducer: {
    mail: mailReducer,
  },
});
