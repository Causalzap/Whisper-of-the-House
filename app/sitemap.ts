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
    { url: `${base}/soulmask`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/crystalfall`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/sol-cesto`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/pokemon-champions`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/grime-2`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/road-to-vostok`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/mouse-pi-for-hire/collectibles-hub`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/pragmata`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/sintopia`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/airborne-empire`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/lucky-tower-ultimate`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/vampire-crawlers`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……

     // ⬇️ 把 4 篇文章补上
     { url: `${base}/vampire-crawlers/all-characters-unlock-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/vampire-crawlers/best-characters-for-beginners`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/vampire-crawlers/secret-characters-how-to-unlock`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/vampire-crawlers/best-early-upgrades`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/vampire-crawlers/combo-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/vampire-crawlers/early-evolutions`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },

     // ⬇️ 把 4 篇文章补上
     { url: `${base}/airborne-empire/jet-engine-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/airborne-empire/kingsfell-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/airborne-empire/pirate-queen-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/airborne-empire/tilt-lift-balance-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
   
    // ⬇️ 把 4 篇文章补上
    { url: `${base}/sintopia/best-hell-layout-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/sintopia/hearos-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/sintopia/overworld-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/sintopia/saints-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
  
    // ⬇️ 把 4 篇文章补上
    { url: `${base}/mouse-pi-for-hire/baseball-card-locations`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/mouse-pi-for-hire/buy-back-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/mouse-pi-for-hire/missable-side-job-rewards`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/mouse-pi-for-hire/missables-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/mouse-pi-for-hire/mouseberg-herald-comic-locations`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/mouse-pi-for-hire/weapon-schematics-secret-figurines-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },


     // ⬇️ 把 4 篇文章补上
     { url: `${base}/road-to-vostok/area-05-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/road-to-vostok/generalist-and-doctor-locations`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/road-to-vostok/permadeath-save-and-stash-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/road-to-vostok/all-shelter-locations`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },

     // ⬇️ 把 4 篇文章补上
     { url: `${base}/pokemon-champions/how-to-beat-tailwind-pokemon-champions-doubles`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/pokemon-champions/how-to-beat-trick-room-pokemon-champions-doubles`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/pokemon-champions/how-to-counter-incineroar-pokemon-champions-doubles`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/pokemon-champions/how-to-deal-with-sneasler-pokemon-champions-doubles`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    
     // ⬇️ 把 4 篇文章补上
     { url: `${base}/grime-2/blade-mammoth-boss-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/grime-2/kankan-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/grime-2/vs-grime-1-differences`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/grime-2/hozy`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },

    // ⬇️ 把 4 篇文章补上
    { url: `${base}/sol-cesto/all-characters-unlock-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/sol-cesto/flute-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/sol-cesto/how-to-unlock-huntress`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/sol-cesto/how-to-unlock-lizard`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },

    // ⬇️ 把 4 篇文章补上
    { url: `${base}/crystalfall/beginner-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/crystalfall/crafting-sockets-gem-fusion-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/crystalfall/fireball-build-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/crystalfall/inventory-stash-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },

    // ⬇️ 把 4 篇文章补上
    { url: `${base}/soulmask/airship-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/soulmask/cross-map-transfer-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/soulmask/shifting-sands-beginner-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/soulmask/tribesmen-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },


    // ⬇️ 把 4 篇文章补上
    { url: `${base}/the-occultist/all-altar-locations`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/the-occultist/all-medallion-locations`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/the-occultist/codex-lumina-fragments`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/the-occultist/clock-room-sundial-puzzle-solution`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/the-occultist/greenhouse-statue-puzzle-solution`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/the-occultist/mausoleum-door-lion-key-puzzle-solution`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/the-occultist/planetarium-star-moon-puzzle-solution`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
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
