import type { NextConfig } from "next";

const cmsOrigin = process.env.NEXT_PUBLIC_CMS_ORIGIN ?? "http://localhost:3001";

const nextConfig: NextConfig = {
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
};

export default nextConfig;
