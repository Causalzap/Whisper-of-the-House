
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ValleyOfAshesContent from "@/data/valor-mortis/valley-of-ashes.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/valor-mortis`;
const pageUrl = `${hubUrl}/valley-of-ashes`;

const metadataTitle =
  "Valor Mortis Valley of Ashes Walkthrough: Lift & Quarry";

const metadataDescription =
  "Find the missing scouts, unlock the lift, get the Pistol, choose the Adjutant reward, reach Quarry, and return with Grapple for upgrades.";

const articleDescription =
  "Follow Valley of Ashes from Guidepost to Quarry, open the lift, complete An Unheard Farewell, clear Military Camp, and return for Pure Blade Material after Grapple.";

const heroImage =
  "/images/valor-mortis/valley-of-ashes-lift-hidden-cave.webp";

const heroImageUrl = `${siteUrl}${heroImage}`;

const imageUrls = [
  heroImageUrl,
  `${siteUrl}/images/valor-mortis/valley-of-ashes-scout-orders.webp`,
  `${siteUrl}/images/valor-mortis/valley-of-ashes-military-camp-cannon.webp`,
  `${siteUrl}/images/valor-mortis/valley-of-ashes-dominatus-tent.webp`,
  `${siteUrl}/images/valor-mortis/valley-of-ashes-quarry-grapple-route.webp`,
  `${siteUrl}/images/valor-mortis/valley-of-ashes-quarry-pure-blade-material.webp`,
];

const toc = [
  {
    id: "guidepost",
    label: "Guidepost & Adjutant",
  },
  {
    id: "broken-bridge-pistol",
    label: "Pistol & Lift",
  },
  {
    id: "missing-scouts",
    label: "Missing Scouts",
  },
  {
    id: "demolished-path",
    label: "Truth or Lie Rewards",
  },
  {
    id: "other-side",
    label: "Poison Gas",
  },
  {
    id: "military-camp",
    label: "Military Camp",
  },
  {
    id: "quarry",
    label: "Quarry & Lothaire",
  },
  {
    id: "quarry-return",
    label: "Return After Grapple",
  },
];

const relatedLinks = [
  {
    href: "/valor-mortis",
    label: "All 11 Chapters Walkthrough",
  },
  {
    href: "/valor-mortis/general-lothaire",
    label: "General Lothaire Boss Guide",
  },
  {
    href: "/valor-mortis/the-emissary",
    label: "The Emissary Quest",
  },
  {
    href: "/valor-mortis/fallen-village",
    label: "Fallen Village & Grapple",
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
        url: heroImageUrl,
        width: 1600,
        height: 900,
        alt: "Hidden scouts cave beside the Valley of Ashes lift",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImageUrl],
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
          name: "Valor Mortis",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Valley of Ashes",
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
      headline: metadataTitle,
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-14",
      dateModified: "2026-10-14",
      articleSection: "Valor Mortis Walkthroughs",
      author: {
        "@type": "Organization",
        name: "Whisper of the House",
        url: siteUrl,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      about: [
        {
          "@type": "VideoGame",
          name: "Valor Mortis",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Valley of Ashes",
        },
        {
          "@type": "Thing",
          name: "An Unheard Farewell",
        },
        {
          "@type": "Thing",
          name: "Quarry Grapple upgrades",
        },
      ],
      isPartOf: {
        "@id": `${siteUrl}/#website`,
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
      name: "Whisper of the House",
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}/#organization`,
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
          title={metadataTitle}
          description={articleDescription}
          gameTitle="Valor Mortis"
          gameHref="/valor-mortis"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 14, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ValleyOfAshesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
