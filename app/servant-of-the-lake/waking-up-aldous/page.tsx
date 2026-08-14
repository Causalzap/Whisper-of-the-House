import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ServantOfTheLakeWakingUpAldousContent from "@/data/servant-of-the-lake/waking-up-aldous.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/servant-of-the-lake`;
const pageUrl = `${hubUrl}/waking-up-aldous`;

const imageUrls = [
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-aldous-morning-routine.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-aldous-clock-700.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-aldous-razor-box.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-aldous-shaved-earlobe.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-aldous-earlobe-crow.webp`,
  `${siteUrl}/images/servant-of-the-lake/servant-of-the-lake-aldous-exercise-sequence.webp`,
];

export const metadata: Metadata = {
  title: "Servant of the Lake Waking Up Aldous: 7:00 & Razor",
  description:
    "Wake Aldous at 7:00, get the Razor, clean his ear, use the earlobe with the crow, fix his porridge, and solve the exercise sequence.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Servant of the Lake Waking Up Aldous Guide",
    description:
      "Solve Aldous's Day 1 morning routine from the 7:00 alarm through shaving, the earlobe, Berries, exercise, and dressing him.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-14",
    modifiedTime: "2026-08-14",
    images: [
      {
        url: imageUrls[3],
        width: 1502,
        height: 734,
        alt: "Aldous after the shaving sequence in Servant of the Lake",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servant of the Lake Waking Up Aldous Guide",
    description:
      "7:00 alarm, Razor, earlobe, crow, Berries, porridge and the complete Aldous exercise sequence.",
    images: [imageUrls[3]],
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
          name: "Waking Up Aldous",
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
        "Servant of the Lake Waking Up Aldous Guide: 7:00, Razor, Earlobe, Porridge and Exercise",
      description:
        "A practical Servant of the Lake Waking up Aldous walkthrough covering the complete Day 1 morning routine: setting the alarm to 7:00, handling his cold feet, solving the Razor box, continuing after the shaving accident, cleaning his ear with the Cloth, using the earlobe with the crow, getting the Berries for his porridge, copying the Toy Soldier exercise sequence, and dressing Aldous to finish the task.",
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
          name: "Waking up Aldous",
        },
        {
          "@type": "Thing",
          name: "Aldous Vanderboom",
        },
        {
          "@type": "Thing",
          name: "Aldous morning routine",
        },
        {
          "@type": "Thing",
          name: "Aldous 7:00 alarm",
        },
        {
          "@type": "Thing",
          name: "Aldous Razor puzzle",
        },
        {
          "@type": "Thing",
          name: "Aldous earlobe",
        },
        {
          "@type": "Thing",
          name: "Aldous porridge Berries",
        },
        {
          "@type": "Thing",
          name: "Aldous exercise sequence",
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
    id: "before-entering-bedroom",
    label: "Before entering the bedroom",
  },
  {
    id: "aldous-morning-routine",
    label: "Aldous's morning routine",
  },
  {
    id: "wake-aldous-700",
    label: "Wake Aldous at 7:00",
  },
  {
    id: "get-razor",
    label: "Get the Razor",
  },
  {
    id: "shave-earlobe",
    label: "Shave Aldous",
  },
  {
    id: "clean-aldous-ear",
    label: "Clean Aldous's ear",
  },
  {
    id: "earlobe-crow",
    label: "Give the earlobe to the crow",
  },
  {
    id: "aldous-porridge",
    label: "Fix Aldous's porridge",
  },
  {
    id: "exercise-sequence",
    label: "Exercise sequence",
  },
  {
    id: "dress-aldous",
    label: "Dress Aldous",
  },
  {
    id: "aldous-stuck",
    label: "Waking up Aldous stuck",
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
    href: "/servant-of-the-lake/coffee-puzzle",
    label: "Coffee Puzzle Guide",
  },
  {
    href: "/servant-of-the-lake/laundry-puzzle",
    label: "Laundry Puzzle Guide",
  },
  {
    href: "/servant-of-the-lake/bathroom-puzzle",
    label: "Bathroom Puzzle Guide",
  },
  {
    href: "/servant-of-the-lake/alchemy-puzzle",
    label: "Alchemy Puzzle Guide",
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
          title="How I Wake Up Aldous in Servant of the Lake"
          description="I follow Aldous's morning routine in order: wake him at 7:00, solve the Razor box, keep going after the earlobe accident, fix the porridge, copy the Toy Soldier exercise pattern, and dress him before leaving the bedroom."
          gameTitle="Servant of the Lake"
          gameHref="/servant-of-the-lake"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 14, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ServantOfTheLakeWakingUpAldousContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}