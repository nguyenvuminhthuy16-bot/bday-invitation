import React from 'react';
import { TinyHandHeart, WashiTape, SparkleDoodle } from './Doodles';

export function PersonalNote() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-sm mx-auto relative">
        {/* Soft floating decorative sparkle */}
        <div className="absolute -top-3 -right-2 text-[#D48170]/40">
          <SparkleDoodle className="w-5 h-5" />
        </div>

        {/* Washi Tape at Top */}
        <div className="flex justify-center -mb-3 relative z-10">
          <WashiTape className="w-24 h-5 shadow-xs" />
        </div>

        {/* Handwritten Note Sheet */}
        <div className="bg-[#FFFDFB] rounded-2xl p-8 sm:p-9 shadow-[0_8px_30px_-8px_rgba(150,115,100,0.07)] border border-[#EFE3D8] transform -rotate-0.5 transition-transform hover:rotate-0 duration-300">
          <div className="flex flex-col items-center text-center">
            {/* Note text */}
            <p className="font-script text-2xl sm:text-[1.7rem] text-[#3D2E28] leading-[1.7] tracking-wide select-none">
              just one month but i love you<br />
              more than i can say... my cutiepie ♡
            </p>

            <div className="my-5 w-8 h-[1px] bg-[#E8DDD3]" />

            <p className="font-script text-2xl sm:text-[1.75rem] text-[#D48170] font-medium tracking-wide">
              so... dinner and photobooth later?
            </p>

            {/* Tiny Heart Doodle underneath */}
            <div className="mt-4 text-[#D48170] animate-gentle-float">
              <TinyHandHeart className="w-6 h-6 stroke-[2.4]" color="#D48170" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
