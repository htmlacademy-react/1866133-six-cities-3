//import React from 'react';
import PlaceCard from '../../components/place-card/place-card';
import Header from '../../components/header/header';
import NavTabs from './components/navigation-tabs/nav-tabs';
import CitiesMap from './components/cities-map/cities-map';
import FormSorting from './components/form-sorting/form-sorting';

type HomePropsType = {
  offersCount: number;
  offersData: Array<{
    id: string;
    title: string;
    //type: 'apartment' | 'room' | 'house' | 'hotel';
    type: string;
    price: number;
    city: {
      name: string;
      location: {
        latitude: number;
        longitude: number;
        zoom: number;
      };
    };
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
  }>;
}

const Home = ({offersCount, offersData}: HomePropsType):JSX.Element => (

  <div className="page page--gray page--main">
    <Header />
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <NavTabs />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>
            <FormSorting />
            <div className="cities__places-list places__list tabs__content">
              {
                structuredClone(offersData).slice(0, offersCount).map((offer) => (
                  <PlaceCard
                    key={offer.id}
                    title={offer.title}
                    type={offer.type}
                    price={offer.price}
                    isPremium={offer.isPremium}
                    rating={offer.rating}
                    previewImage={offer.previewImage}
                  />
                ))
              }
            </div>
          </section>
          <CitiesMap />
        </div>
      </div>
    </main>
  </div>
);

export default Home;
