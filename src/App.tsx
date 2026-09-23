import React from 'react';
import { HeroSection } from './components/HeroSection';
import { InvitationDetails } from './components/InvitationDetails';
import { PersonalNote } from './components/PersonalNote';
import { RsvpSection } from './components/RsvpSection';
import { TinyHandHeart, SparkleDoodle, DoodleStar } from './components/Doodles';

export default function App() {
  const scrollToDetails = () => {
    const el = document.getElementById('invitation-details');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F5] text-[#3D2E28] font-sans-custom relative selection:bg-[#F3D8D8] selection:text-[#3D2E28] overflow-x-hidden">
      {/* Subtle top subtle status or intimate badge */}
      <header className="pt-6 pb-2 px-6 flex items-center justify-between max-w-lg mx-auto opacity-75">
        <div className="flex items-center gap-1.5 text-xs text-[#9E877C] font-light">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8A598]" />
          <span>a little note for you</span>
        </div>
        <div className="font-script text-base text-[#D48170]">
          25.09.2026
        </div>
      </header>

      {/* Main Content Flow */}
      <main className="max-w-xl mx-auto">
        <HeroSection onScrollToDetails={scrollToDetails} />

        {/* Soft Divider */}
        <div className="flex items-center justify-center gap-2 py-4 text-[#D48170]/40">
          <DoodleStar className="w-3.5 h-3.5" />
          <span className="w-12 h-[1px] bg-[#EFE3D8]" />
          <TinyHandHeart className="w-3.5 h-3.5" />
          <span className="w-12 h-[1px] bg-[#EFE3D8]" />
          <DoodleStar className="w-3.5 h-3.5" />
        </div>

        <InvitationDetails />

        <PersonalNote />

        <RsvpSection />
      </main>

      {/* Warm Minimal Footer */}
      <footer className="py-12 px-6 text-center text-xs text-[#A89287] font-light">
        <div className="flex items-center justify-center gap-1.5 mb-1.5 font-script text-lg text-[#D48170]">
          <span>made with love just for you</span>
          <TinyHandHeart className="w-4 h-4 inline-block" />
        </div>
        <p className="text-[11px] text-[#B8A398]">
          see you friday evening ♡
        </p>
      </footer>
    </div>
  );
}
