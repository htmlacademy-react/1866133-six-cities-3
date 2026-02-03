import { createReducer } from '@reduxjs/toolkit';
import { offersData } from '../../mocks/offers-data/offers-data';
import { addOffersAction } from '../actions/action';


const initialState = {
  offers: offersData
};

export const homeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addOffersAction, (state, action) => {
      state.offers = action.payload;
    });
});
