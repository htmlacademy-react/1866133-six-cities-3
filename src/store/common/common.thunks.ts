import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '..';
import { setError } from '../action';
import { TIMEOUT_SHOW_ERROR } from '../../const';


export const clearError = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
