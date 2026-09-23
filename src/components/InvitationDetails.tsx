import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Sparkles, Check, ExternalLink } from 'lucide-react';
import { TinyHandHeart } from './Doodles';

export function InvitationDetails() {
  const [calendarAdded, setCalendarAdded] = useState(false);

  // Google Calendar URL link
  const createGoogleCalendarUrl = () => {
    const title = encodeURIComponent("Dinner & Photobooth Date ♡");
    const details = encodeURIComponent("Dinner date at Homemade Kitchen + Photobooth photos later! ♡\nDress code: Just to be you!");
    const location = encodeURIComponent("Homemade Kitchen");
    // 25 September 2026, 18:30 to 21:00 (Local time)
    const dates = "20260925T183000/20260925T210000";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  const handleDownloadIcs = () => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Birthday Dinner//EN',
      'BEGIN:VEVENT',
      'UID:' + Date.now() + '@birthdaydinner',
      'DTSTAMP:20260923T000000Z',
      'DTSTART:20260925T183000',
      'DTEND:20260925T210000',
      'SUMMARY:Dinner & Photobooth Date ♡',
      'DESCRIPTION:Dinner at Homemade Kitchen + Photobooth date with your favorite person. Dress code: Just to be you ♡',
      'LOCATION:Homemade Kitchen',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'birthday-dinner-date.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setCalendarAdded(true);
    setTimeout(() => setCalendarAdded(false), 3000);
  };

  const mapsQuery = encodeURIComponent("Homemade Kitchen");
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  return (
    <section id="invitation-details" className="relative py-16 px-6 scroll-mt-6">
      <div className="max-w-md mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#9A7F73] mb-1.5 font-medium">
            <span className="w-4 h-[1px] bg-[#D48170]/40" />
            <span>the details</span>
            <span className="w-4 h-[1px] bg-[#D48170]/40" />
          </div>
          <h2 className="text-2xl font-medium text-[#3D2E28] tracking-tight">
            saved a table for two
          </h2>
        </div>

        {/* Clean Invitation Card */}
        <div className="relative bg-white rounded-3xl p-8 sm:p-9 shadow-[0_12px_36px_-12px_rgba(140,105,90,0.08)] border border-[#EFE5DB] transition-all duration-300">
          {/* Subtle card top accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#E8A598]/40 rounded-b-full" />

          <div className="space-y-7">
            {/* DATE */}
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-[#FAF3EE] text-[#D48170] flex items-center justify-center shrink-0 mt-0.5">
                <Calendar className="w-4 h-4 stroke-[1.8]" />
              </div>
              <div className="flex-1">
                <div className="text-[11px] font-semibold tracking-wider text-[#A89287] uppercase mb-1">
                  Date
                </div>
                <div className="text-lg font-medium text-[#3D2E28] leading-tight">
                  25 September 2026
                </div>
                <div className="text-sm text-[#7A665E] font-light mt-0.5">
                  Friday evening
                </div>
              </div>
            </div>

            <div className="h-[1px] bg-[#F5ECE4] w-full" />

            {/* TIME */}
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-[#FAF3EE] text-[#D48170] flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-4 h-4 stroke-[1.8]" />
              </div>
              <div className="flex-1">
                <div className="text-[11px] font-semibold tracking-wider text-[#A89287] uppercase mb-1">
                  Time
                </div>
                <div className="text-lg font-medium text-[#3D2E28] leading-tight">
                  18:30
                </div>
                <div className="text-sm text-[#7A665E] font-light mt-0.5">
                  right around golden hour
                </div>
              </div>
            </div>

            <div className="h-[1px] bg-[#F5ECE4] w-full" />

            {/* PLACE */}
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-[#FAF3EE] text-[#D48170] flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 stroke-[1.8]" />
              </div>
              <div className="flex-1">
                <div className="text-[11px] font-semibold tracking-wider text-[#A89287] uppercase mb-1">
                  Place
                </div>
                <div className="text-lg font-medium text-[#3D2E28] leading-tight">
                  Homemade Kitchen
                </div>
                <div className="mt-2.5">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#D48170] hover:text-[#B26454] transition-colors py-1 px-2.5 rounded-lg bg-[#FAF3EE] hover:bg-[#F5ECE4]"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3 stroke-[2]" />
                  </a>
                </div>
              </div>
            </div>

            <div className="h-[1px] bg-[#F5ECE4] w-full" />

            {/* DRESS CODE */}
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-[#FAF3EE] text-[#D48170] flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4 stroke-[1.8]" />
              </div>
              <div className="flex-1">
                <div className="text-[11px] font-semibold tracking-wider text-[#A89287] uppercase mb-1">
                  Dress Code
                </div>
                <div className="text-lg font-medium text-[#3D2E28] flex items-center gap-1.5">
                  <span>Just to be you</span>
                  <TinyHandHeart className="w-4 h-4 text-[#D48170] inline-block" />
                </div>
                <div className="text-sm text-[#7A665E] font-light mt-0.5">
                  wear whatever makes you feel happy and comfy
                </div>
              </div>
            </div>
          </div>

          {/* Quick Calendar Helper */}
          <div className="mt-8 pt-6 border-t border-[#F5ECE4] flex items-center justify-between gap-3 flex-wrap">
            <span className="text-xs text-[#9A7F73]">Don&apos;t want to forget?</span>
            <div className="flex items-center gap-2">
              <a
                href={createGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-[#7A665E] hover:text-[#3D2E28] py-1.5 px-3 rounded-full border border-[#E8DDD2] hover:bg-[#FAF3EE] transition-colors"
              >
                Google Cal
              </a>
              <button
                type="button"
                onClick={handleDownloadIcs}
                className="inline-flex items-center gap-1 text-xs font-medium text-[#7A665E] hover:text-[#3D2E28] py-1.5 px-3 rounded-full border border-[#E8DDD2] hover:bg-[#FAF3EE] transition-colors"
              >
                {calendarAdded ? (
                  <>
                    <Check className="w-3 h-3 text-[#5A8763]" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <span>.ics file</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
