import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../const';
import { ShortenedOfferType } from '../../types/offer.type';
import { fetchNearbyAction } from './nearby.thunks';


type NearbyState = {
  nearby: ShortenedOfferType[];
  status: RequestStatus;
}

const initialState: NearbyState = {
  nearby: [],
  status: RequestStatus.Idle
};


const nearbySlice = createSlice({
  name: 'nearby',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchNearbyAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchNearbyAction.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;
        state.nearby = action.payload;
      })
      .addCase(fetchNearbyAction.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
});

export const nearbyReducer = nearbySlice.reducer;
