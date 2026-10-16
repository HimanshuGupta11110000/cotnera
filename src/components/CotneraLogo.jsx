import React from 'react';

// Authentic Cotnera Instagram DP base64 seal for instant offline rendering
const COTNERA_DP_BASE64 = "/cotnera-dp.jpg";

export default function CotneraLogo({ 
  className = "h-auto w-full", 
  fill = "#482922",
  showMedallion = true,
}) {
  return (
    <div className={`relative inline-block ${className}`}>
      <style>{`
        @keyframes cotnera-sparkle {
          0%, 100% {
            transform: scale(0.9) rotate(0deg);
            opacity: 0.85;
            filter: drop-shadow(0 0 2px #F6C582);
          }
          50% {
            transform: scale(1.4) rotate(45deg);
            opacity: 1;
            filter: drop-shadow(0 0 8px #FFD700);
          }
        }
        @keyframes cotnera-celestial-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes cotnera-shimmer-pass {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .cotnera-sparkle-star {
          transform-origin: 542px 89px;
          animation: cotnera-sparkle 2.6s ease-in-out infinite;
        }
        .cotnera-celestial-ring {
          transform-origin: 160px 89px;
          animation: cotnera-celestial-orbit 28s linear infinite;
        }
      `}</style>

      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1600 220" 
        className="w-full h-auto overflow-visible select-none block"
      >
        <defs>
          <clipPath id="cotneraCircleClip">
            <circle cx="160" cy="89" r="66" />
          </clipPath>
        </defs>

        {/* 1. LEFT CIRCULAR MEDALLION SEAL (FROM INSTAGRAM DP) */}
        {showMedallion && (
          <g id="cotnera-medallion-badge">
            {/* Outer rotating celestial dashed gold ring */}
            <circle 
              cx="160" 
              cy="89" 
              r="77" 
              stroke="#E8C78A" 
              strokeWidth="1.6" 
              strokeDasharray="4 6" 
              fill="none" 
              className="cotnera-celestial-ring" 
              opacity="0.9" 
            />
            
            {/* Solid gold outer rim */}
            <circle cx="160" cy="89" r="70" stroke="#C5A059" strokeWidth="2" fill="#2E1912" />
            
            {/* Embedded Instagram DP Brand Seal */}
            <image 
              href={COTNERA_DP_BASE64} 
              x="94" 
              y="23" 
              width="132" 
              height="132" 
              clipPath="url(#cotneraCircleClip)" 
            />

            {/* Inner delicate gold rim */}
            <circle cx="160" cy="89" r="66" stroke="#E8C78A" strokeWidth="1.5" fill="none" opacity="0.95" />
          </g>
        )}

        {/* 2. LUXURY SERIF WORDMARK (High-Fashion Typography) */}
        <text 
          x="800" 
          y="130" 
          textAnchor="middle" 
          fontFamily="'Cinzel', 'Playfair Display', serif" 
          fontWeight="900" 
          fontSize="135" 
          letterSpacing="0.22em" 
          fill={fill}
          style={{ transition: 'fill 0.3s ease' }}
        >
          COTNERA
        </text>

        {/* 3. ANIMATED 4-POINT DIAMOND STAR IN THE CENTER OF LETTER O */}
        <g className="cotnera-sparkle-star">
          <path 
            d="M 542,71 C 542,83 546,89 558,89 C 546,89 542,95 542,107 C 542,95 538,89 526,89 C 538,89 542,83 542,71 Z" 
            fill="#F6C582" 
          />
          <circle cx="542" cy="89" r="2.5" fill="#FFFFFF" />
        </g>

        {/* 4. DELICATE COTTON BOLL FLOWER IN THE UPPER COUNTER OF LETTER A */}
        <g id="cotnera-cotton-blossom" transform="translate(1206.14, 82)">
          {/* Golden Sepals */}
          <path d="M -6,4 Q 0,1 6,4 Q 3,7 0,10 Q -3,7 -6,4 Z" fill="#C5A059" opacity="0.9" />
          <line x1="0" y1="8" x2="0" y2="14" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" />
          {/* Fluffy Cotton Puffs */}
          <circle cx="-5.5" cy="-2" r="5" fill="#FAF5EE" opacity="0.95" />
          <circle cx="5.5" cy="-2" r="5" fill="#FAF5EE" opacity="0.95" />
          <circle cx="0" cy="-7" r="5.5" fill="#FFFFFF" opacity="0.98" />
          <circle cx="0" cy="-2.5" r="4" fill="#F5EBD7" opacity="0.9" />
        </g>

        {/* 5. SIGNATURE SCRIPT TAGLINE & ORNAMENTAL STAR DIVIDER */}
        <g id="cotnera-tagline-sub">
          {/* Left divider line with star */}
          <line x1="420" y1="172" x2="570" y2="172" stroke="#E8C78A" strokeWidth="1" opacity="0.75" />
          <path d="M 570,172 L 574,170 L 578,172 L 574,174 Z" fill="#E8C78A" />

          {/* Center Cursive Tagline */}
          <text 
            x="800" 
            y="176" 
            textAnchor="middle" 
            fontFamily="'Playfair Display', serif" 
            fontStyle="italic" 
            fontSize="21" 
            letterSpacing="0.14em" 
            fill="#E8C78A"
          >
            wear it. style it. rewear it.
          </text>

          {/* Right divider line with star */}
          <path d="M 1022,172 L 1026,170 L 1030,172 L 1026,174 Z" fill="#E8C78A" />
          <line x1="1030" y1="172" x2="1180" y2="172" stroke="#E8C78A" strokeWidth="1" opacity="0.75" />

          {/* Premium Cotton Wear Subtitle */}
          <text 
            x="800" 
            y="200" 
            textAnchor="middle" 
            fontFamily="'Cinzel', serif" 
            fontWeight="700" 
            fontSize="12" 
            letterSpacing="0.35em" 
            fill="#D4AF37" 
            opacity="0.9"
          >
            PREMIUM COTTON WEAR • EST. 2026
          </text>
        </g>
      </svg>
    </div>
  );
}
