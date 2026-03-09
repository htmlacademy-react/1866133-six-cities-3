import { memo } from 'react';
import PlaceCard from '../../../../components/place-card/place-card';
import { OfferType, ShortenedOfferType } from '../../../../types/offer.type';


type OfferListPropsType = {
  offers: ShortenedOfferType[];
  onHoverCard: (offer?: OfferType) => void;
}

export const OfferList = memo(({ offers, onHoverCard }: OfferListPropsType) => (
  <div className="cities__places-list places__list tabs__content">
    {
      offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onHoverCard={onHoverCard}
          className={'cities'}
        />
      ))
    }
  </div>
));

OfferList.displayName = 'OfferList';
