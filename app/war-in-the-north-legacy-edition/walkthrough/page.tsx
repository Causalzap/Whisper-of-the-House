import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WarInTheNorthLegacyEditionWalkthroughContent from "@/data/war-in-the-north-legacy-edition/walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/war-in-the-north-legacy-edition`;
const pageUrl = `${hubUrl}/walkthrough`;

const imageUrls = [
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-fornost-hidden-wall.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-beleram-rescue.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-fornost-war-machines.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-barrow-downs-large-barrow.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-rivendell-arrival.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-ettenmoors-beleram.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-mount-gundabad-collapse.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-nordinbad-arrival.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-radagast-rescue.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-urgost-deal.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-nordinbad-siege.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-carn-dum-final-bridge.webp`,
];

const toc = [
  {
    id: "bree-fornost",
    label: "Bree to Fornost",
  },
  {
    id: "fornost-war-machines",
    label: "Fornost war machines",
  },
  {
    id: "sarn-ford",
    label: "Return to Sarn Ford",
  },
  {
    id: "barrow-downs",
    label: "Barrow-downs",
  },
  {
    id: "rivendell-first-visit",
    label: "Rivendell",
  },
  {
    id: "ettenmoors",
    label: "Ettenmoors & Bargrisar",
  },
  {
    id: "mount-gundabad",
    label: "Mount Gundabad",
  },
  {
    id: "nordinbad",
    label: "Nordinbad",
  },
  {
    id: "mirkwood",
    label: "Mirkwood",
  },
  {
    id: "urgost",
    label: "Urgost",
  },
  {
    id: "nordinbad-siege",
    label: "Nordinbad siege",
  },
  {
    id: "carn-dum",
    label: "Carn Dûm & Agandaûr",
  },
  {
    id: "after-ending",
    label: "After the ending",
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
    href: "/war-in-the-north-legacy-edition/side-quests",
    label: "Side Quests & Missables",
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
  title: "War in the North Legacy Edition Walkthrough",
  description:
    "Follow my War in the North Legacy Edition walkthrough from Bree and Fornost to Mirkwood, Nordinbad, Carn Dum, Bargrisar, Saenathra, and Agandaur.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "War in the North Legacy Edition Walkthrough",
    description:
      "Follow the main campaign route, fix progression blockers, know when to return to each hub, and beat the major bosses through the Carn Dum finale.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-13",
    modifiedTime: "2026-08-13",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Hidden route through the Fornost ruins in War in the North Legacy Edition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "War in the North Legacy Edition Walkthrough",
    description:
      "Follow the full campaign route from Bree and Fornost through Gundabad, Mirkwood, Nordinbad, Carn Dum, and Agandaur.",
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
          name: "Walkthrough",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      url: pageUrl,
      headline: "War in the North Legacy Edition Walkthrough",
      description:
        "A full War in the North Legacy Edition campaign walkthrough covering progression from Bree and Fornost through Sarn Ford, the Barrow-downs, Rivendell, the Ettenmoors, Mount Gundabad, Nordinbad, Mirkwood, the Grey Mountains, and Carn Dum.",
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
          title="War in the North Legacy Edition Walkthrough"
          description="Follow the main campaign in the order I actually use, fix the progression blockers that look like dead ends, and handle Bargrisar, Wulfrun, Saenathra, the Nordinbad siege, and Agandaûr without wasting resources."
          gameTitle="The Lord of the Rings: War in the North - Legacy Edition"
          gameHref="/war-in-the-north-legacy-edition/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 13, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WarInTheNorthLegacyEditionWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}