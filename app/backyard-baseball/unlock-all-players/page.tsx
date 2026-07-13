import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BackyardBaseballUnlockAllPlayersContent from "@/data/backyard-baseball/unlock-all-players.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/backyard-baseball`;
const pageUrl = `${hubUrl}/unlock-all-players`;

const imageUrls = [
  `${siteUrl}/images/backyard-baseball/backyard-baseball-vladimir-guerrero-player-card.webp`,
  `${siteUrl}/images/backyard-baseball/backyard-baseball-mr-clanky-clubhouse-unlock.webp`,
  `${siteUrl}/images/backyard-baseball/backyard-baseball-sunny-day-jumbotron-unlock.webp`,
  `${siteUrl}/images/backyard-baseball/backyard-baseball-amy-bostwick-tag-out.webp`,
  `${siteUrl}/images/backyard-baseball/backyard-baseball-julie-dunkel-window-break.webp`,
];

const toc = [
  {
    id: "unlock-summary",
    label: "All player unlocks",
  },
  {
    id: "fastest-route",
    label: "Fastest unlock route",
  },
  {
    id: "easy-unlocks",
    label: "Clanky, Vinnie & Sunny",
  },
  {
    id: "challenge-unlocks",
    label: "Challenge unlocks",
  },
  {
    id: "mlb-pros",
    label: "All 7 MLB Pros",
  },
  {
    id: "league-unlocks",
    label: "League unlocks",
  },
  {
    id: "more-hidden-players",
    label: "More hidden players?",
  },
  {
    id: "not-working",
    label: "Unlock not working",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/backyard-baseball",
    label: "Backyard Baseball 2026 Guide Hub",
  },
  {
    href: "/backyard-baseball/best-players-team-lineup",
    label: "Best Players, Tier List & Team",
  },
  {
    href: "/backyard-baseball/beginner-guide",
    label: "Beginner Guide",
  },
  {
    href: "/backyard-baseball/achievements-guide",
    label: "All 51 Achievements",
  },
];

export const metadata: Metadata = {
  title: "Backyard Baseball 2026 Unlock All Players Guide",
  description:
    "Unlock all 16 known players, including Mr. Clanky, Sunny Day, hidden Backyard Kids, and 7 MLB Pros, with fast routes and troubleshooting tips.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Backyard Baseball 2026 Unlock All Players Guide",
    description:
      "Find the fastest routes for Mr. Clanky, Sunny Day, six hidden Backyard Kids, seven MLB Pros, League unlocks, and conditions that fail to register.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Vladimir Guerrero available as an unlockable MLB Pro in Backyard Baseball 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Backyard Baseball 2026 Unlock All Players",
    description:
      "Unlock all 16 known characters with routes for hidden Backyard Kids, MLB Pros, League rewards, cards, steals, tags, and Derby challenges.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question:
      "How many unlockable players are in Backyard Baseball 2026?",
    answer:
      "This guide tracks 16 currently known selectable unlocks: three special characters, six hidden Backyard Kids, and seven MLB Pros.",
  },
  {
    question:
      "Why do some reports say there are 15 unlockable characters?",
    answer:
      "The likely difference is whether Mr. Clanky is included. This guide counts him because the Clubhouse interaction makes him available as a selectable player.",
  },
  {
    question:
      "Are there more hidden players beyond the currently known 16?",
    answer:
      "Possibly. Promotional wording has suggested that not every unlockable was revealed before release, but an additional character should not be treated as playable without an official reveal, visible roster entry, or repeatable unlock route.",
  },
  {
    question: "Who are the six hidden Backyard Kids?",
    answer:
      "The six currently known hidden Backyard Kids are Amy Bostwick, Chico Pappas, Jay Green, Julie Dunkel, Leah Wayne, and Star Moonbeam.",
  },
  {
    question: "Who are the seven unlockable MLB Pros?",
    answer:
      "The seven MLB Pros are Vladimir Guerrero, Jason Giambi, Sammy Sosa, Chipper Jones, Kenny Lofton, Mark McGwire, and Jeff Bagwell.",
  },
  {
    question: "How do I unlock Mr. Clanky?",
    answer:
      "Open the Clubhouse, find Mr. Clanky lying on the floor, hold Shift, and click directly on him.",
  },
  {
    question: "How do I unlock Vinnie the Gooch?",
    answer:
      "Complete the full Tutorial, including the batting and baserunning sections, then return to the Clubhouse.",
  },
  {
    question: "How do I unlock Sunny Day?",
    answer:
      "Play Home Run Derby at Parks Department Field number 2 and hit the center-field Jumbotron until the visible glitch animation appears.",
  },
  {
    question: "Do force outs count toward Amy Bostwick?",
    answer:
      "No. Amy Bostwick requires tag outs, meaning the fielder holding the ball must physically touch the runner.",
  },
  {
    question: "How do I unlock Julie Dunkel?",
    answer:
      "Break 10 windows or other glass objects. Tin Can Alley in Home Run Derby provides repeated access to visible glass targets.",
  },
  {
    question: "How do I unlock Jay Green?",
    answer:
      "Win 20 local multiplayer Home Run Derbies with the main signed-in profile. Guest victories do not count for the main profile.",
  },
  {
    question: "How do I unlock Kenny Lofton?",
    answer:
      "Complete five successful stolen bases as a team in one game. Multiple runners may contribute, but failed attempts do not count.",
  },
  {
    question: "How do I unlock Vladimir Guerrero?",
    answer:
      "Open a card pack containing a Vladimir Guerrero player card. Pulling the card makes him selectable.",
  },
  {
    question: "How do I unlock Jason Giambi?",
    answer:
      "Continue earning Tokens on the same profile until the total has passed 2,001, then return to the Clubhouse and check the selectable roster.",
  },
  {
    question: "How do I unlock Sammy Sosa?",
    answer:
      "Hit 66 home runs in Wiggle Ball. Home runs from other modes should not be assumed to count toward this mode-specific total.",
  },
  {
    question: "How do I unlock Chipper Jones?",
    answer:
      "Complete the regular League season, qualify for the postseason, and enter the first postseason tournament.",
  },
  {
    question: "How do I unlock Mark McGwire and Jeff Bagwell?",
    answer:
      "Their MLB Pro challenges reference milestones from their real careers, but the exact repeatable thresholds are not currently exposed by the available evidence. Unverified 70-home-run, extra-base-hit, and four-pack theories should not be treated as guaranteed routes.",
  },
  {
    question: "Do unlocked players automatically improve the best team?",
    answer:
      "No. Compare the unlocked player's ratings and role with the pitching, fielding, speed, and batting needs of the existing lineup before replacing a standard player.",
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
          name: "Backyard Baseball 2026 Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Unlock All Players",
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
        "Backyard Baseball 2026 Unlock All Players and MLB Pros Guide",
      description:
        "This Backyard Baseball 2026 player unlock guide covers all 16 currently known selectable unlocks: Mr. Clanky, Vinnie the Gooch, Sunny Day, six hidden Backyard Kids, and seven MLB Pros. It explains the fastest combined progression route, tag outs for Amy Bostwick, broken glass for Julie Dunkel, local Derby wins for Jay Green, the Sunny Day Jumbotron, card and Token progression, five successful steals for Kenny Lofton, Wiggle Ball home runs for Sammy Sosa, postseason unlocks, the two-League route for Chico Pappas, Leah Wayne, and Star Moonbeam, and troubleshooting when an unlock does not register.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-13",
      dateModified: "2026-07-13",
      about: [
        {
          "@type": "VideoGame",
          name: "Backyard Baseball",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball 2026 player unlocks",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball hidden players",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball MLB Pros",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball unlock all characters",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball unlock not working",
        },
        {
          "@type": "Thing",
          name: "Backyard Baseball League unlocks",
        },
      ],
      mentions: [
        {
          "@type": "Person",
          name: "Mr. Clanky",
        },
        {
          "@type": "Person",
          name: "Sunny Day",
        },
        {
          "@type": "Person",
          name: "Vladimir Guerrero",
        },
        {
          "@type": "Person",
          name: "Jason Giambi",
        },
        {
          "@type": "Person",
          name: "Sammy Sosa",
        },
        {
          "@type": "Person",
          name: "Chipper Jones",
        },
        {
          "@type": "Person",
          name: "Kenny Lofton",
        },
        {
          "@type": "Person",
          name: "Mark McGwire",
        },
        {
          "@type": "Person",
          name: "Jeff Bagwell",
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
          title="How to Unlock All Players in Backyard Baseball 2026"
          description="Follow the fastest combined route for Mr. Clanky, Sunny Day, six hidden Backyard Kids, seven MLB Pros, cards, Tokens, steals, Derby challenges, and late League rewards."
          gameTitle="Backyard Baseball"
          gameHref="/backyard-baseball"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 13, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BackyardBaseballUnlockAllPlayersContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}