import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DeadReckoningContent from "@/data/iron-nest/dead-reckoning-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/iron-nest/dead-reckoning-walkthrough`;

const metadataTitle =
  "Iron Nest Dead Reckoning Walkthrough: Tear Shells & Field Command";

const metadataDescription =
  "Beat Dead Reckoning with Tear Shell reveals, all three primary targets, the late Field Command correction, War Horn timing, and optional cleanup.";

const imageUrls = [
  `${siteUrl}/images/iron-nest/iron-nest-dead-reckoning-mission-briefing.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-dead-reckoning-primary-search-areas.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-dead-reckoning-tear-shell-reveal.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-dead-reckoning-blind-signal-station.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-dead-reckoning-third-target-correction.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-dead-reckoning-field-command-revealed.webp`,
  `${siteUrl}/images/iron-nest/iron-nest-dead-reckoning-primary-complete.webp`,
];

const toc = [
  {
    id: "dead-reckoning-route",
    label: "Dead Reckoning route",
  },
  {
    id: "why-recon-shows-nothing",
    label: "Why recon shows nothing",
  },
  {
    id: "mark-three-primary-areas",
    label: "Mark the primary areas",
  },
  {
    id: "reveal-first-two-targets",
    label: "Reveal the first targets",
  },
  {
    id: "buy-after-reveal",
    label: "Choose shells after reveal",
  },
  {
    id: "blind-fire",
    label: "Can blind fire work?",
  },
  {
    id: "third-target-missing",
    label: "Missing third target",
  },
  {
    id: "reveal-field-command",
    label: "Reveal Field Command",
  },
  {
    id: "when-to-sound-war-horn",
    label: "When to use War Horn",
  },
  {
    id: "optional-hidden-enemies",
    label: "Optional hidden enemies",
  },
  {
    id: "dead-reckoning-requisition",
    label: "Requisition strategy",
  },
  {
    id: "dead-reckoning-stuck",
    label: "Common mistakes",
  },
];

const relatedLinks = [
  {
    href: "/iron-nest/how-to-triangulate",
    label: "How to Triangulate in Iron Nest",
  },
  {
    href: "/iron-nest/rock-of-gibraltar-walkthrough",
    label: "Rock of Gibraltar Walkthrough",
  },
  {
    href: "/iron-nest/fire-on-call-walkthrough",
    label: "Fire on Call Walkthrough",
  },
  {
    href: "/iron-nest/blind-fire-walkthrough",
    label: "Blind Fire Walkthrough",
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
    title:
      "Iron Nest Dead Reckoning Walkthrough: Tear Shells & Field Command",
    description:
      "Reveal the three hidden primary positions, solve the missing Field Command, time the War Horn correctly, and decide when optional cleanup is worth the cost.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Iron Nest Dead Reckoning mission briefing explaining hidden positions and Tear Shell use",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron Nest Dead Reckoning Walkthrough",
    description:
      "Use Tear Shells to expose hidden targets, solve the late Field Command correction, destroy all three primaries, and time the War Horn safely.",
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
          name: "Iron Nest Guide",
          item: `${siteUrl}/iron-nest`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Dead Reckoning Walkthrough",
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
        "Iron Nest Dead Reckoning Walkthrough: Tear Shells, Field Command, and War Horn",
      description:
        "A player-focused walkthrough for Mission 9 Dead Reckoning in Iron Nest. The guide explains why the three primary positions begin hidden, how Tear Shells reveal the Signal Station and Assembly Area, why destructive ammunition should be chosen after the target state becomes visible, how blind fire can destroy a hidden target but is unreliable as a full strategy, how to recover when the third Field Command target appears to be missing, how to use the late correction from the previous impact, when to switch to AP for the revealed hardened position, when to sound the War Horn, and when the remaining hidden enemies become optional cleanup rather than required mission progress.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-08",
      dateModified: "2026-08-08",
      articleSection: "Iron Nest Walkthroughs",
      about: [
        {
          "@type": "VideoGame",
          name: "Iron Nest",
          url: `${siteUrl}/iron-nest`,
        },
        {
          "@type": "Thing",
          name: "Iron Nest Dead Reckoning",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Mission 9",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Tear Shell",
        },
        {
          "@type": "Thing",
          name: "Iron Nest Field Command",
        },
        {
          "@type": "Thing",
          name: "Iron Nest hidden targets",
        },
        {
          "@type": "Thing",
          name: "Iron Nest War Horn",
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
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title="Dead Reckoning Walkthrough: Tear Shells, Field Command, and War Horn"
          description="Reveal the hidden primary positions first, choose the destructive shell only after the target state is clear, then solve the late Field Command correction before sounding the War Horn."
          gameTitle="Iron Nest"
          gameHref="/iron-nest"
          breadcrumbBaseHref="/iron-nest"
          breadcrumbBaseLabel="Iron Nest Guide"
          updatedAt="August 8, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DeadReckoningContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}