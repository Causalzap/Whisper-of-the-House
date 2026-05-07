import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FareverFirstDungeonContent from "@/data/farever/first-dungeon-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/farever/first-dungeon-guide`;

export const metadata: Metadata = {
  title:
    "Farever Guide: Mine Estrone, Reblochonk & Secret Orbs",
  description:
    "Clear Farever's first dungeon, Mine Estrone! Master the Reblochonk boss fight, find Secret Orbs, get top rewards, and see how it differs from Crabgantua.",
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
          name: "Farever Guide Hub",
          item: `${siteUrl}/farever`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Farever First Dungeon Guide",
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
        "Farever First Dungeon Guide: Mine Estrone, Reblochonk, Secret Orbs, and Early Rewards",
      description:
        "This Farever First Dungeon Guide explains the Mine Estrone early dungeon route, how to identify the dungeon objective tracker, how Secret Orbs: Mine Estrone works, how to handle special foes, how to beat Reblochonk, what rewards to check after the run, and why Crabgantua belongs to a separate boss route.",
      image: [
        `${siteUrl}/images/farever/farever-lost-city-of-mayda-level-5-difficulty.webp`,
        `${siteUrl}/images/farever/farever-mine-estrone-secret-orbs-1-of-5.webp`,
        `${siteUrl}/images/farever/farever-mine-estrone-reblochonk-objectives.webp`,
        `${siteUrl}/images/farever/farever-mine-estrone-reblochonk-rampage.webp`,
        `${siteUrl}/images/farever/farever-mine-estrone-skill-point-reward.webp`,
      ],
      inLanguage: "en",
      datePublished: "2026-05-07",
      dateModified: "2026-05-07",
      about: [
        {
          "@type": "VideoGame",
          name: "Farever",
        },
        {
          "@type": "Thing",
          name: "Farever first dungeon",
        },
        {
          "@type": "Thing",
          name: "Farever Mine Estrone",
        },
        {
          "@type": "Thing",
          name: "Farever Reblochonk",
        },
        {
          "@type": "Thing",
          name: "Farever Secret Orbs",
        },
        {
          "@type": "Thing",
          name: "Secret Orbs: Mine Estrone",
        },
        {
          "@type": "Thing",
          name: "Farever special foes",
        },
        {
          "@type": "Thing",
          name: "Farever Basic difficulty",
        },
        {
          "@type": "Thing",
          name: "Farever dungeon rewards",
        },
        {
          "@type": "Thing",
          name: "Farever skill point",
        },
        {
          "@type": "Thing",
          name: "Farever Crabgantua",
        },
        {
          "@type": "Thing",
          name: "Crabgantua's Gorge",
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
          name: "What is the first dungeon boss in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "For the Mine Estrone early dungeon route, the confirmed boss is Reblochonk.",
          },
        },
        {
          "@type": "Question",
          name: "Is Reblochonk the same as Crabgantua?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Reblochonk is tied to Mine Estrone. Crabgantua is the boss of Crabgantua's Gorge and should be treated as a separate boss route.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the first dungeon in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the early level 5 dungeon entry and follow the objective tracker into Mine Estrone. Once inside, look for Mine Estrone objectives such as Secret Orbs, special foes, and Reblochonk.",
          },
        },
        {
          "@type": "Question",
          name: "What level should I be for the first dungeon in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The early dungeon entry can show Recommended level 5. If you are below that, finish nearby Codeex entries, map objectives, and mini bosses first.",
          },
        },
        {
          "@type": "Question",
          name: "How many secret orbs are in Mine Estrone?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Mine Estrone tracks 5 secret orbs. The UI can show progress like Secret Orbs: Mine Estrone 1/5.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the missing secret orb in Mine Estrone?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check side paths, ledges, upper routes, wooden structures, and the route before Reblochonk. Do not only search the ground-level boss path.",
          },
        },
        {
          "@type": "Question",
          name: "Do special foes matter in Mine Estrone?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Mine Estrone can track special foes separately from the boss and secret orbs, such as 23/23 special foes slain.",
          },
        },
        {
          "@type": "Question",
          name: "Should I do Basic difficulty first in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Use Basic difficulty for your first clear so you can learn the route, secret orbs, special foes, and Reblochonk safely.",
          },
        },
        {
          "@type": "Question",
          name: "How do I beat Reblochonk in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Move during Rampage, keep the camera clear, avoid greed-attacking during pressure, and confirm the 0/1 Reblochonk slain objective updates after the kill.",
          },
        },
        {
          "@type": "Question",
          name: "Why did I miss rewards after the dungeon?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You may have killed the boss but skipped secret orbs, special foes, or post-run checks. Always check objectives, inventory, and the skill screen before leaving.",
          },
        },
        {
          "@type": "Question",
          name: "Can friends help with Mine Estrone?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Party play helps, but coordinate the start, secret orb search, special foe clear, and Reblochonk pull so the group does not split.",
          },
        },
        {
          "@type": "Question",
          name: "Which Farever guide should I read next?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Read the Farever Weapon Skills Guide for skill and build upgrades, or the Farever Codeex and Leveling Guide if you want better pre-dungeon leveling.",
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
          title="Farever First Dungeon Guide"
          description="Learn the Mine Estrone early dungeon route in Farever, including Basic difficulty, Secret Orbs, special foes, Reblochonk, rewards, and why Crabgantua belongs to a separate boss route."
          gameTitle="Farever"
          gameHref="/farever"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 7, 2026"
          toc={[
            {
              id: "where-is-first-dungeon",
              label: "Where to start",
            },
            {
              id: "before-you-enter",
              label: "Before you enter",
            },
            {
              id: "starting-the-dungeon",
              label: "Starting route",
            },
            {
              id: "secret-orbs",
              label: "Secret Orbs",
            },
            {
              id: "missing-orbs",
              label: "Missing orbs",
            },
            {
              id: "special-foes",
              label: "Special foes",
            },
            {
              id: "reblochonk-boss",
              label: "Reblochonk",
            },
            {
              id: "rewards",
              label: "Rewards",
            },
            {
              id: "party-setup",
              label: "Party setup",
            },
            {
              id: "common-mistakes",
              label: "Mistakes",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/farever",
              label: "Farever Guide Hub",
            },
            {
              href: "/farever/beginner-guide",
              label: "Beginner Guide",
            },
            {
              href: "/farever/codeex-leveling-guide",
              label: "Codeex and Leveling Guide",
            },
            {
              href: "/farever/weapon-skills-guide",
              label: "Weapon Skills Guide",
            },
            {
              href: "/farever/classes-guide",
              label: "Classes Guide",
            },
            {
              href: "/farever/mount-guide",
              label: "Mount Guide",
            },
          ]}
        >
          <FareverFirstDungeonContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}