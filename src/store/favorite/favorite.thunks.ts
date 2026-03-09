import { createAsyncThunk } from '@reduxjs/toolkit';
import { OfferType, ShortenedOfferType } from '../../types/offer.type';
import { AxiosError, AxiosInstance } from 'axios';
import { APIRoute } from '../../const';


export const fetchFavoritesAction = createAsyncThunk<ShortenedOfferType[], undefined, {extra: AxiosInstance}>(
  'favorite/fetchFavorites',
  async(_arg, {extra: api}) => {
    const response = await api.get<ShortenedOfferType[]>(APIRoute.Favorite);
    return response.data;
  }
);

type ChangePropsType = {
  offerId: string;
  isFavorite: boolean;
}


export const changeFavoriteAction = createAsyncThunk<OfferType, ChangePropsType, {extra: AxiosInstance}>(
  'favorite/change',
  async({offerId, isFavorite}, {extra: api, rejectWithValue}) => {
    const status = Number(!isFavorite);

    try {
      const response = await api.post<OfferType>(`${APIRoute.Favorite}/${offerId}/${status}`);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.message);
      }
      throw error;
    }
  }
);
