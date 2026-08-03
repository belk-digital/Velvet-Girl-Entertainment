import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import CtaSection from "@/components/home/CtaSection";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Blog | Velvet Girl Entertainment",
  description:
    "Bachelor party planning guides, city guides, and tips for booking entertainment for your next celebration.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Velvet Girl Entertainment",
    description:
      "Bachelor party planning guides, city guides, and tips for booking entertainment for your next celebration.",
    url: "/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Velvet Girl Entertainment",
    description:
      "Bachelor party planning guides, city guides, and tips for booking entertainment for your next celebration.",
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const blogImages: Record<string, string> = {
  "ultimate-charleston-bachelor-party-guide": "/gallery images/BACHELOR PARTY_GUYS NIGHT.webp",
  "ultimate-myrtle-beach-bachelor-party-guide": "/gallery images/MYRTLE BEACH.webp",
  "how-to-plan-the-perfect-bachelor-party": "/gallery images/GAME DAY GIRLS.webp",
  "real-photos-no-bait-and-switch": "/gallery images/Velvet girl.webp",
};

export default function BlogIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="BLOG"
        title="Planning Guides & Tips"
        subtitle="Bachelor party planning guides, city guides, and everything else you need to plan an unforgettable celebration."
        bgImage="/gallery images/BREAKFAST WITH BABES.webp"
      />
      <div className="px-6 py-20 sm:py-28 bg-[#FAF7F2]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2">
          {blogPosts.map((post, i) => {
            const imgUrl = blogImages[post.slug] || "/gallery images/Velvet girl.webp";
            return (
              <Reveal key={post.slug} delay={(i % 2) * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-stone-200/80 bg-white transition-all duration-500 hover:border-[#740107]/60 hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <div>
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-900">
                      <Image
                        src={encodeURI(imgUrl)}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white">
                        <Calendar className="h-4 w-4 text-[#740107]" />
                        <span className="font-body text-xs font-semibold uppercase tracking-wider text-white">
                          {formatDate(post.publishedAt)} &middot; {post.readTime}
                        </span>
                      </div>
                    </div>
                    <div className="p-8">
                      <h2 className="font-display text-xl font-bold uppercase tracking-wide text-stone-900 group-hover:text-[#740107] transition-colors">
                        {post.title}
                      </h2>
                      <p className="mt-3 font-body text-sm text-stone-600 leading-relaxed font-medium">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="mx-8 mb-8 pt-4 border-t border-stone-200/80 flex items-center justify-between font-body text-xs font-bold uppercase tracking-widest text-[#740107] group-hover:translate-x-1 transition-transform">
                    <span>Read article</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
      <CtaSection />
    </>
  );
}
