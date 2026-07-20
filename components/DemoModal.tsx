"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, CheckCircle2, ChevronDown } from "lucide-react";
import { submitLead } from "@/lib/supabase";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const COUNTRIES = [
  "United States", "United Kingdom", "Canada", "Australia", "India",
  "Germany", "France", "Singapore", "United Arab Emirates", "Other",
];

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming",
];

type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  full_name: string;
  business_name: string;
  business_email: string;
  phone_number: string;
  country: string;
  state: string;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [formData, setFormData] = useState<FormData>({
    full_name: "",
    business_name: "",
    business_email: "",
    phone_number: "",
    country: "",
    state: "",
  });

  const dialogRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Focus trap + ESC close
  useEffect(() => {
    if (isOpen) {
      firstInputRef.current?.focus();
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    }
  }, [isOpen, onClose]);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.full_name.trim()) newErrors.full_name = "Full name is required.";
    if (!formData.business_name.trim()) newErrors.business_name = "Business name is required.";
    if (!formData.business_email.trim()) {
      newErrors.business_email = "Business email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.business_email)) {
      newErrors.business_email = "Enter a valid email address.";
    }
    if (!formData.phone_number.trim()) newErrors.phone_number = "Phone number is required.";
    if (!formData.country) newErrors.country = "Please select your country.";
    if (!formData.state.trim()) newErrors.state = "State / Province is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setFormState("submitting");
    try {
      await submitLead(formData);
      setFormState("success");
    } catch {
      // Even on Supabase error, show demo (graceful degradation)
      setFormState("success");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full bg-eura-black border px-4 py-3 text-sm text-eura-white placeholder-eura-muted-dark focus:outline-none focus:border-eura-white transition-colors duration-200 ${
      errors[field] ? "border-red-500/70" : "border-eura-border/40 hover:border-eura-border/70"
    }`;

  const labelClass = "block text-xs font-medium text-eura-muted uppercase tracking-widest mb-2";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-eura-black/90 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div
              ref={dialogRef}
              className="relative w-full max-w-lg bg-eura-charcoal border border-eura-border/30 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-eura-charcoal border-b border-eura-border/20 px-8 py-6 flex items-start justify-between z-10">
                <div>
                  <p className="text-xs font-mono text-eura-muted uppercase tracking-widest mb-1">
                    Step 1 of 2 — Lead Registration
                  </p>
                  <h2 id="modal-title" className="text-xl font-bold text-eura-white">
                    Access the Live Demo
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 text-eura-muted hover:text-eura-white transition-colors focus:outline-none focus:ring-1 focus:ring-eura-white"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Success State — iframe demo */}
              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="p-6"
                  >
                    <div className="flex items-center gap-3 mb-6 p-4 border border-eura-border/30 bg-eura-black">
                      <CheckCircle2 size={20} className="text-white shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-eura-white">
                          Registration complete
                        </p>
                        <p className="text-xs text-eura-muted mt-0.5">
                          Loading your interactive Voice AI demo…
                        </p>
                      </div>
                    </div>
                    <div className="relative w-full border border-eura-border/30 bg-eura-black overflow-hidden">
                      <div className="flex items-center gap-2 px-4 py-2 border-b border-eura-border/20 bg-eura-charcoal">
                        <div className="flex gap-1.5" aria-hidden="true">
                          <div className="w-2.5 h-2.5 rounded-full bg-eura-muted-dark" />
                          <div className="w-2.5 h-2.5 rounded-full bg-eura-muted-dark" />
                          <div className="w-2.5 h-2.5 rounded-full bg-eura-muted-dark" />
                        </div>
                        <p className="text-xs font-mono text-eura-muted truncate flex-1">
                          shrey3108.github.io/dnetal-clicnic
                        </p>
                      </div>
                      <iframe
                        src="https://shrey3108.github.io/dnetal-clicnic/"
                        title="Eura Tech Solutions — Interactive Voice AI Demo"
                        className="w-full h-[420px] border-0"
                        allow="microphone; autoplay"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-xs text-eura-muted mt-4 text-center">
                      Demo not loading?{" "}
                      <a
                        href="https://shrey3108.github.io/dnetal-clicnic/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-eura-white underline underline-offset-2 hover:no-underline"
                      >
                        Open in new tab →
                      </a>
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="px-8 py-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
                  >
                    {/* Full Name */}
                    <div className="sm:col-span-2">
                      <label htmlFor="full_name" className={labelClass}>Full Name</label>
                      <input
                        ref={firstInputRef}
                        id="full_name"
                        name="full_name"
                        type="text"
                        autoComplete="name"
                        placeholder="Jane Smith"
                        value={formData.full_name}
                        onChange={handleChange}
                        className={inputClass("full_name")}
                        aria-invalid={!!errors.full_name}
                        aria-describedby={errors.full_name ? "err-full_name" : undefined}
                      />
                      {errors.full_name && (
                        <p id="err-full_name" className="mt-1.5 text-xs text-red-400">{errors.full_name}</p>
                      )}
                    </div>

                    {/* Business Name */}
                    <div className="sm:col-span-2">
                      <label htmlFor="business_name" className={labelClass}>Business Name</label>
                      <input
                        id="business_name"
                        name="business_name"
                        type="text"
                        autoComplete="organization"
                        placeholder="Acme Corporation"
                        value={formData.business_name}
                        onChange={handleChange}
                        className={inputClass("business_name")}
                        aria-invalid={!!errors.business_name}
                        aria-describedby={errors.business_name ? "err-business_name" : undefined}
                      />
                      {errors.business_name && (
                        <p id="err-business_name" className="mt-1.5 text-xs text-red-400">{errors.business_name}</p>
                      )}
                    </div>

                    {/* Business Email */}
                    <div>
                      <label htmlFor="business_email" className={labelClass}>Business Email</label>
                      <input
                        id="business_email"
                        name="business_email"
                        type="email"
                        autoComplete="email"
                        placeholder="jane@acme.com"
                        value={formData.business_email}
                        onChange={handleChange}
                        className={inputClass("business_email")}
                        aria-invalid={!!errors.business_email}
                        aria-describedby={errors.business_email ? "err-business_email" : undefined}
                      />
                      {errors.business_email && (
                        <p id="err-business_email" className="mt-1.5 text-xs text-red-400">{errors.business_email}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone_number" className={labelClass}>Phone Number</label>
                      <input
                        id="phone_number"
                        name="phone_number"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone_number}
                        onChange={handleChange}
                        className={inputClass("phone_number")}
                        aria-invalid={!!errors.phone_number}
                        aria-describedby={errors.phone_number ? "err-phone_number" : undefined}
                      />
                      {errors.phone_number && (
                        <p id="err-phone_number" className="mt-1.5 text-xs text-red-400">{errors.phone_number}</p>
                      )}
                    </div>

                    {/* Country */}
                    <div>
                      <label htmlFor="country" className={labelClass}>Country</label>
                      <div className="relative">
                        <select
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className={`${inputClass("country")} appearance-none pr-10 cursor-pointer`}
                          aria-invalid={!!errors.country}
                          aria-describedby={errors.country ? "err-country" : undefined}
                        >
                          <option value="" disabled>Select country…</option>
                          {COUNTRIES.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-eura-muted pointer-events-none" />
                      </div>
                      {errors.country && (
                        <p id="err-country" className="mt-1.5 text-xs text-red-400">{errors.country}</p>
                      )}
                    </div>

                    {/* State */}
                    <div>
                      <label htmlFor="state" className={labelClass}>State / Province</label>
                      {formData.country === "United States" ? (
                        <div className="relative">
                          <select
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className={`${inputClass("state")} appearance-none pr-10 cursor-pointer`}
                            aria-invalid={!!errors.state}
                            aria-describedby={errors.state ? "err-state" : undefined}
                          >
                            <option value="" disabled>Select state…</option>
                            {US_STATES.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                          <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-eura-muted pointer-events-none" />
                        </div>
                      ) : (
                        <input
                          id="state"
                          name="state"
                          type="text"
                          placeholder="State / Province"
                          value={formData.state}
                          onChange={handleChange}
                          className={inputClass("state")}
                          aria-invalid={!!errors.state}
                          aria-describedby={errors.state ? "err-state" : undefined}
                        />
                      )}
                      {errors.state && (
                        <p id="err-state" className="mt-1.5 text-xs text-red-400">{errors.state}</p>
                      )}
                    </div>

                    {/* Submit */}
                    <div className="sm:col-span-2 pt-2">
                      <button
                        id="demo-form-submit"
                        type="submit"
                        disabled={formState === "submitting"}
                        className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-eura-white text-eura-black text-sm font-bold tracking-wide hover:bg-eura-border disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-eura-charcoal"
                        aria-label="Launch Demo"
                      >
                        {formState === "submitting" ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            Launching Demo…
                          </>
                        ) : (
                          "Launch Demo →"
                        )}
                      </button>
                      <p className="text-center text-xs text-eura-muted mt-4">
                        Your information is used only to contact you about Eura services.
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
