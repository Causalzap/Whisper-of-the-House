import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ProjectPittSecretEndingContent from "@/data/project-pitt/secret-ending.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/project-pitt`;
const pageUrl = `${hubUrl}/secret-ending`;

const metadataTitle =
  "Project P.I.T.T. Secret Ending Guide: Code 2640 & UV Clues";

const metadataDescription =
  "Follow the Project P.I.T.T. Secret Ending route through clones, four mining layers, UV clues, the Access Card, and elevator code 2640.";

const imageUrls = [
  `${siteUrl}/images/project-pitt/project-pitt-secret-ending-clone-196-of-200.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-secret-ending-mining-layers.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-secret-ending-uv-lamp.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-secret-ending-uv-046-clues.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-secret-ending-uv-two-clue.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-secret-ending-access-card.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-secret-ending-elevator-override.webp`,
  `${siteUrl}/images/project-pitt/project-pitt-secret-ending-complete.webp`,
];

const toc = [
  {
    id: "enter-the-gate",
    label: "Start After the Hidden Gate Opens",
  },
  {
    id: "clone-room",
    label: "Clone Room",
  },
  {
    id: "clone-progress",
    label: "Reach 200 Progress",
  },
  {
    id: "mining",
    label: "Four Mining Layers",
  },
  {
    id: "uv-lamp",
    label: "Get the UV Lamp",
  },
  {
    id: "uv-clues",
    label: "Find the UV Number Clues",
  },
  {
    id: "access-card",
    label: "Get the Access Card",
  },
  {
    id: "elevator-code",
    label: "Elevator Code 2640",
  },
  {
    id: "after-elevator",
    label: "After the Elevator Override",
  },
  {
    id: "how-long",
    label: "How Long My First Run Took",
  },
  {
    id: "achievement",
    label: "If END? Does Not Unlock",
  },
  {
    id: "secret-vs-main",
    label: "Secret vs Main Ending",
  },
];

const relatedLinks = [
  {
    href: "/project-pitt",
    label: "Project P.I.T.T. Guide Hub",
  },
  {
    href: "/project-pitt/200kg-platform-what-next",
    label: "200 kg Platform & 0% Guide",
  },
  {
    href: "/project-pitt/progression-guide",
    label: "Project P.I.T.T. Progression Guide",
  },
  {
    href: "/project-pitt/achievements",
    label: "Project P.I.T.T. Achievements Guide",
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
    title: "Project P.I.T.T. Secret Ending Guide – Code 2640",
    description:
      "Complete the hidden route after the gate opens: clone progress, four mining layers, UV Lamp clues, Access Card, elevator code 2640, and the Secret Ending.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-19",
    modifiedTime: "2026-08-19",
    images: [
      {
        url: `${siteUrl}/images/project-pitt/project-pitt-secret-ending-elevator-override.webp`,
        width: 1600,
        height: 900,
        alt: "Project P.I.T.T. elevator accepting code 2640 during the Secret Ending route",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project P.I.T.T. Secret Ending Guide – Code 2640",
    description:
      "Clone room, four mining layers, UV clues, Access Card, elevator code 2640, and the complete Secret Ending route.",
    images: [
      `${siteUrl}/images/project-pitt/project-pitt-secret-ending-elevator-override.webp`,
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
          name: "Secret Ending Guide",
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
        "Project P.I.T.T. Secret Ending Guide: Clone Room, UV Clues, Access Card and Code 2640",
      description:
        "A complete Project P.I.T.T. Secret Ending walkthrough beginning after the hidden gate opens. The route covers the clone Energy minigame and 200 progress target, four product-themed mining layers, the UV Lamp, hidden number clues 0, 4, 6 and 2, the UV pickaxe interaction, Access Card creation, elevator code 2640, the elevator override, and the final Secret Ending sequence.",
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
          name: "Project P.I.T.T. Secret Ending",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. elevator code 2640",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. UV Lamp",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. UV clues",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. Access Card",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. clone minigame",
        },
        {
          "@type": "Thing",
          name: "Project P.I.T.T. mining minigame",
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
          title="How I Got the Secret Ending in Project P.I.T.T."
          description="Once the hidden gate is open, I follow the clone minigame, four mining layers, UV clues, Access Card route, and elevator code 2640 without going back to rebuild the factory."
          gameTitle="Project P.I.T.T."
          gameHref="/project-pitt"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ProjectPittSecretEndingContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
