const withOptimizedImages = require('next-optimized-images');

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withOptimizedImages({
  /* config for next-optimized-images */
  images: {
    disableStaticImages: true,
  },
  // your other Next.js config
});
