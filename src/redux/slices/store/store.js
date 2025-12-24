import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../expenseSlices";
import Logger from "redux-logger";

export const store = configureStore({
  reducer: {
    expense: expenseReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Logger),
});
