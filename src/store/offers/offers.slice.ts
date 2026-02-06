import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { OfferType } from '../../types/offer.type';

type OffersState = {
  offers: OfferType[];
}

const initialState: OffersState = {
  offers: []
};


const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setOffers(state, action: PayloadAction<OfferType[]>) {
      state.offers = action.payload;
    },
  },
});

export const offersReducer = offersSlice.reducer;
export const {setOffers} = offersSlice.actions;

