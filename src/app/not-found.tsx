import { Button } from '@/components/ui/button';
import { Home, Phone } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[oklch(0.98_0.008_120)] px-5">
      <div className="max-w-lg mx-auto text-center">
        <div className="w-24 h-24 rounded-full bg-[oklch(0.35_0.13_155)]/10 flex items-center justify-center mx-auto mb-8">
          <span className="text-5xl font-extrabold text-[oklch(0.35_0.13_155)]">404</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-foreground/65 leading-relaxed mb-10 text-lg">
          Sorry, the page you are looking for does not exist or has been moved. Let us get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-[oklch(0.35_0.13_155)] hover:bg-[oklch(0.30_0.11_155)] text-white font-semibold rounded-full px-8 py-3.5 shadow-lg transition-all duration-200 hover:scale-[1.03] min-h-[48px]"
          >
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-[oklch(0.78_0.14_75)] hover:bg-[oklch(0.70_0.14_75)] text-[oklch(0.20_0.08_55)] font-semibold rounded-full px-8 py-3.5 shadow-lg transition-all duration-200 hover:scale-[1.03] min-h-[48px]"
          >
            <a href="tel:+233244482288">
              <Phone className="w-4 h-4 mr-2" />
              Call Us
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
