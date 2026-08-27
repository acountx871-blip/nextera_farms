'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Phone, Menu } from 'lucide-react';
import Image from 'next/image';

interface NavbarProps {
  activePage: 'home' | 'services' | 'gallery';
  onNavigate: (page: 'home' | 'services' | 'gallery') => void;
}

export function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { key: 'home' as const, label: 'Home' },
    { key: 'services' as const, label: 'Services' },
    { key: 'gallery' as const, label: 'Gallery' },
  ];

  const handleNav = (page: 'home' | 'services' | 'gallery') => {
    onNavigate(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[oklch(0.32_0.11_155)] backdrop-blur-md shadow-md border-b border-white/10"
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Mobile: 64px height, Desktop: 72px — generous touch targets */}
        <div className="flex items-center justify-between h-16 sm:h-[72px]">
          {/* Logo — large touch target */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2.5 group min-h-[44px]"
            aria-label="Nexterafarms Home"
          >
            <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-full overflow-hidden shrink-0 ring-2 ring-[oklch(0.78_0.14_75)] ring-offset-2 ring-offset-[oklch(0.32_0.11_155)]">
              <Image
                src="/images/logo.jpg"
                alt="Nexterafarms Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </button>

          {/* Desktop Nav — generous padding for 44px+ touch targets */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNav(item.key)}
                className={`px-5 py-2.5 rounded-full text-[15px] font-medium transition-all duration-200 min-h-[44px] ${
                  activePage === item.key
                    ? 'bg-white/20 text-white shadow-sm'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Call Now + Mobile Menu */}
          <div className="flex items-center gap-3">
            <Button
              asChild
              className="hidden sm:inline-flex bg-[oklch(0.78_0.14_75)] hover:bg-[oklch(0.72_0.14_75)] text-[oklch(0.20_0.08_55)] font-semibold rounded-full px-6 py-2.5 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.03] min-h-[44px] text-[15px]"
            >
              <a href="tel:+233244482288">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>

            {/* Mobile menu — 44px+ touch target */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full min-w-[44px] min-h-[44px] text-white"
                  aria-label="Open navigation menu"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 pt-14 bg-white">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <button
                      key={item.key}
                      onClick={() => handleNav(item.key)}
                      className={`text-left px-5 py-4 rounded-xl text-[17px] font-medium transition-colors min-h-[52px] ${
                        activePage === item.key
                          ? 'bg-[oklch(0.35_0.13_155)]/10 text-[oklch(0.35_0.13_155)]'
                          : 'text-foreground/80 hover:bg-muted'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="pt-6 mt-4 border-t border-border">
                    <Button
                      asChild
                      className="w-full bg-[oklch(0.78_0.14_75)] hover:bg-[oklch(0.70_0.14_75)] text-[oklch(0.20_0.08_55)] font-semibold rounded-full shadow-lg min-h-[52px] text-base"
                    >
                      <a href="tel:+233244482288">
                        <Phone className="w-5 h-5 mr-2.5" />
                        Call Now
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}