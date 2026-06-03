import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BeginnerGuideContent from "@/data/fatekeeper/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/fatekeeper/beginner-guide`;

const imageUrls = [
  `${siteUrl}/images/fatekeeper/fatekeeper-haven-start.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-skill-tree-overview.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-blade-vs-axe-stats.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-portal-training.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-combat-block-tutorial.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-combat-kick-guard-break.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-telekinesis-pull.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-telekinesis-search-mode.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-alchemy-table.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-ancient-hallways.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-ornate-copper-key-door.webp`,
  `${siteUrl}/images/fatekeeper/fatekeeper-ring-of-life-pickup.webp`,
];

const toc = [
  { id: "first-hour-roadmap", label: "First hour roadmap" },
  { id: "explore-haven", label: "Explore Haven" },
  { id: "starting-weapons", label: "Blade vs Axe" },
  { id: "portal-training", label: "Portal training" },
  { id: "combat-basics", label: "Combat basics" },
  { id: "telekinesis", label: "Telekinesis" },
  { id: "alchemy", label: "Alchemy" },
  { id: "ancient-hallways", label: "Ancient Hallways" },
  { id: "npc-rescue", label: "NPC rescue" },
  { id: "first-build", label: "First build" },
  { id: "common-mistakes", label: "Common mistakes" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/fatekeeper",
    label: "Fatekeeper Guide Hub",
  },
  {
    href: "/fatekeeper/best-build",
    label: "Fatekeeper Best Builds Guide",
  },
  {
    href: "/fatekeeper/best-weapons",
    label: "Fatekeeper Best Weapons Guide",
  },
  {
    href: "/fatekeeper/best-spells",
    label: "Fatekeeper Best Spells Guide",
  },
  {
    href: "/fatekeeper/boss-guide",
    label: "Fatekeeper Boss Guide",
  },
];

export const metadata: Metadata = {
  title: "Fatekeeper Beginner Guide: First Hour Tips & Route",
  description:
    "Start Fatekeeper the right way: explore Haven, compare Blade vs Axe, train block and kick, craft potions, find Ring of Life, and enter Ancient Hallways prepared.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Fatekeeper Beginner Guide: First Hour Route, Weapons, Skills and Ancient Hallways",
    description:
      "Use this Fatekeeper beginner route to explore Haven, compare starting weapons, learn portal training, craft at the alchemy table, and survive Ancient Hallways.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Fatekeeper opening path toward Haven with the player HUD visible.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fatekeeper Beginner Guide: First Hour Tips",
    description:
      "Follow the first-hour route from Haven to Ancient Hallways with weapon, skill, stamina, telekinesis, alchemy, and Ring of Life tips.",
    images: [imageUrls[0]],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Fatekeeper Guide",
          item: `${siteUrl}/fatekeeper`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Beginner Guide",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      headline:
        "Fatekeeper Beginner Guide: First Hour Route, Haven, Portal Training, Weapons, Alchemy and Ancient Hallways",
      description:
        "A player-focused Fatekeeper beginner guide for the first hour of Early Access. The guide explains the safest opening route from Haven to portal training, the alchemy table and Ancient Hallways, with practical tips for Blade of the Sentinel vs Axe of the Sentinel, stamina management, block timing, kick guard breaks, telekinesis use cases, Ornate Copper Key routing, Ring of Life, NPC rescue, early skill point spending, respec notes and common beginner mistakes.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-03",
      dateModified: "2026-06-03",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Fatekeeper" },
        { "@type": "Thing", name: "Fatekeeper beginner guide" },
        { "@type": "Thing", name: "Fatekeeper first hour" },
        { "@type": "Thing", name: "Fatekeeper Haven" },
        { "@type": "Thing", name: "Fatekeeper portal training" },
        { "@type": "Thing", name: "Fatekeeper Ancient Hallways" },
        { "@type": "Thing", name: "Blade of the Sentinel" },
        { "@type": "Thing", name: "Axe of the Sentinel" },
        { "@type": "Thing", name: "Fatekeeper stamina" },
        { "@type": "Thing", name: "Fatekeeper block" },
        { "@type": "Thing", name: "Fatekeeper kick" },
        { "@type": "Thing", name: "Fatekeeper telekinesis" },
        { "@type": "Thing", name: "Fatekeeper alchemy" },
        { "@type": "Thing", name: "Ornate Copper Key" },
        { "@type": "Thing", name: "Ring of Life" },
        { "@type": "Thing", name: "NPC rescue" },
        { "@type": "Thing", name: "Fatekeeper respec" },
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      publisher: {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best first-hour route in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use this route: explore Haven, complete portal training, craft at the alchemy table, then enter Ancient Hallways. In Haven, compare Blade of the Sentinel and Axe of the Sentinel before spending points. In Ancient Hallways, look for the Ornate Copper Key, Ring of Life, side paths and NPC rescue opportunities.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use Blade of the Sentinel or Axe of the Sentinel?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use Blade of the Sentinel if you want higher listed starting damage. It has 5 attack costs, 5 dash costs and 30 slash damage. Axe of the Sentinel has the same listed costs but 20 slash damage, making it a simpler one-handed option if that rhythm feels better.",
          },
        },
        {
          "@type": "Question",
          name: "How much stamina should I keep in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Keep at least one third of your stamina bar before an enemy swing connects. If you cannot dodge or block after attacking, your attack string was too long.",
          },
        },
        {
          "@type": "Question",
          name: "When is telekinesis better than attacking?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use telekinesis when a group is in a corridor, when a dangerous enemy is just outside melee range, when you need time to heal, or when an object is highlighted for search mode.",
          },
        },
        {
          "@type": "Question",
          name: "How does telekinesis search mode work?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Switch to telekinesis, hold search mode, hover over a valid target, then release to interact. Use it on highlighted objects instead of trying to hit everything with your weapon.",
          },
        },
        {
          "@type": "Question",
          name: "How do I break enemy guard in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use kick when an enemy guards. If kick does not create an opening on a specific enemy, stop forcing it and reposition.",
          },
        },
        {
          "@type": "Question",
          name: "Is there an FOV setting in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "If you cannot find an FOV option in your current build, check the display and graphics menus first, then use lower motion settings or more comfortable display settings where available. If you are sensitive to first-person camera movement, take breaks and watch for Early Access updates.",
          },
        },
        {
          "@type": "Question",
          name: "Should I craft before Ancient Hallways?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Craft healing first, then mana support if you cast often. Poison, vials and weapon coatings become more useful once you understand the route.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the Ornate Copper Key in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Ornate Copper Key is in the early Ancient Hallways route after you first see the locked copper-key door. Push through the nearby lower or side route, pick up the key, then return to open the locked door.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Ring of Life in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Ring of Life appears early in Ancient Hallways around the first left-side corridor or ledge section after entering the area. It gives plus 5 health.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock more gear shop options in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Explore side rooms and rescue NPCs when the game gives you the chance. Rescued NPCs can return to Haven and unlock useful services, including gear shop options or skill point refund support.",
          },
        },
        {
          "@type": "Question",
          name: "Can I respec or refund skill points in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Early respecs are free at the Sanctuary of First Flame. Later respecs cost a rare resource found through exploration. Treat early points carefully until you know where the sanctuary is in your current build.",
          },
        },
        {
          "@type": "Question",
          name: "What should I spend my first skill points on in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "For most first-time players, use 2 health or survival nodes, 1 stamina node, then 3 points into your main weapon or spell route if those nodes are available.",
          },
        },
        {
          "@type": "Question",
          name: "What is the biggest beginner mistake in Fatekeeper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The biggest mistake is entering Ancient Hallways without preparation. Check weapons, learn portal training tools, craft before leaving Haven, and keep enough stamina to escape after attacking.",
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GuideArticlePage
          title="What Should You Do First in Fatekeeper?"
          description="Follow this first-hour route through Haven, portal training, alchemy prep and Ancient Hallways without wasting points or missing key early pickups."
          gameTitle="Fatekeeper"
          gameHref="/fatekeeper"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 3, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BeginnerGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
