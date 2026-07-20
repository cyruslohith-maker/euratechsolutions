"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

interface HeroProps {
  onDemoClick: () => void;
}

export default function Hero({ onDemoClick }: HeroProps) {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center bg-eura-black grid-bg-dark overflow-hidden"
      aria-labelledby="hero-headline"
    >
      {/* Radial gradient focal point */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-white/[0.03] rounded-full blur-3xl" />
      </div>

      {/* Corner grid markers */}
      <div className="pointer-events-none absolute top-20 left-6 w-6 h-6 border-l border-t border-eura-border/30" />
      <div className="pointer-events-none absolute top-20 right-6 w-6 h-6 border-r border-t border-eura-border/30" />
      <div className="pointer-events-none absolute bottom-10 left-6 w-6 h-6 border-l border-b border-eura-border/30" />
      <div className="pointer-events-none absolute bottom-10 right-6 w-6 h-6 border-r border-b border-eura-border/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 border border-eura-border/40 px-4 py-1.5 mb-10 text-xs font-mono font-medium text-eura-muted uppercase tracking-widest"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse-slow" />
          Voice AI Infrastructure · Enterprise Grade
        </motion.div>

        {/* Headline */}
        <motion.h1
          id="hero-headline"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="text-balance text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] text-eura-white max-w-5xl"
        >
          The Intelligent Voice AI System Built for{" "}
          <span className="relative inline-block">
            Business Operations
            <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-eura-white/30" />
          </span>
          .
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.35 }}
          className="mt-8 text-base sm:text-lg text-eura-muted max-w-2xl leading-relaxed text-balance"
        >
          Eura Tech Solutions deploys custom Voice AI infrastructure to handle
          inbound inquiries, route caller intent, automate calendar bookings,
          and sync with your CRM in real time.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <button
            id="hero-try-demo"
            onClick={onDemoClick}
            className="group flex items-center gap-3 px-8 py-4 bg-eura-white text-eura-black text-sm font-bold tracking-wide hover:bg-eura-border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-eura-black"
            aria-label="Try Live Demo — opens lead capture form"
          >
            <Play size={16} className="fill-current" />
            Try Live Demo
          </button>

          <a
            id="hero-walkthrough"
            href="#solutions"
            className="group flex items-center gap-2 px-8 py-4 border border-eura-border/60 text-eura-white text-sm font-semibold tracking-wide hover:border-eura-white hover:bg-eura-white/5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-eura-black"
            aria-label="Request System Walkthrough"
          >
            Request System Walkthrough
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </a>
        </motion.div>

        {/* Subtle scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="hidden sm:flex items-center gap-3 mt-20 text-eura-muted-dark text-xs font-mono tracking-widest uppercase"
          aria-hidden="true"
        >
          <div className="w-8 h-[1px] bg-eura-muted-dark" />
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}
