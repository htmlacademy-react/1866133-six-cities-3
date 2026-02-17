import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { offersReducer } from './offers/offers.slice';
import { createApi } from '../api/api';
import { userReducer } from './user/user.slice';
import { redirect } from '../store/middlewares/redirect';


export const api = createApi();


export const rootReducer = combineReducers({
  offers: offersReducer,
  user: userReducer
});


export const store = configureStore({

  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect)

});
