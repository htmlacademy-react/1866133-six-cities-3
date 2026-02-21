import { useAuthorization } from '../../../../hooks/use-authorization';
import { CommentType } from '../../../../types/comments.type';
import CommentForm from './comment-form/comment-form';

import ReviewsList from './reviews-list/reviews-list';

type OfferReviewsPropsType = {
  comments: CommentType[] | null;
}

const OfferReviews = ({comments}: OfferReviewsPropsType) => {

  const isAuthorized = useAuthorization();

  return (
    <section className="offer__reviews reviews">

      {comments && (
        <>
          <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
          <ReviewsList comments={comments} />
        </>
      )}
      {isAuthorized && <CommentForm />}
    </section>
  );
};

export default OfferReviews;
