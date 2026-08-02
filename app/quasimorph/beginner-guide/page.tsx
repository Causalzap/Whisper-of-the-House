import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import QuasimorphBeginnerGuideContent from "@/data/quasimorph/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/quasimorph`;
const pageUrl = `${hubUrl}/beginner-guide`;

const imageUrls = [
  `${siteUrl}/images/quasimorph/quasimorph-tutorial-unload-all.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-conveyor-first-ship-upgrade.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-first-mission-operator-class-loadout.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-stealth-walk-run-movement-modes.webp`,
];

export const metadata: Metadata = {
  title: "Quasimorph Beginner Guide: First Contract and Safe Extraction",
  description:
    "Unload the tutorial gear, choose a nearby contract, match your class and weapon, and complete your first Quasimorph run without wasting key resources.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Quasimorph Beginner Guide for Your First Safe Run",
    description:
      "Build a replaceable loadout, use Stealth, Walk and Run correctly, finish the objective first, and return to the Magnum with useful progress.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Quasimorph tutorial completion screen showing Unload All before the first real contract",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quasimorph Beginner Guide",
    description:
      "Prepare your first loadout, choose nearby work, finish the objective and extract before the run loses its safety margin.",
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
          name: "Beginner Guide",
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
        "Quasimorph Beginner Guide: How to Complete Your First Contract and Extract Safely",
      description:
        "This Quasimorph 1.0 beginner guide explains how to finish the tutorial without losing useful gear, use Unload All before opening the System Map, install the first Conveyor when the starting Welder is available, choose nearby low-risk work, match the operator and class to a weapon with available ammunition, prepare a conservative first-contract loadout, use Stealth, Walk and Run for different jobs, check Quasimorphosis before launch, stabilize wounds without duplicating the full medicine guide, complete the mission objective before optional looting, and reset the Magnum after extraction by spending resources on the bottleneck that actually affected the run.",
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
          name: "Quasimorph beginner guide",
        },
        {
          "@type": "Thing",
          name: "Quasimorph first contract",
        },
        {
          "@type": "Thing",
          name: "Quasimorph first loadout",
        },
        {
          "@type": "Thing",
          name: "Quasimorph Conveyor",
        },
        {
          "@type": "Thing",
          name: "Quasimorph operator and class",
        },
        {
          "@type": "Thing",
          name: "Quasimorph Stealth Walk Run",
        },
        {
          "@type": "Thing",
          name: "Quasimorph safe extraction",
        },
        {
          "@type": "Thing",
          name: "Quasimorph early game",
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
          title="How I Complete My First Contract Without Wasting the Run"
          description="Unload the tutorial gear, stay near the Magnum, match the class to a weapon you can supply, and leave as soon as the objective is secure."
          gameTitle="Quasimorph"
          gameHref="/quasimorph"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 2, 2026"
          toc={[
            {
              id: "finish-tutorial",
              label: "Finish the tutorial",
            },
            {
              id: "where-to-go-first",
              label: "Where to go first",
            },
            {
              id: "prepare-operator",
              label: "Operator, class and weapon",
            },
            {
              id: "movement-modes",
              label: "Stealth, Walk and Run",
            },
            {
              id: "check-quasimorphosis",
              label: "Check Quasimorphosis",
            },
            {
              id: "treat-wounds",
              label: "Stabilize wounds",
            },
            {
              id: "objective-first",
              label: "Finish the objective first",
            },
            {
              id: "after-extraction",
              label: "Reset the Magnum",
            },
          ]}
          relatedLinks={[
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
              href: "/quasimorph/quasimorphosis-guide",
              label: "Quasimorphosis, Ecolapse & Barons",
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
          <QuasimorphBeginnerGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}