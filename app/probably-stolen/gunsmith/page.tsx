
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GunsmithContent from "@/data/probably-stolen/gunsmith.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/probably-stolen`;
const pageUrl = `${hubUrl}/gunsmith`;

const metadataTitle =
  "How Do You Complete Custom Gun Orders in Probably Stolen?";

const metadataDescription =
  "Complete custom gun orders in Probably Stolen. Check weapon stats, bonus rewards, Weapon Permits, gun mods, Upgrade Services and 3D Printing recipes.";

const articleTitle =
  "How Do You Complete Custom Gun Orders in Probably Stolen?";

const articleDescription =
  "Complete Class I, II and III custom gun orders using an interactive weapon checker. Compare required stats, bonus rewards, Weapon Permits, upgrade services, firearm modifications, 3D printing recipes, and the costs of fulfilling customer orders.";

const imageUrls = [
  `${siteUrl}/images/probably-stolen/gunsmith-class-i-custom-order.webp`,
  `${siteUrl}/images/probably-stolen/gunsmith-firepower-bonus-magazine.webp`,
  `${siteUrl}/images/probably-stolen/gunsmith-upgrade-service-order.webp`,
  `${siteUrl}/images/probably-stolen/gunsmith-metal-cnc-printer-requirements.webp`,
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
    images: [
      {
        url: imageUrls[0],
        alt: "Probably Stolen Class I Custom Gun Order showing Firepower, Accuracy and Reliability requirements",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

const toc = [
  {
    id: "gun-order-checker",
    label: "Interactive Gun Order Checker",
  },
  {
    id: "first-custom-order",
    label: "Complete Your First Gun Order",
  },
  {
    id: "required-bonus-stats",
    label: "Required Stats & Bonus Rewards",
  },
  {
    id: "weapon-permits",
    label: "Class I, II & III Weapon Permits",
  },
  {
    id: "weapon-modifications",
    label: "Best Gun Mods & Condition",
  },
  {
    id: "upgrade-service",
    label: "Customer Gun Upgrade Services",
  },
  {
    id: "3d-printing",
    label: "3D Printing Guns & Gun Parts",
  },
  {
    id: "gunsmith-profit",
    label: "Custom Gun Order Profit",
  },
  {
    id: "gunsmith-extra-sales",
    label: "Ammo & Extra Customer Sales",
  },
  {
    id: "gunsmith-stuck",
    label: "Upgrade Orders vs Gun Buyers",
  },
];

const relatedLinks = [
  {
    href: "/probably-stolen",
    label: "Probably Stolen Beginner Guide",
  },
  {
    href: "/probably-stolen/factions",
    label: "Faction Reputation & Security Perks",
  },
  {
    href: "/probably-stolen/security-investigation",
    label: "Security Investigation & Fixers Calculator",
  },
  {
    href: "/probably-stolen/money-making",
    label: "Money-Making Planner & Profit Calculator",
  },
];

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
          name: "Probably Stolen",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Gunsmith Custom Gun Orders",
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
      headline: articleTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-30",
      dateModified: "2026-10-30",
      about: [
        {
          "@type": "VideoGame",
          name: "Probably Stolen",
        },
        {
          "@type": "Thing",
          name: "Gunsmith starting scenario",
        },
        {
          "@type": "Thing",
          name: "Custom Gun Orders",
        },
        {
          "@type": "Thing",
          name: "Required weapon stats and bonus rewards",
        },
        {
          "@type": "Thing",
          name: "Class I, II and III Weapon Permits",
        },
        {
          "@type": "Thing",
          name: "Firearm modifications and weapon condition",
        },
        {
          "@type": "Thing",
          name: "Gun Upgrade Service Orders",
        },
        {
          "@type": "Thing",
          name: "3D Printer recipes and blueprint chips",
        },
        {
          "@type": "Thing",
          name: "Metal Printing and CNC modules",
        },
        {
          "@type": "Thing",
          name: "Gun Parts and weapon frames",
        },
        {
          "@type": "Thing",
          name: "Custom gun order profits and additional sales",
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        <GuideArticlePage
          title={articleTitle}
          description="Check whether your gun meets a customer's order, calculate bonus rewards, unlock Weapon Permits, and choose the right modifications and 3D Printing recipes."
          gameTitle="Probably Stolen"
          gameHref="/probably-stolen"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 30, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GunsmithContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
