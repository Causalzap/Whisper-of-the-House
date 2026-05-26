import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FrostyBuildContent from "@/data/oaken-tower/frosty-build.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/oaken-tower/frosty-build`;

const imageUrls = [
  `${siteUrl}/images/oaken-tower/oaken-tower-frosty-build-core-board.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-frosty-pivot-window.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-frozen-orb-core.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-glacier-scaling.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-frost-essence.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-frosty-cdr-lost-fragment.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-frosty-warhorn-target.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-frosty-warhorn-three-star.webp`,
  `${siteUrl}/images/oaken-tower/oaken-tower-frosty-oak-test.webp`,
];

const toc = [
  { id: "build-plan", label: "Build plan" },
  { id: "item-data", label: "Item data" },
  { id: "perks", label: "Best perks" },
  { id: "day-plan", label: "Day plan" },
  { id: "pivot-window", label: "Pivot window" },
  { id: "frozen-orb", label: "Frozen Orb" },
  { id: "glacier", label: "Glacier" },
  { id: "frost-essence", label: "Frost Essence" },
  { id: "lost-fragment-time-pendant", label: "Lost Fragment & Time Pendant" },
  { id: "warhorn", label: "Warhorn" },
  { id: "sapphire-frostbound", label: "Sapphire & Frostbound" },
  { id: "matchups", label: "Matchups" },
  { id: "oak-test", label: "Oak test" },
  { id: "common-mistakes", label: "Mistakes" },
  { id: "checklist", label: "Checklist" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
    { href: "/oaken-tower", label: "Oaken Tower Guide" },
    { href: "/oaken-tower/10-wins-guide", label: "10-Win Guide" },
    { href: "/oaken-tower/level-vs-reroll", label: "Level vs Reroll" },
    { href: "/oaken-tower/3-star-items", label: "3-Star Items" },
    { href: "/oaken-tower/perk-unlock-guide", label: "Perk Unlock Guide" },
    { href: "/oaken-tower/poison-build", label: "Best Poison Build" },
    { href: "/oaken-tower/burn-build", label: "Best Burn Build" },
    { href: "/oaken-tower/bleed-build", label: "Best Bleed Build" },
];

export const metadata: Metadata = {
  title: "Oaken Tower Frosty Build Guide: Frozen Orb & Glacier",
  description:
    "Build Frosty with Frozen Orb, Glacier, Frost Essence, Time Pendant, Warhorn and Lyra picks. Learn 5.2s cooldown fixes, perks, matchups and Oak damage.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Oaken Tower Frosty Build Guide",
    description:
      "A player-first Oaken Tower Frosty build guide covering Frozen Orb, Glacier, Frost Essence, Time Pendant, Lost Fragment, Warhorn, best perks, Lyra choices, cooldown fixes, matchups and Oak testing.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Oaken Tower Frosty build core board with Frozen Orb, Glacier, Frost Essence support and Warhorn scaling.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oaken Tower Frosty Build Guide",
    description:
      "Learn the Frozen Orb + Glacier Frosty build, including Frost Essence targets, Time Pendant, Lyra, Warhorn and 304B Oak damage.",
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
          name: "Oaken Tower Guide",
          item: `${siteUrl}/oaken-tower`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Frosty Build",
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
        "Oaken Tower Frosty Build Guide: Frozen Orb, Glacier, Frost Essence, Time Pendant, Warhorn, Lyra Picks and Oak Damage Test",
      description:
        "A practical Oaken Tower Frosty build guide explaining how to build a Frozen Orb engine with Glacier crit scaling, why Frozen Orb's 5.2s cooldown needs Time Pendant or cooldown support, how upgraded Frozen Orb's multi-trigger and +50% bonus crit breakpoint powers Glacier and Warhorn scaling, how to use Frost Essence on Lost Fragment, Time Pendant or Warhorn, when Lyra and Northern Offering are worth taking, which perks help Frosty pivots, how to play into Burn, Poison, Dark burst, shield and healing boards, and why the 304 billion Oak damage test is ceiling proof rather than the minimum requirement for 10 wins.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-25",
      dateModified: "2026-05-25",
      about: [
        { "@type": "VideoGame", name: "Oaken Tower" },
        { "@type": "Thing", name: "Frosty Build" },
        { "@type": "Thing", name: "Frozen Orb" },
        { "@type": "Thing", name: "Glacier" },
        { "@type": "Thing", name: "Frost Essence" },
        { "@type": "Thing", name: "Time Pendant" },
        { "@type": "Thing", name: "Lost Fragment" },
        { "@type": "Thing", name: "Warhorn" },
        { "@type": "Thing", name: "Lyra" },
        { "@type": "Thing", name: "Cooldown Reduction" },
        { "@type": "Thing", name: "The Oak" },
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
          name: "What is the best Frosty build in Oaken Tower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The best Frosty build is usually a Frozen Orb engine with Glacier crit scaling, Frost Essence support, Time Pendant or cooldown help, Lost Fragment Multicast, and a late Warhorn or Sapphire Amulet payoff.",
          },
        },
        {
          "@type": "Question",
          name: "Why is Frozen Orb important?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Frozen Orb is the trigger engine. It can trigger your other Frosty items multiple times, and the upgraded breakpoint can give +50% bonus crit. That is what makes Glacier and Warhorn scale so hard.",
          },
        },
        {
          "@type": "Question",
          name: "Why does Frozen Orb's 5.2s cooldown matter?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Because 5.2s is slow in ranked fights. If Frozen Orb starts too late, Burn, Poison, or Dark burst can kill before your engine works. Time Pendant and cooldown support solve this problem.",
          },
        },
        {
          "@type": "Question",
          name: "Why is Glacier good?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Glacier permanently gains crit chance whenever Frosty items trigger. Since Frozen Orb can trigger Frosty items repeatedly, Glacier can scale from a normal sword into the main damage carry.",
          },
        },
        {
          "@type": "Question",
          name: "What should I use Frost Essence on?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use Frost Essence on the support item that should join the Frozen Orb chain. The best targets are usually Lost Fragment for Multicast, Time Pendant for cooldown, or Warhorn for late damage.",
          },
        },
        {
          "@type": "Question",
          name: "Is it Frost Essence or Frosty Essence?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the official item name Frost Essence. The effect matters because it gives an item the Frosty tag, allowing Frozen Orb to trigger it.",
          },
        },
        {
          "@type": "Question",
          name: "Is Lyra good for Frosty?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, Lyra is a strong Frosty signal when the route gives Frozen Orb access or Frosty support and your current board can survive the pivot. Do not take it blindly if you are already too weak.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need 3-star Frozen Orb?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not every 10-win run needs it, but the 3-star or upgraded Frozen Orb breakpoint is the ceiling. Triggering Frosty items multiple times and giving +50% bonus crit is the reason the Glacier and Warhorn version scales so hard.",
          },
        },
        {
          "@type": "Question",
          name: "What beats Frosty?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Fast Burn, Poison and Dark burst can all beat Frosty if Frozen Orb starts too late. Buy cooldown, Time Pendant, health, shield, or temporary damage before chasing more scaling.",
          },
        },
        {
          "@type": "Question",
          name: "Is Frosty good for The Oak?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. A finished Frosty engine can produce huge Oak numbers. In the recorded Oak test, the build reached 304 billion total damage, with Glacier, Warhorn, and Time Pendant doing massive payoff damage.",
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
          title="Best Frosty Build in Oaken Tower"
          description="Use this when you find Frozen Orb, Glacier, Frost Essence, or Lyra support. The whole build is about fixing Frozen Orb's slow start, then turning Glacier crit into Warhorn damage."
          gameTitle="Oaken Tower"
          gameHref="/oaken-tower"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FrostyBuildContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
