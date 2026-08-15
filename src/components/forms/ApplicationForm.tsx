"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, Upload, ArrowRight, ArrowLeft } from "lucide-react";
import { labelClass, inputClass, submitButtonClass } from "@/components/ui/formStyles";
import FormWizardHeader from "@/components/ui/FormWizardHeader";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const TIME_BLOCKS = ["Morning", "Afternoon", "Evening", "Late Night"];
const HEAR_ABOUT_OPTIONS = [
  "Instagram",
  "TikTok",
  "Google Search",
  "Friend / Referral",
  "Other",
];

function YesNo({
  name,
  value,
  onChange,
}: {
  name: string;
  value: "yes" | "no" | "";
  onChange: (v: "yes" | "no") => void;
}) {
  return (
    <div className="flex gap-3">
      {(["yes", "no"] as const).map((opt) => (
        <label
          key={opt}
          className={`flex-1 cursor-pointer border px-4 py-3 text-center font-body text-xs uppercase tracking-wider transition-all duration-300 rounded-xl ${
            value === opt
              ? "border-[#380605] bg-[#380605] text-white font-bold shadow-sm"
              : "border-white/10 bg-black text-white/80 hover:border-[#380605] font-semibold"
          }`}
        >
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={() => onChange(opt)}
            className="sr-only"
          />
          {opt === "yes" ? "Yes" : "No"}
        </label>
      ))}
    </div>
  );
}

function FileField({
  id,
  name,
  label,
  hint,
  onFileSelected,
}: {
  id: string;
  name: string;
  label: string;
  hint: string;
  onFileSelected: (file: File | null) => void;
}) {
  const [fileName, setFileName] = useState<string | null>(null);
  return (
    <div>
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
      <label
        htmlFor={id}
        className="flex cursor-pointer items-center gap-3 border border-dashed border-black/25 bg-black px-4 py-4 font-body text-xs text-white/70 transition-colors hover:border-[#380605] rounded-xl"
      >
        <Upload className="h-4 w-4 shrink-0 text-[#380605]" />
        <span className="flex-1 truncate font-medium">{fileName || hint}</span>
      </label>
      <input
        id={id}
        name={name}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={(e) => {
          const file = e.target.files?.[0] ?? null;
          setFileName(file?.name ?? null);
          onFileSelected(file);
        }}
      />
    </div>
  );
}

function Fieldset({ legend, children }: { legend: string; children: ReactNode }) {
  return (
    <fieldset className="space-y-3">
      <legend className={labelClass}>{legend}</legend>
      {children}
    </fieldset>
  );
}

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");

  const [priorExperience, setPriorExperience] = useState<"yes" | "no" | "">("");
  const [transportation, setTransportation] = useState<"yes" | "no" | "">("");
  const [comfortablePhotos, setComfortablePhotos] = useState<"yes" | "no" | "">("");
  const [days, setDays] = useState<string[]>([]);
  const [timeBlocks, setTimeBlocks] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [headshotFile, setHeadshotFile] = useState<File | null>(null);
  const [fullBodyFile, setFullBodyFile] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    hairColor: "",
    eyeColor: "",
    height: "",
    weight: "",
    applyCity: "",
    hearAbout: "",
    instagram: "",
    experienceDetails: "",
    startDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const toggle = (list: string[], setList: (v: string[]) => void, value: string) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const handleNextToStep2 = () => {
    if (
      !formData.name.trim() ||
      !formData.age.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim()
    ) {
      setError("Please complete your name, age, phone, and email to continue.");
      return;
    }
    setError("");
    setStep(2);
  };

  const handleNextToStep3 = () => {
    if (!formData.applyCity.trim()) {
      setError("Please enter the City & State you are applying to work in.");
      return;
    }
    setError("");
    setStep(3);
  };

  const handleBack = (targetStep: number) => {
    setError("");
    setStep(targetStep);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) => payload.append(key, value));
      payload.append("priorExperience", priorExperience);
      payload.append("transportation", transportation);
      payload.append("comfortablePhotos", comfortablePhotos);
      payload.append("days", days.join(", "));
      payload.append("timeBlocks", timeBlocks.join(", "));
      if (headshotFile) payload.append("headshot", headshotFile);
      if (fullBodyFile) payload.append("fullBody", fullBodyFile);

      await fetch("/api/apply", {
        method: "POST",
        body: payload,
      });
    } catch (err) {
      console.error("Failed to submit application:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="border border-[#380605]/30 bg-[#380605]/5 p-8 text-center animate-in fade-in duration-500 rounded-2xl">
        <CheckCircle2 className="mx-auto h-12 w-12 text-[#380605]" />
        <h3 className="mt-4 font-display text-2xl font-bold text-white">
          Application received.
        </h3>
        <p className="mt-2 font-body text-sm text-white/70 font-medium">
          Our team reviews every application and will reach out if it looks
          like a fit.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <FormWizardHeader
        steps={["Personal Profile", "Experience & Location", "Availability & Photos"]}
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
        {/* STEP 1: PERSONAL & PHYSICAL PROFILE */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="name">
                  Full Name <span className="text-[#380605]">*</span>
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
                <label className={labelClass} htmlFor="age">
                  Age <span className="text-[#380605]">*</span>
                </label>
                <input
                  id="age"
                  name="age"
                  type="number"
                  min={18}
                  required
                  className={inputClass}
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="21"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="phone">
                  Phone <span className="text-[#380605]">*</span>
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
              <div>
                <label className={labelClass} htmlFor="email">
                  Email <span className="text-[#380605]">*</span>
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
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
              <div>
                <label className={labelClass} htmlFor="hairColor">
                  Hair Color
                </label>
                <select
                  id="hairColor"
                  name="hairColor"
                  className={inputClass}
                  value={formData.hairColor}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  {["Blonde", "Brunette", "Redhead", "Black", "Other"].map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass} htmlFor="eyeColor">
                  Eye Color
                </label>
                <select
                  id="eyeColor"
                  name="eyeColor"
                  className={inputClass}
                  value={formData.eyeColor}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  {["Blue", "Green", "Brown", "Hazel", "Other"].map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass} htmlFor="height">
                  Height <span className="text-[#380605]">*</span>
                </label>
                <input
                  id="height"
                  name="height"
                  required
                  className={inputClass}
                  value={formData.height}
                  onChange={handleChange}
                  placeholder="5'6&quot;"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="weight">
                  Weight <span className="text-[#380605]">*</span>
                </label>
                <input
                  id="weight"
                  name="weight"
                  required
                  className={inputClass}
                  value={formData.weight}
                  onChange={handleChange}
                  placeholder="130 lbs"
                />
              </div>
            </div>
            <p className="-mt-3 font-body text-[11px] text-white/60 font-medium">
              All body types are welcome — this just helps us match you with your ideal clients.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleNextToStep2}
                className="flex w-full items-center justify-center gap-2 bg-[#380605] px-8 py-4 font-body text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-[1.01] hover:bg-[#5a0105] shadow-md cursor-pointer rounded-xl"
              >
                <span>Next: Experience &amp; Location</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: EXPERIENCE & LOCATION */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="applyCity">
                  City &amp; State Applying For <span className="text-[#380605]">*</span>
                </label>
                <input
                  id="applyCity"
                  name="applyCity"
                  required
                  className={inputClass}
                  value={formData.applyCity}
                  onChange={handleChange}
                  placeholder="Charleston, SC"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="hearAbout">
                  How Did You Hear About Us?
                </label>
                <select
                  id="hearAbout"
                  name="hearAbout"
                  className={inputClass}
                  value={formData.hearAbout}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  {HEAR_ABOUT_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className={labelClass} htmlFor="instagram">
                Instagram or Other Social Media Handle
              </label>
              <input
                id="instagram"
                name="instagram"
                className={inputClass}
                value={formData.instagram}
                onChange={handleChange}
                placeholder="@yourhandle"
              />
            </div>

            <Fieldset legend="Have you worked as an adult entertainer before?">
              <YesNo
                name="priorExperience"
                value={priorExperience}
                onChange={setPriorExperience}
              />
              {priorExperience === "yes" && (
                <input
                  name="experienceDetails"
                  className={`${inputClass} mt-3`}
                  placeholder="Where/how long? (optional)"
                  value={formData.experienceDetails}
                  onChange={handleChange}
                />
              )}
            </Fieldset>

            <Fieldset legend="Do you have reliable transportation?">
              <YesNo
                name="transportation"
                value={transportation}
                onChange={setTransportation}
              />
            </Fieldset>

            <Fieldset legend="Are you comfortable taking promotional photos?">
              <YesNo
                name="comfortablePhotos"
                value={comfortablePhotos}
                onChange={setComfortablePhotos}
              />
            </Fieldset>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => handleBack(1)}
                className="flex w-full sm:w-1/3 items-center justify-center gap-2 border border-black/25 bg-black px-6 py-4 font-body text-sm font-bold uppercase tracking-widest text-white/80 transition-all duration-300 hover:border-black/50 hover:bg-black/5 cursor-pointer rounded-xl"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </button>
              <button
                type="button"
                onClick={handleNextToStep3}
                className="flex w-full sm:w-2/3 items-center justify-center gap-2 bg-[#380605] px-8 py-4 font-body text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-[1.01] hover:bg-[#5a0105] shadow-md cursor-pointer rounded-xl"
              >
                <span>Next: Availability &amp; Photos</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: AVAILABILITY & PHOTOS */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div>
              <label className={labelClass}>
                What days of the week are you available?
              </label>
              <div className="flex flex-wrap gap-2">
                {DAYS.map((d) => {
                  const active = days.includes(d);
                  return (
                    <button
                      key={d}
                      type="button"
                      onClick={() => toggle(days, setDays, d)}
                      className={`border px-4 py-2.5 font-body text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-xl ${
                        active
                          ? "border-[#380605] bg-[#380605] text-white shadow-sm"
                          : "border-white/10 bg-black text-white/80 hover:border-[#380605]"
                      }`}
                    >
                      {d}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className={labelClass}>What time blocks work best for you?</label>
              <div className="flex flex-wrap gap-2">
                {TIME_BLOCKS.map((t) => {
                  const active = timeBlocks.includes(t);
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => toggle(timeBlocks, setTimeBlocks, t)}
                      className={`border px-4 py-2.5 font-body text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-xl ${
                        active
                          ? "border-[#380605] bg-[#380605] text-white shadow-sm"
                          : "border-white/10 bg-black text-white/80 hover:border-[#380605]"
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className={labelClass} htmlFor="startDate">
                When could you start?
              </label>
              <input
                id="startDate"
                name="startDate"
                type="date"
                className={inputClass}
                value={formData.startDate}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FileField
                id="headshot"
                name="headshot"
                label="Recent Headshot (no filters)"
                hint="Choose a file..."
                onFileSelected={setHeadshotFile}
              />
              <FileField
                id="fullBody"
                name="fullBody"
                label="Full-body photo (form-fitting or bikini)"
                hint="Choose a file..."
                onFileSelected={setFullBodyFile}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => handleBack(2)}
                className="flex w-full sm:w-1/3 items-center justify-center gap-2 border border-black/25 bg-black px-6 py-4 font-body text-sm font-bold uppercase tracking-widest text-white/80 transition-all duration-300 hover:border-black/50 hover:bg-black/5 cursor-pointer rounded-xl"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${submitButtonClass} w-full sm:w-2/3 rounded-xl disabled:cursor-not-allowed disabled:opacity-60`}
              >
                {isSubmitting ? "SUBMITTING..." : "SUBMIT APPLICATION"}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
