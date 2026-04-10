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
    { url: `${base}/routine-guide`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },

    { url: `${base}/retro-rewind`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },
   
    { url: `${base}/i-am-alone`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
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
    { url: `${base}/guide/hozy`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/the-long-dark-episode-5`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/i-am-jesus-christ`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/all-will-fall`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/the-occultist`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……

    // ⬇️ 把 4 篇文章补上
    { url: `${base}/the-occultist/all-altar-locations`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/the-occultist/all-medallion-locations`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/the-occultist/codex-lumina-fragments`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },

    // ⬇️ 把 4 篇文章补上
    { url: `${base}/the-long-dark-episode-5/search-party-achievement`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/the-long-dark-episode-5/what-to-do-after-the-autopsy`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/the-long-dark-episode-5/where-to-go-after-terry`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/the-long-dark-episode-5/how-to-get-to-desperation-bay`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },

    // ⬇️ 把 4 篇文章补上
    { url: `${base}/all-will-fall/oil-rig-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/all-will-fall/tanker-truck-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/all-will-fall/tornado-race-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/all-will-fall/collapse-troubleshooting`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },

    // ⬇️ 把 4 篇文章补上
    { url: `${base}/i-am-jesus-christ/apostles-locations`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/i-am-jesus-christ/miracles-list`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/i-am-jesus-christ/walkthrough`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/i-am-jesus-christ/who-should-play`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },

    { url: `${base}/the-long-dark-episode-5/episode-5-ending-explained`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/the-long-dark-episode-5/episode-5-missing-people-locations`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/the-long-dark-episode-5/episode-5-walkthrough`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/the-long-dark-episode-5/whats-in-astrids-hardcase-explained`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },

    { url: `${base}/guides/hozy/cafe-layout-tips`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/guides/hozy/dreams-explained`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/guides/hozy/hardest-levels-ranked`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/guides/hozy/penthouse-layout-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },

    { url: `${base}/retro-rewind/is-the-black-market-worth-it`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/retro-rewind/when-to-replace-damaged-tape`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/retro-rewind/custom-videos`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/retro-rewind/community`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },

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

    { url: `${base}/routine-guide/chapter-1-birth-stealth-walkthrough`, changeFrequency: 'monthly', priority: 0.6, lastModified: new Date() },
    { url: `${base}/routine-guide/chapter-2-incision-stealth-walkthrough`, changeFrequency: 'monthly', priority: 0.6, lastModified: new Date() },
    { url: `${base}/routine-guide/chapter-3-re-create-stealth-walkthrough`, changeFrequency: 'monthly', priority: 0.6, lastModified: new Date() },
    { url: `${base}/routine-guide/chapter-4-adrift-stealth-walkthrough`, changeFrequency: 'monthly', priority: 0.6, lastModified: new Date() },
    { url: `${base}/routine-guide/chapter-5-endure-stealth-walkthrough`, changeFrequency: 'monthly', priority: 0.6, lastModified: new Date() },
    { url: `${base}/routine-guide/chapter-6-legacy-stealth-walkthrough`, changeFrequency: 'monthly', priority: 0.6, lastModified: new Date() },

];

  return [
    ...staticUrls,
    // ...guideUrls, // 有动态内容时解开
  ];
}
