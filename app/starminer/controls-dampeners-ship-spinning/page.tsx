import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ControlsDampenersContent from "@/data/starminer/controls-dampeners-ship-spinning.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/starminer/controls-dampeners-ship-spinning`;

const imageUrls = [
  `${siteUrl}/images/starminer/starminer-linear-rotational-dampeners.webp`,
  `${siteUrl}/images/starminer/starminer-energy-grid-orientation-tool.webp`,
  `${siteUrl}/images/starminer/starminer-module-grid-blueprints.webp`,
  `${siteUrl}/images/starminer/starminer-space-brake-low-energy.webp`,
  `${siteUrl}/images/starminer/starminer-directional-module-line-of-sight.webp`,
  `${siteUrl}/images/starminer/starminer-ship-vitals-ui.webp`,
  `${siteUrl}/images/starminer/starminer-low-energy-warning.webp`,
  `${siteUrl}/images/starminer/starminer-manual-approach-near-station.webp`,
  `${siteUrl}/images/starminer/starminer-free-t2-ship-salvage.webp`,
];

const toc = [
  { id: "why-controls-feel-hard", label: "Why controls feel hard" },
  { id: "newtonian-movement", label: "Why the ship does not stop" },
  { id: "center-of-mass", label: "Center of mass and spin" },
  { id: "orientation-tool", label: "Orientation tool" },
  { id: "linear-dampeners", label: "Linear dampeners" },
  { id: "rotational-dampeners", label: "Rotational dampeners" },
  { id: "space-brake", label: "Space braking" },
  { id: "shift-rotation", label: "Shift rotation" },
  { id: "tools-directional", label: "Directional tools" },
  { id: "mass", label: "Mass and layout" },
  { id: "low-energy", label: "Low energy controls" },
  { id: "manual-approach", label: "Manual approach" },
  { id: "free-modules", label: "Free modules" },
  { id: "common-problems", label: "Common problems" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/starminer", label: "Starminer Guide Hub" },
  {
    href: "/starminer/beginner-first-hour",
    label: "Beginner First Hour Guide",
  },
  {
    href: "/starminer/how-to-mine-scanner-laser",
    label: "Mining, Scanner and Laser Guide",
  },
  {
    href: "/starminer/money-selling-resources",
    label: "Money and Selling Resources Guide",
  },
  {
    href: "/starminer/power-heat-low-energy",
    label: "Power, Heat and Low Energy Guide",
  },
  {
    href: "/starminer/early-research-progression",
    label: "Early Research Progression Guide",
  },
];

export const metadata: Metadata = {
  title: "Starminer Controls Guide: Dampeners, 6DOF & Spinning",
  description:
    "Fix Starminer drifting, ship spinning and hard controls. Learn 6DOF movement, dampeners, Space braking, center of mass, low energy and module layout.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Starminer Controls Guide: Dampeners, 6DOF Movement and Ship Spinning",
    description:
      "Learn why your Starminer ship keeps drifting or spinning, how Newtonian movement works, when to use linear and rotational dampeners, and how mass, layout and low energy affect control.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Starminer tutorial screen showing linear and rotational dampeners during early ship control.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Starminer Controls Guide: Dampeners, 6DOF & Spinning",
    description:
      "Stop drifting and spinning in Starminer with dampeners, Space braking, 6DOF movement, center of mass checks and low-energy fixes.",
    images: [imageUrls[0]],
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
          name: "Starminer Guide",
          item: `${siteUrl}/starminer`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Controls and Dampeners",
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
        "Starminer Controls Guide: Dampeners, 6DOF Movement, Newtonian Physics, Center of Mass and Ship Spinning Fixes",
      description:
        "A player-focused Starminer controls guide explaining why ships keep drifting or spinning, how Newtonian-style movement works, why releasing movement keys does not instantly stop the ship, how six degrees of freedom movement works, how to use linear dampeners, rotational dampeners and Space braking, why center of mass and uneven module layouts can cause spin, how directional tools and weapons need line of sight, how low energy affects movement, and how to approach stations, asteroids and free modules safely.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-28",
      dateModified: "2026-05-28",
      about: [
        { "@type": "VideoGame", name: "Starminer" },
        { "@type": "Thing", name: "Starminer Controls" },
        { "@type": "Thing", name: "Starminer Dampeners" },
        { "@type": "Thing", name: "Starminer Ship Spinning" },
        { "@type": "Thing", name: "Starminer Ship Drifting" },
        { "@type": "Thing", name: "6DOF Movement" },
        { "@type": "Thing", name: "Six Degrees of Freedom" },
        { "@type": "Thing", name: "Newtonian Movement" },
        { "@type": "Thing", name: "Linear Dampeners" },
        { "@type": "Thing", name: "Rotational Dampeners" },
        { "@type": "Thing", name: "Space Braking" },
        { "@type": "Thing", name: "Center of Mass" },
        { "@type": "Thing", name: "Low Energy" },
        { "@type": "Thing", name: "Directional Modules" },
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
          name: "How do I stop my ship from drifting in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Turn on linear dampeners, stop thrusting, and hold Space if you need stronger braking. If Low Energy is showing, let the grid recover before trying more maneuvers.",
          },
        },
        {
          "@type": "Question",
          name: "How do I stop my ship from spinning in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Turn on rotational dampeners, stop giving rotation input, and use smaller Shift taps. If the spin started after adding modules, check whether the new layout shifted your center of mass.",
          },
        },
        {
          "@type": "Question",
          name: "Why doesn't my ship stop when I release the keys in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Starminer uses Newtonian-style movement. Releasing the keys stops adding thrust, but your ship keeps its existing velocity until dampeners, braking or opposite thrust slow it down.",
          },
        },
        {
          "@type": "Question",
          name: "What does 6DOF movement mean in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "6DOF means six degrees of freedom. In Starminer, you can move forward/back, left/right, up/down, and rotate the ship to aim tools, weapons and docking angles.",
          },
        },
        {
          "@type": "Question",
          name: "What do linear dampeners do in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Linear dampeners counter straight-line movement. They help stop forward, backward, sideways, upward and downward drift after you release thrust.",
          },
        },
        {
          "@type": "Question",
          name: "What do rotational dampeners do in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Rotational dampeners counter spin and angular movement. They help the ship stop rotating after you turn.",
          },
        },
        {
          "@type": "Question",
          name: "What does Space do in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Space helps brake the ship by using dampening systems together. Hold it until your velocity drops instead of tapping it once.",
          },
        },
        {
          "@type": "Question",
          name: "Why do WASD controls feel reversed in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Your ship may be facing a different direction than you think. Use the orientation tool to check forward direction before thrusting.",
          },
        },
        {
          "@type": "Question",
          name: "How do I rotate the ship in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use Shift with the movement keys to rotate instead of only moving in a straight line. Use short taps so you do not over-rotate.",
          },
        },
        {
          "@type": "Question",
          name: "Why does my ship handle worse after mining in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Cargo adds mass. A heavier ship takes longer to slow down and can strain power while maneuvering.",
          },
        },
        {
          "@type": "Question",
          name: "Why does low energy affect movement in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Dampeners and other active systems need power. If your grid is strained, the ship may not stop, rotate or respond as cleanly.",
          },
        },
        {
          "@type": "Question",
          name: "Should I turn off dampeners to travel faster in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Only when you understand how to brake safely. While learning, keep dampeners on near stations, asteroids, debris and docking targets.",
          },
        },
        {
          "@type": "Question",
          name: "Why do my weapons or mining lasers not point at the target in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Many modules are directional. Rotate the ship until the correct side has line of sight.",
          },
        },
        {
          "@type": "Question",
          name: "How do I avoid crashing into stations in Starminer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Slow down early, keep linear dampeners on, cancel risky navigation near the target, and finish the final approach manually with small inputs.",
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
          title="Stop Drifting and Spinning in Starminer"
          description="Learn why your ship keeps moving after you release the keys, how dampeners work, and how mass, center of mass, 6DOF controls and low energy affect handling."
          gameTitle="Starminer"
          gameHref="/starminer"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ControlsDampenersContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}