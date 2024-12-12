import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

const RatingStar = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  function handleMouseClick(currentIndex) {
    setRating(currentIndex);
  }
  function handleMouseEnter(currentIndex) {
    setHoverRating(currentIndex);
  }
  function handleMouseLeave() {
    setHoverRating(rating);
  }
  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= (hoverRating || rating) ? "active" : "inactive"}
            onClick={() => handleMouseClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={50}
          />
        );
      })}
    </div>
  );
};

export default RatingStar;
