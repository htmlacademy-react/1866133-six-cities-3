import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { UserData } from '../../types/user-data.type';
import { APIRoute, AppRoute } from '../../const';
import { LoginData } from '../../types/login-data.type';
import { dropToken, saveToken } from '../../api/token';
import { redirectToRoute } from '../action';


export const checkAuth = createAsyncThunk<UserData, undefined, { extra: AxiosInstance }>(
  'auth/checkAuth',
  async (_arg, { extra: api }) => {
    const response = await api.get<UserData>(APIRoute.Login);
    return response.data;
  }
);


export const login = createAsyncThunk<UserData, LoginData, { extra: AxiosInstance }>(
  'auth/login',
  async ({ email, password }, { extra: api, dispatch }) => {
    const response = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(response.data.token);
    dispatch(redirectToRoute(AppRoute.Root));
    return response.data;
  }
);

export const logout = createAsyncThunk<void, undefined, { extra: AxiosInstance }>(
  'auth/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

