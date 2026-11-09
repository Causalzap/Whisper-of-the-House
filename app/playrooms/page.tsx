import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PlayroomsHomeContent from "@/data/playrooms/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/playrooms`;
const pageUrl = hubUrl;

const articleTitle = "How Do You Start Playrooms? First-Day Tips, Upgrades & Equipment";
const articleDescription = "Learn the first-day routine, earn money from ball pits, choose useful hand skills and cleaning equipment, and protect each shift before blackout.";
const metadataTitle = "Playrooms Beginner Guide: First Day, Upgrades & Equipment";
const metadataDescription = "Start Playrooms with light.exe, collect balls for money, choose the best early skills and equipment, and get back before the lights go out.";
const imageUrl = `${siteUrl}/images/playrooms/playrooms-first-day-light-exe.webp`;

const toc = [
  { id: "first-shift", label: "First Day: light.exe" },
  { id: "money-and-pits", label: "Earn Money & Unlock Areas" },
  { id: "first-upgrades", label: "Best Early Skills" },
  { id: "tools", label: "Equipment & Tools" },
  { id: "night", label: "Blackouts & Safe Returns" },
  { id: "difficulty", label: "Cozy, Normal & Hardcore" },
  { id: "stuck", label: "Progress Troubleshooting" },
  { id: "ending-and-extras", label: "Ending & Additional Goals" },
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
    images: [{ url: imageUrl, alt: "Playrooms computer desktop showing the light.exe app used to start a shift" }],
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

export default function PlayroomsHomePage() {
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
          <PlayroomsHomeContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
