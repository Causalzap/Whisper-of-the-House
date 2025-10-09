// lib/games.ts
import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';

type BaseDetail = {
  slug: string;
  title: string;
  subtitle?: string;
  thumbnail: string;
  tags: string[];
  iframe: string;
  description: string;
  videoId:string | null;
  videoTitle: string | null;
  Guide: ComponentType<any>;
};

// 小工具：让对象字面量保留字面量键类型
function defineGames<T extends Record<string, BaseDetail>>(t: T) {
  return t;
}

// 1) 先定义值（不要在这里引用 GameSlug、GameMeta 这类类型）
export const GAMES = defineGames({
  'home-design': {
    slug: 'home-design',
    title: 'Home Design Small House',
    subtitle: 'Create your dream home with endless possibilities',
    thumbnail: '/images/home-design-logo.jpeg',
    tags: ['Design', 'Casual', 'Creative'],
    iframe: 'https://html5.gamedistribution.com/2752a06ef4f9406cbbe85d3f78096d25/?gd_sdk_referrer_url=https://www.whisperofthehouse.com/play-online',
    description: 'Organize rooms, uncover secrets, and design the perfect cozy home.',
    videoId:null,
    videoTitle:null,
    Guide: dynamic(() => import('@/content/guides/home-design.mdx')),
  },
  'papas-wingeria': {
    slug: 'papas-wingeria',
    title: "Papa's Wingeria",
    subtitle: 'Maximize Scores and Perfect Orders with Expert Tips',
    thumbnail: '/images/papas-wingeria-logo.jpeg',
    tags: ['Strategy', 'Puzzle', 'Casual'],
    iframe: 'https://www.gameflare.com/embed/papas-wingeria/',
    description: 'Master Papa\'s Wingeria! Learn core scoring mechanics, high-score recipes (Calypso/Bleu Cheese), advanced plating strategies, and the best Shop upgrades to serve every Closer and Food Critic perfectly. Get 100/100/100 on every order!',
    videoId:'BMqD6mgCPQo',
    videoTitle:'Papa\'s Wingeria - Day 100 as a Perfect Day',
    Guide: dynamic(() => import('@/content/guides/papas-wingeria.mdx')),
  },
  'steal-brainrot': {
    slug: 'steal-brainrot',
    title: "Steal a Brainrot",
    subtitle: 'Maximize Scores and Perfect Steals with Expert Tips',
    thumbnail: '/images/steal-brainrot-logo.jpeg',
    tags: ['Strategy', 'Casual', 'Cozy'],
    iframe: 'https://www.gamenora.com/splash/steal-a-brainrot/',
    description: 'Advanced tactics, Brainrot mechanics mastery, rare item routes, Braintorts economy, Rebirth timing, base traps, and delivery outbids.',
    videoId:'KKj3cY7AFw0',
    videoTitle:'I Spent 7 Days In Steal A Brainrot!',
    Guide: dynamic(() => import('@/content/guides/steal-brainrot.mdx')),
  },
  'vikings-an-archers-journey': {
      slug: 'vikings-an-archers-journey',
      title: "Vikings: An Archer's Journey — Master Guide",
      subtitle: 'Maximize Scores, Perfect Shots, and Endless Runs',
      thumbnail: '/images/vikings-an-archers-journey-logo.jpeg',
      tags: ['Arcade', 'Runner', 'Action'],
      iframe: 'https://html5.gamedistribution.com/df8a3f16d8f546b8b607dfa38d856478/?gd_sdk_referrer_url=https://www.roundgames.net/adventure-games/vikings-an-archers-journey/',
      description:
        'Advanced tactics, combo multiplier mastery, optimal rune routes, coin economy, rebirth timing, trap management, and boss kiting for flawless high-score runs.',
      videoId:'6rJNeypDT2c',
      videoTitle:'Vikings: An Archer’s Journey Game - GamePlay Walkthrough',
      Guide: dynamic(() => import('@/content/guides/vikings-an-archers-journey.mdx')),
  },
  'tree-house-maker': {
      slug: 'tree-house-maker',
      title: 'Tree House Maker — Master Guide',
      subtitle: 'Master Stability, Anchors & Wind Sway Physics',
      thumbnail: '/images/tree-house-maker-logo.jpeg',
      tags: ['Building', 'Physics', 'Puzzle', 'Cozy'],
      iframe: 'https://st.8games.net/7/8g/igra-mejker-domikov-na-dereve/',
      description:
        'Build the ultimate treetop hideout in Tree House Maker! Learn expert strategies for triangles vs. rectangles, minimizing cantilevers, placing support anchors, and taming Wind Sway. Includes Challenge Mode solutions, Unblocked tips, and troubleshooting.',
      videoId:null,
      videoTitle:null,
      Guide: dynamic(() => import('@/content/guides/tree-house-maker.mdx')),
    },
    'horseshoeing': {
      slug: 'horseshoeing',
      title: 'Horse Shoeing Game — Ultimate Farrier & Care Simulation Guide',
      subtitle: 'Master Nail Hammering, Hoof Cleaning & Unlock All Days',
      thumbnail: '/images/horseshoeing-logo.jpeg',
      tags: ['Simulation', 'Horse Care', 'Skill', 'Time Management'],
      iframe: 'https://dateeverythinggame.com/loader.php?id=46859',
      description:
        'Complete walkthrough for Horse Farrier Simulation. Learn advanced hoof cleaning, nail hammering precision, upgrade priorities, and how to achieve perfect scores across all 30 days.',
      videoId:null,
      videoTitle:null,
      Guide: dynamic(() => import('@/content/guides/horseshoeing.mdx')),
    },
    'panda-resort': {
      slug: 'panda-resort',
      title: 'Panda Resort — Ultimate Management & Care Simulation Guide',
      subtitle: 'Master Facility Upgrades, Guest Satisfaction & Unlock All Achievements',
      thumbnail: '/images/panda-resort-logo.jpeg',
      tags: ['Simulation', 'Management', 'Strategy', 'Time Management','Cozy Game'],
      iframe: 'https://www.mathdiploma.com/gf/panda-resort/43/?language=en&until=12&2',
      description:
        'Complete walkthrough for Panda Resort game. Learn advanced guest satisfaction strategies, facility upgrade priorities, staff training, and how to achieve perfect scores across all levels.',
      videoId:'JTRjYZLSr3I',
      videoTitle:'Panda resort game (level 2)',
      Guide: dynamic(() => import('@/content/guides/panda-resort.mdx')),
    },
    'puppet-master': {
      slug: 'puppet-master',
      title: 'Puppet Master — Ultimate Combat Strategy & Weapon Guide',
      subtitle: 'Master Weapon Combos, Trap Layouts & Maximize Coin Farming Efficiency',
      thumbnail: '/images/puppet-master-logo.jpeg',
      tags: ['Action', 'Strategy', 'Combat', 'Resource Management', 'Skill-Based', 'Cozy Game'],
      iframe: 'https://freezenova.com/games/puppet-killer/unblocked.html',
      description:
        'Complete combat guide for Puppet Master game. Learn advanced weapon strategies, optimal trap combinations, coin farming techniques, and how to defeat all enemy types.',      
      videoId:'Now1mJCMH8M',
      videoTitle:'Puppet Master, Gameplay',
      Guide: dynamic(() => import('@/content/guides/puppet-master.mdx')),
    },
    'blumgi-slime': {
      slug: 'blumgi-slime',
      title: 'Blumgi Slime — Ultimate Platformer Guide & All Levels Walkthrough',
      subtitle: 'Master Perfect Jump Mechanics, Find All Hidden Skins & Clear 150 Levels',
      thumbnail: '/images/blumgi-smile-logo.jpeg',
      tags: ['Platformer', 'Puzzle', 'Precision', 'Casual', 'Skill-Based', 'Cozy Game'],
      iframe: 'https://ext.minijuegosgratis.com/blumgi-slime/index.html?key=pog&amp;value=defaultt',
      description:
        'Complete guide for Blumgi Slime game. Learn advanced jumping techniques, level solutions for all 150 stages, hidden collectibles locations, and achievement strategies.',      
        videoId:null,
        videoTitle:null,
        Guide: dynamic(() => import('@/content/guides/blumgi-slime.mdx')),
    },
    'grow-a-garden': {
        slug: 'grow-a-garden',
        title: 'Grow A Garden — Ultimate Farming Simulator Guide & All Tips and Tricks',
        subtitle: 'Maximize Crop Yields, Trigger Rare Mutations, Master Weather Mechanics, and Complete All Achievements',
        thumbnail: '/images/grow-a-garden-logo.jpeg',
        tags: ['Farming', 'Simulation', 'Casual', 'Strategy', 'Puzzle', 'Cozy Game'],
        iframe: 'https://growden.io/',
        description: 
        'Comprehensive guide for Grow A Garden. Learn the best crop strategies, rare mutation triggers, weather mechanics, and how to farm efficiently for gold and pets.',
        videoId:null,
        videoTitle:null,
        Guide: dynamic(() => import('@/content/guides/grow-a-garden.mdx')),
    },
  

});

// 2) 再从值里“反推出”类型（此处不会形成循环）
export type GameSlug = keyof typeof GAMES;
export type GameDetail = (typeof GAMES)[GameSlug];
export type GameMeta = Pick<GameDetail, 'slug' | 'title' | 'subtitle' | 'thumbnail' | 'tags'>;

// 3) 列表页可直接用的精简列表
export const ALL_GAMES: GameMeta[] = Object.values(GAMES).map(
  ({ slug, title, subtitle, thumbnail, tags }) => ({
    slug, title, subtitle, thumbnail, tags,
  })
);

// 4) 常用工具
export const getGame = (slug: string) => GAMES[slug as GameSlug] ?? null;
export const getGuide = (slug: string) => getGame(slug)?.Guide ?? null;
export const getStaticParams = () => Object.keys(GAMES).map((slug) => ({ slug }));
