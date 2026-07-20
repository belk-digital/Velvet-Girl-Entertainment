"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Minus, Plus } from "lucide-react";
import { labelClass, inputClass } from "@/components/ui/formStyles";
import { packageThemes, costumes, upgrades } from "@/data/packages";

const bookableThemes = packageThemes.filter((t) => !t.comingSoon);

export default function PackageBuilder() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [theme, setTheme] = useState(
    searchParams.get("theme") || bookableThemes[0]?.slug || ""
  );
  const [costume, setCostume] = useState(searchParams.get("costume") || "");
  const [dancers, setDancers] = useState(
    Math.max(2, Number(searchParams.get("dancers")) || 2)
  );
  const [selectedUpgrades, setSelectedUpgrades] = useState<string[]>([]);

  const toggleUpgrade = (slug: string) => {
    setSelectedUpgrades((prev) =>
      prev.includes(slug) ? prev.filter((u) => u !== slug) : [...prev, slug]
    );
  };

  const handleContinue = () => {
    const params = new URLSearchParams();
    if (theme) params.set("theme", theme);
    if (costume) params.set("costume", costume);
    params.set("dancers", String(dancers));
    if (selectedUpgrades.length) params.set("upgrades", selectedUpgrades.join(","));
    router.push(`/book-now?${params.toString()}`);
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="builder-theme">
            Theme
          </label>
          <select
            id="builder-theme"
            className={inputClass}
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            {bookableThemes.map((t) => (
              <option key={t.slug} value={t.slug}>
                {t.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="builder-costume">
            Costume
          </label>
          <select
            id="builder-costume"
            className={inputClass}
            value={costume}
            onChange={(e) => setCostume(e.target.value)}
          >
            <option value="">No preference</option>
            {costumes.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label className={labelClass}>Number of Dancers (2 minimum)</label>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setDancers((d) => Math.max(2, d - 1))}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-velvet-pink/50"
            aria-label="Decrease dancer count"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-8 text-center font-display text-xl text-white">
            {dancers}
          </span>
          <button
            type="button"
            onClick={() => setDancers((d) => d + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-velvet-pink/50"
            aria-label="Increase dancer count"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-6">
        <label className={labelClass}>Upgrades</label>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {upgrades.map((u) => (
            <label
              key={u.slug}
              className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-body text-xs text-white/75"
            >
              <input
                type="checkbox"
                checked={selectedUpgrades.includes(u.slug)}
                onChange={() => toggleUpgrade(u.slug)}
                className="mt-0.5 h-4 w-4 rounded border-white/30 bg-white/5 accent-velvet-pink"
              />
              <span>
                {u.label}
                {u.note && (
                  <span className="mt-0.5 block text-[10px] text-white/45">
                    {u.note}
                  </span>
                )}
              </span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={handleContinue}
        className="tracking-caps mt-7 w-full rounded-full bg-gradient-to-r from-velvet-pink-hot to-velvet-pink px-8 py-4 font-body text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.01]"
      >
        CONTINUE TO BOOKING
      </button>
    </div>
  );
}
