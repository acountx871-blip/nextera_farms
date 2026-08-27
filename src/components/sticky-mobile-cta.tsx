'use client';

import { Phone } from 'lucide-react';

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-[oklch(0.32_0.11_155)]/95 backdrop-blur-md border-t border-white/10 px-4 py-3 safe-area-inset-bottom">
      <a
        href="tel:+233244482288"
        className="flex items-center justify-center gap-2.5 w-full bg-[oklch(0.78_0.14_75)] hover:bg-[oklch(0.72_0.14_75)] text-[oklch(0.20_0.08_55)] font-bold rounded-full py-3.5 text-base shadow-lg transition-all duration-200 min-h-[52px]"
      >
        <Phone className="w-5 h-5" />
        Call Now — 024 448 2288
      </a>
    </div>
  );
}
