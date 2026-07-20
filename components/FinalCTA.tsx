"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface FinalCTAProps {
  onDemoClick: () => void;
}

export default function FinalCTA({ onDemoClick }: FinalCTAProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="capabilities"
      ref={ref}
      className="relative bg-eura-black grid-bg-dark py-24 sm:py-36 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="w-[800px] h-[400px] bg-white/[0.025] rounded-full blur-3xl" />
      </div>

      {/* Corner marks */}
      <div className="pointer-events-none absolute top-8 left-8 w-8 h-8 border-l border-t border-eura-border/20" aria-hidden="true" />
      <div className="pointer-events-none absolute top-8 right-8 w-8 h-8 border-r border-t border-eura-border/20" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-8 left-8 w-8 h-8 border-l border-b border-eura-border/20" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-8 right-8 w-8 h-8 border-r border-b border-eura-border/20" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="text-xs font-mono text-eura-muted uppercase tracking-widest mb-8"
        >
          Ready to deploy
        </motion.p>

        {/* Headline */}
        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-eura-white leading-tight mb-8 text-balance"
        >
          Ready to upgrade your business phone infrastructure?
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-eura-muted leading-relaxed max-w-2xl mx-auto mb-12 text-balance"
        >
          See how Eura Tech Solutions can integrate a custom Voice AI System into
          your existing workflows in days, not months.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            id="final-cta-walkthrough"
            onClick={onDemoClick}
            className="group flex items-center gap-3 px-10 py-4 bg-eura-white text-eura-black text-sm font-bold tracking-wide hover:bg-eura-border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-eura-black"
            aria-label="Schedule Your System Walkthrough"
          >
            Schedule Your System Walkthrough
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </button>
        </motion.div>

        {/* Trust signal */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xs text-eura-muted-dark mt-10 font-mono"
        >
          Enterprise deployment · Custom integration · No long-term lock-in
        </motion.p>
      </div>
    </section>
  );
}
