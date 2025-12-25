import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import Offer from './pages/offer/offer';
// import Favorites from './pages/favorites/favorites';
// import HomeEmpty from './components/home-empty/home-empty';
// import Login from './pages/login/login';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    < App />
    {/* < Offer /> */}
    {/* < Favorites /> */}
    {/* < HomeEmpty /> */}
    {/* < Login /> */}
  </React.StrictMode>
);
