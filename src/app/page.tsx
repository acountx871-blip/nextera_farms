'use client';

import { useState, useEffect, useCallback } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { HomeSection } from '@/components/home-section';
import { ServicesSection } from '@/components/services-section';
import { GallerySection } from '@/components/gallery-section';
import { FarmClickAnimation } from '@/components/farm-click-animation';
import { StickyMobileCTA } from '@/components/sticky-mobile-cta';

type PageKey = 'home' | 'services' | 'gallery';

export default function Page() {
  const [activePage, setActivePage] = useState<PageKey>('home');

  const handleNavigate = useCallback((page: PageKey) => {
    setActivePage(page);
  }, []);

  // Lock body scroll when lightbox is open (gallery)
  useEffect(() => {
    document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [activePage]);

  return (
    <FarmClickAnimation>
      <div className="min-h-screen flex flex-col">
        <Navbar activePage={activePage} onNavigate={handleNavigate} />
        <main className="flex-1 pb-20 sm:pb-0">
          {activePage === 'home' && <HomeSection onNavigate={handleNavigate} />}
          {activePage === 'services' && <ServicesSection />}
          {activePage === 'gallery' && <GallerySection />}
        </main>
        <Footer onNavigate={handleNavigate} />
        <StickyMobileCTA />
      </div>
    </FarmClickAnimation>
  );
}
