import type { Metadata } from "next";
import { Great_Vibes, Montserrat } from "next/font/google";
import SiteShell from "@/components/layout/SiteShell";
import "./globals.css";

const montserratDisplay = Montserrat({
  variable: "--font-display-raw",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script-raw",
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  variable: "--font-body-raw",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Velvet Girl Entertainment",
  description:
    "Elite exotic entertainment for bachelor parties, private events, and exclusive gatherings — nationwide, discreet, unforgettable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserratDisplay.variable} ${greatVibes.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black" suppressHydrationWarning>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
