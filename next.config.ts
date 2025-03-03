import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // https://images.pexels.com
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
};

export default nextConfig;
