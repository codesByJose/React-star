import { range } from './util';

function StarRating({ rating }) {
  return (
    <div className="star-wrapper">
      {range(rating).map((index) => (
        <img
          key={index} //
          alt=""
          className="gold-star"
          src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
        />
      ))}
    </div>
  );
}

export default StarRating;
