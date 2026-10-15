import React, { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 42,
    seconds: 19
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="leaving-soon" className="w-full py-16 md:py-[5vw] overflow-hidden flex items-center justify-center relative bg-[#F0F0F0]">
      
      {/* 4 Suspended Metallic Ropes (Desktop) */}
      <div className="hidden md:block">
        {/* Rope 1 */}
        <div className="absolute top-0 left-[37vw] w-[2px] h-[11.3vw] bg-[#eaeaea] z-10">
          <div className="absolute -bottom-[1.3vw] left-1/2 -translate-x-1/2 w-[1.7vw] h-[1.3vw] bg-[#adadad] rounded-[0.2vw] z-[-1]" />
        </div>
        {/* Rope 2 */}
        <div className="absolute top-0 left-[32vw] w-[2px] h-[11.3vw] bg-[#eaeaea] z-0">
          <div className="absolute -bottom-[1.3vw] left-1/2 -translate-x-1/2 w-[1.7vw] h-[1.3vw] bg-[#ccc] rounded-[0.2vw] z-[-1]" />
        </div>
        {/* Rope 3 */}
        <div className="absolute top-0 right-[35vw] w-[2px] h-[11.8vw] bg-[#eaeaea] z-10">
          <div className="absolute -bottom-[1.3vw] left-1/2 -translate-x-1/2 w-[1.7vw] h-[1.3vw] bg-[#adadad] rounded-[0.2vw] z-[-1]" />
        </div>
        {/* Rope 4 */}
        <div className="absolute top-0 right-[40vw] w-[2px] h-[11.8vw] bg-[#eaeaea] z-0">
          <div className="absolute -bottom-[1.3vw] left-1/2 -translate-x-1/2 w-[1.7vw] h-[1.3vw] bg-[#ccc] rounded-[0.2vw] z-[-1]" />
        </div>
      </div>

      {/* Main Suspended Timer Card with 3D Offset Brutalist Shadow */}
      <div className="relative w-[92vw] md:w-[48vw] bg-[#f9f9f9] rounded-[2rem] md:rounded-[1.5vw] p-4 md:p-[1.2vw] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-[1.5vw] shadow-[-8px_8px_0px_#e5e5e5] md:shadow-[-12px_13px_3px_#e5e5e5] border border-neutral-200 z-10">
        
        {/* Left Box: Leaving Soon & Red Offer */}
        <div className="w-full md:w-[47%] bg-[#f2f2f2] rounded-[1.5rem] md:rounded-[0.85vw] p-6 md:p-[2vw_1.7vw_1.25vw] flex flex-col justify-end gap-1 md:gap-[0.55vw]">
          <h2 className="font-heading font-black text-3xl md:text-[2.4vw] text-black/50 leading-none flex items-baseline gap-2 md:gap-[0.75vw]">
            <span>Leaving</span>
            <span className="font-serif italic font-light text-black">soon</span>
          </h2>
          <span className="font-heading text-xs md:text-[1vw] italic font-semibold text-red-600 mt-1">
            Get 30% Off on our seasonal launch!
          </span>
        </div>

        {/* Right Box: 4 Digit Containers */}
        <div className="w-full md:w-[53%] flex gap-2 md:gap-[0.4vw] justify-between">
          {[
            { label: 'days', val: String(timeLeft.days).padStart(2, '0') },
            { label: 'hours', val: String(timeLeft.hours).padStart(2, '0') },
            { label: 'minutes', val: String(timeLeft.minutes).padStart(2, '0') },
            { label: 'seconds', val: String(timeLeft.seconds).padStart(2, '0') },
          ].map((item) => (
            <div 
              key={item.label}
              className="flex-1 bg-white rounded-[1rem] md:rounded-[0.8vw] p-2 md:p-[4px] flex flex-col items-center justify-center border border-neutral-100 shadow-sm"
            >
              <p className="font-heading font-bold text-2xl md:text-[2.4vw] text-[#482922] py-1 md:py-[0.85vw_0_1vw] leading-none">
                {item.val}
              </p>
              <span className="w-full bg-[#f2f2f2] text-center text-[10px] md:text-[0.8vw] font-heading text-black/60 capitalize rounded-[0.5rem] md:rounded-[0.6vw] py-1 md:py-[0.7vw_0] leading-none">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
