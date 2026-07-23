"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calculator, PhoneOff, Users, DollarSign, TrendingDown } from "lucide-react";

type Timeframe = "daily" | "weekly" | "monthly" | "annually";

export default function RevenueCalculator() {
  const [missedCalls, setMissedCalls] = useState(15);
  const [conversionRate, setConversionRate] = useState(10); // percentage
  const [servicePrice, setServicePrice] = useState(150); // dollars
  const [timeframe, setTimeframe] = useState<Timeframe>("monthly");

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Calculate lost revenue
  const dailyLoss = missedCalls * (conversionRate / 100) * servicePrice;
  
  let multiplier = 1;
  let timeframeLabel = "day";
  let missedCallsPeriod = missedCalls;

  if (timeframe === "weekly") {
    multiplier = 7;
    timeframeLabel = "week";
    missedCallsPeriod = missedCalls * 7;
  } else if (timeframe === "monthly") {
    multiplier = 30;
    timeframeLabel = "month";
    missedCallsPeriod = missedCalls * 30;
  } else if (timeframe === "annually") {
    multiplier = 365;
    timeframeLabel = "year";
    missedCallsPeriod = missedCalls * 365;
  }

  const calculatedLoss = Math.round(dailyLoss * multiplier);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section
      id="calculator"
      ref={ref}
      className="bg-eura-black grid-bg-dark py-24 sm:py-32 border-t border-eura-border/20"
      aria-labelledby="calc-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 border border-eura-border/40 px-4 py-1.5 mb-6 text-xs font-mono font-medium text-eura-muted uppercase tracking-widest bg-eura-charcoal rounded-full"
          >
            <Calculator size={12} className="text-eura-white" />
            Revenue Loss Calculator
          </motion.div>
          
          <motion.h2
            id="calc-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-eura-white leading-tight"
          >
            How Much Are Missed Calls <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-eura-white via-eura-muted to-eura-muted-dark">
              Costing Your Business?
            </span>
          </motion.h2>
        </div>

        {/* Calculator Widget Container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="border border-eura-border/20 bg-eura-charcoal/40 backdrop-blur-sm p-6 sm:p-10 rounded-2xl shadow-2xl relative overflow-hidden"
        >
          {/* Subtle grid lines background overlay */}
          <div className="absolute inset-0 grid-bg-dark opacity-10 pointer-events-none" />

          <div className="relative z-10 space-y-8">
            {/* Input Slider 1: Missed Calls */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label htmlFor="missed-calls-input" className="flex items-center gap-2 text-sm font-semibold text-eura-white">
                  <PhoneOff size={16} className="text-eura-muted" />
                  Missed Calls Per Day
                </label>
                <span className="font-mono font-bold text-eura-white text-base bg-eura-black border border-eura-border/10 px-3 py-1 rounded">
                  {missedCalls}
                </span>
              </div>
              <input
                id="missed-calls-input"
                type="range"
                min="1"
                max="100"
                value={missedCalls}
                onChange={(e) => setMissedCalls(parseInt(e.target.value))}
                className="w-full h-1 bg-eura-muted-dark rounded-lg appearance-none cursor-pointer accent-white"
                style={{
                  background: `linear-gradient(to right, #FFFFFF 0%, #FFFFFF ${missedCalls}%, #3F3F46 ${missedCalls}%, #3F3F46 100%)`
                }}
              />
            </div>

            {/* Input Slider 2: Conversion Rate */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label htmlFor="conversion-rate-input" className="flex items-center gap-2 text-sm font-semibold text-eura-white">
                  <Users size={16} className="text-eura-muted" />
                  Calls That Convert to Customers
                </label>
                <span className="font-mono font-bold text-eura-white text-base bg-eura-black border border-eura-border/10 px-3 py-1 rounded">
                  {conversionRate}%
                </span>
              </div>
              <input
                id="conversion-rate-input"
                type="range"
                min="1"
                max="100"
                value={conversionRate}
                onChange={(e) => setConversionRate(parseInt(e.target.value))}
                className="w-full h-1 bg-eura-muted-dark rounded-lg appearance-none cursor-pointer accent-white"
                style={{
                  background: `linear-gradient(to right, #FFFFFF 0%, #FFFFFF ${conversionRate}%, #3F3F46 ${conversionRate}%, #3F3F46 100%)`
                }}
              />
            </div>

            {/* Input Slider 3: Average Service Price */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label htmlFor="service-price-input" className="flex items-center gap-2 text-sm font-semibold text-eura-white">
                  <DollarSign size={16} className="text-eura-muted" />
                  Average Service Price
                </label>
                <span className="font-mono font-bold text-eura-white text-base bg-eura-black border border-eura-border/10 px-3 py-1 rounded">
                  ${servicePrice}
                </span>
              </div>
              <input
                id="service-price-input"
                type="range"
                min="10"
                max="5000"
                step="10"
                value={servicePrice}
                onChange={(e) => setServicePrice(parseInt(e.target.value))}
                className="w-full h-1 bg-eura-muted-dark rounded-lg appearance-none cursor-pointer accent-white"
                style={{
                  background: `linear-gradient(to right, #FFFFFF 0%, #FFFFFF ${(servicePrice / 5000) * 100}%, #3F3F46 ${(servicePrice / 5000) * 100}%, #3F3F46 100%)`
                }}
              />
            </div>

            {/* Timeframe Selector Tabs */}
            <div className="flex justify-center pt-4">
              <div className="inline-flex p-1 bg-eura-black border border-eura-border/10 rounded-xl" role="tablist" aria-label="Timeframe selector">
                {(["daily", "weekly", "monthly", "annually"] as Timeframe[]).map((t) => (
                  <button
                    key={t}
                    role="tab"
                    aria-selected={timeframe === t}
                    onClick={() => setTimeframe(t)}
                    className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 rounded-lg capitalize ${
                      timeframe === t
                        ? "bg-eura-white text-eura-black shadow-md"
                        : "text-eura-muted hover:text-eura-white"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Block */}
            <div className="border border-eura-border/20 bg-eura-black p-8 rounded-xl flex flex-col items-center justify-center text-center relative overflow-hidden group">
              <div className="absolute top-4 right-4 text-eura-muted-dark group-hover:text-eura-muted transition-colors duration-300">
                <TrendingDown size={20} />
              </div>
              
              <p className="text-xs font-mono font-medium text-eura-muted uppercase tracking-widest mb-3">
                Estimated Revenue Lost Per {timeframeLabel}
              </p>

              <p className="text-5xl sm:text-6xl font-black text-eura-white tracking-tight tabular-nums mb-3">
                {formatCurrency(calculatedLoss)}
              </p>

              <p className="text-xs text-eura-muted font-medium">
                Based on <span className="text-white font-semibold">{missedCallsPeriod.toLocaleString()}</span> missed calls per {timeframeLabel}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Small footer note */}
        <p className="text-center text-xs text-eura-muted-dark mt-6 font-mono">
          Deploying EURA Tech Solutions captures up to 98% of these missed inbound opportunities.
        </p>
      </div>
    </section>
  );
}
