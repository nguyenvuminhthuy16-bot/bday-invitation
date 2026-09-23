import React, { useState, useEffect } from 'react';
import { TinyHandHeart, SparkleDoodle, DoodleStar } from './Doodles';
import { FloatingHeartsBurst } from './FloatingHearts';
import { playGentleChime } from './AudioChime';
import { Heart, Sparkles, MapPin, Calendar, Check, RotateCcw } from 'lucide-react';

export function RsvpSection() {
  const [hasConfirmed, setHasConfirmed] = useState(false);
  const [showHeartsBurst, setShowHeartsBurst] = useState(false);
  const [thinkCount, setThinkCount] = useState(0);
  const [thinkOffset, setThinkOffset] = useState({ x: 0, y: 0 });
  const [extraHugsCount, setExtraHugsCount] = useState(0);

  // Playful dodge phrases for "let me think..."
  const thinkPhrases = [
    "let me think...",
    "you know you want to ♡",
    "pasta is waiting though 🍝",
    "there might be dessert 🍰",
    "are you really thinking? ;)",
    "wrong button silly ♡",
    "okay, only yes allowed!",
  ];

  const handleThinkClickOrHover = (e: React.MouseEvent | React.TouchEvent) => {
    // Increment dodge count
    setThinkCount((prev) => prev + 1);

    // Playful small random offset that stays within reasonable bounds
    const maxOffset = 38;
    const randomX = (Math.random() - 0.5) * maxOffset * 2;
    const randomY = (Math.random() - 0.5) * maxOffset * 1.5;
    setThinkOffset({ x: randomX, y: randomY });
  };

  const handleYes = () => {
    playGentleChime();
    setHasConfirmed(true);
    setShowHeartsBurst(true);
  };

  const handleReset = () => {
    setHasConfirmed(false);
    setThinkCount(0);
    setThinkOffset({ x: 0, y: 0 });
    setExtraHugsCount(0);
  };

  // Countdown timer to September 25, 2026 at 18:30:00
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-09-25T18:30:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const currentThinkText = thinkPhrases[Math.min(thinkCount, thinkPhrases.length - 1)];

  return (
    <section id="rsvp-section" className="py-16 px-6 relative overflow-hidden">
      {showHeartsBurst && (
        <FloatingHeartsBurst onComplete={() => setShowHeartsBurst(false)} />
      )}

      <div className="max-w-md mx-auto text-center">
        {!hasConfirmed ? (
          <div className="bg-white/70 backdrop-blur-xs rounded-3xl p-8 sm:p-10 border border-[#F0E4DA] shadow-[0_10px_30px_-10px_rgba(150,115,100,0.06)]">
            {/* Playful prompt */}
            <div className="inline-flex items-center gap-1 text-[#D48170] mb-2 animate-gentle-float">
              <SparkleDoodle className="w-4 h-4" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-medium text-[#3D2E28] tracking-tight mb-2">
              so... are you coming? ♡
            </h3>

            <p className="text-sm text-[#877268] font-light mb-8 max-w-xs mx-auto">
              (there&apos;s really only one right answer here)
            </p>

            {/* Buttons Area */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative min-h-[110px]">
              {/* YES BUTTON (prominent) */}
              <button
                type="button"
                onClick={handleYes}
                style={{
                  transform: thinkCount > 0 ? `scale(${Math.min(1 + thinkCount * 0.05, 1.25)})` : 'scale(1)',
                }}
                className="w-full sm:w-auto z-10 px-8 py-3.5 rounded-full bg-[#D48170] text-white font-medium text-base shadow-sm hover:bg-[#C27160] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D48170] focus-visible:ring-offset-2"
              >
                <span>yes, obviously ♡</span>
                <Heart className="w-4 h-4 fill-white transition-transform group-hover:scale-125" />
              </button>

              {/* PLAYFUL "LET ME THINK..." BUTTON */}
              <button
                type="button"
                onMouseEnter={handleThinkClickOrHover}
                onClick={handleThinkClickOrHover}
                onTouchStart={handleThinkClickOrHover}
                style={{
                  transform: `translate(${thinkOffset.x}px, ${thinkOffset.y}px)`,
                  transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.2s',
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#E8DDD2] bg-[#FAF5F0] text-xs sm:text-sm text-[#7A665E] hover:text-[#3D2E28] hover:border-[#D48170]/40 active:bg-[#F3ECE4] cursor-pointer select-none transition-colors whitespace-nowrap focus:outline-none"
              >
                {currentThinkText}
              </button>
            </div>

            {thinkCount > 0 && (
              <p className="text-xs text-[#A89388] mt-6 italic animate-pulse-subtle">
                psst: look how happy that &quot;yes&quot; button looks
              </p>
            )}
          </div>
        ) : (
          /* SUCCESS STATE AFTER SAYING YES */
          <div className="bg-[#FFFDFB] rounded-3xl p-8 sm:p-10 border border-[#F0E4DA] shadow-[0_14px_40px_-10px_rgba(150,115,100,0.1)] transition-all animate-in fade-in zoom-in-95 duration-500">
            {/* Cute confirmation celebration badge */}
            <div className="w-14 h-14 mx-auto rounded-full bg-[#FAF0EC] text-[#D48170] flex items-center justify-center mb-4 shadow-xs">
              <Heart className="w-7 h-7 fill-[#D48170]" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-medium text-[#3D2E28] tracking-tight mb-1">
              yay ♡ see you on 25.09 at 18:30
            </h3>

            <p className="font-script text-xl sm:text-2xl text-[#D48170] mb-6">
              i can&apos;t wait to celebrate you.
            </p>

            {/* Little ticket confirmation stub */}
            <div className="my-6 p-5 rounded-2xl bg-[#FFF9F5] border border-dashed border-[#E5D7CC] text-left">
              <div className="flex items-center justify-between text-xs text-[#9E877C] uppercase tracking-wider mb-2">
                <span>Date Night Pass</span>
                <span className="flex items-center gap-1 text-[#5A8763]">
                  <Check className="w-3.5 h-3.5" />
                  Confirmed
                </span>
              </div>
              <div className="text-sm font-medium text-[#3D2E28]">
                Homemade Kitchen
              </div>
              <div className="text-xs text-[#7A665E] mt-0.5">
                Friday, 25 September 2026 · 18:30 · Dinner + Photobooth 📸
              </div>
              <div className="text-xs text-[#B29285] mt-2 italic">
                Reservation: Table for my cutiepie &amp; endless cute photos
              </div>
            </div>

            {/* Countdown card */}
            <div className="mb-6 pt-2">
              <div className="text-xs uppercase tracking-widest text-[#A89287] mb-3 font-medium">
                Counting down the days
              </div>
              <div className="grid grid-cols-4 gap-2 text-center max-w-xs mx-auto">
                <div className="p-2.5 rounded-xl bg-[#FAF3EE] border border-[#F2E7DC]">
                  <span className="block text-xl font-medium text-[#3D2E28]">{timeLeft.days}</span>
                  <span className="text-[10px] uppercase text-[#A89287]">days</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAF3EE] border border-[#F2E7DC]">
                  <span className="block text-xl font-medium text-[#3D2E28]">{timeLeft.hours}</span>
                  <span className="text-[10px] uppercase text-[#A89287]">hours</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAF3EE] border border-[#F2E7DC]">
                  <span className="block text-xl font-medium text-[#3D2E28]">{timeLeft.minutes}</span>
                  <span className="text-[10px] uppercase text-[#A89287]">mins</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAF3EE] border border-[#F2E7DC]">
                  <span className="block text-xl font-medium text-[#3D2E28]">{timeLeft.seconds}</span>
                  <span className="text-[10px] uppercase text-[#A89287]">secs</span>
                </div>
              </div>
            </div>

            {/* Extra cute interactions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  playGentleChime();
                  setShowHeartsBurst(true);
                  setExtraHugsCount((c) => c + 1);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#FAF3EE] hover:bg-[#F2E6DC] text-[#7A665E] hover:text-[#3D2E28] text-xs font-medium border border-[#E8DDD2] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D48170]" />
                <span>
                  {extraHugsCount === 0
                    ? 'Send extra hugs ♡'
                    : `${extraHugsCount} hug${extraHugsCount > 1 ? 's' : ''} sent! ♡`}
                </span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-[#A89287] hover:text-[#3D2E28] transition-colors flex items-center gap-1 py-1 px-2"
                title="Play again"
              >
                <RotateCcw className="w-3 h-3" />
                <span>reset</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
