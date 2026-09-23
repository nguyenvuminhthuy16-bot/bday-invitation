import React from 'react';
import { PastaDoodle } from './PastaDoodle';
import { TinyHandHeart, DoodleStar, SparkleDoodle } from './Doodles';

interface HeroSectionProps {
  onScrollToDetails: () => void;
}

export function HeroSection({ onScrollToDetails }: HeroSectionProps) {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-6 pt-12 pb-16 overflow-hidden">
      {/* Subtle ambient decorative doodles */}
      <div className="absolute top-10 left-8 md:left-24 text-[#E8A598]/60 animate-gentle-float">
        <SparkleDoodle className="w-5 h-5" />
      </div>
      <div className="absolute top-16 right-10 md:right-28 text-[#D48170]/40">
        <DoodleStar className="w-4 h-4" />
      </div>
      <div className="absolute bottom-20 left-12 md:left-32 text-[#E8A598]/50">
        <TinyHandHeart className="w-4 h-4" />
      </div>
      <div className="absolute bottom-24 right-14 md:right-36 text-[#C49A88]/50 animate-pulse-subtle">
        <SparkleDoodle className="w-4 h-4" />
      </div>

      {/* Main Hero Card / Content Container */}
      <div className="max-w-md w-full mx-auto flex flex-col items-center">
        {/* Intimate Greeting */}
        <div className="inline-flex items-center gap-1.5 mb-2.5">
          <span className="font-script text-2xl md:text-3xl text-[#D48170] tracking-wide select-none">
            hey birthday girl ♡
          </span>
        </div>

        {/* Primary Invitation Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-[2.65rem] font-medium text-[#3D2E28] tracking-tight leading-snug mb-3">
          let me take you out <br />
          <span className="relative inline-block">
            for dinner?
            {/* Subtle hand-drawn underline squiggle */}
            <svg
              className="absolute -bottom-1.5 left-0 w-full h-2 text-[#E8A598]/80 pointer-events-none"
              viewBox="0 0 100 8"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M1 5.5C20 2 45 7.5 70 3.5C85 1.5 95 6 99 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* Supporting Intimate Subtext */}
        <p className="text-base text-[#7A665E] font-light max-w-xs mx-auto mb-6 leading-relaxed">
          just you, me, and some good pasta.
        </p>

        {/* Cute Minimal Pasta Illustration */}
        <div className="my-2 relative flex items-center justify-center">
          {/* Subtle soft backdrop radial glow */}
          <div className="absolute inset-0 bg-[#FBE9E2]/60 rounded-full blur-xl scale-90 -z-10 pointer-events-none" />
          <PastaDoodle className="w-52 h-44 sm:w-56 sm:h-48" />
        </div>

        {/* CTA Button */}
        <div className="mt-6 flex flex-col items-center gap-3">
          <button
            onClick={onScrollToDetails}
            type="button"
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#3D2E28] text-[#FFF9F5] text-sm md:text-base font-medium shadow-sm hover:bg-[#523E36] active:scale-[0.98] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D48170] focus-visible:ring-offset-2"
          >
            <span>okay, let&apos;s go ♡</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-y-0.5 text-xs opacity-80">
              ↓
            </span>
          </button>

          <span className="text-[11px] text-[#A69085] tracking-wider uppercase">
            scroll down for details
          </span>
        </div>
      </div>
    </section>
  );
}
