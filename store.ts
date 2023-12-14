import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./src/reducers";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
