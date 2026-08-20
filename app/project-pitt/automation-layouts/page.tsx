import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ProjectPittAutomationLayoutsContent from "@/data/project-pitt/automation-layouts.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/project-pitt`;
const pageUrl = `${hubUrl}/automation-layouts`;

const metadataTitle =
  "Project P.I.T.T. Automation Layout Helper: Fix Jams & Airflow";

const metadataDescription =
  "Fix Project P.I.T.T. automation jams, overshoot, weak airflow, bad catches, and Cash Register transport with an interactive layout helper.";

const imageUrls = [
  `${siteUrl}/images/project-pitt/project-pitt-duck-straight-catcher-layout.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-cushion-panel-absorbs-impacts.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-slick-panel-friction-free.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-sticky-tools-unlocked.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-cash-register-bottleneck-big-fan.webp`,
];

const toc = [
  {
    id: "how-i-use-the-helper",
    label: "How I Use the Helper",
  },
  {
    id: "four-parts",
    label: "The Four Parts of a Route",
  },
  {
    id: "start-straight",
    label: "Start With a Straight Route",
  },
  {
    id: "overshoot",
    label: "Fix Overshoot",
  },
  {
    id: "undershoot",
    label: "Fix Undershoot",
  },
  {
    id: "jams",
    label: "Fix Jams",
  },
  {
    id: "containment",
    label: "Walls, Roofs & Catchers",
  },
  {
    id: "sticky-tools",
    label: "When Sticky Tools Help",
  },
  {
    id: "duck",
    label: "Duck Layout Rules",
  },
  {
    id: "cash-register",
    label: "Cash Register Layout Rules",
  },
  {
    id: "when-not-to-buy",
    label: "When Not to Buy More Tools",
  },
  {
    id: "when-i-stop",
    label: "When I Stop Optimizing",
  },
];

const relatedLinks = [
  {
    href: "/project-pitt",
    label: "Project P.I.T.T. Guide Hub",
  },
  {
    href: "/project-pitt/duck-automation",
    label: "Duck Automation Guide",
  },
  {
    href: "/project-pitt/cash-register-automation",
    label: "Cash Register Automation Guide",
  },
  {
    href: "/project-pitt/troubleshooting",
    label: "Project P.I.T.T. Troubleshooting",
  },
  {
    href: "/project-pitt/progression-guide",
    label: "Project P.I.T.T. Progression Guide",
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
    title: "Project P.I.T.T. Automation Layout Helper",
    description:
      "Diagnose Ducks and early Cash Register automation by separating movement, containment, catches, friction, and airflow instead of adding more Fans blindly.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-19",
    modifiedTime: "2026-08-19",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Straight Project P.I.T.T. Duck automation layout with airflow, containment, and a catcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project P.I.T.T. Automation Layout Helper",
    description:
      "Fix jams, overshoot, undershoot, airflow, catches, and early Cash Register transport with a symptom-based automation helper.",
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
          name: "Automation Layout Helper",
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
        "Project P.I.T.T. Automation Layout Helper: Jams, Airflow, Overshoot and Catchers",
      description:
        "A practical Project P.I.T.T. automation layout guide and interactive helper for diagnosing early Duck and Cash Register routes. It covers source-to-catch layout design, overshoot, undershoot, airflow dead zones, friction, Slick Panels, Cushion Panels, containment, roofs, catchers, Sticky Tools, jam diagnosis, Cash Register geometry, when another Fan is useful, and when a working route is good enough to leave alone.",
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
          name: "Project P.I.T.T. automation",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. automation layouts",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Fans",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Cushion Panels",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Slick Panels",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Sticky Tools",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Duck automation",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Cash Register automation",
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
          title="Fix My Project P.I.T.T. Automation Layout"
          description="I use this helper when a Duck or early Cash Register route jams, overshoots, loses momentum, or keeps throwing products out. I fix the first visible failure instead of adding more Fans everywhere."
          gameTitle="Project P.I.T.T."
          gameHref="/project-pitt"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ProjectPittAutomationLayoutsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
