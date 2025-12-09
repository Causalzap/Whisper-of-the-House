// next.config.js
const path = require('path');
const createMDX = require('@next/mdx');

const withMDX = createMDX({
  extension: /\.mdx?$/,
  // 先别加 options，等确认 build OK 再加插件
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  experimental: {
    mdxRs: true, // ✅ Next 15 推荐
  },

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },

  async rewrites() {
    return [
      { source: '/steal-brainrot', destination: '/play-online/steal-brainrot' },
      { source: '/tree-house-maker', destination: '/play-online/tree-house-maker' },
      { source: '/papas-wingeria', destination: '/play-online/papas-wingeria' },
      { source: '/vikings-an-archers-journey', destination: '/play-online/vikings-an-archers-journey' },
      { source: '/horseshoeing', destination: '/play-online/horseshoeing' },
      { source: '/panda-resort', destination: '/play-online/panda-resort' },
      { source: '/puppet-master', destination: '/play-online/puppet-master' },
      { source: '/blumgi-slime', destination: '/play-online/blumgi-slime' },
      { source: '/grow-a-garden', destination: '/play-online/grow-a-garden' },
    ];
  },

  async redirects() {
    return [
      {
        source: '/play-online/:slug',
        destination: '/:slug',
        permanent: true,
      },
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
