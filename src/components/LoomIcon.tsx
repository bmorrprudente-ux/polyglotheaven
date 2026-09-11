import React from "react";

interface LoomIconProps {
  className?: string;
  size?: number;
}

export const LoomIcon: React.FC<LoomIconProps> = ({ className = "w-6 h-6", size }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
    >
      {/* Outer Loom Wooden Frame */}
      <rect x="3" y="3" width="26" height="26" rx="4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Top and bottom beam pegs */}
      <line x1="3" y1="8" x2="29" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="3" y1="24" x2="29" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      
      {/* Vertical Warp Threads (Urdimbre - colorful polyglot threads) */}
      <line x1="9" y1="8" x2="9" y2="24" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" opacity="0.9" />
      <line x1="13.5" y1="8" x2="13.5" y2="24" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" opacity="0.9" />
      <line x1="18.5" y1="8" x2="18.5" y2="24" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" opacity="0.9" />
      <line x1="23" y1="8" x2="23" y2="24" stroke="#f472b6" strokeWidth="1.8" strokeLinecap="round" opacity="0.9" />

      {/* Horizontal Weft Thread / Shuttle (Trama / Lanzadera tejiendo) */}
      <path
        d="M6 13.5C8 12 10.5 15 13.5 13.5C16.5 12 18.5 15 21.5 13.5C23.5 12 25 14 26 13.5"
        stroke="#818cf8"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 18.5C8 19.5 10.5 17 13.5 18.5C16.5 20 18.5 17 21.5 18.5C23.5 19.5 25 18 26 18.5"
        stroke="#c084fc"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Shuttle diamond in center */}
      <polygon points="16,15 17.8,16 16,17 14.2,16" fill="#f59e0b" />
    </svg>
  );
};
