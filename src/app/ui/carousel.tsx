'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Example slides data
// const SLIDES = [
//   { id: 1, title: 'Slide 1', bg: 'bg-blue-500' },
//   { id: 2, title: 'Slide 2', bg: 'bg-emerald-500' },
//   { id: 3, title: 'Slide 3', bg: 'bg-purple-500' },
// ];

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
    slides}) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideWidth = 100; // percentage-based width

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Handle swipe physics on mobile
  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50; // minimum pixels to register a swipe
    if (info.offset.x < -swipeThreshold) {
      nextSlide();
    } else if (info.offset.x > swipeThreshold) {
      prevSlide();
    }
  };

  // Animation configuration
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto h-80 overflow-hidden rounded-2xl bg-gray-100 shadow-lg group">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={index}
            src={slides[index].image}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            className={`absolute inset-0 w-full h-full flex items-center justify-center text-white text-3xl font-bold cursor-grab active:cursor-grabbing`}
          />
          {slides[index].description}
        </AnimatePresence>
      </div>

      {/* Desktop-Only Arrow Controls (Hidden on touch screens/mobile) */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 transition-colors opacity-0 group-hover:opacity-100 duration-300 focus:outline-none"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 transition-colors opacity-0 group-hover:opacity-100 duration-300 focus:outline-none"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === i ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
