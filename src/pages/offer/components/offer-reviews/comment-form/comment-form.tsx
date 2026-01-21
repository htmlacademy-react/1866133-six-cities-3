import { Fragment, ReactEventHandler, useState } from 'react';

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

  const [formData, setFormData] = useState({rating: 0, review: ''});

  const handleFieldChange:ChangeFieldHandlerType = (evt) => {

    const {name, value} = evt.currentTarget;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          STARS.map((item) => (
            <Fragment key={item.countStars}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                defaultValue={item.countStars}
                id={`${item.countStars}-${declineWord(item.countStars, WORD_FORMS)}`}
                type="radio"
                onChange={handleFieldChange}
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
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={''}
        onChange={handleFieldChange}
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
            formData.review.length < 50 ||
            formData.review.length > 300}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
