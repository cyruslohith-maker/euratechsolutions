"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onDemoClick: () => void;
}

export default function Navbar({ onDemoClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Capabilities", href: "#capabilities" },
    { label: "Solutions", href: "#solutions" },
    { label: "Architecture", href: "#architecture" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-eura-black/95 backdrop-blur-md border-b border-eura-border/20"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0 group" aria-label="Eura Tech Solutions homepage">
          <div className="relative h-9 w-24 transition-opacity group-hover:opacity-80">
            <Image
              src="/logo.png"
              alt="Eura Tech Solutions"
              fill
              sizes="96px"
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-eura-muted hover:text-eura-white transition-colors duration-200 tracking-wide uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            id="nav-demo-cta"
            onClick={onDemoClick}
            className="px-5 py-2 text-sm font-semibold bg-eura-white text-eura-black border border-eura-white hover:bg-transparent hover:text-eura-white transition-all duration-200 tracking-wide"
            aria-label="Request System Demo"
          >
            Request System Demo
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden p-2 text-eura-muted hover:text-eura-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-eura-charcoal border-t border-eura-border/20 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-eura-muted hover:text-eura-white transition-colors uppercase tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onDemoClick();
                }}
                className="w-full px-5 py-3 text-sm font-semibold bg-eura-white text-eura-black hover:bg-eura-border transition-colors tracking-wide"
                aria-label="Request System Demo"
              >
                Request System Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
