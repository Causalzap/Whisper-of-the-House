// 文件名: page.tsx
import { Metadata } from 'next';
import YesIAmAlonePillarPage from './YesIAmAlonePillarPage'; // 建议将组件名也统一，或者保持原样

// Data structure for the YES, I'M ALONE. page
const YesIAmAloneData = {
  hero: {
    title: "YES, I'M ALONE. Survival Horror Guide: All Endings & Walkthrough",
    subtitle: "Facing the stranger lurking outside your door — can you survive when trust itself becomes deadly in this psychological thriller?",
    imageUrl: "/images/yes-i-am-alone-hero.jpg"
  },
  intro: [
    "YES, I'M ALONE. is a psychological survival visual novel that places players in a relentless atmosphere of paranoia, isolation, and moral uncertainty. Instead of relying on cheap jump scares, the game builds tension through distrust and fragmented information.",
    "Developed as a solo passion project using the Ren'Py engine, this title challenges your perception of reality. You must decide whether to trust the 'Pale Visitor' at your door, knowing that every choice leads toward one of the nine distinct and often haunting endings.",
  ],
  gameplay: [
    { id: "psychological", title: "🧠 Psychological Horror", description: "Experience fear born from doubt. The game focuses on the slow erosion of safety rather than just sudden shocks.", icon: "👁️" },
    { id: "endings", title: "📉 9 Unique Outcomes", description: "With 5 Bad, 1 Bad?, 1 Brutal, and 2 Good endings, your moral compass determines your final fate.", icon: "🎭" },
    { id: "solo-dev", title: "🎨 Solo Passion Project", description: "A cohesive, atmospheric experience with original Beepbox music and a tightly controlled narrative pace.", icon: "🕹️" }
  ],
  guide: {
    guideTitle: "Surviving the Night: YES, I'M ALONE. Strategy Guide",
    steps: [
      { 
        step: 1,
        title: "Embrace the Paranoia",
        detail: "In your first playthrough, pay close attention to the dialogue nuances. The game doesn't provide a safety net or an ending gallery. Your primary goal is to establish a 'logic' for your character—will you be irrationally hostile, or dangerously trusting?",
        image: "/images/yes-i-am-alone/yes-i-am-alone-distorted-tv-news-warning.webp",
        imageAlt: "A distorted TV news broadcast in YES, I'M ALONE featuring a cryptic warning symbol and an unsettling anchor."
      },
      { 
        step: 2, 
        title: "The Pale Visitor Interaction",
        detail: "The 'Pale Visitor' is the game's central enigma. To unlock specific endings, you must be consistent. Constant flip-flopping between trusting and resisting usually leads to a generic Bad Ending. Watch their reactions to your questions carefully.",
        image: "/images/yes-i-am-alone/pale-visitor-smiling-face-interaction.webp",
        imageAlt: "A close-up of the Pale Visitor with an unsettling grin, highlighting the core trust-based gameplay in YES, I'M ALONE."
      },
      { 
        step: 3, 
        title: "Managing Sudden Events",
        detail: "While the focus is psychological, there are sudden camera shifts and intense jump scares that cannot be disabled. Keep your volume balanced; the Beepbox soundtrack uses minimalist loops to heighten tension right before a scare occurs.",
        image: "/images/yes-i-am-alone/yes-i-am-alone-jump-scare-distorted-smile.webp",
        imageAlt: "A terrifyingly distorted close-up of the Pale Visitor's face, used as a sudden jump scare in the game."
      },
      { 
        step: 4, 
        title: "Hunting for the Good Endings",
        detail: "The two 'Good' endings are notoriously difficult to find. They require a specific balance of empathy and self-preservation. You will likely need to fail several times to understand the Pale Visitor's true motives before you can reach redemption.",
        image: "/images/yes-i-am-alone/yes-i-am-alone-armed-confrontation-choice.webp",
        imageAlt: "A high-stakes choice scene where the protagonist is armed, leading toward survival or a brutal ending."
      },
      { 
        step: 5, 
        title: "Triggering the Brutal Ending",
        detail: "For those seeking the 'Brutal' outcome, you must choose the most confrontational and aggressive options at every turn. This path reveals a different, more violent side of the narrative and the protagonist.",
        image: "/images/yes-i-am-alone/yes-i-am-alone-mourner-brutal-ending-scream.webp",
        imageAlt: "The character Mourner screaming in agony as the sun rises, depicting a dramatic climax and one of the nine endings."
      },
      { 
        step: 6, 
        title: "Replayability & Observation",
        detail: "Since there is no progress tracker, take notes of your major choices. Small changes in how you respond to the visitor's presence can butterfly-effect into completely different late-game scenarios.",
        image: "/images/yes-i-am-alone/yes-i-am-alone-isolated-house-night.webp",
        imageAlt: "A small, isolated house on a hill at night, representing the psychological horror atmosphere of YES, I'M ALONE."
      },
    ],
  },
  features: [
    { title: "Atmosphere Over Spectacle", detail: "Uses minimalist design and sound to create a crushing sense of dread." },
    { title: "Branching Narrative", detail: "9 endings ensure that no two players have the exact same emotional journey." },
    { title: "Standalone Story", detail: "Complete experience that doesn't require playing any previous titles to understand." },
    { title: "International Support", detail: "Fully localized in English, Spanish, and Russian." },
    { title: "Ren'Py Engine Stability", detail: "Classic VN mechanics with high performance and easy save management." }
  ],
  ratings: [
    { score: "9.0/10", category: "Atmosphere", desc: "Masterful use of isolation and tension" },
    { score: "8.5/10", category: "Replayability", desc: "9 endings offer great value for a solo project" },
    { score: "8.0/10", category: "Sound Design", desc: "Unsettling Beepbox loops" },
    { score: "8.5/10", category: "Narrative", desc: "A deep dive into mistrust and paranoia" }
  ],
  cta: {
    title: "Can You Survive the Isolation?",
    linkText: "Check out YES, I'M ALONE. on itch.io / Steam",
    linkUrl: "#" // Replace with actual game link
  }
};

const guideData = [
  {
    id: "1",
    title: "YES, I'M ALONE. All Endings Guide: How to Get Every Outcome",
    slug: "how-to-get-all-endings-yes-im-alone",
    excerpt: "A complete walkthrough covering all 9 endings, from the 5 Bad endings to the elusive Good endings.",
    description: "Stuck in a loop of Bad endings? Our comprehensive guide breaks down the choice logic needed to unlock all 9 conclusions, including the Brutal and Good paths.",
    category: "Game Guide",
    readTime: "12 min",
    publishedAt: "2025-12-10",
    imageUrl: "/images/yes-i-am-alone/yes-i-am-alone-all-endings.webp",
    difficulty: "intermediate",
    tags: ["Endings", "Walkthrough", "Secrets"]
  }
];

const BASE_URL = 'https://www.whisperofthehouse.com';

export const metadata: Metadata = {
  title: YesIAmAloneData.hero.title,
  description: 
    "Master YES, I'M ALONE. with our comprehensive guide. Learn how to unlock all 9 endings, navigate psychological horror elements, and survive the Pale Visitor in this solo-developed visual novel.",
  alternates: {
    canonical: `${BASE_URL}/i-am-alone`,
  },
  openGraph: {
    title: YesIAmAloneData.hero.title,
    description: "Can you survive the stranger at your door? Explore our full guide to YES, I'M ALONE. including ending walkthroughs and lore analysis.",
    images: [
      {
        url: `${BASE_URL}${YesIAmAloneData.hero.imageUrl}`,
        width: 1200, 
        height: 630, 
        alt: "YES, I'M ALONE. Game Guide"
      }
    ],
    type: 'article',
  },
  keywords: ["YES I'M ALONE", "Survival Horror", "Visual Novel Guide", "All Endings Walkthrough", "Psychological Horror"],
};

export default function YesIAmAlonePage() {
  return (
    <YesIAmAlonePillarPage 
      yesIAmAloneData={YesIAmAloneData}
      guideData={guideData}
    />
  );
}