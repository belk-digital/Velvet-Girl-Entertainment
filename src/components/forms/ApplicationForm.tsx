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
          className={`flex-1 cursor-pointer border px-4 py-3 text-center font-body text-xs uppercase tracking-wider transition-all duration-300 ${
            value === opt
              ? "border-[#740107] bg-[#740107] text-white font-bold shadow-sm"
              : "border-black/20 bg-white text-black/80 hover:border-[#740107] font-semibold"
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
        className="flex cursor-pointer items-center gap-3 border border-dashed border-black/25 bg-white px-4 py-4 font-body text-xs text-black/70 transition-colors hover:border-[#740107]"
      >
        <Upload className="h-4 w-4 shrink-0 text-[#740107]" />
        <span className="flex-1 truncate font-medium">{fileName || hint}</span>
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
      <div className="border border-[#740107]/30 bg-[#740107]/5 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-[#740107]" />
        <h3 className="mt-4 font-display text-2xl font-bold text-black">
          Application received.
        </h3>
        <p className="mt-2 font-body text-sm text-black/70 font-medium">
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
      <p className="-mt-3 font-body text-[11px] text-black/50">
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

      <div className="space-y-4 border border-black/10 bg-[#f7f7f9] p-6">
        <p className="font-body text-xs text-black/70 font-medium">
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
              className={`border px-4 py-2 font-body text-xs uppercase tracking-wider transition-all duration-300 ${
                days.includes(d)
                  ? "border-[#740107] bg-[#740107] text-white font-bold shadow-sm"
                  : "border-black/20 bg-white text-black/80 hover:border-[#740107] font-semibold"
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
              className={`border px-4 py-2 font-body text-xs uppercase tracking-wider transition-all duration-300 ${
                timeBlocks.includes(t)
                  ? "border-[#740107] bg-[#740107] text-white font-bold shadow-sm"
                  : "border-black/20 bg-white text-black/80 hover:border-[#740107] font-semibold"
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

      <label className="flex items-start gap-3 font-body text-xs text-black/80 font-medium cursor-pointer">
        <input
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 accent-[#740107] cursor-pointer"
        />
        I confirm that I am 18 years of age or older.
      </label>


      <button type="submit" className={submitButtonClass}>
        SUBMIT APPLICATION
      </button>
    </form>
  );
}
