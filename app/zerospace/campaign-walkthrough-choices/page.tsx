import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ZeroSpaceCampaignWalkthroughContent from "@/data/zerospace/campaign-walkthrough-choices.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/zerospace`;
const pageUrl = `${hubUrl}/campaign-walkthrough-choices`;

const imageUrls = [
  `${siteUrl}/images/zerospace/zerospace-operation-moby-opening.webp`,
  `${siteUrl}/images/zerospace/zerospace-operation-moby-forward-base.webp`,
  `${siteUrl}/images/zerospace/zerospace-operation-moby-airfield.webp`,
  `${siteUrl}/images/zerospace/zerospace-aster-prefect-promotion.webp`,
  `${siteUrl}/images/zerospace/zerospace-mera-arcadia-bridge.webp`,
  `${siteUrl}/images/zerospace/zerospace-what-matters-most-choice.webp`,
  `${siteUrl}/images/zerospace/zerospace-arcadia-distress-signal.webp`,
  `${siteUrl}/images/zerospace/zerospace-ship-boarding-mission.webp`,
  `${siteUrl}/images/zerospace/zerospace-detonators-console-platform.webp`,
  `${siteUrl}/images/zerospace/zerospace-kris-mission-ending.webp`,
  `${siteUrl}/images/zerospace/zerospace-eterus-shakru-pacifist-choice.webp`,
  `${siteUrl}/images/zerospace/zerospace-deru-zerospace-reactor-overload.webp`,
  `${siteUrl}/images/zerospace/zerospace-machine-works-signal-jammer.webp`,
  `${siteUrl}/images/zerospace/zerospace-trinity-reinforcement-landing-sites.webp`,
  `${siteUrl}/images/zerospace/zerospace-act-1-insubordination-ending.webp`,
];

const toc = [
  {
    id: "act-one-mission-list",
    label: "Act 1 mission list",
  },
  {
    id: "operation-moby",
    label: "Operation Moby",
  },
  {
    id: "aegis-oath",
    label: "Aegis Oath",
  },
  {
    id: "trisaris-choice",
    label: "Trisaris choice",
  },
  {
    id: "ship-boarding",
    label: "Ship boarding & Kris",
  },
  {
    id: "eterus",
    label: "Eterus Koru Hearts",
  },
  {
    id: "city-uprising",
    label: "City uprising",
  },
  {
    id: "deru-lab",
    label: "Deru Laboratory",
  },
  {
    id: "four-bunkers",
    label: "Four bunkers",
  },
  {
    id: "machine-works",
    label: "Machine Works",
  },
  {
    id: "trinity-counteroffensive",
    label: "Trinity assault",
  },
  {
    id: "confirmed-consequences",
    label: "Choice consequences",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/zerospace/",
    label: "ZeroSpace Guide Hub",
  },
  {
    href: "/zerospace/beginner-guide/",
    label: "ZeroSpace Beginner Guide",
  },
  {
    href: "/zerospace/mission-3-arcadia-walkthrough/",
    label: "Mission 3 Arcadia Walkthrough",
  },
  {
    href: "/zerospace/galactic-war-beginner-guide/",
    label: "Galactic War Beginner Guide",
  },
];

export const metadata: Metadata = {
  title:
    "ZeroSpace Act 1 Walkthrough: Moby, Trisaris & Koru Hearts",
  description:
    "Complete ZeroSpace Act 1 with Operation Moby objectives, the Trisaris choice, five Koru Hearts, Kris's fate, and the Trinity assault route.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title:
      "ZeroSpace Act 1 Campaign Walkthrough: Missions, Choices and Objectives",
    description:
      "Follow every Act 1 mission from Operation Moby and Trisaris to five Koru Hearts, Deru Laboratory, Machine Works, Trinity, and confirmed choice consequences.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        width: 1218,
        height: 886,
        alt: "ZeroSpace Operation Moby walkthrough objectives requiring four Supply Platforms, two Barracks, and eight Commandos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ZeroSpace Act 1 Walkthrough: Moby, Trisaris & Koru Hearts",
    description:
      "Clear every Act 1 mission, solve Operation Moby objectives, make the Trisaris choice, collect five Koru Hearts, and complete Trinity.",
    images: [imageUrls[1]],
  },
};

const faqEntities = [
  {
    question: "How do I complete Operation Moby in ZeroSpace?",
    answer:
      "Rebuild the Forward Base, build four Supply Platforms and two Barracks, and train eight Commandos. After the production counters are complete, turn south to retake the airfield before attacking the entrenched Thresher position. Keep the Operating Tower protected throughout the offensive.",
  },
  {
    question:
      "Should I answer the Trisaris distress signal in ZeroSpace?",
    answer:
      "Answering the distress signal starts the Arcadia colony-defense mission. Later dialogue confirms that Aster violated the no-diversion order, Sherman disapproves, and the Aegis Oath loses standing. The full long-term result of refusing the signal has not been verified in this route.",
  },
  {
    question: "How many Koru Hearts are needed on Eterus?",
    answer:
      "Five Koru Hearts are required. Completing the fourth extraction advances the objective to one final Heart rather than finishing the mission. Secure each site before starting the next extraction so the Grell attack cycles do not overlap.",
  },
  {
    question:
      "Can Kris survive the ZeroSpace ship boarding mission?",
    answer:
      "No verified rescue route has been found in this completed path. Kris's sacrifice occurs during the mission ending after the cargo-route retreat, and the mission does not display an optional rescue objective or alternate combat prompt.",
  },
  {
    question:
      "What happens if Aster disobeys Sherman at the end of Act 1?",
    answer:
      "Sherman calls the decision to pursue Mondar insubordination and attempts to remove Aster from command. The Aegis Oath crew follows Aster and continues the pursuit. Consequences beyond the current Act 1 ending are not yet confirmed here.",
  },
  {
    question:
      "Does the peaceful Shakru choice remove combat from Eterus?",
    answer:
      "No. The peaceful choice avoids treating the cooperating Shakru as the direct enemy, but Grell still attack during the ritual Koru Heart extractions. Each Harvester site must still be secured and defended.",
  },
  {
    question:
      "Why can I not enter the Deru Laboratory in ZeroSpace?",
    answer:
      "Phobos needs three access fragments from the surrounding alien structures. After collecting the third fragment, return to the laboratory immediately because a major attack begins before access is restored.",
  },
  {
    question:
      "Should I chase Mondar during the four-bunker mission?",
    answer:
      "No. Protect all four bunkers in the order they are threatened. The apparent Mondar transmission is later revealed to be a recording, so reaching it faster does not replace the bunker-defense objectives.",
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
          name: "ZeroSpace Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Act 1 Campaign Walkthrough",
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
        "ZeroSpace Act 1 Campaign Walkthrough: Operation Moby, Trisaris, Koru Hearts and Trinity",
      description:
        "This ZeroSpace Act 1 Campaign walkthrough provides mission-by-mission routes, objective orders, failure prevention, and confirmed choice consequences. It explains how to complete Operation Moby by building four Supply Platforms, two Barracks, and eight Commandos; when to retake the southern airfield; how the Trisaris distress-signal diversion affects later dialogue; the Arcadia evacuation choice between Colonists and Militia; the Aegis Oath ship boarding route and Kris ending; how to collect five Koru Hearts on Eterus; how to recover three Deru access fragments and overload the ZeroSpace reactor; how to protect four bunkers; why Machine Works signal jammers should be destroyed before Fabricator Blocks; and how to open reinforcement sites before the final Trinity assault.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-21",
      dateModified: "2026-07-21",
      about: [
        {
          "@type": "VideoGame",
          name: "ZeroSpace",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Act 1 walkthrough",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Campaign walkthrough",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace mission guide",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Operation Moby walkthrough",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace four Supply Platforms",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Trisaris choice",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Arcadia mission",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Colonists or Militia",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Kris survival",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Koru Hearts",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Deru Laboratory",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Fabricator Blocks",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Trinity counteroffensive",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Sherman choice",
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
          title="ZeroSpace Act 1 Campaign Walkthrough: Missions, Choices and Objectives"
          description="Follow the mission-by-mission route I used through Operation Moby, Trisaris, Eterus, Deru Laboratory, Machine Works, and Trinity—with exact objective counts, failure checks, and confirmed choice consequences."
          gameTitle="ZeroSpace"
          gameHref="/zerospace/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ZeroSpaceCampaignWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}