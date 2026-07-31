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
      <div className="relative border-b border-black/10 bg-[#f7f7f9] px-6 py-20 sm:py-28">

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-widest text-[#740107] bg-[#740107]/10 px-4 py-1.5 rounded-full mb-6">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(post.publishedAt)}</span>
            <span>&middot;</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="font-display text-4xl leading-tight font-bold text-black sm:text-5xl tracking-tight">
            {post.title}
          </h1>
        </div>
      </div>

      <div className="px-6 py-20 sm:py-28 bg-white">
        <Reveal className="mx-auto max-w-3xl space-y-12">
          {post.sections.map((section, i) => (
            <div key={i} className="space-y-6">
              {section.heading && (
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-black border-l-4 border-[#740107] pl-5 py-1">
                  {section.heading}
                </h2>
              )}
              <div className="space-y-6">
                {section.body.map((paragraph, j) => (
                  <p
                    key={j}
                    className="font-body text-base sm:text-lg leading-relaxed text-black/85 font-normal"
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

