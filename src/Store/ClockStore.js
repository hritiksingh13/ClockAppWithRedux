import { createSlice, configureStore } from "@reduxjs/toolkit";
import globalInitialState from "./GlobalInitialStates";

const clockSlice = createSlice({
  name: "clock",
  initialState: globalInitialState,
  reducers: {
    setAlarmList: (state, action) => {
      state.alarmList = action.payload;
    },
    setTimerMilliSeconds: (state, action) => {
      state.timer.milliSeconds = action.payload;
    },
    setTimerSeconds: (state, action) => {
      state.timer.seconds = action.payload;
    },
    setTimerMinutes: (state, action) => {
      state.timer.minutes = action.payload;
    },
    toggleIsTimerStarted: (state, action) => {
      state.timer.isTimerStarted = action.payload;
    },
    resetTimer: (state) => {
      state.timer.milliSeconds = 0;
      state.timer.seconds = 0;
      state.timer.minutes = 0;
      state.timer.isTimerStarted = false;
    }
  }
});

export const {
  setAlarmList,
  setTimerSeconds,
  setTimerMilliSeconds,
  setTimerMinutes,
  toggleIsTimerStarted,
  resetTimer
} = clockSlice.actions;

const ClockStore = configureStore({
  reducer: clockSlice.reducer
});

export default ClockStore;
