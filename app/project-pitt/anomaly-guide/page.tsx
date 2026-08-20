import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ProjectPittAnomalyGuideContent from "@/data/project-pitt/anomaly-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/project-pitt`;
const pageUrl = `${hubUrl}/anomaly-guide`;

const metadataTitle =
  "Project P.I.T.T. Anomaly Guide: Recipe, Workbench & Crates";

const metadataDescription =
  "Make Anomalies in Project P.I.T.T. with the 1 Duck + 1 Cash + 1 Piñata recipe, balance the workbench, use Intern Substitute, and farm crates.";

const imageUrls = [
  `${siteUrl}/images/project-pitt/project-pitt-anomaly-first-unlock.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-anomaly-workbench-recipe.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-anomaly-intern-helper.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-anomaly-bounce-too-much-force.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-anomaly-crate-breaker-farm.webp`,
];

const toc = [
  {
    id: "when-anomalies-unlock",
    label: "When Anomalies Unlock",
  },
  {
    id: "recipe",
    label: "Anomaly Recipe",
  },
  {
    id: "stage-inputs",
    label: "Stage the Three Inputs",
  },
  {
    id: "intern-substitute",
    label: "How Intern Substitute Works",
  },
  {
    id: "do-not-over-automate",
    label: "When Not to Over-Automate",
  },
  {
    id: "anomaly-physics",
    label: "Anomaly Physics",
  },
  {
    id: "keep-the-area-clean",
    label: "Keep the Workbench Area Clear",
  },
  {
    id: "upgrade-priority",
    label: "What I Upgrade First",
  },
  {
    id: "anomaly-crates",
    label: "When I Use Anomaly Crates",
  },
  {
    id: "hidden-route",
    label: "Save Anomalies for the Hidden Route",
  },
  {
    id: "when-to-stop",
    label: "When I Stop Optimizing",
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
    href: "/project-pitt/pinata-automation",
    label: "Piñata Automation Guide",
  },
  {
    href: "/project-pitt/automation-layouts",
    label: "Automation Layout Helper",
  },
  {
    href: "/project-pitt/200kg-platform-what-next",
    label: "200 kg Platform & 0% Guide",
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
    title: "Project P.I.T.T. Anomaly Guide",
    description:
      "Use the one-Duck, one-Cash-Register, one-Piñata recipe, balance ingredient supply, automate the button with Intern Substitute, and switch to crates for bulk farming.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-19",
    modifiedTime: "2026-08-19",
    images: [
      {
        url: `${siteUrl}/images/project-pitt/project-pitt-anomaly-workbench-recipe.webp`,
        width: 1600,
        height: 900,
        alt: "Project P.I.T.T. Anomaly workbench using a Duck, Cash Register, and Piñata recipe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project P.I.T.T. Anomaly Guide",
    description:
      "Anomaly recipe, Intern Substitute, ingredient balancing, output physics, crate farming, and when to save a few for hidden progression.",
    images: [
      `${siteUrl}/images/project-pitt/project-pitt-anomaly-workbench-recipe.webp`,
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
          name: "Anomaly Guide",
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
        "Project P.I.T.T. Anomaly Guide: Recipe, Intern Substitute, Supply Balance and Crates",
      description:
        "A focused Project P.I.T.T. Anomaly guide covering the one Duck plus one Cash Register plus one Piñata recipe, small ingredient buffers, Intern Substitute behavior, when not to over-automate the three-input workbench, finished-Anomaly physics, keeping the workbench area clear, upgrading the ingredient that is starving the recipe, using Anomaly crates for bulk farming, and saving a couple of Anomalies for late-game hidden progression.",
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
          name: "Project P.I.T.T. Anomaly recipe",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Anomaly workbench",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Intern Substitute",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Anomaly crates",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Anomaly farming",
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
          title="How I Make Anomalies in Project P.I.T.T."
          description="I stage one Duck, one Cash Register, and one Piñata beside the workbench, balance whichever ingredient is late, use Intern Substitute for the button, and switch to crates when I want bulk output."
          gameTitle="Project P.I.T.T."
          gameHref="/project-pitt"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ProjectPittAnomalyGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
