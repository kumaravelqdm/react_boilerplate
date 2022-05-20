import { configureStore } from "@reduxjs/toolkit";
import { rootReducer as reducer } from "qdm-store";

export const store = configureStore({
  reducer,
});
