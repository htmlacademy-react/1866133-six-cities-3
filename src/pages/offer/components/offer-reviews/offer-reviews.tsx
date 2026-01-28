
import { getAutorizationStatus } from '../../../../authorization-status';
import { AutorizationStatus } from '../../../../const';
import { CommentType } from '../../../../types/comments.type';
import CommentForm from './comment-form/comment-form';

import ReviewsList from './reviews-list/reviews-list';

type OfferReviewsPropsType = {
  comments: CommentType[];
}

const OfferReviews = ({comments}: OfferReviewsPropsType) => {

  const autorizationStatus = getAutorizationStatus();

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ReviewsList comments={comments} />
      {autorizationStatus === AutorizationStatus.Auth && <CommentForm />}
    </section>
  );
};

export default OfferReviews;
