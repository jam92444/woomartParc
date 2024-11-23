import React, { useState } from "react";
import { assets } from "../assets/constants";

const HomeCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const CarouselData = assets.CarouselData;

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? CarouselData.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === CarouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full">
      {/* Carousel wrapper */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[90vh] lg:h-[90vh] overflow-hidden">
        {CarouselData.map((item, index) => (
          <div key={index}>
            <div
              className={`absolute w-full h-full transition-all duration-500 ease-in-out ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={item.imageUrl}
                alt={item.altText}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className={`absolute top-[20px] md:top-1/3 lg:1/4 xl:1/4  left-5 w-3/4 lg:w-1/2 flex flex-col gap-1 lg:gap-6 h-full transition-all duration-500 ease-in-out ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-medium">
                {item.title}
              </h1>
              <p className="text-xs sm:text-sm w-2/3 mt-1 md:mt-4 2xl:text-2xl">{item.para}</p>

              <div className="flex gap-4 mt-4">
                <button className="px-3 py-1 sm:px-6  sm:py-4 bg-blue-600 text-white rounded-md font-medium text-xs md:text-sm 2xl:text-2xl">
                  TO SHOP
                </button>
                <button className="lg:px-6 px-3 py-1 sm:px-6  sm:py-4 bg-transparent border border-gray-300 font-medium text-xs md:text-sm 2xl:text-2xl">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-1/4  md:top-1/2 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrevClick}
      >
        <span className="inline-flex items-center justify-center h-5 w-5 sm:w-7 sm:h-7 md:w-10 md:h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-1/4  md:top-1/2 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNextClick}
      >
        <span className="inline-flex items-center justify-center h-5 w-5 sm:w-7 sm:h-7 md:w-10 md:h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default HomeCarousel;
