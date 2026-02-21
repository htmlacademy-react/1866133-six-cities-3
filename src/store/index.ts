import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { offersReducer } from './offers/offers.slice';
import { createApi } from '../api/api';
import { userReducer } from './user/user.slice';
import { redirect } from '../store/middlewares/redirect';
import { offerReducer } from './offer/offer.slice';
import { commentsReducer } from './comments/comments.slice';
import { nearbyReducer } from './nearby/nearby.slice';
import { State } from '../types/state.type';


export const api = createApi();


export const rootReducer = combineReducers({
  offers: offersReducer,
  offer: offerReducer,
  user: userReducer,
  comments: commentsReducer,
  nearby: nearbyReducer
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


export const offerSelector = (state: State) => state.offer.offer;
export const offerStatusSelector = (state: State) => state.offer.status;
export const nearbySelector = (state: State) => state.nearby.nearby;
export const commentsSelector = (state: State) => state.comments.items;
export const profileSelector = (state: State) => state.user.info;
export const authStatusSelector = (state: State) => state.user.authorizationStatus;

