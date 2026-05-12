import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import EnergyGuideContent from "@/data/outbound/energy-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/outbound/energy-guide`;

export const metadata: Metadata = {
  title: "Outbound Energy Guide: Battery, Fuel, Solar, Wind & Power",
  description:
    "Fix battery drain in Outbound! Master early energy, Power Unit fuel, charging stations, solar/wind, van weight, upgrades & co-op power tips.",
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
          name: "Outbound Guide",
          item: `${siteUrl}/outbound`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Energy Guide",
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
        "Outbound Energy Guide: Battery Drain, Power Unit, Solar, Wind, Rainwater and Vehicle Upgrades",
      description:
        "Fix battery drain in Outbound with the best early energy setup, Power Unit fuel, charging stations, solar, wind, rainwater, van weight, vehicle upgrades, and co-op power tips.",
      image: [
        `${siteUrl}/images/outbound/outbound-energy-battery-running-low.webp`,
        `${siteUrl}/images/outbound/outbound-van-storage-power-unit.webp`,
        `${siteUrl}/images/outbound/outbound-energy-charging-station-full.webp`,
        `${siteUrl}/images/outbound/outbound-energy-solar-charging-slow.webp`,
        `${siteUrl}/images/outbound/outbound-energy-solar-station-night.webp`,
        `${siteUrl}/images/outbound/outbound-energy-wind-turbines-roof.webp`,
        `${siteUrl}/images/outbound/outbound-energy-rainwater-efficient-wind-blueprints.webp`,
        `${siteUrl}/images/outbound/outbound-energy-vehicle-upgrades-battery-motor.webp`,
        `${siteUrl}/images/outbound/outbound-first-biome-steep-slope-motor-upgrade.webp`
      ],
      inLanguage: "en",
      datePublished: "2026-05-12",
      dateModified: "2026-05-12",
      about: [
        {
          "@type": "VideoGame",
          name: "Outbound",
        },
        {
          "@type": "Thing",
          name: "Energy Management",
        },
        {
          "@type": "Thing",
          name: "Battery Drain",
        },
        {
          "@type": "Thing",
          name: "Power Unit",
        },
        {
          "@type": "Thing",
          name: "Vehicle Upgrades",
        },
        {
          "@type": "Thing",
          name: "Solar Power",
        },
        {
          "@type": "Thing",
          name: "Wind Power",
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
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Why does my battery keep running out in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Your van battery drains as you drive, and early battery capacity is limited. Long routes, heavy van builds, steep terrain, and poor fuel habits make this worse. Use the Power Unit, charging stations, and vehicle upgrades.",
          },
        },
        {
          "@type": "Question",
          name: "How often can I use a charging station in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Charging stations have a cooldown, so you cannot spam the same station endlessly. Treat them as route checkpoints and top off before you are desperate.",
          },
        },
        {
          "@type": "Question",
          name: "Does solar or wind charge while driving in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Passive power is mainly useful while the van is parked. Solar, wind, and rainwater or hydro systems reduce pressure during stops, but they do not replace battery capacity and fuel planning while traveling.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best early fuel in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Common wood is the best early manual fuel. Fiber works as an emergency backup, but you should save most Fiber for Sewing Table, gear, backpack, and clothing upgrades.",
          },
        },
        {
          "@type": "Question",
          name: "Is solar power good in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Solar is useful as passive daytime support, but early solar can feel slow and depends on daylight and weather. Do not rely on solar alone in the first map.",
          },
        },
        {
          "@type": "Question",
          name: "Is wind power better than solar in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Wind becomes the strongest long-term passive layer once you unlock better turbines. Solar is still useful, but wind is easier to recommend as your later passive backbone.",
          },
        },
        {
          "@type": "Question",
          name: "How does rainwater or hydro power work in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Rainwater or hydro power is position and condition dependent. Park near a valid water source or in the right weather setup, then treat it as parked passive generation rather than driving power.",
          },
        },
        {
          "@type": "Question",
          name: "Why can’t my van climb a steep slope in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You need a motor or slope upgrade, and a heavy van can make the problem worse. Unlock Vehicle Research, craft the required parts, and upgrade the vehicle before trying again.",
          },
        },
        {
          "@type": "Question",
          name: "Does van weight affect energy in Outbound?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. More workstations, storage, furniture, roof pieces, and decorations make the van heavier. A heavier van can slow down, climb worse, and consume power less efficiently, so weight capacity upgrades matter.",
          },
        },
        {
          "@type": "Question",
          name: "How does energy work in Outbound co-op?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The van battery is shared. Multiple players crafting, building, processing, and driving can drain power faster, so assign one player to monitor battery and fuel.",
          },
        },
      ],
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
          title="Outbound Energy Guide: Battery Drain, Power Unit, Solar, Wind and Vehicle Upgrades"
          description="Fix battery drain in Outbound with early Power Unit fuel, charging stations, passive solar, wind, rainwater, van weight control, battery upgrades, motor upgrades, and co-op power habits."
          gameTitle="Outbound"
          gameHref="/outbound"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 12, 2026"
          toc={[
            {
              id: "why-battery-drains",
              label: "Why battery drains",
            },
            {
              id: "power-unit",
              label: "Power Unit",
            },
            {
              id: "charging-stations",
              label: "Charging stations",
            },
            {
              id: "best-early-energy-setup",
              label: "Best early setup",
            },
            {
              id: "passive-power-parked",
              label: "Passive power",
            },
            {
              id: "solar-power",
              label: "Solar power",
            },
            {
              id: "wind-power",
              label: "Wind power",
            },
            {
              id: "rainwater-hydro",
              label: "Rainwater & hydro",
            },
            {
              id: "vehicle-upgrades",
              label: "Vehicle upgrades",
            },
            {
              id: "upgrade-priority",
              label: "Upgrade priority",
            },
            {
              id: "energy-sources",
              label: "Energy sources",
            },
            {
              id: "co-op-energy",
              label: "Co-op energy",
            },
            {
              id: "pre-trip-checklist",
              label: "Pre-trip checklist",
            },
            {
              id: "fuel-vs-crafting",
              label: "Fuel vs crafting",
            },
            {
              id: "what-to-do-if-out-of-power",
              label: "Out of power",
            },
            {
              id: "energy-and-first-biome",
              label: "First biome",
            },
            {
              id: "common-mistakes",
              label: "Common mistakes",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/outbound",
              label: "Outbound Beginner Guide",
            },
            {
              href: "/outbound/leave-first-biome",
              label: "How to Leave the First Biome in Outbound",
            },
            {
              href: "/outbound/early-resources",
              label: "Outbound Early Resource Guide",
            },
            {
              href: "/outbound/blueprints-workstations-upgrades",
              label: "Outbound Blueprints and Workstations Guide",
            },
            {
              href: "/outbound/storage-backpack-guide",
              label: "Outbound Storage and Backpack Guide",
            },
          ]}
        >
          <EnergyGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
