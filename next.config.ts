import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },
  basePath: '/LeRefugeGourmand',
  assetPrefix: '/LeRefugeGourmand/',
};

export default nextConfig;
