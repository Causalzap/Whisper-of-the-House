// 文件名: page.tsx
import { Metadata } from 'next';
import WinterBurrowPillarPage from './WinterBurrowPillarPage';

// Data structure for the page
const WinterBurrowData = {
  hero: {
    title: "【Winter Burrow】Cozy and Healing Forest Survival: Complete Guide and Review",
    subtitle: "Play as a returning mouse, rebuilding your childhood home in the frozen Nordic forest. Enjoy a peaceful and therapeutic light-survival adventure.",
    imageUrl: "/images/winter-burrow-hero.jpg"
  },
  intro: [
    "Winter Burrow is a cozy and healing forest survival game. Players take on the role of a mouse returning from the big city to its dilapidated childhood home deep within the frozen Nordic forest.",
    "Your mission is not only to scavenge for supplies and craft tools to survive the harsh winter, but also to personally transform this old burrow into a comfortable and safe sanctuary. You will live life from the unique perspective of a small forest mouse: knitting warm sweaters to ward off the cold, baking pies, and brewing hot tea to stay fed and warm. Meet local residents, search for clues, and uncover the mysterious disappearance of your aunt.",
  ],
  gameplay: [
    { id: "rebuild", title: "🏡🏡 Cozy Home Renovation", description: "Restore your dilapidated childhood burrow to its former glory so you can relax by the fireplace. At the same time, search for your missing aunt.", icon: "🏠🏠" },
    { id: "explore", title: "❄❄️ Exploring the Frozen Wilderness", description: "Brave the harsh weather and venture into the frozen wilderness to gather essential resources for yourself and your new home. Watch out for insects and wildlife, find new friends, and solve the mystery of your aunt's disappearance.", icon: "🌲🌲" },
    { id: "survival", title: "✨ Accessible and Comfortable Survival", description: "Winter Burrow is a survival game you can play at your own pace. Customize your character, decorate your burrow, and choose the path that suits your play style.", icon: "🐭🐭" }
  ],
  guide: {
    guideTitle: "First Winter Survival Guide: Winter Burrow",
    steps: [
      { 
        step: 1,
        title: "Night One: Avoid the Deadly Cold",
        detail: "When you start the game, don't leave your home at night. The cold is lethal, and your mouse can die within seconds. Instead of exploring, it's safer to sleep until morning to avoid freezing. During the daytime, you can go out to gather materials with much lower risk. On your very first night, the game will ask you to collect a few sticks inside the house to light the fireplace. If your mouse starts to feel cold, simply move closer to a heat source to warm up and restore body temperature.",
        image: "/images/winter-burrow/winter-burrow-first-night-fireplace-cooking.webp",
        imageAlt: "Winter Burrow first night tips showing the mouse staying indoors by the fireplace to avoid freezing, with the cooking menu open."
      },
      { 
        step: 2, 
        title: "First Goal: Repair the Armchair",
        detail: "When you arrive, your burrow is in terrible shape. One of your **top priorities** is to **repair the armchair**. Doing so lets you: **knit a sweater**, which is essential for surviving the cold, and **rest more effectively** to recover energy and avoid penalties. **Tip:** Before attempting any long expeditions, gather the basic materials nearby first.",
        image: "/images/winter-burrow/winter-burrow-repair-armchair-knitting-menu.webp",
        imageAlt: "Winter Burrow first goal guide showing the mouse sitting on the repaired armchair with the knitting menu open to craft wool yarn."
      },
      { 
        step: 3, 
        title: "Understanding the Survival Systems",
        detail: "Winter Burrow has four key survival meters: **Stamina** — consumed when chopping, running, or doing tasks; **Hunger** — keep it up by eating regularly; **Warmth** — stay bundled up or remain indoors to avoid freezing; and **Breath** — drained when using tools like an axe or pickaxe, or performing strenuous actions. If **any** of these meter reaches **zero**, your mouse will be punished and may even die.",
        image: "/images/winter-burrow/winter-burrow-survival-stats-freezing-warning.webp",
        imageAlt: "Winter Burrow survival systems overview showing the freezing danger screen when stamina, hunger, warmth, or breath runs out."
      },
      { 
        step: 4, 
        title: "The Crafting and Gathering Loop",
        detail: "The core gameplay loop is: **gather resources → craft tools → unlock more resources**. Craft an **axe** early so you can chop wood and collect grass. Use those materials to **build or repair parts of your home**. Every upgrade unlocks **new areas and new tools**. **Tip:** It may feel repetitive at first, but each new tool greatly expands your exploration options.",
        image: "/images/winter-burrow/winter-burrow-early-game-crafting-gathering.webp",
        imageAlt: "Winter Burrow early-game gathering and crafting showing the mouse collecting resources outdoors to make tools and unlock new areas."
      },
      { 
        step: 5, 
        title: "Home Reconstruction and Exploration",
        detail: "As you progress, you'll be able to **repair and expand different parts of your burrow**, including: the **bridge** (which unlocks new areas of the map), the **second floor** (unavailable at the start), and **outdoor zones for gathering and farming**. These upgrades don't just make your base more comfortable — they **open up new paths for exploration and progression**.",
        image: "/images/winter-burrow/winter-burrow-explore-rebuild-burrow.webp",
        imageAlt: "Winter Burrow early exploration and home rebuilding showing the mouse outside the burrow while progressing to unlock upgrades and new areas."
      },
      { 
        step: 6, 
        title: "No Anxiety, No Pressure",
        detail: "The game has no time limit. You can progress at your own pace, plan your days, and enjoy the peaceful environment without worrying about deadlines.",
        image: "",
        imageAlt: ""
      },
    ],
  },
  features: [
    { title: "Light Survival, Low-Stress Experience", detail: "Moderate difficulty, no time pressure, suitable for players who enjoy casual survival games." },
    { title: "Core Mechanic: Cold Resistance Management", detail: "Cold resistance continuously drops when exploring outdoors, driving players to return home and craft warmer gear." },
    { title: "Resource and Return-Home Loop", detail: "No portable crafting station; processing and cooking must be done at home, strengthening the importance of 'home'." },
    { title: "Healing Art Style and Music", detail: "Hand-drawn art style is cozy and therapeutic, and the BGM perfectly matches the scene atmosphere, providing immersion." },
    { title: "Warm Narrative and Characters", detail: "Interactions between the mouse and its companions are heartwarming, and side quests enrich the world lore." }
  ],
  ratings: [
    { score: "8.5/10", category: "Art and Graphics", desc: "Cozy and healing hand-drawn style" },
    { score: "9.0/10", category: "Music and Sound", desc: "Highly atmospheric BGM" },
    { score: "8.0/10", category: "Gameplay", desc: "Light survival, easy to pick up" },
    { score: "8.5/10", category: "Story and Narrative", desc: "Warm and touching story" }
  ],
  cta: {
    title: "Start Your Winter Burrow Journey Now!",
    linkText: "Go to Steam Store / Learn More Platforms",
    linkUrl: "https://store.steampowered.com/app/3008740/Winter_Burrow/"
  }
};

// Guide data for the guides section
const guideData = [
  {
    id: "1",
    title: "Winter Burrow Early Survival & Pre-Mainline Walkthrough (Beginner-Friendly Guide)",
    slug: "winter-burrow-early-survival-guide",
    excerpt: "A complete, accuracy-verified pillar guide for new players",
    description: "A comprehensive early-game crafting and survival guide for Winter Burrow, covering essential tools, workstations, cold-resistance gear, resource management, and upgrade paths needed to stabilize your base, unlock the basement, craft snowshoes, and progress safely toward the main storyline.",
    category: "Game Guide",
    readTime: "8 min",
    publishedAt: "2025-12-05",
    imageUrl: "/images/winter-burrow/winter-burrow-guide-cover.jpg",
    difficulty: "beginner",
    tags: ["Beginner", "Survival", "Guide", "Winter Burrow"]
  },
  {
    id: "2",
    title: "Winter Burrow Owl Chase Chapter (Part 2) Survival Guide",
    slug: "winter-burrow-owl-chase-part2-guide",
    excerpt: "This guide is designed for players who have completed the early-game setup—crafted basic Warmth gear, established a functioning Burrow base, and triggered the forced Owl abduction cutscene.",
    description: "A complete guide to surviving the Owl Chase chapter in Winter Burrow, covering harsh weather, Bofo's quests, Shadow Pines region, and essential tool upgrades for mid-game progression.",
    category: "Game Guide",
    readTime: "10 min",
    publishedAt: "2025-12-06",
    imageUrl: "/images/winter-burrow/winter-burrow-owl-chase-guide-cover.jpg",
    difficulty: "intermediate",
    tags: ["Crafting", "Tools", "Upgrades"]
  },
  {
    id: "3",
    "title": "Winter Burrow: \"Gnawtusk To The Rescue\" Chapter Walkthrough",
    "slug": "winter-burrow-gnawtusk-rescue-chapter-guide",
    "excerpt": "The \"Gnawtusk To The Rescue\" chapter centers on progressing through the frigid Shadow Pines region, upgrading tools through the squirrel's Stash tasks, and uncovering the clues needed to reach the owl's nest and bring Auntie home safely.",
    "description": "Complete walkthrough for Winter Burrow's 'Gnawtusk To The Rescue' chapter. Learn how to survive Shadow Pines, complete squirrel stash quests, craft the lantern, rescue Auntie, and upgrade your base with wool trousers and second-floor expansion.",
    "category": "Game Guide",
    "readTime": "12 min",
    "publishedAt": "2025-12-07",
    "imageUrl": "/images/winter-burrow/winter-burrow-gnawtusk-guide-cover.jpg",
    difficulty: "intermediate",
    tags: ["Characters", "NPCs", "Relationships"]
  },
  {
    id: "4",
    "title": "Winter Burrow - \"Bufo's Request: Part 4\" Main Story & Base Upgrade Guide",
    "slug": "winter-burrow-bufo-request-part4-guide",
    "excerpt": "The fourth part of the \"Bufo's Request\" storyline centers on restoring Auntie's condition, upgrading tools to the Granite tier, and expanding several core functions of the Burrow.",
    "description": "Complete walkthrough for Winter Burrow's 'Bufo's Request: Part 4' main story. Learn how to heal Auntie, craft Granite tools, upgrade your base, and unlock the search for Poliwog. Essential guide for base expansion and survival gear upgrades.",
    "category": "Game Guide",
    "readTime": "15 min",
    publishedAt: "2025-12-08",
    imageUrl: "/images/winter-burrow/winter-burrow-bufo-request-part4-cover.jpg",
    difficulty: "intermediate",
    tags: ["Characters", "NPCs", "Relationships"]
  },
  {
    id: "5",
    "title": "Winter Burrow - \"Finding Poliwog\" Complete Walkthrough",
    "slug": "winter-burrow-finding-poliwog-walkthrough",
    "excerpt": "The \"Finding Poliwog\" storyline focuses on locating Poliwog, resolving the emotional conflict between him and Bufo, and completing a sequence of gathering and crafting tasks that ultimately lead to reconciliation.",
    "description": "Complete Winter Burrow 'Finding Poliwog' walkthrough. Learn how to locate Poliwog, gather Rowanberries in Frozen Horizons, craft the reconciliation pie, and bring Bufo's family back together. Essential tips for navigating cold caverns and avoiding threats.",
    "category": "Game Guide",
    "readTime": "10 min",
    publishedAt: "2025-12-09",
    imageUrl: "/images/winter-burrow/winter-burrow-finding-poliwog-cover.jpg",
    difficulty: "intermediate",
    tags: ["Characters", "NPCs", "Relationships"]
  }
];

// ===============================================
// 导出 SEO (Metadata) 对象
// ===============================================

const BASE_URL = 'https://www.whisperofthehouse.com'; // 请替换为实际域名

export const metadata: Metadata = {
  // Title: This will override the default from layout.tsx
  // Since WinterBurrowData.hero.title is in English, we use it directly.
  title: WinterBurrowData.hero.title, // "【Winter Burrow】Cozy and Healing Forest Survival: Complete Guide and Review" (assuming this is kept as is)
  
  // Description (Using the user's provided English translation from the previous step)
  description: 
    'Winter Burrow is a cozy and therapeutic forest survival game. You play as a little mouse rebuilding your childhood home in the frozen Nordic forest while exploring clues and searching for your missing aunt. Includes a detailed beginner\'s survival guide and gameplay review.',

  // Canonical Tag: Specifies the preferred URL for this page
  alternates: {
    canonical: `${BASE_URL}/winter-burrow`, // Keeping the user's specified path
  },
  
  // Open Graph Tags (for social media sharing)
  openGraph: {
    // Title: Using the page title
    title: WinterBurrowData.hero.title,
    
    // Description: Using the longer English description for better social media context
    description: 'Winter Burrow is a cozy and therapeutic forest survival game. You play as a little mouse rebuilding your childhood home in the frozen Nordic forest while exploring clues and searching for your missing aunt. Includes a detailed beginner\'s survival guide and gameplay review.',
    
    // Image
    images: [
      {
        url: `${BASE_URL}${WinterBurrowData.hero.imageUrl}`,
        width: 1200, 
        height: 630, 
        alt: WinterBurrowData.hero.title
      }
    ],
    type: 'article',
  },
  
  // Keywords
  keywords: ['Winter Burrow', 'Cozy Game', 'Survival', 'Winter Burrow Guide', 'Light Survival'],
};

// ===============================================
// 默认导出组件
// ===============================================

export default function WinterBurrowPage() {
  return (
    // 将数据作为 Props 传递给组件
    <WinterBurrowPillarPage 
      winterBurrowData={WinterBurrowData}
      guideData={guideData}
    />
  );
}