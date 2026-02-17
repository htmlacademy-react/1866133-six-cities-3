import {PayloadAction} from '@reduxjs/toolkit';
import browserHistory from '../../components/browser-history/browser-history';
import {Middleware} from 'redux';
import {rootReducer as reducer} from '../index';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'home/redirectToRoute') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
