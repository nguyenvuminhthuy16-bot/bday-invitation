import React from 'react';

export function HeartDoodle({ className = "w-5 h-5", strokeColor = "currentColor" }: { className?: string; strokeColor?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 21.35C11.6 21.35 11.25 21.2 11 20.95C7.2 17.5 4.5 14.85 2.8 12.3C1.1 9.75 1 7.4 2 5.2C3.1 2.8 5.6 1.7 8.2 2.2C9.8 2.5 11.2 3.5 12 4.8C12.8 3.5 14.2 2.5 15.8 2.2C18.4 1.7 20.9 2.8 22 5.2C23 7.4 22.9 9.75 21.2 12.3C19.5 14.85 16.8 17.5 13 20.95C12.75 21.2 12.4 21.35 12 21.35Z"
        stroke={strokeColor}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TinyHandHeart({ className = "w-4 h-4", color = "#D48170" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16 28C15 27 6 19.5 3.5 14C1 8.5 4.5 3.5 10 3.5C12.8 3.5 15 5.5 16 7C17 5.5 19.2 3.5 22 3.5C27.5 3.5 31 8.5 28.5 14C26 19.5 17 27 16 28Z"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function DoodleStar({ className = "w-4 h-4", color = "#C49A88" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2V22M2 12H22M5.5 5.5L18.5 18.5M18.5 5.5L5.5 18.5"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeOpacity="0.75"
      />
    </svg>
  );
}

export function SparkleDoodle({ className = "w-5 h-5", color = "#E8A598" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3C12 7.5 8.5 11 4 11C8.5 11 12 14.5 12 19C12 14.5 15.5 11 20 11C15.5 11 12 7.5 12 3Z"
        fill={color}
        fillOpacity="0.45"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SquiggleUnderline({ className = "w-28 h-3", color = "#D48170" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 120 16" fill="none" className={className}>
      <path
        d="M3 10C15 5 28 14 42 8C56 2 70 13 84 9C98 5 108 12 117 7"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HandArrowDown({ className = "w-6 h-10", color = "#7A665E" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 30 50" fill="none" className={className}>
      <path
        d="M15 4C14.5 16 16 28 14 44M14 44L7 36M14 44L22 37"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WashiTape({ className = "w-28 h-6" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-[#F2DDD2]/60 backdrop-blur-[1px] border-y border-[#E8C5B5]/40 shadow-xs transform -rotate-1 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute left-0 top-0 bottom-0 w-1 border-r border-dashed border-[#DCAFA0]/50" />
      <div className="absolute right-0 top-0 bottom-0 w-1 border-l border-dashed border-[#DCAFA0]/50" />
    </div>
  );
}
