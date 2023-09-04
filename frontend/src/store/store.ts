import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "../slices/apiSlice";
import authReducer from "../slices/userSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
