import { configureStore } from '@reduxjs/toolkit';
import { menuReducer } from './src/reducers';

export const store = configureStore({
  reducer: {
    menu: menuReducer
  }
});

export type RootState = ReturnType<typeof store.getState>