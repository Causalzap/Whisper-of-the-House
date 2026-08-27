import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GreatMartyrsBladeContent from "@/data/mortal-shell-2/great-martyrs-blade.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/great-martyrs-blade`;

const metadataTitle =
  "Mortal Shell 2 Great Martyr's Blade Location & Frost Build";

const metadataDescription =
  "Find the Great Martyr's Blade in Martyr's Prison, get Warden's Stone for Frost, use the One-Legged Wolf shortcut, and decide when the weapon is worth upgrading.";

const articleDescription =
  "A practical Mortal Shell 2 Great Martyr's Blade guide covering its Martyr's Prison location, the One-Legged Wolf and City of Penance shortcut, Warden's Stone, Frost, the Blood-Cursed Lithopod route, Captive's Scabstone, upgrade timing, and weapon comparisons.";

const imageUrls = [
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-great-martyrs-blade-weapon.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-great-martyrs-blade-route-map.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-martyrs-prison.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-great-martyrs-blade-frost.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-wardens-stone-map-location.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-wardens-stone-one-legged-wolf-route.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-wardens-stone-city-of-penance-teleport.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-wardens-stone-pickup.webp`,
];

const toc = [
  {
    id: "great-martyrs-blade-location",
    label: "Blade location & how to get",
  },
  {
    id: "route-to-martyrs-prison",
    label: "Fast route to Martyr's Prison",
  },
  {
    id: "blood-cursed-lithopod",
    label: "Gloomshade Grove route",
  },
  {
    id: "martyrs-prison",
    label: "Get the Great Martyr's Blade",
  },
  {
    id: "is-great-martyrs-blade-good",
    label: "Is the Blade good?",
  },
  {
    id: "frost-build",
    label: "Warden's Stone & Frost build",
  },
  {
    id: "wardens-stone-upgrade",
    label: "Upgrade Warden's Stone?",
  },
  {
    id: "captives-scabstone",
    label: "Captive's Scabstone",
  },
  {
    id: "worth-getting-early",
    label: "Worth getting early?",
  },
  {
    id: "upgrade-priority",
    label: "When to upgrade the Blade",
  },
  {
    id: "weapon-comparisons",
    label: "Weapon comparisons",
  },
  {
    id: "cant-reach-martyrs-prison",
    label: "Route troubleshooting",
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
      "Find the Great Martyr's Blade in Martyr's Prison, use the One-Legged Wolf shortcut to reach City of Penance and Warden's Stone, then build the Blade around Frost.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-18",
    modifiedTime: "2026-08-27",
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
      "Great Martyr's Blade location, Martyr's Prison route, Warden's Stone, Frost build, Captive's Scabstone, and upgrade timing.",
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
        "Great Martyr's Blade Location, Warden's Stone & Frost Build",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-18",
      dateModified: "2026-08-27",
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
          name: "Warden's Stone",
        },
        {
          "@type": "Thing",
          name: "Frost Infusion",
        },
        {
          "@type": "Thing",
          name: "City of Penance",
        },
        {
          "@type": "Thing",
          name: "One-Legged Wolf",
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
          name: "Captive's Scabstone",
        },
        {
          "@type": "Thing",
          name: "Eredrim",
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
          title="Great Martyr's Blade Location, Warden's Stone & Frost Build"
          description="I use the One-Legged Wolf shortcut to reach City of Penance, open the Warden's Stone route, continue to Martyr's Prison for the Great Martyr's Blade, then build around Frost if the slow greatsword fits my playstyle."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 27, 2026"
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