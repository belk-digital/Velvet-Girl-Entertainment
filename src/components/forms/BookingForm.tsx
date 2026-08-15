"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  Minus,
  MessageCircle,
  Phone,
  Plus,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { labelClass, inputClass, submitButtonClass } from "@/components/ui/formStyles";
import { services } from "@/data/services";
import { packageThemes, costumes, upgrades } from "@/data/packages";
import { cities } from "@/data/cities";
import FormWizardHeader from "@/components/ui/FormWizardHeader";

const bookableThemes = packageThemes.filter((t) => !t.comingSoon);
const DEPOSIT_AMOUNT = "$75";

export default function BookingForm() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");

  const [isLastMinute, setIsLastMinute] = useState(false);
  const [dancers, setDancers] = useState(
    Math.max(2, Number(searchParams.get("dancers")) || 2)
  );
  const [selectedUpgrades, setSelectedUpgrades] = useState<string[]>(
    searchParams.get("upgrades")?.split(",").filter(Boolean) || []
  );

  const initialTheme = searchParams.get("theme") || "";
  const initialCostume = searchParams.get("costume") || "";

  const [dateValue, setDateValue] = useState("");
  const [timeValue, setTimeValue] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    eventType: "",
    theme: initialTheme,
    costume: initialCostume,
    guestCount: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const toggleUpgrade = (slug: string) => {
    setSelectedUpgrades((prev) =>
      prev.includes(slug) ? prev.filter((u) => u !== slug) : [...prev, slug]
    );
  };

  const checkTiming = (dateVal: string, timeVal: string) => {
    if (!dateVal) {
      setIsLastMinute(false);
      return;
    }
    const eventDateTime = new Date(`${dateVal}T${timeVal || "12:00"}`);
    const hoursUntilEvent =
      (eventDateTime.getTime() - Date.now()) / (1000 * 60 * 60);
    setIsLastMinute(hoursUntilEvent < 24);
  };

  const handleNextToStep2 = () => {
    if (!formData.city || !dateValue) {
      setError("Please select an event city and date to continue.");
      return;
    }
    setError("");
    setStep(2);
  };

  const handleNextToStep3 = () => {
    setError("");
    setStep(3);
  };

  const handleBack = (targetStep: number) => {
    setError("");
    setStep(targetStep);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setError("Please complete your name, phone, and email.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-velvet-pink/30 bg-white/5 p-8 text-center animate-in fade-in duration-500">
        <CheckCircle2 className="mx-auto h-10 w-10 text-velvet-pink" />
        <h3 className="mt-4 font-display text-xl text-white">
          Booking request received.
        </h3>
        {isLastMinute ? (
          <>
            <p className="mt-2 font-body text-sm text-white/60">
              Since your event is less than 24 hours away, online deposit
              booking isn&rsquo;t available — please call or text us right
              away to lock in availability.
            </p>
            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="tel:8439387377"
                className="tracking-caps flex items-center gap-2 rounded-full bg-gradient-to-r from-velvet-pink-hot to-velvet-pink px-6 py-3 font-body text-xs font-semibold text-white"
              >
                <Phone className="h-4 w-4 animate-pulse" />
                CALL: (843) 938-7377
              </a>
              <a
                href="sms:8439387377"
                className="tracking-caps flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-body text-xs font-semibold text-white/85"
              >
                <MessageCircle className="h-4 w-4" />
                TEXT US: (843) 938-7377
              </a>
            </div>
          </>
        ) : (
          <p className="mt-2 font-body text-sm text-white/60">
            Our booking concierge will reach out shortly to confirm
            availability and collect your {DEPOSIT_AMOUNT} deposit to secure
            the date.
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6 w-full">
      {/* Prominent Direct Call & Text VIP Banner */}
      <div className="rounded-xl bg-[#5C0005]/10 border border-[#5C0005]/30 p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#5C0005]">
            Want Instant VIP Booking?
          </h4>
          <p className="text-xs text-stone-300 font-medium">
            Call or text us directly for immediate response &amp; date lock-in.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="tel:8439387377"
            className="inline-flex items-center gap-1.5 bg-[#5C0005] hover:bg-[#5c0911] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm transition-transform hover:scale-105"
          >
            <Phone className="w-3.5 h-3.5 animate-pulse" />
            <span>Call: (843) 938-7377</span>
          </a>
          <a
            href="sms:8439387377"
            className="inline-flex items-center gap-1.5 bg-stone-900 hover:bg-black text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm transition-transform hover:scale-105"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Text Now</span>
          </a>
        </div>
      </div>

      <FormWizardHeader
        steps={["Event Basics", "Performers & Theme", "Contact & Review"]}
        currentStep={step}
        onStepClick={(s) => {
          if (s < step) setStep(s);
        }}
      />

      {error && (
        <div className="rounded-xl border border-red-500/30 bg-red-50 px-4 py-3 text-xs font-semibold text-red-700 animate-in fade-in duration-200">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* STEP 1: EVENT BASICS */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="city">
                  Event City <span className="text-[#5C0005]">*</span>
                </label>
                <select
                  id="city"
                  name="city"
                  className={inputClass}
                  value={formData.city}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select your city
                  </option>
                  {cities.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.name}
                    </option>
                  ))}
                  <option value="other">Other / not listed yet</option>
                </select>
              </div>
              <div>
                <label className={labelClass} htmlFor="eventType">
                  Event Type
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  className={inputClass}
                  value={formData.eventType}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select an event type
                  </option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              <div>
                <label className={labelClass} htmlFor="eventDate">
                  Event Date <span className="text-[#5C0005]">*</span>
                </label>
                <input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  className={inputClass}
                  value={dateValue}
                  onChange={(e) => {
                    setDateValue(e.target.value);
                    checkTiming(e.target.value, timeValue);
                  }}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="eventTime">
                  Start Time
                </label>
                <input
                  id="eventTime"
                  name="eventTime"
                  type="time"
                  className={inputClass}
                  value={timeValue}
                  onChange={(e) => {
                    setTimeValue(e.target.value);
                    checkTiming(dateValue, e.target.value);
                  }}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="guestCount">
                  Guest Count
                </label>
                <input
                  id="guestCount"
                  name="guestCount"
                  type="number"
                  min={1}
                  className={inputClass}
                  value={formData.guestCount}
                  onChange={handleChange}
                  placeholder="8"
                />
              </div>
            </div>

            {/* Quick Event Type Selector Badges */}
            <div>
              <label className="mb-2 block font-body text-xs font-bold uppercase tracking-widest text-white/60">
                Popular Event Categories
              </label>
              <div className="flex flex-wrap gap-2">
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
                          ? "border-[#5C0005] bg-[#5C0005] text-white shadow-sm"
                          : "border-white/10 bg-black text-white/80 hover:border-[#5C0005]/60"
                      }`}
                    >
                      {s.title}
                    </button>
                  );
                })}
              </div>
            </div>

            {isLastMinute && dateValue && (
              <div className="flex items-start gap-3 border border-[#5C0005]/40 bg-[#5C0005]/10 p-4 rounded-xl">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#5C0005] animate-pulse" />
                <p className="font-body text-xs leading-relaxed text-white/90 font-medium">
                  This date is less than 24 hours away, so online deposit booking
                  isn&rsquo;t available. You can continue submitting this request, or{" "}
                  <a href="tel:8439387377" className="text-[#5C0005] font-bold underline">
                    call (843) 938-7377
                  </a>{" "}
                  now for same-day VIP priority.
                </p>
              </div>
            )}

            <div className="pt-2">
              <button
                type="button"
                onClick={handleNextToStep2}
                className="flex w-full items-center justify-center gap-2 bg-[#5C0005] px-8 py-4 font-body text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-[1.01] hover:bg-[#5a0105] shadow-md cursor-pointer"
              >
                <span>Next: Performers &amp; Theme</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: PERFORMERS & THEME */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div>
              <label className={labelClass} htmlFor="costume">
                Outfit Preference
              </label>
              <select
                id="costume"
                name="costume"
                className={inputClass}
                value={formData.costume}
                onChange={handleChange}
              >
                <option value="">No preference</option>
                {costumes.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className={labelClass}>Number of Dancers (2 minimum)</label>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setDancers((d) => Math.max(2, d - 1))}
                  className="flex h-11 w-11 items-center justify-center border border-white/10 bg-black text-white transition-all hover:border-[#5C0005] hover:bg-[#5C0005] hover:text-white rounded-lg shadow-sm"
                  aria-label="Decrease dancer count"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center font-display text-2xl font-bold text-white">
                  {dancers}
                </span>
                <button
                  type="button"
                  onClick={() => setDancers((d) => d + 1)}
                  className="flex h-11 w-11 items-center justify-center border border-white/10 bg-black text-white transition-all hover:border-[#5C0005] hover:bg-[#5C0005] hover:text-white rounded-lg shadow-sm"
                  aria-label="Increase dancer count"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div>
              <label className={labelClass}>Add-On Upgrades</label>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {upgrades.map((u) => {
                  const isChecked = selectedUpgrades.includes(u.slug);
                  return (
                    <label
                      key={u.slug}
                      className={`flex items-start gap-3 border px-4 py-3.5 font-body text-xs cursor-pointer rounded-xl transition-all duration-300 ${
                        isChecked
                          ? "border-[#5C0005] bg-[#5C0005]/5 text-white font-semibold shadow-sm"
                          : "border-white/10 bg-black text-white/80 hover:border-[#5C0005]/40"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleUpgrade(u.slug)}
                        className="mt-0.5 h-4 w-4 accent-[#5C0005] cursor-pointer"
                      />
                      <span>
                        <span className="text-sm font-semibold block">{u.label}</span>
                        {u.note && (
                          <span className="mt-0.5 block text-[11px] text-white/60 font-normal">
                            {u.note}
                          </span>
                        )}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => handleBack(1)}
                className="flex w-full sm:w-1/3 items-center justify-center gap-2 border border-black/25 bg-black px-6 py-4 font-body text-sm font-bold uppercase tracking-widest text-white/80 transition-all duration-300 hover:border-black/50 hover:bg-black/5 cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </button>
              <button
                type="button"
                onClick={handleNextToStep3}
                className="flex w-full sm:w-2/3 items-center justify-center gap-2 bg-[#5C0005] px-8 py-4 font-body text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-[1.01] hover:bg-[#5a0105] shadow-md cursor-pointer"
              >
                <span>Next: Contact &amp; Review</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: CONTACT & REVIEW */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="name">
                  Full Name <span className="text-[#5C0005]">*</span>
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
                  Phone <span className="text-[#5C0005]">*</span>
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
                Email <span className="text-[#5C0005]">*</span>
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

            <div>
              <label className={labelClass} htmlFor="message">
                Anything else we should know?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={inputClass}
                value={formData.message}
                onChange={handleChange}
                placeholder="Location details, dancer preferences, special requests"
              />
            </div>

            {/* Booking Summary Box */}
            <div className="rounded-xl border border-white/10 bg-black/[0.03] p-5 font-body text-xs text-white/85">
              <h4 className="mb-2 font-display text-sm font-bold uppercase tracking-wider text-white">
                Booking Summary
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <span className="font-semibold text-white">Event City:</span>{" "}
                  {cities.find((c) => c.slug === formData.city)?.name ||
                    formData.city ||
                    "Not specified"}
                </div>
                <div>
                  <span className="font-semibold text-white">Date &amp; Time:</span>{" "}
                  {dateValue || "TBD"} {timeValue ? `at ${timeValue}` : ""}
                </div>
                <div>
                  <span className="font-semibold text-white">Performers:</span>{" "}
                  {dancers} Dancers
                </div>
                <div>
                  <span className="font-semibold text-white">Outfit Preference:</span>{" "}
                  {costumes.find((c) => c.slug === formData.costume)?.name ||
                    formData.costume ||
                    "No preference"}
                </div>
                {selectedUpgrades.length > 0 && (
                  <div className="sm:col-span-2">
                    <span className="font-semibold text-white">Upgrades:</span>{" "}
                    {selectedUpgrades
                      .map((uSlug) => upgrades.find((u) => u.slug === uSlug)?.label)
                      .filter(Boolean)
                      .join(", ")}
                  </div>
                )}
              </div>
            </div>

            {dateValue &&
              (isLastMinute ? (
                <div className="flex items-start gap-3 border border-[#5C0005]/30 bg-[#5C0005]/5 p-4 rounded-xl">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#5C0005]" />
                  <p className="font-body text-xs leading-relaxed text-white/80 font-medium">
                    This date is less than 24 hours away, so online deposit booking
                    isn&rsquo;t available. Submit this form, then{" "}
                    <a href="tel:8439387377" className="text-[#5C0005] font-bold underline">
                      call (843) 938-7377
                    </a>{" "}
                    or{" "}
                    <a href="sms:8439387377" className="text-[#5C0005] font-bold underline">
                      text us
                    </a>{" "}
                    directly for same-day booking.
                  </p>
                </div>
              ) : (
                <div className="flex items-start gap-3 border border-white/10 bg-[#f7f7f9] p-4 rounded-xl">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#5C0005]" />
                  <p className="font-body text-xs leading-relaxed text-white/80 font-medium">
                    A {DEPOSIT_AMOUNT} deposit secures bookings made 24+ hours in
                    advance. Submit this request and your booking specialist will
                    follow up to collect the deposit securely.
                  </p>
                </div>
              ))}

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => handleBack(2)}
                className="flex w-full sm:w-1/3 items-center justify-center gap-2 border border-black/25 bg-black px-6 py-4 font-body text-sm font-bold uppercase tracking-widest text-white/80 transition-all duration-300 hover:border-black/50 hover:bg-black/5 cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </button>
              <button type="submit" className={`${submitButtonClass} w-full sm:w-2/3`}>
                {isLastMinute ? "SEND REQUEST" : "REQUEST BOOKING"}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
