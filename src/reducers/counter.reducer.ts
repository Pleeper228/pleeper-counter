import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

type Counts = Record<number, number>;
interface CounterState {
  counts: Counts;
  startingLife: number;
  numberOfPlayers: number;
}

const initialState: CounterState = {
  counts: {},
  startingLife: 20,
  numberOfPlayers: 2,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCount(
      state,
      action: PayloadAction<{ playerIndex: number; count: number }>
    ) {
      const { playerIndex, count } = action.payload;
      state.counts = { ...state.counts, [playerIndex]: count };
    },
    setStartingLife(state, action: PayloadAction<number>) {
      state.startingLife = action.payload;
    },
    setNumberOfPlayers(state, action: PayloadAction<number>) {
      state.numberOfPlayers = action.payload;

      state.counts = Array.from({
        length: action.payload,
      }).reduce<Counts>(
        (acc, _, i) => ({ ...acc, [i]: state.startingLife }),
        {}
      );
    },
    reset(state, action: PayloadAction<number>) {
      state.counts[action.payload] = state.startingLife;
    },
    exit(state) {
      state = initialState;
    },
  },
});

export const counterReducer = counterSlice.reducer;
export const { setStartingLife, setNumberOfPlayers, setCount, reset, exit } =
  counterSlice.actions;
export const selectStartingLife = (state: RootState) =>
  state.counter.startingLife;
export const selectNumberOfPlayers = (state: RootState) =>
  state.counter.numberOfPlayers;
export const selectCounts = (state: RootState) => state.counter.counts;
