const path = require('path');
const createMDX = require('@next/mdx');

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  experimental: {
    mdxRs: true,
  },

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },

  async rewrites() {
    return [];
  },

  async redirects() {
    return [
      {
        source: '/home-design',
        destination: '/play-online',
        permanent: true,
      },
    ];
  },

  webpack(config) {
    config.resolve.alias['@components'] = path.resolve(__dirname, 'components');
    config.resolve.alias['@content'] = path.resolve(__dirname, 'content');
    config.resolve.alias['@'] = __dirname;
    return config;
  },
};

module.exports = withMDX(nextConfig);