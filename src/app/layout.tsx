import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { CookieBanner } from "@/components/cookie-banner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nexterafarms.com'),
  title: "Nexterafarms — Premium Poultry & Swine Products",
  description: "Nexterafarms specializes in premium free-range poultry products and quality swine. Farm-fresh eggs, chicken, and pork raised with care and delivered to your table.",
  keywords: ["Nexterafarms", "poultry", "swine", "farm fresh eggs", "free-range chicken", "pork", "farm", "local farm", "Ghana", "Accra"],
  icons: {
    icon: [
      { url: "/favicon.jpg", sizes: "48x48", type: "image/jpeg" },
    ],
    apple: [
      { url: "/apple-touch-icon.jpg", sizes: "180x180", type: "image/jpeg" },
    ],
  },
  openGraph: {
    title: "Nexterafarms — Premium Poultry & Swine Products",
    description: "Farm-fresh poultry and swine products raised with care. Free-range eggs, chicken, and premium pork.",
    type: "website",
    images: [{
      url: "/images/ducks-grassy-yard.jpg",
      width: 1200,
      height: 630,
      alt: "Nexterafarms — Muscovy ducks on open pasture",
    }],
    siteName: "Nexterafarms",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexterafarms — Premium Poultry & Swine Products",
    description: "Farm-fresh poultry and swine products raised with care.",
    images: ["/images/ducks-grassy-yard.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <CookieBanner />
        {/* Google Analytics — Replace G-XXXXXXXXXX with your actual GA4 Measurement ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        <Toaster />
      </body>
    </html>
  );
}
