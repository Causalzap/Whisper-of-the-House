import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import RadioTowersContent from "@/data/lego-batman/radio-towers.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/lego-batman/radio-towers`;

const imageUrls = [
  `${siteUrl}/images/lego-batman/lego-batman-all-radio-tower-locations-map.webp`,
];

const toc = [
  { id: "before-you-start", label: "Before You Start" },
  { id: "all-radio-tower-locations", label: "All 9 Locations" },
  { id: "how-to-hack-radio-towers", label: "How To Hack Towers" },
  { id: "what-radio-towers-reveal", label: "What Towers Reveal" },
  {
    id: "should-you-do-radio-towers-early-or-late",
    label: "Early or Late?",
  },
  { id: "if-you-are-stuck", label: "Stuck?" },
  { id: "what-to-do-next", label: "What To Do Next" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
    { href: "/lego-batman", label: "LEGO Batman Guide" },
  { href: "/lego-batman/red-bricks", label: "Red Bricks Guide" },
  { href: "/lego-batman/how-to-farm-studs-fast", label: "How to Farm Studs Fast" },
  { href: "/lego-batman/all-subwayne-tunnel-locations", label: "SubWayne Tunnel Locations Guide" },
  { href: "/lego-batman/absolute-batman-suit", label: "Absolute Batman Suit Guide" },
  { href: "/lego-batman/new-beginnings-docks-collectibles", label: "New Beginnings Docks Collectibles" },
  { href: "/lego-batman/carmine-falcone", label: "Carmine Falcone Walkthrough" },
  { href: "/lego-batman/batgirl-unlock", label: "Batgirl Unlock Guide" },
  { href: "/lego-batman/escaped-zoo-animals", label: "Escaped Zoo Animals Guide" },
  { href: "/lego-batman/firefly-boss", label: "Firefly Boss Guide" },
  { href: "/lego-batman/mr-freeze-boss", label: "Mr. Freeze Boss Guide" },
  { href: "/lego-batman/poison-ivy-boss", label: "Poison Ivy Boss Guide" },
  { href: "/lego-batman/bane-boss", label: "Bane Boss Guide" },
];

export const metadata: Metadata = {
  title: "All 9 Radio Tower Locations in LEGO Batman Legacy",
  description:
    "Find all 9 Radio Tower locations in LEGO Batman Legacy, learn how to hack towers with Batgirl, reveal Gotham map icons, and fix common tower problems.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "LEGO Batman Legacy: All 9 Radio Tower Locations",
    description:
      "Use this complete Radio Towers guide to find every tower, hack the flashing panel with Batgirl, reveal Gotham districts, and decide whether to clear towers early or after the story.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1122,
        height: 1402,
        alt: "All 9 Radio Tower locations in LEGO Batman Legacy of the Dark Knight.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LEGO Batman Legacy: All 9 Radio Tower Locations",
    description:
      "Find every Radio Tower, use Batgirl's Hackarang on the flashing panel, and reveal Gotham district activities.",
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
          name: "Radio Towers",
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
        "All 9 Radio Tower Locations in LEGO Batman: Legacy of the Dark Knight",
      description:
        "A complete LEGO Batman Legacy Radio Towers guide covering all 9 tower locations, Batgirl hacking requirements, Hackarang panel activation, hacking minigame tips, district map reveals, early-versus-late cleanup timing, and common stuck points.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-24",
      dateModified: "2026-05-24",
      about: [
        {
          "@type": "VideoGame",
          name: "LEGO Batman: Legacy of the Dark Knight",
        },
        { "@type": "Thing", name: "Radio Towers" },
        { "@type": "Thing", name: "Batgirl" },
        { "@type": "Thing", name: "Hackarang" },
        { "@type": "Thing", name: "Gotham Map" },
        { "@type": "Thing", name: "Riddler Challenges" },
        { "@type": "Thing", name: "Tricorner" },
        { "@type": "Thing", name: "Old Gotham South" },
        { "@type": "Thing", name: "Old Gotham North" },
        { "@type": "Thing", name: "Old Gotham West" },
        { "@type": "Thing", name: "The Cauldron South" },
        { "@type": "Thing", name: "The Cauldron North" },
        { "@type": "Thing", name: "Newtown" },
        { "@type": "Thing", name: "Gotham Village" },
        { "@type": "Thing", name: "Robinson Park" },
        { "@type": "Thing", name: "East End" },
        { "@type": "Thing", name: "Amusement Mile" },
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
          name: "How many Radio Towers are there in LEGO Batman Legacy?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "There are 9 Radio Towers in total, with one tower in each Gotham district.",
          },
        },
        {
          "@type": "Question",
          name: "When do Radio Towers unlock?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Radio Towers become useful once you reach Chapter 4 and unlock Batgirl, since she is the character needed to hack them.",
          },
        },
        {
          "@type": "Question",
          name: "How do you activate a Radio Tower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Switch to Batgirl, aim at the tower's flashing panel, and hit it with her Hackarang or Batarang. This starts a hacking minigame. Complete the puzzle by guiding the hack toward the center.",
          },
        },
        {
          "@type": "Question",
          name: "Why can't I hack the Radio Tower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You are probably using the wrong character, standing too far from the panel, or missing the flashing target on the tower. Use Batgirl and throw her hacking projectile at the lit-up panel.",
          },
        },
        {
          "@type": "Question",
          name: "Does one Radio Tower reveal the whole map?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Each Radio Tower reveals only its own district. You need all 9 towers for the full Gotham reveal route.",
          },
        },
        {
          "@type": "Question",
          name: "Why are activities still locked after activating a tower?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Radio Towers reveal icons, but they do not unlock every activity requirement. Some revealed objectives still need later story progress, specific characters, or later abilities before you can complete them.",
          },
        },
        {
          "@type": "Question",
          name: "Should you do Radio Towers early or after the story?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Do them early if you want the map to show more icons while you play. Wait until later if you want the most efficient 100% cleanup route. The best middle-ground is to activate towers after unlocking Batgirl, then come back later for activities that still need another character or ability.",
          },
        },
        {
          "@type": "Question",
          name: "Do Radio Towers reveal Riddler puzzles?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Radio Towers help reveal district icons, including Riddler-related markers and other side activities.",
          },
        },
        {
          "@type": "Question",
          name: "Can you see Radio Towers before Batgirl is unlocked?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. You may see Radio Towers on the map or spot the tower structures while exploring before Batgirl joins the roster, but you cannot activate them until you unlock Batgirl and use her hacking ability.",
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
          title="All 9 Radio Tower Locations in LEGO Batman: Legacy of the Dark Knight"
          description="Find every Radio Tower, learn how to hack each tower with Batgirl, reveal Gotham district icons, and avoid the most common tower problems."
          gameTitle="LEGO Batman: Legacy of the Dark Knight"
          gameHref="/lego-batman"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <RadioTowersContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}