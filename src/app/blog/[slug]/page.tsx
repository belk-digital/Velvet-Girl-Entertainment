import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import CtaSection from "@/components/home/CtaSection";
import VelvetCurtains from "@/components/gallery/VelvetCurtains";
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

const blogImages: Record<string, string> = {
  "ultimate-charleston-bachelor-party-guide": "/gallery images/BACHELOR PARTY_GUYS NIGHT.webp",
  "ultimate-myrtle-beach-bachelor-party-guide": "/gallery images/MYRTLE BEACH.webp",
  "how-to-plan-the-perfect-bachelor-party": "/gallery images/GAME DAY GIRLS.webp",
  "real-photos-no-bait-and-switch": "/gallery images/Velvet girl.webp",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const bgImg = blogImages[post.slug] || "/gallery images/Velvet girl.webp";

  return (
    <>
      <PageHero
        eyebrow={`${formatDate(post.publishedAt)} · ${post.readTime}`}
        title={post.title}
        subtitle={post.excerpt}
        bgImage={bgImg}
      />

      <div className="px-6 py-20 sm:py-28 bg-[#FAF7F2]">
        <Reveal className="mx-auto max-w-3xl space-y-12 bg-white p-8 sm:p-12 rounded-2xl border border-stone-200/80 shadow-xl">
          {post.sections.map((section, i) => (
            <div key={i} className="space-y-6">
              {section.heading && (
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 border-l-4 border-[#740107] pl-5 py-1 uppercase tracking-wide">
                  {section.heading}
                </h2>
              )}
              <div className="space-y-6">
                {section.body.map((paragraph, j) => (
                  <p
                    key={j}
                    className="font-body text-base sm:text-lg leading-relaxed text-stone-700 font-normal"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>

      <VelvetCurtains variant="bottom" />
      <CtaSection />
    </>
  );
}
