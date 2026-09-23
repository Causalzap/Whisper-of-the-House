import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ControlResonantWestIncursionZoneContent from "@/data/control-resonant/west-incursion-zone.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/control-resonant`;
const pageUrl = `${hubUrl}/west-incursion-zone`;

const metadataTitle =
  "CONTROL Resonant West Incursion Zone: Shift & Theater Route";

const metadataDescription =
  "Reach the West Incursion Theater, complete the Incursion Fault for Shift, cross the long gap, follow the missing Rangers, and find the Dancer.";

const articleDescription =
  "Enter the West Incursion Zone from Central, follow the theater spotlights, complete the Incursion Fault to unlock Shift, cross the altered-gravity route, and reach the Theater.";

const imageUrls = [
  `${siteUrl}/images/control-resonant/control-resonant-west-incursion-zone-entry.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-west-incursion-parking-garage.webp`,
  `${siteUrl}/images/control-resonant/control-resonant-west-incursion-missing-rangers.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "enter-west-incursion-zone",
    label: "Enter West Incursion Zone",
  },
  {
    id: "follow-theater-spotlights",
    label: "Follow the theater spotlights",
  },
  {
    id: "incursion-fault",
    label: "Complete the Incursion Fault",
  },
  {
    id: "return-to-theater-route",
    label: "Cross the gap with Shift",
  },
  {
    id: "ranger-route",
    label: "Follow the missing Rangers",
  },
  {
    id: "enter-theater",
    label: "Enter the Theater",
  },
  {
    id: "after-dancer",
    label: "After defeating the Dancer",
  },
  {
    id: "before-leaving",
    label: "Before leaving West Incursion",
  },
  {
    id: "theater-route-problems",
    label: "Theater route & Shift checks",
  },
];

const relatedLinks = [
  {
    href: "/control-resonant",
    label: "CONTROL Resonant Guide",
  },
  {
    href: "/control-resonant/search-for-jesse",
    label: "Search for Jesse",
  },
  {
    href: "/control-resonant/dancer",
    label: "Dancer Boss Guide",
  },
  {
    href: "/control-resonant/party-wont-stop",
    label: "The Party Won't Stop",
  },
  {
    href: "/control-resonant/last-taxi",
    label: "The Last Taxi",
  },
  {
    href: "/control-resonant/walkthrough",
    label: "Main Story Walkthrough",
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
    title: metadataTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: imageUrls,
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImage],
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
          name: "CONTROL Resonant",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "West Incursion Zone",
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
        "CONTROL Resonant West Incursion Zone: Shift & Theater Route",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-23",
      dateModified: "2026-09-23",
      about: [
        {
          "@type": "VideoGame",
          name: "CONTROL Resonant",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "West Incursion Zone",
        },
        {
          "@type": "Thing",
          name: "The Incursion Fault",
        },
        {
          "@type": "Thing",
          name: "Shift",
        },
        {
          "@type": "Thing",
          name: "West Incursion Theater",
        },
        {
          "@type": "Thing",
          name: "Parking Garage",
        },
        {
          "@type": "Thing",
          name: "Missing FBC Rangers",
        },
        {
          "@type": "Thing",
          name: "The Dancer",
        },
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
      },
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "Whisper of the House",
      url: siteUrl,
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
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="CONTROL Resonant West Incursion Zone: Shift & Theater Route"
          description="Follow the theater spotlights, complete the Incursion Fault for Shift, cross the long altered-gravity gap, find the missing Rangers, and reach the Dancer."
          gameTitle="CONTROL Resonant"
          gameHref="/control-resonant"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ControlResonantWestIncursionZoneContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}