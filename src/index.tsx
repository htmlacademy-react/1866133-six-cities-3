import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { offersData } from './mocks/offers-data/offers-data';
import { favoriteData } from './mocks/favorite-data/favorite-data';
import { otherOffersData } from './mocks/other-offers-data/other-offers-data';
import { commentsData } from './mocks/comments-data/comments-data';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    < App
      offersData={offersData}
      favoriteData={favoriteData}
      otherOffersData={otherOffersData}
      commentsData={commentsData}
    />
  </React.StrictMode>
);
