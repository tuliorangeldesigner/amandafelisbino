/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [375, 425, 576, 768, 1024, 1280, 1440, 1920],
    imageSizes: [64, 96, 128, 256, 384],
  },
}

module.exports = nextConfig
