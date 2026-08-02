import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import QuasimorphRealWareStoryContent from "@/data/quasimorph/start-realware-storyline.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/quasimorph`;
const pageUrl = `${hubUrl}/start-realware-storyline`;

const imageUrls = [
  `${siteUrl}/images/quasimorph/quasimorph-ancom-pcpu-recipient-choice.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-realware-ancom-data-confirmation.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-realware-hack-pcpu-request.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-ancom-espionage-venus-contract.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-realware-hacked-pcpu-confirmation.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-realware-emp-scorcher-objective.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-realware-covert-operations-guide-objective.webp`,
];

export const metadata: Metadata = {
  title: "Quasimorph RealWare Storyline Guide: How to Start",
  description:
    "Give the AnCom data to RealWare, find the correct Espionage contract, hack the PCPU, and prepare for the Palace Asteroid EMP Scorcher mission.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "How to Start the RealWare Storyline in Quasimorph",
    description:
      "Follow the AnCom data route, wait for RealWare, complete the correct PCPU hack, and know when not to rush Palace Asteroid.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Quasimorph opening choice allowing the AnCom PCPU to be delivered to RealWare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quasimorph RealWare Storyline Guide",
    description:
      "Start the RealWare route, trigger the AnCom Espionage step and prepare for Covert Operations on Palace Asteroid.",
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
          name: "Start the RealWare Storyline",
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
        "Quasimorph RealWare Storyline Guide: How to Give Away the AnCom Data, Trigger the PCPU Hack, and Reach Palace Asteroid",
      description:
        "This Quasimorph 1.0 RealWare storyline guide explains how to give the opening AnCom PCPU data to RealWare, recognize that the next story step may not appear immediately, wait productively instead of searching for a hidden marker, read the AnCom Espionage request literally, find a matching contract before Time remains expires, complete the PCPU hack and return safely to the Magnum, identify Humankind's Hope Citadel and the EMP Scorcher as the next objective, confirm the Covert Operations Guide entry, and decide when to delay Palace Asteroid until the operator, weapons, armour, medicine and Magnum upgrades provide a real margin for error.",
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
          name: "Quasimorph RealWare storyline",
        },
        {
          "@type": "Thing",
          name: "Quasimorph AnCom data",
        },
        {
          "@type": "Thing",
          name: "Quasimorph AnCom PCPU",
        },
        {
          "@type": "Thing",
          name: "Quasimorph AnCom Espionage",
        },
        {
          "@type": "Thing",
          name: "Quasimorph Palace Asteroid",
        },
        {
          "@type": "Thing",
          name: "Humankind's Hope Citadel",
        },
        {
          "@type": "Thing",
          name: "Quasimorph EMP Scorcher",
        },
        {
          "@type": "Thing",
          name: "Quasimorph Covert Operations",
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
          title="How I Start the RealWare Route and Know When to Wait"
          description="Give the opening AnCom data to RealWare, complete the correct PCPU hack, and delay Palace Asteroid until the campaign can survive the difficulty jump."
          gameTitle="Quasimorph"
          gameHref="/quasimorph"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 2, 2026"
          toc={[
            {
              id: "give-data-to-realware",
              label: "Give the data to RealWare",
            },
            {
              id: "wait-for-contact",
              label: "Wait for RealWare",
            },
            {
              id: "read-hack-request",
              label: "Read the PCPU request",
            },
            {
              id: "find-ancom-espionage",
              label: "Find AnCom Espionage",
            },
            {
              id: "hack-and-extract",
              label: "Hack and extract",
            },
            {
              id: "palace-objective",
              label: "Palace EMP Scorcher",
            },
            {
              id: "do-not-rush-palace",
              label: "When to delay Palace",
            },
            {
              id: "route-boundary",
              label: "What this route confirms",
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
              href: "/quasimorph/quasimorphosis-guide",
              label: "Quasimorphosis, Ecolapse & Barons",
            },
            {
              href: "/quasimorph",
              label: "Quasimorph Guide Hub",
            },
          ]}
        >
          <QuasimorphRealWareStoryContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}