import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { OfferType } from '../../types/offer.type';
import { RequestStatus } from '../../const';
import { fetchAllOffers } from './offers.thunks';

type OffersState = {
  offers: OfferType[];
  status: RequestStatus;
}

const initialState: OffersState = {
  offers: [],
  status: RequestStatus.Idle
};


const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    updateOffers(state, action: PayloadAction<OfferType>) {
      const index = state.offers.findIndex((offer) => offer.id === action.payload.id);
      if(index !== -1) {
        state.offers[index].isFavorite = action.payload.isFavorite;
      }
    }
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllOffers.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchAllOffers.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;
        state.offers = action.payload;
      })
      .addCase(fetchAllOffers.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
});

export const offersReducer = offersSlice.reducer;
export const { updateOffers } = offersSlice.actions;

