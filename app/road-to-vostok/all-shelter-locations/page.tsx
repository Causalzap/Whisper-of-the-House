import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import RoadToVostokAllShelterLocationsContent from "@/data/road-to-vostok/all-shelter-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/road-to-vostok/all-shelter-locations`;

export const metadata: Metadata = {
  title:
    "All Shelter Locations in Road to Vostok & How to Unlock Them",
  description:
    "Discover every shelter location in Road to Vostok. We break down how to unlock the Cabin, Attic, and Bunker, the best progression order, and which safehouses to rush first.",
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
          name: "Road to Vostok All Shelter Locations",
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
      headline: "Road to Vostok All Shelter Locations",
      description:
        "A practical guide to every current shelter in Road to Vostok, including where each one is, how to unlock it, the best shelter order, and which shelters are actually worth rushing.",
      image: [
        `${siteUrl}/images/road-to-vostok/all-shelters-network-map-n.webp`,
        `${siteUrl}/images/road-to-vostok/village-map-with-attic-shelter.webp`,
        `${siteUrl}/images/road-to-vostok/outpost-bunker-cave-entrance.webp`,
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
          name: "Shelter locations",
        },
        {
          "@type": "Thing",
          name: "Cabin",
        },
        {
          "@type": "Thing",
          name: "Attic",
        },
        {
          "@type": "Thing",
          name: "Classroom",
        },
        {
          "@type": "Thing",
          name: "Tent",
        },
        {
          "@type": "Thing",
          name: "Bunker",
        },
        {
          "@type": "Thing",
          name: "Apartment Room",
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
          title="Road to Vostok All Shelter Locations"
          description="Learn where every current shelter is, how to unlock each one, which shelters are worth rushing first, and how Cabin, Attic, Classroom, Tent, Bunker, and Apartment Room fit into your progression network."
          gameTitle="Road to Vostok"
          gameHref="/road-to-vostok"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 16, 2026"
          toc={[
            {
              id: "all-shelter-locations-at-a-glance",
              label: "All shelter locations at a glance",
            },
            {
              id: "best-first-shelters-to-unlock",
              label: "Best first shelters to unlock",
            },
            {
              id: "how-to-unlock-every-shelter",
              label: "How to unlock every shelter",
            },
            {
              id: "cabin-village-area-05",
              label: "Cabin",
            },
            {
              id: "attic-village-area-05",
              label: "Attic",
            },
            {
              id: "classroom-school-area-05",
              label: "Classroom",
            },
            {
              id: "tent-outpost-border-zone",
              label: "Tent",
            },
            {
              id: "bunker-outpost-border-zone",
              label: "Bunker",
            },
            {
              id: "apartment-room-vostok",
              label: "Apartment Room",
            },
            {
              id: "area-05-vs-border-vs-vostok-shelters",
              label: "Area 05 vs Border vs Vostok shelters",
            },
            {
              id: "what-each-shelter-is-actually-good-for",
              label: "What each shelter is actually good for",
            },
            {
              id: "which-shelters-are-worth-rushing",
              label: "Which shelters are worth rushing",
            },
            {
              id: "hidden-shelter-rules-most-players-miss",
              label: "Hidden shelter rules most players miss",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/road-to-vostok/area-05-guide",
              label: "Road to Vostok Area 05 Guide",
            },
            {
              href: "/road-to-vostok/generalist-and-doctor-locations",
              label: "Generalist and Doctor Locations in Road to Vostok",
            },
            {
              href: "/road-to-vostok/permadeath-save-and-stash-guide",
              label: "Road to Vostok Permadeath, Save, and Stash Guide",
            },
            {
              href: "/road-to-vostok",
              label: "Road to Vostok Beginner Hub",
            },
          ]}
        >
          <RoadToVostokAllShelterLocationsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}