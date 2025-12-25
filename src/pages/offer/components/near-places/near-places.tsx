import PlaceCard from '../../../../components/place-card/place-card';

type NearPlacesPropsType = {
  otherOffersData: Array<{
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

const NearPlaces = ({ otherOffersData }: NearPlacesPropsType) => {

  const CLASS_NAME = 'near-places';

  return(
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {
          structuredClone(otherOffersData).map((offer) => (
            <PlaceCard
              key={offer.id}
              title={offer.title}
              type={offer.type}
              price={offer.price}
              isPremium={offer.isPremium}
              isFavorite={offer.isFavorite}
              rating={offer.rating}
              previewImage={offer.previewImage}
              className={CLASS_NAME}
            />
          ))
        }
      </div>
    </section>
  );
};

export default NearPlaces;
