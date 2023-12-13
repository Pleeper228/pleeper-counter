import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../store";

interface MenuState {
  staringLife: number;
  numberOfPlayers: number;
}

const initialState: MenuState = { staringLife: 20, numberOfPlayers: 2 };

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setStartingLife(state, action: PayloadAction<number>) {
      state.staringLife = action.payload
    },
    setNumberOfPlayers(state, action: PayloadAction<number>) {
      state.numberOfPlayers = action.payload
    },
    reset(state) {
      state = initialState;
    }
  }
})

export const menuReducer = menuSlice.reducer;
export const { setStartingLife, setNumberOfPlayers, reset } = menuSlice.actions;
export const selectStartingLife = (state: RootState) => state.menu.staringLife;
export const selectNumberOfPlayers = (state: RootState) => state.menu.numberOfPlayers;