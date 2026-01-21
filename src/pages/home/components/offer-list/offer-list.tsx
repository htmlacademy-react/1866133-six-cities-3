import PlaceCard from '../../../../components/place-card/place-card';
import { OfferType } from '../../../../types/offer.type';
import { useState } from 'react';

type OfferListPropsType = {
  offers: OfferType[];
}

export const OfferList = ({ offers }: OfferListPropsType) => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_activeCard, setActiveCard] = useState<null | OfferType>(null);

  const handleHoverCard = (offer?: OfferType) => {
    setActiveCard(offer || null);
  };

  return (
    offers.map((offer) => (
      <PlaceCard
        key={offer.id}
        offer={offer}
        handleHoverCard={handleHoverCard}
        className={'cities'}
      />
    ))
  );
};
