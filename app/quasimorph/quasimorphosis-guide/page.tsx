import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import QuasimorphosisGuideContent from "@/data/quasimorph/quasimorphosis-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/quasimorph`;
const pageUrl = `${hubUrl}/quasimorphosis-guide`;

const imageUrls = [
  `${siteUrl}/images/quasimorph/quasimorph-quasimorphosis-grasp-152.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-eolapse-first-turn-invulnerable.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-cyborg-head-minus-one-quasimorphosis.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-quasimorphosis-grasp-228.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-eolapse-phasing-enemy.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-nobilis-baron-resistances.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-baron-kill-floor-still-dangerous.webp`,
];

export const metadata: Metadata = {
  title: "Quasimorph Quasimorphosis Guide: Meter, Ecolapse & Barons",
  description:
    "Control the Quasimorphosis meter, survive Ecolapse, use reduction items wisely, and decide when to extract or fight a Baron in Quasimorph 1.0.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "How to Survive Quasimorphosis in Quasimorph 1.0",
    description:
      "Read Grasp as a mission clock, react correctly to an Ecolapse, control the meter and avoid an unprepared Baron fight.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Quasimorph mission showing the Quasimorphosis meter at 152 Grasp during a large first floor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quasimorph Quasimorphosis Guide",
    description:
      "Control Grasp, survive Ecolapse and decide when to extract instead of forcing an unprepared Baron fight.",
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
          name: "Quasimorph Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Quasimorphosis Guide",
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
        "Quasimorph Quasimorphosis Guide: How to Control the Meter, Survive Ecolapse, and Prepare for Barons",
      description:
        "This Quasimorph 1.0 Quasimorphosis guide explains how to read Grasp as a mission clock, judge the risk of long multi-floor contracts, avoid unnecessary Quasimorphosis increases from flesh, react to the invulnerable first turn after an Ecolapse, use Cigarettes and equipment such as the Cyborg Head to control the meter, decide when maximum Quasimorphosis should trigger extraction instead of further looting, inspect Baron resistances before committing to a damage type, prepare a defensible Baron encounter, and preserve enough ammunition, treatment and movement to survive the Quasimorphs that remain after the Baron dies.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-02",
      dateModified: "2026-08-02",
      about: [
        {
          "@type": "VideoGame",
          name: "Quasimorph",
        },
        {
          "@type": "Thing",
          name: "Quasimorphosis",
        },
        {
          "@type": "Thing",
          name: "Quasimorphosis meter",
        },
        {
          "@type": "Thing",
          name: "Grasp",
        },
        {
          "@type": "Thing",
          name: "Ecolapse",
        },
        {
          "@type": "Thing",
          name: "Quasimorph Baron",
        },
        {
          "@type": "Thing",
          name: "Nobilis",
        },
        {
          "@type": "Thing",
          name: "Gladius Maximus",
        },
        {
          "@type": "Thing",
          name: "Quasimorphosis reduction items",
        },
        {
          "@type": "Thing",
          name: "Cyborg Head",
        },
        {
          "@type": "Thing",
          name: "Absentia",
        },
        {
          "@type": "Thing",
          name: "Quasimorph 1.0",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="How I Control Quasimorphosis and Know When to Leave"
          description="Treat Grasp as a mission clock, use the first Ecolapse turn to reposition, and fight a Baron only after the objective and escape route are secured."
          gameTitle="Quasimorph"
          gameHref="/quasimorph"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 2, 2026"
          toc={[
            {
              id: "read-meter-as-clock",
              label: "Read the meter as a clock",
            },
            {
              id: "what-raises-meter",
              label: "Flesh and meter pressure",
            },
            {
              id: "eolapse-first-turn",
              label: "Ecolapse first turn",
            },
            {
              id: "reduction-items",
              label: "Use reduction items",
            },
            {
              id: "maximum-q",
              label: "What happens at 1000",
            },
            {
              id: "fight-or-extract",
              label: "Fight or extract",
            },
            {
              id: "prepare-baron-room",
              label: "Prepare for the Baron",
            },
            {
              id: "after-baron",
              label: "After the Baron dies",
            },
            {
              id: "absentia",
              label: "Absentia loadouts",
            },
            {
              id: "take-control-turn-back",
              label: "Take, control or turn back",
            },
          ]}
          relatedLinks={[
            {
              href: "/quasimorph/beginner-guide",
              label: "Quasimorph Beginner Guide",
            },
            {
              href: "/quasimorph/contracts-guide",
              label: "Contracts, Rewards & Mission Choice",
            },
            {
              href: "/quasimorph/ship-upgrades",
              label: "Best Ship Upgrades",
            },
            {
              href: "/quasimorph/loot-priority",
              label: "Early-Game Loot Priority",
            },
            {
              href: "/quasimorph/wounds-infection-medicine",
              label: "Wounds, Infection & Medicine",
            },
            {
              href: "/quasimorph/start-realware-storyline",
              label: "Start the RealWare Storyline",
            },
            {
              href: "/quasimorph",
              label: "Quasimorph Guide Hub",
            },
          ]}
        >
          <QuasimorphosisGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}