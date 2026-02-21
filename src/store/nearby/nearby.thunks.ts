import { createAsyncThunk } from '@reduxjs/toolkit';
import { ShortenedOfferType } from '../../types/offer.type';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';


export const fetchNearbyAction = createAsyncThunk<ShortenedOfferType[], string, {extra: AxiosInstance}>(
  'fetchOffer/nearby',

  async (offerId, {extra: api}) => {
    const response = await api.get<ShortenedOfferType[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    return response.data;
  }
);
