import { services } from "@/data/services";
import { packageThemes } from "@/data/packages";
import { stateGroups } from "@/data/cities";
import { blogPosts } from "@/data/blogPosts";

const siteUrl = "https://velvetgirlentertainment.com";

export const revalidate = 86400;

export async function GET() {
  const lines: string[] = [];

  lines.push("# Velvet Girl Entertainment");
  lines.push("");
  lines.push(
    "> Velvet Girl Entertainment books verified, professional entertainers for bachelor parties, birthdays, and private celebrations across the United States. Every performer photo on the site is real and unedited — no stock images, no bait-and-switch. Booking is handled by a 24/7 concierge team by phone, text, or online form, with a deposit confirming each date."
  );
  lines.push("");
  lines.push(
    "Key facts: verified performer roster, real unedited photos guaranteed, phone/text/online booking, deposit secures a date, 24/7 concierge, service area currently spans several U.S. states with new cities added regularly."
  );
  lines.push("");

  lines.push("## Core Pages");
  lines.push(`- [Home](${siteUrl}/): Overview of the agency and booking process.`);
  lines.push(`- [About](${siteUrl}/about): Company background, booking standards, and privacy commitment.`);
  lines.push(`- [Gallery](${siteUrl}/gallery): Real, unedited photos of verified performers, filterable by city.`);
  lines.push(`- [Services](${siteUrl}/services): All event types we book entertainment for.`);
  lines.push(`- [Packages](${siteUrl}/packages): Themed party packages with costumes and upgrades.`);
  lines.push(`- [Cities](${siteUrl}/cities): Areas served, grouped by state.`);
  lines.push(`- [Book Now](${siteUrl}/book-now): Booking request form.`);
  lines.push(`- [Contact](${siteUrl}/contact): Phone, text, email, and contact form.`);
  lines.push(`- [Join Our Team](${siteUrl}/join-team): Performer application page.`);
  lines.push(`- [Blog](${siteUrl}/blog): Guides on planning bachelor parties and private events.`);
  lines.push(`- [FAQ](${siteUrl}/faq): Common questions about booking, pricing, and privacy.`);
  lines.push("");

  lines.push("## Services");
  for (const s of services) {
    lines.push(`- [${s.title}](${siteUrl}/services/${s.slug}): ${s.shortDescription}`);
  }
  lines.push("");

  lines.push("## Packages");
  for (const t of packageThemes) {
    const suffix = t.comingSoon ? " (coming soon)" : "";
    lines.push(`- [${t.name}](${siteUrl}/packages/${t.slug})${suffix}: ${t.shortDescription}`);
  }
  lines.push("");

  lines.push("## Cities Served");
  for (const group of stateGroups) {
    const cityList = group.cities
      .map((c) => `[${c.name}](${siteUrl}/cities/${c.stateSlug}/${c.slug})`)
      .join(", ");
    lines.push(`- ${group.name}: ${cityList}`);
  }
  lines.push("");

  lines.push("## Blog");
  for (const post of blogPosts) {
    lines.push(`- [${post.title}](${siteUrl}/blog/${post.slug}): ${post.excerpt}`);
  }
  lines.push("");

  lines.push("## Optional");
  lines.push(`- [Sitemap](${siteUrl}/sitemap.xml)`);
  lines.push(`- [Privacy Policy](${siteUrl}/privacy)`);
  lines.push(`- [Terms](${siteUrl}/terms)`);
  lines.push(`- [18+ Disclaimer](${siteUrl}/disclaimer)`);

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
