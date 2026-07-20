"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    id: "stat-zero-wait",
    value: "0",
    unit: "Line Waiting",
    description: "100% concurrent call capacity. Zero caller hold times.",
    tag: "Capacity",
  },
  {
    id: "stat-247",
    value: "24/7",
    unit: "Deployment",
    description:
      "Continuous phone coverage, after-hours intake, and weekend processing.",
    tag: "Uptime",
  },
  {
    id: "stat-sync",
    value: "100%",
    unit: "Data Sync",
    description:
      "Automatic CRM updates, live calendar scheduling, and call transcript logging.",
    tag: "Accuracy",
  },
];

export default function ImpactBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-eura-white border-y border-eura-border grid-bg-light"
      aria-labelledby="impact-heading"
    >
      <h2 id="impact-heading" className="sr-only">
        System Impact Statistics
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-eura-border">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              id={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative px-8 py-12 group"
            >
              {/* Tag */}
              <span className="inline-block text-[10px] font-mono font-medium text-eura-muted-dark uppercase tracking-widest border border-eura-border px-2 py-0.5 mb-4">
                {stat.tag}
              </span>

              {/* Value */}
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl sm:text-6xl font-black tracking-tight text-eura-black leading-none tabular-nums">
                  {stat.value}
                </span>
                <span className="text-base font-semibold text-eura-black/60 leading-tight">
                  {stat.unit}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-eura-muted leading-relaxed max-w-xs">
                {stat.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-eura-black/0 group-hover:bg-eura-black/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
