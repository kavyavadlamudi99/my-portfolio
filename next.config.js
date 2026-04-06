/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Optimize images
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Performance optimizations
  compress: true,
  
  // Production optimizations
  productionBrowserSourceMaps: false,
  
  // Metadata
  poweredByHeader: false,
};

module.exports = nextConfig;
