import React, { useState } from 'react';
import { Download, Copy, Check, Mail, Sparkles } from 'lucide-react';
import { toPng, toBlob } from 'html-to-image';

interface ExportToolbarProps {
  cardRef: React.RefObject<HTMLDivElement | null>;
}

export function ExportToolbar({ cardRef }: ExportToolbarProps) {
  const [downloading, setDownloading] = useState(false);
  const [copying, setCopying] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleDownloadImage = async () => {
    if (!cardRef.current) return;
    try {
      setDownloading(true);
      // Wait a moment for fonts to be ready
      if (document.fonts) {
        await document.fonts.ready;
      }
      const dataUrl = await toPng(cardRef.current, {
        pixelRatio: 2, // 2x crisp retina resolution for email
        cacheBust: true,
        backgroundColor: '#FFFDF9',
      });

      const link = document.createElement('a');
      link.download = 'birthday-dinner-invitation.png';
      link.href = dataUrl;
      link.click();
      showToast('Image downloaded! Ready to attach to your email 💌');
    } catch (err) {
      console.error('Failed to export image', err);
      showToast('Could not auto-download. Please take a quick screenshot of the card below!');
    } finally {
      setDownloading(false);
    }
  };

  const handleCopyImage = async () => {
    if (!cardRef.current) return;
    try {
      setCopying(true);
      if (document.fonts) {
        await document.fonts.ready;
      }
      const blob = await toBlob(cardRef.current, {
        pixelRatio: 2,
        cacheBust: true,
        backgroundColor: '#FFFDF9',
      });

      if (!blob) throw new Error('Blob creation failed');

      if (navigator.clipboard && typeof ClipboardItem !== 'undefined') {
        const item = new ClipboardItem({ 'image/png': blob });
        await navigator.clipboard.write([item]);
        showToast('Image copied to clipboard! Paste directly into your email with Ctrl+V / Cmd+V 📋');
      } else {
        // Fallback: download
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = 'birthday-dinner-invitation.png';
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
        showToast('Image downloaded! (Clipboard copy not supported in this browser)');
      }
    } catch (err) {
      console.error('Failed to copy image to clipboard', err);
      // Fallback to normal download
      handleDownloadImage();
    } finally {
      setCopying(false);
    }
  };

  return (
    <div className="sticky top-4 z-40 max-w-xl mx-auto px-4 mb-6">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="mb-3 p-3 rounded-2xl bg-[#3D2E28] text-[#FFF9F5] text-xs sm:text-sm font-medium shadow-lg flex items-center justify-between gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#E8A598]" />
            <span>{toastMessage}</span>
          </div>
          <button
            onClick={() => setToastMessage(null)}
            className="text-xs text-[#E8A598] hover:text-white px-2 py-0.5"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Action Bar */}
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-[#EFE5DB] shadow-[0_8px_30px_-8px_rgba(150,115,100,0.12)] flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-left">
          <div className="w-8 h-8 rounded-full bg-[#FAF3EE] text-[#D48170] flex items-center justify-center shrink-0">
            <Mail className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-[#3D2E28] flex items-center gap-1.5">
              <span>Email-ready Invitation Card</span>
              <span className="text-[10px] font-normal text-[#D48170] bg-[#FAF3EE] px-1.5 py-0.5 rounded-full">
                No buttons · 100% cute
              </span>
            </div>
            <div className="text-[11px] text-[#8F796F]">
              Attach as an image to surprise her in her inbox ♡
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            type="button"
            onClick={handleCopyImage}
            disabled={copying}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FAF3EE] hover:bg-[#F5ECE4] text-[#3D2E28] text-xs font-medium border border-[#E8DDD2] transition-colors cursor-pointer disabled:opacity-50"
            title="Copy directly to clipboard to paste into Gmail"
          >
            <Copy className="w-3.5 h-3.5 text-[#D48170]" />
            <span>{copying ? 'Copying...' : 'Copy Image'}</span>
          </button>

          <button
            type="button"
            onClick={handleDownloadImage}
            disabled={downloading}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#D48170] hover:bg-[#C27160] text-white text-xs font-medium shadow-xs transition-colors cursor-pointer disabled:opacity-50"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{downloading ? 'Saving...' : 'Download PNG'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
