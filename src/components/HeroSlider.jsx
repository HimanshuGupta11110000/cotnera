import React, { useState, useEffect } from 'react';

const HERO_SLIDES = [
  {
    desktopImage: "/images/hero/hero-anarkali-landscape.jpg",
    mobileImage: "/images/catalog/anarkali-rust-front.jpg",
    ctaText: "Pure Chanderi Anarkali '26",
    link: "#collection"
  },
  {
    desktopImage: "/images/hero/hero-coord-landscape.jpg",
    mobileImage: "/images/catalog/coord-green-ikat-front.jpg",
    ctaText: "Tailored Co-ord Sets",
    link: "#collection"
  },
  {
    desktopImage: "/images/hero/hero-farshi-landscape.jpg",
    mobileImage: "/images/catalog/salwar-sky-yellow-front.jpg",
    ctaText: "Awadhi Farshi Salwar Suits",
    link: "#collection"
  },
  {
    desktopImage: "/images/hero/hero-dresses-landscape.jpg",
    mobileImage: "/images/catalog/dress-yellow-polka-front.jpg",
    ctaText: "Pure Cotton Dresses & Gowns",
    link: "#collection"
  },
  {
    desktopImage: "/images/hero/hero-kurtis-landscape.jpg",
    mobileImage: "/images/catalog/kurti-pink-hakoba-front.jpg",
    ctaText: "Handcrafted Cotton Kurtis",
    link: "#collection"
  },
  {
    desktopImage: "/images/hero/hero-trousers-landscape.jpg",
    mobileImage: "/images/catalog/trouser-navy-front.jpg",
    ctaText: "Tailored Wide-Leg Trousers",
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
          {/* Desktop & Tablet: Cinematic 16:9 Landscape Banner */}
          <img
            src={slide.desktopImage}
            alt="Cotnera Collection"
            className="hidden md:block w-full h-full object-cover object-center filter brightness-[0.9]"
          />
          {/* Mobile: Full-Length 3:4 Vertical Portrait Photo (Zero Side Crop) */}
          <img
            src={slide.mobileImage}
            alt="Cotnera Collection"
            className="block md:hidden w-full h-full object-cover object-center filter brightness-[0.9]"
          />
          {/* Subtle Gradient Vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
        </div>
      ))}


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
