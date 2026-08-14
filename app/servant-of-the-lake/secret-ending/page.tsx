import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ServantOfTheLakeSecretEndingContent from "@/data/servant-of-the-lake/secret-ending.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/servant-of-the-lake`;
const pageUrl = `${hubUrl}/secret-ending`;

const imageUrls = [
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-kate-secret-ending-note.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-secret-ending-405-clock.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-secret-ending-maze-route.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-secret-ending-attic-constellation.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-secret-chamber.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-secret-chamber-code.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-kates-brother-secret-location.webp`,
];

export const metadata: Metadata = {
  title: "Servant of the Lake Secret Ending & You've Found Him",
  description:
    "Get the Servant of the Lake secret ending with 4:05, the maze route, attic and chamber clues, the Telescope, and Kate's missing brother.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Servant of the Lake Secret Ending & You've Found Him",
    description:
      "Follow Kate's post-game clues through 4:05, the Bathroom, Alchemy maze, attic constellations, secret chamber, Telescope, and the final hidden scene.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-14",
    modifiedTime: "2026-08-14",
    images: [
      {
        url: imageUrls[1],
        width: 1280,
        height: 720,
        alt: "Alarm clock set to 4:05 during the Servant of the Lake secret ending route",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servant of the Lake Secret Ending & You've Found Him",
    description:
      "Use 4:05, solve the maze and secret chamber, get the Telescope, and find Kate's missing brother.",
    images: [imageUrls[1]],
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
          name: "Servant of the Lake Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Secret Ending",
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
        "Servant of the Lake Secret Ending Guide: 4:05, Maze, Secret Chamber and You've Found Him",
      description:
        "A complete Servant of the Lake secret ending route covering Kate's post-game note, the five-past-four clue and 4:05 clock, Helping with Bathing clue, nine-step Alchemy maze route, attic constellation puzzle, bronze-silver-gold clue, secret chamber lock, Telescope, Kate's missing brother, Watch Clip, and You've Found Him achievement.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-14",
      dateModified: "2026-08-14",
      about: [
        {
          "@type": "VideoGame",
          name: "Servant of the Lake",
        },
        {
          "@type": "Thing",
          name: "Servant of the Lake Secret Ending",
        },
        {
          "@type": "Thing",
          name: "The crow awakens at five past four",
        },
        {
          "@type": "Thing",
          name: "4:05 clock",
        },
        {
          "@type": "Thing",
          name: "Secret ending maze",
        },
        {
          "@type": "Thing",
          name: "Attic constellation puzzle",
        },
        {
          "@type": "Thing",
          name: "Secret chamber",
        },
        {
          "@type": "Thing",
          name: "Telescope",
        },
        {
          "@type": "Thing",
          name: "Kate's missing brother",
        },
        {
          "@type": "Thing",
          name: "You've found him!",
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

const toc = [
  {
    id: "when-secret-ending-starts",
    label: "When the secret route starts",
  },
  {
    id: "crow-awakens-five-past-four",
    label: "Five past four & 4:05",
  },
  {
    id: "bathroom-secret-clue",
    label: "Bathroom secret clue",
  },
  {
    id: "maze-symbols",
    label: "Alchemy maze route",
  },
  {
    id: "attic-constellation",
    label: "Attic constellation",
  },
  {
    id: "bronze-silver-gold",
    label: "Bronze, Silver & Gold",
  },
  {
    id: "secret-chamber-code",
    label: "Secret chamber lock",
  },
  {
    id: "telescope-secret-location",
    label: "Telescope & Kate's brother",
  },
  {
    id: "where-i-got-stuck",
    label: "Secret ending troubleshooting",
  },
];

const relatedLinks = [
  {
    href: "/servant-of-the-lake",
    label: "Servant of the Lake Guide Hub",
  },
  {
    href: "/servant-of-the-lake/walkthrough",
    label: "Servant of the Lake Walkthrough",
  },
  {
    href: "/servant-of-the-lake/puzzle-solutions",
    label: "Puzzle Solutions & Codes",
  },
  {
    href: "/servant-of-the-lake/waking-up-aldous",
    label: "Waking Up Aldous Guide",
  },
  {
    href: "/servant-of-the-lake/bathroom-puzzle",
    label: "Bathroom Puzzle Guide",
  },
  {
    href: "/servant-of-the-lake/alchemy-puzzle",
    label: "Alchemy Puzzle Guide",
  },
  {
    href: "/servant-of-the-lake/achievements",
    label: "Achievements & 100% Guide",
  },
];

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Servant of the Lake Secret Ending Guide"
          description="After The Departure, I follow Kate's clues back through old memories, use 4:05 in Aldous's room, solve the maze and secret chamber, then use the Telescope to find her missing brother."
          gameTitle="Servant of the Lake"
          gameHref="/servant-of-the-lake"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 14, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ServantOfTheLakeSecretEndingContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}