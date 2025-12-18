//import React from 'react';
import Home from './pages/home/home';
import {OffersData} from './mocks/offers-data/offers-data';

const OFFERS_COUNT = 5;

const App = () => (
  <Home
    offersCount={OFFERS_COUNT}
    offersData={OffersData}
  />
);

export default App;
