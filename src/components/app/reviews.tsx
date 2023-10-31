import {ReviewType} from '../../types/review';
import moment from 'moment';

type OfferProps = {
  reviews: ReviewType[];
}

function Reviews({ reviews }: OfferProps) {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((item)=> {
          const {avatarUrl, name} = item.user;
          const {comment, date}: ReviewType = item;
          return (
            <li className="reviews__item" key={avatarUrl}>
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img
                    className="reviews__avatar user__avatar"
                    src={avatarUrl}
                    width={54}
                    height={54}
                    alt="Reviews avatar"
                  />
                </div>
                <span className="reviews__user-name">{name}</span>
              </div>
              <div className="reviews__info">
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span style={{ width: '80%' }} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <p className="reviews__text">
                  {comment}
                </p>
                <time className="reviews__time" dateTime={moment(date).format('YYYY-MM-DD')}>
                  {moment(date).format('MMMM YYYY')}
                </time>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Reviews;
