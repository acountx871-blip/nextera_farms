'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Phone, X, ChevronLeft, ChevronRight } from 'lucide-react';

/* ═══ ALL GALLERY IMAGES ═══ */
const allImages = [
  { src: '/images/ducks-grassy-yard.jpg', alt: 'Muscovy ducks on open grassy yard', category: 'Poultry', caption: 'Our Muscovy ducks freely foraging on lush green pasture' },
  { src: '/images/muscovy-ducks-closeup.jpg', alt: 'Close-up of Muscovy ducks', category: 'Poultry', caption: 'Muscovy ducks — known for premium lean, flavorful meat' },
  { src: '/images/poultry-coop-structure.jpg', alt: 'Open-air poultry housing', category: 'Farm', caption: 'Our spacious open-air coop designed for natural ventilation' },
  { src: '/images/laying-hens-barn.jpg', alt: 'Laying hens in barn', category: 'Poultry', caption: 'Healthy brown laying hens in our well-maintained barn' },
  { src: '/images/laying-hens-dense.jpg', alt: 'Dense laying hen flock', category: 'Poultry', caption: 'A thriving flock of our premium egg-laying hens' },
  { src: '/images/poultry-house-open.jpg', alt: 'Open-sided poultry house', category: 'Farm', caption: 'Open-sided poultry housing with natural light and airflow' },
  { src: '/images/chicken-barn-indoor.jpg', alt: 'Indoor chicken barn', category: 'Poultry', caption: 'Clean, well-ventilated indoor poultry facility' },
  { src: '/images/spotted-pig-real.jpg', alt: 'Spotted pig at Nexterafarms', category: 'Swine', caption: 'Our premium spotted swine — bred for quality and flavor' },
  { src: '/images/piglet-drinking-real.jpg', alt: 'Piglet drinking water', category: 'Swine', caption: 'Young piglet at our automated watering station' },
  { src: '/images/upload-pork-1.jpg', alt: 'Fresh pork meat from Nexterafarms', category: 'Products', caption: 'Fresh, premium-quality pork meat — whole or in portions' },
  { src: '/images/upload-pork-2.jpg', alt: 'Pork meat ready for delivery', category: 'Products', caption: 'Our fresh pork meat, prepared and ready for delivery' },
];

const categories = ['All', 'Farm', 'Poultry', 'Swine', 'Products'] as const;
type Category = (typeof categories)[number];

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  /* Lock body scroll when lightbox is open */
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  const filtered = activeCategory === 'All'
    ? allImages
    : allImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex + 1) % filtered.length);
  };
  const goPrev = () => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  };

  /* Keyboard navigation for lightbox */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  });

  return (
    <div>
      {/* ═══ HERO BANNER ═══ */}
      <section className="relative pt-36 sm:pt-44 pb-24 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/spotted-pig-real.jpg"
            alt="Nexterafarms gallery"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-[oklch(0.78_0.14_75)] text-sm font-semibold uppercase tracking-[0.15em]">Life on the Farm</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mt-4 mb-6">
            Gallery
          </h1>
          <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
            Take a visual journey through our farm. See our animals, our practices, and the beautiful land that makes Nexterafarms special.
          </p>
        </div>
      </section>

      {/* ═══ FILTERS + GRID ═══ */}
      <section className="py-28 sm:py-36">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          {/* Category Filters — 44px touch targets */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-[15px] font-medium transition-all duration-200 min-h-[44px] ${
                  activeCategory === cat
                    ? 'bg-[oklch(0.35_0.13_155)] text-white shadow-sm'
                    : 'bg-muted text-muted-foreground hover:bg-[oklch(0.35_0.13_155)]/8 hover:text-[oklch(0.35_0.13_155)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid — generous gaps for white space */}
          {filtered.length > 0 && (
            <div className={`grid gap-5 sm:gap-6 ${
              filtered.length === 1 ? 'grid-cols-1 max-w-2xl mx-auto' :
              filtered.length === 2 ? 'grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto' :
              'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
            }`}>
              {filtered.map((img, index) => (
                <button
                  key={img.src}
                  onClick={() => openLightbox(index)}
                  className={`group relative overflow-hidden rounded-2xl bg-muted cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.35_0.13_155)] ${
                    index === 0 && filtered.length > 2 ? 'sm:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  <div className={`relative w-full ${index === 0 && filtered.length > 2 ? 'h-64 sm:h-80 lg:h-[420px]' : 'h-60 sm:h-72'}`}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes={index === 0 && filtered.length > 2 ? '(max-width: 1024px) 100vw, 66vw' : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-[oklch(0.78_0.14_75)] text-xs font-semibold uppercase tracking-wider">{img.category}</span>
                    <p className="text-white text-sm font-medium mt-1 leading-snug">{img.caption}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ═══ LIGHTBOX ═══ */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close button — 44px touch target */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Nav buttons — large touch targets */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 sm:left-6 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 sm:right-6 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </button>

          {/* Image + Caption */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[60vh] sm:h-[75vh]">
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <span className="text-[oklch(0.78_0.14_75)] text-xs font-semibold uppercase tracking-wider">{filtered[lightboxIndex].category}</span>
              <p className="text-white text-base sm:text-lg font-medium mt-1.5">{filtered[lightboxIndex].caption}</p>
            </div>
          </div>
        </div>
      )}

      {/* ═══ CTA ═══ */}
      <section className="py-28 sm:py-36 bg-[oklch(0.97_0.008_120)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-foreground mb-5">
            Want to Visit Our Farm?
          </h2>
          <p className="text-foreground/65 max-w-2xl mx-auto leading-relaxed mb-10 text-lg">
            We welcome visitors! Schedule a farm tour to see our operations firsthand.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[oklch(0.78_0.14_75)] hover:bg-[oklch(0.70_0.14_75)] text-[oklch(0.20_0.08_55)] font-bold rounded-full px-10 py-4 text-lg shadow-2xl transition-all duration-200 hover:scale-[1.04] min-h-[52px]"
          >
            <a href="tel:+233244482288">
              <Phone className="w-5 h-5 mr-2.5" />
              Call Now
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
