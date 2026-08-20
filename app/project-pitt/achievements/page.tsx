import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ProjectPittAchievementsContent from "@/data/project-pitt/achievements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/project-pitt`;
const pageUrl = `${hubUrl}/achievements`;

const metadataTitle =
  "Project P.I.T.T. Achievements Guide: All 23 Requirements";

const metadataDescription =
  "See all 23 Project P.I.T.T. achievements, their requirements, unlock rates, when to do each one, and a clean 100% completion order.";

const imageUrls = [
  `${siteUrl}/images/project-pitt/project-pitt-combo-196-late-game.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-gambling-crate-5-of-10.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-achievements-remaining-eight.webp`,
];

const toc = [
  {
    id: "all-achievements",
    label: "All 23 Achievements",
  },
  {
    id: "normal-progression",
    label: "Normal Progression Achievements",
  },
  {
    id: "combo-achievements",
    label: "Combo Achievements",
  },
  {
    id: "loose-products",
    label: "MESS! and LAG!",
  },
  {
    id: "gambling-crates",
    label: "GAMBLING! and 10 Crates",
  },
  {
    id: "hidden-route",
    label: "Hidden Route Achievements",
  },
  {
    id: "late-remaining-list",
    label: "How I Read the Late Checklist",
  },
  {
    id: "endgame-grind",
    label: "Endgame Grind Achievements",
  },
  {
    id: "main-ending-and-igtap",
    label: "END! and LOOP?",
  },
  {
    id: "achievement-not-unlocking",
    label: "If an Achievement Does Not Unlock",
  },
  {
    id: "my-100-percent-order",
    label: "My 100% Cleanup Order",
  },
];

const relatedLinks = [
  {
    href: "/project-pitt",
    label: "Project P.I.T.T. Guide Hub",
  },
  {
    href: "/project-pitt/progression-guide",
    label: "Project P.I.T.T. Progression Guide",
  },
  {
    href: "/project-pitt/200kg-platform-what-next",
    label: "200 kg Platform & 0% Guide",
  },
  {
    href: "/project-pitt/secret-ending",
    label: "Project P.I.T.T. Secret Ending Guide",
  },
  {
    href: "/project-pitt/troubleshooting",
    label: "Project P.I.T.T. Troubleshooting",
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
    title: "Project P.I.T.T. Achievements Guide – All 23",
    description:
      "A complete checklist of all 23 Project P.I.T.T. achievements with requirements, launch-window unlock rates, timing, and a practical 100% cleanup order.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-19",
    modifiedTime: "2026-08-19",
    images: [
      {
        url: `${siteUrl}/images/project-pitt/project-pitt-achievements-remaining-eight.webp`,
        width: 1600,
        height: 900,
        alt: "Project P.I.T.T. achievement list showing eight late-game achievements remaining",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project P.I.T.T. Achievements Guide – All 23",
    description:
      "All achievement requirements, hidden-route groups, combo and grind goals, crate cleanup, and a practical 100% order.",
    images: [
      `${siteUrl}/images/project-pitt/project-pitt-achievements-remaining-eight.webp`,
    ],
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
          name: "Project P.I.T.T. Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Achievements Guide",
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
        "Project P.I.T.T. Achievements Guide: All 23 Requirements and 100% Order",
      description:
        "A complete Project P.I.T.T. achievement checklist covering all 23 requirements, launch-window unlock-rate context, normal progression milestones, combo goals at x100, x200 and x300, 500 and 1,000 loose-product achievements, all 10 Gambling Crates, hidden-route achievements, late factory grind goals including $1 trillion and 400 products per minute, unresolved Main Ending and IGTAP checklist entries, achievement-state troubleshooting, and a practical 100% cleanup order.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-19",
      dateModified: "2026-08-19",
      articleSection: "Project P.I.T.T. Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Project P.I.T.T.",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. achievements",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. 100 percent completion",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Gambling Crates",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. combo achievements",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Secret Ending achievement",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Main Ending achievement",
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
          title="How I Clean Up All 23 Project P.I.T.T. Achievements"
          description="I let normal progression handle the easy unlocks, group the hidden-route achievements together, save pure grind goals for the fully unlocked factory, and avoid replaying long routes for one stale badge."
          gameTitle="Project P.I.T.T."
          gameHref="/project-pitt"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ProjectPittAchievementsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
