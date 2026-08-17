import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GhostParametersContent from "@/data/ghost-recon-wildlands/ghost-parameters.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/ghost-recon-wildlands`;
const pageUrl = `${hubUrl}/ghost-parameters`;

const metadataTitle =
  "Ghost Recon Wildlands Ghost Parameters & Settings Guide";

const metadataDescription =
  "Use Ghost Parameters, Difficulty, HUD, and World settings for One Primary, Tactical Reload, squad size, SAMs, time, weather, and survival rules.";

const imageUrls = [
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-ghost-parameters-menu.webp`,
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-one-primary-tactical-reload.webp`,
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-one-primary-pistol-close-quarters.webp`,
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-world-session-settings.webp`,
  `${siteUrl}/images/ghost-recon-wildlands/ghost-recon-wildlands-time-weather-settings.webp`,
];

const toc = [
  {
    id: "where-ghost-parameters-are",
    label: "Where the new settings are",
  },
  {
    id: "one-primary-weapon",
    label: "One Primary Weapon",
  },
  {
    id: "tactical-reload",
    label: "Tactical Reload",
  },
  {
    id: "one-primary-plus-tactical",
    label: "My normal replay baseline",
  },
  {
    id: "survival-settings",
    label: "Revive & health regeneration",
  },
  {
    id: "difficulty-hud",
    label: "Difficulty & HUD",
  },
  {
    id: "world-session-settings",
    label: "World & Session settings",
  },
  {
    id: "ai-squad-size",
    label: "AI squad size",
  },
  {
    id: "alarms-jammers",
    label: "Alarms & jammers",
  },
  {
    id: "sam-launchers",
    label: "SAM launchers",
  },
  {
    id: "time-weather",
    label: "Time & weather",
  },
  {
    id: "my-settings",
    label: "My 2026 replay settings",
  },
];

const relatedLinks = [
  {
    href: "/ghost-recon-wildlands",
    label: "Ghost Recon Wildlands Guide Hub",
  },
  {
    href: "/ghost-recon-wildlands/2026-update",
    label: "Ghost Recon Wildlands 2026 Update",
  },
  {
    href: "/ghost-recon-wildlands/last-rites-walkthrough",
    label: "Last Rites Walkthrough",
  },
  {
    href: "/ghost-recon-wildlands/predator-mission",
    label: "Predator Mission Guide",
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
    title: "Ghost Recon Wildlands Ghost Parameters & Settings Guide",
    description:
      "See how I use One Primary, Tactical Reload, Difficulty, HUD, squad size, SAMs, alarms, jammers, time, weather, and survival settings in a 2026 replay.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-17",
    modifiedTime: "2026-08-17",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Ghost Recon Wildlands Ghost Parameters menu showing Tactical Reload One Weapon and revive settings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghost Recon Wildlands Ghost Parameters & Settings",
    description:
      "My practical settings for One Primary, Tactical Reload, Difficulty, HUD, squad size, SAMs, time, weather, revives, and health regeneration.",
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
          name: "Ghost Recon Wildlands Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Ghost Parameters & Settings",
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
        "Ghost Recon Wildlands Ghost Parameters, Difficulty, HUD and World Settings Guide",
      description:
        "A practical Ghost Recon Wildlands 2026 settings guide covering Ghost Parameters, Difficulty, HUD, and World and Session settings. It explains when I use One Primary Weapon and Tactical Reload, when I keep normal revives and health regeneration, how I approach AI squad size, alarms, jammers and SAM launchers, and when fixed or dynamic time and weather are useful. The focus is on changing one layer at a time instead of turning every realism option on at once.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-17",
      dateModified: "2026-08-17",
      articleSection: "Ghost Recon Wildlands Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Tom Clancy's Ghost Recon Wildlands",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Ghost Recon Wildlands Ghost Parameters",
        },
        {
          "@type": "Thing",
          name: "Ghost Recon Wildlands 2026 settings",
        },
        {
          "@type": "Thing",
          name: "One Primary Weapon",
        },
        {
          "@type": "Thing",
          name: "Tactical Reload",
        },
        {
          "@type": "Thing",
          name: "Ghost Recon Wildlands Difficulty settings",
        },
        {
          "@type": "Thing",
          name: "Ghost Recon Wildlands HUD settings",
        },
        {
          "@type": "Thing",
          name: "Ghost Recon Wildlands World and Session settings",
        },
        {
          "@type": "Thing",
          name: "Ghost Recon Wildlands AI squad size",
        },
        {
          "@type": "Thing",
          name: "Ghost Recon Wildlands SAM launchers",
        },
        {
          "@type": "Thing",
          name: "Ghost Recon Wildlands time and weather settings",
        },
        {
          "@type": "Thing",
          name: "Ghost Recon Wildlands revive settings",
        },
        {
          "@type": "Thing",
          name: "Ghost Recon Wildlands health regeneration",
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
          title="The Wildlands Settings I Actually Change in 2026"
          description="I start with One Primary and Tactical Reload, keep most survival and world rules familiar, then change Difficulty, HUD, squad size, SAMs, time, and weather only when I know what problem I am solving."
          gameTitle="Ghost Recon Wildlands"
          gameHref="/ghost-recon-wildlands"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 17, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GhostParametersContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}