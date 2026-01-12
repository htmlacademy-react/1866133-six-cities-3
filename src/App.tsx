import Home from './pages/home/home';
import { OffersData } from './mocks/offers-data/offers-data';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Favorites from './pages/favorites/favorites';
import Login from './pages/login/login';
import Offer from './pages/offer/offer';
import { NotFound } from './pages/not-found/not-found';
import {AppRoute, AutorizationStatus} from './const';
import { PrivateRoute } from './components/private-route/private-route';
import ScrollToTop from './components/scroll-to-top/scroll-to-top';
import {HelmetProvider} from 'react-helmet-async';

const OFFERS_COUNT = 5;

const App = () => (
  <HelmetProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path = {AppRoute.Root} >
          <Route
            index
            element = {
              <Home
                offersCount={OFFERS_COUNT}
                offersData={OffersData}
              />
            }
          />
          <Route
            path = {AppRoute.Favorites}
            element = {
              <PrivateRoute autorizationStatus={AutorizationStatus.NoAuth}>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route
            path = {AppRoute.Login}
            element = {<Login />}
          />
          <Route
            path = {AppRoute.Offer}
            element = {<Offer />}
          />
          <Route
            path = '*'
            element = {<NotFound />}
          />
        </Route>
      </Routes>

    </BrowserRouter>
  </HelmetProvider>
);

export default App;
