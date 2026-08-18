import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import SarielBossGuideContent from "@/data/mortal-shell-2/sariel-boss-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/sariel-boss-guide`;

const metadataTitle =
  "Mortal Shell 2 Sariel Boss Guide: Statuettes & Rewards";

const metadataDescription =
  "Beat Sariel in Mortal Shell 2 through all three stages, destroy the four statuettes to stop his revive, and collect Sariel, Scythe and Caged Hystrix.";

const imageUrls = [
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-sariel-four-statuettes.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-sariel-keep-scaffolding-route.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-sariel-temple-route.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-sariel-nearby-beacon.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-sariel-first-encounter.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-chamber-of-becoming.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-sariel-half-health-phase.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-sariel-clockwork-scythe-reward.webp`,
];

const toc = [
  {
    id: "why-sariel-keeps-reviving",
    label: "Why Sariel keeps reviving",
  },
  {
    id: "sariel-route",
    label: "Sariel route",
  },
  {
    id: "route-from-outskirts",
    label: "Start from Outskirts",
  },
  {
    id: "keep-route",
    label: "Southern keep route",
  },
  {
    id: "temple-route",
    label: "Reach Sariel's temple",
  },
  {
    id: "save-before-sariel",
    label: "Activate the Beacon",
  },
  {
    id: "first-encounter",
    label: "First Sariel fight",
  },
  {
    id: "chamber-of-becoming",
    label: "Chamber of Becoming",
  },
  {
    id: "second-encounter",
    label: "Half-health encounter",
  },
  {
    id: "final-arena",
    label: "Destroy four statuettes",
  },
  {
    id: "sariel-revives",
    label: "Why Sariel revives",
  },
  {
    id: "boss-strategy",
    label: "Boss strategy",
  },
  {
    id: "rewards",
    label: "Sariel rewards",
  },
  {
    id: "should-i-unlock-sariel-early",
    label: "Is Sariel worth rushing?",
  },
  {
    id: "sariel-route-summary",
    label: "Route summary",
  },
];

const relatedLinks = [
  {
    href: "/mortal-shell-2",
    label: "Mortal Shell 2 Guide Hub",
  },
  {
    href: "/mortal-shell-2/progression-guide",
    label: "Progression Guide",
  },
  {
    href: "/mortal-shell-2/all-shells-locations",
    label: "All Shell Locations",
  },
  {
    href: "/mortal-shell-2/weapons-guide",
    label: "Weapons Guide",
  },
  {
    href: "/mortal-shell-2/sidearms-guide",
    label: "Sidearms Guide",
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
    title: "Mortal Shell 2 Sariel: How to Stop the Revive",
    description:
      "Follow all three Sariel encounters, destroy the four statuettes before the final kill, and collect Sariel, Clockwork Scythe and Caged Hystrix.",
    siteName: "Whisper of the House",
    modifiedTime: "2026-08-18",
    images: [
      {
        url: imageUrls[0],
        alt: "Four statuettes that must be destroyed during the final Sariel fight in Mortal Shell 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortal Shell 2 Sariel: Statuettes, Revive & Rewards",
    description:
      "Why Sariel keeps reviving, how the three encounter stages work, and where the Clockwork Scythe and Caged Hystrix fit into the route.",
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
          name: "Mortal Shell 2 Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Sariel Boss Guide",
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
        "Mortal Shell 2 Sariel Boss Guide: Three Encounters, Four Statuettes and Rewards",
      description:
        "A practical Mortal Shell 2 Sariel boss guide covering the route from the Outskirts of Mammon to the temple, the nearby Beacon, the first Sariel fight, the Chamber of Becoming half-health transition, the four statuettes that must be destroyed to stop Sariel reviving, and the Sariel, Clockwork Scythe and Caged Hystrix rewards.",
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
          name: "Sariel, the Endless",
        },
        {
          "@type": "Thing",
          name: "Chamber of Becoming",
        },
        {
          "@type": "Thing",
          name: "Sariel statuettes",
        },
        {
          "@type": "Thing",
          name: "Clockwork Scythe",
        },
        {
          "@type": "Thing",
          name: "Caged Hystrix",
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
          title="How I Beat Sariel and Stop Him From Reviving"
          description="Sariel has three encounter stages, but the real blocker is the final arena. I destroy all four statuettes before committing to the last kill."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SarielBossGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}