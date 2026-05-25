import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AllSubwayneTunnelLocationsContent from "@/data/lego-batman/all-subwayne-tunnel-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/lego-batman/all-subwayne-tunnel-locations`;

const imageUrls = [
  `${siteUrl}/images/lego-batman/lego-batman-all-subwayne-tunnel-locations.webp`,
];

const toc = [
  { id: "all-subwayne-tunnel-locations", label: "All Locations" },
  { id: "nine-stations-vs-eight-puzzles", label: "9 Stations vs 8 Puzzles" },
  { id: "use-detect-xray-vision", label: "Detect / X-Ray Vision" },
  { id: "best-subwayne-unlock-route", label: "Best Route" },
  { id: "tricorner-subwayne", label: "Tricorner" },
  { id: "old-gotham-south-subwayne", label: "Old Gotham South" },
  { id: "old-gotham-north-subwayne", label: "Old Gotham North" },
  { id: "old-gotham-west-subwayne", label: "Old Gotham West" },
  { id: "the-cauldron-south-subwayne", label: "Cauldron South" },
  { id: "the-cauldron-north-subwayne", label: "Cauldron North" },
  { id: "newtown-subwayne", label: "Newtown" },
  { id: "gotham-village-robinson-park-subwayne", label: "Robinson Park" },
  { id: "east-end-amusement-mile-subwayne", label: "Amusement Mile" },
  { id: "common-subwayne-problems", label: "Common Problems" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
    { href: "/lego-batman", label: "LEGO Batman Guide" },
    { href: "/lego-batman/red-bricks", label: "Red Bricks Guide" },
    { href: "/lego-batman/how-to-farm-studs-fast", label: "How to Farm Studs Fast" },
    { href: "/lego-batman/absolute-batman-suit", label: "Absolute Batman Suit Guide" },
    { href: "/lego-batman/new-beginnings-docks-collectibles", label: "New Beginnings Docks Collectibles" },
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
  title: "All SubWayne Tunnel Locations LEGO Batman Legacy",
  description:
    "Find all 9 SubWayne tunnel locations in LEGO Batman Legacy, with 8 puzzle solutions, character requirements, Detect/X-Ray tips, and unlock route.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "All SubWayne Tunnel Locations & Puzzle Solutions",
    description:
      "Open every SubWayne station with map locations, 8 puzzle walkthroughs, required characters, Detect/X-Ray tips, and the best route across Gotham.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1024,
        height: 1536,
        alt: "All 9 SubWayne tunnel map locations in LEGO Batman Legacy of the Dark Knight.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LEGO Batman Legacy: All SubWayne Tunnel Locations",
    description:
      "Use this SubWayne guide for all 9 station locations, 8 puzzle solutions, requirements, and fast-travel unlock tips.",
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
          name: "All SubWayne Tunnel Locations",
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
        "All SubWayne Tunnel Locations in LEGO Batman: Legacy of the Dark Knight",
      description:
        "A complete LEGO Batman: Legacy of the Dark Knight SubWayne guide covering all 9 station locations, the difference between 9 total stations and 8 open-world puzzles, character and vehicle requirements, Detect and X-Ray Vision tips, step-by-step puzzle solutions for each station, recommended unlock order, and common problems that stop SubWayne tunnels from opening.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-25",
      dateModified: "2026-05-25",
      about: [
        {
          "@type": "VideoGame",
          name: "LEGO Batman: Legacy of the Dark Knight",
        },
        { "@type": "Thing", name: "SubWayne tunnels" },
        { "@type": "Thing", name: "SubWayne station locations" },
        { "@type": "Thing", name: "Gotham fast travel" },
        { "@type": "Thing", name: "Tricorner" },
        { "@type": "Thing", name: "Old Gotham South" },
        { "@type": "Thing", name: "Old Gotham North" },
        { "@type": "Thing", name: "Old Gotham West" },
        { "@type": "Thing", name: "The Cauldron South" },
        { "@type": "Thing", name: "The Cauldron North" },
        { "@type": "Thing", name: "Newtown" },
        { "@type": "Thing", name: "Gotham Village" },
        { "@type": "Thing", name: "Robinson Park" },
        { "@type": "Thing", name: "East End" },
        { "@type": "Thing", name: "Amusement Mile" },
        { "@type": "Thing", name: "Batman Detect Vision" },
        { "@type": "Thing", name: "X-Ray Vision" },
        { "@type": "Thing", name: "Catwoman" },
        { "@type": "Thing", name: "Jim Gordon" },
        { "@type": "Thing", name: "Robin" },
        { "@type": "Thing", name: "Batmobile winch" },
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
          name: "How many SubWayne tunnels are there in LEGO Batman: Legacy of the Dark Knight?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "There are 9 SubWayne stations in total, including the Tricorner story/tutorial station. Some guides count 8 SubWayne puzzles because they exclude Tricorner and only count the free-roam puzzle stations.",
          },
        },
        {
          "@type": "Question",
          name: "What do SubWayne tunnels do?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "SubWayne tunnels expand Gotham’s fast-travel network. Every station you unlock gives you another travel point, which makes district cleanup, collectibles, crime alerts, and side activities faster.",
          },
        },
        {
          "@type": "Question",
          name: "Why do some guides say there are only 8 SubWayne puzzles?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "They are usually counting only the open-world puzzle stations. The full network has 9 stations, but Tricorner is introduced through the story, so some puzzle guides leave it out of the puzzle count.",
          },
        },
        {
          "@type": "Question",
          name: "Which SubWayne tunnel is story-related?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Tricorner SubWayne is the story-related station. It introduces the SubWayne system and uses a tutorial-style shutter puzzle.",
          },
        },
        {
          "@type": "Question",
          name: "Which SubWayne tunnels require Catwoman?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Old Gotham South and Old Gotham West require Catwoman. Old Gotham South uses Catwoman’s whip on a yellow panel, while Old Gotham West uses her whip to reveal Batarang targets above the crowd.",
          },
        },
        {
          "@type": "Question",
          name: "Which SubWayne stations use Jim Gordon?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Cauldron North / ACE Chemical station requires Jim Gordon’s Foam Sprayer. Gotham Village / Robinson Park also uses Jim Gordon for fire-covered buttons and roof fire, but that station also needs the Batmobile winch and Batman.",
          },
        },
        {
          "@type": "Question",
          name: "Which SubWayne tunnel requires Robin?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Newtown SubWayne requires Robin. Use Robin’s staff on the yellow circle on the roof to open the shutters before solving the battery puzzle.",
          },
        },
        {
          "@type": "Question",
          name: "Which SubWayne tunnel requires Vehicle Grapple?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Cauldron South SubWayne requires Vehicle Grapple or Batmobile winch access. Use the vehicle grapple to pull the container, reveal the next interaction, and activate the station.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use Detect or X-Ray Vision for SubWayne puzzles?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Detect and X-Ray Vision help you spot wires, battery machines, hidden power routes, yellow interactables, and rooftop puzzle objects. Use them whenever a SubWayne marker is visible but the solution is unclear.",
          },
        },
        {
          "@type": "Question",
          name: "Can you unlock SubWayne tunnels before finishing the story?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You can unlock some SubWayne stations as soon as the area and required character are available, but others should be saved until you have Catwoman, Robin, Jim Gordon, and a vehicle with grapple or winch access.",
          },
        },
        {
          "@type": "Question",
          name: "Are SubWayne tunnels missable?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. SubWayne tunnels are not missable. If you cannot unlock one yet, come back later with the required character, tool, or vehicle.",
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
          title="All SubWayne Tunnel Locations in LEGO Batman: Legacy of the Dark Knight"
          description="Use the map collage, bring the right character, and follow each puzzle solution to open Gotham’s full SubWayne fast-travel network."
          gameTitle="LEGO Batman: Legacy of the Dark Knight"
          gameHref="/lego-batman"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <AllSubwayneTunnelLocationsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}