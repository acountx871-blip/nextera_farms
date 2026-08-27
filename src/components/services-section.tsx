'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Phone,
  Egg,
  Feather,
  Baby,
  PiggyBank,
  Package,
  Truck,
  CheckCircle2,
} from 'lucide-react';

const poultryServices = [
  {
    title: 'Farm-Fresh Eggs',
    description:
      'Our pasture-raised hens produce rich, golden-yolked eggs collected daily. Available by the dozen, tray, or in bulk for restaurants and retailers.',
    icon: Egg,
    image: '/images/uploaded-eggs.jpg',
    features: ['Pasture-raised hens', 'Daily collection', 'Bulk orders available', 'Fresh daily'],
  },
  {
    title: 'Muscovy Ducks & Poultry',
    description:
      'Premium Muscovy ducks and free-range chickens raised on open pasture. Our birds mature naturally over 12+ weeks for superior flavor and texture.',
    icon: Feather,
    image: '/images/muscovy-ducks-closeup.jpg',
    features: ['12+ week maturity', 'Open pasture raising', 'Fresh or frozen', 'Custom cuts available'],
  },
  {
    title: 'Breeding Stock',
    description:
      'We supply high-quality day-old chicks, ducklings, and started birds to farms and backyard enthusiasts. Our breeding program focuses on hardiness and productivity.',
    icon: Baby,
    image: '/images/ducks-grassy-yard.jpg',
    features: ['Day-old chicks', 'Ducklings available', 'Multiple breeds', 'Vaccinated stock'],
  },
];

const swineServices = [
  {
    title: 'Fresh Pork',
    description:
      'Premium-quality fresh pork from our naturally raised swine. Our pigs are grown on a healthy diet without hormones, producing tender and flavorful meat available as whole or in portions.',
    icon: PiggyBank,
    image: '/images/spotted-pig-real.jpg',
    features: ['Naturally raised swine', 'No hormones', 'Fresh orders', 'Whole or portions available'],
  },
  {
    title: 'Weaner Piglets',
    description:
      'Healthy, well-socialized weaner piglets from our carefully managed breeding program. Our spotted and heritage breeds are known for their hardiness and excellent growth rates.',
    icon: Baby,
    image: '/images/piglet-drinking-real.jpg',
    features: ['Spotted & heritage breeds', 'Vet-checked', 'Vaccinated', 'Growth records provided'],
  },
];

const process = [
  {
    step: '01',
    title: 'Natural Rearing',
    description:
      'Our animals are raised on open pastures with access to shelter, clean water, and a natural diet free from hormones and synthetic additives.',
  },
  {
    step: '02',
    title: 'Processing',
    description:
      'All processing is handled professionally to ensure hygiene, safety, and quality at every stage. We follow strict standards to deliver fresh, wholesome products.',
  },
  {
    step: '03',
    title: 'Fresh Delivery',
    description:
      'We offer local delivery within your area, as well as scheduled pickup at our farm. Your order arrives fresh and ready to enjoy.',
  },
];

export function ServicesSection() {
  return (
    <div>
      {/* ═══ HERO BANNER ═══ */}
      <section className="relative pt-36 sm:pt-44 pb-24 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/poultry-house-open.jpg"
            alt="Nexterafarms open-air poultry facility"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-[oklch(0.78_0.14_75)] text-sm font-semibold uppercase tracking-[0.15em]">What We Do</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mt-4 mb-6">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
            From farm to table, we provide comprehensive poultry and swine products and services with uncompromising quality.
          </p>
        </div>
      </section>

      {/* ═══ POULTRY SERVICES ═══ */}
      <section className="py-28 sm:py-36">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-[oklch(0.35_0.13_155)] text-sm font-semibold uppercase tracking-[0.15em]">Poultry Division</span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-foreground mt-4">
              Premium Poultry Products
            </h2>
            <p className="text-foreground/65 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
              Our free-range poultry operation delivers eggs, chickens, and ducks of exceptional quality, backed by ethical farming practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {poultryServices.map((service) => (
              <Card
                key={service.title}
                className="group overflow-hidden border border-border/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 bg-white"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <CardContent className="p-7">
                  <div className="w-11 h-11 rounded-xl bg-[oklch(0.35_0.13_155)]/10 flex items-center justify-center mb-5">
                    <service.icon className="w-5 h-5 text-[oklch(0.35_0.13_155)]" />
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-3">{service.title}</h3>
                  <p className="text-foreground/65 leading-relaxed mb-6 text-[15px]">{service.description}</p>
                  <ul className="space-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-[15px]">
                        <CheckCircle2 className="w-4 h-4 text-[oklch(0.35_0.13_155)] shrink-0" />
                        <span className="text-foreground/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SWINE SERVICES ═══ */}
      <section className="py-28 sm:py-36 bg-[oklch(0.97_0.008_120)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-[oklch(0.35_0.13_155)] text-sm font-semibold uppercase tracking-[0.15em]">Swine Division</span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-foreground mt-4">
              Quality Swine Products
            </h2>
            <p className="text-foreground/65 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
              Our swine program produces premium pork and breeding stock, with a focus on heritage breeds and sustainable husbandry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {swineServices.map((service) => (
              <Card
                key={service.title}
                className="group overflow-hidden border border-border/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 bg-white"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <CardContent className="p-7">
                  <div className="w-11 h-11 rounded-xl bg-[oklch(0.35_0.13_155)]/10 flex items-center justify-center mb-5">
                    <service.icon className="w-5 h-5 text-[oklch(0.35_0.13_155)]" />
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-3">{service.title}</h3>
                  <p className="text-foreground/65 leading-relaxed mb-6 text-[15px]">{service.description}</p>
                  <ul className="space-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-[15px]">
                        <CheckCircle2 className="w-4 h-4 text-[oklch(0.35_0.13_155)] shrink-0" />
                        <span className="text-foreground/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="py-28 sm:py-36">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-[oklch(0.35_0.13_155)] text-sm font-semibold uppercase tracking-[0.15em]">How We Work</span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-foreground mt-4">
              From Farm to Table
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-10">
            {process.map((step, index) => (
              <div key={step.step} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] right-[-50%] w-[calc(100%-4rem)] h-px border-t-2 border-dashed border-[oklch(0.35_0.13_155)]/20" />
                )}
                <div className="relative z-10">
                  <span className="text-6xl font-extrabold text-[oklch(0.35_0.13_155)]/10">{step.step}</span>
                  <h3 className="font-bold text-xl text-foreground mt-3 mb-4">{step.title}</h3>
                  <p className="text-foreground/65 leading-relaxed text-[15px]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-28 sm:py-36 bg-[oklch(0.35_0.13_155)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-white mb-5">
            Interested in Our Products?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto leading-relaxed mb-10 text-lg">
            Whether you are a home cook, restaurant owner, or fellow farmer, we would love to work with you.
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
