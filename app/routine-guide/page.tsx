// 文件名: page.tsx
import { Metadata } from 'next';
import RoutinePillarPage from './RoutinePillarPage';

// Data structure for the page
const RoutineData = {
  hero: {
    title: "█ ROUTINE: Analog Horror Mastery on a Derelict Moon",
    subtitle: "Survival in ROUTINE is not about fighting. It is about understanding a world that has already decided you are the anomaly.",
    imageUrl: "/images/routine/lunar-base-hero.jpg"
  },
  intro: [
    "Set within an abandoned lunar base imagined through an 80s vision of the future, ROUTINE strips away every modern convenience. There are no icons to follow, no HUD to reassure you, and no system that exists outside the world itself.",
    "Between the flicker of CRT static, the resistance of heavy mechanical switches, and the cold hydraulic hiss of airlocks, every interaction feels deliberate—and exposed. This is not retro nostalgia. This is tactile futurity: a future our past once imagined, where technology is physical, slow, and unforgiving."
  ],
  gameplay: [
    { 
      id: "analog", 
      title: "█ Analog Futurism & Tactile Futurity", 
      description: "Terminals take time to boot. Buttons require commitment. Screens hum, flicker, and distort under signal decay. This design enforces vulnerability: interactions are slow by design, information is imperfect, and every action risks exposure.", 
      icon: "⌨️" 
    },
    { 
      id: "navigation", 
      title: "█ No-Waypoint Navigation", 
      description: "There is no path highlighted for you. Progression depends entirely on your ability to read the environment. Discovery is earned through deduction, turning confusion into investigative satisfaction rather than frustration.", 
      icon: "🧭" 
    },
    { 
      id: "cat", 
      title: "█ C.A.T. Protocol", 
      description: "The Cosmonaut Assistance Tool is not a weapon—it is a lifeline. It serves for interfacing with terminals, limited electrical overload against threats, and last-resort defense. Finite battery, overheating risk, and long recovery windows enforce restraint.", 
      icon: "🔧" 
    }
  ],
  guide: {
    guideTitle: "SURVIVAL LOG: Observation Over Reaction",
    steps: [
      { 
        step: 1,
        title: "Trust Your Ears (Diegetic Audio)",
        detail: "Sound is not atmosphere—it is information. The **scrape of metal signals patrol movement**. **Servo whine reveals proximity** before sight. **Alarm tones indicate system states**, not scripted danger. ROUTINE's diegetic audio functions as your most reliable navigation tool.",
        image: "",
        imageAlt: ""
      },
      { 
        step: 2, 
        title: "Systemic Horror: You Are the Variable",
        detail: "Enemies do not hunt you for drama. They **respond to anomalies**. **Movement, noise, and interference with systems** escalate threat perception. This creates systemic horror, where danger emerges from interaction rather than scripted events. **Observation always precedes survival**.",
        image: "/images/routine/systemic-horror-screenshot.jpg",
        imageAlt: "ROUTINE showing robotic enemies responding to player's actions and environmental interaction"
      },
      { 
        step: 3, 
        title: "The C.A.T. Protocol: Strategic Usage",
        detail: "The Cosmonaut Assistance Tool has multiple purposes but strict limitations. **Finite battery** means strategic charging. **Overheating risk** requires cool-down periods. **Long recovery windows** after use. Use it sparingly—if you rely on it too often, you will not last.",
        image: "/images/routine/cat-tool-screenshot.jpg",
        imageAlt: "ROUTINE C.A.T. tool interface showing battery level and overheating warnings"
      },
      { 
        step: 4, 
        title: "Non-Linear Lunar Investigation",
        detail: "The lunar base is not a sequence—it is a connected organism. **Living quarters, transit hubs, maintenance shafts, and abandoned commercial spaces** interlock organically. You choose your route, adapt to changing conditions, and gradually reconstruct what happened through absence rather than exposition.",
        image: "/images/routine/non-linear-map-screenshot.jpg",
        imageAlt: "ROUTINE map layout showing interconnected lunar base sections"
      },
      { 
        step: 5, 
        title: "Environmental Reading & Deduction",
        detail: "There are no waypoints. Progress depends on your ability to read: **Broadcast logs reference departments and locations**, **CRT terminals hint at system states and failures**, **Visual trails—damage, blood, displaced machinery—suggest past events**. The environment is your only map.",
        image: "/images/routine/environmental-storytelling-screenshot.jpg",
        imageAlt: "ROUTINE environmental storytelling through logs, terminals, and visual clues"
      },
    ],
  },
  features: [
    { 
      title: "Immersive Sim DNA", 
      detail: "Shares core DNA with immersive sims through systemic interaction, environmental problem-solving, and player-driven outcomes, expressed through horror rather than empowerment." 
    },
    { 
      title: "Diegetic Interface", 
      detail: "Completely uncompromising. There is no traditional interface. All information exists within the world itself, reinforcing a fully diegetic experience." 
    },
    { 
      title: "Systemic Threat Response", 
      detail: "Enemies respond to player-created anomalies rather than following scripted patterns, creating emergent, unpredictable horror scenarios." 
    },
    { 
      title: "Analog Aesthetic", 
      detail: "CRT displays, mechanical interfaces, and 80s retrofuturism create a unique visual identity that feels both nostalgic and unnervingly plausible." 
    },
    { 
      title: "Physical Interaction", 
      detail: "Every switch, terminal, and door requires deliberate physical interaction, slowing pace and increasing tension with every action." 
    }
  ],
  ratings: [
    { score: "9.5/10", category: "Atmosphere & Immersion", desc: "Uncompromising atmospheric tension" },
    { score: "9.0/10", category: "Audio Design", desc: "Masterful diegetic sound implementation" },
    { score: "8.5/10", category: "Gameplay Innovation", desc: "Revolutionary approach to horror mechanics" },
    { score: "9.0/10", category: "Art Direction", desc: "Consistent analog futurism aesthetic" }
  ],
  cta: {
    title: "Do you have the discipline to observe before you act?",
    linkText: "Initialize Exploration Protocol on Steam",
    linkUrl: "https://store.steampowered.com/app/606160/ROUTINE/"
  }
};

// Guide data for the guides section
const guideData = [
  {
    id: "1",
    title: "ROUTINE – Chapter 1: Birth: Complete Stealth Walkthrough & Survival Breakdown",
    slug: "chapter-1-birth-stealth-walkthrough",
    excerpt: "Master the first chapter of ROUTINE with this comprehensive stealth survival guide. Learn patrol patterns, C.A.T. management, and the core principles of analog horror gameplay.",
    category: "Survival Guide",
    readTime: "15 min",
    publishedAt: "2025-12-15",
    imageUrl: "/images/routine/chapter-one-walkthrough-header.webp",
    difficulty: "beginner",
    tags: ["Beginner", "Survival", "Navigation", "C.A.T. Tool"]
  },
  {
    id: "2",
    title: "ROUTINE Advanced Threat Analysis: Enemy Behavior Patterns",
    slug: "routine-advanced-threat-analysis",
    excerpt: "Comprehensive analysis of robotic enemy behavior and response systems",
    category: "Tactical Analysis",
    readTime: "12 min",
    publishedAt: "2025-12-06",
    imageUrl: "/images/routine/threat-analysis-cover.jpg",
    difficulty: "intermediate",
    tags: ["Enemies", "Stealth", "Tactics", "Behavior"]
  },
  {
    id: "3",
    title: "ROUTINE Environmental Investigation: Log Analysis & Clue Interpretation",
    slug: "routine-environmental-investigation",
    excerpt: "Mastering environmental storytelling and clue deduction in the lunar base",
    category: "Investigation Guide",
    readTime: "15 min",
    publishedAt: "2025-12-07",
    imageUrl: "/images/routine/investigation-guide-cover.jpg",
    difficulty: "intermediate",
    tags: ["Investigation", "Story", "Clues", "Deduction"]
  },
  {
    id: "4",
    title: "ROUTINE C.A.T. Protocol: Advanced Tool Management",
    slug: "routine-cat-protocol-advanced",
    excerpt: "Advanced techniques for maximizing C.A.T. tool efficiency and strategic deployment",
    category: "Tool Guide",
    readTime: "14 min",
    publishedAt: "2025-12-08",
    imageUrl: "/images/routine/cat-guide-cover.jpg",
    difficulty: "advanced",
    tags: ["C.A.T.", "Tools", "Battery", "Strategy"]
  },
  {
    id: "5",
    title: "ROUTINE: Non-Linear Base Navigation & Route Optimization",
    slug: "routine-non-linear-navigation",
    excerpt: "Mastering the interconnected lunar base layout for efficient exploration",
    category: "Navigation Guide",
    readTime: "18 min",
    publishedAt: "2025-12-09",
    imageUrl: "/images/routine/navigation-guide-cover.jpg",
    difficulty: "advanced",
    tags: ["Navigation", "Maps", "Routes", "Exploration"]
  },
  {
    id: "6",
    title: "ROUTINE: Non-Linear Base Navigation & Route Optimization",
    slug: "routine-non-linear-navigation",
    excerpt: "Mastering the interconnected lunar base layout for efficient exploration",
    category: "Navigation Guide",
    readTime: "18 min",
    publishedAt: "2025-12-09",
    imageUrl: "/images/routine/navigation-guide-cover.jpg",
    difficulty: "advanced",
    tags: ["Navigation", "Maps", "Routes", "Exploration"]
  }
];

// ===============================================
// 导出 SEO (Metadata) 对象
// ===============================================

const BASE_URL = 'https://www.whisperofthehouse.com'; // 请替换为实际域名

export const metadata: Metadata = {
  // Title: 强调交互工具属性
  title: "ROUTINE Tactical Data Hub | Interactive Mission Briefing & Tracker",
  
  // Description: 突出“任务追踪”和“实时协议”
  description: 
    "Access the high-fidelity ROUTINE Tactical Data Hub. An interactive mission briefing tool featuring real-time task tracking, security level protocols, and localized sector intelligence for lunar survival.",

  alternates: {
    canonical: `${BASE_URL}/routine-guide`,
  },
  
  openGraph: {
    title: "ROUTINE Tactical Data Hub | Interactive Mission Briefing",
    description: "The ultimate interactive field guide for ROUTINE. Track your objectives, synchronize security protocols, and navigate the derelict lunar base with systemic precision.",
    images: [
      {
        url: `${BASE_URL}${RoutineData.hero.imageUrl}`,
        width: 1200, 
        height: 630, 
        alt: "ROUTINE Tactical Interface Hub"
      }
    ],
    type: 'website', // 从 article 改为 website，更符合工具属性
  },
  
  // Keywords: 增加工具类关键词
  keywords: [
    'ROUTINE Mission Tracker', 
    'ROUTINE Tactical Briefing', 
    'Interactive Game Guide', 
    'Lunar Base Field Guide', 
    'ROUTINE Protocol Tool', 
    'Systemic Horror Tracker', 
    'C.A.T. Interface Guide',
    'Real-time Mission Objectives'
  ],
};

// ===============================================
// 默认导出组件
// ===============================================

export default function RoutinePage() {
  return (
    // 将数据作为 Props 传递给组件
    <RoutinePillarPage 
      routineData={RoutineData}
      guideData={guideData}
    />
  );
}