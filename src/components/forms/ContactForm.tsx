"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { labelClass, inputClass, submitButtonClass } from "@/components/ui/formStyles";
import { services } from "@/data/services";
import FormWizardHeader from "@/components/ui/FormWizardHeader";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    eventType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleNext = () => {
    if (!formData.city.trim()) {
      setError("Please enter your city so we can check availability.");
      return;
    }
    setError("");
    setStep(2);
  };

  const handleBack = () => {
    setError("");
    setStep(1);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setError("Please fill in all required contact fields.");
      return;
    }
    setError("");
    setIsSubmitting(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.error("Failed to submit contact form:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="border border-[#4C0C0A]/30 bg-[#4C0C0A]/5 p-8 text-center animate-in fade-in duration-500">
        <CheckCircle2 className="mx-auto h-12 w-12 text-[#4C0C0A]" />
        <h3 className="mt-4 font-display text-2xl font-bold text-white">
          Thanks — we got it.
        </h3>
        <p className="mt-2 font-body text-sm text-white/70 font-medium">
          A booking specialist will reach out shortly to confirm details.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <FormWizardHeader
        steps={["Event Info", "Your Details"]}
        currentStep={step}
        onStepClick={(s) => {
          if (s < step) setStep(s);
        }}
      />

      {error && (
        <div className="mb-6 rounded-xl border border-red-500/30 bg-red-50 px-4 py-3 text-xs font-semibold text-red-700 animate-in fade-in duration-200">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <div className="space-y-5 animate-in fade-in duration-300">
            <div>
              <label className={labelClass} htmlFor="eventType">
                Event Type
              </label>
              {/* Interactive Quick-Select Badges */}
              <div className="mb-3 flex flex-wrap gap-2">
                {services.map((s) => {
                  const isSelected = formData.eventType === s.slug;
                  return (
                    <button
                      key={s.slug}
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, eventType: s.slug }));
                        if (error) setError("");
                      }}
                      className={`rounded-full border px-4 py-2 font-body text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                        isSelected
                          ? "border-[#4C0C0A] bg-[#4C0C0A] text-white shadow-sm"
                          : "border-white/10 bg-black text-white/80 hover:border-[#4C0C0A]/60"
                      }`}
                    >
                      {s.title}
                    </button>
                  );
                })}
              </div>
              <select
                id="eventType"
                name="eventType"
                className={inputClass}
                value={formData.eventType}
                onChange={handleChange}
              >
                <option value="">Select an event type (or use buttons above)</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className={labelClass} htmlFor="city">
                City <span className="text-[#4C0C0A]">*</span>
              </label>
              <input
                id="city"
                name="city"
                required
                className={inputClass}
                value={formData.city}
                onChange={handleChange}
                placeholder="Charleston, SC"
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="message">
                Tell us about your event
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={inputClass}
                value={formData.message}
                onChange={handleChange}
                placeholder="Date, guest count, location, anything else we should know"
              />
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleNext}
                className="flex w-full items-center justify-center gap-2 bg-[#4C0C0A] px-8 py-4 font-body text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-[1.01] hover:bg-[#5a0105] shadow-md cursor-pointer"
              >
                <span>Next: Your Details</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="name">
                  Full Name <span className="text-[#4C0C0A]">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className={inputClass}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="phone">
                  Phone <span className="text-[#4C0C0A]">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className={inputClass}
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(843) 000-0000"
                />
              </div>
            </div>

            <div>
              <label className={labelClass} htmlFor="email">
                Email <span className="text-[#4C0C0A]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={inputClass}
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>

            {/* Step Summary Box */}
            <div className="rounded-xl border border-white/10 bg-black/[0.02] p-4 font-body text-xs text-white/80">
              <div className="mb-1 font-bold uppercase tracking-wider text-white">
                Event Overview
              </div>
              <div>
                <span className="font-semibold">Location:</span> {formData.city || "Not specified"}
              </div>
              {formData.eventType && (
                <div>
                  <span className="font-semibold">Event Type:</span>{" "}
                  {services.find((s) => s.slug === formData.eventType)?.title ||
                    formData.eventType}
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleBack}
                className="flex w-full sm:w-1/3 items-center justify-center gap-2 border border-black/25 bg-black px-6 py-4 font-body text-sm font-bold uppercase tracking-widest text-white/80 transition-all duration-300 hover:border-black/50 hover:bg-black/5 cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${submitButtonClass} w-full sm:w-2/3 disabled:cursor-not-allowed disabled:opacity-60`}
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
