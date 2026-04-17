import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import WeaponSchematicsSecretFigurinesGuideContent from "@/data/mouse-pi-for-hire/weapon-schematics-secret-figurines-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pathname = "/mouse-pi-for-hire/weapon-schematics-secret-figurines-guide";
const pageUrl = `${siteUrl}${pathname}`;

const pageTitle =
  "Weapon Schematics & Secret Figurines Guide | MOUSE: P.I. For Hire";

const pageDescription =
  "Find the riskiest collectibles in MOUSE: P.I. For Hire. Learn why Secret Figurines need strict tracking and how many Weapon Schematics you actually need for upgrades.";
  
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
          name: "Weapon Schematics & Secret Figurines Guide",
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
          name: "Weapon Schematics",
        },
        {
          "@type": "Thing",
          name: "Secret Figurines",
        },
        {
          "@type": "Thing",
          name: "Collectibles",
        },
        {
          "@type": "Thing",
          name: "Everybody Loves Rayguns",
        },
        {
          "@type": "Thing",
          name: "Jack Pepper Figurines",
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
          description={pageDescription}
          gameTitle="MOUSE: P.I. For Hire"
          gameHref="/mouse-pi-for-hire"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 17, 2026"
          toc={[
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
              id: "completion-and-trophy-anchors",
              label: "Completion and trophy anchors",
            },
            {
              id: "heralds-and-comics-at-a-glance",
              label: "Mouseberg Heralds and Comics at a glance",
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
              href: "/mouse-pi-for-hire/mouseberg-herald-comic-locations",
              label: "Mouseberg Herald & Comic Locations Guide",
            },
          ]}
        >
          <WeaponSchematicsSecretFigurinesGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}