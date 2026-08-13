import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WarInTheNorthLegacyEditionChangesContent from "@/data/war-in-the-north-legacy-edition/legacy-edition-changes.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/war-in-the-north-legacy-edition`;
const pageUrl = `${hubUrl}/legacy-edition-changes`;

const imageUrls = [
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-party-hud-bars.webp`,
];

const toc = [
  {
    id: "hot-swap",
    label: "Character hot-swap",
  },
  {
    id: "updated-party-ui",
    label: "Updated party HUD",
  },
  {
    id: "target-lock",
    label: "Refined target lock",
  },
  {
    id: "autosave",
    label: "Autosave",
  },
  {
    id: "bug-fixes",
    label: "Bug fixes",
  },
  {
    id: "coop-changes",
    label: "Co-op changes",
  },
  {
    id: "crossplay",
    label: "Crossplay status",
  },
  {
    id: "gyro-controls",
    label: "Gyro controls",
  },
  {
    id: "pc-version",
    label: "PC requirements",
  },
  {
    id: "what-did-not-change",
    label: "What did not change",
  },
  {
    id: "old-guides",
    label: "Using old guides",
  },
  {
    id: "old-save",
    label: "Old save compatibility",
  },
];

const relatedLinks = [
  {
    href: "/war-in-the-north-legacy-edition",
    label: "War in the North Legacy Edition Guide Hub",
  },
  {
    href: "/war-in-the-north-legacy-edition/best-character-builds",
    label: "Best Character & Builds",
  },
  {
    href: "/war-in-the-north-legacy-edition/co-op-crossplay-troubleshooting",
    label: "Co-op & Crossplay Guide",
  },
  {
    href: "/war-in-the-north-legacy-edition/walkthrough",
    label: "Full Legacy Edition Walkthrough",
  },
];

export const metadata: Metadata = {
  title: "War in the North Legacy Edition Changes: What's New",
  description:
    "See what changed in War in the North Legacy Edition, including hot-swap characters, updated UI, target lock, autosave, co-op, gyro, and PC changes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "War in the North Legacy Edition Changes: What's New",
    description:
      "Compare Legacy Edition with the original game, including character hot-swapping, party HUD changes, target locking, autosave, co-op, controls, and PC requirements.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-13",
    modifiedTime: "2026-08-13",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Updated party HUD in War in the North Legacy Edition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "War in the North Legacy Edition Changes: What's New",
    description:
      "See the Legacy Edition changes to characters, UI, targeting, saves, co-op, controls, and the modern PC release.",
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
          name: "War in the North Legacy Edition Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Legacy Edition Changes",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      url: pageUrl,
      headline: "War in the North Legacy Edition Changes: What's New",
      description:
        "A focused comparison of War in the North Legacy Edition with the original release, covering seamless character hot-swapping, updated party information, refined targeting, autosave, co-op support, gyro controls, PC requirements, and returning-player compatibility questions.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-13",
      dateModified: "2026-08-13",
      mainEntityOfPage: pageUrl,
      about: {
        "@type": "VideoGame",
        name: "The Lord of the Rings: War in the North - Legacy Edition",
        url: hubUrl,
      },
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
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="War in the North Legacy Edition Changes"
          description="See what actually changed from the original War in the North, which old advice still works, and which Legacy Edition systems I re-check before relying on an older guide."
          gameTitle="The Lord of the Rings: War in the North - Legacy Edition"
          gameHref="/war-in-the-north-legacy-edition/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 13, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WarInTheNorthLegacyEditionChangesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}