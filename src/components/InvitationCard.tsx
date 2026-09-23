import React, { forwardRef } from 'react';
import { PastaDoodle } from './PastaDoodle';
import { PhotoboothStrip } from './PhotoboothStrip';
import { TinyHandHeart, SparkleDoodle, DoodleStar, WashiTape } from './Doodles';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

export const InvitationCard = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      id="printable-card"
      className="w-full max-w-[580px] mx-auto bg-[#FFFDF9] rounded-[32px] p-7 sm:p-10 shadow-[0_16px_50px_-12px_rgba(150,115,100,0.12)] border border-[#EFE4D8] relative overflow-hidden text-[#3D2E28]"
      style={{
        boxSizing: 'border-box',
      }}
    >
      {/* Soft warm paper background accents */}
      <div className="absolute top-0 right-0 w-52 h-52 bg-[#FDEFE8]/40 rounded-full blur-2xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#FAF1E8]/50 rounded-full blur-2xl -z-10 pointer-events-none" />

      {/* Postcard Airmail / Stamp Header */}
      <div className="flex items-center justify-between border-b border-[#F0E5DC] pb-4 mb-8">
        <div className="flex items-center gap-2">
          {/* Cute Postage Stamp */}
          <div className="w-12 h-14 bg-[#FAF2EC] border border-dashed border-[#D48170]/60 rounded-md p-1 flex flex-col items-center justify-between rotate-1">
            <span className="text-[8px] font-semibold text-[#D48170] tracking-widest uppercase">LOVE</span>
            <TinyHandHeart className="w-4 h-4 text-[#D48170]" />
            <span className="text-[7px] text-[#A89287]">25.09</span>
          </div>
        </div>

        {/* Wax Seal / Stamp Mark */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF3EE] border border-[#ECDDCF] text-[#9E877C] text-[11px]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D48170]" />
          <span>table reserved for two</span>
        </div>
      </div>

      {/* Hero Headline Section */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1 text-[#D48170] font-script text-2xl sm:text-3xl mb-1 select-none">
          <span>hey birthday girl ♡</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-medium text-[#3D2E28] tracking-tight leading-tight mb-2">
          let me take you out <br />
          <span className="relative inline-block">
            for dinner?
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

        <p className="text-sm sm:text-base text-[#7A665E] font-light max-w-xs mx-auto leading-relaxed">
          just you, me, and some good pasta.
        </p>
      </div>

      {/* Cute Pasta Illustration */}
      <div className="flex justify-center -my-1">
        <PastaDoodle className="w-48 h-40 sm:w-52 sm:h-44" />
      </div>

      {/* Cute banner ribbon (replaces CTA button) */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FAF3EE] border border-[#ECDDCF] text-xs font-medium text-[#7A665E] shadow-2xs">
          <SparkleDoodle className="w-3.5 h-3.5 text-[#D48170]" />
          <span>an evening planned just for you</span>
          <TinyHandHeart className="w-3.5 h-3.5 text-[#D48170]" />
        </div>
      </div>

      {/* Invitation Details Card inside email card */}
      <div className="bg-white/95 rounded-2xl p-6 sm:p-7 border border-[#EFE4DA] shadow-[0_4px_20px_-4px_rgba(150,115,100,0.05)] mb-8">
        <div className="space-y-4 text-left">
          {/* DATE */}
          <div className="flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-full bg-[#FAF3EE] text-[#D48170] flex items-center justify-center shrink-0 mt-0.5">
              <Calendar className="w-3.5 h-3.5 stroke-[1.8]" />
            </div>
            <div>
              <div className="text-[10px] font-semibold tracking-wider text-[#A89287] uppercase">
                Date
              </div>
              <div className="text-base font-medium text-[#3D2E28]">
                25 September 2026 · Friday evening
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-[#F5EBE1] w-full" />

          {/* TIME */}
          <div className="flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-full bg-[#FAF3EE] text-[#D48170] flex items-center justify-center shrink-0 mt-0.5">
              <Clock className="w-3.5 h-3.5 stroke-[1.8]" />
            </div>
            <div>
              <div className="text-[10px] font-semibold tracking-wider text-[#A89287] uppercase">
                Time
              </div>
              <div className="text-base font-medium text-[#3D2E28]">
                18:30
              </div>
              <div className="text-xs text-[#8F796F] font-light">
                right around golden hour
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-[#F5EBE1] w-full" />

          {/* PLACE */}
          <div className="flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-full bg-[#FAF3EE] text-[#D48170] flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="w-3.5 h-3.5 stroke-[1.8]" />
            </div>
            <div>
              <div className="text-[10px] font-semibold tracking-wider text-[#A89287] uppercase">
                Place
              </div>
              <div className="text-base font-medium text-[#3D2E28]">
                15 Grams Homemade Pasta
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-[#F5EBE1] w-full" />

          {/* DRESS CODE */}
          <div className="flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-full bg-[#FAF3EE] text-[#D48170] flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-3.5 h-3.5 stroke-[1.8]" />
            </div>
            <div>
              <div className="text-[10px] font-semibold tracking-wider text-[#A89287] uppercase">
                Dress Code
              </div>
              <div className="text-base font-medium text-[#3D2E28] flex items-center gap-1.5">
                <span>Just to be you</span>
                <TinyHandHeart className="w-3.5 h-3.5 text-[#D48170]" />
              </div>
              <div className="text-xs text-[#8F796F] font-light">
                whatever makes you feel comfy &amp; beautiful
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Handwritten Note with Washi Tape */}
      <div className="relative mb-8 text-center">
        <div className="flex justify-center -mb-3 relative z-10">
          <WashiTape className="w-24 h-5 shadow-2xs" />
        </div>
        <div className="bg-[#FFFDFB] rounded-2xl p-6 sm:p-7 border border-[#EFE3D8] shadow-2xs">
          <p className="font-script text-2xl sm:text-[1.65rem] text-[#3D2E28] leading-relaxed select-none">
            just one month but i love you<br />
            more than i can say... my cutiepie ♡
          </p>

          <div className="my-3.5 w-8 h-[1px] bg-[#E8DDD3] mx-auto" />

          <p className="font-script text-2xl sm:text-[1.7rem] text-[#D48170] font-medium">
            so... dinner and photobooth later?
          </p>

          <div className="mt-3 flex justify-center text-[#D48170]">
            <TinyHandHeart className="w-5 h-5" color="#D48170" />
          </div>
        </div>
      </div>

      {/* Photobooth Strip Feature */}
      <div className="mb-8 flex justify-center">
        <PhotoboothStrip />
      </div>

      {/* Replaced RSVP Section: Cute Static Sign-off for Email */}
      <div className="pt-6 border-t border-dashed border-[#EAE0D5] text-center">
        <div className="inline-flex items-center gap-1 text-[#D48170] mb-2">
          <SparkleDoodle className="w-4 h-4" />
          <span className="font-script text-xl text-[#D48170]">can&apos;t wait to see you</span>
          <SparkleDoodle className="w-4 h-4" />
        </div>

        <div className="p-4 rounded-2xl bg-[#FAF3EE] border border-[#ECDDCF] max-w-sm mx-auto mb-4">
          <div className="text-xs uppercase tracking-wider font-semibold text-[#A89287] mb-1">
            RSVP Status
          </div>
          <div className="text-sm font-medium text-[#3D2E28] flex items-center justify-center gap-1.5">
            <span>You already said yes in my heart</span>
            <TinyHandHeart className="w-4 h-4 text-[#D48170]" />
          </div>
          <p className="text-[11px] text-[#8F796F] mt-1 italic">
            (p.s. you can&apos;t say no :p)
          </p>
        </div>

        <div className="font-script text-lg text-[#7A665E]">
          see you on 25.09 at 18:30 ♡
        </div>
      </div>
    </div>
  );
});

InvitationCard.displayName = 'InvitationCard';
