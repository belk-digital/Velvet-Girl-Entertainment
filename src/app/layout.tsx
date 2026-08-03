import type { Metadata } from "next";
import { Inter, Italiana, Montserrat } from "next/font/google";
import SiteShell from "@/components/layout/SiteShell";
import "./globals.css";

const montserratDisplay = Montserrat({
  variable: "--font-display-raw",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const italiana = Italiana({
  variable: "--font-script-raw",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-body-raw",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://velvetgirlentertainment.com";
const siteName = "Velvet Girl Entertainment";
const siteDescription =
  "Elite exotic entertainment for bachelor parties, private events, and exclusive gatherings — nationwide, discreet, unforgettable.";
const defaultOgImage = "/gallery images/GALLERY(1).webp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s`,
  },
  description: siteDescription,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    siteName,
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    images: [{ url: defaultOgImage, width: 1200, height: 630, alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [defaultOgImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserratDisplay.variable} ${italiana.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FBFAF8] text-black" suppressHydrationWarning>
        <SiteShell>{children}</SiteShell>
      </body>

    </html>
  );
}
