import { CommentType } from '../../../../../types/comments.type.ts';
import { ReviewsItem } from './reviews-item/reviews-item.tsx';


type ReviewsListPropsType = {
  comments: CommentType[];
}

const ReviewsList = ({ comments }: ReviewsListPropsType) => (
  <ul className="reviews__list">
    {
      comments.map(({ id, date, user, comment, rating }) => (
        <ReviewsItem
          key={id}
          id={id}
          date={date}
          user={user}
          comment={comment}
          rating={rating}
        />
      ))
    }
  </ul>
);

export default ReviewsList;
