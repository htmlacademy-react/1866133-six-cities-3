
type OfferRetingPropsType = {
  rating: number;
};

const OfferReting = ({rating}: OfferRetingPropsType): JSX.Element => (
  <div className="offer__rating rating">
    <div className="offer__stars rating__stars">
      <span style={{ width: `${rating * 20}%` }}></span>
      <span className="visually-hidden">Rating</span>
    </div>
    <span className="offer__rating-value rating__value">{rating}</span>
  </div>
);

export default OfferReting;
