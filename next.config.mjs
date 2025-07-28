/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Disable build cache for Cloudflare Pages
  generateBuildId: () => 'build-' + Date.now(),
}

export default nextConfig
module.exports = nextConfig