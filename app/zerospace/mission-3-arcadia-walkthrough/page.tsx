import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ZeroSpaceMission3ArcadiaContent from "@/data/zerospace/mission-3-arcadia-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/zerospace`;
const pageUrl = `${hubUrl}/mission-3-arcadia-walkthrough`;

const imageUrls = [
  `${siteUrl}/images/zerospace/zerospace-arcadia-distress-signal.webp`,
  `${siteUrl}/images/zerospace/zerospace-arcadia-operation-tower.webp`,
  `${siteUrl}/images/zerospace/zerospace-arcadia-rocket-turret-upgrade.webp`,
  `${siteUrl}/images/zerospace/zerospace-arcadia-harvester-flux.webp`,
  `${siteUrl}/images/zerospace/zerospace-arcadia-heavy-gunners.webp`,
  `${siteUrl}/images/zerospace/zerospace-arcadia-old-bessie-location.webp`,
  `${siteUrl}/images/zerospace/zerospace-arcadia-southern-grel-base.webp`,
  `${siteUrl}/images/zerospace/zerospace-arcadia-final-swarm.webp`,
  `${siteUrl}/images/zerospace/zerospace-colonists-or-militia-choice.webp`,
  `${siteUrl}/images/zerospace/zerospace-arcadia-choice-consequence.webp`,
];

const toc = [
  {
    id: "mission-overview",
    label: "Mission 3 at a glance",
  },
  {
    id: "before-deployment",
    label: "How the mission begins",
  },
  {
    id: "why-arcadia-fails",
    label: "Why the defense fails",
  },
  {
    id: "opening-build",
    label: "What to build first",
  },
  {
    id: "flux-and-bastions",
    label: "Flux and Bastions",
  },
  {
    id: "reinforcements",
    label: "Reinforcements",
  },
  {
    id: "old-bessie",
    label: "Old Bessie",
  },
  {
    id: "southern-source",
    label: "Southern Grell source",
  },
  {
    id: "final-swarm",
    label: "Final swarm",
  },
  {
    id: "evacuation-choice",
    label: "Evacuation choice",
  },
  {
    id: "choice-consequence",
    label: "Choice consequences",
  },
  {
    id: "when-to-restart",
    label: "When to restart",
  },
  {
    id: "related-guides",
    label: "Related guides",
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
    href: "/zerospace/campaign-walkthrough-choices/",
    label: "ZeroSpace Act 1 Campaign Walkthrough",
  },
  {
    href: "/zerospace/galactic-war-beginner-guide/",
    label: "ZeroSpace Galactic War Guide",
  },
];

export const metadata: Metadata = {
  title: "ZeroSpace Mission 3 Walkthrough: Old Bessie & Final Swarm",
  description:
    "Clear ZeroSpace Mission 3 Arcadia with the safest build order, Old Bessie route, southern Grell source, final swarm defense, and evacuation choice.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title:
      "ZeroSpace Mission 3 Arcadia Walkthrough: Old Bessie, Final Swarm and Evacuation Choice",
    description:
      "Stabilize the Arcadia base, start Flux income, kill Old Bessie, destroy the southern Grell source, survive the final swarm, and choose who boards the shuttle.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[7],
        width: 1090,
        height: 874,
        alt: "ZeroSpace Mission 3 Arcadia final swarm warning before the last colony-defense battle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeroSpace Mission 3: Old Bessie & Final Swarm Guide",
    description:
      "Follow the safe Arcadia build order, remove both permanent Grell sources, survive the final swarm, and understand the evacuation choice.",
    images: [imageUrls[7]],
  },
};

const faqEntities = [
  {
    question: "What should I build first in ZeroSpace Mission 3?",
    answer:
      "Start by upgrading the Supply Platforms covering the main entrance, but preserve enough resources for a Harvester. Spending the entire opening economy on turret upgrades delays Flux income and the first Bastions, leaving the army without a mobile answer to Old Bessie.",
  },
  {
    question: "How do I beat Old Bessie in ZeroSpace?",
    answer:
      "Leave the turret line, reinforcements, and enough infantry at the main entrance. Send Aster, Mera, and the mobile damage group to the nest, focus Old Bessie before clearing every small spawn, and return to the colony as soon as she dies.",
  },
  {
    question: "How do I survive the Arcadia final swarm?",
    answer:
      "Kill Old Bessie and destroy the southern Grell source before the final warning. Recall every mobile unit, keep ranged units behind the frontline, use reinforcements before the entrance collapses, and avoid pursuing small Grell beyond rocket-turret coverage.",
  },
  {
    question: "Why can I not train Bastions in ZeroSpace Mission 3?",
    answer:
      "Bastions require Flux. Create a Harvester from the Operating Tower and confirm that it has an available discovered Flux node. A Harvester included in an army selection can also be pulled away from its economic route.",
  },
  {
    question: "Where is the southern Grell source in Arcadia?",
    answer:
      "The mission identifies it after the southern-flank warning. Move south from the colony with the mobile group used against Old Bessie, destroy the permanent attack source, and return immediately before the final swarm.",
  },
  {
    question:
      "Should I evacuate the Colonists or the Militia in ZeroSpace?",
    answer:
      "The verified route in this guide evacuates the Colonists, leaving the Militia behind. The Militia branch has not been completed far enough here to confirm different rewards, later support, relationship changes, or another ending.",
  },
  {
    question:
      "Can I save both the Colonists and the Militia in Mission 3?",
    answer:
      "No option to save both appears in the decision panel. The dialogue states that the final shuttle has room for only one group, and completing the defense faster did not reveal an alternative choice in this route.",
  },
  {
    question:
      "Do rocket-turret upgrades replace Supply Platforms in ZeroSpace?",
    answer:
      "No. The rocket turret is fitted to an existing Supply Platform rather than replacing it with a separate building. The upgraded platform continues contributing to the mission's defensive setup.",
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
          name: "Mission 3 Arcadia Walkthrough",
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
        "ZeroSpace Mission 3 Arcadia Walkthrough: Old Bessie, Final Swarm and Evacuation Choice Guide",
      description:
        "This ZeroSpace Mission 3 Arcadia walkthrough explains the safe colony-defense route from the opening build through the final evacuation decision. It covers which Supply Platforms to upgrade with rocket turrets, when to create the Flux Harvester, why Bastion production can stall, how to position reinforcements and Moran heavy gunners, when to leave the main entrance to kill Old Bessie, where to find the southern Grell attack source, how to prepare for the overwhelming final swarm, and what is confirmed about the choice between evacuating the Colonists or the Militia. The guide also includes approximate timing checkpoints measured from deployment, common failure causes, restart conditions, and links to the wider Act 1 choice consequences.",
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
          name: "ZeroSpace Mission 3 walkthrough",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Arcadia walkthrough",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Trisaris mission",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Old Bessie",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Old Bessie location",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Arcadia final swarm",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Arcadia build order",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace southern Grell source",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Flux Harvester",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Bastions",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace Colonists or Militia choice",
        },
        {
          "@type": "Thing",
          name: "ZeroSpace evacuation choice",
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
          title="ZeroSpace Mission 3 Arcadia Walkthrough: Old Bessie, Final Swarm and Evacuation Choice"
          description="Follow the safe Arcadia route I used to stabilize the forward base, start Flux income, remove Old Bessie and the southern Grell source, survive the final swarm, and make the last-shuttle decision."
          gameTitle="ZeroSpace"
          gameHref="/zerospace/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ZeroSpaceMission3ArcadiaContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}