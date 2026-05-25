import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import EscapedZooAnimalsContent from "@/data/lego-batman/escaped-zoo-animals.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/lego-batman/escaped-zoo-animals`;

const imageUrls = [
  `${siteUrl}/images/lego-batman/lego-batman-all-21-escaped-zoo-animal-locations-collage.webp`,
];

const toc = [
  { id: "before-you-start", label: "Before You Start" },
  { id: "all-escaped-zoo-animal-locations", label: "All Locations" },
  { id: "how-to-tag-escaped-zoo-animals", label: "How To Tag" },
  { id: "best-route-for-all-escaped-zoo-animals", label: "Best Route" },
  { id: "escaped-zoo-animals-by-area", label: "By Area" },
  { id: "tricorner-island", label: "Tricorner Island" },
  { id: "old-gotham-south", label: "Old Gotham South" },
  { id: "old-gotham-north", label: "Old Gotham North" },
  { id: "old-gotham-west", label: "Old Gotham West" },
  { id: "the-cauldron-north", label: "The Cauldron" },
  { id: "newtown", label: "Newtown" },
  { id: "gotham-village-robinson-park", label: "Robinson Park" },
  { id: "east-end-amusement-mile", label: "Amusement Mile" },
  { id: "hardest-escaped-zoo-animals-to-find", label: "Hardest Animals" },
  { id: "if-you-are-stuck", label: "Stuck?" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
    { href: "/lego-batman", label: "LEGO Batman Guide" },
    { href: "/lego-batman/red-bricks", label: "Red Bricks Guide" },
    { href: "/lego-batman/how-to-farm-studs-fast", label: "How to Farm Studs Fast" },
    { href: "/lego-batman/all-subwayne-tunnel-locations", label: "SubWayne Tunnel Locations Guide" },
    { href: "/lego-batman/absolute-batman-suit", label: "Absolute Batman Suit Guide" },
    { href: "/lego-batman/new-beginnings-docks-collectibles", label: "New Beginnings Docks Collectibles" },
    { href: "/lego-batman/carmine-falcone", label: "Carmine Falcone Walkthrough" },
    { href: "/lego-batman/batgirl-unlock", label: "Batgirl Unlock Guide" },
    { href: "/lego-batman/radio-towers", label: "Radio Towers Guide" },
    { href: "/lego-batman/firefly-boss", label: "Firefly Boss Guide" },
    { href: "/lego-batman/mr-freeze-boss", label: "Mr. Freeze Boss Guide" },
    { href: "/lego-batman/poison-ivy-boss", label: "Poison Ivy Boss Guide" },
    { href: "/lego-batman/bane-boss", label: "Bane Boss Guide" },
];

export const metadata: Metadata = {
  title: "All 21 Escaped Zoo Animal Locations & Rewards",
  description:
    "Find all 21 Escaped Zoo Animals in LEGO Batman Legacy with coordinates, area route, tagging tips, Detective Mode advice, and the Absolute Batman reward requirement.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "All 21 Escaped Zoo Animal Locations in LEGO Batman Legacy",
    description:
      "Complete every Escaped Zoo Animal task with coordinates, area notes, tagging tips, spawn advice, and Absolute Batman reward details.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 2056,
        height: 3606,
        alt: "Map overview of all 21 Escaped Zoo Animal markers in LEGO Batman Legacy of the Dark Knight.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LEGO Batman Legacy: All 21 Escaped Zoo Animals",
    description:
      "Use this complete Escaped Zoo Animals guide for coordinates, route order, tagging mechanics, and the Absolute Batman reward.",
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
          name: "Escaped Zoo Animals",
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
        "All 21 Escaped Zoo Animal Locations in LEGO Batman: Legacy of the Dark Knight",
      description:
        "A complete LEGO Batman Legacy Escaped Zoo Animals guide covering all 21 animal markers, map coordinates, route order, tagging mechanics, Detective Mode tips, spawn issues, hardest animals to find, and the Absolute Batman costume reward requirement.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-24",
      dateModified: "2026-05-24",
      about: [
        {
          "@type": "VideoGame",
          name: "LEGO Batman: Legacy of the Dark Knight",
        },
        { "@type": "Thing", name: "Escaped Zoo Animals" },
        { "@type": "Thing", name: "Absolute Batman" },
        { "@type": "Thing", name: "Detective Mode" },
        { "@type": "Thing", name: "Animal Tracker" },
        { "@type": "Thing", name: "Tricorner Island" },
        { "@type": "Thing", name: "Old Gotham South" },
        { "@type": "Thing", name: "Old Gotham North" },
        { "@type": "Thing", name: "Old Gotham West" },
        { "@type": "Thing", name: "The Cauldron North" },
        { "@type": "Thing", name: "Newtown" },
        { "@type": "Thing", name: "Robinson Park" },
        { "@type": "Thing", name: "Amusement Mile" },
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
          name: "How many Escaped Zoo Animals are there in LEGO Batman Legacy?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "There are 21 Escaped Zoo Animal tasks in LEGO Batman: Legacy of the Dark Knight.",
          },
        },
        {
          "@type": "Question",
          name: "What reward do you get for Escaped Zoo Animals?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Tracking 9 Escaped Zoo Animals unlocks the Absolute Batman costume. Completing all 21 helps with full Gotham cleanup and 100% completion.",
          },
        },
        {
          "@type": "Question",
          name: "Do all 21 Escaped Zoo Animals count toward 100% completion?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Complete all 21 Escaped Zoo Animal tasks if you are aiming for full Gotham cleanup and 100% completion.",
          },
        },
        {
          "@type": "Question",
          name: "Why are my Escaped Zoo Animals not spawning?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You may be too early in the story or missing the tracker-related cleanup unlock. Continue the main story, open more districts, then return to the marker later.",
          },
        },
        {
          "@type": "Question",
          name: "Do you need Detective Mode for Escaped Zoo Animals?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Detective Mode is not required for every animal, but it is the best tool for difficult tasks involving koalas, sloths, macaws, parrots, frogs, meerkats, rooftops, ledges, and vertical structures.",
          },
        },
        {
          "@type": "Question",
          name: "Which Escaped Zoo Animals can attack you?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Large animals such as bears and big cats are the ones to approach carefully. If an animal reacts, avoid a direct approach and wait for a safer opening before placing the tracker.",
          },
        },
        {
          "@type": "Question",
          name: "Why can’t I place the tracker on an Escaped Zoo Animal?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You are usually not close enough, approaching from a bad angle, or trying while the animal is moving or reacting. Get closer, use stealth or height if needed, and attach the tracker when the animal gives you a safe opening.",
          },
        },
        {
          "@type": "Question",
          name: "Which Escaped Zoo Animal is easiest to miss?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The easiest ones to miss are Bye-Bye, Hiss American Python, Under Koalafied, Making A Macawry, Polly Want a Tracker, and Some Slow Bros because they involve high platforms, rooftops, ledges, birds, or vertical structures.",
          },
        },
        {
          "@type": "Question",
          name: "Is the story Polar Bear the same as Fur-ious?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. The Old Gotham South Polar Bear is tied to a story route, while Fur-ious is the separate free-roam Polar Bear task near Robinson Park.",
          },
        },
        {
          "@type": "Question",
          name: "Are Escaped Zoo Animals missable?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. You can return to Gotham cleanup later and finish Escaped Zoo Animal tasks after more story progress.",
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
          title="All 21 Escaped Zoo Animal Locations in LEGO Batman: Legacy of the Dark Knight"
          description="Find every Escaped Zoo Animal marker, learn how to tag difficult animals, use Detective Mode effectively, and unlock the Absolute Batman reward."
          gameTitle="LEGO Batman: Legacy of the Dark Knight"
          gameHref="/lego-batman"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EscapedZooAnimalsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}