import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy — Nexterafarms',
  description: 'Nexterafarms privacy policy. Learn how we handle your data and protect your privacy.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background pt-24 sm:pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[oklch(0.35_0.13_155)] hover:text-[oklch(0.24_0.08_155)] font-medium text-[15px] mb-10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Privacy Policy</h1>
        <p className="text-muted-foreground text-[15px] mb-10">Last updated: August 2025</p>

        <div className="space-y-8 text-foreground/75 leading-relaxed text-[15px]">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">1. Introduction</h2>
            <p>Nexterafarms is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, and safeguard any information you provide when visiting our website or interacting with our services. We encourage you to read this policy carefully to understand our practices regarding your personal data.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">2. Information We Collect</h2>
            <p className="mb-3">We may collect and process the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information:</strong> Name, phone number, and email address when you contact us through our website or phone.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website, including pages visited, time spent on pages, and navigation patterns, collected through cookies and analytics tools.</li>
              <li><strong>Device Information:</strong> Browser type, device type, operating system, and IP address, which are collected automatically for analytics and security purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to your inquiries and provide customer support.</li>
              <li>To process orders and deliver products to you.</li>
              <li>To improve our website, products, and services based on usage data.</li>
              <li>To send you relevant updates about our farm and products, if you have consented to receive such communications.</li>
              <li>To comply with legal obligations and protect our rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">4. Cookies</h2>
            <p>Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us analyze web traffic and understand user preferences. You can choose to accept or decline cookies through the cookie consent banner displayed on your first visit. Declining cookies may affect certain website functionality. We use both essential cookies (required for the website to function) and analytics cookies (to understand how visitors interact with our site).</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">5. Data Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential. We may also disclose your information when required by law or to protect our legal rights.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">6. Data Security</h2>
            <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security of your data.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">7. Your Rights</h2>
            <p>You have the right to access, correct, or delete any personal data we hold about you. You may also request that we restrict processing of your data or object to our processing activities. To exercise any of these rights, please contact us at nexterafarms1@gmail.com or call us at 024 448 2288. We will respond to your request within a reasonable timeframe.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">8. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
            <ul className="list-none space-y-1 mt-3">
              <li><strong>Nexterafarms</strong></li>
              <li>Email: <a href="mailto:nexterafarms1@gmail.com" className="text-[oklch(0.35_0.13_155)] hover:underline">nexterafarms1@gmail.com</a></li>
              <li>Phone: <a href="tel:+233244482288" className="text-[oklch(0.35_0.13_155)] hover:underline">024 448 2288</a> / <a href="tel:+233249608178" className="text-[oklch(0.35_0.13_155)] hover:underline">024 960 8178</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
