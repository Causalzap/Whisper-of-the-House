import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import MousebergHeraldComicLocationsContent from "@/data/mouse-pi-for-hire/mouseberg-herald-comic-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pathname = "/mouse-pi-for-hire/mouseberg-herald-comic-locations";
const pageUrl = `${siteUrl}${pathname}`;

const pageTitle = "MOUSE: P.I. For Hire Herald & Comic Guide";
const pageDescription =
  "A practical MOUSE: P.I. For Hire guide to Mouseberg Heralds and Comics, including miss patterns, cleanup habits, shop clues, and trophy milestones.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
  robots: {
    index: true,
    follow: true,
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
          name: "MOUSE: P.I. For Hire",
          item: `${siteUrl}/mouse-pi-for-hire`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Herald & Comic Guide",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      url: pageUrl,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      headline: pageTitle,
      description: pageDescription,
      inLanguage: "en",
      datePublished: "2026-04-17",
      dateModified: "2026-04-17",
      about: [
        {
          "@type": "VideoGame",
          name: "MOUSE: P.I. For Hire",
        },
        {
          "@type": "Thing",
          name: "Mouseberg Herald",
        },
        {
          "@type": "Thing",
          name: "Comics",
        },
        {
          "@type": "Thing",
          name: "Collectibles",
        },
        {
          "@type": "Thing",
          name: "Extra! Extra!",
        },
        {
          "@type": "Thing",
          name: "The Prequel",
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
          title={pageTitle}
          description="Need a cleaner Herald and Comic route in MOUSE: P.I. For Hire? This guide covers miss patterns, room-search habits, shop clues, and the key trophy milestones."
          gameTitle="MOUSE: P.I. For Hire"
          gameHref="/mouse-pi-for-hire"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 17, 2026"
          toc={[
            {
              id: "mouseberg-herald-and-comics-at-a-glance",
              label: "Mouseberg Heralds and Comics at a glance",
            },
            {
              id: "why-heralds-and-comics-matter",
              label: "Why Heralds and Comics matter",
            },
            {
              id: "mouseberg-herald-vs-comics",
              label: "Mouseberg Heralds vs Comics",
            },
            {
              id: "confirmed-newspaper-example-the-vanishing-act-locker",
              label: "Confirmed Newspaper example: The Vanishing Act locker",
            },
            {
              id: "confirmed-comic-example-the-vanishing-act",
              label: "Confirmed Comic example: The Vanishing Act",
            },
            {
              id: "shop-comic-strips-and-what-the-price-tells-you",
              label: "Shop Comic Strips and what the price tells you",
            },
            {
              id: "mission-quick-reference",
              label: "Mission quick-reference",
            },
            {
              id: "completion-and-trophy-anchors",
              label: "Completion and trophy anchors",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/mouse-pi-for-hire/collectibles-hub",
              label: "Collectibles Hub",
            },
            {
              href: "/mouse-pi-for-hire/missables-guide",
              label: "Missables Guide",
            },
            {
              href: "/mouse-pi-for-hire/buy-back-guide",
              label: "Buy-Back Guide",
            },
            {
              href: "/mouse-pi-for-hire/baseball-card-locations",
              label: "Baseball Card Locations Guide",
            },
          ]}
        >
          <MousebergHeraldComicLocationsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}