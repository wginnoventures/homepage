import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/homepage',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
