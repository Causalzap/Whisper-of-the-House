import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AbsoluteBatmanSuitContent from "@/data/lego-batman/absolute-batman-suit.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/lego-batman/absolute-batman-suit`;

const imageUrls = [
  `${siteUrl}/images/lego-batman/lego-batman-absolute-batman-suit-menu.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-all-21-escaped-zoo-animal-locations-collage.webp`,
];

const toc = [
  { id: "how-to-unlock-absolute-batman", label: "How To Unlock" },
  { id: "absolute-batman-unlock-steps", label: "Unlock Steps" },
  { id: "nine-animals-vs-all-21-animals", label: "9 vs 21 Animals" },
  { id: "fastest-route-to-absolute-batman", label: "Fastest Route" },
  { id: "where-to-equip-absolute-batman", label: "Where To Equip" },
  { id: "what-is-absolute-batman", label: "What Is Absolute Batman" },
  { id: "common-problems", label: "Common Problems" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/lego-batman", label: "LEGO Batman Guide" },
  { href: "/lego-batman/red-bricks", label: "Red Bricks Guide" },
  { href: "/lego-batman/how-to-farm-studs-fast", label: "How to Farm Studs Fast" },
  { href: "/lego-batman/all-subwayne-tunnel-locations", label: "SubWayne Tunnel Locations Guide" },
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
  title: "How to Get Absolute Batman LEGO Batman Legacy",
  description:
    "Unlock Absolute Batman in LEGO Batman Legacy by rescuing 9 Escaped Zoo Animals. Learn the fastest route, menu path, and suit reward details.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "How to Get Absolute Batman in LEGO Batman Legacy",
    description:
      "Rescue 9 Escaped Zoo Animals to unlock Absolute Batman. See the fastest route, why you do not need all 21 animals, and how to equip the suit.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Absolute Batman suit in the Batman suit menu in LEGO Batman Legacy of the Dark Knight.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LEGO Batman Legacy: How to Get Absolute Batman",
    description:
      "Rescue 9 Escaped Zoo Animals, then equip Absolute Batman from Batman’s suit options.",
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
          name: "Absolute Batman Suit",
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
        "How to Get the Absolute Batman Suit in LEGO Batman: Legacy of the Dark Knight",
      description:
        "A focused LEGO Batman: Legacy of the Dark Knight guide explaining how to unlock the Absolute Batman suit by rescuing 9 Escaped Zoo Animals, why all 21 animals are only needed for completion, when Escaped Zoo Animals become available, how Radio Towers and Batgirl help reveal animal markers, where to equip the suit through the Characters and Suit Options menu, what Absolute Batman is based on, and how to fix common unlock problems.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-25",
      dateModified: "2026-05-25",
      about: [
        {
          "@type": "VideoGame",
          name: "LEGO Batman: Legacy of the Dark Knight",
        },
        { "@type": "Thing", name: "Absolute Batman" },
        { "@type": "Thing", name: "Batman suits" },
        { "@type": "Thing", name: "Escaped Zoo Animals" },
        { "@type": "Thing", name: "Rescue Zoo Animals" },
        { "@type": "Thing", name: "Animal Tracker" },
        { "@type": "Thing", name: "Radio Towers" },
        { "@type": "Thing", name: "Batgirl" },
        { "@type": "Thing", name: "Catwoman" },
        { "@type": "Thing", name: "Gotham City" },
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
          name: "Do you need all 21 Escaped Zoo Animals for Absolute Batman, or just 9?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You only need 9 Escaped Zoo Animals for Absolute Batman. The full 21 animals are for completion, full Gotham cleanup, and 100% progress.",
          },
        },
        {
          "@type": "Question",
          name: "When do Escaped Zoo Animals unlock?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Escaped Zoo Animal rescue activities start appearing after you reach Chapter 2 and progress through the early Catwoman section.",
          },
        },
        {
          "@type": "Question",
          name: "Do you need Batgirl for Absolute Batman?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Batgirl is not directly required for Absolute Batman, but she helps because she can clear the 9 Radio Towers, which reveal map icons and make animal markers easier to find.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Absolute Batman in the suit menu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Open Options, go to Characters with R1 or RB, select Batman, then press Square or X for Suit Options. Absolute Batman should appear near the top of the list.",
          },
        },
        {
          "@type": "Question",
          name: "Is Absolute Batman a DLC suit?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Absolute Batman is unlocked through the in-game Escaped Zoo Animals activity rather than a paid DLC pack.",
          },
        },
        {
          "@type": "Question",
          name: "Is Absolute Batman missable?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Absolute Batman is not missable. If you skip the animal activity early, you can return to Gotham cleanup later and rescue the animals.",
          },
        },
        {
          "@type": "Question",
          name: "Why is Absolute Batman still locked?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You probably have not rescued 9 Escaped Zoo Animals yet, or you have not checked Batman’s suit options after earning the reward. Rescue more animals, then reopen Batman’s suit list.",
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
          title="How to Get the Absolute Batman Suit in LEGO Batman: Legacy of the Dark Knight"
          description="Rescue 9 Escaped Zoo Animals, skip the full 21-animal grind for now, and equip one of Batman’s best-looking suits fast."
          gameTitle="LEGO Batman: Legacy of the Dark Knight"
          gameHref="/lego-batman"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AbsoluteBatmanSuitContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}