import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Blog | Velvet Girl Entertainment",
  description:
    "Bachelor party planning guides, city guides, and tips for booking entertainment for your next celebration.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="BLOG"
        title="Planning Guides & Tips"
        subtitle="Bachelor party planning guides, city guides, and everything else you need to plan an unforgettable celebration."
      />
      <div className="px-6 py-20 sm:py-28 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 2) * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col justify-between border border-black/10 bg-white p-8 transition-all duration-300 hover:border-[#740107]/60 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-wider text-[#740107]">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.publishedAt)}</span>
                    <span>&middot;</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-bold text-black group-hover:text-[#740107] transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 font-body text-sm text-black/70 leading-relaxed font-medium">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-black/10 flex items-center justify-between font-body text-xs font-bold uppercase tracking-widest text-[#740107] group-hover:translate-x-1 transition-transform">
                  <span>Read article</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}

