import PlaceCard from '../../../../components/place-card/place-card';
import { OfferType, ShortenedOfferType } from '../../../../types/offer.type';


type OfferListPropsType = {
  offers: ShortenedOfferType[];
  handleHoverCard: (offer?: OfferType) => void;
}

export const OfferList = ({ offers, handleHoverCard }: OfferListPropsType) => (
  <div className="cities__places-list places__list tabs__content">
    {
      offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          handleHoverCard={handleHoverCard}
          className={'cities'}
        />
      ))
    }
  </div>
);
