/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { slides } from "@/lib/constants/index";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    let isLastSlide
    if (slides.length) {
      isLastSlide = currentIndex === slides.length - 1;
    }
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-play every 5 seconds (5000 milliseconds)

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, [currentIndex]);

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-4 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      >
        {/* Container for category name and button */}
        <div className="relative top-[35%] inset-0 space-y-5 flex flex-col items-center justify-center">
          {/* Category name */}
          <div className="flex items-center justify-center  bg-black/40 border-y-4 w-full font-ui-monospace ">
            <h2 className="text-3xl font-bold text-white p-4 ">
              {`${slides[currentIndex].category}`}
            </h2>
          </div>

          {/* More from this category button */}
          <div className="flex items-center justify-center">
            <Link href={`/categories/${slides[currentIndex].category}`}>
              <span className="border-2 py-2 px-5 rounded-full text-white hover:font-semibold active:font-bold bg-black hover:bg-red-400 active:bg-red-800 focus:outline-none focus:ring focus:ring-violet-300">
                Discover this category !
              </span>
            </Link>
          </div>
        </div>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white hover:text-red-400  cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white hover:text-red-400 cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled className="hover:text-red-400" />
          </div>
        ))}
      </div>
    </div>
  );
}
