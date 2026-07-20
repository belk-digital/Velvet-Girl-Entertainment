import Link from "next/link";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import { homepageFaqs } from "@/data/faqs";

export default function FaqSection() {
  return (
    <Section
      eyebrow="FAQ"
      title="Frequently asked questions"
      className="border-t border-white/10 bg-white/[0.02]"
    >
      <Reveal className="mx-auto max-w-3xl">
        <Accordion items={homepageFaqs} />
        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="tracking-caps font-body text-xs font-semibold text-velvet-pink hover:underline"
          >
            VIEW ALL FAQS
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
