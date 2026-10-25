import React, { useState, useEffect } from 'react';

const HERO_SLIDES = [
  {
    image: "/images/catalog/IMG-20261017-WA0039.jpg",
    ctaText: "The Debut Drop '26",
    link: "#collection"
  },
  {
    image: "/images/catalog/IMG-20261017-WA0043.jpg",
    ctaText: "Denim & Chambray Edit",
    link: "#collection"
  },
  {
    image: "/images/catalog/IMG-20261017-WA0032.jpg",
    ctaText: "Tailored Co-ord Sets",
    link: "#collection"
  },
  {
    image: "/images/catalog/IMG-20261017-WA0027.jpg",
    ctaText: "Diwali Festive Edit '26",
    link: "#collection"
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

      {/* Centered Floating Bottom Pill Button & Mobile Descriptor */}
      <div className="absolute left-1/2 bottom-[9vh] md:bottom-[5vw] -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-center pointer-events-auto">
        {/* Mobile Premium Cotton Badge */}
        <div className="md:hidden flex items-center gap-2 mb-1 select-none">
          <span className="h-[1px] w-5 bg-white/70"></span>
          <span className="text-[10px] font-heading font-black tracking-[0.22em] uppercase text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            ✦ Premium Cotton Wear ✦
          </span>
          <span className="h-[1px] w-5 bg-white/70"></span>
        </div>

        <a
          href={HERO_SLIDES[activeSlide].link}
          className="px-[1.8rem] py-[0.75rem] md:px-[2.4vw] md:py-[0.7vw] bg-white text-[#482922] font-heading font-semibold text-xs md:text-[0.85vw] rounded-full uppercase tracking-wider shadow-2xl hover:scale-105 transition-transform duration-300 whitespace-nowrap block"
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
