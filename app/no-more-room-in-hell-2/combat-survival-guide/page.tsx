import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import CombatSurvivalContent from "@/data/no-more-room-in-hell-2/combat-survival-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/no-more-room-in-hell-2/combat-survival-guide`;

const metadataTitle =
  "No More Room in Hell 2 Combat & Survival Guide";

const metadataDescription =
  "Survive NMRiH2 with better stamina, kicks, ammo, healing, barricades, retreats, loadout choices, extraction play, and Nightmare preparation.";

const imageUrls = [
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-barricaded-door.webp`,
  `${siteUrl}/images/no-more-room-in-hell-2/no-more-room-in-hell-2-nightmare-difficulty.webp`,
];

const toc = [
  {
    id: "combat-priority",
    label: "Combat priorities",
  },
  {
    id: "stamina-and-kicks",
    label: "Stamina & kicks",
  },
  {
    id: "firearms-and-ammo",
    label: "Firearms & ammo",
  },
  {
    id: "squad-inventory",
    label: "Squad inventory",
  },
  {
    id: "carrier-and-cover",
    label: "Carrier & cover",
  },
  {
    id: "doors-and-barricades",
    label: "Doors & barricades",
  },
  {
    id: "healing",
    label: "When to heal",
  },
  {
    id: "retreat",
    label: "When to retreat",
  },
  {
    id: "extraction-combat",
    label: "Extraction combat",
  },
  {
    id: "when-to-buy-loadout",
    label: "When to buy gear",
  },
  {
    id: "nightmare-survival",
    label: "Nightmare survival",
  },
  {
    id: "infection",
    label: "Infection decisions",
  },
];

const relatedLinks = [
  {
    href: "/no-more-room-in-hell-2/how-to-cure-infection",
    label: "How to Cure Infection",
  },
  {
    href: "/no-more-room-in-hell-2/early-extraction",
    label: "Early Extraction Guide",
  },
  {
    href: "/no-more-room-in-hell-2/achievements",
    label: "Achievements Guide",
  },
  {
    href: "/no-more-room-in-hell-2/raven-rock-walkthrough",
    label: "Raven Rock Walkthrough",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title:
      "No More Room in Hell 2 Combat & Survival Guide",
    description:
      "Manage stamina, kicks, ammo, squad inventory, healing, barricades and retreats, then adjust those decisions for extraction and Nightmare.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Barricaded doorway controlling a zombie approach in No More Room in Hell 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "No More Room in Hell 2 Combat & Survival Guide",
    description:
      "Use stamina, kicks, ammo, healing and positioning efficiently, then adapt the same survival rules for extraction and Nightmare.",
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
          name: "No More Room in Hell 2 Guide",
          item: `${siteUrl}/no-more-room-in-hell-2`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Combat & Survival Guide",
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
        "No More Room in Hell 2 Combat and Survival Guide",
      description:
        "A player-focused No More Room in Hell 2 combat and survival guide covering stamina management, kick and melee coordination, firearm priorities, ammunition by caliber, squad inventory roles, carrier-and-cover play, doors and barricades, healing timing, retreat decisions, final extraction combat, starting loadout spending, and the changes needed for Nightmare difficulty. It also explains when infection stops being a combat problem and becomes a Responder-survival decision.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-24",
      dateModified: "2026-08-24",
      articleSection: "No More Room in Hell 2 Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "No More Room in Hell 2",
          url: `${siteUrl}/no-more-room-in-hell-2`,
        },
        {
          "@type": "Thing",
          name: "No More Room in Hell 2 combat",
        },
        {
          "@type": "Thing",
          name: "No More Room in Hell 2 survival",
        },
        {
          "@type": "Thing",
          name: "No More Room in Hell 2 stamina",
        },
        {
          "@type": "Thing",
          name: "No More Room in Hell 2 melee combat",
        },
        {
          "@type": "Thing",
          name: "No More Room in Hell 2 ammunition",
        },
        {
          "@type": "Thing",
          name: "No More Room in Hell 2 barricades",
        },
        {
          "@type": "Thing",
          name: "No More Room in Hell 2 Nightmare difficulty",
        },
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
  ],
};

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title="Combat & Survival Guide: Stamina, Ammo, and Staying Alive"
          description="Stop wasting stamina and ammunition on fights that do not matter. This is how I use kicks, melee, doors, barricades, healing and retreats to keep a Responder alive through the objective and final extraction."
          gameTitle="No More Room in Hell 2"
          gameHref="/no-more-room-in-hell-2"
          breadcrumbBaseHref="/no-more-room-in-hell-2"
          breadcrumbBaseLabel="No More Room in Hell 2 Guide"
          updatedAt="August 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CombatSurvivalContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}