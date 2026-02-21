import { createAsyncThunk } from '@reduxjs/toolkit';
import { OfferType } from '../../types/offer.type';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';

export const fetchOfferAction = createAsyncThunk<OfferType, string, {extra: AxiosInstance}>(
  'fetchOffer/current',

  async (offerId, {extra: api}) => {
    const response = await api.get<OfferType>(`${APIRoute.Offers}/${offerId}`);

    return response.data;
  }
);


