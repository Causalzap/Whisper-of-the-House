
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DualWieldContent from "@/data/cyberpunk-2077/dual-wield.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/cyberpunk-2077`;
const pageUrl = `${hubUrl}/dual-wield`;

const metadataTitle =
  "Cyberpunk 2077 Dual Wield: Double Trouble & Guns";

const metadataDescription =
  "Unlock Double Trouble at Cool 9, equip two Power handguns, compare damage penalties, and use Triple Tequila with Heywood Hurricane.";

const articleDescription =
  "Unlock and use dual wielding in Cyberpunk 2077 Update 2.5 with Double Trouble, compatible Power Pistols and Revolvers, the 37.5% per-weapon damage penalty, Triple Tequila stacks, Heywood Hurricane, weapon pairings, and attribute reset decisions.";

const imageUrls = [
  `${siteUrl}/images/cyberpunk-2077/dual-wield-double-trouble.webp`,
  `${siteUrl}/images/cyberpunk-2077/dual-wield-primary-secondary-weapons.webp`,
  `${siteUrl}/images/cyberpunk-2077/dual-wield-triple-tequila.webp`,
  `${siteUrl}/images/cyberpunk-2077/dual-wield-two-right-hands.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "unlock",
    label: "Unlock Double Trouble",
  },
  {
    id: "compatible-weapons",
    label: "Compatible handguns",
  },
  {
    id: "equip",
    label: "Equip two weapons",
  },
  {
    id: "damage",
    label: "Damage penalty",
  },
  {
    id: "perks",
    label: "All four supporting perks",
  },
  {
    id: "combat-loop",
    label: "Heywood Hurricane timing",
  },
  {
    id: "iconic-weapons",
    label: "Iconic weapon interactions",
  },
  {
    id: "reset",
    label: "Existing character & reset",
  },
  {
    id: "worth-it",
    label: "Is Double Trouble worth it?",
  },
];

const relatedLinks = [
  {
    href: "/cyberpunk-2077",
    label: "Cyberpunk 2077 Update 2.5",
  },
  {
    href: "/cyberpunk-2077/clampdown-walkthrough",
    label: "Clampdown Walkthrough",
  },
  {
    href: "/cyberpunk-2077/welcome-to-paradise-walkthrough",
    label: "Welcome to Paradise Walkthrough",
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
    description: articleDescription,
    siteName: "Whisper of the House",
    images: imageUrls,
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImage],
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
          name: "Cyberpunk 2077",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Dual Wielding",
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
      url: pageUrl,
      headline:
        "Cyberpunk 2077 Dual Wield Guide: Double Trouble and Best Guns",
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-23",
      dateModified: "2026-10-23",
      about: [
        {
          "@type": "VideoGame",
          name: "Cyberpunk 2077",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Double Trouble perk",
        },
        {
          "@type": "Thing",
          name: "Dual wielding Power Pistols and Revolvers",
        },
        {
          "@type": "Thing",
          name: "Heywood Hurricane",
        },
        {
          "@type": "Thing",
          name: "Triple Tequila",
        },
        {
          "@type": "Thing",
          name: "Two Right Hands",
        },
        {
          "@type": "Thing",
          name: "Plan B, DR5 Nova and Nue",
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
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "Whisper of the House",
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}#organization`,
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
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Cyberpunk 2077 Dual Wield Guide: Double Trouble & Best Guns"
          description="Unlock two-gun combat at Cool 9, understand the damage penalty, combine Power Pistols and Revolvers, and time Heywood Hurricane around Triple Tequila stacks."
          gameTitle="Cyberpunk 2077"
          gameHref="/cyberpunk-2077"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DualWieldContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
