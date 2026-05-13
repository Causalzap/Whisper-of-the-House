import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import Directive8020ChoicesContent from "@/data/directive-8020/choices-consequences.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/directive-8020/choices-consequences`;

export const metadata: Metadata = {
    title: "Directive 8020 Choices Guide: Best Outcomes & Endings",
    description:
      "Master every decision in Directive 8020. Our choices and consequences guide covers the Two Eisele puzzle, Ice & Fire, Survivor Mode, and all endings.",
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
          name: "Directive 8020 Guide",
          item: `${siteUrl}/directive-8020`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Choices and Consequences",
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
        "Directive 8020 Choices Guide: Best Choices, Consequences and Endings",
      description:
        "A player-first Directive 8020 choices guide covering major decisions, Ep2 power routing, Episode 5 Ice and Fire, Anders or Mitchell, scanner and Test choices, two Eisele, weapon authorization, Destinies, Survivor Mode, final message branches, and bad-choice cleanup.",
      image: [
        `${siteUrl}/images/directive-8020/directive-8020-oracle-first-report.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-landing-computer-crash.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-episode-3-search-party-split.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-episode-3-sample-argument.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-two-eiseles-choice.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-authorize-weapon.webp`,
        `${siteUrl}/images/directive-8020/directive-8020-andromeda-message-choice.webp`,
      ],
      inLanguage: "en",
      datePublished: "2026-05-12",
      dateModified: "2026-05-13",
      about: [
        {
          "@type": "VideoGame",
          name: "Directive 8020",
        },
        {
          "@type": "Thing",
          name: "Choices and Consequences",
        },
        {
          "@type": "Thing",
          name: "Ice and Fire",
        },
        {
          "@type": "Thing",
          name: "Anders or Mitchell",
        },
        {
          "@type": "Thing",
          name: "Power Routing",
        },
        {
          "@type": "Thing",
          name: "Two Eisele Scene",
        },
        {
          "@type": "Thing",
          name: "Scanner Verification",
        },
        {
          "@type": "Thing",
          name: "Destinies",
        },
        {
          "@type": "Thing",
          name: "Survivor Mode",
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
          name: "Do choices matter in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Choices can affect survival, route state, traits, Destinies, duplicate outcomes, final messages, post-credit scenes, and endings.",
          },
        },
        {
          "@type": "Question",
          name: "Should I cut Fire Control System or Landing Computer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Track this choice carefully. Cutting Fire Control System can put Mitchell at higher risk in Episode 5’s Ice and Fire route, while cutting Landing Computer can shift risk toward Anders.",
          },
        },
        {
          "@type": "Question",
          name: "How do I save Anders or Mitchell in Ice and Fire?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Ice and Fire is not only decided in Episode 5. Check the Episode 2 power-routing branch first, because cutting Fire Control System or Landing Computer changes who is in greater danger.",
          },
        },
        {
          "@type": "Question",
          name: "Should I authorize the weapon in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "For the safer survival route, refuse the weapon. Test weapon branches later during cleanup.",
          },
        },
        {
          "@type": "Question",
          name: "Should I shoot or test in the two Eisele scene?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Choose Test. The left Eisele is fake, and the newcomer is real.",
          },
        },
        {
          "@type": "Question",
          name: "Is the scanner important in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Scanner / Test logic is the safest way to avoid mimic mistakes.",
          },
        },
        {
          "@type": "Question",
          name: "Can you stop Williams from taking the sample?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not cleanly. Cooper can push back, but Williams still drives the group toward taking the sample.",
          },
        },
        {
          "@type": "Question",
          name: "Do traits affect Destinies in Directive 8020?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Supportive, philosophical, heroic, and humanist-style responses can push characters toward different Destiny outcomes.",
          },
        },
        {
          "@type": "Question",
          name: "Does Survivor Mode allow Turning Point cleanup?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Do not rely on Turning Point cleanup during the run. Treat major choices as permanent until replay access is available.",
          },
        },
        {
          "@type": "Question",
          name: "Does the final message change the ending?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Distress / Save Our Souls-style and warning-style routes can change ending interpretation and post-credit direction.",
          },
        },
        {
          "@type": "Question",
          name: "Can Turning Points fix a bad choice?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, but only if you rewind to the earlier mistake, not just the scene where someone dies.",
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
          title="Directive 8020 Choices Guide: Best Choices, Consequences, Ice and Fire, and Endings"
          description="Find the best Directive 8020 choices and consequences, including Ep2 power routing, Episode 5 Ice and Fire, whether to save Anders or Mitchell, scanner and Test choices, two Eisele, weapon authorization, Destinies, Survivor Mode, and final message branches."
          gameTitle="Directive 8020"
          gameHref="/directive-8020"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 13, 2026"
          toc={[
            {
              id: "how-choices-work",
              label: "How choices work",
            },
            {
              id: "major-choices-table",
              label: "Major choices",
            },
            {
              id: "choice-chains",
              label: "Choice chains",
            },
            {
              id: "ep2-power-routing",
              label: "Ep2 power routing",
            },
            {
              id: "ice-and-fire-choice",
              label: "Ice and Fire",
            },
            {
              id: "destiny-traits",
              label: "Traits and Destinies",
            },
            {
              id: "choice-timing",
              label: "Choice timing",
            },
            {
              id: "survivor-mode",
              label: "Survivor Mode",
            },
            {
              id: "landing-computer-choice",
              label: "Landing computer",
            },
            {
              id: "wake-williams-choice",
              label: "Wake Williams",
            },
            {
              id: "episode-3-choices",
              label: "Episode 3 choices",
            },
            {
              id: "sample-choice",
              label: "Sample choice",
            },
            {
              id: "scanner-and-two-eiseles",
              label: "Scanner / Two Eisele",
            },
            {
              id: "weapon-authorization-note",
              label: "Weapon authorization",
            },
            {
              id: "final-message-choice",
              label: "Final message",
            },
            {
              id: "cleanup-plan",
              label: "Cleanup plan",
            },
            {
              id: "what-to-read-next",
              label: "Read next",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/directive-8020",
              label: "Directive 8020 Save Everyone Guide",
            },
            {
              href: "/directive-8020/character-survival-guide",
              label: "How to Keep Every Character Alive in Directive 8020",
            },
            {
              href: "/directive-8020/all-monster-scenes-alien-duplicates",
              label: "Directive 8020 Monster Scenes and Alien Duplicates Guide",
            },
            {
              href: "/directive-8020/all-endings",
              label: "Directive 8020 All Endings Guide",
            },
            {
              href: "/directive-8020/all-secrets-simms-recordings-o-death",
              label: "Directive 8020 All Secrets, Simms Recordings, and O Death Locations",
            },
          ]}
        >
          <Directive8020ChoicesContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}