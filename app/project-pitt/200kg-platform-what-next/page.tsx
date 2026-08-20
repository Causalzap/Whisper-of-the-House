import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ProjectPitt200KgPlatformContent from "@/data/project-pitt/200kg-platform-what-next.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/project-pitt`;
const pageUrl = `${hubUrl}/200kg-platform-what-next`;

const metadataTitle =
  "Project P.I.T.T. 200kg Platform & 0% Gate Solution";

const metadataDescription =
  "Solve the Project P.I.T.T. 200kg platform, learn why the 0% device stays stuck, when to leave, and how Anomalies open the hidden gate.";

const imageUrls = [
  `${siteUrl}/images/project-pitt/project-pitt-200kg-platform-empty.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-200kg-platform-206-open.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-0-percent-gate.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-anomaly-gate-open.webp`,
];

const toc = [
  {
    id: "where-this-starts",
    label: "Where This Route Starts",
  },
  {
    id: "how-much-weight",
    label: "How Much Weight I Need",
  },
  {
    id: "stable-weight",
    label: "Keep the Weight Stable",
  },
  {
    id: "what-opens",
    label: "What Opens at 200 kg",
  },
  {
    id: "zero-percent",
    label: "The 0% Device",
  },
  {
    id: "if-anomalies-are-locked",
    label: "If Anomalies Are Still Locked",
  },
  {
    id: "when-to-return",
    label: "When I Come Back",
  },
  {
    id: "feed-anomalies",
    label: "Feed Anomalies to 100%",
  },
  {
    id: "if-the-meter-does-not-move",
    label: "If the Meter Does Not Move",
  },
  {
    id: "what-happens-next",
    label: "What Happens Next",
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
    href: "/project-pitt/anomaly-guide",
    label: "Project P.I.T.T. Anomaly Guide",
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
    title: "Project P.I.T.T. 200kg Platform & 0% Gate Solution",
    description:
      "Get past the 200 kg weight check, stop wasting products on the 0% device, return with Anomalies, and open the hidden gate.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-19",
    modifiedTime: "2026-08-19",
    images: [
      {
        url: `${siteUrl}/images/project-pitt/project-pitt-200kg-platform-206-open.webp`,
        width: 1600,
        height: 900,
        alt: "Project P.I.T.T. 200 kg platform at 206 kg as the upper bulkhead opens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project P.I.T.T. 200kg Platform & 0% Gate Solution",
    description:
      "Cross 200 kg, learn why the 0% device ignores normal products, and use Anomalies to open the hidden gate.",
    images: [
      `${siteUrl}/images/project-pitt/project-pitt-200kg-platform-206-open.webp`,
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
          name: "200kg Platform & 0% Gate",
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
        "Project P.I.T.T. 200kg Platform and 0% Gate Solution",
      description:
        "A focused Project P.I.T.T. guide for the hidden 200 kg platform and 0% gate blocker. It explains that the platform only needs to exceed 200 kg, shows a working 118 to 146 to 172 to 206 kg sequence, covers how to keep weight stable on the plate, explains why normal products leave the hidden device at 0%, when to leave if Anomalies are still locked, how a couple of Anomalies fill the device to 100%, and where to continue after the hidden gate opens.",
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
          name: "Project P.I.T.T. 200kg platform",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. 0% device",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. hidden gate",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Anomalies",
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
          title="What I Do at the 200kg Platform and 0% Gate"
          description="I push the platform past 200 kg, stop wasting normal products on the 0% device, leave if Anomalies are still locked, then come back with a couple and open the hidden gate."
          gameTitle="Project P.I.T.T."
          gameHref="/project-pitt"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ProjectPitt200KgPlatformContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
