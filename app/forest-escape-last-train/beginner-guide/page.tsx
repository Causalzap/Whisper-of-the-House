import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ForestEscapeLastTrainBeginnerGuideContent from "@/data/forest-escape-last-train/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/forest-escape-last-train`;
const pageUrl = `${hubUrl}/beginner-guide`;

const imageUrls = [
  `${siteUrl}/images/forest-escape-last-train/forest-escape-last-train-coal-furnace-100c.webp`,
  `${siteUrl}/images/forest-escape-last-train/forest-escape-last-train-starting-train-parts.webp`,
  `${siteUrl}/images/forest-escape-last-train/forest-escape-last-train-pickaxe-rocks-tutorial.webp`,
  `${siteUrl}/images/forest-escape-last-train/forest-escape-last-train-brake-red-lever.webp`,
  `${siteUrl}/images/forest-escape-last-train/forest-escape-last-train-hammer-barricade.webp`,
  `${siteUrl}/images/forest-escape-last-train/forest-escape-last-train-shop-respawn-token.webp`,
  `${siteUrl}/images/forest-escape-last-train/forest-escape-last-train-revive-teammate.webp`,
];

const toc = [
  {
    id: "first-run-order",
    label: "First-run order",
  },
  {
    id: "starting-points",
    label: "Three starting points",
  },
  {
    id: "difficulty-choice",
    label: "Difficulty choice",
  },
  {
    id: "controls",
    label: "Controls",
  },
  {
    id: "train-parts",
    label: "Train parts",
  },
  {
    id: "rocks-and-coal",
    label: "Rocks & coal",
  },
  {
    id: "coal-temperature",
    label: "Coal & temperature",
  },
  {
    id: "train-controls",
    label: "Train troubleshooting",
  },
  {
    id: "one-revive-distance",
    label: "Revive-distance rule",
  },
  {
    id: "barricades",
    label: "Barricades",
  },
  {
    id: "shop-priority",
    label: "Shop priorities",
  },
  {
    id: "early-threats",
    label: "Early threats",
  },
  {
    id: "combat-and-revives",
    label: "Combat & revives",
  },
  {
    id: "checkpoints-and-death",
    label: "Checkpoints & death",
  },
  {
    id: "solo-and-coop",
    label: "Solo & co-op",
  },
  {
    id: "first-run-checklist",
    label: "Departure checklist",
  },
  {
    id: "common-mistakes",
    label: "Common mistakes",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/forest-escape-last-train",
    label: "Forest Escape Last Train Guide Hub",
  },
  {
    href: "/forest-escape-last-train/locations-puzzle-guide",
    label: "Locations & Puzzle Guide",
  },
  {
    href: "/forest-escape-last-train/warden-boss-guide",
    label: "Warden Boss Guide",
  },
  {
    href: "/forest-escape-last-train/achievements-guide",
    label: "Achievements Guide",
  },
];

export const metadata: Metadata = {
  title: "Forest Escape Last Train Beginner Guide & First Run Tips",
  description:
    "Fix and fuel the train, find all three parts, choose a difficulty, manage coal, shop safely, revive teammates, and survive your first run.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Forest Escape Last Train Beginner Guide & First Run Tips",
    description:
      "Follow a practical first-run route with train-part locations, confirmed controls, coal management, difficulty advice, shop priorities, and revive tips.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Forest Escape Last Train locomotive furnace fueled before the first departure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forest Escape Last Train Beginner Guide & First Run Tips",
    description:
      "Find the train parts, manage coal, choose a difficulty, use the controls, buy the right items, and survive your first run.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question: "Which difficulty should a beginner choose?",
    answer:
      "Choose Easy for a first solo learning run, Normal for a first co-op run, and Hard only after the team understands fuel, revives, train positioning, and role assignments.",
  },
  {
    question: "How many starting points are there?",
    answer:
      "Forest Escape: Last Train has three starting points. The opening layout and early railway branches can change, so search the entire station instead of relying on one fixed item route.",
  },
  {
    question: "Can Forest Escape Last Train be played solo?",
    answer:
      "Yes. Forest Escape: Last Train supports solo play and online co-op for up to four players.",
  },
  {
    question: "Can Forest Escape Last Train be played offline?",
    answer:
      "The Early Access launch build requires an internet connection even for solo play. The developer has said offline support is planned.",
  },
  {
    question: "Does Forest Escape Last Train support inverted mouse?",
    answer:
      "An earlier build did not include inverted mouse controls, but the developer later said the option was added in a following build. Check the current Controls menu and update the game when the setting is missing.",
  },
  {
    question: "How do I throw rocks?",
    answer:
      "Equip a rock, aim, and click the left mouse button. The current interaction releases the rock immediately instead of charging the throw.",
  },
  {
    question: "Where are the Front Light, Horn, and Control Lever?",
    answer:
      "Search the entire starting station, including rooms, containers, balloons, elevated loot, side structures, and both sides of the locomotive. Exact pickup positions can vary with the starting point.",
  },
  {
    question: "Does the train need exactly 100 degrees Celsius to move?",
    answer:
      "No exact minimum is confirmed in this guide. Approximately 100 degrees Celsius is used as a comfortable opening fuel target before the first departure.",
  },
  {
    question: "Why will my train not move?",
    answer:
      "Check that the Control Lever is installed, coal remains in the furnace, the brake is released, a direction is selected, and no stopper hand or derailment bug is preventing movement.",
  },
  {
    question: "What should I do when the train derails?",
    answer:
      "Operate the forward and backward controls to help the locomotive return to normal movement. When that fails, let the host control the train, check the connection, or reload the last checkpoint.",
  },
  {
    question: "How do checkpoints work after a team wipe?",
    answer:
      "Load the last checkpoint and verify inventory, purchases, newspapers, keys, and recent rewards because the restored state may be earlier than the moment the team died.",
  },
  {
    question: "Is the final boss difficult?",
    answer:
      "The first attempts can feel overwhelming, especially on Hard. A coordinated group should treat the early attempts as opportunities to learn the mechanics instead of spending every resource immediately.",
  },
];

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
          name: "Forest Escape Last Train Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Beginner Guide",
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
        "Forest Escape: Last Train Beginner Guide and First-Run Tips",
      description:
        "This Forest Escape: Last Train beginner guide explains the safest first-run order, all three starting points, Easy versus Normal versus Hard difficulty, confirmed controls, Front Light, Train Horn, and Control Lever routing, coal and furnace management, braking and reversing, the one-revive-distance rule, barricade decisions, shop prices, early enemies, checkpoint recovery, solo play, online co-op roles, derailment troubleshooting, and the final departure checklist.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-11",
      dateModified: "2026-07-11",
      about: [
        {
          "@type": "VideoGame",
          name: "Forest Escape: Last Train",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train beginner guide",
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train first run",
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train controls",
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train train parts",
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train coal and fuel",
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train difficulty",
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train solo and co-op",
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train checkpoints",
        },
        {
          "@type": "Thing",
          name: "Forest Escape Last Train train derailed",
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
      mainEntity: faqEntities.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
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
          title="Forest Escape: Last Train Beginner Guide"
          description="Follow a safe first-run route with train-part locations, difficulty advice, confirmed controls, coal management, shop priorities, revives, checkpoints, and co-op roles."
          gameTitle="Forest Escape: Last Train"
          gameHref="/forest-escape-last-train"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 11, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ForestEscapeLastTrainBeginnerGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}