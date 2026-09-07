import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TheLastCaretakerPowerFuelContent from "@/data/the-last-caretaker/power-fuel-wall-outlets.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-last-caretaker/power-fuel-wall-outlets`;

const imageUrls = [
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-wall-outlets-skill-unlocks.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-electric-cable-extender-input.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-electric-cable-extender-range.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-gas-fuel-wall-socket-blocked-output.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-bulk-battery-built.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-bulk-battery-fill-equalize.webp`,
];

export const metadata: Metadata = {
  title: "The Last Caretaker Power, Fuel & Wall Outlets Guide",
  description:
    "Fix wall outlet range, power and fuel routing, use Fill vs Equalize correctly, and decide when 20 kWh batteries or 10,000L tanks are worth it.",
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
          name: "The Last Caretaker Guide",
          item: `${siteUrl}/the-last-caretaker`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Power, Fuel & Wall Outlets",
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
        "The Last Caretaker Power, Fuel & Wall Outlets: How to Fix Your Boat Network",
      description:
        "A practical guide to The Last Caretaker power, fuel and gas routing, including Update 5 wall outlets, electric cable extenders, range and blocked-output problems, Grid Scan, Update 5.5 Bulk Batteries and Bulk Fuel Tanks, current 20 kWh and 10,000L capacities, Fill versus Equalize behavior, mixed battery banks, and deciding whether large storage belongs on the boat or at Lazarus and Exodus.",
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-09-07",
      about: [
        {
          "@type": "VideoGame",
          name: "The Last Caretaker",
        },
        {
          "@type": "Thing",
          name: "Wall Outlets",
        },
        {
          "@type": "Thing",
          name: "Power Routing",
        },
        {
          "@type": "Thing",
          name: "Fuel Routing",
        },
        {
          "@type": "Thing",
          name: "Gas Routing",
        },
        {
          "@type": "Thing",
          name: "Bulk Battery",
        },
        {
          "@type": "Thing",
          name: "Bulk Petrol Tank",
        },
        {
          "@type": "Thing",
          name: "Bulk Diesel Tank",
        },
        {
          "@type": "Thing",
          name: "Fill and Equalize",
        },
        {
          "@type": "Thing",
          name: "Grid Scan",
        },
        {
          "@type": "Thing",
          name: "MOSES Field Reserve Program",
        },
        {
          "@type": "Thing",
          name: "The Last Caretaker Update 5.5",
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
          title="The Last Caretaker Power, Fuel & Wall Outlets: What Actually Works?"
          description="If the boat keeps losing power, a wall socket will not connect, or your new Bulk Battery refuses to fill, trace the failure first. Clean up only the network that is causing trouble, then decide whether the 5.5 bulk storage is worth rebuilding around."
          gameTitle="The Last Caretaker"
          gameHref="/the-last-caretaker"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 7, 2026"
          toc={[
            {
              id: "fix-the-bottleneck",
              label: "Fix the real bottleneck",
            },
            {
              id: "what-wall-outlets-do",
              label: "What wall outlets do",
            },
            {
              id: "build-from-the-load",
              label: "Build from the load",
            },
            {
              id: "range-blocked-output",
              label: "Range & blocked output",
            },
            {
              id: "bulk-storage-update-55",
              label: "5.5 bulk storage",
            },
            {
              id: "bulk-battery-fill-equalize",
              label: "Fill vs Equalize",
            },
            {
              id: "bulk-tanks",
              label: "10,000L bulk tanks",
            },
            {
              id: "boat-or-fixed-base",
              label: "Boat or fixed base",
            },
            {
              id: "fuel-gas-routing",
              label: "Fuel & gas routing",
            },
            {
              id: "grid-scan",
              label: "Grid Scan",
            },
            {
              id: "power-fuel-troubleshooting",
              label: "Troubleshooting",
            },
            {
              id: "when-to-stop-rebuilding",
              label: "When to stop rebuilding",
            },
          ]}
          relatedLinks={[
            {
              href: "/the-last-caretaker",
              label: "The Last Caretaker Guide Hub",
            },
            {
              href: "/the-last-caretaker/new-horizons-guide",
              label: "New Horizons Guide",
            },
            {
              href: "/the-last-caretaker/oil-whale-guide",
              label: "Oil Whale Guide",
            },
            {
              href: "/the-last-caretaker/project-eden-guide",
              label: "Project Eden Guide",
            },
            {
              href: "/the-last-caretaker/walkthrough",
              label: "The Last Caretaker Walkthrough",
            },
          ]}
        >
          <TheLastCaretakerPowerFuelContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}