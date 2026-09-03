'use client';

import React, { useState, useEffect, useCallback } from "react";

interface Slide {
  image: string;
  description: string;
}

interface CarouselProps {
  slides: Slide[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  slides,
  autoSlide = true,
  autoSlideInterval = 5000,
}) => {
  const [curr, setCurr] = useState<number>(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = useCallback(() => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  }, [slides.length]);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl group">
      {/* Slides Wrapper */}
      <div
        className="flex transition-transform duration-500 ease-out overflow-x-auto scroll-smooth snap-x snap-mandatory touch-pan-x cursor-grab active:cursor-grabbing select-none"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full flex-shrink-0 aspect-[16/9] snap-start ">
            {/* Slide Image */}
            <img
              src={slide.image}
              alt={slide.description}
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Caption Text Box */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white text-left transform translate-y-0 transition-all duration-300">
              <p className="text-sm md:text-base text-gray-200 drop-shadow-sm max-w-2xl">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrow Left */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 text-white hover:bg-white/50 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 hidden md:block"
        aria-label="Previous slide"
      >
        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Navigation Arrow Right */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 text-white hover:bg-white/50 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 hidden md:block"
        aria-label="Next slide"
      >
        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurr(i)}
            className={`transition-all w-3 h-3 bg-white rounded-full ${
              curr === i ? "p-1 w-6" : "bg-opacity-50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
