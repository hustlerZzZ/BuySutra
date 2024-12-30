import { configureStore } from "@reduxjs/toolkit";
import alertsReducer from "./slice/alertControls";

export const store = configureStore({
  reducer: {
    alerts: alertsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
