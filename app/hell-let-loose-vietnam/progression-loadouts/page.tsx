import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ProgressionLoadoutsContent from "@/data/hell-let-loose-vietnam/progression-loadouts.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/hell-let-loose-vietnam`;
const pageUrl = `${hubUrl}/progression-loadouts`;

const metadataTitle =
  "Hell Let Loose Vietnam Progression & Loadouts Guide";

const metadataDescription =
  "Learn role progression, loadout weight, weapon and slot unlocks, Medic progression, and why Tutorial gear may still be locked in live matches.";

const imageUrls = [
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-role-progression-level-two.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-us-medic-progression.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-machine-gunner-tutorial-wrench-aa.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-nva-squad-leader-progression.webp`,
];

const toc = [
  {
    id: "how-role-progression-works",
    label: "How role progression works",
  },
  {
    id: "medic-progression",
    label: "US Medic progression",
  },
  {
    id: "loadout-weight",
    label: "Loadout weight",
  },
  {
    id: "machine-gunner-progression",
    label: "Machine Gunner progression",
  },
  {
    id: "tutorial-equipment",
    label: "Tutorial gear vs. live loadout",
  },
  {
    id: "medic-k50m",
    label: "K50M weight example",
  },
  {
    id: "role-trees-are-specific",
    label: "Role-specific unlock trees",
  },
  {
    id: "when-to-equip-unlock",
    label: "When to equip an unlock",
  },
  {
    id: "when-to-level-role",
    label: "When to level a role",
  },
  {
    id: "role-level-vs-training-lock",
    label: "Role level vs. Tutorial lock",
  },
  {
    id: "progression-check",
    label: "Progression checklist",
  },
];

const relatedLinks = [
  {
    href: "/hell-let-loose-vietnam",
    label: "Hell Let Loose: Vietnam Guide Hub",
  },
  {
    href: "/hell-let-loose-vietnam/unlock-squad-leader-commander",
    label: "Unlock Squad Leader & Commander",
  },
  {
    href: "/hell-let-loose-vietnam/beginner-guide",
    label: "Beginner Guide",
  },
  {
    href: "/hell-let-loose-vietnam/achievements",
    label: "Achievements Guide",
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
    title: "Hell Let Loose Vietnam Progression & Loadouts Guide",
    description:
      "See how role levels expand weight, weapons, slots, utilities, and equipment, and decide which unlocks are actually worth building around.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        width: 1600,
        height: 900,
        alt: "Hell Let Loose Vietnam US Medic progression showing Level 1 through Level 10 weight and equipment unlocks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hell Let Loose Vietnam Progression & Loadouts Guide",
    description:
      "Understand role levels, loadout weight, equipment unlocks, Medic progression, and Tutorial gear that is still locked in normal matches.",
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
          name: "Hell Let Loose: Vietnam Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Progression & Loadouts",
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
        "Hell Let Loose Vietnam Progression and Loadouts Guide",
      description:
        "A practical Hell Let Loose: Vietnam role progression and loadout guide covering role-specific leveling, loadout weight, weapon and equipment unlocks, US Medic progression from Level 1 to Level 10, NVA Machine Gunner Level 2 and Level 3 unlock decisions, K50M weight tradeoffs, Tutorial equipment that may not yet be unlocked in live matches, faction-specific progression trees, and how to decide whether the next role level is worth grinding.",
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
          name: "Hell Let Loose Vietnam progression",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam role progression",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam loadouts",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam loadout weight",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam role unlocks",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Medic progression",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Machine Gunner progression",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Machine Gunner Wrench",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam K50M",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Tutorial equipment",
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
          title="How I Build Better Loadouts Instead of Equipping Every Unlock"
          description="I check the role level, weight budget, and job I actually need before deciding whether a new weapon, slot, utility, or equipment unlock is worth using."
          gameTitle="Hell Let Loose: Vietnam"
          gameHref="/hell-let-loose-vietnam"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ProgressionLoadoutsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}