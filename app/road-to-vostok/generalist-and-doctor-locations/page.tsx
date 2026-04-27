import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import RoadToVostokGeneralistAndDoctorLocationsContent from "@/data/road-to-vostok/generalist-and-doctor-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/road-to-vostok/generalist-and-doctor-locations`;

export const metadata: Metadata = {
    title: "Road to Vostok Traders: Generalist & Doctor Locations",
    description:
      "Locate the Generalist and Doctor in Road to Vostok. Get exact routes, Day 1 vs Day 2 unlock times, and learn which trader to prioritize for early survival.",
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
          item: `${siteUrl}/road-to-vostok`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Generalist and Doctor Locations in Road to Vostok",
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
      headline: "Generalist and Doctor Locations in Road to Vostok",
      description:
        "A practical Road to Vostok merchant guide covering where to find the Generalist and Doctor, when they unlock, how to route to them, which items make the Doctor trip worth it, and how trader tasks connect to Attic and Classroom shelter progression.",
      image: [
        `${siteUrl}/images/road-to-vostok/generalist-village-map.webp`,
        `${siteUrl}/images/road-to-vostok/generalist-warehouse-location.webp`,
        `${siteUrl}/images/road-to-vostok/doctor-school-location.webp`,
        `${siteUrl}/images/road-to-vostok/doctor-third-floor-room.webp`,
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
          name: "Generalist",
        },
        {
          "@type": "Thing",
          name: "Doctor",
        },
        {
          "@type": "Thing",
          name: "Village",
        },
        {
          "@type": "Thing",
          name: "School",
        },
        {
          "@type": "Thing",
          name: "Trader tasks",
        },
        {
          "@type": "Thing",
          name: "Attic Shelter",
        },
        {
          "@type": "Thing",
          name: "Classroom Shelter",
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
          title="Generalist and Doctor Locations in Road to Vostok"
          description="Learn the exact route to the Generalist and Doctor, when each trader unlocks, what each one is actually for, and how trader tasks connect to Attic and Classroom shelter progression."
          gameTitle="Road to Vostok"
          gameHref="/road-to-vostok"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 16, 2026"
          toc={[
            {
              id: "trader-unlock-snapshot",
              label: "Trader unlock snapshot",
            },
            {
              id: "where-is-the-generalist",
              label: "Where is the Generalist?",
            },
            {
              id: "what-the-generalist-is-actually-for",
              label: "What the Generalist is for",
            },
            {
              id: "where-is-the-doctor",
              label: "Where is the Doctor?",
            },
            {
              id: "when-the-doctor-trip-is-worth-it",
              label: "When the Doctor trip is worth it",
            },
            {
              id: "which-trader-first",
              label: "Which trader to visit first",
            },
            {
              id: "tasks-matter-more-than-random-trades",
              label: "Why tasks matter more than random trades",
            },
            {
              id: "doctor-items-worth-calling-out",
              label: "Doctor items worth calling out",
            },
            {
              id: "shelters-and-risk",
              label: "Shelters and risk",
            },
            {
              id: "do-not-carry-task-items-carelessly",
              label: "Do not carry task items carelessly",
            },
            {
              id: "why-this-page-is-better-than-a-basic-location-list",
              label: "Why this page is more useful",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/road-to-vostok/roarea-05-guide",
              label: "Road to Vostok Area 05 Guide",
            },
            {
              href: "/road-to-vostok/permadeath-save-and-stash-guide",
              label: "Road to Vostok Permadeath, Save, and Stash Guide",
            },
            {
              href: "/road-to-vostok/all-shelter-locations",
              label: "All Shelter Locations in Road to Vostok",
            },
            {
              href: "/road-to-vostok",
              label: "Road to Vostok Beginner Hub",
            },
          ]}
        >
          <RoadToVostokGeneralistAndDoctorLocationsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}