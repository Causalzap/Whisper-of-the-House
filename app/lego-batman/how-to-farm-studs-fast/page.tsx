import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import HowToFarmStudsFastContent from "@/data/lego-batman/how-to-farm-studs-fast.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/lego-batman/how-to-farm-studs-fast`;

const imageUrls = [
  `${siteUrl}/images/lego-batman/lego-batman-stud-cache-batcave-crate.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-stud-cache-survey-menu.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-stud-cache-return-loop.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-jim-gordon-rebound-launcher-upgrade.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-party-man-catwoman-stud-farm.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-amusement-park-roller-coaster-stud-cap.webp`,
];

const toc = [
  { id: "best-stud-farming-methods", label: "Best Methods" },
  { id: "stud-colors-and-values", label: "Stud Values" },
  { id: "best-upgrades-for-farming-studs", label: "Best Upgrades" },
  { id: "stud-cache-loop", label: "Stud Cache Loop" },
  { id: "jim-gordon-rebound-launcher-farm", label: "Gordon Farm" },
  { id: "police-radio-crime-events", label: "Crime Events" },
  { id: "party-man-replay-catwoman-farm", label: "Party Man Replay" },
  { id: "amusement-park-roller-coaster-farm", label: "Roller Coaster Farm" },
  { id: "when-to-switch-farming-methods", label: "When To Switch" },
  { id: "common-problems", label: "Common Problems" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
    { href: "/lego-batman", label: "LEGO Batman Guide" },
    { href: "/lego-batman/red-bricks", label: "Red Bricks Guide" },
    { href: "/lego-batman/all-subwayne-tunnel-locations", label: "SubWayne Tunnel Locations Guide" },
    { href: "/lego-batman/absolute-batman-suit", label: "Absolute Batman Suit Guide" },
    { href: "/lego-batman/new-beginnings-docks-collectibles", label: "New Beginnings Docks Collectibles" },
    { href: "/lego-batman/carmine-falcone", label: "Carmine Falcone Walkthrough" },
    { href: "/lego-batman/batgirl-unlock", label: "Batgirl Unlock Guide" },
    { href: "/lego-batman/radio-towers", label: "Radio Towers Guide" },
    { href: "/lego-batman/escaped-zoo-animals", label: "Escaped Zoo Animals Guide" },
    { href: "/lego-batman/firefly-boss", label: "Firefly Boss Guide" },
    { href: "/lego-batman/mr-freeze-boss", label: "Mr. Freeze Boss Guide" },
    { href: "/lego-batman/poison-ivy-boss", label: "Poison Ivy Boss Guide" },
    { href: "/lego-batman/bane-boss", label: "Bane Boss Guide" },
];

export const metadata: Metadata = {
  title: "How to Farm Studs Fast in LEGO Batman Legacy",
  description:
    "Farm studs fast in LEGO Batman Legacy with the Stud Cache loop, Gordon Rebound Launcher, police events, Party Man replay, and roller coaster method.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "How to Farm Studs Fast in LEGO Batman: Legacy of the Dark Knight",
    description:
      "Use the best stud farming methods by progress: Stud Cache loop, Gordon Rebound Launcher rooms, police events, Party Man replay, and roller coaster cap farming.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1192,
        height: 673,
        alt: "Stud Cache crate near the Batcave vehicle garage in LEGO Batman Legacy of the Dark Knight.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LEGO Batman Legacy: How to Farm Studs Fast",
    description:
      "Use Stud Cache loops, Gordon farming, police events, Party Man replay, and roller coaster routes to earn studs faster.",
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
          name: "LEGO Batman Guide",
          item: `${siteUrl}/lego-batman`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "How to Farm Studs Fast",
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
        "How to Farm Studs Fast in LEGO Batman: Legacy of the Dark Knight",
      description:
        "A complete LEGO Batman: Legacy of the Dark Knight stud farming guide covering the Batcave Stud Cache loop, estimated 30,000-stud payouts with upgrades, stud color values, Skill Brick upgrade priorities, Jim Gordon Rebound Launcher farming rooms, police radio crime events, Party Man replay, amusement park roller coaster farming, the 9,999,999 stud cap, and common stud farming problems.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-25",
      dateModified: "2026-05-25",
      about: [
        {
          "@type": "VideoGame",
          name: "LEGO Batman: Legacy of the Dark Knight",
        },
        { "@type": "Thing", name: "Stud farming" },
        { "@type": "Thing", name: "Stud Cache" },
        { "@type": "Thing", name: "Batcave vehicle garage" },
        { "@type": "Thing", name: "Jim Gordon" },
        { "@type": "Thing", name: "Rebound Launcher" },
        { "@type": "Thing", name: "Police Radio Crime Events" },
        { "@type": "Thing", name: "Party Man replay" },
        { "@type": "Thing", name: "Catwoman" },
        { "@type": "Thing", name: "Amusement Park Roller Coaster" },
        { "@type": "Thing", name: "Skill Bricks" },
        { "@type": "Thing", name: "Stud Magnet" },
        { "@type": "Thing", name: "Stud combo multiplier" },
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
          name: "What is the fastest way to farm studs in LEGO Batman: Legacy of the Dark Knight?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The fastest simple method is the Stud Cache loop in the Batcave vehicle garage. Open the cache, fast travel away, return to the Batcave, and open it again. With full stud upgrades and x4 scaling, it can pay around 30,000 studs per open.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the Stud Cache in the Batcave?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Stud Cache is near the Batcave vehicle garage or vehicle bay. Look for the red-and-yellow crate near the vehicles after redeeming the LEGO Group Online Survey reward code.",
          },
        },
        {
          "@type": "Question",
          name: "Is the Stud Cache one-time use?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. The survey reward unlocks the Stud Cache, and the crate can be reopened after you leave the Batcave and return. The reward code is redeemed once, but the crate itself can be looped.",
          },
        },
        {
          "@type": "Question",
          name: "How much is a purple stud worth?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A purple stud is worth 10,000 studs before multipliers. At x4, it is worth 40,000 studs, which makes purple studs the most important pickups during farming routes.",
          },
        },
        {
          "@type": "Question",
          name: "What are the best Gordon farming locations?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The best Gordon farming locations are dense rooms such as Gotham Bank and the Batcave Trophy Room. Both have enough breakable objects for the upgraded Rebound Launcher to bounce through multiple targets quickly.",
          },
        },
        {
          "@type": "Question",
          name: "Are police radio crime events worth doing?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Police radio crime events are worth doing whenever they appear near your route. They give a strong burst of studs and fit naturally into Gotham cleanup, especially if your combo and stud magnet upgrades are already active.",
          },
        },
        {
          "@type": "Question",
          name: "What is the stud cap in LEGO Batman: Legacy of the Dark Knight?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The visible stud counter caps at 9,999,999. If your counter stops increasing at that number, stop farming and spend your studs.",
          },
        },
        {
          "@type": "Question",
          name: "Should I farm studs before buying upgrades?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Do not delay the key farming upgrades just to build a bigger stud pile. If you already have Skill Bricks, buy Stud Magnet and combo upgrades first, then farm so later routes pay more.",
          },
        },
        {
          "@type": "Question",
          name: "Do stud farming upgrades cost studs or Skill Bricks?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The key stud-farming upgrades, including Stud Magnet, combo multiplier, combo drain, and combo fill upgrades, use Skill Bricks rather than studs.",
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
          title="How to Farm Studs Fast in LEGO Batman: Legacy of the Dark Knight"
          description="Use the Stud Cache loop, Gordon’s Rebound Launcher, police crimes, Party Man replay, and the roller coaster route to earn studs without wasting time."
          gameTitle="LEGO Batman: Legacy of the Dark Knight"
          gameHref="/lego-batman"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HowToFarmStudsFastContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}