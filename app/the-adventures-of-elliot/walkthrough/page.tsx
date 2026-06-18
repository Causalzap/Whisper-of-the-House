import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import WalkthroughContent from "@/data/the-adventures-of-elliot/walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-adventures-of-elliot/walkthrough`;

const imageUrls = [
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-fay-revival.webp`,
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-guidepost-southern-caves.webp`,
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-self-destruct-resistance-magicite.webp`,
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-ignite-magic-trial.webp`,
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-hammer-unlock.webp`,
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-shard-grassy-path-treasure-chest.webp`,
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-cat-golden-bell.webp`,
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-moon-mirror-western-marge.webp`,
];

const toc = [
  { id: "walkthrough", label: "Walkthrough" },
  { id: "opening-faie-and-hurick", label: "Opening route" },
  { id: "southern-caves-route", label: "Southern Caves" },
  { id: "combat-and-movement-basics", label: "Combat and movement" },
  { id: "blocked-route-decision-table", label: "Blocked routes" },
  { id: "confirmed-magicite-examples", label: "Magicite examples" },
  { id: "first-magic-trial-ignite", label: "Ignite trial" },
  { id: "heavy-hammer-route", label: "Heavy Hammer" },
  { id: "weapons-and-exploration", label: "Weapons and exploration" },
  { id: "shards-of-life-and-shrine-of-life", label: "Shards and Shrine of Life" },
  { id: "return-to-village", label: "Village and Golden Bell" },
  { id: "doorway-of-time", label: "Doorway of time" },
  { id: "moon-mirror-western-marge", label: "Moon Mirror" },
  { id: "early-100-checklist", label: "Early checklist" },
  { id: "collectible-priorities", label: "Collectible priorities" },
  { id: "common-mistakes", label: "Common mistakes" },
  { id: "what-to-read-next", label: "What to read next" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/the-adventures-of-elliot",
    label: "The Adventures of Elliot Guide Hub",
  },
  {
    href: "/the-adventures-of-elliot/beginner-guide",
    label: "The Adventures of Elliot Beginner Guide",
  },
  {
    href: "/the-adventures-of-elliot/cat-locations",
    label: "The Adventures of Elliot Cat Locations",
  },
  {
    href: "/the-adventures-of-elliot/shards-of-life-locations",
    label: "The Adventures of Elliot Shards of Life Locations",
  },
  {
    href: "/the-adventures-of-elliot/achievements-guide",
    label: "The Adventures of Elliot Achievements Guide",
  },
];

export const metadata: Metadata = {
  title: "The Adventures of Elliot Walkthrough: Route, Moon Mirror & Shards",
  description:
    "Follow The Adventures of Elliot early route with Faie, Southern Caves, Ignite, Hammer, Magicite, cats, Shards, Moon Mirror and Western Marge.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "The Adventures of Elliot Walkthrough: Faie, Southern Caves, Ignite, Hammer, Golden Bell and Moon Mirror",
    description:
      "Follow the confirmed early route in The Adventures of Elliot with Faie, Hurick, Southern Caves, dash, shield, parry, Warp to Faie, Magicite examples, Ignite, Heavy Hammer, Shards of Life, cats, Golden Bell, Doorway of Time, Moon Mirror, Western Marge and the next main story objective.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Faie saves Elliot near the start of The Adventures of Elliot.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Adventures of Elliot Walkthrough",
    description:
      "Follow the early route through Faie, Southern Caves, Ignite, Hammer, Magicite, cats, Golden Bell, time travel and Moon Mirror.",
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
          name: "The Adventures of Elliot Guide",
          item: `${siteUrl}/the-adventures-of-elliot`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Walkthrough",
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
        "The Adventures of Elliot Walkthrough: Early Route, Southern Caves, Ignite, Hammer, Golden Bell, Moon Mirror and Western Marge",
      description:
        "A player-focused walkthrough for the confirmed early route in The Adventures of Elliot: The Millennium Tales. This guide explains what to do after Faie joins Elliot, how to follow Hurick toward Southern Caves, when to touch guideposts, how dash, shield, parry and Warp to Faie help in caves, how to read blocked routes, why confirmed Magicite examples such as Self-Destruct Resistance, Blowback, Fireworks, Charge Time Down and Pulse Throw matter, how Ignite and Heavy Hammer change exploration, how Shards of Life, Shrines of Life and route clues should be tracked, how the cat and Golden Bell event leads back toward time travel, and why the Moon Mirror in the Western Marge becomes the next main-route objective after the opening Golden Bell loop.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-18",
      dateModified: "2026-06-18",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "The Adventures of Elliot: The Millennium Tales",
        },
        { "@type": "Thing", name: "The Adventures of Elliot walkthrough" },
        { "@type": "Thing", name: "The Adventures of Elliot early route" },
        { "@type": "Thing", name: "The Adventures of Elliot Southern Caves" },
        { "@type": "Thing", name: "The Adventures of Elliot Faie" },
        { "@type": "Thing", name: "The Adventures of Elliot Hurick" },
        { "@type": "Thing", name: "The Adventures of Elliot guideposts" },
        { "@type": "Thing", name: "The Adventures of Elliot dash" },
        { "@type": "Thing", name: "The Adventures of Elliot shield" },
        { "@type": "Thing", name: "The Adventures of Elliot parry" },
        { "@type": "Thing", name: "The Adventures of Elliot Warp to Faie" },
        { "@type": "Thing", name: "The Adventures of Elliot blocked routes" },
        { "@type": "Thing", name: "The Adventures of Elliot Magicite" },
        { "@type": "Thing", name: "The Adventures of Elliot Self-Destruct Resistance" },
        { "@type": "Thing", name: "The Adventures of Elliot Blowback" },
        { "@type": "Thing", name: "The Adventures of Elliot Fireworks" },
        { "@type": "Thing", name: "The Adventures of Elliot Charge Time Down" },
        { "@type": "Thing", name: "The Adventures of Elliot Pulse Throw" },
        { "@type": "Thing", name: "The Adventures of Elliot Ignite" },
        { "@type": "Thing", name: "The Adventures of Elliot Heavy Hammer" },
        { "@type": "Thing", name: "The Adventures of Elliot weapons" },
        { "@type": "Thing", name: "The Adventures of Elliot 7 weapon types" },
        { "@type": "Thing", name: "The Adventures of Elliot Shards of Life" },
        { "@type": "Thing", name: "The Adventures of Elliot Shrine of Life" },
        { "@type": "Thing", name: "The Adventures of Elliot cats" },
        { "@type": "Thing", name: "The Adventures of Elliot Golden Bell" },
        { "@type": "Thing", name: "The Adventures of Elliot Doorway of Time" },
        { "@type": "Thing", name: "The Adventures of Elliot time travel" },
        { "@type": "Thing", name: "The Adventures of Elliot four ages" },
        { "@type": "Thing", name: "The Adventures of Elliot Moon Mirror" },
        { "@type": "Thing", name: "The Adventures of Elliot Western Marge" },
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
          name: "Is this a full-game walkthrough for The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. This is the confirmed early-route walkthrough for The Adventures of Elliot. Later areas, endings, bosses, and full 100% cleanup should be added after more route information is verified.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I go after Faie joins Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Talk to Hurick near camp. He points you toward Southern Caves, which is the route back toward the village.",
          },
        },
        {
          "@type": "Question",
          name: "Should I clear every chest in Southern Caves immediately?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Open what you can reach, but leave obvious tool-locked chests, rocks, cracked walls, and blocked paths for later cleanup.",
          },
        },
        {
          "@type": "Question",
          name: "How do Shards of Life and Shrine of Life work?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Shards of Life are health-upgrade fragments. Collecting 4 Shards of Life gives Elliot a max HP increase. Shrines of Life are separate challenge-style map locations with combat, puzzles, and rewards.",
          },
        },
        {
          "@type": "Question",
          name: "What does Self-Destruct Resistance do?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Self-Destruct Resistance costs 5 and reduces damage taken from your own bombs by 50%. It is useful if bomb routes or tight rooms make you hit yourself.",
          },
        },
        {
          "@type": "Question",
          name: "What does Pulse Throw do?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Pulse Throw costs 10. It delivers an electric shock to nearby enemies when status-afflicted enemies are hit by the matching attack, and it creates a 10% chance of stunning enemies hit by electric shock.",
          },
        },
        {
          "@type": "Question",
          name: "What does Ignite do?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Ignite lets Faie light objects and solve early magic route checks. After you unlock it, test it near the trial and remember earlier objects that looked lightable.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do after getting Heavy Hammer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check earlier rocks, breakable-looking objects, and blocked routes. Heavy Hammer is one of the first tools that turns old obstacles into new paths.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Moon Mirror route?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "After the Golden Bell route brings Elliot back to the kingdom, the story reveals the Moon Mirror, a shield carried by the hero king and crafted in the age of magic. It is hidden in the Western Marge and becomes the next main-route objective.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the Moon Mirror hidden?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Moon Mirror is said to be hidden in the Western Marge. This is a main story direction after the opening Golden Bell loop, not ordinary side cleanup.",
          },
        },
        {
          "@type": "Question",
          name: "How should I fight cleanly early?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use dash for spacing, shield when you are unsure, and parry after you understand an enemy attack. Clean fights save resources for later caves and trials.",
          },
        },
        {
          "@type": "Question",
          name: "What is Warp to Faie used for?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Warp to Faie can reposition Elliot to Faie's location. Use it when Faie's position gives you a safer path, better angle, or faster recovery during exploration.",
          },
        },
        {
          "@type": "Question",
          name: "How many weapon types are there in The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The game has 7 weapon types. Test new weapons in safe fights and remember that some tools or weapon effects can also matter during exploration.",
          },
        },
        {
          "@type": "Question",
          name: "Why does the cat have the Golden Bell?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Follow the village event with the cat and Caleshia. It leads you back to the Golden Bell and moves the story toward time travel again.",
          },
        },
        {
          "@type": "Question",
          name: "Should I track cats during the walkthrough?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Cats are tied to rewards and completion, so start tracking them as soon as the game introduces them.",
          },
        },
        {
          "@type": "Question",
          name: "What if a route is blocked in one age?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Keep progressing and check later. Some routes need tools, story progress, or the same location in another age.",
          },
        },
        {
          "@type": "Question",
          name: "Where should I check for bonus rewards?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Once you reach a safe hub or orphanage area, check whether Prologue Demo progress, save-data bonuses, or preorder rewards can be claimed.",
          },
        },
        {
          "@type": "Question",
          name: "What should I read next after this walkthrough?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the Cat Locations guide for cats and rewards, the Shards of Life Locations guide for Shards, Shrines and health upgrades, or return to the Guide Hub for all guides.",
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
          title="Follow The Adventures of Elliot Route Without Losing Track"
          description="Move from Faie and Southern Caves into Ignite, Hammer, Magicite, Shards, cats, Golden Bell, time travel, Moon Mirror and Western Marge."
          gameTitle="The Adventures of Elliot"
          gameHref="/the-adventures-of-elliot"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WalkthroughContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
