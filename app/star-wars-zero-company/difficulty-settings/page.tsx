import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DifficultySettingsContent from "@/data/star-wars-zero-company/difficulty-settings.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/star-wars-zero-company`;
const pageUrl = `${hubUrl}/difficulty-settings`;

const metadataTitle =
  "STAR WARS Zero Company Best Difficulty & Beskar Mode";

const metadataDescription =
  "Choose the best Zero Company difficulty, see what Expert changes, understand Beskar Mode, and compare Cautious, Risky, Dangerous and Extreme missions.";

const imageUrls = [
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-difficulty-settings-story-normal-hard-expert.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-expert-difficulty-effects.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-expert-range-penalty-lothal.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-beskar-mode-one-save.webp`,
];

const toc = [
  {
    id: "which-difficulty",
    label: "Best difficulty to choose",
  },
  {
    id: "campaign-vs-mission-difficulty",
    label: "Mission difficulty",
  },
  {
    id: "expert-difficulty",
    label: "What Expert changes",
  },
  {
    id: "expert-combat",
    label: "Playing on Expert",
  },
  {
    id: "expert-recovery",
    label: "Expert recovery",
  },
  {
    id: "expert-bonds",
    label: "Bonds on Expert",
  },
  {
    id: "beskar-mode",
    label: "How Beskar Mode works",
  },
  {
    id: "permadeath-vs-beskar",
    label: "Permadeath vs Beskar",
  },
  {
    id: "expert-beskar",
    label: "Expert + Beskar",
  },
  {
    id: "difficulty-achievements",
    label: "Captain & Legend",
  },
  {
    id: "my-difficulty-pick",
    label: "My first-run settings",
  },
];

const relatedLinks = [
  {
    href: "/star-wars-zero-company",
    label: "STAR WARS Zero Company Guide Hub",
  },
  {
    href: "/star-wars-zero-company/permadeath-injuries",
    label: "Permadeath & Injuries Guide",
  },
  {
    href: "/star-wars-zero-company/classes-specializations",
    label: "Best Classes & Specializations",
  },
  {
    href: "/star-wars-zero-company/walkthrough",
    label: "Complete Walkthrough & Mission Order",
  },
  {
    href: "/star-wars-zero-company/achievements-trophies",
    label: "Achievements & Trophies Guide",
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
      "Choose between Story, Normal, Hard and Expert, understand mission difficulty, and decide whether Beskar's persistent save belongs in your campaign.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "STAR WARS Zero Company Story, Normal, Hard and Expert difficulty settings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Best first-run difficulty, Expert changes, mission danger levels, Beskar Mode, Permadeath and the Expert + Beskar Legend run.",
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
          name: "STAR WARS Zero Company Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Difficulty & Beskar Mode",
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
        "STAR WARS Zero Company Best Difficulty, Expert and Beskar Mode Guide",
      description:
        "A player-focused STAR WARS Zero Company difficulty guide covering Story, Normal, Hard and Expert, which setting works best for a first campaign, the reduced weapon range, tougher enemies, lower starting Bonds and disabled Bacta Tank on Expert, Cautious, Risky, Dangerous and Extreme mission difficulty, Beskar Mode's persistent save, the difference between Beskar and Permadeath, and the Expert + Beskar requirement for Legend.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-28",
      dateModified: "2026-08-29",
      articleSection: "STAR WARS Zero Company Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "STAR WARS Zero Company",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company best difficulty",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company difficulty settings",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company difficulty levels",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Expert difficulty",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Beskar Mode",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company mission difficulty",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Risky missions",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Dangerous missions",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Extreme missions",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Permadeath",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Expert Beskar",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Legend achievement",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Captain achievement",
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
          title="Best Difficulty for Your First Run and Beskar Mode"
          description="I use Normal while learning Zero Company's systems, prefer Hard for an experienced first run, and save Expert + Beskar for a campaign where I already understand mission pressure, injuries, reinforcements, and when getting out matters more than clearing the map."
          gameTitle="STAR WARS Zero Company"
          gameHref="/star-wars-zero-company"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 29, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DifficultySettingsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}