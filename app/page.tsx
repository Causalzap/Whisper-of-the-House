import Layout from '../components/Layout';
import Link from 'next/link';
import type { Metadata } from 'next';
import WhisperOfTheHouseGuide from '@/components/WhisperOfTheHouseGuide';
import LatestUpdates from '@/components/LatestUpdates';

export const metadata: Metadata = {
title: 'Game Guides, Walkthroughs & Tips | Whisper of the House',
description:
'Find game guides, walkthroughs, endings, collectibles, beginner tips, Steam guide collections, hidden secrets, and updates for indie, cozy, survival, RPG, puzzle, and strategy games.',
alternates: {
canonical: 'https://www.whisperofthehouse.com/',
},
};

const guideTypeLabels = [
'Walkthroughs',
'Endings',
'Beginner Tips',
'Collectibles',
'Build Guides',
'Puzzle Solutions',
];

const guideCollections = [
{
title: 'New Steam Game Guides',
href: '/new-steam-game-guides',
description:
'New Steam games with beginner paths, Steam snapshots, endings, achievements, builds, cozy progression, survival tips, and guide-backed review notes.',
tag: 'New Steam Picks',
},
{
title: 'Games With Multiple Endings',
href: '/best-games-with-multiple-endings',
description:
'Find games where endings, choices, route locks, true ending requirements, achievements, survival checks, and spoiler-light guide paths matter.',
tag: 'Endings & Routes',
},
{
title: 'Steam Indie Games With Guides',
href: '/best-steam-indie-games-with-guides',
description:
'Steam indie and indie-scale games where guides help with first routes, builds, collectibles, achievements, automation, and progression.',
tag: 'Indie Guides',
},
{
title: 'Cozy Management & Crafting Games',
href: '/best-cozy-management-crafting-games',
description:
'Cozy, crafting, management, repair, life sim, automation, and base-building games with practical guide paths for early systems.',
tag: 'Cozy & Crafting',
},
];

const featuredGameHubs = [
{
title: 'Thank You For Your Application',
href: '/thank-you-for-your-application',
description:
'Beginner tips, endings, final evaluation answers, achievements, route locks, ratings, and job outcome guides.',
tag: 'Hot',
},
{
title: 'Steam Next Fest June 2026',
href: '/steam-next-fest',
description:
'Demo guide hubs for Iron Nest, Dust Front RTS, BOMBANANA, Casualties Unknown, and more early Steam discoveries.',
tag: 'Demo Guides',
},
{
title: 'SpaceCraft',
href: '/spacecraft',
description:
'Survival crafting, permits, resources, Noviciate Corporation unlocks, base automation, and early progression help.',
tag: 'Survival',
},
{
title: 'Tales of Seikyu',
href: '/tales-of-seikyu',
description:
'Beginner routes, yokai forms, request board help, romance, gifts, marriage, and achievements.',
tag: 'Cozy RPG',
},
{
title: '33 Immortals',
href: '/33-immortals',
description:
'Beginner progression, weapons, bosses, relics, paths, wishing, co-op pressure, and achievements.',
tag: 'Co-op',
},
{
title: 'The Adventures of Elliot',
href: '/the-adventures-of-elliot',
description:
'Full route help, cats, Shards of Life, manuscripts, achievements, story progression, and completion cleanup.',
tag: 'RPG',
},
{
title: 'Realm of Ink',
href: '/realm-of-ink',
description:
'Beginner tips, best builds, Ink Gems, Curios, Endless Rupture, final boss, and true ending routing.',
tag: 'Roguelike',
},
{
title: 'Subnautica 2',
href: '/subnautica-2',
description:
'What to do first, oxygen upgrades, air tanks, first base setup, co-op tips, and navigation help.',
tag: 'Survival',
},
];

const allGameGuides = [
  { title: 'Whisper of the House', href: '/guides' },
  { title: 'Retro Rewind', href: '/retro-rewind' },
  { title: 'Hozy', href: '/guides/hozy' },
  { title: 'GRIME II', href: '/grime-2' },
  { title: 'The Long Dark Episode 5', href: '/the-long-dark-episode-5' },
  { title: 'I Am Jesus Christ', href: '/i-am-jesus-christ' },

  // 你原代码里 All Will Fall 指向 /i-am-jesus-christ。
  // 如果你已经有真实页面，建议改成 /all-will-fall。
  { title: 'All Will Fall', href: '/i-am-jesus-christ' },

  { title: 'The Occultist', href: '/the-occultist' },
  { title: 'Soulmask', href: '/soulmask' },
  { title: 'Crystalfall', href: '/crystalfall' },
  { title: 'Sol Cesto', href: '/sol-cesto' },
  { title: 'Pokemon Champions', href: '/pokemon-champions' },
  { title: 'Road To Vostok', href: '/road-to-vostok' },
  { title: 'MOUSE: P.I. For Hire', href: '/mouse-pi-for-hire' },
  { title: 'Pragmata', href: '/pragmata' },
  { title: 'Sintopia', href: '/sintopia' },
  { title: 'Airborne Empire', href: '/airborne-empire' },
  { title: 'Lucky Tower Ultimate', href: '/lucky-tower-ultimate' },
  { title: 'Vampire Crawlers', href: '/vampire-crawlers' },

  // 你原代码里 HoloVillage 指向 /vampire-crawlers。
  // 如果你已经有真实页面，建议改成 /holovillage 或对应真实路径。
  { title: 'HoloVillage: Our Cozy Days', href: '/vampire-crawlers' },

  { title: 'shapez 2 - Factory', href: '/shapez-2' },
  { title: 'Fracture Field', href: '/fracture-field' },
  { title: "Moomintroll: Winter's Warmth", href: '/moomintroll' },
  { title: 'Far Far West', href: '/far-far-west' },
  { title: 'Heroes of Might and Magic: Olden Era', href: '/olden-era' },
  { title: 'Gamble With Your Friends', href: '/gamble-with-your-friends' },
  { title: 'Magical Princess', href: '/magical-princess/endings-guide' },

  { title: 'Librarian: Tidy Up the Arcane Library!', href: '/librarian' },

  { title: 'Farever', href: '/farever' },

  { title: 'Everything is Crab: The Animal Evolution Roguelite', href: '/everything-is-crab' },

  { title: 'The Spell Brigade', href: '/the-spell-brigade' },
  { title: 'Outbound', href: '/outbound' },
  { title: 'Directive 8020', href: '/directive-8020' },
  { title: 'Subnautica 2', href: '/subnautica-2' },
  { title: 'Oaken Tower', href: '/oaken-tower' },
  { title: 'Dwarf Eats Mountain', href: '/dwarf-eats-mountain' },
  { title: 'LEGO® Batman™: Legacy of the Dark Knight', href: '/lego-batman'},
  { title: 'Deep Rock Galactic: Rogue Core', href: '/deep-rock-galactic'},
  { title: 'ZERO PARADES: For Dead Spies', href: '/zero-parades'},
  { title: 'Paralives', href: '/paralives'},
  { title: 'Romestead', href: '/romestead'},
  { title: 'Starminer', href: '/starminer'},
  { title: 'Cheap Car Repair', href: '/cheap-car-repair'},
  { title: 'Mina the Hollower', href: '/mina-the-hollower'},
  { title: 'Scale the Depths', href: '/scale-the-depths'},
  { title: 'Fatekeeper', href: '/fatekeeper'},
  { title: 'Realm of Ink', href: '/realm-of-ink'},
  { title: 'House Flipper Remastered Collection', href: '/house-flipper-remastered-collection'},
  { title: 'Gothic 1 Remake', href: '/gothic-1-remake'},
  { title: 'Solarpunk™', href: '/solarpunk'},
  { title: 'Voidling Bound', href: '/voidling-bound'},
  { title: 'Burglin\' Gnomes', href: '/burglin-gnomes'},
  { title: 'Fears to Fathom - Scratch Creek', href: '/fears-to-fathom-scratch-creek'},
  { title: 'SpaceCraft', href: '/spacecraft'},
  { title: 'Tales of Seikyu', href: '/tales-of-seikyu'},
  { title: '33 Immortals', href: '/33-immortals'},
  { title: 'The Adventures of Elliot: The Millennium Tales', href: '/the-adventures-of-elliot'},
  { title: 'Steam Next Fest June 2026 Demo Guides', href: '/steam-next-fest'},
  { title: 'Thank You For Your Application', href: '/thank-you-for-your-application'},
  { title: 'Timberborn', href: '/timberborn'},
  { title: 'Moldwasher', href: '/moldwasher'},
  { title: 'Warhammer 40,000: Darktide - Skitarii Class', href: '/darktide'},
  { title: 'The Last Caretaker', href: '/the-last-caretaker'},

  
];

const exploreCards = [
{
title: 'Guide Collections',
href: '#guide-collections',
description:
'Start with curated guide-backed collections for new Steam games, indie picks, cozy crafting games, endings, routes, and achievements.',
cta: 'View Collections',
buttonClass: 'bg-purple-500 hover:bg-purple-600',
},
{
title: 'Latest Updates',
href: '#latest-updates',
description:
'See the newest walkthroughs, route updates, achievement guides, ending pages, and game-specific guide posts.',
cta: 'See Updates',
buttonClass: 'bg-blue-500 hover:bg-blue-600',
},
{
title: 'All Game Guides',
href: '#all-game-guides',
description:
'Browse every available game hub, walkthrough cluster, and guide entry from one complete index.',
cta: 'Browse All Games',
buttonClass: 'bg-green-500 hover:bg-green-600',
},
];

export default function Home() {
return ( <Layout> <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 px-4 pt-20 pb-16 md:pt-24 md:pb-20"> <div className="container mx-auto max-w-6xl"> <div className="grid items-center gap-10 lg:grid-cols-2"> <div className="space-y-6 text-center text-white lg:text-left"> <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-purple-100 backdrop-blur-sm">
Steam, indie, cozy, endings, survival, RPG, puzzle, and strategy guides </div>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Game Guides, Walkthroughs & Tips
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl lg:mx-0">
            Find walkthroughs, endings, beginner routes, collectibles, builds, achievements, puzzle solutions,
            and practical guide paths for new Steam games, indie games, cozy crafting games, survival games,
            RPGs, and more.
          </p>

          <form action="/guides" method="get" className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row lg:mx-0">
            <input
              type="search"
              name="q"
              placeholder="Search game guides..."
              className="min-h-12 flex-1 rounded-xl border border-white/20 bg-white px-4 text-gray-900 outline-none ring-0 placeholder:text-gray-500 focus:border-purple-300"
            />
            <button
              type="submit"
              className="min-h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-700"
            >
              Search
            </button>
          </form>

          <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#guide-collections"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3 font-semibold text-purple-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-purple-50"
            >
              Guide Collections
            </a>

            <a
              href="#latest-updates"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
            >
              Latest Updates
            </a>

            <a
              href="#all-game-guides"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
            >
              Browse All Games
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-2 lg:justify-start">
            {guideTypeLabels.map((label) => (
              <span
                key={label}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-sm">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full bg-purple-500 px-3 py-1 text-sm font-semibold text-white">
                Featured Guide
              </span>
              <span className="text-sm text-purple-100">Whisper of the House</span>
            </div>

            <img
              src="/images/whisper-of-the-house-game-cover.webp"
              alt="Whisper of the House featured game guide"
              className="w-full rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02]"
            />

            <div className="mt-5 space-y-3 text-white">
              <h2 className="text-2xl font-bold">Whisper of the House Complete Guide</h2>
              <p className="text-sm leading-relaxed text-gray-200">
                Start with the featured complete guide, or use the guide collections below to browse newer
                Steam games, endings, cozy crafting games, and indie picks.
              </p>
              <a
                href="#guide-content"
                className="inline-flex rounded-lg bg-white/15 px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/25"
              >
                Read Featured Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="guide-collections" className="bg-white px-4 py-16 scroll-mt-24">
    <div className="container mx-auto max-w-6xl">
      <div className="mb-10 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-purple-600">
          Guide Collections
        </p>
        <h2 className="mb-3 text-3xl font-bold text-gray-900">
          Start with guide-backed collections
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Not sure what to play or what to read first? These collections organize games by real player needs:
          new Steam releases, endings, routes, indie picks, cozy crafting, automation, and progression.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {guideCollections.map((collection) => (
          <Link
            key={collection.title}
            href={collection.href}
            className="group flex min-h-[250px] flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg"
          >
            <div className="mb-4 inline-flex w-fit rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700">
              {collection.tag}
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-purple-700">
              {collection.title}
            </h3>
            <p className="flex-grow text-sm leading-relaxed text-gray-600">
              {collection.description}
            </p>
            <div className="mt-4 text-sm font-semibold text-purple-600">
              View Collection →
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>

  <div id="latest-updates" className="scroll-mt-24">
    <LatestUpdates />
  </div>

  <section id="featured-games" className="bg-white px-4 py-16">
    <div className="container mx-auto max-w-6xl">
      <div className="mb-10 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-purple-600">
          Featured Game Hubs
        </p>
        <h2 className="mb-3 text-3xl font-bold text-gray-900">Popular guide hubs</h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Jump into high-value game hubs with beginner guides, endings, builds, achievements, collectibles,
          walkthroughs, and route help.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featuredGameHubs.map((game) => (
          <Link
            key={game.title}
            href={game.href}
            className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg"
          >
            <div className="mb-4 inline-flex rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700">
              {game.tag}
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-purple-700">
              {game.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">{game.description}</p>
            <div className="mt-4 text-sm font-semibold text-purple-600">View Guides →</div>
          </Link>
        ))}
      </div>
    </div>
  </section>

  <section id="all-game-guides" className="bg-gray-50 px-4 py-16 scroll-mt-24">
    <div className="container mx-auto max-w-6xl">
      <div className="mb-10 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-purple-600">
          All Game Guides
        </p>
        <h2 className="mb-3 text-3xl font-bold text-gray-900">Browse every game guide hub</h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Looking for a specific game? Browse all available game guide hubs, walkthrough clusters, and
          completion pages from one place.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {allGameGuides.map((game) => (
          <Link
            key={`${game.title}-${game.href}`}
            href={game.href}
            className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-200 hover:shadow-md"
          >
            <span className="font-semibold text-gray-800 group-hover:text-purple-700">
              {game.title}
            </span>
            <span className="text-sm font-semibold text-purple-500">View →</span>
          </Link>
        ))}
      </div>
    </div>
  </section>

  <section id="guide-content" className="bg-white px-4 pb-16 pt-20 scroll-mt-24">
    <div className="container mx-auto max-w-4xl">
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-purple-600">
          Featured Complete Guide
        </p>
        <h2 className="mb-4 text-3xl font-bold text-gray-900">
          Whisper of the House Complete Guide
        </h2>
        <p className="text-lg text-gray-600">
          Master organization, uncover hidden secrets, collect furniture, improve scores, and understand the
          core systems of Whisper of the House.
        </p>
      </div>

      <WhisperOfTheHouseGuide />
    </div>
  </section>

  <section className="bg-gray-100 px-4 py-16">
    <div className="container mx-auto max-w-6xl">
      <div className="mb-10 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-purple-600">
          Explore More
        </p>
        <h2 className="mb-3 text-3xl font-bold text-gray-900">Find the right guide faster</h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Use collections for broad discovery, latest updates for fresh articles, or the full index when you
          already know the game you want.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {exploreCards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="flex flex-col rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="mb-3 text-2xl font-bold text-gray-800">{card.title}</h3>
            <p className="flex-grow text-gray-600">{card.description}</p>
            <span
              className={`mt-5 rounded-lg px-4 py-2 text-center font-medium text-white transition-colors duration-300 ${card.buttonClass}`}
            >
              {card.cta}
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
</Layout>

);
}
