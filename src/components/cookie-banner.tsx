'use client';

import { useState, useEffect } from 'react';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('nexterafarms-cookie-consent');
    if (!consent) {
      // Small delay so the page loads first
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('nexterafarms-cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('nexterafarms-cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6 animate-in slide-in-from-bottom-4 fade-in duration-500">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-border/40 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-foreground text-[15px] leading-relaxed">
            We use cookies to improve your browsing experience and analyze site traffic. By clicking &quot;Accept&quot;, you consent to our use of cookies.{' '}
            <a href="/privacy" className="text-[oklch(0.35_0.13_155)] underline underline-offset-2 hover:text-[oklch(0.24_0.08_155)]">
              Privacy Policy
            </a>
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-5 py-2.5 rounded-full text-[15px] font-medium text-foreground/70 hover:text-foreground hover:bg-muted transition-all min-h-[44px]"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-5 py-2.5 rounded-full text-[15px] font-semibold bg-[oklch(0.35_0.13_155)] text-white hover:bg-[oklch(0.30_0.11_155)] transition-all min-h-[44px] shadow-sm"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
