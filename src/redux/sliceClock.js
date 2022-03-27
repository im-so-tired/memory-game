import { createSlice } from "@reduxjs/toolkit";
let clock = {
  minute: "00",
  second: "00",
};

let clockSlice = createSlice({
  name: "clock",
  initialState: {
    clock: clock,
    timer: false,
  },
  reducers: {
    start(state) {
      if (+clock.second === 60) {
        if (+clock.minute < 9) {
          clock = { ...clock, minute: `0${+clock.minute + 1}`, second: "00" };
          state.clock = clock;
        } else {
          clock = { ...clock, minute: `${+clock.minute + 1}`, second: "00" };
          state.clock = clock;
        }
      } else {
        if (+clock.second < 9) {
          clock = { ...clock, second: `0${+clock.second + 1}` };
          state.clock = clock;
        } else {
          clock = { ...clock, second: `${+clock.second + 1}` };
          state.clock = clock;
        }
      }
    },
    stop(state) {
      clearInterval(state.timer);
      state.timer = false;
    },
    setTimer(state, action) {
			if(!state.timer)
      state.timer = setInterval(action.payload.callFn, 500);
    },
    clearTimer(state) {
      clearInterval(state.timer);
      state.timer = false;
			state.clock = {
				minute: "00",
				second: "00",
			}
			clock ={
				minute: "00",
				second: "00",
			}
    },
  },
});
// export const setInt = () => {
//   return function (dispatch) {
//     if (!timer) {
//       timer = setInterval(dispatch(start));
//     }
//   };
// };
export default clockSlice.reducer;
export const { start, stop, setTimer, clearTimer } = clockSlice.actions;
