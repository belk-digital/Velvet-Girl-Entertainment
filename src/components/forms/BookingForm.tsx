"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Minus, MessageCircle, Phone, Plus, ShieldCheck } from "lucide-react";
import { labelClass, inputClass, submitButtonClass } from "@/components/ui/formStyles";
import { services } from "@/data/services";
import { packageThemes, costumes, upgrades } from "@/data/packages";
import { cities } from "@/data/cities";

const bookableThemes = packageThemes.filter((t) => !t.comingSoon);
const DEPOSIT_AMOUNT = "$75";

// This form currently captures the request client-side only (no backend
// wired up yet). Wire to a real API route + payment processor + email
// service once credentials are available — see BookingForm submit handler.
export default function BookingForm() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [isLastMinute, setIsLastMinute] = useState(false);
  const [dancers, setDancers] = useState(
    Math.max(2, Number(searchParams.get("dancers")) || 2)
  );
  const [selectedUpgrades, setSelectedUpgrades] = useState<string[]>(
    searchParams.get("upgrades")?.split(",").filter(Boolean) || []
  );

  const initialTheme = searchParams.get("theme") || "";
  const initialCostume = searchParams.get("costume") || "";

  const toggleUpgrade = (slug: string) => {
    setSelectedUpgrades((prev) =>
      prev.includes(slug) ? prev.filter((u) => u !== slug) : [...prev, slug]
    );
  };

  const checkTiming = (dateValue: string, timeValue: string) => {
    if (!dateValue) {
      setIsLastMinute(false);
      return;
    }
    const eventDateTime = new Date(`${dateValue}T${timeValue || "12:00"}`);
    const hoursUntilEvent =
      (eventDateTime.getTime() - Date.now()) / (1000 * 60 * 60);
    setIsLastMinute(hoursUntilEvent < 24);
  };

  const [dateValue, setDateValue] = useState("");
  const [timeValue, setTimeValue] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-velvet-pink/30 bg-white/5 p-8 text-center">
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
                href="tel:+18439387737"
                className="tracking-caps flex items-center gap-2 rounded-full bg-gradient-to-r from-velvet-pink-hot to-velvet-pink px-6 py-3 font-body text-xs font-semibold text-white"
              >
                <Phone className="h-4 w-4" />
                CALL NOW
              </a>
              <a
                href="sms:+18439387737"
                className="tracking-caps flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-body text-xs font-semibold text-white/85"
              >
                <MessageCircle className="h-4 w-4" />
                TEXT US
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
            Event City
          </label>
          <select id="city" name="city" className={inputClass} defaultValue="">
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
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div>
          <label className={labelClass} htmlFor="eventDate">
            Event Date
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
          <input id="guestCount" name="guestCount" type="number" min={1} className={inputClass} placeholder="8" />
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

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="theme">
            Party Theme
          </label>
          <select id="theme" name="theme" className={inputClass} defaultValue={initialTheme}>
            <option value="" disabled>
              Select a theme
            </option>
            {bookableThemes.map((t) => (
              <option key={t.slug} value={t.slug}>
                {t.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="costume">
            Costume
          </label>
          <select id="costume" name="costume" className={inputClass} defaultValue={initialCostume}>
            <option value="">No preference</option>
            {costumes.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Number of Dancers (2 minimum)</label>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setDancers((d) => Math.max(2, d - 1))}
            className="flex h-11 w-11 items-center justify-center border border-black/20 bg-white text-black transition-all hover:border-[#740107] hover:bg-[#740107] hover:text-white"
            aria-label="Decrease dancer count"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-10 text-center font-display text-2xl font-bold text-black">
            {dancers}
          </span>
          <button
            type="button"
            onClick={() => setDancers((d) => d + 1)}
            className="flex h-11 w-11 items-center justify-center border border-black/20 bg-white text-black transition-all hover:border-[#740107] hover:bg-[#740107] hover:text-white"
            aria-label="Increase dancer count"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div>
        <label className={labelClass}>Upgrades</label>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {upgrades.map((u) => {
            const isChecked = selectedUpgrades.includes(u.slug);
            return (
              <label
                key={u.slug}
                className={`flex items-start gap-3 border px-4 py-3.5 font-body text-xs cursor-pointer transition-all duration-300 ${
                  isChecked
                    ? "border-[#740107] bg-[#740107]/5 text-black font-semibold"
                    : "border-black/15 bg-white text-black/80 hover:border-[#740107]/40"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleUpgrade(u.slug)}
                  className="mt-0.5 h-4 w-4 accent-[#740107] cursor-pointer"
                />
                <span>
                  <span className="text-sm font-semibold block">{u.label}</span>
                  {u.note && (
                    <span className="mt-0.5 block text-[11px] text-black/60 font-normal">
                      {u.note}
                    </span>
                  )}
                </span>
              </label>
            );
          })}
        </div>
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
          placeholder="Location details, dancer preferences, special requests"
        />
      </div>

      {dateValue &&
        (isLastMinute ? (
          <div className="flex items-start gap-3 border border-[#740107]/30 bg-[#740107]/5 p-4">
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#740107]" />
            <p className="font-body text-xs leading-relaxed text-black/80 font-medium">
              This date is less than 24 hours away, so online deposit booking
              isn&rsquo;t available. Submit this form, then{" "}
              <a href="tel:+18439387737" className="text-[#740107] font-bold underline">
                call
              </a>{" "}
              or{" "}
              <a href="sms:+18439387737" className="text-[#740107] font-bold underline">
                text
              </a>{" "}
              us directly for same-day booking.
            </p>
          </div>
        ) : (
          <div className="flex items-start gap-3 border border-black/15 bg-[#f7f7f9] p-4">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#740107]" />
            <p className="font-body text-xs leading-relaxed text-black/80 font-medium">
              A {DEPOSIT_AMOUNT} deposit secures bookings made 24+ hours in
              advance. Submit this request and your booking specialist will
              follow up to collect the deposit securely.
            </p>
          </div>
        ))}


      <button type="submit" className={submitButtonClass}>
        {isLastMinute ? "SEND REQUEST" : "REQUEST BOOKING"}
      </button>
    </form>
  );
}
