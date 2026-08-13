import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WarInTheNorthLegacyEditionSecretsContent from "@/data/war-in-the-north-legacy-edition/secrets.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/war-in-the-north-legacy-edition`;
const pageUrl = `${hubUrl}/secrets`;

const imageUrls = [
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-fornost-hidden-wall.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-fornost-ranger-cache.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-barrow-downs-ranger-camp.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-barrow-downs-ranger-cache.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-barrow-downs-nested-secret.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-barrow-downs-large-barrow.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-amon-gorthad-ranger-cache.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-mount-gundabad-hidden-door.webp`,
];

const toc = [
  {
    id: "what-counts-as-secret",
    label: "What counts as a Secret",
  },
  {
    id: "fornost-secrets",
    label: "Fornost: first 15",
  },
  {
    id: "barrow-downs-secrets",
    label: "Barrow-downs: next 9",
  },
  {
    id: "amon-gorthad-secret",
    label: "Amon Gorthad: Secret 25",
  },
  {
    id: "backup-secrets",
    label: "Backup Secrets",
  },
  {
    id: "seeker-not-unlocking",
    label: "Seeker not unlocking",
  },
];

const relatedLinks = [
  {
    href: "/war-in-the-north-legacy-edition",
    label: "War in the North Legacy Edition Guide Hub",
  },
  {
    href: "/war-in-the-north-legacy-edition/lidless-eye-scrolls",
    label: "All Lidless Eye Scroll Locations",
  },
  {
    href: "/war-in-the-north-legacy-edition/side-quests",
    label: "Side Quests & Missables",
  },
  {
    href: "/war-in-the-north-legacy-edition/achievements",
    label: "Achievements & 100% Roadmap",
  },
  {
    href: "/war-in-the-north-legacy-edition/walkthrough",
    label: "Full Legacy Edition Walkthrough",
  },
];

export const metadata: Metadata = {
  title: "War in the North Legacy Edition Secrets: 25-Secret Route",
  description:
    "Find 25 Secrets in War in the North Legacy Edition with my Fornost, Barrow-downs, and Amon Gorthad route plus easy backup locations for Seeker.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "War in the North Legacy Edition Secrets: 25-Secret Route",
    description:
      "Use a reliable early Seeker route through 15 Fornost Secrets, 9 Barrow-downs Secrets, Amon Gorthad, and later backup locations.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-13",
    modifiedTime: "2026-08-13",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "New Secret Found confirmation in War in the North Legacy Edition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "War in the North Legacy Edition Secrets: 25-Secret Route",
    description:
      "Find 25 Secrets with my Fornost, Barrow-downs, Amon Gorthad, and backup Secret route for Seeker.",
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
          name: "Secrets",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      url: pageUrl,
      headline:
        "War in the North Legacy Edition Secrets: 25-Secret Route",
      description:
        "A practical 25-Secret route for the Seeker achievement covering character-specific hidden interactions in Fornost, the Barrow-downs, Amon Gorthad, and later backup Secret locations.",
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
          title="War in the North Legacy Edition Secrets Guide"
          description="Follow my early 25-Secret route through Fornost, the Barrow-downs, and Amon Gorthad, then use later backup Secrets if one trigger fails to register."
          gameTitle="The Lord of the Rings: War in the North - Legacy Edition"
          gameHref="/war-in-the-north-legacy-edition/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 13, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WarInTheNorthLegacyEditionSecretsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}