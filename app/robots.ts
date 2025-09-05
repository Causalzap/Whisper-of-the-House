// app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const base = 'https://www.whisperofthehouse.com';

  return {
    rules: [
      // 特定 bot 禁止
      { userAgent: 'Amazonbot', disallow: '/' },
      { userAgent: 'Applebot-Extended', disallow: '/' },
      { userAgent: 'Bytespider', disallow: '/' },
      { userAgent: 'CCBot', disallow: '/' },
      { userAgent: 'ClaudeBot', disallow: '/' },
      { userAgent: 'Google-Extended', disallow: '/' },
      { userAgent: 'GPTBot', disallow: '/' },
      { userAgent: 'meta-externalagent', disallow: '/' },

      // KnitOut.net robots (AI crawlers)
      { userAgent: 'GPTBot', allow: '/llms.txt', disallow: '/' },
      { userAgent: 'anthropic-ai', allow: '/llms.txt', disallow: '/' },

      // Googlebot
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/*.css$',
          '/*.js$',
          '/*.png$',
          '/*.jpg$',
          '/*.jpeg$',
          '/*.gif$',
          '/*.webp$',
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/static/',
          '/404',
          '/500',
          '/*.json$',
        ],
      },

      // 默认规则
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/cgi-bin/',
          '/tmp/',
          '/private/',
          '/*?*',
          '/*.php$',
        ],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
