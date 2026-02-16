
import { createAsyncThunk } from '@reduxjs/toolkit';
import { OfferType } from '../../types/offer.type';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';

export const fetchAllOffers = createAsyncThunk<OfferType[], undefined, { extra: AxiosInstance}>(
  'fetchOffers/all',
  // функция, создающая payload
  async (_arg, {extra: api}) => {
    const response = await api.get<OfferType[]>(APIRoute.Offers);

    return response.data;
  }
);
