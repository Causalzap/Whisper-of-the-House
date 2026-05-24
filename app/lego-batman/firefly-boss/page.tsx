import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FireflyBossContent from "@/data/lego-batman/firefly-boss.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/lego-batman/firefly-boss`;

const imageUrls = [
  `${siteUrl}/images/lego-batman/lego-batman-firefly-masquerade-attack.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-firefly-flaming-trail.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-firefly-ship-rescue.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-firefly-door-pieces.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-firefly-trial-by-fire.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-firefly-high-ground.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-space-shuttle-stations.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-batgirl-hack-panel.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-firefly-defeated.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-mr-freeze-arrival.webp`,
];

const toc = [
  { id: "firefly-boss-overview", label: "Overview" },
  { id: "firefly-route-summary", label: "Route" },
  { id: "follow-the-flaming-wreckage", label: "Flaming Wreckage" },
  { id: "ship-rescue-wheel", label: "Ship Rescue" },
  { id: "build-through-the-locked-door", label: "Locked Door" },
  { id: "trial-by-fire-route", label: "Trial by Fire" },
  { id: "firefly-high-ground", label: "High Ground" },
  { id: "space-shuttle-steps", label: "Shuttle Steps" },
  { id: "batgirl-hack-panel", label: "Batgirl Hack" },
  { id: "firefly-defeated", label: "Firefly Defeated" },
  { id: "collectibles-note", label: "Collectibles" },
  { id: "if-you-are-stuck", label: "Stuck?" },
  { id: "full-firefly-route", label: "Fast Route" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/lego-batman", label: "LEGO Batman Guide" },
  { href: "/lego-batman/batgirl-unlock", label: "Batgirl Unlock Guide" },
  { href: "/lego-batman/escaped-zoo-animals", label: "Escaped Zoo Animals Guide" },
  { href: "/lego-batman/poison-ivy-boss", label: "Poison Ivy Boss Guide" },
  { href: "/lego-batman/new-beginnings-docks-collectibles", label: "New Beginnings Docks Collectibles" },
{ href: "/lego-batman/radio-towers", label: "Radio Towers Guide" },
{ href: "/lego-batman/mr-freeze-boss", label: "Mr. Freeze Boss Guide" },
  { href: "/lego-batman/bane-boss", label: "Bane Boss Guide" },
  { href: "/lego-batman/red-bricks", label: "Red Bricks Guide" },
  { href: "/lego-batman/carmine-falcone", label: "Carmine Falcone Walkthrough" },
];

export const metadata: Metadata = {
  title: "Firefly Boss Guide: Ship Rescue & Shuttle Puzzle",
  description:
    "Beat Firefly in LEGO Batman Legacy: rescue the ship victim, build through the locked door, activate the shuttle, and use Batgirl’s hack panel.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Firefly Boss Guide: Ship Rescue, Shuttle Puzzle, Batgirl Hack",
    description:
      "Follow the flaming wreckage, fix the ship wheel, open the locked door, activate the space shuttle, and use Batgirl to knock Firefly down.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Firefly attacking the Wayne Industries masquerade ball in LEGO Batman Legacy.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Firefly Boss Guide: Ship Rescue & Shuttle Puzzle",
    description:
      "Fix the ship rescue, activate the shuttle, and use Batgirl’s hack panel to beat Firefly.",
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
          name: "LEGO Batman Guide",
          item: `${siteUrl}/lego-batman`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Firefly Boss Guide",
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
        "LEGO Batman Legacy Firefly Boss Guide: Ship Rescue, Locked Door, Trial by Fire, Space Shuttle Puzzle and Batgirl Hack Panel",
      description:
        "A player-focused LEGO Batman Legacy Firefly boss guide explaining the full Firefly museum chase route: following the flaming wreckage, rescuing the trapped person on the ship by finding and turning the ship’s wheel, using the rescue pieces to build through the locked door, moving through the trial by fire route, handling Firefly’s high-ground phase, completing the space shuttle fuel, ignition, controls and launch sequence, using Batgirl’s hack panel to knock Firefly down, and understanding the Mr. Freeze story transition after the fight.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-20",
      dateModified: "2026-05-20",
      about: [
        {
          "@type": "VideoGame",
          name: "LEGO Batman: Legacy of the Dark Knight",
        },
        { "@type": "Thing", name: "Firefly" },
        { "@type": "Thing", name: "Firefly boss fight" },
        { "@type": "Thing", name: "Firefly museum chase" },
        { "@type": "Thing", name: "Ship rescue" },
        { "@type": "Thing", name: "Ship wheel" },
        { "@type": "Thing", name: "Locked door puzzle" },
        { "@type": "Thing", name: "Trial by fire" },
        { "@type": "Thing", name: "Space shuttle puzzle" },
        { "@type": "Thing", name: "Batgirl hack panel" },
        { "@type": "Thing", name: "Mr. Freeze" },
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
          name: "How do you beat Firefly in LEGO Batman Legacy?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Follow the flaming wreckage, complete the ship rescue, build through the locked door, activate the space shuttle, then use Batgirl to hack the panel and knock Firefly down.",
          },
        },
        {
          "@type": "Question",
          name: "How do you rescue the person on the ship?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Find the ship’s wheel on board, place it back, and turn it. That lowers the trapped person safely.",
          },
        },
        {
          "@type": "Question",
          name: "Why will the locked door not open?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You probably have not finished the ship rescue. Complete the rescue first, then use the pieces that appear to build through the door.",
          },
        },
        {
          "@type": "Question",
          name: "Why can’t you reach Firefly?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Firefly takes the high ground. You need to activate the space shuttle instead of trying to attack him directly.",
          },
        },
        {
          "@type": "Question",
          name: "How do you activate the space shuttle?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Complete the fuel and ignition stations, return to the controls, and start the launch sequence.",
          },
        },
        {
          "@type": "Question",
          name: "What does Batgirl do in the Firefly fight?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Batgirl uses the hack panel after the shuttle setup is complete. That hack knocks Firefly down.",
          },
        },
        {
          "@type": "Question",
          name: "Are there collectibles in the Firefly mission?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Do not add collectible claims unless you verify them from a collectibles or 100% cleanup run. The current story-route material confirms the boss route, not a full collectible list.",
          },
        },
        {
          "@type": "Question",
          name: "What happens after Firefly is defeated?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Mr. Freeze appears immediately after Firefly, and the story moves into the next major threat.",
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
          title="Firefly Boss Guide: Rescue the Ship Victim, Launch the Shuttle, and Hack the Panel"
          description="Follow Firefly’s trail through the museum, fix the ship rescue, build through the locked door, activate the space shuttle, and use Batgirl to finish the fight."
          gameTitle="LEGO Batman: Legacy of the Dark Knight"
          gameHref="/lego-batman"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 20, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FireflyBossContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}