import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Privacy Policy — Eura Tech Solutions",
  description:
    "Privacy Policy explaining how Eura Tech Solutions collects, uses, and protects personal data.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-eura-black pt-24 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-12">
            <ol className="flex items-center gap-2 text-xs font-mono text-eura-muted uppercase tracking-widest">
              <li>
                <Link href="/" className="hover:text-eura-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-eura-white">Privacy Policy</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="border-b border-eura-border/20 pb-12 mb-12">
            <p className="text-xs font-mono text-eura-muted uppercase tracking-widest mb-4">
              Legal Document
            </p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-eura-white mb-6">
              Privacy Policy
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-eura-muted font-mono">
              <p>Effective Date: <time dateTime="2026-07">July 2026</time></p>
              <span className="hidden sm:inline text-eura-muted-dark">|</span>
              <p>Last Updated: <time dateTime="2026-07">July 2026</time></p>
            </div>
          </div>

          {/* Intro */}
          <div className="text-sm text-eura-muted space-y-4 mb-12 leading-relaxed">
            <h2 className="text-white font-bold text-lg">Introduction</h2>
            <p>
              Eura Tech Solutions (&apos;we,&apos; &apos;us,&apos; &apos;our,&apos; or &apos;Eura Tech&apos;) respects your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit our website, book a demo, submit a form, or interact with our AI voice agent products and services.
            </p>
            <p>
              By using our website and services, you agree to the practices described in this Privacy Policy. If you do not agree with these practices, please do not use our services.
            </p>
          </div>

          {/* Sections */}
          <article className="space-y-12 text-sm text-eura-muted leading-relaxed" aria-label="Privacy Policy content">
            {/* Section 1 */}
            <section id="info-collect" className="space-y-4">
              <h2 className="text-lg font-bold text-eura-white pb-3 border-b border-eura-border/20">
                1. Information We Collect
              </h2>
              
              <h3 className="text-white font-semibold">Information You Provide Directly</h3>
              <p>When you interact with our website, book a demo, or submit forms, we may collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, business name, and job title</li>
                <li>Email address and phone number</li>
                <li>Business details (industry, location, company size)</li>
                <li>Information from contact forms and demo booking requests</li>
                <li>Voice input and conversation content from AI voice agent demos</li>
                <li>Any other information you voluntarily provide</li>
              </ul>

              <h3 className="text-white font-semibold font-medium mt-4">Information Collected Automatically</h3>
              <p>When you visit our website, we automatically collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address, browser type, and device information</li>
                <li>Pages visited, time spent on the website, and referral source</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="text-white font-semibold font-medium mt-4">Information from Third Parties</h3>
              <p>
                We may receive information about you from publicly available sources (such as business directories, job postings, or public business registries) as part of our business development and outreach activities.
              </p>
            </section>

            {/* Section 2 */}
            <section id="how-use" className="space-y-4">
              <h2 className="text-lg font-bold text-eura-white pb-3 border-b border-eura-border/20">
                2. How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and demo requests</li>
                <li>Contact you regarding our services via email, phone (including automated or AI-assisted calls), and SMS</li>
                <li>Operate, maintain, and improve our website and services</li>
                <li>Prevent fraud, misuse, spam, and abuse</li>
                <li>Analyze website usage and enhance user experience</li>
                <li>Comply with legal obligations and regulations</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="consent-comm" className="space-y-4">
              <h2 className="text-lg font-bold text-eura-white pb-3 border-b border-eura-border/20">
                3. Your Consent for Communications
              </h2>
              <p>
                By submitting a form or requesting a demo, you consent to be contacted by Eura Tech Solutions via email, phone call (including automated dialing or AI-assisted voice technology), and SMS regarding your inquiry. This consent is not required to make a purchase.
              </p>

              <h3 className="text-white font-semibold">How to Opt Out</h3>
              <p>You may opt out of marketing communications at any time by:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Replying &quot;STOP&quot; to any SMS message</li>
                <li>Emailing <Link href="mailto:admin@euratechsolutions.net" className="text-white hover:underline">admin@euratechsolutions.net</Link> with an unsubscribe request</li>
                <li>Telling us directly during a call that you&apos;d like to opt out</li>
              </ul>
              <p>
                We will process opt-out requests promptly in compliance with applicable laws, including the U.S. Telephone Consumer Protection Act (TCPA), CAN-SPAM Act, and Indian telecom regulations.
              </p>
            </section>

            {/* Section 4 */}
            <section id="how-share" className="space-y-4">
              <h2 className="text-lg font-bold text-eura-white pb-3 border-b border-eura-border/20">
                4. How We Share Your Information
              </h2>
              <p>We do not sell your personal information. We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Service Providers:</strong> Third parties who assist us in operating our business, including AI voice platforms, CRM systems, scheduling tools, automation platforms, and cloud hosting providers — solely to deliver our services
                </li>
                <li>
                  <strong>Payment Processors:</strong> To process transactions if applicable
                </li>
                <li>
                  <strong>Legal Authorities:</strong> When required by law, to protect our rights, or in response to lawful requests
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
                </li>
              </ul>
              <p>All third-party service providers are contractually obligated to maintain the confidentiality and security of your information.</p>
            </section>

            {/* Section 5 */}
            <section id="intl-transfers" className="space-y-4">
              <h2 className="text-lg font-bold text-eura-white pb-3 border-b border-eura-border/20">
                5. International Data Transfers
              </h2>
              <p>
                Eura Tech Solutions is based in India. Your information may be collected, stored, and processed in India or other countries where our service providers operate, which may have different data protection standards than your home country. By using our services, you consent to such transfers. We implement reasonable safeguards to protect your information in accordance with this Privacy Policy.
              </p>
            </section>

            {/* Section 6 */}
            <section id="cookies" className="space-y-4">
              <h2 className="text-lg font-bold text-eura-white pb-3 border-b border-eura-border/20">
                6. Cookies and Tracking Technologies
              </h2>
              <p>
                We use cookies and similar technologies to remember your preferences, understand how you use our website, and improve site performance. You can control or disable cookies through your browser settings, though some website features may not function properly if cookies are disabled.
              </p>
            </section>

            {/* Section 7 */}
            <section id="data-retention" className="space-y-4">
              <h2 className="text-lg font-bold text-eura-white pb-3 border-b border-eura-border/20">
                7. Data Retention
              </h2>
              <p>
                We retain personal information for as long as necessary to fulfill the purposes in this Privacy Policy, respond to requests, maintain business records, and comply with legal obligations. Demo call recordings and logs are retained for quality assurance and fraud prevention and may be deleted periodically.
              </p>
            </section>

            {/* Section 8 */}
            <section id="data-security" className="space-y-4">
              <h2 className="text-lg font-bold text-eura-white pb-3 border-b border-eura-border/20">
                8. Data Security
              </h2>
              <p>
                We implement reasonable technical and organizational measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no transmission or storage method is entirely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* Section 9 */}
            <section id="privacy-rights" className="space-y-4">
              <h2 className="text-lg font-bold text-eura-white pb-3 border-b border-eura-border/20">
                9. Your Privacy Rights
              </h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction or deletion of inaccurate information</li>
                <li>Object to or restrict processing of your information</li>
                <li>Opt out of marketing communications</li>
              </ul>
              <p>
                To exercise any of these rights, contact us at <Link href="mailto:admin@euratechsolutions.net" className="text-white hover:underline">admin@euratechsolutions.net</Link>. We will respond in accordance with applicable law.
              </p>
            </section>

            {/* Section 10 */}
            <section id="children" className="space-y-4">
              <h2 className="text-lg font-bold text-eura-white pb-3 border-b border-eura-border/20">
                10. Children&apos;s Privacy
              </h2>
              <p>
                Our website and services are not directed at individuals under 18 years old. We do not knowingly collect personal information from minors. If you believe we have collected information from a minor, please contact us immediately so we can remove it.
              </p>
            </section>

            {/* Section 11 */}
            <section id="links" className="space-y-4">
              <h2 className="text-lg font-bold text-eura-white pb-3 border-b border-eura-border/20">
                11. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for their privacy practices or content. We encourage you to review the privacy policies of any external sites you visit.
              </p>
            </section>

            {/* Section 12 */}
            <section id="changes" className="space-y-4">
              <h2 className="text-lg font-bold text-eura-white pb-3 border-b border-eura-border/20">
                12. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &apos;Last Updated&apos; date. Your continued use of our website and services after any changes constitutes your acceptance of the revised Policy.
              </p>
            </section>

            {/* Section 13 */}
            <section id="contact-us" className="space-y-4">
              <h2 className="text-lg font-bold text-eura-white pb-3 border-b border-eura-border/20">
                13. Contact Us
              </h2>
              <p>If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:</p>
              <div className="font-mono text-xs border border-eura-border/20 bg-eura-charcoal p-6 space-y-2">
                <p className="font-bold text-white">Eura Tech Solutions</p>
                <p>Email: <Link href="mailto:admin@euratechsolutions.net" className="text-white hover:underline">admin@euratechsolutions.net</Link></p>
              </div>
            </section>
          </article>

          {/* Footer Metadata */}
          <div className="mt-12 text-xs font-mono text-eura-muted-dark border-t border-eura-border/10 pt-6">
            <p>Last Updated: July 2026</p>
            <p className="mt-1">© 2026 Eura Tech Solutions. All rights reserved.</p>
            <p className="mt-4 text-[10px] text-eura-muted-dark/60 font-sans italic">
              Thank you for trusting Eura Tech Solutions with your information.
            </p>
          </div>

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-eura-border/20">
            <Link
              href="/"
              className="text-sm text-eura-muted hover:text-eura-white transition-colors font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
