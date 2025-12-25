import { capitalizeFirstLetter } from '../../../../utils/common';

type OfferFeaturesPropsType = {
  type: string;
  bedrooms: number;
  maxAdults: number;
}

const OfferFeatures = ({type, bedrooms, maxAdults}:OfferFeaturesPropsType) => {

  const upgradeType = capitalizeFirstLetter(type);

  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {upgradeType}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {`${bedrooms} Bedrooms`}
      </li>
      <li className="offer__feature offer__feature--adults">
        {`Max ${maxAdults} adults`}
      </li>
    </ul>
  );
};

export default OfferFeatures;
