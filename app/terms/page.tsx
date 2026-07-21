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
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-eura-muted font-mono">
              <p>Effective Date: <time dateTime="2026-07">July 2026</time></p>
              <span className="hidden sm:inline text-eura-muted-dark">|</span>
              <p>Last Updated: <time dateTime="2026-07">July 2026</time></p>
            </div>
          </div>

          {/* Intro */}
          <div className="text-sm text-eura-muted space-y-4 mb-12 leading-relaxed">
            <p>
              Welcome to <strong>euratechsolutions.net</strong> (the "Website"), operated by Eura Tech Solutions ("Eura Tech," "we," "us," or "our"). These Terms and Conditions ("Terms") govern your access to and use of the Website, including any demos, forms, content, and services information available on it.
            </p>
            <p>
              Please read these Terms carefully before using the Website. By browsing the Website, booking a demo, submitting a form, or otherwise interacting with us, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you should not use the Website.
            </p>
          </div>

          {/* Sections */}
          <article className="space-y-12 text-sm text-eura-muted leading-relaxed" aria-label="Terms and Conditions content">
            {/* Section 1 */}
            <section id="acceptance" className="space-y-4">
              <h2 className="text-lg font-bold text-eura-white pb-3 border-b border-eura-border/20">
                1. Acceptance of Terms and Eligibility
              </h2>
              <p>By accessing and using the Website, you acknowledge that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You are at least 18 years old or the legal age of majority in your jurisdiction;</li>
                <li>If you are using the Website on behalf of a business, organization, or entity, you represent and warrant that you have the authority to bind that entity to these Terms;</li>
                <li>You will comply with all applicable laws and regulations in your jurisdiction and all applicable laws of any country from which you access the Website.</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section id="prohibited" className="space-y-4">
              <h2 className="text-lg font-bold text-eura-white pb-3 border-b border-eura-border/20">
                2. Prohibited Activities
              </h2>
              <p>You agree not to use the Website for any unlawful purpose or in any way that violates these Terms. Specifically, you will not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Misuse, disrupt, or interfere with the Website's normal operation or security;</li>
                <li>Use automated tools, bots, scrapers, or crawlers to extract data from the Website without our prior written consent;</li>
                <li>Attempt to reverse-engineer, decompile, disassemble, or probe the Website's underlying code, systems, or architecture;</li>
                <li>Submit false, misleading, defamatory, or malicious data through any form on the Website;</li>
                <li>Transmit malware, spam, phishing attempts, or any unlawful or harmful content;</li>
                <li>Harass, threaten, abuse, or otherwise harm any person or entity through the Website.</li>
              </ul>
              <p>We reserve the right to restrict, suspend, or terminate access to the Website for any user who violates these provisions, without prior notice.</p>
            </section>

            {/* Section 3 */}
            <section id="content-demos" className="space-y-4">
              <h2 className="text-lg font-bold text-eura-white pb-3 border-b border-eura-border/20">
                3. Website Content and AI Demos
              </h2>
              <h3 className="text-white font-semibold">Informational Purpose</h3>
              <p>
                All content on the Website—including case studies, ROI calculators, sample voice agent audio, testimonials, marketing materials, blog posts, and performance metrics—is provided for general informational and illustrative purposes only.
              </p>
              <p>
                Results and figures shown (e.g., cost savings, call handling improvements, conversion rates, response times) are examples based on specific client scenarios and are not guarantees of future performance. Your actual results may differ significantly based on your business model, industry, target audience, implementation approach, and numerous other factors.
              </p>
              
              <h3 className="text-white font-semibold">Interactive and Live AI Demos</h3>
              <p>Where the Website offers an interactive or live AI voice agent demo, you acknowledge and agree that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Demo interactions may be recorded, logged, and monitored for quality assurance, abuse prevention, research, and product improvement;</li>
                <li>Demos are provided for evaluation purposes only and do not constitute a binding service, contract, commitment, or offer to provide services;</li>
                <li>You will not submit unlawful, abusive, fraudulent, or misleading input during demo interactions;</li>
                <li>Demo performance, accuracy, and capabilities may differ from production deployment due to variations in configuration, volume, data integration, and other factors.</li>
              </ul>

              <h3 className="text-white font-semibold">AI Limitations</h3>
              <p>You acknowledge that AI-powered voice agents, like all AI systems, have inherent limitations:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>AI models may occasionally produce inaccurate, irrelevant, or unexpected responses;</li>
                <li>Voice synthesis may not perfectly replicate human speech in all contexts and may contain artifacts or unnatural patterns;</li>
                <li>AI models may have blindspots, biases, or difficulty with edge cases or novel situations;</li>
                <li>System performance depends on data quality, network conditions, integration complexity, and proper configuration.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="intellectual-property" className="space-y-4">
              <h2 className="text-lg font-bold text-eura-white pb-3 border-b border-eura-border/20">
                4. Intellectual Property Rights
              </h2>
              <p>
                All content, materials, and intellectual property on the Website—including text, graphics, logos, trademarks, audio samples, voice agent scripts, software, code, designs, and any other original works—are the exclusive property of Eura Tech Solutions or our licensors and are protected by applicable intellectual property laws.
              </p>
              <p>
                We grant you a limited, revocable, non-exclusive, non-transferable license to access and view the Website for your own personal or internal business evaluation purposes only. You may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Copy, reproduce, distribute, or publicly display any Website content;</li>
                <li>Modify, create derivative works from, or alter any Website materials;</li>
                <li>Use Website content for commercial purposes without prior written permission;</li>
                <li>Remove or alter any copyright, trademark, or attribution notices.</li>
              </ul>
              <p>
                If you believe any content on the Website infringes your intellectual property rights, please notify us at <Link href="mailto:admin@euratechsolutions.net" className="text-white hover:underline">admin@euratechsolutions.net</Link> with detailed information about the alleged infringement.
              </p>
            </section>

            {/* Section 5 */}
            <section id="privacy" className="space-y-4">
              <h2 className="text-lg font-bold text-eura-white pb-3 border-b border-eura-border/20">
                5. Privacy and Data Collection
              </h2>
              <h3 className="text-white font-semibold">Information Collection and Use</h3>
              <p>
                Please refer to our <Link href="/privacy" className="text-white hover:underline">Privacy Policy</Link> for complete details on how we collect, use, store, process, protect, and share information submitted through the Website, including names, email addresses, phone numbers, business information, and any data entered into demos.
              </p>

              <h3 className="text-white font-semibold">Consent for Outreach</h3>
              <p>
                By submitting a form on the Website (including demo bookings, contact forms, inquiry forms, or other requests), you affirmatively consent to be contacted by Eura Tech Solutions and its representatives regarding your inquiry and our services via:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email</li>
                <li>Telephone and voice calls (including calls placed using automated dialing systems or AI-assisted voice technology)</li>
                <li>SMS/text messages to the phone number you provide</li>
              </ul>

              <h3 className="text-white font-semibold">Withdrawal of Consent</h3>
              <p>
                Providing this consent is not a condition of any purchase, service, or business relationship with us. You may withdraw or modify your consent at any time by:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Replying "STOP" or "UNSUBSCRIBE" to any SMS message</li>
                <li>Clicking the unsubscribe link in any email communication</li>
                <li>Emailing us at <Link href="mailto:admin@euratechsolutions.net" className="text-white hover:underline">admin@euratechsolutions.net</Link> with your request</li>
              </ul>
              <p>
                We will process your opt-out request within a reasonable time, and in accordance with applicable laws including the Telephone Consumer Protection Act (TCPA) and CAN-SPAM Act where applicable. Standard message and data rates may apply to SMS communications.
              </p>
            </section>

            {/* Section 6 */}
            <section id="disclaimer" className="space-y-4">
              <h2 className="text-lg font-bold text-eura-white pb-3 border-b border-eura-border/20">
                6. Disclaimer of Warranties and Services
              </h2>
              <h3 className="text-white font-semibold">"As-Is" Basis</h3>
              <p>The Website and any web-based AI demos are provided on an "as-is" and "as-available" basis without any representation or warranty of any kind.</p>
              
              <h3 className="text-white font-semibold">No Warranties</h3>
              <p>To the fullest extent permitted by applicable law, Eura Tech Solutions disclaims all warranties, express, implied, and statutory, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Warranties of merchantability, fitness for a particular purpose, title, and non-infringement;</li>
                <li>Warranties that the Website or demos will be uninterrupted, error-free, secure, or free from viruses or harmful code;</li>
                <li>Warranties that any defects will be corrected;</li>
                <li>Warranties regarding the accuracy, completeness, or usefulness of any content.</li>
              </ul>

              <h3 className="text-white font-semibold">Website Availability</h3>
              <p>We do not guarantee uninterrupted or error-free access to the Website. The Website may be unavailable due to scheduled maintenance, hosting issues, third-party service outages, network problems, or circumstances beyond our control. We are not liable for any harm caused by Website unavailability.</p>

              <h3 className="text-white font-semibold">Separate Service Agreements</h3>
              <p>These Terms govern your use of this Website only. Any actual engagement for AI voice agent services, development, deployment, integration, support, or any other services ("Services") will be governed exclusively by a separate, signed agreement such as a Master Services Agreement (MSA) or Statement of Work (SOW) between Eura Tech Solutions and you or your organization.</p>
              <p>Nothing displayed on this Website – including pricing information, service descriptions, capabilities, or timelines – constitutes an offer to provide Services, a binding commitment, a quote, or part of any contract. All such terms will be established only in a separate signed agreement.</p>
            </section>

            {/* Section 7 */}
            <section id="liability" className="space-y-4">
              <h2 className="text-lg font-bold text-eura-white pb-3 border-b border-eura-border/20">
                7. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by applicable law, in no event shall Eura Tech Solutions, its officers, directors, employees, agents, or affiliates be liable for any indirect, incidental, special, consequential, punitive, or exemplary damages arising from or related to your use of or inability to use the Website or any content, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Loss of business, revenue, profit, opportunity, or goodwill;</li>
                <li>Loss, corruption, or theft of data;</li>
                <li>Costs of substitute goods or services.</li>
              </ul>
              <p>This limitation applies even if Eura Tech Solutions has been advised of the possibility of such damages and regardless of the legal theory (contract, tort, strict liability, or otherwise) on which the claim is based.</p>
              
              <h3 className="text-white font-semibold font-mono text-xs uppercase tracking-wider">Aggregate Liability Cap</h3>
              <p>Our total aggregate liability to you arising from your use of this Website shall not exceed USD 100 (or equivalent in your local currency), regardless of the nature of the claim.</p>
              <p>This limitation does not apply to liability that cannot be excluded or limited under applicable law, including liability for death, personal injury, fraud, or gross negligence.</p>
            </section>

            {/* Section 8 */}
            <section id="indemnification" className="space-y-4">
              <h2 className="text-lg font-bold text-eura-white pb-3 border-b border-eura-border/20">
                8. Indemnification
              </h2>
              <p>You agree to indemnify, defend, and hold harmless Eura Tech Solutions, its officers, directors, employees, agents, and affiliates from any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your violation of these Terms or any applicable law;</li>
                <li>Your misuse of the Website or any content;</li>
                <li>Your infringement of any third-party intellectual property rights, privacy rights, or other rights;</li>
                <li>Any harm caused by your actions or use of the Website.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section id="governing-law" className="space-y-4">
              <h2 className="text-lg font-bold text-eura-white pb-3 border-b border-eura-border/20">
                9. Governing Law and Dispute Resolution
              </h2>
              <h3 className="text-white font-semibold">Governing Law</h3>
              <p>These Terms and any disputes arising out of or relating to these Terms or the Website shall be governed by and construed in accordance with the laws of India, specifically the State of Telangana, without regard to its conflict-of-law principles.</p>
              
              <h3 className="text-white font-semibold">Dispute Resolution</h3>
              <p>Any dispute, claim, or controversy arising out of or relating to these Terms or your use of the Website shall first be addressed through good-faith negotiation between the parties for a period of thirty (30) days.</p>
              <p>If the dispute cannot be resolved through negotiation within 30 days, the dispute shall be subject to the exclusive jurisdiction of the courts of Hyderabad, Telangana, India. Both parties consent to the personal jurisdiction and venue of these courts.</p>
            </section>

            {/* Section 10 */}
            <section id="changes" className="space-y-4">
              <h2 className="text-lg font-bold text-eura-white pb-3 border-b border-eura-border/20">
                10. Changes to These Terms
              </h2>
              <p>We may modify, update, or amend these Terms at any time. Changes will be posted on this page with an updated "Last Updated" date at the top of the document.</p>
              <p>Your continued use of the Website after changes are posted constitutes your acceptance of the revised Terms. If you do not agree with any modifications, you should discontinue use of the Website immediately.</p>
            </section>

            {/* Section 11 */}
            <section id="termination" className="space-y-4">
              <h2 className="text-lg font-bold text-eura-white pb-3 border-b border-eura-border/20">
                11. Termination and Restriction of Access
              </h2>
              <p>We reserve the right to restrict, suspend, or terminate your access to the Website at any time and for any reason, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violation of these Terms;</li>
                <li>Conduct that we believe is harmful, abusive, unlawful, or detrimental to other users or our services;</li>
                <li>Attempted unauthorized access or security breaches;</li>
                <li>Any other reason in our sole discretion.</li>
              </ul>
              <p>Termination may be with or without notice. Sections of these Terms that by their nature should survive termination will continue in effect.</p>
            </section>

            {/* Section 12 */}
            <section id="severability" className="space-y-4">
              <h2 className="text-lg font-bold text-eura-white pb-3 border-b border-eura-border/20">
                12. Severability
              </h2>
              <p>If any provision of these Terms is found by a court of competent jurisdiction to be invalid, unenforceable, or illegal, that provision shall be modified to the minimum extent necessary to make it valid and enforceable, or if not possible, that provision shall be severed.</p>
              <p>The remaining provisions shall remain in full force and effect. In no event shall the severance of any provision substantially alter the intentions of the parties or the economic benefit of these Terms to either party.</p>
            </section>

            {/* Section 13 */}
            <section id="entire-agreement" className="space-y-4">
              <h2 className="text-lg font-bold text-eura-white pb-3 border-b border-eura-border/20">
                13. Entire Agreement
              </h2>
              <p>These Terms, together with our Privacy Policy and any other policies published on the Website, constitute the entire agreement between you and Eura Tech Solutions regarding your use of the Website and supersede all prior negotiations, understandings, and agreements, whether written or oral.</p>
            </section>

            {/* Section 14 */}
            <section id="contact" className="space-y-4">
              <h2 className="text-lg font-bold text-eura-white pb-3 border-b border-eura-border/20">
                14. Contact Information
              </h2>
              <p>If you have questions, concerns, or complaints regarding these Terms or the Website, please contact us at:</p>
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
