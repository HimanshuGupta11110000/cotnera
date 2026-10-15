import React, { useState, useEffect } from 'react';

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2000&q=88",
    ctaText: "Cotnerotsav '26",
    link: "#new-in"
  },
  {
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=2000&q=88",
    ctaText: "Shop All Styles",
    link: "#shop-all"
  },
  {
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=2000&q=88",
    ctaText: "Most Wanted Edit",
    link: "#most-wanted"
  }
];

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[100vh] min-h-[100vh] max-h-[100vh] overflow-hidden bg-neutral-900">
      
      {/* Slides with Cross-Fade */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            idx === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.ctaText}
            className="w-full h-full object-cover object-center filter brightness-[0.9]"
          />
          {/* Subtle Gradient Vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
        </div>
      ))}

      {/* Centered Floating Bottom Pill Button */}
      <div className="absolute left-1/2 bottom-[8vw] md:bottom-[5vw] -translate-x-1/2 z-20">
        <a
          href={HERO_SLIDES[activeSlide].link}
          className="px-[2rem] py-[0.8rem] md:px-[2.4vw] md:py-[0.7vw] bg-white text-[#482922] font-heading font-semibold text-xs md:text-[0.85vw] rounded-full uppercase tracking-wider shadow-2xl hover:scale-105 transition-transform duration-300 whitespace-nowrap block"
        >
          {HERO_SLIDES[activeSlide].ctaText}
        </a>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-[3vh] left-0 w-full flex justify-center gap-2 z-20">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === activeSlide ? 'bg-white w-6' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
