import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eura Tech Solutions — Intelligent Voice AI for Business Operations",
  description:
    "Eura Tech Solutions deploys custom Voice AI infrastructure to handle inbound inquiries, route caller intent, automate calendar bookings, and sync with your CRM in real time.",
  keywords: [
    "Voice AI",
    "Business Phone AI",
    "CRM Integration",
    "Automated Scheduling",
    "Inbound Call Automation",
    "Eura Tech Solutions",
  ],
  openGraph: {
    title: "Eura Tech Solutions — Voice AI Built for Business",
    description:
      "Custom Voice AI infrastructure that handles inbound inquiries, routes callers, automates bookings, and syncs with your CRM in real time.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eura Tech Solutions — Voice AI Built for Business",
    description:
      "Custom Voice AI infrastructure for modern business operations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Eura Tech Solutions",
  description:
    "Eura Tech Solutions deploys custom Voice AI infrastructure for business operations including inbound call handling, CRM sync, and automated scheduling.",
  url: "https://euratechsolutions.com",
  logo: "https://euratechsolutions.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: "English",
  },
  offers: {
    "@type": "Offer",
    name: "Voice AI System",
    description:
      "Custom Voice AI infrastructure for business phone operations, CRM integration, and automated scheduling.",
    category: "AI Software",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#09090B" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-eura-black text-eura-white antialiased">
        {children}
      </body>
    </html>
  );
}
