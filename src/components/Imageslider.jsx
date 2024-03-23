import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";

const Imageslider = ({ imageUrls }) => {
  const [imgIndex, setimgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setimgIndex((prevIndex) =>
        prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [imageUrls.length]);

  function showNext() {
    setimgIndex((prevIndex) =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  }

  function showPrev() {
    setimgIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  }

  function handleDotClick(index) {
    setimgIndex(index);
  }

  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full flex overflow-hidden">
        {imageUrls.map((url, index) => (
          <img
            key={url}
            src={url}
            alt="no img"
            className="object-cover w-full h-full block flex-shrink-0 flex-grow-0"
            style={{
              transform: `translateX(-${100 * imgIndex}%)`,
              transition: "transform 300ms ease-in-out",
            }}
          />
        ))}
      </div>
      <button
        onClick={showPrev}
        className="absolute top-0 bottom-0 left-0 p-4 cursor-pointer custom-bg cus-effect"
      >
        <ArrowBigLeft className="custom-stroke custom-fill w-8 h-8" />
      </button>
      <button
        onClick={showNext}
        className="absolute top-0 bottom-0 right-0 p-4 cursor-pointer custom-bg cus-effect"
      >
        <ArrowBigRight className="custom-stroke custom-fill w-8 h-8" />
      </button>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {imageUrls.map((_, index) => (
          <button
            key={index}
            className="block cursor-pointer h-4 w-4 custom-child"
            onClick={() => handleDotClick(index)}
          >
            {index === imgIndex ? <CircleDot /> : <Circle />}
          </button>
        ))}
      </div>
    </div>
  );
};

Imageslider.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Imageslider;
