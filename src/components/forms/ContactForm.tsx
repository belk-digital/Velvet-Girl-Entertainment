"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { labelClass, inputClass, submitButtonClass } from "@/components/ui/formStyles";
import { services } from "@/data/services";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-velvet-pink/30 bg-white/5 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-velvet-pink" />
        <h3 className="mt-4 font-display text-xl text-white">
          Thanks — we got it.
        </h3>
        <p className="mt-2 font-body text-sm text-white/60">
          A booking specialist will reach out shortly to confirm details.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Full Name
          </label>
          <input id="name" name="name" required className={inputClass} placeholder="Jane Doe" />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required className={inputClass} placeholder="(843) 000-0000" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClass} placeholder="you@example.com" />
        </div>
        <div>
          <label className={labelClass} htmlFor="city">
            City
          </label>
          <input id="city" name="city" required className={inputClass} placeholder="Charleston, SC" />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="eventType">
          Event Type
        </label>
        <select id="eventType" name="eventType" className={inputClass} defaultValue="">
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

      <div>
        <label className={labelClass} htmlFor="message">
          Tell us about your event
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={inputClass}
          placeholder="Date, guest count, location, anything else we should know"
        />
      </div>

      <button type="submit" className={submitButtonClass}>
        SEND MESSAGE
      </button>
    </form>
  );
}
