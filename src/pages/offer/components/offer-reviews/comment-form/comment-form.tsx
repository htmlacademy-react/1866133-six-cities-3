import { FormEvent, Fragment, ReactEventHandler, useRef, useState } from 'react';
import { useAppDispatch } from '../../../../../hooks';
import { postCommentAction } from '../../../../../store/comments/comments.thunks';
import { useParams } from 'react-router-dom';
import { processErrorHandle } from '../../../../../components/process-error-handle/process-error-handle';
import { SERVER_UNAVAILABLE } from '../../../../../const';

const STARS = [
  {
    countStars: 5,
    title: 'perfect'
  },
  {
    countStars: 4,
    title: 'good'
  },
  {
    countStars: 3,
    title: 'not bad'
  },
  {
    countStars: 2,
    title: 'badly'
  },
  {
    countStars: 1,
    title: 'terribly'
  }
];

const STAR_SIZE = {
  WIDTH: '37',
  HEIGHT: '33'
};

const WORD_FORMS = ['star', 'stars'];

const declineWord = (count:number, forms:string[]) => count === 1 ? forms[0] : forms[1];

type ChangeFieldHandlerType = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;


const CommentForm = () => {

  const dispatch = useAppDispatch();
  const {id: offerId} = useParams();

  const [formData, setFormData] = useState({rating: 0, comment: ''});
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleFieldChange:ChangeFieldHandlerType = (evt) => {
    const {name, value} = evt.currentTarget;
    setFormData({
      ...formData, [name]: name === 'rating' ? +value : value
    });
  };

  const handleSendForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsDisabled(true);

    dispatch(postCommentAction({...formData, offerId}))
      .unwrap()
      .then(() => {
        setFormData({
          ...formData,
          rating: 0,
          comment: ''
        });
        formRef.current?.reset();
      })
      .catch(() => {
        processErrorHandle(SERVER_UNAVAILABLE);
      })
      .finally(() => {
        setIsDisabled(false);
      });
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSendForm}
      ref={formRef}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          STARS.map((item) => (
            <Fragment key={item.title}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                defaultValue={item.countStars}
                id={`${item.countStars}-${declineWord(item.countStars, WORD_FORMS)}`}
                type="radio"
                onChange={handleFieldChange}
                disabled={isDisabled}
              />
              <label
                htmlFor={`${item.countStars}-${declineWord(item.countStars, WORD_FORMS)}`}
                className="reviews__rating-label form__rating-label"
                title={item.title}
              >
                <svg
                  className="form__star-image"
                  width={STAR_SIZE.WIDTH}
                  height={STAR_SIZE.HEIGHT}
                >
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          ))
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={''}
        onChange={handleFieldChange}
        disabled={isDisabled}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled = {formData.rating === 0 ||
            formData.comment.length < 50 ||
            formData.comment.length > 300 ||
            isDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
