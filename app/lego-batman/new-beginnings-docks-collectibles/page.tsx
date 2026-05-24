import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import NewBeginningsDocksCollectiblesContent from "@/data/lego-batman/new-beginnings-docks-collectibles.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/lego-batman/new-beginnings-docks-collectibles`;

const imageUrls = [
  `${siteUrl}/images/lego-batman/lego-batman-new-beginnings-docks-red-brick.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-new-beginnings-docks-surfboard-1.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-new-beginnings-docks-surfboard-2.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-new-beginnings-docks-surfboard-3.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-new-beginnings-docks-surfboard-4.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-new-beginnings-docks-surfboard-5.webp`,
];

const toc = [
  { id: "new-beginnings-docks-collectibles", label: "Collectibles Checklist" },
  { id: "story-mode-or-free-play", label: "Story Mode or Free Play?" },
  { id: "surfboard-1", label: "Surfboard #1" },
  { id: "surfboard-2", label: "Surfboard #2" },
  { id: "surfboard-3", label: "Surfboard #3" },
  { id: "surfboard-4", label: "Surfboard #4" },
  { id: "surfboard-5", label: "Surfboard #5" },
  { id: "nautical-red-brick", label: "Nautical Red Brick" },
  {
    id: "how-to-finish-the-battering-ram-puzzle",
    label: "Battering Ram Puzzle",
  },
  { id: "all-rewards", label: "Rewards" },
  { id: "if-you-are-stuck", label: "Stuck?" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
    { href: "/lego-batman/red-bricks", label: "Red Bricks Guide" },
    { href: "/lego-batman/carmine-falcone", label: "Carmine Falcone Walkthrough" },
    { href: "/lego-batman/batgirl-unlock", label: "Batgirl Unlock Guide" },
    { href: "/lego-batman/radio-towers", label: "Radio Towers Guide" },
    { href: "/lego-batman/escaped-zoo-animals", label: "Escaped Zoo Animals Guide" },
    { href: "/lego-batman/firefly-boss", label: "Firefly Boss Guide" },
    { href: "/lego-batman/mr-freeze-boss", label: "Mr. Freeze Boss Guide" },
    { href: "/lego-batman/poison-ivy-boss", label: "Poison Ivy Boss Guide" },
    { href: "/lego-batman/bane-boss", label: "Bane Boss Guide" },
];

export const metadata: Metadata = {
  title:
    "New Beginnings Docks Collectibles: All Surfboards & Nautical Red Brick",
  description:
    "Find every New Beginnings Docks collectible in LEGO Batman Legacy, including all 5 Surfboards, the Nautical Red Brick roof hatch entrance, Story Mode requirements, and the WayneTech Cache answer.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "LEGO Batman New Beginnings Docks Collectibles Guide",
    description:
      "Complete the Docks section of New Beginnings with all 5 Surfboards, the Nautical Red Brick, the roof hatch route, battering ram puzzle steps, and Story Mode cleanup notes.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 521,
        height: 459,
        alt: "Nautical Red Brick location in New Beginnings Docks in LEGO Batman Legacy of the Dark Knight.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "LEGO Batman Legacy: New Beginnings Docks Collectibles",
    description:
      "Use this Docks collectibles guide for all Surfboards, the Nautical Red Brick roof hatch, Story Mode requirements, and the final battering ram puzzle.",
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
          name: "New Beginnings Docks Collectibles",
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
        "LEGO Batman New Beginnings Docks Collectibles Guide: All Surfboards and Nautical Red Brick",
      description:
        "A complete LEGO Batman Legacy New Beginnings Docks collectibles guide covering all 5 Surfboards, the Nautical Red Brick roof hatch entrance, Story Mode requirements, the WayneTech Cache location note, the final battering ram puzzle, rewards, and common stuck points.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-24",
      dateModified: "2026-05-24",
      about: [
        {
          "@type": "VideoGame",
          name: "LEGO Batman: Legacy of the Dark Knight",
        },
        { "@type": "Thing", name: "New Beginnings" },
        { "@type": "Thing", name: "Docks" },
        { "@type": "Thing", name: "Surfboards" },
        { "@type": "Thing", name: "Nautical Red Brick" },
        { "@type": "Thing", name: "Nautical Modifier" },
        { "@type": "Thing", name: "WayneTech Cache" },
        { "@type": "Thing", name: "Batman" },
        { "@type": "Thing", name: "Jim Gordon" },
        { "@type": "Thing", name: "Detective Flass" },
        { "@type": "Thing", name: "Battering Ram Puzzle" },
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
          name: "Where is the WayneTech Cache in New Beginnings?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The WayneTech Cache in New Beginnings is not in the Docks section. It appears earlier in the mission during the Wayne Industries / Wayne Tower segment, around the gadget bench tutorial sequence.",
          },
        },
        {
          "@type": "Question",
          name: "Do you need Free Play for New Beginnings Docks collectibles?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Every Docks collectible can be collected in Story Mode using Batman and Jim Gordon.",
          },
        },
        {
          "@type": "Question",
          name: "How many Surfboards are in New Beginnings Docks?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "There are 5 Surfboards in the Docks section of New Beginnings.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the Nautical Red Brick in New Beginnings Docks?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Nautical Red Brick is inside the small cabin near the battering ram area. Grapple onto the cabin roof and drop through the open roof hatch to reach it.",
          },
        },
        {
          "@type": "Question",
          name: "What does the Nautical Modifier do?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Nautical Modifier is a cosmetic Red Brick modifier. It changes the look of suits or colors rather than acting like a classic LEGO stud multiplier.",
          },
        },
        {
          "@type": "Question",
          name: "Which Docks collectible is easiest to miss?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Surfboard #4 is the easiest to miss because it is behind the crawlspace near the ice cream truck. The Nautical Red Brick is also easy to miss because the correct entrance is on the roof.",
          },
        },
        {
          "@type": "Question",
          name: "Who is Detective Flass?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Detective Flass is Gordon's corrupt partner in the Docks section. Some searches and auto-captions may spell his name as Flash, Flask, or Fast, but the correct name is Flass.",
          },
        },
        {
          "@type": "Question",
          name: "Can you replay New Beginnings if you miss a collectible?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. None of the Docks collectibles are permanently missable. Replay the mission and check the Surfboard counter before finishing the battering ram puzzle.",
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
          title="LEGO Batman New Beginnings Docks Collectibles Guide"
          description="Find all 5 Surfboards, the Nautical Red Brick, the roof hatch entrance, Story Mode requirements, WayneTech Cache clarification, and the final battering ram puzzle route."
          gameTitle="LEGO Batman: Legacy of the Dark Knight"
          gameHref="/lego-batman"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <NewBeginningsDocksCollectiblesContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}