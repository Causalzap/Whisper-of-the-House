// app/sitemap.ts
import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

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
    { url: `${base}/holovillage-our-cozy-days`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/shapez-2`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/fracture-field`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/moomintroll`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/far-far-west/secret-missions`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/olden-era`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/gamble-with-your-friends`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/magical-princess/endings-guide`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/librarian`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/farever`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/everything-is-crab`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/the-spell-brigade`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/outbound`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/directive-8020`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/subnautica-2`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/oaken-tower`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/dwarf-eats-mountain`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/lego-batman`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/deep-rock-galactic`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/zero-parades`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/paralives`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/romestead`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/starminer`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/cheap-car-repair`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/mina-the-hollower`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/scale-the-depths`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/fatekeeper`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/realm-of-ink`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/house-flipper-remastered-collection`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/gothic-1-remake`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/solarpunk`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/voidling-bound`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/burglin-gnomes`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/fears-to-fathom-scratch-creek`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/spacecraft`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/tales-of-seikyu`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/33-immortals`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/the-adventures-of-elliot`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/steam-next-fest`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/iron-nest`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/bombanana`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/casualties-unknown`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/dust-front-rts`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/thank-you-for-your-application`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/best-cozy-management-crafting-games`, changeFrequency: 'monthly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/best-games-with-multiple-endings`, changeFrequency: 'monthly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/best-steam-indie-games-with-guides`, changeFrequency: 'monthly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/new-steam-game-guides`, changeFrequency: 'monthly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/timberborn`, changeFrequency: 'monthly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/moldwasher`, changeFrequency: 'monthly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/darktide`, changeFrequency: 'monthly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/the-last-caretaker`, changeFrequency: 'monthly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/deltarune`, changeFrequency: 'monthly', priority: 0.8, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/frostpunk-2-breach-of-trust`, changeFrequency: 'monthly', priority: 0.8, lastModified: new Date() },    // 其它固定页……

    { url: `${base}/frostpunk-2-breach-of-trust/walkthrough`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/frostpunk-2-breach-of-trust/aurora-negotiation-fishery-hub-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/frostpunk-2-breach-of-trust/conquer-aurora-war-route-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/frostpunk-2-breach-of-trust/tremor-evacuation-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……

    { url: `${base}/deltarune/chapter-5-final-boss-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/deltarune/chapter-5-foxes-secret-egg`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/deltarune/chapter-5-secret-boss-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/deltarune/chapter-5-secret-boss-pink-coins`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/deltarune/chapter-5-weird-route`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……

    { url: `${base}/the-last-caretaker/new-horizons-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/the-last-caretaker/project-eden-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/the-last-caretaker/oil-whale-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/the-last-caretaker/research-outpost-theta-9-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/the-last-caretaker/power-fuel-wall-outlets`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……

    { url: `${base}/darktide/best-skitarii-builds`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/darktide/skitarii-servo-skull`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/darktide/skitarii-weapons`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……

    { url: `${base}/moldwasher/achievements-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/moldwasher/walkthrough`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/moldwasher/hidden-objects-collectibles`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……

    { url: `${base}/timberborn/beginner-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/timberborn/first-drought-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/timberborn/dam-levee-floodgate-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/timberborn/badwater-badtide-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/timberborn/irrigation-reservoir-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/timberborn/automation-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    
    { url: `${base}/thank-you-for-your-application/achievements-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/thank-you-for-your-application/endings-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/thank-you-for-your-application/final-evaluation-job-hopping-answers`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/thank-you-for-your-application/beginner-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/thank-you-for-your-application/resume-rules-thanks-letter-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……

    { url: `${base}/the-adventures-of-elliot/achievements-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/the-adventures-of-elliot/beginner-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/the-adventures-of-elliot/cat-locations`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/the-adventures-of-elliot/walkthrough`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/the-adventures-of-elliot/shards-of-life-locations`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/the-adventures-of-elliot/manuscript-locations`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……

    { url: `${base}/33-immortals/beginner-progression-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/33-immortals/weapons-unlock-upgrades-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/33-immortals/relics-paths-wishing-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/33-immortals/bosses-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/33-immortals/achievements-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……

    { url: `${base}/tales-of-seikyu/beginner-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/tales-of-seikyu/fox-ruins-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/tales-of-seikyu/yokai-forms-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/tales-of-seikyu/request-board-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/tales-of-seikyu/achievements-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/tales-of-seikyu/romance-gifts-marriage-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide

    { url: `${base}/spacecraft/beginner-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/spacecraft/base-building-automation`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/spacecraft/scanalyzer-alpha-ftl-engine`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/spacecraft/resources-locations`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/spacecraft/ship-upgrades-cargo-inventory`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/spacecraft/noviciate-corporation-unlock`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/spacecraft/permits-knowledge-unlock`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide


    { url: `${base}/fears-to-fathom-scratch-creek/walkthrough`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/fears-to-fathom-scratch-creek/ending-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/fears-to-fathom-scratch-creek/achievements-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide

    { url: `${base}/burglin-gnomes/beginner-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/burglin-gnomes/tasks-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/burglin-gnomes/survival-enemies-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/burglin-gnomes/co-op-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/burglin-gnomes/materials-upgrades-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide

    { url: `${base}/voidling-bound/all-collectibles`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/voidling-bound/beginner-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/voidling-bound/evolution-breeding-splicing-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/voidling-bound/golden-egg-locations`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/voidling-bound/mutagen-research-points-farm`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/voidling-bound/quackies-locations`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/voidling-bound/breeding-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide

    { url: `${base}/solarpunk/beginners-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/solarpunk/energy-system-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/solarpunk/airship-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/solarpunk/farming-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/solarpunk/research-progression-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/solarpunk/animals-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    
    { url: `${base}/gothic-1-remake/beginner-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/gothic-1-remake/perfect-start`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/gothic-1-remake/early-ore-weapons-armor`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/gothic-1-remake/best-faction`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/gothic-1-remake/old-camp-walkthrough`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/gothic-1-remake/old-mine-diegos-list`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/gothic-1-remake/new-camp-walkthrough`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/gothic-1-remake/swamp-camp-walkthrough`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/gothic-1-remake/skills-trainers`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/gothic-1-remake/lockpicking-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide

    { url: `${base}/house-flipper-remastered-collection/beginner-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered beginner guide
    { url: `${base}/house-flipper-remastered-collection/first-jobs-walkthrough`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered first jobs walkthrough
    { url: `${base}/house-flipper-remastered-collection/money-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered money guide
    { url: `${base}/house-flipper-remastered-collection/achievements-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered achievements guide
    { url: `${base}/house-flipper-remastered-collection/dlc-content-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // House Flipper Remastered DLC content guide

    { url: `${base}/realm-of-ink/beginner-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/realm-of-ink/best-builds`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/realm-of-ink/endless-rupture-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/realm-of-ink/final-boss-true-ending`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/realm-of-ink/ink-gems-curios-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/realm-of-ink/oread-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……

    { url: `${base}/fatekeeper/beginner-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/fatekeeper/best-build`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/fatekeeper/boss-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/fatekeeper/best-weapons`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/fatekeeper/best-spells`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……

    { url: `${base}/scale-the-depths/huatulco-100-percent-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/scale-the-depths/loch-ness-100-percent-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/scale-the-depths/outer-banks-100-percent-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/scale-the-depths/point-nemo-100-percent-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/scale-the-depths/all-collectibles-secrets`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/scale-the-depths/achievement-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/scale-the-depths/artifacts-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……

    { url: `${base}/mina-the-hollower/where-to-go-first`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/mina-the-hollower/how-to-get-map`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/mina-the-hollower/bones-farming`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/mina-the-hollower/best-starting-weapon`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/mina-the-hollower/fast-travel`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/mina-the-hollower/best-early-trinkets`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/mina-the-hollower/all-trinkets-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……

    { url: `${base}/cheap-car-repair/daddys-little-girl-mission`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/cheap-car-repair/controls-drop-items-save-tools`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/cheap-car-repair/how-to-make-money`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/cheap-car-repair/story-missions-walkthrough`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/cheap-car-repair/cars-parts-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
  
    { url: `${base}/starminer/beginner-first-hour`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/starminer/controls-dampeners-ship-spinning`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/starminer/early-research-progression`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/starminer/how-to-mine-scanner-laser`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/starminer/money-selling-resources`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……
    { url: `${base}/starminer/power-heat-low-energy`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },    // 其它固定页……

    { url: `${base}/romestead/dungeon-traps-death-recovery`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/romestead/farmstead-workers-food-logistics`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/romestead/first-day-base-building`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/romestead/giant-owl-guardian-of-minerva`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/romestead/gods-offerings-boss-progression`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/romestead/base-layout-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/romestead/raid-defense-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },

    
    { url: `${base}/paralives/paramaker-stats-vibes-personality`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/paralives/best-early-game-skills-talents-careers`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/paralives/job-performance-not-improving`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/paralives/level-skills-faster`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    
    { url: `${base}/zero-parades/best-build`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/zero-parades/conditioning`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/zero-parades/disco-elysium-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/zero-parades/stress-exertion`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/zero-parades/early-game`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },

    { url: `${base}/deep-rock-galactic/beginner-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/deep-rock-galactic/best-class`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/deep-rock-galactic/cooper-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/deep-rock-galactic/rogue-core-vs-drg`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/deep-rock-galactic/solo-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/deep-rock-galactic/upgrades-explained`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
   
    { url: `${base}/lego-batman/carmine-falcone`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/lego-batman/red-bricks`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/lego-batman/batgirl-unlock`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/lego-batman/firefly-boss`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/lego-batman/poison-ivy-boss`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/lego-batman/bane-boss`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/lego-batman/escaped-zoo-animals`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/lego-batman/mr-freeze-boss`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/lego-batman/new-beginnings-docks-collectibles`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/lego-batman/radio-towers`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/lego-batman/absolute-batman-suit`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/lego-batman/all-subwayne-tunnel-locations`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/lego-batman/how-to-farm-studs-fast`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },

    { url: `${base}/dwarf-eats-mountain/build-order`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/dwarf-eats-mountain/prestige-ascension-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/dwarf-eats-mountain/runners-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/dwarf-eats-mountain/artifacts-mithril-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/dwarf-eats-mountain/best-builds`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/dwarf-eats-mountain/endgame-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },

    { url: `${base}/subnautica-2/biomods-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/subnautica-2/co-op-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/subnautica-2/collector-leviathan`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/subnautica-2/digestion-adaptation`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/subnautica-2/early-resources`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/subnautica-2/first-base-setup`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/subnautica-2/fully-functional-fabricator`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/subnautica-2/navigation-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/subnautica-2/oxygen-air-tank-rebreather`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/subnautica-2/sonic-resonator-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/subnautica-2/tadpole-submarine`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/subnautica-2/welcome-center-habitat-builder`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/subnautica-2/what-to-do-first`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },

    { url: `${base}/oaken-tower/poison-build`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/oaken-tower/10-wins-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/oaken-tower/level-vs-reroll`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/oaken-tower/3-star-items`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/oaken-tower/perk-unlock-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/oaken-tower/bleed-build`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/oaken-tower/burn-build`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/oaken-tower/frosty-build`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },

    
    // ⬇️ 把 4 篇文章补上
    { url: `${base}/directive-8020/all-endings`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/directive-8020/all-monster-scenes-alien-duplicates`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/directive-8020/all-secrets-simms-recordings-o-death`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/directive-8020/character-survival-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/directive-8020/choices-consequences`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
 
    // ⬇️ 把 4 篇文章补上
    { url: `${base}/outbound/leave-first-biome`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/outbound/energy-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/outbound/early-resources`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/outbound/blueprints-workstations-upgrades`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/outbound/storage-backpack-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },

    // ⬇️ 把 4 篇文章补上
    { url: `${base}/the-spell-brigade/achievements-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/the-spell-brigade/best-builds`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/the-spell-brigade/best-spells-elements`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/the-spell-brigade/gold-farm`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/the-spell-brigade/solo-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/the-spell-brigade/wizard-unlocks`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/the-spell-brigade/trial-covenants-masteries-prestige`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },

     // ⬇️ 把 4 篇文章补上
     { url: `${base}/everything-is-crab/achievements-challenges-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/everything-is-crab/best-builds`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/everything-is-crab/boss-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/everything-is-crab/progression-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/everything-is-crab/selective-pressure-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },

     // ⬇️ 把 4 篇文章补上
     { url: `${base}/farever/beginner-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/farever/classes-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/farever/codeex-leveling-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/farever/mount-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/farever/weapon-skills-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },

    // ⬇️ 把 4 篇文章补上
    { url: `${base}/librarian/achievements`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/librarian/best-abilities`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/librarian/book-sorting`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/librarian/key-locations`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },

    // ⬇️ 把 4 篇文章补上
    { url: `${base}/magical-princess/forbidden-research-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/magical-princess/two-queens-ending-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/magical-princess/true-ending-heir-of-the-stargazer`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/magical-princess/golden-ending-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/magical-princess/career-endings-requirements`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },


     // ⬇️ 把 4 篇文章补上
     { url: `${base}/gamble-with-your-friends/achievements`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/gamble-with-your-friends/beginner-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/gamble-with-your-friends/best-games`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/gamble-with-your-friends/best-item-combos`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/gamble-with-your-friends/craps-cheese-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/gamble-with-your-friends/tickets-items-body-parts`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },

     { url: `${base}/gamble-with-your-friends/all-endings-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/gamble-with-your-friends/bugged-achievements`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/gamble-with-your-friends/quota-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/gamble-with-your-friends/save-scum-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },

    // ⬇️ 把 4 篇文章补上
    { url: `${base}/olden-era/best-buildings-first`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/olden-era/cant-unlock-subclass`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/olden-era/chronomancer-vs-soulweaver`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/olden-era/focus-points`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/olden-era/force-subclass`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/olden-era/how-to-unlock-subclasses`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },

    { url: `${base}/olden-era/law-points-astrology-points`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/olden-era/necropolis-common-mistakes`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/olden-era/necropolis-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/olden-era/necropolis-skeletal-archers`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/olden-era/necropolis-week-1-build-order`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/olden-era/subclass-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },

    // ⬇️ 把 4 篇文章补上
    { url: `${base}/far-far-west/area-41-symbol-order`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/far-far-west/cactus-day-joker-locations`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/far-far-west/canyon-secret-medallion-locations`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/far-far-west/ghost-bell-shard-locations`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/far-far-west/snowman-parts-locations`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/far-far-west/woodlands-mushroom-sequence`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/far-far-west/all-secret-jokers`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },


    // ⬇️ 把 4 篇文章补上
    { url: `${base}/moomintroll/achievements-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/moomintroll/ending-explained`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/moomintroll/great-winter-bonfire`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/moomintroll/little-my-snowball-fight`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/moomintroll/side-quests`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/moomintroll/tool-upgrades`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/moomintroll/vase-piece-locations`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },

     // ⬇️ 把 4 篇文章补上
     { url: `${base}/fracture-field/achievements-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/fracture-field/beginner-walkthrough`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/fracture-field/prestige-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/fracture-field/progression-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },

    // ⬇️ 把 4 篇文章补上
    { url: `${base}/shapez-2/mam-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/shapez-2/manufacture-mode-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/shapez-2/trade-station-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/shapez-2/wires-belt-filter-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
    { url: `${base}/shapez-2/space-belts-trains-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
 

     // ⬇️ 把 4 篇文章补上
     { url: `${base}/holovillage-our-cozy-days/beginner-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/holovillage-our-cozy-days/early-combat-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/holovillage-our-cozy-days/fishing-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/holovillage-our-cozy-days/how-to-invite-villagers`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
     { url: `${base}/holovillage-our-cozy-days/shop-money-guide`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },
  

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
     { url: `${base}/grime-2/best-early-weapons`, changeFrequency: 'weekly', priority: 0.7, lastModified: new Date() },

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
