import type { NextConfig } from 'next';

const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = isGithubPages
  ? {
      output: 'export',
      assetPrefix: '/mtech-ai-product-development-presentation/',
      images: { unoptimized: true },
    }
  : {};

export default nextConfig;
