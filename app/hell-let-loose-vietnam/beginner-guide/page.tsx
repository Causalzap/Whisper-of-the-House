import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BeginnerGuideContent from "@/data/hell-let-loose-vietnam/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/hell-let-loose-vietnam`;
const pageUrl = `${hubUrl}/beginner-guide`;

const metadataTitle =
  "Hell Let Loose Vietnam Beginner Guide: First Match Tips";

const metadataDescription =
  "Start Hell Let Loose Vietnam with the right Tutorial, radio keys, role, Tactical Map habits, spawn choices, objective play, and redeploy timing.";

const imageUrls = [
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-beginner-tactical-map.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-beginner-radio-channels.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-beginner-medic-support-score.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-beginner-hard-capture-point.webp`,
];

const toc = [
  {
    id: "do-getting-started-first",
    label: "Do Getting Started first",
  },
  {
    id: "fix-radio-keybinds",
    label: "Check radio keybinds",
  },
  {
    id: "pick-first-role",
    label: "Choose your first role",
  },
  {
    id: "medic-first-role",
    label: "Why Medic helped me learn",
  },
  {
    id: "check-map-before-spawning",
    label: "Check the map before spawning",
  },
  {
    id: "use-map-to-find-the-fight",
    label: "Use the Tactical Map",
  },
  {
    id: "understand-capture-point",
    label: "Fight for the objective",
  },
  {
    id: "redeploy-instead-of-running",
    label: "When to redeploy",
  },
  {
    id: "dont-chase-advanced-systems",
    label: "Leave advanced systems for later",
  },
  {
    id: "first-match-routine",
    label: "First-match routine",
  },
];

const relatedLinks = [
  {
    href: "/hell-let-loose-vietnam",
    label: "Hell Let Loose: Vietnam Guide Hub",
  },
  {
    href: "/hell-let-loose-vietnam/spawn-garrison-outpost-guide",
    label: "Spawn, Garrison & Outpost Guide",
  },
  {
    href: "/hell-let-loose-vietnam/progression-loadouts",
    label: "Progression & Loadouts Guide",
  },
  {
    href: "/hell-let-loose-vietnam/unlock-squad-leader-commander",
    label: "Unlock Squad Leader & Commander",
  },
  {
    href: "/hell-let-loose-vietnam/helicopter-controls",
    label: "Helicopter Controls Guide",
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
    title: "Hell Let Loose Vietnam Beginner Guide",
    description:
      "Learn the first-match routine I use for Tutorials, radio channels, role choice, Tactical Map checks, better spawns, objective play, and redeploying.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Hell Let Loose Vietnam Tactical Map showing sectors battlefield markers and friendly positions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hell Let Loose Vietnam Beginner Guide",
    description:
      "Start with Getting Started, protect your radio binds, stay with the squad, check the Tactical Map before spawning, and redeploy when the battle moves.",
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
          name: "Hell Let Loose: Vietnam Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Beginner Guide",
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
        "Hell Let Loose Vietnam Beginner Guide: First Match Tips and Starting Route",
      description:
        "A practical Hell Let Loose: Vietnam beginner guide covering the Getting Started Tutorial, default PC radio channels, first-role choices, Tactical Map habits, choosing useful spawns, staying with the squad, understanding capture objectives, recognizing when a forward route is gone, redeploying instead of making long obsolete runs, and delaying advanced systems until the first-match loop makes sense.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-16",
      dateModified: "2026-08-16",
      articleSection: "Hell Let Loose: Vietnam Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Hell Let Loose: Vietnam",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam beginner guide",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam first match",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Getting Started Tutorial",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Tactical Map",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam radio controls",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Unit Radio",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Proximity Chat",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam first role",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam spawn choice",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam redeploy",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam capture point",
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
          title="How I Stop Feeling Lost in My First Hell Let Loose Vietnam Matches"
          description="I learn the Tactical Map and radio first, stay with a normal infantry squad, choose spawns deliberately, play the objective, and redeploy when my current position stops mattering."
          gameTitle="Hell Let Loose: Vietnam"
          gameHref="/hell-let-loose-vietnam"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BeginnerGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}