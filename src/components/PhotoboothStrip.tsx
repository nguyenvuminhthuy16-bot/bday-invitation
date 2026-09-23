import React from 'react';
import { TinyHandHeart, DoodleStar } from './Doodles';

export function PhotoboothStrip({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-white p-3 rounded-xl shadow-[0_6px_20px_-6px_rgba(150,115,100,0.12)] border border-[#EFE5DB] max-w-[210px] sm:max-w-[220px] mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-300 ${className}`}
    >
      {/* Top Header of the Photobooth Strip */}
      <div className="flex items-center justify-between text-[9px] font-medium tracking-widest text-[#B59C90] uppercase px-1 mb-2">
        <span>photo studio</span>
        <span>25.09.2026</span>
      </div>

      {/* 3 Photos in the Strip */}
      <div className="space-y-2">
        {/* Frame 1: Couple silhouette / smile doodle */}
        <div className="aspect-[4/3] bg-[#FAF5F0] rounded-lg border border-[#F0E6DC] overflow-hidden flex flex-col items-center justify-center p-2 relative">
          <svg viewBox="0 0 80 60" className="w-16 h-12 text-[#3D2E28]" fill="none">
            {/* Cute two smiling heads */}
            <circle cx="28" cy="24" r="10" stroke="#3D2E28" strokeWidth="1.8" fill="#FFFDFB" />
            <path d="M24 24C25 26 27 26 28 24" stroke="#D48170" strokeWidth="1.4" strokeLinecap="round" />
            <circle cx="25" cy="22" r="1" fill="#3D2E28" />
            <circle cx="31" cy="22" r="1" fill="#3D2E28" />

            <circle cx="52" cy="24" r="10" stroke="#3D2E28" strokeWidth="1.8" fill="#FFFDFB" />
            <path d="M48 24C49 26 51 26 52 24" stroke="#D48170" strokeWidth="1.4" strokeLinecap="round" />
            <circle cx="49" cy="22" r="1" fill="#3D2E28" />
            <circle cx="55" cy="22" r="1" fill="#3D2E28" />

            {/* Little heart between */}
            <path d="M40 18C38 15 35 16 35 18C35 21 40 24 40 24C40 24 45 21 45 18C45 16 42 15 40 18Z" fill="#E8A598" />
            
            {/* Shoulders */}
            <path d="M14 46C16 38 24 35 30 36" stroke="#3D2E28" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M66 46C64 38 56 35 50 36" stroke="#3D2E28" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <span className="font-script text-[11px] text-[#D48170] -mt-1">
            you &amp; me ♡
          </span>
        </div>

        {/* Frame 2: Spaghetti swirl cute doodle */}
        <div className="aspect-[4/3] bg-[#FAF5F0] rounded-lg border border-[#F0E6DC] overflow-hidden flex flex-col items-center justify-center p-2">
          <svg viewBox="0 0 80 60" className="w-16 h-12" fill="none">
            <ellipse cx="40" cy="42" rx="26" ry="9" fill="#FFFFFF" stroke="#3D2E28" strokeWidth="1.6" />
            <path d="M26 40C30 35 38 41 46 36C50 33 54 39 55 40" stroke="#DEB078" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M30 38C34 32 40 40 48 35" stroke="#DEB078" strokeWidth="2" strokeLinecap="round" />
            <path d="M46 22L44 38" stroke="#3D2E28" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M44 26C47 24 50 28 48 31" stroke="#DEB078" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M40 14C39 12 41 10 40 8" stroke="#D48170" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="1 2" />
          </svg>
          <span className="font-script text-[11px] text-[#7A665E] -mt-1">
            pasta date 🍝
          </span>
        </div>

        {/* Frame 3: Birthday cake / sparkler */}
        <div className="aspect-[4/3] bg-[#FAF5F0] rounded-lg border border-[#F0E6DC] overflow-hidden flex flex-col items-center justify-center p-2 relative">
          <svg viewBox="0 0 80 60" className="w-16 h-12" fill="none">
            {/* Cute slice of cake */}
            <path d="M24 42L40 24L56 42H24Z" fill="#FFF9F5" stroke="#3D2E28" strokeWidth="1.6" />
            <path d="M24 42V45C24 47 56 47 56 45V42" fill="#FBE9E2" stroke="#3D2E28" strokeWidth="1.6" />
            <path d="M30 36C34 39 46 39 50 36" stroke="#E8A598" strokeWidth="2" strokeLinecap="round" />
            {/* Candle */}
            <path d="M40 24V16" stroke="#3D2E28" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="40" cy="13" r="2.5" fill="#E8A598" />
            {/* Sparkles */}
            <path d="M46 10L48 13L46 16L44 13Z" fill="#D48170" />
            <path d="M33 12L34 14L33 16L32 14Z" fill="#D48170" />
          </svg>
          <span className="font-script text-[11px] text-[#D48170] -mt-1">
            happy birthday cutie ♡
          </span>
        </div>
      </div>

      {/* Bottom Footer of Strip */}
      <div className="mt-3 pt-2 border-t border-dashed border-[#EAE0D5] flex items-center justify-between text-[9px] text-[#A89287]">
        <div className="flex items-center gap-1 font-script text-xs text-[#D48170]">
          <span>cutiepie</span>
          <TinyHandHeart className="w-3 h-3 text-[#D48170]" />
        </div>
        <div className="flex items-center gap-1">
          <DoodleStar className="w-2.5 h-2.5 text-[#C49A88]" />
          <span>photobooth memory</span>
        </div>
      </div>
    </div>
  );
}
