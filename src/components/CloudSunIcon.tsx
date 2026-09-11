import React from "react";

interface CloudSunIconProps {
  className?: string;
  size?: number;
}

export const CloudSunIcon: React.FC<CloudSunIconProps> = ({ className = "w-6 h-6", size }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
    >
      <defs>
        {/* Sun Gradient: Brilliant golden warmth */}
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
          <stop offset="0%" stopColor="#fff3b0" />
          <stop offset="60%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </radialGradient>

        {/* Cloud Gradient: Heavenly soft white to cyan */}
        <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#f0f9ff" />
          <stop offset="100%" stopColor="#bae6fd" />
        </linearGradient>

        {/* Cloud Shadow */}
        <filter id="cloudShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#0284c7" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Sun Rays */}
      <g stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" opacity="0.9">
        <line x1="42" y1="6" x2="42" y2="12" />
        <line x1="56" y1="12" x2="52" y2="16" />
        <line x1="60" y1="26" x2="54" y2="26" />
        <line x1="56" y1="40" x2="52" y2="36" />
        <line x1="28" y1="12" x2="32" y2="16" />
      </g>

      {/* Sun Orb (behind cloud) */}
      <circle cx="42" cy="26" r="15" fill="url(#sunGlow)" />

      {/* Heavenly Cloud in front */}
      <g filter="url(#cloudShadow)">
        <path
          d="M20 52 C12.268 52 6 45.732 6 38 C6 31.127 10.96 25.409 17.5 24.23 C19.346 16.143 26.568 10 35.2 10 C45.362 10 53.6 18.238 53.6 28.4 C53.6 29.28 53.537 30.145 53.415 30.992 C56.666 32.784 58.8 36.216 58.8 40.2 C58.8 45.833 54.233 50.4 48.6 50.4 L20 50.4 Z"
          fill="url(#cloudGrad)"
          stroke="#7dd3fc"
          strokeWidth="1.5"
        />
        {/* Soft highlight on cloud dome */}
        <ellipse cx="32" cy="18" rx="8" ry="4" fill="#ffffff" opacity="0.7" />
      </g>
    </svg>
  );
};
