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

const sections = [
  {
    id: "overview",
    title: "1. Overview",
    placeholder:
      "Eura Tech Solutions ('we', 'us', 'our') is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard information. [Insert full overview here.]",
  },
  {
    id: "data-collected",
    title: "2. Data We Collect",
    placeholder:
      "We may collect: full name, business name, business email, phone number, country, state, call recordings, and usage analytics. [Insert full data collection list here.]",
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Data",
    placeholder:
      "Data is used to provide Voice AI services, send system updates, and improve platform quality. [Insert full data use policy here.]",
  },
  {
    id: "sharing",
    title: "4. Data Sharing",
    placeholder:
      "We do not sell personal data. We may share data with CRM and calendar integration partners as required to deliver services. [Insert full sharing policy here.]",
  },
  {
    id: "retention",
    title: "5. Data Retention",
    placeholder:
      "Personal data is retained for [X] years or as required by applicable law. [Insert full retention schedule here.]",
  },
  {
    id: "rights",
    title: "6. Your Rights",
    placeholder:
      "You have the right to access, correct, or delete your personal data at any time. [Insert full rights section per applicable regulation — GDPR, CCPA, etc.]",
  },
  {
    id: "security",
    title: "7. Security",
    placeholder:
      "We employ industry-standard encryption and access controls to protect your data. [Insert full security posture here.]",
  },
  {
    id: "cookies",
    title: "8. Cookies & Tracking",
    placeholder:
      "Our platform uses cookies for analytics and session management. [Insert full cookie policy here.]",
  },
  {
    id: "contact-privacy",
    title: "9. Contact",
    placeholder:
      "For privacy inquiries: privacy@euratechsolutions.com · [Insert full DPO contact details here.]",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar onDemoClick={() => {}} />
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
            <p className="text-sm text-eura-muted">
              Last updated:{" "}
              <time dateTime="2025-01-01">[Date to be inserted]</time> · Effective:{" "}
              <time dateTime="2025-01-01">[Effective date]</time>
            </p>
          </div>

          {/* Draft notice */}
          <div className="border border-eura-border/40 bg-eura-charcoal px-6 py-5 mb-12 flex gap-4 items-start">
            <span className="text-xs font-mono font-medium text-eura-muted uppercase tracking-widest border border-eura-border/40 px-2 py-0.5 shrink-0 mt-0.5">
              Draft
            </span>
            <p className="text-sm text-eura-muted leading-relaxed">
              This page contains placeholder text. Your legal team will replace
              all bracketed content with final policy language before publication.
            </p>
          </div>

          {/* Sections */}
          <article className="space-y-12" aria-label="Privacy Policy content">
            {sections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2 className="text-lg font-bold text-eura-white mb-4 pb-3 border-b border-eura-border/20">
                  {section.title}
                </h2>
                <p className="text-sm text-eura-muted leading-relaxed">
                  {section.placeholder}
                </p>
              </section>
            ))}
          </article>

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
