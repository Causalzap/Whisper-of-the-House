import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import HozyContent from "@/data/hozy/index.mdx";

const pageUrl = "https://www.whisperofthehouse.com/guides/hozy";
const siteUrl = "https://www.whisperofthehouse.com";

export const metadata: Metadata = {
  title: "Hozy Guides: Help for Dreams, Penthouse, Cafe, and Other Tough Levels",
  description:
    "Need help with the weirdest or hardest rooms in Hozy? Start here for level guides on Dreams, Penthouse, Cafe, and the Hozy rooms players struggle with most.",
  alternates: {
    canonical: "https://www.whisperofthehouse.com/guides/hozy",
  },
};

const jsonLd = [
    {
      "@context": "https://schema.org",
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
          name: "Hozy Guides",
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Hozy Guides: Help for Dreams, Penthouse, Cafe, and Other Tough Levels",
      description:
        "Some Hozy rooms are much easier to understand than others. This page helps you find the right guide if a level feels strange, cluttered, or harder to balance than it should.",
      inLanguage: "en",
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      isPartOf: {
        "@type": "WebSite",
        name: "Whisper of the House",
        url: siteUrl,
      },
      about: {
        "@type": "VideoGame",
        name: "Hozy",
      },
      dateModified: "2026-04-02",
      mainEntity: {
        "@id": `${pageUrl}#itemlist`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${pageUrl}#itemlist`,
      name: "Hozy guides",
      numberOfItems: 4,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Hozy Dreams Explained",
          url: `${siteUrl}/guides/hozy/dreams-explained/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Hozy Penthouse Layout Guide",
          url: `${siteUrl}/guides/hozy/penthouse-layout-guide/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Hozy Hardest Levels Ranked",
          url: `${siteUrl}/guides/hozy/hardest-levels-ranked/`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Hozy Cafe Layout Tips",
          url: `${siteUrl}/guides/hozy/cafe-layout-tips/`,
        },
      ],
    },
  ];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GuideArticlePage
          title="Hozy Guides: Help for Dreams, Penthouse, Cafe, and Other Tough Levels"
          description="Some Hozy rooms are much easier to understand than others. This page helps you find the right guide if a level feels strange, cluttered, or harder to balance than it should."
          gameTitle="Hozy"
          gameHref="/guides/hozy"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          hideCurrentTitleInBreadcrumb={true}
          updatedAt="April 2, 2026"
          toc={[
            {
              id: "what-hozy-is-and-why-some-levels-stand-out",
              label: "What Hozy is",
            },
            {
              id: "the-most-useful-hozy-guides-to-start-with",
              label: "Best guides to start with",
            },
            {
              id: "why-some-hozy-levels-feel-harder-than-others",
              label: "Why some levels feel harder",
            },
            {
              id: "all-hozy-levels-at-a-glance",
              label: "All levels at a glance",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/guides/hozy/dreams-explained/",
              label: "Hozy Dreams Explained",
            },
            {
              href: "/guides/hozy/penthouse-layout-guide/",
              label: "Hozy Penthouse Layout Guide",
            },
            {
              href: "/guides/hozy/hardest-levels-ranked/",
              label: "Hozy Hardest Levels Ranked",
            },
            {
              href: "/guides/hozy/cafe-layout-tips/",
              label: "Hozy Cafe Layout Tips",
            },
          ]}
        >
          <HozyContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}