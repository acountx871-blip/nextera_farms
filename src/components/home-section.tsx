'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Phone,
  Egg,
  Heart,
  Leaf,
  ShieldCheck,
  Truck,
  Sun,
  Award,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

/* ─── HERO SECTION TIPS ───
   • Full-screen with strong single message
   • High-contrast text (white on dark overlay)
   • One clear CTA above the fold
   • Short, punchy headline — no clutter
   • Generous padding
*/

const badges = [
  { icon: Leaf, label: 'Free Range' },
  { icon: Heart, label: 'Animal Welfare' },
  { icon: Sun, label: 'Natural Feed' },
  { icon: Award, label: 'Certified' },
  { icon: Truck, label: 'Fresh Delivery' },
];

const products = [
  {
    title: 'Farm-Fresh Eggs',
    description: 'Pasture-raised hens produce rich, golden-yolked eggs. Collected daily and delivered fresh to your door.',
    image: '/images/laying-hens-barn.jpg',
    icon: Egg,
    tag: 'Poultry',
  },
  {
    title: 'Premium Pork',
    description: 'Carefully bred swine yield tender, flavorful pork. From chops to belly, every cut meets our strict quality standards.',
    image: '/images/spotted-pig-real.jpg',
    icon: Award,
    tag: 'Swine',
  },
  {
    title: 'Muscovy Ducks',
    description: 'Our Muscovy ducks are raised in open, natural environments producing premium quality meat that is lean and flavorful.',
    image: '/images/muscovy-ducks-closeup.jpg',
    icon: Heart,
    tag: 'Poultry',
  },
  {
    title: 'Quality Breeding Stock',
    description: 'We supply healthy day-old chicks, ducklings, and weaner piglets to farmers and enthusiasts across the region.',
    image: '/images/piglet-drinking-real.jpg',
    icon: ShieldCheck,
    tag: 'Swine',
  },
];
interface HomeSectionProps {
  onNavigate: (page: 'home' | 'services' | 'gallery') => void;
}

export function HomeSection({ onNavigate }: HomeSectionProps) {
  return (
    <div>
      {/* ═══════════════════════════════════════════
          HERO — Full-screen, single message, clear CTA
          Video tip: dominant visual + concise headline
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ducks-grassy-yard.jpg"
            alt="Nexterafarms — Muscovy ducks on open pasture"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Stronger overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/65" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 py-36 sm:py-44 text-center">
          {/* Small label — high contrast white */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
            <Leaf className="w-3.5 h-3.5 text-[oklch(0.78_0.14_75)]" />
            <span className="text-white text-sm font-medium">Premium Poultry & Swine</span>
          </div>

          {/* Typography tip: larger, bolder headline with tight letter-spacing */}
          <h1 className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white tracking-tight leading-[1.05] mb-7">
            Farm-Fresh Quality,
            <br />
            <span className="text-[oklch(0.78_0.14_75)]">Raised With Care</span>
          </h1>

          {/* Subtext: shorter, more impactful */}
          <p className="text-lg sm:text-xl text-white/85 max-w-xl mx-auto mb-12 leading-relaxed">
            From our pastures to your table. Premium free-range poultry and quality swine products, raised the way nature intended.
          </p>

          {/* Single clear CTA — bigger touch target */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
            <Button
              size="lg"
              onClick={() => onNavigate('services')}
              className="bg-white/15 hover:bg-white/25 text-white border border-white/30 rounded-full px-10 py-4 text-lg backdrop-blur-sm transition-all duration-200 min-h-[52px]"
            >
              Our Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>


      </section>

      {/* ═══════════════════════════════════════════
          BADGES STRIP — Social proof & trust signals
      ═══════════════════════════════════════════ */}
      <section className="bg-[oklch(0.35_0.13_155)] py-6 sm:py-7">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-center gap-5 sm:gap-10 lg:gap-14 flex-wrap">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 text-white/90 whitespace-nowrap"
              >
                <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[oklch(0.78_0.14_75)]" />
                <span className="text-sm sm:text-[15px] font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ABOUT — Generous white space, strong contrast
      ═══════════════════════════════════════════ */}
      <section className="py-28 sm:py-36">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <span className="text-[oklch(0.35_0.13_155)] text-sm font-semibold uppercase tracking-[0.15em]">About Nexterafarms</span>
              <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-foreground mt-4 mb-7">
                A Legacy of Quality
              </h2>
              {/* Typography: 18px base, 1.7 line-height for readability */}
              <p className="text-foreground/75 leading-relaxed mb-6">
                At Nexterafarms, we believe that great food starts with great farming. Our family-owned operation is dedicated to raising poultry and swine the right way — on open pastures, with natural feed, and without shortcuts. Every animal on our farm is treated with respect and care, because we know that healthy, happy animals produce the finest quality products.
              </p>
              <p className="text-foreground/75 leading-relaxed mb-10">
                Our commitment extends beyond the farm gate. We maintain full transparency in our practices, ensuring that every egg, every cut of chicken, and every piece of pork that carries the Nexterafarms name meets the highest standards of quality, safety, and sustainability.
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                {['Ethical Farming', 'No Hormones', 'Sustainable Practices', 'Local Delivery'].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[oklch(0.35_0.13_155)] shrink-0" />
                    <span className="text-base font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/poultry-coop-structure.jpg"
                  alt="Nexterafarms open-air poultry housing facility"
                  width={1344}
                  height={768}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Social proof badge overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 hidden sm:block">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-xl bg-[oklch(0.35_0.13_155)]/10 flex items-center justify-center">
                    <Award className="w-7 h-7 text-[oklch(0.35_0.13_155)]" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-foreground leading-tight">Quality Certified</p>
                    <p className="text-sm text-muted-foreground mt-0.5">Premium Grade Facility</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PRODUCTS — Cards with generous spacing
          White space tip: let content breathe
      ═══════════════════════════════════════════ */}
      <section className="py-28 sm:py-36 bg-[oklch(0.97_0.008_120)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-[oklch(0.35_0.13_155)] text-sm font-semibold uppercase tracking-[0.15em]">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-foreground mt-4">
              Our Farm Products
            </h2>
            <p className="text-foreground/65 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
              Stock your kitchen with the highest quality local poultry and swine products, raised with care and delivered fresh.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {products.map((product) => (
              <Card
                key={product.title}
                className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 bg-white"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[oklch(0.35_0.13_155)] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      {product.tag}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-foreground mb-2.5">{product.title}</h3>
                  <p className="text-foreground/65 leading-relaxed text-[15px]">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════
          OUR PROMISE — Self-testimonial / organizational commitment
      ═══════════════════════════════════════════ */}
      <section className="py-28 sm:py-36 bg-[oklch(0.97_0.008_120)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-[oklch(0.35_0.13_155)] text-sm font-semibold uppercase tracking-[0.15em]">Our Promise</span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-foreground mt-4">
              Why Nexterafarms
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 — Quality Commitment */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[oklch(0.35_0.13_155)]/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-[oklch(0.35_0.13_155)]" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-3">Uncompromising Quality</h3>
              <p className="text-foreground/70 leading-relaxed text-[15px]">
                Every product that leaves our farm undergoes strict quality checks. We have built our reputation on consistency — from the rich golden yolks of our eggs to the tenderness of our pork cuts, our customers know they can rely on us every single time.
              </p>
            </div>

            {/* Card 2 — Ethical Practices */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[oklch(0.35_0.13_155)]/10 flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-[oklch(0.35_0.13_155)]" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-3">Ethical & Sustainable</h3>
              <p className="text-foreground/70 leading-relaxed text-[15px]">
                Our animals are raised in clean, spacious environments with natural feed and open access to pasture. We practice sustainable farming because we believe that respecting the land and our animals is not just the right thing to do — it is what produces the best food.
              </p>
            </div>

            {/* Card 3 — Customer-First */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[oklch(0.35_0.13_155)]/10 flex items-center justify-center mb-6">
                <Truck className="w-7 h-7 text-[oklch(0.35_0.13_155)]" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-3">Farm-to-Door Freshness</h3>
              <p className="text-foreground/70 leading-relaxed text-[15px]">
                We handle every step of the process — from raising to processing to delivery — so you get the freshest products possible. Our direct supply chain means no middlemen, no delays, and no compromise on the quality that reaches your kitchen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA BANNER — Strong contrast, clear action
      ═══════════════════════════════════════════ */}
      <section className="py-28 sm:py-36">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="/images/poultry-house-open.jpg"
              alt="Nexterafarms open-air poultry housing"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.20_0.07_155)]/92 to-[oklch(0.20_0.07_155)]/50" />
            <div className="relative z-10 py-20 sm:py-28 px-6 sm:px-12 lg:px-20 max-w-xl">
              <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-white mb-5">
                Ready to Taste the Difference?
              </h2>
              <p className="text-white/80 leading-relaxed mb-10 text-lg">
                Experience truly farm-fresh poultry and swine products. Place your order today or visit our farm.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
                <Button
                  size="lg"
                  onClick={() => onNavigate('gallery')}
                  className="bg-white/15 hover:bg-white/25 text-white border border-white/30 rounded-full px-10 py-4 text-lg backdrop-blur-sm transition-all duration-200 min-h-[52px]"
                >
                  View Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}