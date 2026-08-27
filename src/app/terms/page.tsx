import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service — Nexterafarms',
  description: 'Nexterafarms terms of service. Read our terms and conditions for using our website and services.',
};

export default function TermsOfService() {
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

        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Terms of Service</h1>
        <p className="text-muted-foreground text-[15px] mb-10">Last updated: August 2025</p>

        <div className="space-y-8 text-foreground/75 leading-relaxed text-[15px]">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>By accessing and using the Nexterafarms website, you accept and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use our website. These terms apply to all visitors, users, and others who access or use our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">2. Services Description</h2>
            <p>Nexterafarms provides poultry and swine products including but not limited to farm-fresh eggs, free-range chicken, Muscovy ducks, fresh pork, and weaner piglets. Product availability and pricing are subject to change without prior notice. Images on our website are for illustrative purposes and actual products may vary slightly in appearance.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">3. Orders and Delivery</h2>
            <p>All orders are subject to availability and confirmation. We strive to deliver products in the freshest possible condition. Delivery times and areas are limited to our operational region. We reserve the right to refuse or cancel any order for any reason, including but not limited to product unavailability, pricing errors, or suspected fraudulent activity. Orders are typically finalized via phone confirmation.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">4. Product Quality</h2>
            <p>We take great care to ensure the quality of all our products. However, as our products are natural and perishable, we recommend inspecting your order upon delivery. If you have concerns about product quality, please contact us within 24 hours of delivery. We will work with you to resolve any legitimate quality concerns in a fair and timely manner.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">5. Intellectual Property</h2>
            <p>All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Nexterafarms and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on this website without our prior written consent.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">6. Website Use</h2>
            <p>You agree to use this website only for lawful purposes. You must not use the website in any way that could damage, disable, or impair the website or interfere with any other party&#39;s use of the website. You must not attempt to gain unauthorized access to any part of the website, its systems, or any connected servers.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">7. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Nexterafarms shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the website or our products. Our total liability for any claim shall not exceed the amount paid by you for the specific product or service giving rise to the claim.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">8. Governing Law</h2>
            <p>These Terms of Service shall be governed by and construed in accordance with the laws of the Republic of Ghana. Any disputes arising from these terms or your use of the website shall be subject to the exclusive jurisdiction of the courts of Ghana.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">9. Changes to Terms</h2>
            <p>We reserve the right to update or modify these Terms of Service at any time without prior notice. Changes will be effective immediately upon posting on the website. Your continued use of the website after any changes constitutes your acceptance of the new terms. We encourage you to review these terms periodically.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">10. Contact Us</h2>
            <p>If you have questions about these Terms of Service, please contact us:</p>
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
