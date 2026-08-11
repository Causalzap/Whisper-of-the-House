import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PaxAutocraticaWorkScheduleContent from "@/data/pax-autocratica/work-schedule.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/pax-autocratica`;
const pageUrl = `${hubUrl}/work-schedule`;

const imageUrls = [
  `${siteUrl}/images/pax-autocratica/pax-autocratica-exhausted-soldiers.webp`,
  `${siteUrl}/images/pax-autocratica/pax-autocratica-unified-labor-research.webp`,
  `${siteUrl}/images/pax-autocratica/pax-autocratica-20-hour-workday.webp`,
  `${siteUrl}/images/pax-autocratica/pax-autocratica-24-hours-time-off.webp`,
  `${siteUrl}/images/pax-autocratica/pax-autocratica-15-hour-workday.webp`,
];

export const metadata: Metadata = {
  title: "Pax Autocratica Work Schedule & Overworked Soldiers Guide",
  description:
    "Fix exhausted soldiers with Unified Labor, working hours and Paid Time Off, and learn when you actually need more workers.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Pax Autocratica Work Schedule & Overworked Soldiers Guide",
    description:
      "Find Unified Labor, change daily working hours, use 24h Paid Time Off, and tell a bad schedule from a real worker shortage.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[2],
        width: 1280,
        height: 720,
        alt: "Pax Autocratica Unified Labor directive showing a 20 hour workday",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Change Work Schedule in Pax Autocratica",
    description:
      "Use Unified Labor to change working hours, recover exhausted soldiers, and diagnose when your colony really needs more labor.",
    images: [imageUrls[2]],
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
          name: "Pax Autocratica Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Work Schedule Guide",
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
        "Pax Autocratica Work Schedule & Overworked Soldiers Guide",
      description:
        "A practical Pax Autocratica work schedule guide covering exhausted and overworked soldiers, how to unlock Unified Labor at Victory Square, where to change Daily working hours in Directives, how to Issue Directive, why a 20-hour workday can become unsustainable, when I temporarily use a 15-hour schedule, how 24h Paid Time Off works, and how to tell a schedule problem from a real worker shortage.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-11",
      dateModified: "2026-08-11",
      about: [
        {
          "@type": "VideoGame",
          name: "Pax Autocratica",
        },
        {
          "@type": "Thing",
          name: "Pax Autocratica work schedule",
        },
        {
          "@type": "Thing",
          name: "Pax Autocratica working hours",
        },
        {
          "@type": "Thing",
          name: "Overworked soldiers",
        },
        {
          "@type": "Thing",
          name: "Exhausted soldiers",
        },
        {
          "@type": "Thing",
          name: "Unified Labor",
        },
        {
          "@type": "Thing",
          name: "Victory Square",
        },
        {
          "@type": "Thing",
          name: "Daily working hours",
        },
        {
          "@type": "Thing",
          name: "Paid Time Off",
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
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="How I Fix Overworked Soldiers in Pax Autocratica"
          description="Unlock Unified Labor, shorten an unsustainable workday, use Paid Time Off on soldiers who are already exhausted, and only recruit more workers when the colony truly lacks labor."
          gameTitle="Pax Autocratica"
          gameHref="/pax-autocratica"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 11, 2026"
          toc={[
            {
              id: "why-soldiers-get-overworked",
              label: "Why soldiers get overworked",
            },
            {
              id: "unlock-unified-labor",
              label: "Unlock Unified Labor",
            },
            {
              id: "change-work-schedule",
              label: "Change working hours",
            },
            {
              id: "20-hour-workday",
              label: "20-hour workday",
            },
            {
              id: "paid-time-off",
              label: "24h Paid Time Off",
            },
            {
              id: "15-hour-workday",
              label: "15-hour workday",
            },
            {
              id: "schedule-or-worker-shortage",
              label: "Schedule or worker shortage?",
            },
            {
              id: "before-expedition",
              label: "Before the next expedition",
            },
            {
              id: "my-work-schedule-rule",
              label: "My schedule rule",
            },
          ]}
          relatedLinks={[
            {
              href: "/pax-autocratica",
              label: "Pax Autocratica Beginner Guide",
            },
            {
              href: "/pax-autocratica/capture-enemies-prisoners",
              label: "Capture Enemies & Convert Prisoners",
            },
            {
              href: "/pax-autocratica/elysia-walkthrough",
              label: "Elysia Walkthrough & Progression",
            },
          ]}
        >
          <PaxAutocraticaWorkScheduleContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}