import React, { useState, useEffect, useRef } from 'react';
import { X, Play, Pause, ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import { STORIES, PRODUCTS } from '../data/mockData';
import { useStore } from '../context/StoreContext';

const SLIDE_DURATION = 5000; // 5 seconds per slide

export default function StoryViewer() {
  const { isStoryOpen, closeStory, activeStoryIndex, setQuickAddProduct } = useStore();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);

  const currentStory = STORIES[activeStoryIndex] || STORIES[0];
  const slides = currentStory.slides;
  const currentSlide = slides[currentSlideIndex];

  // Reset slide on open
  useEffect(() => {
    if (isStoryOpen) {
      setCurrentSlideIndex(0);
      setProgress(0);
      setIsPaused(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isStoryOpen, activeStoryIndex]);

  // Handle timer and progress
  useEffect(() => {
    if (!isStoryOpen || isPaused) return;

    const interval = 50; // update every 50ms
    const step = (interval / SLIDE_DURATION) * 100;

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Advance slide or close
          if (currentSlideIndex < slides.length - 1) {
            setCurrentSlideIndex((idx) => idx + 1);
            return 0;
          } else {
            closeStory();
            return 0;
          }
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timerRef.current);
  }, [isStoryOpen, isPaused, currentSlideIndex, slides.length, closeStory]);

  const handlePrev = (e) => {
    e?.stopPropagation();
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((idx) => idx - 1);
      setProgress(0);
    }
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex((idx) => idx + 1);
      setProgress(0);
    } else {
      closeStory();
    }
  };

  if (!isStoryOpen || !currentSlide) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* Background Dim / Overlay */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

      {/* Main Story Phone-Frame Container */}
      <div className="relative w-full max-w-sm h-full max-h-[88vh] bg-black overflow-hidden shadow-2xl flex flex-col justify-between sm:rounded-2xl border border-neutral-800">
        
        {/* Top Progress Bars */}
        <div className="absolute top-4 left-4 right-4 z-20 flex gap-1.5">
          {slides.map((_, idx) => (
            <div key={idx} className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-75"
                style={{
                  width: idx < currentSlideIndex ? '100%' : idx === currentSlideIndex ? `${progress}%` : '0%'
                }}
              />
            </div>
          ))}
        </div>

        {/* Top Header: Title & Controls */}
        <div className="absolute top-8 left-4 right-4 z-20 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <span className="font-heading font-black text-xs uppercase tracking-widest bg-black/40 backdrop-blur px-2.5 py-1 rounded">
              {currentStory.title}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-1.5 rounded-full bg-black/40 backdrop-blur hover:bg-black/70 text-white transition-colors"
              aria-label={isPaused ? "Play Story" : "Pause Story"}
            >
              {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={closeStory}
              className="p-1.5 rounded-full bg-black/40 backdrop-blur hover:bg-black/70 text-white transition-colors"
              aria-label="Close Story"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Story Media (Image / Lookbook) */}
        <div className="relative w-full h-full">
          <img 
            src={currentSlide.image} 
            alt={currentSlide.caption}
            className="w-full h-full object-cover" 
          />

          {/* Left / Right Click Touch Zones */}
          <div 
            onClick={handlePrev}
            className="absolute left-0 top-0 bottom-24 w-1/3 z-10 cursor-pointer"
          />
          <div 
            onClick={handleNext}
            className="absolute right-0 top-0 bottom-24 w-1/3 z-10 cursor-pointer"
          />
        </div>

        {/* Bottom Card / CTA */}
        <div className="absolute bottom-6 left-4 right-4 z-20 flex flex-col gap-2">
          <div className="bg-black/60 backdrop-blur-md p-3 rounded-lg border border-white/10 flex items-center justify-between text-white">
            <div>
              <p className="text-xs font-semibold">{currentSlide.caption}</p>
              <p className="text-[11px] text-white/70 font-mono mt-0.5">{currentSlide.productName}</p>
            </div>
            <button
              onClick={() => {
                closeStory();
                // Find matching product or first product to trigger quick add
                const matched = PRODUCTS.find(p => p.name.includes(currentSlide.productName)) || PRODUCTS[0];
                setQuickAddProduct(matched);
              }}
              className="flex items-center gap-1.5 bg-white text-black px-3 py-1.5 rounded text-xs font-heading font-black uppercase tracking-wider hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-3 h-3" />
              <span>Shop</span>
            </button>
          </div>
        </div>

      </div>

      {/* Desktop Prev/Next Arrows */}
      <button
        onClick={handlePrev}
        disabled={currentSlideIndex === 0}
        className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white items-center justify-center transition-all disabled:opacity-20 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white items-center justify-center transition-all cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

    </div>
  );
}
