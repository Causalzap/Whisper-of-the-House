import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PotatoPleaseGuideContent from "@/data/potato-please/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/potato-please`;
const pageUrl = hubUrl;

const metadataTitle = "Potato Please Guide: Progression, Upgrades & What to Do";
const metadataDescription =
  "Start Potato Please, finish the warm-up shift, handle grenades and the snowstorm, automate potato processing, and clear the 60,000-potato quota.";

const articleTitle = "How Do You Progress and Finish Potato Please?";
const articleDescription =
  "Begin with your first potato delivery, complete the warm-up shift, follow work objectives, handle grenades and the snowstorm, and finish the 60,000-potato quota before escaping.";

const imageFilenames = [
  "potato-please-first-chute-objective.webp",
  "potato-please-storm-flamethrower.webp",
];
const imageUrls = imageFilenames.map(
  (file) => `${siteUrl}/images/potato-please/${file}`,
);

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: metadataTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "Three cleaned potatoes at the chute with the drop-to-sell prompt in Potato Please",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

const toc = [
  { id: "first-shift", label: "First Shift & Chute Delivery" },
  { id: "warm-up-shift", label: "Complete the Warm-up Shift" },
  { id: "progression", label: "Main Progression Order" },
  { id: "money-upgrades", label: "Money & Hard Mode" },
  { id: "depot-hazards", label: "Grenades, Coughing & Cold" },
  { id: "storm", label: "Snowstorm & Flamethrower" },
  { id: "quota", label: "The 60,000-Potato Quota" },
  { id: "story-choices", label: "Letters & Puppy" },
  { id: "finish-game", label: "How to Finish the Game" },
  { id: "faq", label: "Beginner Questions" },
  { id: "guides", label: "More Potato Please Guides" },
];

const relatedLinks = [
  { href: "/potato-please/automation", label: "Automation: Machines, Upgrades & Troubleshooting" },
  { href: "/potato-please/endings", label: "All Endings: Golden Key, Iron Door & Train Routes" },
  { href: "/potato-please/achievements", label: "All 20 Achievements & Checklist" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Potato Please", item: hubUrl },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      headline: articleTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-11-04",
      dateModified: "2026-11-04",
      about: [
        { "@type": "VideoGame", name: "Potato Please" },
        { "@type": "Thing", name: "First shift and chute delivery" },
        { "@type": "Thing", name: "Warm-up shift and Journal objectives" },
        { "@type": "Thing", name: "Grenade hazards and snowstorm recovery" },
        { "@type": "Thing", name: "Final potato processing quota" },
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
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title={articleTitle}
          description="Peel and deliver your first potatoes, finish the warm-up shift, survive depot hazards, thaw the frozen yard, and process the final 60,000-potato quota."
          gameTitle="Potato Please"
          gameHref="/potato-please"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 4, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <PotatoPleaseGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
