import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ProjectPittDuckAutomationContent from "@/data/project-pitt/duck-automation.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/project-pitt`;
const pageUrl = `${hubUrl}/duck-automation`;

const metadataTitle =
  "Project P.I.T.T. Duck Automation Guide: 12 to 30 Ducks/Min";

const metadataDescription =
  "Build a reliable Project P.I.T.T. Duck line, know when to add a roof or Sticky Tools, and when the 5s-to-2s upgrade is actually worth buying.";

const imageUrls = [
  `${siteUrl}/images/project-pitt/project-pitt-auto-duck-machine-unlocked.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-duck-auto-machine-5-second-rate.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-duck-straight-catcher-layout.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-duck-chute-needs-roof.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-duck-auto-machine-2-second-rate.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-duck-wind-tunnel-running.webp`,
];

const toc = [
  {
    id: "when-to-automate",
    label: "When I Automate Ducks",
  },
  {
    id: "first-layout",
    label: "My First Duck Layout",
  },
  {
    id: "fan-stages",
    label: "How I Stage Fans",
  },
  {
    id: "roof",
    label: "When I Add a Roof",
  },
  {
    id: "sticky-tools",
    label: "When Sticky Tools Are Worth It",
  },
  {
    id: "upgrade-to-two-seconds",
    label: "5 Seconds vs 2 Seconds",
  },
  {
    id: "duck-jams",
    label: "When the Duck Line Jams",
  },
  {
    id: "bumpers",
    label: "When I Add Bumpers",
  },
  {
    id: "magnet",
    label: "How I Use the Magnet",
  },
  {
    id: "working-line",
    label: "What a Finished Duck Line Looks Like",
  },
  {
    id: "when-to-stop",
    label: "When I Stop Spending on Ducks",
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
    href: "/project-pitt/cash-register-automation",
    label: "Cash Register Automation Guide",
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
    title: "Project P.I.T.T. Duck Automation Guide",
    description:
      "Build a simple Duck lane, scale from 12 to 30 Ducks per minute, add containment only where it is needed, and know when to stop upgrading the line.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-19",
    modifiedTime: "2026-08-19",
    images: [
      {
        url: `${siteUrl}/images/project-pitt/project-pitt-duck-straight-catcher-layout.webp`,
        width: 1600,
        height: 900,
        alt: "Straight Project P.I.T.T. Duck automation lane with Fans, side walls, and a catcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project P.I.T.T. Duck Automation Guide",
    description:
      "A practical Duck setup from the 5-second source to the 2-second upgrade, with roof, Sticky Tools, Bumper, and Magnet decisions.",
    images: [
      `${siteUrl}/images/project-pitt/project-pitt-duck-straight-catcher-layout.webp`,
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
          name: "Duck Automation Guide",
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
        "Project P.I.T.T. Duck Automation Guide: 5-Second and 2-Second Production",
      description:
        "A focused Project P.I.T.T. Duck automation guide covering the Automated Duck Workbench, a straight early Duck lane, staged Fans, local roof and side-wall containment, Sticky Tools timing, the upgrade from one Duck every five seconds to one every two seconds, the jump from 12 to 30 Ducks per minute, when Bumpers are worth adding for combos, using the Magnet for recovery instead of primary transport, and when to stop investing in the Duck line.",
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
          name: "Project P.I.T.T. Duck automation",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Automated Duck Workbench",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Duck production rate",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Sticky Tools",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Bumpers",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Magnet",
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
          title="How I Automate Ducks in Project P.I.T.T."
          description="I start with a simple straight Duck lane, scale from 12 to 30 Ducks per minute only when the route can handle it, and stop spending once the line runs without babysitting."
          gameTitle="Project P.I.T.T."
          gameHref="/project-pitt"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ProjectPittDuckAutomationContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
