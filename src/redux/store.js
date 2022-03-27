import { configureStore } from "@reduxjs/toolkit";
import slicePlitka from "./slice";
import sliceClock from "./sliceClock";

export const store = configureStore({
    reducer:{
      plitka:slicePlitka,
      clock:sliceClock
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})