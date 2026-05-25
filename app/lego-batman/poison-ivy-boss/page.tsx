import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import PoisonIvyBossContent from "@/data/lego-batman/poison-ivy-boss.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/lego-batman/poison-ivy-boss`;

const imageUrls = [
  `${siteUrl}/images/lego-batman/lego-batman-poison-ivy-boss-start.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-poison-ivy-lab-entrance.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-poison-ivy-transformation.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-poison-ivy-queen-of-thorns.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-poison-ivy-acid-attack.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-poison-ivy-open-window.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-poison-ivy-tie-mouths.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-poison-ivy-defeated.webp`,
];

const toc = [
  { id: "poison-ivy-boss-overview", label: "Overview" },
  { id: "poison-ivy-phase-summary", label: "Phases" },
  { id: "how-to-reach-poison-ivys-lab", label: "Lab Entrance" },
  { id: "poison-ivy-transformation", label: "Transformation" },
  { id: "queen-of-thorns-plant", label: "Queen of Thorns" },
  { id: "acid-attack-and-open-window", label: "Acid Attack" },
  { id: "extra-plants-and-arena-pressure", label: "Extra Plants" },
  { id: "tie-up-the-plant-mouths", label: "Tie Mouths" },
  { id: "poison-ivy-mechanics", label: "Mechanics" },
  { id: "poison-ivy-defeated", label: "Defeated" },
  { id: "if-you-are-stuck", label: "Stuck?" },
  { id: "full-poison-ivy-route", label: "Fast Route" },
  { id: "related-lego-batman-guides", label: "Related" },
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
  { href: "/lego-batman/mr-freeze-boss", label: "Mr. Freeze Boss Guide" },
  { href: "/lego-batman/bane-boss", label: "Bane Boss Guide" },
];

export const metadata: Metadata = {
  title: "Poison Ivy Boss Guide: Lab, Acid & Plant Mouths",
  description:
    "Beat Poison Ivy in LEGO Batman Legacy: reach the lab, dodge acid, hit exposed windows, clear extra plants, and tie up the plant mouths.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Poison Ivy Boss Guide: Lab Entrance, Acid, and Plant Mouths",
    description:
      "Learn how to reach Poison Ivy’s lab, survive the Queen of Thorns plant, punish exposed windows, and finish the mouth tie-up sequence.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Poison Ivy starting her Queen of Thorns plant boss fight in LEGO Batman Legacy.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Poison Ivy Boss Guide: Lab, Acid & Plant Mouths",
    description:
      "Reach the lab, survive acid pressure, hit exposed windows, and finish Poison Ivy with the mouth tie-up prompt.",
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
          name: "Poison Ivy Boss Guide",
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
        "LEGO Batman Legacy Poison Ivy Boss Guide: Lab Entrance, Queen of Thorns, Acid Attack, Extra Plants and Mouth Tie-Up Prompt",
      description:
        "A player-focused LEGO Batman Legacy Poison Ivy boss guide explaining how to reach Poison Ivy’s lab through the green overgrowth, how the Pamela Isley transformation leads into the Queen of Thorns plant fight, how to read the acid attack and exposed damage window, how to handle extra plant pressure, why normal attacks stop being the answer near the end, and how to use the prompted mouth tie-up interaction to finish the boss sequence.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-20",
      dateModified: "2026-05-20",
      about: [
        {
          "@type": "VideoGame",
          name: "LEGO Batman: Legacy of the Dark Knight",
        },
        { "@type": "Thing", name: "Poison Ivy" },
        { "@type": "Thing", name: "Poison Ivy boss fight" },
        { "@type": "Thing", name: "Pamela Isley" },
        { "@type": "Thing", name: "Queen of Thorns" },
        { "@type": "Thing", name: "Acid attack" },
        { "@type": "Thing", name: "Plant mouths" },
        { "@type": "Thing", name: "Mouth tie-up prompt" },
        { "@type": "Thing", name: "Poison Ivy lab entrance" },
        { "@type": "Thing", name: "LEGO Batman boss guide" },
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
          name: "How do you beat Poison Ivy in LEGO Batman Legacy?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Cut through the green overgrowth to reach the lab, dodge the acid pressure, attack only when the plant exposes itself, clear extra plants, and tie up the active plant mouths at the end.",
          },
        },
        {
          "@type": "Question",
          name: "How do you get into Poison Ivy’s lab?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Do not push through the wall of green directly. Use the nearby buildable or spare-parts route to cut through the dense overgrowth and reveal the hidden lab entrance.",
          },
        },
        {
          "@type": "Question",
          name: "When can you damage Poison Ivy?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Damage the boss when the Queen of Thorns plant overextends and exposes itself after a pressure pattern.",
          },
        },
        {
          "@type": "Question",
          name: "How do you avoid the acid attack?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Back away when the acid attack starts. Treat acid as a spacing check, then punish only after the plant becomes exposed.",
          },
        },
        {
          "@type": "Question",
          name: "What do you do when Ivy summons more plants?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Clear the closest plant threats first so you have enough room to read the main plant’s next cue.",
          },
        },
        {
          "@type": "Question",
          name: "How do you tie up the plant mouths?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "When the prompt appears, move to each active mouth interaction and use the tie-up prompt until the sequence resolves.",
          },
        },
        {
          "@type": "Question",
          name: "Why is the Poison Ivy fight not ending?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You are probably still attacking normally instead of using the mouth tie-up prompt. The final step is an interaction check.",
          },
        },
        {
          "@type": "Question",
          name: "Does Poison Ivy have exact health phases?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The useful route is based on visible cues, not exact health percentages: acid pressure, exposed windows, extra plants, and the mouth tie-up finish.",
          },
        },
        {
          "@type": "Question",
          name: "Do you need a later character for Poison Ivy?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. The story route gives you what you need. The key is following the plant mechanics and using the final mouth prompt.",
          },
        },
        {
          "@type": "Question",
          name: "What should you do after Poison Ivy?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Continue the story and return to the guide hub if you are planning the next boss route or cleanup path.",
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
          title="Poison Ivy Boss Guide: Reach the Lab, Survive Acid, and Tie the Plant Mouths"
          description="Cut through the green overgrowth, survive the Queen of Thorns plant, punish exposed windows, and use the mouth tie-up prompt to finish Poison Ivy."
          gameTitle="LEGO Batman: Legacy of the Dark Knight"
          gameHref="/lego-batman"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 20, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <PoisonIvyBossContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}