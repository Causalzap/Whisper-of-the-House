import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GreatMartyrsBladeContent from "@/data/mortal-shell-2/great-martyrs-blade.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/great-martyrs-blade`;

const metadataTitle =
  "Mortal Shell 2 Great Martyr's Blade: Location & Frost";

const metadataDescription =
  "Find the Great Martyr's Blade in Mortal Shell 2 through Gloomshade Grove and Martyr's Prison, then see when the later Frost upgrade is worth chasing.";

const imageUrls = [
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-great-martyrs-blade-weapon.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-great-martyrs-blade-route-map.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-martyrs-prison-location-map.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-martyrs-prison.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-great-martyrs-blade-frost.webp`,
];

const toc = [
  {
    id: "great-martyrs-blade-route",
    label: "Great Martyr's Blade route",
  },
  {
    id: "why-i-wait-before-upgrading",
    label: "Why I wait before upgrading",
  },
  {
    id: "start-from-north",
    label: "Start from the north",
  },
  {
    id: "citadel-access",
    label: "Open Citadel access",
  },
  {
    id: "routes-split",
    label: "Where the routes split",
  },
  {
    id: "martyrs-prison",
    label: "Reach Martyr's Prison",
  },
  {
    id: "clear-martyrs-prison",
    label: "Clear Martyr's Prison",
  },
  {
    id: "great-martyrs-blade-location",
    label: "Get the Great Martyr's Blade",
  },
  {
    id: "test-before-spending",
    label: "Test before upgrading",
  },
  {
    id: "frost",
    label: "Why Frost matters",
  },
  {
    id: "frost-location",
    label: "When Frost becomes available",
  },
  {
    id: "should-i-rush-frost",
    label: "Should I rush Frost?",
  },
  {
    id: "worth-getting",
    label: "Is the Blade worth getting?",
  },
  {
    id: "great-martyrs-blade-route-summary",
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
    href: "/mortal-shell-2/how-to-unlock-eredrim",
    label: "How to Unlock Eredrim",
  },
  {
    href: "/mortal-shell-2/kings-crypt-veterans-battle-axe",
    label: "King's Crypt & Veteran's Battle Axe",
  },
  {
    href: "/mortal-shell-2/progression-guide",
    label: "Progression Guide",
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
      "Mortal Shell 2 Great Martyr's Blade: Martyr's Prison & Frost",
    description:
      "Open the Gloomshade Grove route, reach Martyr's Prison, collect the Great Martyr's Blade, and decide when the later Frost detour is worth making.",
    siteName: "Whisper of the House",
    modifiedTime: "2026-08-18",
    images: [
      {
        url: imageUrls[0],
        alt: "Great Martyr's Blade weapon in Mortal Shell 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mortal Shell 2 Great Martyr's Blade: Location & Frost",
    description:
      "How I reach Martyr's Prison for the Great Martyr's Blade and decide whether its later Frost upgrade is worth chasing.",
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
          name: "Great Martyr's Blade",
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
        "Mortal Shell 2 Great Martyr's Blade Guide: Martyr's Prison, Location and Frost",
      description:
        "A practical Mortal Shell 2 Great Martyr's Blade guide covering the route through Gloomshade Grove, the shared Citadel prerequisite, the Blood-Cursed Lithopod, the split from the Eredrim route, Martyr's Prison, the weapon pickup, its slow moveset, and when the later Frost upgrade is worth pursuing.",
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
          name: "Great Martyr's Blade",
        },
        {
          "@type": "Thing",
          name: "Martyr's Prison",
        },
        {
          "@type": "Thing",
          name: "Gloomshade Grove",
        },
        {
          "@type": "Thing",
          name: "Blood-Cursed Lithopod",
        },
        {
          "@type": "Thing",
          name: "Frost",
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
          title="How I Get the Great Martyr's Blade and Decide When to Use Frost"
          description="I open the shared Gloomshade Grove route, split away from the Eredrim path for Martyr's Prison, collect the greatsword, and only chase Frost after deciding the slow weapon is worth keeping."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GreatMartyrsBladeContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}