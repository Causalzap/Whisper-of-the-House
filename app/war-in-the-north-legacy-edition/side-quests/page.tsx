import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WarInTheNorthLegacyEditionSideQuestsContent from "@/data/war-in-the-north-legacy-edition/side-quests.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/war-in-the-north-legacy-edition`;
const pageUrl = `${hubUrl}/side-quests`;

const imageUrls = [
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-rowlie-locket-repair.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-work-of-westernesse-angmir.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-seers-words-elrond.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-athelas-cure.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-barrow-downs-ranger-camp.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-bilbo-poet-quest.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-truesilver-mithril-return.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-black-pearl-turn-in.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-glorihirin-rescue.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-glorihirin-quest-complete.webp`,
];

const toc = [
  {
    id: "bree-side-quests",
    label: "Bree side quests",
  },
  {
    id: "fornost-side-quests",
    label: "Fornost quest items",
  },
  {
    id: "sarn-ford-barrow-downs",
    label: "Sarn Ford & Barrow-downs",
  },
  {
    id: "rivendell-side-quests",
    label: "Rivendell side quests",
  },
  {
    id: "truesilver",
    label: "Truesilver & Mithril",
  },
  {
    id: "nordinbad-side-quests",
    label: "Nordinbad side quests",
  },
  {
    id: "mirkwood-captive",
    label: "The Captive",
  },
  {
    id: "side-quest-missables",
    label: "Missable checkpoints",
  },
];

const relatedLinks = [
  {
    href: "/war-in-the-north-legacy-edition",
    label: "War in the North Legacy Edition Guide Hub",
  },
  {
    href: "/war-in-the-north-legacy-edition/walkthrough",
    label: "Full Legacy Edition Walkthrough",
  },
  {
    href: "/war-in-the-north-legacy-edition/weapons-mithril-upgrades",
    label: "Weapons & Mithril Guide",
  },
  {
    href: "/war-in-the-north-legacy-edition/secrets",
    label: "All Secrets Checklist",
  },
  {
    href: "/war-in-the-north-legacy-edition/achievements",
    label: "Achievements & 100% Roadmap",
  },
];

export const metadata: Metadata = {
  title: "War in the North Legacy Edition Side Quests & Missables",
  description:
    "Complete War in the North Legacy Edition side quests in campaign order, with Bree, Rivendell, Truesilver, Black Pearl, Glorihirin, and hand-in timing.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "War in the North Legacy Edition Side Quests & Missables",
    description:
      "Follow side quests alongside the campaign, know which items to keep, when to return to each hub, and which optional quests should be closed before moving on.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-13",
    modifiedTime: "2026-08-13",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Repairing Rowlie's locket in Bree in War in the North Legacy Edition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "War in the North Legacy Edition Side Quests & Missables",
    description:
      "Complete the main side quests in campaign order and avoid missing quest items, return visits, and late hand-ins.",
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
          name: "Side Quests & Missables",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      url: pageUrl,
      headline:
        "War in the North Legacy Edition Side Quests & Missables",
      description:
        "A campaign-order side quest guide covering Bree, Fornost quest items, Sarn Ford, the Barrow-downs, Rivendell, Truesilver, Nordinbad, Mirkwood, Glorihirin, and the main hand-in checkpoints.",
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
          title="War in the North Legacy Edition Side Quests & Missables"
          description="Complete optional quests while the main campaign already has you in the correct region, preserve the important quest items, and use every hub return as a hand-in checkpoint."
          gameTitle="The Lord of the Rings: War in the North - Legacy Edition"
          gameHref="/war-in-the-north-legacy-edition/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 13, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WarInTheNorthLegacyEditionSideQuestsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}