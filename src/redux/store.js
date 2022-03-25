import { configureStore } from "@reduxjs/toolkit";
import slicePlitka from "./slice";

export const store = configureStore({
    reducer:slicePlitka,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})