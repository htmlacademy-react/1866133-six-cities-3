import Home from './pages/home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Favorites from './pages/favorites/favorites';
import Login from './pages/login/login';
import Offer from './pages/offer/offer';
import { NotFound } from './pages/not-found/not-found';
import {AppRoute} from './const';
import { PrivateRoute } from './components/private-route/private-route';
import ScrollToTop from './components/scroll-to-top/scroll-to-top';
import {HelmetProvider} from 'react-helmet-async';
import { Layout } from './components/layout/layout';
import { OfferType, ShortenedOfferType } from './types/offer.type';
import { CommentType } from './types/comments.type';

const OFFERS_COUNT = 5;

type AppPropsType = {
  offersData: OfferType[];
  favoriteData: ShortenedOfferType[];
  otherOffersData: ShortenedOfferType[];
  commentsData: CommentType[];
}

const App = ({offersData, favoriteData, otherOffersData, commentsData}: AppPropsType) => (
  <HelmetProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path = {AppRoute.Root}
          element = {<Layout />}
        >
          <Route
            index
            element = {
              <Home
                offersCount={OFFERS_COUNT}
                offersData={offersData}
              />
            }
          />
          <Route
            path = {AppRoute.Favorites}
            element = {
              <PrivateRoute>
                <Favorites favorites={favoriteData}/>
              </PrivateRoute>
            }
          />
          <Route
            path = {AppRoute.Login}
            element = {<Login />}
          />
          <Route
            path = {AppRoute.Offer}
            element = {
              <Offer
                offers={offersData}
                otherOffers={otherOffersData}
                comments={commentsData}
              />
            }
          />
        </Route>
        <Route
          path = {AppRoute.NotFound}
          element = {<NotFound />}
        />
      </Routes>

    </BrowserRouter>
  </HelmetProvider>
);

export default App;
