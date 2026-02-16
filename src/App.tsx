import Home from './pages/home/home';
import { Route, Routes } from 'react-router-dom';
import Favorites from './pages/favorites/favorites';
import Login from './pages/login/login';
import Offer from './pages/offer/offer';
import { NotFound } from './pages/not-found/not-found';
import {AppRoute} from './const';
import { PrivateRoute } from './components/private-route/private-route';
import ScrollToTop from './components/scroll-to-top/scroll-to-top';
import {HelmetProvider} from 'react-helmet-async';
import { Layout } from './components/layout/layout';
import { ShortenedOfferType } from './types/offer.type';
import { CommentType } from './types/comments.type';
import { useAppDispatch } from './hooks';
import { useEffect } from 'react';
import { fetchAllOffers } from './store/offers/offers.thunks';
import { getToken } from './api/token';
import { checkAuth } from './store/user/auth.thunks';
import HistoryRouter from './components/history-route/history-route';
import browserHistory from './components/browser-history/browser-history';


type AppPropsType = {
  favoriteData: ShortenedOfferType[];
  otherOffersData: ShortenedOfferType[];
  commentsData: CommentType[];
}

const App = ({favoriteData, otherOffersData, commentsData}: AppPropsType) => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllOffers());
  }, [dispatch]);


  const token = getToken();

  useEffect(() => {
    if(token) {
      checkAuth();
    }
  }, [token]);


  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <ScrollToTop />
        <Routes>
          <Route
            path = {AppRoute.Root}
            element = {<Layout />}
          >
            <Route
              index
              element = {<Home />}
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
      </HistoryRouter>
    </HelmetProvider>
  );
};

export default App;
