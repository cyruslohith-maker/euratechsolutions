import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Terms & Conditions — Eura Tech Solutions",
  description:
    "Terms and Conditions governing the use of Eura Tech Solutions services and Voice AI platform.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    placeholder:
      "By accessing and using the Eura Tech Solutions platform and services, you agree to be bound by these Terms and Conditions. [Insert full acceptance clause here.]",
  },
  {
    id: "services",
    title: "2. Description of Services",
    placeholder:
      "Eura Tech Solutions provides Voice AI infrastructure services including but not limited to inbound call handling, CRM integration, and automated scheduling. [Insert full service description here.]",
  },
  {
    id: "usage",
    title: "3. Permitted Use",
    placeholder:
      "Users may access the platform solely for lawful business purposes as outlined in your service agreement. [Insert full permitted use policy here.]",
  },
  {
    id: "ip",
    title: "4. Intellectual Property",
    placeholder:
      "All content, technology, and intellectual property on this platform remain the exclusive property of Eura Tech Solutions. [Insert full IP clause here.]",
  },
  {
    id: "liability",
    title: "5. Limitation of Liability",
    placeholder:
      "To the fullest extent permitted by law, Eura Tech Solutions shall not be liable for any indirect, incidental, or consequential damages. [Insert full liability limitation here.]",
  },
  {
    id: "termination",
    title: "6. Termination",
    placeholder:
      "Eura Tech Solutions reserves the right to suspend or terminate access to services at its sole discretion. [Insert full termination policy here.]",
  },
  {
    id: "governing",
    title: "7. Governing Law",
    placeholder:
      "These terms shall be governed by and construed in accordance with the laws of [jurisdiction]. [Insert full governing law clause here.]",
  },
  {
    id: "contact-terms",
    title: "8. Contact",
    placeholder:
      "For questions regarding these Terms, contact us at: legal@euratechsolutions.com [Insert full contact details here.]",
  },
];

export default function TermsPage() {
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
              <li className="text-eura-white">Terms &amp; Conditions</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="border-b border-eura-border/20 pb-12 mb-12">
            <p className="text-xs font-mono text-eura-muted uppercase tracking-widest mb-4">
              Legal Document
            </p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-eura-white mb-6">
              Terms &amp; Conditions
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
              This page contains placeholder text. The legal team will replace
              all bracketed content with final terms before publication.
            </p>
          </div>

          {/* Sections */}
          <article className="space-y-12" aria-label="Terms and Conditions content">
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
