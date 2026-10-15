import React from 'react';

export default function CotneraLogo({ className = "h-auto w-full", fill = "#482922" }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1600 160" 
      className={className}
      style={{ display: 'block', overflow: 'visible' }}
    >
      <text 
        x="50%" 
        y="58%" 
        dominantBaseline="middle" 
        textAnchor="middle" 
        fill={fill}
        style={{
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 900,
          fontSize: '135px',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          userSelect: 'none',
          transition: 'fill 0.3s ease',
        }}
      >
        COTNERA
      </text>
    </svg>
  );
}
