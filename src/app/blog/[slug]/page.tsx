import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import CtaSection from "@/components/home/CtaSection";
import { blogPosts, getBlogPostBySlug } from "@/data/blogPosts";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

const siteUrl = "https://velvetgirlentertainment.com";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  const title = `${post.title} | Velvet Girl Entertainment`;
  return {
    title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.excerpt,
    },
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
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${postUrl}/#article`,
        headline: post.title,
        description: post.excerpt,
        image: `${siteUrl}${encodeURI(bgImg)}`,
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        url: postUrl,
        mainEntityOfPage: postUrl,
        author: {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
          name: "Velvet Girl Entertainment",
        },
        publisher: {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
          name: "Velvet Girl Entertainment",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow={`${formatDate(post.publishedAt)} · ${post.readTime}`}
        title={post.title}
        subtitle={post.excerpt}
        bgImage={bgImg}
      />

      <div className="px-6 py-20 sm:py-28 bg-black">
        <Reveal className="mx-auto max-w-3xl space-y-12 bg-black p-8 sm:p-12 rounded-2xl border border-white/10 shadow-xl">
          {post.sections.map((section, i) => (
            <div key={i} className="space-y-6">
              {section.heading && (
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white border-l-4 border-[#4C0C0A] pl-5 py-1 uppercase tracking-wide">
                  {section.heading}
                </h2>
              )}
              <div className="space-y-6">
                {section.body.map((paragraph, j) => (
                  <p
                    key={j}
                    className="font-body text-base sm:text-lg leading-relaxed text-stone-300 font-normal"
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
