import { memo } from 'react';
import { useAuthorization } from '../../../../hooks/use-authorization';
import { CommentType } from '../../../../types/comments.type';
import CommentForm from './comment-form/comment-form';
import ReviewsList from './reviews-list/reviews-list';
import { compareComments } from '../../../../utils/common';

const COMMENTS_LIMIT = 10;

type OfferReviewsPropsType = {
  comments: CommentType[] | null;
}

const OfferReviews = memo(({comments}: OfferReviewsPropsType) => {

  const isAuthorized = useAuthorization();

  return (
    <section className="offer__reviews reviews">

      { comments && (
        <>
          <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
          <ReviewsList comments={comments.toSorted(compareComments).slice(0, COMMENTS_LIMIT)} />
        </>
      )}
      {isAuthorized && <CommentForm /> }
    </section>
  );
});

OfferReviews.displayName = 'OfferReviews';

export default OfferReviews;
