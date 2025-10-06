/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',              // No subpath needed for /docs setup
  assetPrefix: './',         // Relative paths so it works inside /docs
};

module.exports = nextConfig;
