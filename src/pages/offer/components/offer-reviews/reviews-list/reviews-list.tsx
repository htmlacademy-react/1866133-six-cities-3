import { StarRating } from '../../../../../components/star-rating/star-rating.tsx';
import { CommentsDataType } from '../../../../../types/comments.type.ts';
import { formatDate } from '../../../../../utils/common.ts';

const AVTAR_SIZE = {
  WIDTH: '54',
  HEIGHT: '54'
};

type ReviewsListPropsType = {
  commentsData: CommentsDataType;
}

const ReviewsList = ({ commentsData }: ReviewsListPropsType) => (

  <ul className="reviews__list">
    {
      commentsData.map(({id, date, user, comment, rating}) => {

        const commentDate = new Date(date);

        return (
          <li className="reviews__item" key={id}>
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img
                  className="reviews__avatar user__avatar"
                  src={user.avatarUrl}
                  width={AVTAR_SIZE.WIDTH}
                  height={AVTAR_SIZE.HEIGHT}
                  alt="Reviews avatar"
                />
              </div>
              <span className="reviews__user-name">
                {user.name}
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <StarRating rating={rating}/>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">
                {comment}
              </p>
              <time
                className="reviews__time"
                dateTime={formatDate(commentDate)}
              >
                {`${commentDate.getMonth()} ${commentDate.getFullYear()}`}
              </time>
            </div>
          </li>
        );
      })
    }
  </ul>
);

export default ReviewsList;
