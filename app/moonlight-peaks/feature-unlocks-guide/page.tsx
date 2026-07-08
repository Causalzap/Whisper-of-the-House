import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FeatureUnlocksContent from "@/data/moonlight-peaks/feature-unlocks-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/moonlight-peaks/feature-unlocks-guide`;

const imageUrls = [
  `${siteUrl}/images/moonlight-peaks/moonlight-peaks-feature-unlocks-death-soul-blobs.webp`,
  `${siteUrl}/images/moonlight-peaks/moonlight-peaks-map-character-locations.webp`,
  `${siteUrl}/images/moonlight-peaks/moonlight-peaks-noel-fishing-competition-three-fish.webp`,
  `${siteUrl}/images/moonlight-peaks/moonlight-peaks-web-of-wonders-inventory-spells.webp`,
  `${siteUrl}/images/moonlight-peaks/moonlight-peaks-a-bridge-too-far-cursed-misty-shores.webp`,
];

const toc = [
  {
    id: "moonlight-peaks-feature-unlocks-guide",
    label: "Unlocks guide",
  },
  {
    id: "unlock-overview",
    label: "Unlock overview",
  },
  {
    id: "use-map-for-unlocks",
    label: "Use the map",
  },
  {
    id: "fishing-unlock",
    label: "Fishing",
  },
  {
    id: "wand-and-spell-unlock",
    label: "Wand and spells",
  },
  {
    id: "bug-net-death-unlock",
    label: "Bug net",
  },
  {
    id: "soul-blobs-and-night-duration",
    label: "Soul Blobs",
  },
  {
    id: "job-board-unlock",
    label: "Job board",
  },
  {
    id: "vampsters",
    label: "Vampsters",
  },
  {
    id: "special-shops-and-nokturna",
    label: "Shops and Nokturna",
  },
  {
    id: "missing-feature-troubleshooting",
    label: "Troubleshooting",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/moonlight-peaks",
    label: "Moonlight Peaks Guide Hub",
  },
  {
    href: "/moonlight-peaks/beginner-guide",
    label: "Moonlight Peaks Beginner Guide",
  },
  {
    href: "/moonlight-peaks/misty-shores-mines-copper-guide",
    label: "Misty Shores, Mines and Copper Guide",
  },
  {
    href: "/moonlight-peaks/early-resources-tool-upgrades-guide",
    label: "Early Resources and Tool Upgrades Guide",
  },
  {
    href: "/moonlight-peaks/barn-animals-guide",
    label: "Barn and Animals Guide",
  },
];

export const metadata: Metadata = {
  title: "Moonlight Peaks Unlocks Guide: Magic, Net & Soul Blobs",
  description:
    "Unlock Moonlight Peaks fishing, broken wand, Aquaflux, bug net, Death, Soul Blobs, Antique Clock, jobs, Vampsters, shops and Nokturna.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Moonlight Peaks Unlocks Guide: Fishing, Magic, Bug Net, Soul Blobs and Jobs",
    description:
      "Find missing Moonlight Peaks features with Noel fishing, broken wand repair, Aquaflux, Death, bug net, 100 Soul Blobs, Antique Clock, Night Duration, Alberta jobs, Vampsters, special shops and Nokturna.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Moonlight Peaks feature unlocks including Death, bug net, Soul Blobs, longer nights and job board.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moonlight Peaks Unlocks Guide",
    description:
      "Unlock fishing, magic, broken wand, bug net, Soul Blobs, jobs, Vampsters, special shops and Nokturna in Moonlight Peaks.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    "@type": "Question",
    name: "How do I unlock fishing in Moonlight Peaks?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Fishing unlocks through Noel's competition. Find Noel, start the challenge, catch 3 fish, and return to him.",
    },
  },
  {
    "@type": "Question",
    name: "Is Noel's fishing challenge a bet?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Some routes frame the competition around a 250 gold wager, so do not start it completely unprepared.",
    },
  },
  {
    "@type": "Question",
    name: "Why is my wand still broken?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "The broken wand is part of the magic story route. Keep progressing toward the Dinner Party / Night 18 stretch, then follow the Luna, Sabrina, Fiona, and Mana Extractor chain.",
    },
  },
  {
    "@type": "Question",
    name: "How do I unlock Aquaflux?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Aquaflux is taught by Luna after the wand repair and magical crop route progress. It is your first watering spell.",
    },
  },
  {
    "@type": "Question",
    name: "Where do I buy spells?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Spells are tied to Webb of Wonders, but buying spells before the wand and mana route is ready will not solve the missing-magic problem.",
    },
  },
  {
    "@type": "Question",
    name: "How do I unlock the bug net?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Progress Orlock's Wine Scheme, A Bridge Too Far, Misty Shores / Ambrosia, and Death encounters. Death gives the net later in that route.",
    },
  },
  {
    "@type": "Question",
    name: "Why do I see bugs but have no net?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "That is normal. Bugs can appear before the net is unlocked, so keep progressing Death and Misty Shores route anchors.",
    },
  },
  {
    "@type": "Question",
    name: "How many Soul Blobs are there?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The full collection route has 100 Soul Blobs.",
    },
  },
  {
    "@type": "Question",
    name: "What does the Antique Clock do?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "The Antique Clock is tied to the Soul Blob reward path. After earning the reward, check Night Duration in settings.",
    },
  },
  {
    "@type": "Question",
    name: "How do I get longer nights?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Progress the Soul Blob and Death reward route, then check Night Duration in settings. Longer nights can extend the night from 15 minutes to 25 minutes.",
    },
  },
  {
    "@type": "Question",
    name: "When does the job board unlock?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "The job board appears later through Alberta the Owl and town progress. Do not plan the first few nights around jobs.",
    },
  },
  {
    "@type": "Question",
    name: "What are Vampsters?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Vampsters are hidden collectible creatures. You carry them back to the cave near Orlock's mansion instead of putting them in normal inventory.",
    },
  },
  {
    "@type": "Question",
    name: "Should I focus on Nokturna cards early?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "No. Nokturna matters later, but it should not replace early unlock priorities like fishing, magic, the net, Misty Shores, and tools.",
    },
  },
  {
    "@type": "Question",
    name: "Why is Misty Shores still blocked?",
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "Misty Shores is tied to A Bridge Too Far and the cursed bridge route. Follow the story and character steps instead of trying to force the bridge.",
    },
  },
];

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
          name: "Moonlight Peaks Guide",
          item: `${siteUrl}/moonlight-peaks`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Feature Unlocks Guide",
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
        "Moonlight Peaks Feature Unlocks Guide: Fishing, Broken Wand, Aquaflux, Bug Net, Soul Blobs, Jobs, Vampsters and Special Shops",
      description:
        "A player-focused Moonlight Peaks feature unlocks guide covering Noel's fishing competition, 3 fish route, broken wand repair, Dinner Party / Night 18 magic progress, Sabrina, Fiona, Mana Extractor, Luna, Aquaflux, Death, bug net, Soul Blobs, Antique Clock, Night Duration, Alberta's job board, Vampsters, special shops, Nokturna cards, map sparkles, and common missing-feature fixes.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-08",
      dateModified: "2026-07-08",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Moonlight Peaks" },
        { "@type": "Thing", name: "Moonlight Peaks feature unlocks" },
        { "@type": "Thing", name: "Moonlight Peaks fishing" },
        { "@type": "Thing", name: "Noel fishing competition" },
        { "@type": "Thing", name: "Moonlight Peaks broken wand" },
        { "@type": "Thing", name: "Moonlight Peaks magic" },
        { "@type": "Thing", name: "Aquaflux" },
        { "@type": "Thing", name: "Sabrina" },
        { "@type": "Thing", name: "Fiona" },
        { "@type": "Thing", name: "Mana Extractor" },
        { "@type": "Thing", name: "Moonlight Peaks bug net" },
        { "@type": "Thing", name: "Death" },
        { "@type": "Thing", name: "Moonlight Peaks Soul Blobs" },
        { "@type": "Thing", name: "Antique Clock" },
        { "@type": "Thing", name: "Moonlight Peaks Night Duration" },
        { "@type": "Thing", name: "Alberta the Owl" },
        { "@type": "Thing", name: "Moonlight Peaks job board" },
        { "@type": "Thing", name: "Moonlight Peaks Vampsters" },
        { "@type": "Thing", name: "Moonlight Peaks special shops" },
        { "@type": "Thing", name: "Moonlight Peaks Nokturna" },
        { "@type": "Thing", name: "Misty Shores" },
        { "@type": "Thing", name: "A Bridge Too Far" },
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
      mainEntity: faqEntities,
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
          title="Moonlight Peaks Feature Unlocks Guide"
          description="Unlock fishing, broken wand repair, Aquaflux, Death, bug net, 100 Soul Blobs, Antique Clock, jobs, Vampsters, special shops and Nokturna."
          gameTitle="Moonlight Peaks"
          gameHref="/moonlight-peaks"
          breadcrumbBaseHref="/moonlight-peaks"
          breadcrumbBaseLabel="Moonlight Peaks Guide"
          updatedAt="July 8, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FeatureUnlocksContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}