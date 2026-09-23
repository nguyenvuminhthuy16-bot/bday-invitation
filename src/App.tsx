import React, { useRef, useState } from 'react';
import { InvitationCard } from './components/InvitationCard';
import { ExportToolbar } from './components/ExportToolbar';
import { TinyHandHeart, SparkleDoodle, DoodleStar } from './components/Doodles';
import { Copy, Check, Mail, Heart } from 'lucide-react';

export default function App() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [copiedSubject, setCopiedSubject] = useState(false);
  const [copiedBody, setCopiedBody] = useState(false);

  const suggestedSubject = "a little dinner invitation for you ♡";
  const suggestedBody = "hey cutiepie,\n\ni made this little invitation for you. open the attached image! ♡\n\nsee you on friday at 18:30,\ni love you!";

  const copyText = (text: string, type: 'subject' | 'body') => {
    navigator.clipboard.writeText(text);
    if (type === 'subject') {
      setCopiedSubject(true);
      setTimeout(() => setCopiedSubject(false), 2000);
    } else {
      setCopiedBody(true);
      setTimeout(() => setCopiedBody(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F5] text-[#3D2E28] font-sans-custom relative selection:bg-[#F3D8D8] selection:text-[#3D2E28] pb-16 overflow-x-hidden">
      {/* Decorative ambient doodles */}
      <div className="fixed top-12 left-6 text-[#E8A598]/40 pointer-events-none hidden md:block">
        <SparkleDoodle className="w-6 h-6 animate-gentle-float" />
      </div>
      <div className="fixed bottom-16 right-8 text-[#D48170]/30 pointer-events-none hidden md:block">
        <TinyHandHeart className="w-6 h-6 animate-pulse-subtle" />
      </div>

      {/* Floating Export Toolbar */}
      <header className="pt-4">
        <ExportToolbar cardRef={cardRef} />
      </header>

      {/* Main Container */}
      <main className="max-w-xl mx-auto px-4 sm:px-6">
        {/* Printable / Email-Ready Invitation Card */}
        <div className="my-2">
          <InvitationCard ref={cardRef} />
        </div>

        {/* Email Companion / Quick Helper Section */}
        <div className="mt-8 bg-white/70 backdrop-blur-xs rounded-2xl p-5 sm:p-6 border border-[#EFE5DB] shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <Mail className="w-4 h-4 text-[#D48170]" />
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#9E877C]">
              Email Helper (Optional)
            </h3>
          </div>

          <div className="space-y-3">
            {/* Subject suggestion */}
            <div className="p-3 rounded-xl bg-[#FAF5F0] border border-[#F0E6DC] flex items-center justify-between gap-2">
              <div className="text-xs text-[#3D2E28] truncate">
                <span className="text-[#A89287] mr-1.5 font-light">Subject:</span>
                <span className="font-medium">{suggestedSubject}</span>
              </div>
              <button
                type="button"
                onClick={() => copyText(suggestedSubject, 'subject')}
                className="shrink-0 text-xs text-[#7A665E] hover:text-[#3D2E28] p-1.5 rounded-md hover:bg-white transition-colors"
                title="Copy subject line"
              >
                {copiedSubject ? (
                  <Check className="w-3.5 h-3.5 text-[#5A8763]" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-[#A89287]" />
                )}
              </button>
            </div>

            {/* Body suggestion */}
            <div className="p-3 rounded-xl bg-[#FAF5F0] border border-[#F0E6DC] flex items-start justify-between gap-2">
              <div className="text-xs text-[#7A665E] whitespace-pre-line leading-relaxed font-light">
                {suggestedBody}
              </div>
              <button
                type="button"
                onClick={() => copyText(suggestedBody, 'body')}
                className="shrink-0 text-xs text-[#7A665E] hover:text-[#3D2E28] p-1.5 rounded-md hover:bg-white transition-colors mt-0.5"
                title="Copy email message"
              >
                {copiedBody ? (
                  <Check className="w-3.5 h-3.5 text-[#5A8763]" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-[#A89287]" />
                )}
              </button>
            </div>
          </div>

          <p className="text-[11px] text-[#A89287] mt-3 italic text-center">
            Tip: Download the image as PNG, attach it to your email or paste it straight into your email body! ♡
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-xs text-[#A89287] font-light">
        <div className="flex items-center justify-center gap-1.5 mb-1 font-script text-lg text-[#D48170]">
          <span>made with love for someone special</span>
          <Heart className="w-3.5 h-3.5 fill-[#D48170]" />
        </div>
        <p className="text-[11px] text-[#B8A398]">
          25.09.2026 · 15 Grams Homemade Pasta + Photobooth ♡
        </p>
      </footer>
    </div>
  );
}
