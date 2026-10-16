import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import CotneraLogo from './CotneraLogo';
import { BRAND } from '../data/mockData';

export default function Footer() {
  return (
    <footer className="w-full p-4 md:p-[1vw] bg-[#F0F0F0]">
      {/* Rounded Footer Card */}
      <div className="relative bg-[#e6e6e6] rounded-[2rem] md:rounded-[2.9rem] p-6 md:p-[3vw_2vw_2vw] overflow-hidden">
        
        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-[5vw] relative z-10">
          
          {/* Block 1: Connect */}
          <div className="flex flex-col gap-2 md:gap-[0.8vw]">
            <h3 className="font-heading text-sm md:text-[0.75vw] text-[#482922] font-semibold uppercase tracking-wider pb-1 md:pb-[1vw]">
              Connect with us
            </h3>
            <div className="flex flex-col gap-1.5 md:gap-[0.6vw] text-xs md:text-[0.7vw] font-heading text-[#482922]/80">
              <a href={`tel:${BRAND.phone}`} className="hover:text-[#482922] flex items-center gap-1.5">
                <Phone className="w-3 h-3" />
                <span>Call: {BRAND.phone}</span>
              </a>
              <a href={`https://wa.me/${BRAND.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="hover:text-[#482922] flex items-center gap-1.5">
                <MessageCircle className="w-3 h-3 text-emerald-600" />
                <span>Text (WhatsApp)</span>
              </a>
              <a href="https://instagram.com/cotnera__" target="_blank" rel="noreferrer" className="hover:text-[#482922]">
                Instagram @cotnera__
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#482922]">
                YouTube
              </a>
            </div>
          </div>

          {/* Block 2: Order Support */}
          <div className="flex flex-col gap-2 md:gap-[0.8vw]">
            <h3 className="font-heading text-sm md:text-[0.75vw] text-[#482922] font-semibold uppercase tracking-wider pb-1 md:pb-[1vw]">
              Order Support
            </h3>
            <div className="flex flex-col gap-1.5 md:gap-[0.6vw] text-xs md:text-[0.7vw] font-heading text-[#482922]/80">
              <a href="#refund" className="hover:text-[#482922]">Refund / Exchange policy</a>
              <a href="#track" className="hover:text-[#482922]">Track your order</a>
              <a href="#shipping" className="hover:text-[#482922]">Shipping policy</a>
              <a href="#faqs" className="hover:text-[#482922]">FAQ's</a>
              <a href="#terms" className="hover:text-[#482922]">Terms & Privacy</a>
            </div>
          </div>

          {/* Block 3: Brand */}
          <div className="flex flex-col gap-2 md:gap-[0.8vw]">
            <h3 className="font-heading text-sm md:text-[0.75vw] text-[#482922] font-semibold uppercase tracking-wider pb-1 md:pb-[1vw]">
              Cotnera Studio
            </h3>
            <div className="flex flex-col gap-1.5 md:gap-[0.6vw] text-xs md:text-[0.7vw] font-heading text-[#482922]/80">
              <span className="text-[#482922] font-bold">By Akanksha & Riya</span>
              <span>Sustainable • Comfortable • Minimal</span>
              <span>Pure Handcrafted Cotton</span>
            </div>
          </div>

          {/* Block 4: Studio Info */}
          <div className="flex flex-col gap-2 md:gap-[0.8vw]">
            <h4 className="font-heading text-sm md:text-[0.75vw] text-[#482922] font-semibold uppercase tracking-wider pb-1 md:pb-[1vw]">
              Cotnera Studio
            </h4>
            <div className="flex flex-col gap-1.5 md:gap-[0.6vw] text-xs md:text-[0.7vw] font-heading text-[#482922]/80 leading-relaxed">
              <span><strong>Crafted with love:</strong> Handcrafted in India</span>
              <span><strong>Support:</strong> WhatsApp & Call Support</span>
              <span><strong>Hours:</strong> Mon - Sat, 10am - 7pm IST</span>
            </div>
          </div>

        </div>

        {/* Payment Methods */}
        <div className="pt-8 md:pt-[3vw] pb-4 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10 text-xs md:text-[0.75vw] font-heading text-[#482922] border-t border-[#d5d5d5] mt-6">
          <div className="space-y-0.5 text-center md:text-left">
            <p className="font-bold uppercase tracking-wider text-[11px] md:text-[0.7vw]">We Accept All Payment Methods:</p>
            <p className="text-[10px] md:text-[0.65vw] text-neutral-600">Google Pay, PhonePe, Paytm, BHIM, all UPI apps, Net Banking & Cash on Delivery (COD)</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-[10px] md:text-[0.62vw] font-bold font-mono">
            <span className="px-2.5 py-1 bg-white rounded-full border border-neutral-300 text-[#1a73e8] shadow-2xs">Google Pay</span>
            <span className="px-2.5 py-1 bg-white rounded-full border border-neutral-300 text-[#5f259f] shadow-2xs">PhonePe</span>
            <span className="px-2.5 py-1 bg-white rounded-full border border-neutral-300 text-[#00b9f5] shadow-2xs">Paytm</span>
            <span className="px-2.5 py-1 bg-white rounded-full border border-neutral-300 text-emerald-700 shadow-2xs">BHIM UPI</span>
            <span className="px-2.5 py-1 bg-white rounded-full border border-neutral-300 text-neutral-800 shadow-2xs">Cash on Delivery</span>
            <span className="px-2.5 py-1 bg-white rounded-full border border-neutral-300 text-neutral-600 shadow-2xs">NetBanking</span>
          </div>
        </div>

        {/* Giant Watermark Logo Spanning Background */}
        <div className="pt-6 select-none pointer-events-none opacity-20">
          <CotneraLogo className="w-full h-auto" fill="#482922" />
        </div>

        {/* Copyright */}
        <div className="text-center font-heading text-xs md:text-[0.7vw] text-[#482922]/80 pt-4">
          Designed for Cotnera | © Cotnera 2026. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
