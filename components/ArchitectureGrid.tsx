"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Layers, GitBranch } from "lucide-react";

const features = [
  {
    id: "arch-intent",
    icon: Cpu,
    title: "Dynamic Intent Processing",
    description:
      "Replaces rigid phone trees with fluid conversational intelligence that adapts to natural caller language and intent signals in real time.",
    tag: "NLP Engine",
  },
  {
    id: "arch-integration",
    icon: Layers,
    title: "Deep Stack Integration",
    description:
      "Connects directly into CRMs, Google Calendar, Outlook, and custom databases with bi-directional data sync across your full tool stack.",
    tag: "API Layer",
  },
  {
    id: "arch-escalation",
    icon: GitBranch,
    title: "Autonomous Escalation Logic",
    description:
      "Handles tasks independently and routes high-priority leads with full conversation context to human reps — zero information loss.",
    tag: "Routing Engine",
  },
];

export default function ArchitectureGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="architecture"
      ref={ref}
      className="bg-eura-black grid-bg-dark py-24 sm:py-32"
      aria-labelledby="arch-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-eura-muted uppercase tracking-widest mb-4">
            System Architecture
          </p>
          <h2
            id="arch-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-eura-white max-w-2xl leading-tight"
          >
            Built on three core intelligence layers.
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-eura-border/20">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.id}
                id={feature.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.12 }}
                className="group relative border-r border-b border-eura-border/20 last:border-r-0 md:[&:nth-child(3)]:border-r-0 p-8 hover:bg-eura-white/[0.02] transition-colors duration-300"
                aria-labelledby={`${feature.id}-title`}
              >
                {/* Hover corner */}
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[0px] border-l-[0px] group-hover:border-t-[32px] group-hover:border-l-[32px] border-t-eura-white/10 border-l-transparent transition-all duration-300" />

                {/* Tag */}
                <span className="inline-block text-[10px] font-mono font-medium text-eura-muted-dark uppercase tracking-widest border border-eura-border/30 px-2 py-0.5 mb-6">
                  {feature.tag}
                </span>

                {/* Icon */}
                <div className="w-10 h-10 border border-eura-border/30 flex items-center justify-center mb-6 group-hover:border-eura-white/40 group-hover:bg-eura-white/5 transition-all duration-300">
                  <Icon size={18} className="text-eura-muted group-hover:text-eura-white transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3
                  id={`${feature.id}-title`}
                  className="text-lg font-bold text-eura-white mb-3 group-hover:text-white transition-colors"
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-eura-muted leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom line indicator */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-eura-white group-hover:w-full transition-all duration-500 ease-out" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
