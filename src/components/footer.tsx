'client';

import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

interface FooterProps {
  onNavigate: (page: 'home' | 'services' | 'gallery') => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[oklch(0.16_0.025_155)] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="Nexterafarms Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight leading-none">
                  Nextera<span className="text-[oklch(0.78_0.14_75)]">farms</span>
                </span>
                <span className="text-[10px] tracking-[0.15em] uppercase text-white/50">
                  Poultry & Swine
                </span>
              </div>
            </div>
            <p className="text-white/55 leading-relaxed text-[15px]">
              Raising premium poultry and swine with care, commitment, and respect for nature. Delivering farm-fresh quality to your family.
            </p>
          </div>

          {/* Quick Links — 44px touch targets */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-[0.15em] text-white/70 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-1">
              {['home', 'services', 'gallery'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      onNavigate(item as 'home' | 'services' | 'gallery');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-white/55 hover:text-white text-[15px] transition-colors capitalize py-2 min-h-[44px] block"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-[0.15em] text-white/70 mb-5">
              Our Products
            </h4>
            <ul className="space-y-1">
              {['Farm-Fresh Eggs', 'Muscovy Ducks', 'Free-Range Chicken', 'Fresh Pork', 'Weaner Piglets'].map((item) => (
                <li key={item}>
                  <span className="text-white/55 text-[15px] py-1.5 block">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-[0.15em] text-white/70 mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <Phone className="w-4.5 h-4.5 mt-0.5 text-[oklch(0.78_0.14_75)] shrink-0" />
                  <div>
                    <a href="tel:+233244482288" className="text-white/55 hover:text-white transition-colors text-[15px]">
                      024 448 2288
                    </a>
                    <a href="tel:+233249608178" className="text-white/55 hover:text-white transition-colors text-[15px] block mt-1">
                      024 960 8178
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4.5 h-4.5 mt-0.5 text-[oklch(0.78_0.14_75)] shrink-0" />
                <a href="mailto:nexterafarms1@gmail.com" className="text-white/55 hover:text-white transition-colors text-[15px]">
                  nexterafarms1@gmail.com
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/qBfywoJcq1dEWVh39" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                  <MapPin className="w-4.5 h-4.5 mt-0.5 text-[oklch(0.78_0.14_75)] shrink-0" />
                  <span className="text-white/55 group-hover:text-white transition-colors text-[15px]">View on Google Maps</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ═══ EMBEDDED MAP ═══ */}
        <div className="mt-14 rounded-2xl overflow-hidden border border-white/10">
          <iframe
            src="https://maps.google.com/maps?q=Nextera+Farms+5.698251,-0.515985&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nextera Farms Location"
            className="w-full"
          />
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/35">
            &copy; {new Date().getFullYear()} Nexterafarms. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="/privacy" className="text-sm text-white/35 hover:text-white/55 transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-sm text-white/35 hover:text-white/55 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
