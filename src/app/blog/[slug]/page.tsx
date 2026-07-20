import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import CtaSection from "@/components/home/CtaSection";
import { blogPosts, getBlogPostBySlug } from "@/data/blogPosts";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Velvet Girl Entertainment`,
    description: post.excerpt,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <div className="relative overflow-hidden border-b border-white/10 bg-black px-6 py-20 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-velvet-deep/60 via-black to-black" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-2 font-body text-xs text-white/40">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(post.publishedAt)}
            <span>&middot;</span>
            {post.readTime}
          </div>
          <h1 className="mt-4 font-display text-3xl leading-tight text-white sm:text-4xl">
            {post.title}
          </h1>
        </div>
      </div>

      <div className="px-6 py-16 sm:py-20">
        <Reveal className="mx-auto max-w-2xl space-y-8">
          {post.sections.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 className="font-display text-xl text-white">
                  {section.heading}
                </h2>
              )}
              <div className="mt-3 space-y-4">
                {section.body.map((paragraph, j) => (
                  <p
                    key={j}
                    className="font-body text-sm leading-relaxed text-white/70"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>

      <CtaSection />
    </>
  );
}
