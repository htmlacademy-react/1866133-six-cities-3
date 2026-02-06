import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { offersReducer } from './offers/offers.slice';


const rootReducer = combineReducers({
  offers: offersReducer
});

export const store = configureStore({
  reducer: rootReducer
});
