import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ProjectPittPinataAutomationContent from "@/data/project-pitt/pinata-automation.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/project-pitt`;
const pageUrl = `${hubUrl}/pinata-automation`;

const metadataTitle =
  "Project P.I.T.T. Piñata Automation Guide: Candy & $10M Setup";

const metadataDescription =
  "Build a Project P.I.T.T. Piñata line with soft transport, a controlled break point, Candy containment, and a smart $10M automation buy.";

const imageUrls = [
  `${siteUrl}/images/project-pitt/project-pitt-phase-3-pinata-unlocked.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-pinata-cushion-lane.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-pinata-break-wall-candy.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-pinata-candy-escape-roof.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-pinata-automation-10-million.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-pinata-manual-helper.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-pinata-duck-combo-support.webp`,
];

const toc = [
  {
    id: "phase-3",
    label: "Phase 3 and Piñatas",
  },
  {
    id: "first-route",
    label: "Build a Soft Transport Route",
  },
  {
    id: "break-point",
    label: "Create One Break Point",
  },
  {
    id: "candy-containment",
    label: "Contain the Candy",
  },
  {
    id: "airflow",
    label: "How I Use Fans",
  },
  {
    id: "manual-first",
    label: "Test the Manual Route First",
  },
  {
    id: "automatic-pinata",
    label: "When I Buy $10M Automation",
  },
  {
    id: "manual-helper",
    label: "Using a Second Piñata Source",
  },
  {
    id: "duck-combo",
    label: "Duck Combo Support",
  },
  {
    id: "production-speed",
    label: "When I Upgrade Production",
  },
  {
    id: "early-breaks",
    label: "If Piñatas Break Early",
  },
  {
    id: "candy-escapes",
    label: "If Candy Escapes",
  },
  {
    id: "when-to-stop",
    label: "When the Piñata Line Is Done",
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
    href: "/project-pitt/automation-layouts",
    label: "Automation Layout Helper",
  },
  {
    href: "/project-pitt/duck-automation",
    label: "Duck Automation Guide",
  },
  {
    href: "/project-pitt/anomaly-guide",
    label: "Project P.I.T.T. Anomaly Guide",
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
    title: "Project P.I.T.T. Piñata Automation Guide",
    description:
      "Keep Piñatas intact during transport, break them near the Pit, contain the Candy, and buy the $10M automatic source only after the lane works.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-19",
    modifiedTime: "2026-08-19",
    images: [
      {
        url: `${siteUrl}/images/project-pitt/project-pitt-pinata-break-wall-candy.webp`,
        width: 1600,
        height: 900,
        alt: "Piñata breaking at a controlled impact point with Candy contained near the Pit in Project P.I.T.T.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project P.I.T.T. Piñata Automation Guide",
    description:
      "Soft transport, one intentional break point, Candy containment, $10M automation timing, and Duck combo support.",
    images: [
      `${siteUrl}/images/project-pitt/project-pitt-pinata-break-wall-candy.webp`,
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
          name: "Piñata Automation Guide",
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
        "Project P.I.T.T. Piñata Automation Guide: Controlled Breaks, Candy and $10M Automation",
      description:
        "A focused Project P.I.T.T. Piñata automation guide covering the Phase 3 rebuild, Cushion-based soft transport, one intentional hard break point near the Pit, Candy containment with walls and roofs, manual route testing, the $10 million automatic Piñata machine, using a repeating manual source as a second feed, keeping Ducks for combo support, production-speed timing, early-break diagnosis, Candy escape fixes, and when the Piñata line is good enough to leave running.",
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
          name: "Project P.I.T.T. Piñata automation",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Candy",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Cushion Panels",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. automatic Piñata machine",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. combos",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Phase 3",
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
          title="How I Automate Piñatas in Project P.I.T.T."
          description="I keep Piñatas intact through a padded route, break them once near the Pit, contain the Candy, and only buy the $10 million automatic source after the manual lane is proven."
          gameTitle="Project P.I.T.T."
          gameHref="/project-pitt"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ProjectPittPinataAutomationContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
