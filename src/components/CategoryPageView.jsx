import React, { useEffect } from 'react';
import { ChevronRight, ArrowLeft, Sparkles, MessageCircle } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { CATEGORIES, PRODUCTS } from '../data/mockData';
import ProductCard from './ProductCard';

const CATEGORY_METADATA = {
  'trouser': {
    title: 'Tailored Trousers',
    tagline: 'High-Waisted, Fluid Wide-Leg Silhouettes',
    banner: '/images/catalog/trouser-navy-front.jpg',
    description: 'Impeccably tailored wide-leg trousers featuring sharp front pleats, concealed closures, and premium structured drape for effortless day-to-evening styling.',
  },
  'kurti': {
    title: 'Kurtis & Tunics',
    tagline: 'Handcrafted in 100% Breathable Indian Cotton',
    banner: '/images/catalog/kurti-pink-hakoba-front.jpg',
    description: 'Explore breezy eyelet hakoba halters, open back block-print tunics, and layered sheer silhouettes crafted for everyday ease and contemporary elegance.',
  },
  'kurtis': {
    title: 'Kurtis & Tunics',
    tagline: 'Handcrafted in 100% Breathable Indian Cotton',
    banner: '/images/catalog/kurti-pink-hakoba-front.jpg',
    description: 'Explore breezy eyelet hakoba halters, open back block-print tunics, and layered sheer silhouettes crafted for everyday ease and contemporary elegance.',
  },
  'anarkali': {
    title: 'Anarkali Sets',
    tagline: 'Pure Chanderi Silk & Hand-Embroidered Zardozi',
    banner: '/images/catalog/anarkali-rust-front.jpg',
    description: 'Floor-sweeping kalidar Anarkali ensembles crafted from pure Chanderi silk, featuring delicate hand-embroidered zardozi necklines, deep scoop backs, and sheer embellished organza dupattas.',
  },
  'coord-sets': {
    title: 'Co-ord Sets',
    tagline: 'Tailored 2-Piece & 3-Piece Matching Sets',
    banner: '/images/catalog/IMG-20261017-WA0032.jpg',
    description: 'Effortlessly polished tailored waistcoats, peplum tops, wrap blouses, and relaxed wide-leg trousers in structured linen and cotton slub.',
  },
  'most-wanted': {
    title: 'Most Wanted',
    tagline: 'Cotnera Signature Bestsellers',
    banner: '/images/catalog/IMG-20261018-WA0010.jpg',
    description: 'Our most sought-after silhouettes loved for their versatile cuts, flattering back details, and effortless rewearability.',
  },
  'festive': {
    title: 'Festive Collection',
    tagline: 'Pure Chanderi Silk, Organza & Handblock Weaves',
    banner: '/images/catalog/IMG-20261018-WA0035.jpg',
    description: 'Floor-sweeping anarkali gowns, traditional kalidars with deep back detailing, and voluminous handblock lehengas for joyous celebrations.',
  },
  'dresses': {
    title: 'Dresses & Maxis',
    tagline: 'Fluid Silhouettes for Sunshine Days & Evenings',
    banner: '/images/catalog/IMG-20261017-WA0037.jpg',
    description: 'Flattering halter maxis, tiered garden gowns, and modern geometric jumpsuits crafted in light-as-air natural cotton.',
  },
  'all': {
    title: 'All Pieces',
    tagline: 'The Complete Debut Collection',
    banner: '/images/catalog/IMG-20261017-WA0043.jpg',
    description: 'Browse the complete range of sustainably crafted Indian cotton and silk garments designed to wear, style, and rewear.',
  }
};

export default function CategoryPageView({ categoryId }) {
  const { navigateToHome, navigateToCollection } = useStore();

  const meta = CATEGORY_METADATA[categoryId] || CATEGORY_METADATA['all'];
  const products = categoryId === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => {
        if (categoryId === 'kurti' || categoryId === 'kurtis') {
          return p.category === 'kurti';
        }
        return p.category === categoryId || p.featuredCategory === categoryId;
      });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [categoryId]);

  return (
    <div className="w-full min-h-screen bg-[#F0F0F0] text-[#482922] pt-18 sm:pt-22 pb-20">
      
      {/* 1. Breadcrumbs & Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <nav className="flex items-center gap-1.5 text-xs sm:text-sm font-heading text-neutral-500">
            <button 
              onClick={navigateToHome}
              className="hover:text-[#482922] transition-colors cursor-pointer flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-neutral-400">Collections</span>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <span className="font-semibold text-[#482922] uppercase">{meta.title}</span>
          </nav>

          <span className="text-xs sm:text-sm font-mono text-neutral-500 font-medium">
            ({products.length} {products.length === 1 ? 'Piece' : 'Pieces'})
          </span>
        </div>
      </div>

      {/* 2. Category Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#2D1C15] text-white p-6 sm:p-10 md:p-12 shadow-sm min-h-[180px] sm:min-h-[220px] flex flex-col justify-end">
          {/* Subtle Background Image with Dark Overlay */}
          {meta.banner && (
            <img
              src={meta.banner}
              alt={meta.title}
              className="absolute inset-0 w-full h-full object-cover object-center opacity-30 filter brightness-[0.7]"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

          {/* Banner Text */}
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-[#482922]/90 border border-[#F6C582]/40 px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold text-[#F6C582] mb-3">
              <span>10% OFF</span>
              <span>•</span>
              <span>DIRECT UPI & WHATSAPP ORDERS</span>
            </div>
            
            <h1 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white leading-tight">
              {meta.title}
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-neutral-200 mt-2 font-sans leading-relaxed">
              {meta.description}
            </p>
          </div>
        </div>
      </div>

      {/* 3. Category Filter Switcher Bar (Nishorama-style pills) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
          {CATEGORIES.map((cat) => {
            const isActive = categoryId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => navigateToCollection(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#482922] text-[#F6C582] shadow-sm scale-102'
                    : 'bg-white border border-[#D5D5D5] text-[#482922] hover:border-[#482922]'
                }`}
              >
                {cat.name} {cat.count}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Products Grid (Nishorama 4-column desktop, 2-column mobile borderless cards) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-neutral-200">
            <h3 className="font-heading font-bold text-lg text-[#482922]">No pieces found in this category</h3>
            <p className="text-sm text-neutral-500 mt-1">Please check back soon or browse all pieces.</p>
            <button
              onClick={() => navigateToCollection('all')}
              className="mt-4 px-6 py-2.5 bg-[#482922] text-white rounded-full font-heading text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Browse All Pieces
            </button>
          </div>
        )}
      </div>

      {/* 5. Direct WhatsApp Support Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-[#FAF8F5] border border-[#E9E4DC] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="font-heading font-bold text-base sm:text-lg text-[#482922]">
              Have questions about sizing, fabric or styling?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              Chat directly with our team on WhatsApp for instant assistance, measurements, and order tracking.
            </p>
          </div>
          <a
            href="https://wa.me/916397943289?text=Hi%20Cotnera!%20I%20have%20a%20question%20about%20your%20collection"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full font-heading text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shrink-0 shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

    </div>
  );
}
