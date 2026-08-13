import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WarInTheNorthLegacyEditionLidlessEyeScrollsContent from "@/data/war-in-the-north-legacy-edition/lidless-eye-scrolls.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/war-in-the-north-legacy-edition`;
const pageUrl = `${hubUrl}/lidless-eye-scrolls`;

const imageUrls = [
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-lidless-eye-scroll-1-fornost.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-lidless-eye-scroll-2-coldfells.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-lidless-eye-scroll-3-high-moors.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-lidless-eye-scroll-4-gundabad.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-lidless-eye-scroll-5-wulfrun.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-lidless-eye-scroll-6-grey-mountains.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-lidless-eye-scroll-7-carn-dum-captain.webp`,
  `${siteUrl}/images/war-in-the-north-legacy-edition/war-in-the-north-legacy-edition-lidless-eye-complete.webp`,
];

const toc = [
  {
    id: "scroll-1-fornost",
    label: "Scroll 1: Fornost",
  },
  {
    id: "start-cult-lidless-eye",
    label: "Speak to Elrond",
  },
  {
    id: "scroll-2-coldfells",
    label: "Scroll 2: Coldfells",
  },
  {
    id: "scroll-3-high-moors",
    label: "Scroll 3: High Moors",
  },
  {
    id: "scroll-4-mount-gundabad",
    label: "Scroll 4: Mount Gundabad",
  },
  {
    id: "scroll-5-wulfrun",
    label: "Scroll 5: Wulfrun",
  },
  {
    id: "scroll-6-urgost-lair",
    label: "Scroll 6: Urgost's Lair",
  },
  {
    id: "scroll-7-carn-dum-captain",
    label: "Scroll 7: Carn Dûm Captain",
  },
  {
    id: "return-scrolls-elrond",
    label: "Return All Scrolls",
  },
  {
    id: "missing-lidless-eye-scroll",
    label: "Missing a Scroll?",
  },
];

const relatedLinks = [
  {
    href: "/war-in-the-north-legacy-edition/",
    label: "War in the North Legacy Edition Guide Hub",
  },
  {
    href: "/war-in-the-north-legacy-edition/achievements",
    label: "Achievements & 100% Roadmap",
  },
  {
    href: "/war-in-the-north-legacy-edition/secrets",
    label: "All Secrets Checklist",
  },
  {
    href: "/war-in-the-north-legacy-edition/side-quests",
    label: "Side Quests & Missables",
  },
  {
    href: "/war-in-the-north-legacy-edition/walkthrough",
    label: "Full Legacy Edition Walkthrough",
  },
];

export const metadata: Metadata = {
  title: "War in the North Legacy Edition Lidless Eye Scroll Locations",
  description:
    "Find all 7 Cult of the Lidless Eye Scrolls in War in the North Legacy Edition, follow them in campaign order, and finish the investigation with Elrond.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "War in the North Legacy Edition Lidless Eye Scroll Locations",
    description:
      "Find all seven Lidless Eye Scrolls from Fornost through Urgost's Lair, then return to Elrond to complete the investigation.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-13",
    modifiedTime: "2026-08-13",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "First Cult of the Lidless Eye Scroll on the Fornost Battlements in War in the North Legacy Edition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "War in the North Legacy Edition Lidless Eye Scroll Locations",
    description:
      "Find all 7 Lidless Eye Scrolls in campaign order and return the completed collection to Elrond.",
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
          name: "Lidless Eye Scroll Locations",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      url: pageUrl,
      headline:
        "War in the North Legacy Edition Lidless Eye Scroll Locations",
      description:
        "A campaign-order guide to all seven Cult of the Lidless Eye Scrolls in War in the North Legacy Edition, covering Fornost, the Ettenmoors, Mount Gundabad, Mirkwood, Urgost's Lair, the Carn Dum Captain, and the final return to Elrond.",
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
          title="War in the North Legacy Edition Lidless Eye Scroll Locations"
          description="Follow all seven Cult of the Lidless Eye Scrolls in campaign order, collect every enemy drop before crossing the next checkpoint, and return the completed investigation to Elrond."
          gameTitle="The Lord of the Rings: War in the North - Legacy Edition"
          gameHref="/war-in-the-north-legacy-edition/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 13, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WarInTheNorthLegacyEditionLidlessEyeScrollsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}