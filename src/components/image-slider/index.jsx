import { useEffect, useState } from "react";
import "./styles.css";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaRegCircle,
  FaCircle,
} from "react-icons/fa";

const ImageSlider = ({ url, limit, page }) => {
  const [images, setImages] = useState([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    fetch(`${url}?limit=${limit}&page=${page}`)
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, [url, limit, page]);

  function handleLeftArrowClick() {
    setCurrentSlideIndex(
      currentSlideIndex <= 0 ? images.length - 1 : currentSlideIndex - 1
    );
  }

  function handleRightArrowClick() {
    setCurrentSlideIndex(
      currentSlideIndex >= images.length - 1 ? 0 : currentSlideIndex + 1
    );
  }

  return (
    <div className="slider-container">
      <div className="slider-item">
        <FaArrowAltCircleLeft
          size={40}
          onClick={handleLeftArrowClick}
          className="arrow-left"
        />
        {images &&
          images.length > 0 &&
          images.map((image, index) => (
            <div key={image.id}>
              <img
                src={image.download_url}
                alt={image.author}
                width={500}
                className={
                  currentSlideIndex == index ? "show-image" : "hide-image"
                }
              />
            </div>
          ))}
        <FaArrowAltCircleRight
          size={40}
          onClick={handleRightArrowClick}
          className="arrow-right"
        />
      </div>
      {images &&
        images.length > 0 &&
        images.map((_, index) => {
          return currentSlideIndex == index ? (
            <FaCircle key={index} style={{ marginRight: "5px" }} />
          ) : (
            <FaRegCircle
              key={index}
              onClick={() => setCurrentSlideIndex(index)}
              style={{ marginRight: "5px" }}
            />
          );
        })}
    </div>
  );
};

export default ImageSlider;
