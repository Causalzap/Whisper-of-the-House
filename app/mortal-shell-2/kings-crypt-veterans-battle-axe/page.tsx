import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import KingsCryptBattleAxeContent from "@/data/mortal-shell-2/kings-crypt-veterans-battle-axe.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/kings-crypt-veterans-battle-axe`;

const metadataTitle =
  "Mortal Shell 2 King's Crypt: Veteran's Battle Axe Guide";

const metadataDescription =
  "Reach King's Crypt through Black Ridge Pass, survive its arrow and floor-spike traps, and find the Veteran's Battle Axe at the end of the route.";

const imageUrls = [
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-kings-crypt-route-map.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-kings-crypt-entrance.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-kings-crypt-wall-arrow-traps.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-kings-crypt-floor-spikes.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-kings-crypt-final-trap-room.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-veterans-battle-axe-pickup.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-veterans-battle-axe-running-heavy.webp`,
];

const toc = [
  {
    id: "kings-crypt-route",
    label: "King's Crypt route",
  },
  {
    id: "why-kings-crypt-is-dangerous",
    label: "Why King's Crypt is dangerous",
  },
  {
    id: "reach-kings-crypt",
    label: "Reach King's Crypt",
  },
  {
    id: "enter-kings-crypt",
    label: "Entering the Crypt",
  },
  {
    id: "wall-arrows",
    label: "Wall-arrow traps",
  },
  {
    id: "floor-spikes",
    label: "Floor-spike traps",
  },
  {
    id: "side-rooms",
    label: "Which side rooms to skip",
  },
  {
    id: "final-trap-section",
    label: "Final trap section",
  },
  {
    id: "veterans-battle-axe",
    label: "Veteran's Battle Axe",
  },
  {
    id: "check-dorsalite",
    label: "Check nearby rewards",
  },
  {
    id: "worth-doing-early",
    label: "Is King's Crypt worth it early?",
  },
  {
    id: "kings-crypt-route-summary",
    label: "Route summary",
  },
];

const relatedLinks = [
  {
    href: "/mortal-shell-2",
    label: "Mortal Shell 2 Guide Hub",
  },
  {
    href: "/mortal-shell-2/weapons-guide",
    label: "Weapons Guide",
  },
  {
    href: "/mortal-shell-2/progression-guide",
    label: "Progression Guide",
  },
  {
    href: "/mortal-shell-2/shrine-of-trials-axe-dagger",
    label: "Axe & Dagger — Shrine of Trials",
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
    title: "Mortal Shell 2 King's Crypt: Traps & Veteran's Battle Axe",
    description:
      "Follow the Black Ridge Pass route to King's Crypt, survive the wall arrows and floor spikes, and collect the Veteran's Battle Axe.",
    siteName: "Whisper of the House",
    modifiedTime: "2026-08-18",
    images: [
      {
        url: imageUrls[3],
        alt: "Floor spike traps inside King's Crypt in Mortal Shell 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortal Shell 2 King's Crypt & Veteran's Battle Axe",
    description:
      "How I reach King's Crypt, handle its arrow and floor traps, and get the Veteran's Battle Axe without wasting the run.",
    images: [imageUrls[3]],
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
          name: "Mortal Shell 2 Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "King's Crypt & Veteran's Battle Axe",
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
        "Mortal Shell 2 King's Crypt Guide: Veteran's Battle Axe and Trap Route",
      description:
        "A practical Mortal Shell 2 King's Crypt guide covering the route through Black Ridge Pass, wall-arrow traps, floor spikes, the final trap section, the Veteran's Battle Axe location, nearby rewards, and when the early dungeon detour is worth doing.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-08-18",
      articleSection: "Mortal Shell 2 Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Mortal Shell II",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "King's Crypt",
        },
        {
          "@type": "Thing",
          name: "Veteran's Battle Axe",
        },
        {
          "@type": "Thing",
          name: "Black Ridge Pass",
        },
        {
          "@type": "Thing",
          name: "King's Crypt traps",
        },
        {
          "@type": "Thing",
          name: "Dorsalite",
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
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="How I Survive King's Crypt and Get the Veteran's Battle Axe"
          description="The enemies are not my biggest problem in King's Crypt. I slow down for the wall arrows and floor spikes, clear the main route, and grab the Veteran's Battle Axe near the end."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <KingsCryptBattleAxeContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}