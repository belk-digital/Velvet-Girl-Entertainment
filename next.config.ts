import type { NextConfig } from "next";

const cmsOrigin = process.env.NEXT_PUBLIC_CMS_ORIGIN ?? "http://localhost:3001";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.31.145", "localhost:3000"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
      {
        protocol: "https",
        hostname: "*.vercel.app",
      },
      {
        protocol: "https",
        hostname: "velvet-girl-cms-three.vercel.app",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `frame-ancestors 'self' ${cmsOrigin}`,
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/llms.txt",
        destination: "/api/llms",
      },
    ];
  },
};

export default nextConfig;
