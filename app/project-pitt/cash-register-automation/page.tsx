import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ProjectPittCashRegisterAutomationContent from "@/data/project-pitt/cash-register-automation.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/project-pitt`;
const pageUrl = `${hubUrl}/cash-register-automation`;

const metadataTitle =
  "Project P.I.T.T. Cash Register Automation Guide";

const metadataDescription =
  "Build a reliable Project P.I.T.T. Cash Register route with Cushion, Slick, Pistons and Fans, then know when to stop upgrading before Phase 3.";

const imageUrls = [
  `${siteUrl}/images/project-pitt/project-pitt-cash-register-cushion-slick-transfer.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-cushion-panel-absorbs-impacts.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-slick-panel-friction-free.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-cash-register-auto-machine-unlocked.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-cash-register-manual-auto-running.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-cash-register-bottleneck-big-fan.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-phase-3-factory-break.webp`,
];

const toc = [
  {
    id: "why-duck-layouts-fail",
    label: "Why Duck Layouts Fail",
  },
  {
    id: "manual-test",
    label: "Test With Manual Registers",
  },
  {
    id: "soft-landing",
    label: "Build a Soft Landing",
  },
  {
    id: "cushion-panel",
    label: "When I Buy Cushion",
  },
  {
    id: "slick-panels",
    label: "When I Buy Slick",
  },
  {
    id: "automatic-machine",
    label: "Turn On Automation",
  },
  {
    id: "manual-auto-merge",
    label: "Merge Manual and Auto",
  },
  {
    id: "industrial-fan",
    label: "When I Buy a Stronger Fan",
  },
  {
    id: "piston",
    label: "How I Use the Piston",
  },
  {
    id: "containment",
    label: "Walls and Containment",
  },
  {
    id: "damage",
    label: "When Damage Matters",
  },
  {
    id: "when-to-upgrade",
    label: "When I Upgrade Production",
  },
  {
    id: "phase-3-warning",
    label: "Stop Before Phase 3",
  },
  {
    id: "when-to-stop",
    label: "When the Line Is Finished",
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
    href: "/project-pitt/duck-automation",
    label: "Duck Automation Guide",
  },
  {
    href: "/project-pitt/progression-guide",
    label: "Project P.I.T.T. Progression Guide",
  },
  {
    href: "/project-pitt/pinata-automation",
    label: "Piñata Automation Guide",
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
    title: "Project P.I.T.T. Cash Register Automation Guide",
    description:
      "Use a soft landing, controlled handoff, Slick transport and local airflow to automate Cash Registers without copying Duck geometry.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-19",
    modifiedTime: "2026-08-19",
    images: [
      {
        url: `${siteUrl}/images/project-pitt/project-pitt-cash-register-cushion-slick-transfer.webp`,
        width: 1600,
        height: 900,
        alt: "Cash Register landing on Cushion before transferring onto a Slick route in Project P.I.T.T.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project P.I.T.T. Cash Register Automation Guide",
    description:
      "Cushion landing, Slick transport, Piston handoffs, stronger Fan timing, manual-plus-auto merging, and the Phase 3 stop point.",
    images: [
      `${siteUrl}/images/project-pitt/project-pitt-cash-register-cushion-slick-transfer.webp`,
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
          name: "Cash Register Automation Guide",
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
        "Project P.I.T.T. Cash Register Automation Guide: Cushion, Slick, Pistons and Fans",
      description:
        "A focused Project P.I.T.T. Cash Register automation guide covering why Duck geometry does not transfer cleanly, manual transport testing, Cushion Panel soft landings, Slick Panel friction reduction, automatic production, manual and automatic merge testing, Industrial Fan bottlenecks, Piston handoffs, local containment, production upgrade timing, and when to stop investing before the Phase 3 factory transition.",
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
          name: "Project P.I.T.T. Cash Register automation",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Cushion Panel",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Slick Panel",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Industrial Fan",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Piston",
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
          title="How I Automate Cash Registers in Project P.I.T.T."
          description="I give Cash Registers a soft landing, separate impact from transport, buy Slick and stronger Fans only for proven bottlenecks, and stop polishing the line when Phase 3 is close."
          gameTitle="Project P.I.T.T."
          gameHref="/project-pitt"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ProjectPittCashRegisterAutomationContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
