import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RequestStatus } from '../../const';
import { OfferType } from '../../types/offer.type';
import { fetchOfferAction } from './offer.thunks';


type OfferState = {
  offer: OfferType | null;
  status: RequestStatus;
}

const initialState: OfferState = {
  offer: null,
  status: RequestStatus.Idle
};


const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    updateOffer(state, action: PayloadAction<OfferType>) {
      if(state.offer) {
        state.offer.isFavorite = action.payload.isFavorite;
      }
    }
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;
        state.offer = action.payload;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
});

export const offerReducer = offerSlice.reducer;
export const {updateOffer} = offerSlice.actions;

