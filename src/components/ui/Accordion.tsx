import { ChevronDown } from "lucide-react";
import type { Faq } from "@/data/faqs";

export default function Accordion({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-white/10 border-t border-white/10">
      {items.map((item, i) => (
        <details key={i} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-body text-sm text-white sm:text-base [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <ChevronDown className="h-4 w-4 shrink-0 text-velvet-pink transition-transform duration-300 group-open:rotate-180" />
          </summary>
          <p className="mt-3 font-body text-sm leading-relaxed text-white/60">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
