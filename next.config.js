// next.config.js
const path = require('path');
const createMDX = require('@next/mdx');

// 启用 MDX 支持
const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // 关键：不要注入 @mdx-js/react 的 Provider（它会用 createContext）
    providerImportSource: null,
    // 这里也可以加 remark/rehype 插件
    // remarkPlugins: [],
    // rehypePlugins: [],
  },
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'], // 支持 .mdx 页面/内容
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // 允许远程图片（如游戏封面）
      },
    ],
  },

  // ✅ 1) 友好 URL → 内部页面 的重写（返回 200，不是 3xx）
  async rewrites() {
    return [
      // 显式列出（最安全，不会误伤其他页面）
      { source: '/steal-brainrot', destination: '/play-online/steal-brainrot' },
      { source: '/tree-house-maker', destination: '/play-online/tree-house-maker' },
      { source: '/papas-wingeria', destination: '/play-online/papas-wingeria' },
      { source: '/vikings-an-archers-journey', destination: '/play-online/vikings-an-archers-journey' },
      { source: '/tree-house-maker', destination: '/play-online/tree-house-maker' },
      { source: '/horseshoeing', destination: '/play-online/horseshoeing' },
      { source: '/panda-resort', destination: '/play-online/panda-resort' },
      { source: '/puppet-master', destination: '/play-online/puppet-master' },
      { source: '/blumgi-slime', destination: '/play-online/blumgi-slime' },
      { source: '/grow-a-garden', destination: '/play-online/grow-a-garden' },
      // —— 如果你的所有游戏都想这种映射，可启用下面“通配”版本（择一使用）——
      // {
      //   source:
      //     '/:slug((?!api|_next|static|images|fonts|play-online|sitemap\\.xml|robots\\.txt|favicon\\.ico).+)',
      //   destination: '/play-online/:slug',
      // },
    ];
  },

  // ✅ 2) 旧路径 → 新路径 的永久重定向（308），避免重复内容
  async redirects() {
    return [
      {
        source: '/play-online/:slug',
        destination: '/:slug',
        permanent: true, // 308 Permanent Redirect
      },
      {
        source: '/home-design',
        destination: '/play-online',
        permanent: true, // 永久重定向（308），确保搜索引擎等也知道这个变动
      }
    ];
  },

  webpack(config) {
    // 路径别名：@components → /components
    config.resolve.alias['@components'] = path.resolve(__dirname, 'components');
    config.resolve.alias['@content'] = path.resolve(__dirname, 'content');
    config.resolve.alias['@'] = __dirname; // 可选，方便导入 @/content、@/app 等
    return config;
  },
};

// 导出组合配置
module.exports = withMDX(nextConfig);
