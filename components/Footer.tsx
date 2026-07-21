import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-eura-charcoal border-t border-eura-border/20"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" aria-label="Eura Tech Solutions home" className="inline-block group mb-6">
              <div className="relative border border-eura-border/30 group-hover:border-eura-white transition-colors duration-300 p-0 bg-white rounded-lg overflow-hidden">
                <div className="relative h-9 w-28 transition-transform duration-300 group-hover:scale-[1.02]">
                  <Image
                    src="/logo.png"
                    alt="Eura Tech Solutions"
                    fill
                    sizes="112px"
                    className="object-contain object-center scale-[2.2]"
                  />


                </div>
              </div>
            </Link>


            <p className="text-sm text-eura-muted leading-relaxed max-w-xs">
              Custom Voice AI infrastructure for modern business operations.
              Handle inquiries, route callers, and sync your CRM — automatically.
            </p>
            <p className="text-xs font-mono text-eura-muted-dark mt-6 uppercase tracking-widest">
              © {currentYear} Eura Tech Solutions. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-mono font-medium text-eura-muted uppercase tracking-widest mb-6">
              Product
            </h3>
            <nav aria-label="Product links">
              <ul className="space-y-3">
                {[
                  { label: "Capabilities", href: "#capabilities" },
                  { label: "Solutions", href: "#solutions" },
                  { label: "Architecture", href: "#architecture" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-eura-muted hover:text-eura-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-mono font-medium text-eura-muted uppercase tracking-widest mb-6">
              Legal
            </h3>
            <nav aria-label="Legal links">
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/terms"
                    className="text-sm text-eura-muted hover:text-eura-white transition-colors duration-200"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-eura-muted hover:text-eura-white transition-colors duration-200"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-eura-border/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-eura-muted-dark font-mono">
            Powered by Voice AI · Built for enterprise scale
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/terms"
              className="text-xs text-eura-muted-dark hover:text-eura-muted transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-xs text-eura-muted-dark hover:text-eura-muted transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
