"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, Upload } from "lucide-react";
import { labelClass, inputClass, submitButtonClass } from "@/components/ui/formStyles";

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
          className={`flex-1 cursor-pointer rounded-xl border px-4 py-3 text-center font-body text-xs font-medium transition-colors ${
            value === opt
              ? "border-velvet-pink bg-velvet-pink/10 text-velvet-pink"
              : "border-white/15 text-white/60 hover:border-white/30"
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
}: {
  id: string;
  name: string;
  label: string;
  hint: string;
}) {
  const [fileName, setFileName] = useState<string | null>(null);
  return (
    <div>
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
      <label
        htmlFor={id}
        className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-white/20 bg-white/5 px-4 py-4 font-body text-xs text-white/60 transition-colors hover:border-velvet-pink/40"
      >
        <Upload className="h-4 w-4 shrink-0 text-velvet-pink" />
        <span className="flex-1 truncate">{fileName || hint}</span>
      </label>
      <input
        id={id}
        name={name}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
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
  const [priorExperience, setPriorExperience] = useState<"yes" | "no" | "">("");
  const [transportation, setTransportation] = useState<"yes" | "no" | "">("");
  const [comfortablePhotos, setComfortablePhotos] = useState<"yes" | "no" | "">("");
  const [days, setDays] = useState<string[]>([]);
  const [timeBlocks, setTimeBlocks] = useState<string[]>([]);

  const toggle = (list: string[], setList: (v: string[]) => void, value: string) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-velvet-pink/30 bg-white/5 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-velvet-pink" />
        <h3 className="mt-4 font-display text-xl text-white">
          Application received.
        </h3>
        <p className="mt-2 font-body text-sm text-white/60">
          Our team reviews every application and will reach out if it looks
          like a fit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Full Name
          </label>
          <input id="name" name="name" required className={inputClass} placeholder="Jane Doe" />
        </div>
        <div>
          <label className={labelClass} htmlFor="age">
            Age
          </label>
          <input id="age" name="age" type="number" min={18} required className={inputClass} placeholder="21" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required className={inputClass} placeholder="(843) 000-0000" />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClass} placeholder="you@example.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <label className={labelClass} htmlFor="hairColor">
            Hair Color
          </label>
          <select id="hairColor" name="hairColor" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select
            </option>
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
          <select id="eyeColor" name="eyeColor" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select
            </option>
            {["Blue", "Green", "Brown", "Hazel", "Other"].map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="height">
            Height
          </label>
          <input id="height" name="height" required className={inputClass} placeholder="5'6&quot;" />
        </div>
        <div>
          <label className={labelClass} htmlFor="weight">
            Weight
          </label>
          <input id="weight" name="weight" required className={inputClass} placeholder="130 lbs" />
        </div>
      </div>
      <p className="-mt-3 font-body text-[11px] text-white/40">
        All body types are welcome — this just helps us match you with your ideal clients.
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="applyCity">
            City &amp; State You&rsquo;re Applying to Work In
          </label>
          <input
            id="applyCity"
            name="applyCity"
            required
            className={inputClass}
            placeholder="Charleston, SC"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="hearAbout">
            How Did You Hear About Us?
          </label>
          <select id="hearAbout" name="hearAbout" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select
            </option>
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
        <input id="instagram" name="instagram" className={inputClass} placeholder="@yourhandle" />
      </div>

      <Fieldset legend="Have you worked as an adult entertainer before?">
        <YesNo name="priorExperience" value={priorExperience} onChange={setPriorExperience} />
        {priorExperience === "yes" && (
          <input
            name="priorExperienceDetails"
            className={inputClass}
            placeholder="Where, or through what agency?"
          />
        )}
      </Fieldset>

      <div className="space-y-4 rounded-2xl border border-white/10 bg-black/30 p-5">
        <p className="font-body text-xs text-white/50">
          Photos are required to apply. No filters on the headshot; no
          nudity in the body photos.
        </p>
        <FileField id="headshot" name="headshot" label="Selfie / Headshot (no filters)" hint="Upload a clear, unfiltered photo" />
        <FileField id="bodyFront" name="bodyFront" label="Full Body — Front (no nudity)" hint="Upload a full-body front photo" />
        <FileField id="bodyBack" name="bodyBack" label="Full Body — Back (no nudity)" hint="Upload a full-body back photo" />
      </div>

      <Fieldset legend="Do you have reliable transportation?">
        <YesNo name="transportation" value={transportation} onChange={setTransportation} />
      </Fieldset>

      <Fieldset legend="What days are you available to accept bookings?">
        <div className="flex flex-wrap gap-2">
          {DAYS.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => toggle(days, setDays, d)}
              className={`rounded-full border px-4 py-2 font-body text-xs transition-colors ${
                days.includes(d)
                  ? "border-velvet-pink bg-velvet-pink/10 text-velvet-pink"
                  : "border-white/15 text-white/60 hover:border-white/30"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </Fieldset>

      <Fieldset legend="What times are you generally available?">
        <div className="flex flex-wrap gap-2">
          {TIME_BLOCKS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => toggle(timeBlocks, setTimeBlocks, t)}
              className={`rounded-full border px-4 py-2 font-body text-xs transition-colors ${
                timeBlocks.includes(t)
                  ? "border-velvet-pink bg-velvet-pink/10 text-velvet-pink"
                  : "border-white/15 text-white/60 hover:border-white/30"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </Fieldset>

      <Fieldset legend="Are you comfortable having your photos posted on our website?">
        <YesNo name="comfortablePhotos" value={comfortablePhotos} onChange={setComfortablePhotos} />
      </Fieldset>

      <div>
        <label className={labelClass} htmlFor="startDate">
          When Can You Start?
        </label>
        <input id="startDate" name="startDate" type="date" className={inputClass} />
      </div>

      <label className="flex items-start gap-3 font-body text-xs text-white/60">
        <input
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 rounded border-white/30 bg-white/5 accent-velvet-pink"
        />
        I confirm that I am 18 years of age or older.
      </label>

      <button type="submit" className={submitButtonClass}>
        SUBMIT APPLICATION
      </button>
    </form>
  );
}
