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
    <div className="border border-black/10 bg-white p-6 sm:p-10 shadow-sm">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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

      <div className="mt-6">
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

      <div className="mt-8">
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

      <button
        type="button"
        onClick={handleContinue}
        className="tracking-caps mt-8 w-full bg-[#740107] px-8 py-4 font-body text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-[1.01] hover:bg-[#5a0105] border border-[#740107] shadow-md cursor-pointer"
      >
        CONTINUE TO BOOKING
      </button>
    </div>
  );
}

