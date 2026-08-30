import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import RivalsGuideContent from "@/data/big-ambitions/rivals-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/big-ambitions`;
const pageUrl = `${hubUrl}/rivals-guide`;

const metadataTitle =
  "Big Ambitions Rivals Guide: Special Rivals & Takeovers";

const metadataDescription =
  "Learn Big Ambitions 1.0 Special Rivals, Active Rivalry, direct competition, business takeovers, Rival property, and Arch-nemesis requirements.";

const imageUrls = [
  `${siteUrl}/images/big-ambitions/big-ambitions-special-rivals-overview.webp`,
  `${siteUrl}/images/big-ambitions/big-ambitions-active-rivalry-income-impact.webp`,
  `${siteUrl}/images/big-ambitions/big-ambitions-rival-profitable-business-target.webp`,
  `${siteUrl}/images/big-ambitions/big-ambitions-rival-business-takeover-rejected.webp`,
];

const toc = [
  {
    id: "special-rivals",
    label: "Special Rivals",
  },
  {
    id: "first-warning-vs-rivalry",
    label: "Warning vs Active Rivalry",
  },
  {
    id: "when-to-compete",
    label: "When to compete",
  },
  {
    id: "choose-rival-target",
    label: "Choose a Rival target",
  },
  {
    id: "direct-competition",
    label: "Direct competition",
  },
  {
    id: "measure-pressure",
    label: "Measure Rival pressure",
  },
  {
    id: "where-to-expand",
    label: "Where to expand",
  },
  {
    id: "rival-property",
    label: "Rival-owned property",
  },
  {
    id: "business-takeover",
    label: "Business takeover",
  },
  {
    id: "takeover-vs-competition",
    label: "Takeover vs competition",
  },
  {
    id: "rival-pricing",
    label: "Rival price pressure",
  },
  {
    id: "rival-income",
    label: "Watch Rival income",
  },
  {
    id: "arch-nemesis",
    label: "Arch-nemesis",
  },
  {
    id: "when-to-stop-pressure",
    label: "When to back off",
  },
];

const relatedLinks = [
  {
    href: "/big-ambitions",
    label: "Big Ambitions Guide Hub",
  },
  {
    href: "/big-ambitions/best-businesses",
    label: "Best Businesses by Progression Stage",
  },
  {
    href: "/big-ambitions/pricing-guide",
    label: "Pricing & Pricing Manager Guide",
  },
  {
    href: "/big-ambitions/achievements",
    label: "All 126 Achievements",
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
      "Read Special Rival profiles, choose profitable targets, create direct competition, negotiate takeovers, and understand what counts as defeating a Rival in Big Ambitions 1.0.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        width: 1600,
        height: 900,
        alt: "Big Ambitions Ingrid Schneider profile showing an active rivalry, business count, weekly income, and primary neighborhood",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "A practical Big Ambitions 1.0 guide to Special Rivals, Active Rivalry, direct competition, takeovers, and Arch-nemesis.",
    images: [imageUrls[1]],
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
          name: "Big Ambitions Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Rivals Guide",
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
        "Big Ambitions Rivals Guide: Special Rivals, Competition and Takeovers",
      description:
        "A player-focused Big Ambitions 1.0 Rivals guide covering Special Rival profiles, the difference between early warnings and Active Rivalry, when to compete, choosing profitable Rival businesses to target, direct competition, Rival income pressure, Rival-owned property, business takeover negotiations, takeover versus direct competition, when to stop applying pressure, and what counts as defeating a Special Rival for the Arch-nemesis achievements.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-30",
      dateModified: "2026-08-30",
      articleSection: "Big Ambitions Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Big Ambitions",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Special Rivals",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Active Rivalry",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions rivalry",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions direct competition",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions business takeover",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Rival property",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Arch-nemesis",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions defeat Special Rival",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Ingrid Schneider",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Huang Guo",
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
          title="How I Compete With Special Rivals in Big Ambitions 1.0"
          description="I use the Rival profile to decide where pressure is actually worth applying: target businesses that already make money, measure what changes after direct competition, and avoid turning the rest of my company into collateral damage."
          gameTitle="Big Ambitions"
          gameHref="/big-ambitions"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 30, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <RivalsGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}