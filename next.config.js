/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = {
  optimizeFonts: false,
};

module.exports = {
  swcMinify: true,
};

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
