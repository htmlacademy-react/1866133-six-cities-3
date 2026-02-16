import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AutorizationStatus, RequestStatus } from '../../const';
import { UserData } from '../../types/user-data.type';
import { checkAuth, login, logout } from './auth.thunks';
import { setError } from '../action';

type UserState = {
  info: UserData | null;
  requestStatus: RequestStatus;
  authorizationStatus: AutorizationStatus;
  error: string | null;
}

const initialState: UserState = {
  info: null,
  requestStatus: RequestStatus.Idle,
  authorizationStatus: AutorizationStatus.Unknown,
  error: null
};

function processSuccess(state: UserState, action: PayloadAction<UserData>) {
  state.info = action.payload;
  state.requestStatus = RequestStatus.Success;
  state.authorizationStatus = AutorizationStatus.Auth;
}

function processFailed(state: UserState) {
  state.requestStatus = RequestStatus.Failed;
  state.authorizationStatus = AutorizationStatus.NoAuth;
}

function processLoading(state: UserState) {
  state.requestStatus = RequestStatus.Loading;
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},

  extraReducers: (builder) =>
    builder
      .addCase(checkAuth.pending, processLoading)
      .addCase(checkAuth.fulfilled, processSuccess)
      .addCase(checkAuth.rejected, processFailed)
      .addCase(login.pending, processLoading)
      .addCase(login.fulfilled, processSuccess)
      .addCase(login.rejected, processFailed)
      .addCase(logout.fulfilled, (state) => {
        state.info = null;
        state.authorizationStatus = AutorizationStatus.NoAuth;
      })
      .addCase(setError, (state, action) => {
        state.error = action.payload;
      })
});

export const userReducer = userSlice.reducer;
