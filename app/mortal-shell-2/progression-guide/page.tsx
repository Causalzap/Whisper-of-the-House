import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ProgressionGuideContent from "@/data/mortal-shell-2/progression-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/progression-guide`;

const metadataTitle =
  "Mortal Shell 2 Progression Guide: Best Route & Where to Go First";

const metadataDescription =
  "Follow my Mortal Shell 2 progression route from Marrow Keep through Fainweald, Ova, Mether's Breath and Mammon, with clear next steps to the Unfound Path.";

const articleDescription =
  "A practical Mortal Shell 2 progression guide covering where to go first, the route through Fainweald, when to prioritize Unblemished Ova, how Mether's Breath changes blocked routes, when to move into Mammon, and how to recognize the Walk the Unfound Path endgame transition.";

const imageUrls = [
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-widows-overlook-first-beacon.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-mushroom-village-beacon.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-outskirts-of-mammon-teleporter.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-walk-the-unfound-path.webp`,
];

const toc = [
  {
    id: "how-i-approach-progression",
    label: "Progression route at a glance",
  },
  {
    id: "tar-golem",
    label: "Tar Golem opening",
  },
  {
    id: "marrow-keep",
    label: "Leave Marrow Keep",
  },
  {
    id: "widows-overlook",
    label: "Widow's Overlook",
  },
  {
    id: "fainweald-first",
    label: "Where to go first",
  },
  {
    id: "mushroom-village",
    label: "Mushroom Village",
  },
  {
    id: "weapon-detour",
    label: "Early weapon detour",
  },
  {
    id: "ova-progression",
    label: "Ova progression",
  },
  {
    id: "corruption-and-methers-breath",
    label: "Mether's Breath & corruption",
  },
  {
    id: "when-i-return-to-marrow-keep",
    label: "When to return to Marrow Keep",
  },
  {
    id: "when-to-move-to-mammon",
    label: "When to go to Mammon",
  },
  {
    id: "outskirts-of-mammon",
    label: "Outskirts of Mammon",
  },
  {
    id: "late-game",
    label: "Late-game blockers",
  },
  {
    id: "difficulty",
    label: "If combat feels too hard",
  },
  {
    id: "optional-detours",
    label: "Optional late detours",
  },
  {
    id: "unfound-path",
    label: "Walk the Unfound Path",
  },
  {
    id: "progression-rule",
    label: "Progression rule",
  },
];

const relatedLinks = [
  {
    href: "/mortal-shell-2",
    label: "Mortal Shell 2 Guide Hub",
  },
  {
    href: "/mortal-shell-2/all-shells-locations",
    label: "All Shell Locations & Unlocks",
  },
  {
    href: "/mortal-shell-2/weapons-guide",
    label: "Best Weapons & Weapon Tier List",
  },
  {
    href: "/mortal-shell-2/ova-gloom-siphon",
    label: "Ova, Gloom Siphon & Mether's Breath",
  },
  {
    href: "/mortal-shell-2/difficulty-settings",
    label: "Difficulty Settings Guide",
  },
  {
    href: "/mortal-shell-2/endings",
    label: "Endings Guide",
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
      "Follow the route I use from Marrow Keep through Fainweald, Ova progression and Mether's Breath, then into Mammon and the Unfound Path.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-18",
    modifiedTime: "2026-08-25",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Widow's Overlook beacon on the early Mortal Shell 2 progression route",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "My Mortal Shell 2 progression route through Fainweald, Ova, Mether's Breath and Mammon, with clear guidance on where to go next.",
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
          name: "Mortal Shell 2 Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Progression Guide",
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
        "Mortal Shell 2 Progression Guide: Best Route & Where to Go First",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-18",
      dateModified: "2026-08-25",
      articleSection: "Mortal Shell 2 Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Mortal Shell II",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 progression",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 progression route",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 where to go first",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 where to go next",
        },
        {
          "@type": "Thing",
          name: "Fainweald",
        },
        {
          "@type": "Thing",
          name: "Mammon",
        },
        {
          "@type": "Thing",
          name: "Marrow Keep",
        },
        {
          "@type": "Thing",
          name: "Widow's Overlook",
        },
        {
          "@type": "Thing",
          name: "Mushroom Village",
        },
        {
          "@type": "Thing",
          name: "Unblemished Ova",
        },
        {
          "@type": "Thing",
          name: "Gloom Siphon",
        },
        {
          "@type": "Thing",
          name: "Mether's Breath",
        },
        {
          "@type": "Thing",
          name: "Outskirts of Mammon",
        },
        {
          "@type": "Thing",
          name: "Walk the Unfound Path",
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
          title="Mortal Shell 2 Progression Guide: Best Route & Where to Go First"
          description="I start in Fainweald, let Ova progression and Mether's Breath open the blocked routes, then move into Mammon once my Shell and weapon are ready. This is the order I use when I want to keep moving without clearing every detour."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ProgressionGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}