"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Filter, CalendarClock, Headphones } from "lucide-react";

const useCases = [
  {
    id: "use-lead",
    icon: Filter,
    number: "01",
    title: "Lead Capture & Qualification",
    description:
      "Screen inbound callers and route qualified leads into your sales pipeline — with real-time CRM enrichment and automated follow-up sequencing.",
    items: ["Intent screening", "Lead scoring", "CRM push", "Rep routing"],
  },
  {
    id: "use-schedule",
    icon: CalendarClock,
    number: "02",
    title: "Automated Scheduling & Dispatch",
    description:
      "Book, reschedule, or cancel appointments directly with instant SMS triggers — synced to Google Calendar and Outlook without human intervention.",
    items: ["Calendar sync", "SMS confirmation", "Rescheduling", "Cancellation logic"],
  },
  {
    id: "use-support",
    icon: Headphones,
    number: "03",
    title: "First-Touch Customer Support",
    description:
      "Answer complex product and service FAQs and eliminate tier-1 support backlogs — with full transcript logging and escalation to live agents.",
    items: ["FAQ handling", "Tier-1 deflection", "Transcript logging", "Escalation routing"],
  },
];

export default function UseCases() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="solutions"
      ref={ref}
      className="bg-eura-white grid-bg-light py-24 sm:py-32"
      aria-labelledby="usecases-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-eura-muted uppercase tracking-widest mb-4">
            Operational Use Cases
          </p>
          <h2
            id="usecases-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-eura-black max-w-2xl leading-tight"
          >
            Three workflows. Fully automated.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {useCases.map((uc, i) => {
            const Icon = uc.icon;
            return (
              <motion.article
                key={uc.id}
                id={uc.id}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.12 }}
                className="group border border-eura-border bg-white hover:bg-eura-black transition-all duration-500 p-8 cursor-default"
                aria-labelledby={`${uc.id}-title`}
              >
                {/* Number + icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono text-eura-muted-dark group-hover:text-eura-muted-dark tracking-widest">
                    {uc.number}
                  </span>
                  <div className="w-10 h-10 border border-eura-border group-hover:border-eura-border/30 flex items-center justify-center group-hover:bg-eura-white/5 transition-all duration-300">
                    <Icon
                      size={18}
                      className="text-eura-muted-dark group-hover:text-eura-white transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3
                  id={`${uc.id}-title`}
                  className="text-xl font-bold text-eura-black group-hover:text-eura-white mb-4 transition-colors duration-300"
                >
                  {uc.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-eura-muted leading-relaxed mb-8 group-hover:text-eura-muted transition-colors duration-300">
                  {uc.description}
                </p>

                {/* Feature list */}
                <ul className="space-y-2" aria-label="Key features">
                  {uc.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-xs font-medium text-eura-muted-dark group-hover:text-eura-muted transition-colors duration-300"
                    >
                      <span className="w-3 h-[1px] bg-current shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
