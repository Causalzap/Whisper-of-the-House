import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GreatMartyrsBladeContent from "@/data/mortal-shell-2/great-martyrs-blade.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/great-martyrs-blade`;

const metadataTitle =
  "Mortal Shell 2 Great Martyr's Blade Location & Frost Guide";

const metadataDescription =
  "Find the Great Martyr's Blade in Martyr's Prison, then build around Frost and Captive's Scabstone, with route blockers, comparisons, and upgrade timing.";

const articleDescription =
  "A practical Mortal Shell 2 Great Martyr's Blade guide covering its Martyr's Prison location, the Gloomshade Grove and Blood-Cursed Lithopod route, the Eredrim route split, Frost build, Captive's Scabstone, Tarstones, weapon comparisons, and when the Blade is worth upgrading.";

const imageUrls = [
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-great-martyrs-blade-weapon.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-great-martyrs-blade-route-map.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-martyrs-prison.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-great-martyrs-blade-frost.webp`,
];

const toc = [
  {
    id: "great-martyrs-blade-location",
    label: "Great Martyr's Blade location",
  },
  {
    id: "blood-cursed-lithopod",
    label: "Blood-Cursed Lithopod",
  },
  {
    id: "eredrim-route-split",
    label: "Where the Eredrim route splits",
  },
  {
    id: "martyrs-prison",
    label: "Reach Martyr's Prison",
  },
  {
    id: "how-to-get-great-martyrs-blade",
    label: "How to get the Blade",
  },
  {
    id: "is-great-martyrs-blade-good",
    label: "Is the Blade good?",
  },
  {
    id: "moveset",
    label: "Moveset",
  },
  {
    id: "why-it-feels-slow",
    label: "Why it feels slow",
  },
  {
    id: "best-tarstones",
    label: "Best Tarstones",
  },
  {
    id: "frost-build",
    label: "Best Frost build",
  },
  {
    id: "frost-location",
    label: "Where to get Frost",
  },
  {
    id: "captives-scabstone",
    label: "Captive's Scabstone",
  },
  {
    id: "frost-and-scabstone",
    label: "Frost + Scabstone setup",
  },
  {
    id: "should-i-rush-frost",
    label: "Should I rush Frost?",
  },
  {
    id: "worth-getting-early",
    label: "Worth getting early?",
  },
  {
    id: "battle-axe-vs-great-martyrs-blade",
    label: "Blade vs Battle Axe",
  },
  {
    id: "blade-vs-axatana",
    label: "Blade vs Axatana",
  },
  {
    id: "upgrade-priority",
    label: "When to upgrade it",
  },
  {
    id: "cant-reach-martyrs-prison",
    label: "Can't reach Martyr's Prison?",
  },
  {
    id: "great-martyrs-blade-route",
    label: "Route recap",
  },
];

const relatedLinks = [
  {
    href: "/mortal-shell-2",
    label: "Mortal Shell 2 Guide Hub",
  },
  {
    href: "/mortal-shell-2/weapons-guide",
    label: "Best Weapons & Weapon Tier List",
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
    title: metadataTitle,
    description:
      "Find the Great Martyr's Blade through Gloomshade Grove and Martyr's Prison, then learn why Frost and Captive's Scabstone make the slow greatsword much stronger.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-18",
    modifiedTime: "2026-08-25",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Great Martyr's Blade weapon in Mortal Shell 2",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Great Martyr's Blade location, Martyr's Prison route, Frost build, Captive's Scabstone, comparisons, and upgrade timing.",
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
          name: "Great Martyr's Blade Guide",
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
        "Mortal Shell 2 Great Martyr's Blade Location & Frost Guide",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-18",
      dateModified: "2026-08-25",
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
          name: "Great Martyr's Blade location",
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
          name: "Great Martyr's Blade Frost build",
        },
        {
          "@type": "Thing",
          name: "Frost",
        },
        {
          "@type": "Thing",
          name: "Captive's Scabstone",
        },
        {
          "@type": "Thing",
          name: "Great Martyr's Blade Tarstones",
        },
        {
          "@type": "Thing",
          name: "Veteran's Battle Axe",
        },
        {
          "@type": "Thing",
          name: "Axatana",
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
          title="Mortal Shell 2 Great Martyr's Blade Location & Frost Guide"
          description="I get the Great Martyr's Blade through Gloomshade Grove and Martyr's Prison, test its slow moveset before spending heavily, then build around Frost and Captive's Scabstone when I want heavy control and large punish windows."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 25, 2026"
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