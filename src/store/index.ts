import { configureStore } from '@reduxjs/toolkit';
import { homeReducer } from './reducers/reducer';

export const store = configureStore({
  reducer: homeReducer
});
