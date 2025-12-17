// app/sitemap.ts
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://www.whisperofthehouse.com';

  // 1) 动态数据示例（如果有）
  // const guides = await fetch(`${base}/api/guides`).then(r => r.json());
  // const guideUrls = guides.map((g: { slug: string; updatedAt?: string }) => ({
  //   url: `${base}/guides/${g.slug}`,
  //   lastModified: g.updatedAt ? new Date(g.updatedAt) : new Date(),
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.7,
  // }));

  // 2) 静态页面
  const staticUrls: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: 'weekly', priority: 1, lastModified: new Date() },
    { url: `${base}/guides`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },
    { url: `${base}/winter-burrow`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },
    { url: `${base}/i-am-alone`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },
    { url: `${base}/collection`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/abnormal-points-collection`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/play-online`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/papas-wingeria`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/steal-brainrot`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/vikings-an-archers-journey`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/tree-house-maker`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/horseshoeing`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/panda-resort`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/puppet-master`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/blumgi-slime`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/grow-a-garden`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
 
    // ⬇️ 把 4 篇文章补上
    { url: `${base}/guides/beginner-guide`, changeFrequency: 'monthly', priority: 0.6, lastModified: new Date() },
    { url: `${base}/guides/game-progression-guide`, changeFrequency: 'monthly', priority: 0.6, lastModified: new Date() },
    { url: `${base}/guides/top-tips-and-tricks`, changeFrequency: 'monthly', priority: 0.6, lastModified: new Date() },
    { url: `${base}/guides/hidden-secrets`, changeFrequency: 'monthly', priority: 0.6, lastModified: new Date() },
    { url: `${base}/guides/organize-and-uncover-secrets`, changeFrequency: 'monthly', priority: 0.6, lastModified: new Date() },

    { url: `${base}/winter-burrow/winter-burrow-early-survival-guide`, changeFrequency: 'monthly', priority: 0.6, lastModified: new Date() },
    { url: `${base}/winter-burrow/winter-burrow-owl-chase-part2-guide`, changeFrequency: 'monthly', priority: 0.6, lastModified: new Date() },
    { url: `${base}/winter-burrow/winter-burrow-gnawtusk-rescue-chapter-guide`, changeFrequency: 'monthly', priority: 0.6, lastModified: new Date() },
    { url: `${base}/winter-burrow/winter-burrow-bufo-request-part4-guide`, changeFrequency: 'monthly', priority: 0.6, lastModified: new Date() },
    { url: `${base}/winter-burrow/winter-burrow-finding-poliwog-walkthrough`, changeFrequency: 'monthly', priority: 0.6, lastModified: new Date() },
    { url: `${base}/i-am-alone/how-to-get-all-endings-yes-im-alone`, changeFrequency: 'monthly', priority: 0.6, lastModified: new Date() },

];

  return [
    ...staticUrls,
    // ...guideUrls, // 有动态内容时解开
  ];
}
