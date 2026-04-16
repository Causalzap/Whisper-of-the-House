import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import RoadToVostokHubContent from "@/data/road-to-vostok/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/road-to-vostok`;

export const metadata: Metadata = {
    title: "Road to Vostok Beginner Hub: Traders, Shelters & Save Guide",
    description:
      "Start your Road to Vostok journey here. Our beginner hub links essential early guides on Area 05, trader locations, permadeath, stash logic, and shelters.",
    alternates: {
      canonical: pageUrl,
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
          name: "Road to Vostok",
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
      headline: "Road to Vostok Beginner Hub",
      description:
        "A progression hub for Road to Vostok beginners, linking the most important early guides for Area 05 routing, trader timing, permadeath and stash logic, and shelter progression.",
      image: [
        `${siteUrl}/images/road-to-vostok/road-to-vostok-beginner-hub-cover.webp`,
        `${siteUrl}/images/road-to-vostok/all-shelters-network-map.webp`,
        `${siteUrl}/images/road-to-vostok/road-to-vostok-zone-progression-map.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-16",
      about: [
        {
          "@type": "VideoGame",
          name: "Road to Vostok",
        },
        {
          "@type": "Thing",
          name: "Area 05",
        },
        {
          "@type": "Thing",
          name: "Generalist",
        },
        {
          "@type": "Thing",
          name: "Doctor",
        },
        {
          "@type": "Thing",
          name: "Permadeath",
        },
        {
          "@type": "Thing",
          name: "Shelter locations",
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
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GuideArticlePage
          title="Road to Vostok Beginner Hub"
          description="Start here for the most useful early Road to Vostok guides: Area 05, trader timing, save and stash logic, and shelter progression."
          gameTitle="Road to Vostok"
          gameHref="/road-to-vostok"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 16, 2026"
          toc={[
            {
              id: "start-here",
              label: "Start Here: Area 05",
            },
            {
              id: "protect-your-run",
              label: "Protect Your Run",
            },
            {
              id: "what-to-read-next",
              label: "What to Read Next",
            },
            {
              id: "quick-start-faq",
              label: "Quick Start FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/road-to-vostok/area-05-guide/",
              label: "Road to Vostok Area 05 Guide",
            },
            {
              href: "/road-to-vostok/generalist-and-doctor-locations/",
              label: "Generalist and Doctor Locations in Road to Vostok",
            },
            {
              href: "/road-to-vostok/permadeath-save-and-stash-guide/",
              label: "Road to Vostok Permadeath, Save, and Stash Guide",
            },
            {
              href: "/road-to-vostok/all-shelter-locations/",
              label: "All Shelter Locations in Road to Vostok",
            },
          ]}
        >
          <RoadToVostokHubContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}