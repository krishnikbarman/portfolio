/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Comment out for local development, uncomment for GitHub Pages deployment
  // basePath: '/portfolio-website-for-developer',
  // assetPrefix: '/portfolio-website-for-developer',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
