import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface AlertState {
  value: boolean;
}

const initialState: AlertState = {
  value: true,
};

const alertControlSlice = createSlice({
  name: "alertControls",
  initialState,
  reducers: {
    setAlert(state) {
      state.value = !state.value;
    },
  },
});

export const { setAlert } = alertControlSlice.actions;
export const selectAlert = (state: RootState) => state.alerts.value;
export default alertControlSlice.reducer;
