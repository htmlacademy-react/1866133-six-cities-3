import { createAction } from '@reduxjs/toolkit';
import { OfferType } from '../../types/offer.type';

const ADD_OFFERS_ACTION_NAME = 'home/addOffers';


export const addOffersAction = createAction(ADD_OFFERS_ACTION_NAME,
  (offers: OfferType[]) => ({payload: offers})
);
