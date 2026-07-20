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
      <div className="px-6 py-16 sm:py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 2) * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:border-velvet-pink/40"
              >
                <div className="flex items-center gap-2 font-body text-[11px] text-white/40">
                  <Calendar className="h-3.5 w-3.5" />
                  {formatDate(post.publishedAt)}
                  <span>&middot;</span>
                  {post.readTime}
                </div>
                <h2 className="mt-3 font-display text-xl text-white">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 font-body text-xs text-white/60">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-body text-xs font-semibold text-velvet-pink opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
