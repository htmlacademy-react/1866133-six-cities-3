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
    loadOffers(state, action: PayloadAction<OfferType[]>) {
      state.offers = action.payload;
    },
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
export const {loadOffers} = offersSlice.actions;

