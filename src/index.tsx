import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Favorites from './pages/favorites/favorites';
//import Offer from './pages/offer/offer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* < App /> */}
    {/* < Offer /> */}
    < Favorites />
  </React.StrictMode>
);
