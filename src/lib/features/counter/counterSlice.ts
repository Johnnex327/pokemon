import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 5,
};

//1er paso, crear el Slice, con el snipper 'rxslice'
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addOne(state) {
      state.count++;
    },

    substracOne(state) {
      if (state.count === 0) return;

      state.count--;
    },

    resetCount(state, action: PayloadAction<number>) {
      if (action.payload <= 0) action.payload = 0;
      state.count = action.payload;
    },
  },
});

export const { addOne, substracOne, resetCount } = counterSlice.actions;

export default counterSlice.reducer;
