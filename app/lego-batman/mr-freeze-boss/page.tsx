import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MrFreezeBossContent from "@/data/lego-batman/mr-freeze-boss.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/lego-batman/mr-freeze-boss`;

const imageUrls = [
  `${siteUrl}/images/lego-batman/lego-batman-mr-freeze-ice-machine-overview.webp`,
];

const toc = [
  { id: "before-you-start", label: "Before You Start" },
  { id: "mr-freeze-attacks", label: "Attack Patterns" },
  { id: "fight-structure", label: "Fight Structure" },
  { id: "disable-the-energy-shield", label: "Energy Shield" },
  { id: "hack-the-machine", label: "Hack & Crank" },
  { id: "icicles-and-cable-launcher", label: "Icicles & Cable Launcher" },
  { id: "final-crank", label: "Final Crank" },
  { id: "snow-globes-and-red-brick", label: "Collectibles" },
  { id: "dark-knight-difficulty", label: "Dark Knight Tips" },
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
  { href: "/lego-batman/radio-towers", label: "Radio Towers Guide" },
  { href: "/lego-batman/escaped-zoo-animals", label: "Escaped Zoo Animals Guide" },
  { href: "/lego-batman/firefly-boss", label: "Firefly Boss Guide" },
  { href: "/lego-batman/poison-ivy-boss", label: "Poison Ivy Boss Guide" },
  { href: "/lego-batman/bane-boss", label: "Bane Boss Guide" },
];

export const metadata: Metadata = {
  title: "How To Beat Mr. Freeze in LEGO Batman Legacy",
  description:
    "Beat Mr. Freeze in LEGO Batman Legacy with the energy shield puzzle, generator overload, computer hack, crank mechanics, icicles, cable launcher, Snow Globes, Red Brick, and Dark Knight tips.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "How To Beat Mr. Freeze in LEGO Batman Legacy",
    description:
      "Complete the Mr. Freeze boss fight, shut down the ice machine, collect all 5 Snow Globes and the Red Brick, and avoid common stuck points.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Mr. Freeze ice machine boss fight in LEGO Batman Legacy of the Dark Knight.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LEGO Batman Legacy: Mr. Freeze Boss Guide",
    description:
      "Use this Mr. Freeze boss guide for the shield puzzle, hack point, crank mechanics, icicles, Snow Globes, Red Brick, and Dark Knight tips.",
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
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        {
          "@type": "ListItem",
          position: 2,
          name: "LEGO Batman Guide",
          item: `${siteUrl}/lego-batman`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Mr. Freeze Boss",
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
        "How To Beat Mr. Freeze in LEGO Batman: Legacy of the Dark Knight",
      description:
        "A complete Mr. Freeze boss guide covering the ice machine, energy shield, generator overload, computer hack, manual crank, icicles, cable launcher, Snow Globes, Red Brick, Dark Knight difficulty tips, and common stuck points.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-24",
      dateModified: "2026-05-24",
      about: [
        { "@type": "VideoGame", name: "LEGO Batman: Legacy of the Dark Knight" },
        { "@type": "Thing", name: "Mr. Freeze" },
        { "@type": "Thing", name: "Snow Globes" },
        { "@type": "Thing", name: "Red Brick" },
        { "@type": "Thing", name: "Nightwing" },
        { "@type": "Thing", name: "Batwoman" },
        { "@type": "Thing", name: "Dark Knight Difficulty" },
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
          name: "Which characters fight Mr. Freeze?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Mr. Freeze fight involves Batman, Batwoman, and Nightwing. Batman starts the encounter, but Nightwing becomes important after the phase change.",
          },
        },
        {
          "@type": "Question",
          name: "Is this fight mostly about damaging Mr. Freeze?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. The main goal is shutting down the ice machine through shield, hack, crank, and cable launcher mechanics.",
          },
        },
        {
          "@type": "Question",
          name: "How many Snow Globes are in the Mr. Freeze fight?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There are 5 Snow Globes in the Mr. Freeze arena.",
          },
        },
        {
          "@type": "Question",
          name: "When should you collect the Snow Globes?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Collect the Snow Globes after the boss is defeated. The arena is calmer, and you can safely sweep the circular wall and ice machine area.",
          },
        },
        {
          "@type": "Question",
          name: "Does Mr. Freeze have a WayneTech Cache?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. The Mr. Freeze mission does not have a WayneTech Cache. The main collectibles are 5 Snow Globes and 1 Red Brick.",
          },
        },
        {
          "@type": "Question",
          name: "Is Mr. Freeze harder on Dark Knight difficulty?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. His tracking and AoE pressure are more punishing, so you need cleaner movement, better spacing, and faster objective interactions.",
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
          title="How To Beat Mr. Freeze in LEGO Batman: Legacy of the Dark Knight"
          description="Shut down Mr. Freeze’s ice machine, solve the shield and hack mechanics, collect all Snow Globes and the Red Brick, and handle Dark Knight difficulty."
          gameTitle="LEGO Batman: Legacy of the Dark Knight"
          gameHref="/lego-batman"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MrFreezeBossContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}