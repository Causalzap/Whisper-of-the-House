import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GearsEDayWeaponModsContent from "@/data/gears-of-war-e-day/weapon-mods.mdx";


const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/gears-of-war-e-day`;
const pageUrl = `${hubUrl}/weapon-mods`;

const metadataTitle =
  "Gears of War E-Day Best Weapon Mods & Locations";

const metadataDescription =
  "Find the best Campaign weapon mods in Gears of War: E-Day, including Lancer Laser, Gut Puncher upgrades, Torque Bow Laser and Act 2–4 locations.";

const articleDescription =
  "Find the best Gears of War: E-Day Campaign weapon mods, where to get them in Acts 2 and 4, which Secondary Objectives unlock them, and which upgrades are worth the detour.";

const heroImage =
  `${siteUrl}/images/gears-of-war-e-day/gears-e-day-torque-bow-mobile-targeting-laser.webp`;

const imageUrls = [
  heroImage,
  `${siteUrl}/images/gears-of-war-e-day/gears-e-day-lost-in-translation-lancer-laser.webp`,
  `${siteUrl}/images/gears-of-war-e-day/gears-e-day-vanguard-car-showroom.webp`,
  `${siteUrl}/images/gears-of-war-e-day/gears-e-day-black-raven-down-crashed-raven.webp`,
  `${siteUrl}/images/gears-of-war-e-day/gears-e-day-trapped-locust-train-carriage.webp`,
];

const toc = [
  {
    id: "act-2-best-mods",
    label: "Best Act 2 Mods",
  },
  {
    id: "lancer-laser",
    label: "Lancer Laser",
  },
  {
    id: "hammerburst-bayonet",
    label: "Hammerburst Bayonet",
  },
  {
    id: "trapped-family",
    label: "Trapped Family",
  },
  {
    id: "black-raven-down",
    label: "Gut Puncher Upgrade",
  },
  {
    id: "act-4-mods",
    label: "Best Act 4 Mods",
  },
  {
    id: "blood-mag-overpacked",
    label: "Blood Mag & Overpacked",
  },
  {
    id: "torque-bow-laser",
    label: "Torque Bow Laser",
  },
  {
    id: "trapped-locust",
    label: "Trapped Locust Mods",
  },
  {
    id: "fire-in-the-hole",
    label: "Incendiary Rounds",
  },
  {
    id: "best-priority",
    label: "Best Mods to Prioritize",
  },
];

const relatedLinks = [
  {
    href: "/gears-of-war-e-day/act-2-walkthrough/",
    label: "Act 2 Walkthrough",
  },
  {
    href: "/gears-of-war-e-day/act-4-walkthrough/",
    label: "Act 4 Walkthrough",
  },
  {
    href: "/gears-of-war-e-day/achievements/",
    label: "Achievements",
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
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Torque Bow Mobile Targeting Laser weapon mod in Gears of War E-Day",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImage],
  },
};


export default function GearsEDayWeaponModsPage() {
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
            name: "Gears of War: E-Day",
            item: hubUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Weapon Mods",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "Gears of War: E-Day Best Weapon Mods — Where to Find Them",
        description: articleDescription,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
        author: {
          "@id": `${siteUrl}/#organization`,
        },
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        datePublished: "2026-10-05",
        dateModified: "2026-10-05",
        inLanguage: "en-US",
        image: imageUrls,
        about: {
          "@type": "VideoGame",
          name: "Gears of War: E-Day",
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Whisper of the House",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "en-US",
      },
    ],
  };

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
          title="Gears of War: E-Day Best Weapon Mods — Where to Find Them"
          description={articleDescription}
          gameTitle="Gears of War: E-Day"
          gameHref="/gears-of-war-e-day/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 5, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GearsEDayWeaponModsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}