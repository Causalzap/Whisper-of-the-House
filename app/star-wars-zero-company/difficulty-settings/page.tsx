import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DifficultySettingsContent from "@/data/star-wars-zero-company/difficulty-settings.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/star-wars-zero-company`;
const pageUrl = `${hubUrl}/difficulty-settings`;

const metadataTitle =
  "STAR WARS Zero Company Difficulty, Expert & Beskar Guide";

const metadataDescription =
  "Compare Story, Normal, Hard and Expert, learn what Expert changes, how Beskar Mode works, and whether Expert + Beskar is right for your run.";

const imageUrls = [
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-difficulty-settings-story-normal-hard-expert.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-expert-difficulty-effects.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-expert-range-penalty-lothal.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-beskar-mode-one-save.webp`,
];

const toc = [
  {
    id: "which-difficulty",
    label: "Which difficulty to choose",
  },
  {
    id: "expert-difficulty",
    label: "What Expert changes",
  },
  {
    id: "expert-weapon-range",
    label: "Expert weapon range",
  },
  {
    id: "expert-bacta-bonds",
    label: "Bacta Tank & Bonds",
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
    href: "/star-wars-zero-company/beginner-guide",
    label: "Beginner Guide",
  },
  {
    href: "/star-wars-zero-company/classes-specializations",
    label: "Classes & Specializations Guide",
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
    title: "STAR WARS Zero Company Difficulty, Expert & Beskar Guide",
    description:
      "Choose between Story, Normal, Hard and Expert, then decide whether Beskar's persistent-save rules belong in the same campaign.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "STAR WARS Zero Company difficulty settings showing Normal difficulty, Beskar Mode and Permadeath",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STAR WARS Zero Company Difficulty, Expert & Beskar Guide",
    description:
      "See what Expert actually changes, how Beskar differs from Permadeath, and when I would combine Expert and Beskar.",
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
          name: "Difficulty Settings",
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
        "STAR WARS Zero Company Difficulty Settings, Expert and Beskar Mode Guide",
      description:
        "A player-focused guide to choosing difficulty in STAR WARS Zero Company, covering Story, Normal, Hard and Expert, Expert's tougher enemies and enhanced damage, reduced effective weapon range, lower initial Bonds and disabled Bacta Tank, how Beskar Mode uses one persistent save, how Beskar differs from Permadeath, and what is required for the Captain and Legend achievements.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-28",
      dateModified: "2026-08-28",
      articleSection: "STAR WARS Zero Company Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "STAR WARS Zero Company",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company difficulty settings",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Story difficulty",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Normal difficulty",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Hard difficulty",
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
          title="Choose the Difficulty Before You Commit the Run"
          description="I use Normal to learn the systems, Hard when I already understand tactical positioning, and save Expert or Expert + Beskar for campaigns where I am ready for shorter effective range, harsher recovery, and permanent consequences."
          gameTitle="STAR WARS Zero Company"
          gameHref="/star-wars-zero-company"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 28, 2026"
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