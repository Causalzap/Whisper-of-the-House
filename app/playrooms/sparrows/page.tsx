import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PlayroomsSparrowsContent from "@/data/playrooms/sparrows.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/playrooms`;
const pageUrl = `${hubUrl}/sparrows`;

const articleTitle = "Where Are All 20 Sparrows in Playrooms?";
const articleDescription = "Find all 20 hidden Sparrows by their furniture landmarks and collecting prompts, including difficult locations above Ball Pit 6 and inside Hotel rooms.";
const metadataTitle = "Playrooms Sparrow Locations: All 20 & Missing 19/20";
const metadataDescription = "Find all 20 Playrooms Sparrows across seven areas, including Ball Pit 6, the School, Office and Hotel, and check what to do at 19/20.";
const imageUrl = `${siteUrl}/images/playrooms/playrooms-sparrow-above-ball-pit-six.webp`;

const toc = [
  { id: "sparrow-locations", label: "20 Sparrow Location Summary" },
  { id: "playroom-sparrows", label: "Playroom Sparrows" },
  { id: "waiting-area-sparrows", label: "Waiting Area Sparrows" },
  { id: "backroom-sparrows", label: "Backroom Sparrows" },
  { id: "poolroom-sparrows", label: "Poolroom Sparrows" },
  { id: "school-sparrows", label: "School Sparrows" },
  { id: "hotel-sparrows", label: "Hotel Sparrows" },
  { id: "office-sparrows", label: "Office Sparrows" },
  { id: "missing-sparrow", label: "Stuck at 19/20" },
  { id: "sparrow-achievement", label: "All 20 Reward" },
];

// Internal guide links are already present in the MDX. Avoid a second card list.
const relatedLinks: { href: string; label: string }[] = [];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    url: pageUrl,
    siteName: "Whisper of the House",
    title: metadataTitle,
    description: metadataDescription,
    images: [{ url: imageUrl, alt: "Playrooms Sparrow on top of the black ball-count display above Ball Pit 6" }],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrl],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Whisper of the House",
      url: siteUrl,
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Playrooms", item: hubUrl },
        { "@type": "ListItem", position: 3, name: "Sparrow Locations", item: pageUrl },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: articleTitle,
      description: articleDescription,
      inLanguage: "en",
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      isPartOf: { "@id": `${siteUrl}/#website` },
      author: { "@id": `${siteUrl}/#organization` },
      publisher: { "@id": `${siteUrl}/#organization` },
      dateModified: "2026-11-09",
      image: [imageUrl],
      about: { "@type": "VideoGame", name: "Playrooms" },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    },
  ],
};

export default function PlayroomsSparrowsPage() {
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
          description={articleDescription}
          gameTitle="Playrooms"
          gameHref="/playrooms"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 9, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <PlayroomsSparrowsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
