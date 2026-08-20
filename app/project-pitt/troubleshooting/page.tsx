import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ProjectPittTroubleshootingContent from "@/data/project-pitt/troubleshooting.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/project-pitt`;
const pageUrl = `${hubUrl}/troubleshooting`;

const metadataTitle =
  "Project P.I.T.T. Troubleshooting: Bugs & Stuck Progression";

const metadataDescription =
  "Fix Project P.I.T.T. progression issues, Phase 3 confusion, 0% blockers, Anomaly workbench problems, missing achievements, and recording hitching.";

const imageUrls = [
  `${siteUrl}/images/project-pitt/project-pitt-phase-3-factory-break.webp`,
];

const toc = [
  {
    id: "bug-or-progression",
    label: "Bug or Progression?",
  },
  {
    id: "automation-or-system",
    label: "Automation or System Issue?",
  },
  {
    id: "phase-three-destruction",
    label: "Phase 3 Destroyed My Factory",
  },
  {
    id: "zero-percent",
    label: "0% Device Stuck",
  },
  {
    id: "anomaly-workbench",
    label: "Anomaly Workbench Not Working",
  },
  {
    id: "achievement-not-unlocking",
    label: "Achievement Not Unlocking",
  },
  {
    id: "secret-ending-complete-but-achievements-locked",
    label: "Secret Ending Done, Badge Still Locked",
  },
  {
    id: "when-i-reload",
    label: "When I Reload State",
  },
  {
    id: "recording-hitching",
    label: "Recording or Streaming Hitching",
  },
  {
    id: "when-i-suspect-a-real-problem",
    label: "When I Suspect a Real Problem",
  },
  {
    id: "my-troubleshooting-order",
    label: "My Troubleshooting Order",
  },
];

const relatedLinks = [
  {
    href: "/project-pitt",
    label: "Project P.I.T.T. Guide Hub",
  },
  {
    href: "/project-pitt/automation-layouts",
    label: "Automation Layout Helper",
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
    href: "/project-pitt/achievements",
    label: "Project P.I.T.T. Achievements Guide",
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
    title: "Project P.I.T.T. Troubleshooting Guide",
    description:
      "Work out whether Project P.I.T.T. is actually bugged, waiting on progression, missing a recipe condition, or showing a stale achievement state.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-19",
    modifiedTime: "2026-08-19",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Project P.I.T.T. factory damaged during the Phase 3 progression transition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project P.I.T.T. Troubleshooting Guide",
    description:
      "Phase 3 destruction, stuck 0% progression, Anomaly workbench checks, missing achievement unlocks, and recording hitching.",
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
          name: "Project P.I.T.T. Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Troubleshooting",
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
        "Project P.I.T.T. Troubleshooting: Bugs, Stuck Progression and Unlock Problems",
      description:
        "A Project P.I.T.T. troubleshooting guide for distinguishing expected progression from real state problems. It covers the Phase 3 factory destruction event, the hidden 0% device, Anomaly workbench input checks, hidden achievements that do not register after progression, when to refresh or reload state, recording and streaming hitching, and when a failed trigger is suspicious enough to stop changing the factory.",
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
          name: "Project P.I.T.T. troubleshooting",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Phase 3",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. 0% device",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Anomaly workbench",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. achievement unlocks",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. progression",
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
          title="Is Project P.I.T.T. Actually Bugged?"
          description="I use this page when progression looks wrong even though the factory itself may be fine. I check expected phase events, hidden requirements, achievement state, and capture-related hitching before I replay or restart anything."
          gameTitle="Project P.I.T.T."
          gameHref="/project-pitt"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ProjectPittTroubleshootingContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
