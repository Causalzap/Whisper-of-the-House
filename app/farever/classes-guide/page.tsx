import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FareverClassesContent from "@/data/farever/classes-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/farever/classes-guide`;

export const metadata: Metadata = {
  title: "Farever Class Guide: Best Picks, Skills & Weapons",
  description: "Compare Farever classes: Warrior, Mage, Rogue & Cleric. Find the best beginner class, weapon skills, solo/co-op picks, and avoid choice mistakes.",
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
          name: "Farever Classes Guide",
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
        "Farever Classes Guide: Best Starting Class, Skills, Weapons, Solo Picks, and Co-op Roles",
      description:
        "This Farever Classes Guide compares Cleric/Priest, Rogue, Warrior, and Mage, explains which class to pick first, covers planned Monk and Druid classes, and shows early skill and weapon examples such as Judgment, Shadow Step, Berserk Attack, Smash Attack, fire scepter, and healing scepter.",
      image: [
        `${siteUrl}/images/farever/farever-class-selection.webp`,
        `${siteUrl}/images/farever/farever-cleric-judgment-skills-marked.webp`,
        `${siteUrl}/images/farever/farever-rogue-shadow-step-marked.webp`,
        `${siteUrl}/images/farever/farever-warrior-axes-berserk-smash-marked.webp`,
        `${siteUrl}/images/farever/farever-fire-scepter-skills-marked.webp`,
        `${siteUrl}/images/farever/farever-class-weapon-requirement.webp`,
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
          name: "Farever classes",
        },
        {
          "@type": "Thing",
          name: "Farever best class",
        },
        {
          "@type": "Thing",
          name: "Farever beginner class",
        },
        {
          "@type": "Thing",
          name: "Farever Cleric",
        },
        {
          "@type": "Thing",
          name: "Farever Priest",
        },
        {
          "@type": "Thing",
          name: "Farever Rogue",
        },
        {
          "@type": "Thing",
          name: "Farever Warrior",
        },
        {
          "@type": "Thing",
          name: "Farever Mage",
        },
        {
          "@type": "Thing",
          name: "Farever Monk",
        },
        {
          "@type": "Thing",
          name: "Farever Druid",
        },
        {
          "@type": "Thing",
          name: "Farever Shadow Step",
        },
        {
          "@type": "Thing",
          name: "Farever Judgment",
        },
        {
          "@type": "Thing",
          name: "Farever Berserk Attack",
        },
        {
          "@type": "Thing",
          name: "Farever Smash Attack",
        },
        {
          "@type": "Thing",
          name: "Farever Rogue weapons",
        },
        {
          "@type": "Thing",
          name: "Farever Warrior weapons",
        },
        {
          "@type": "Thing",
          name: "Farever Mage weapons",
        },
        {
          "@type": "Thing",
          name: "Farever Cleric weapons",
        },
        {
          "@type": "Thing",
          name: "Farever solo class",
        },
        {
          "@type": "Thing",
          name: "Farever co-op class",
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
          name: "What is the best beginner class in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Cleric/Priest is the safest beginner class because Judgment can heal and the class gives you more room to recover from mistakes.",
          },
        },
        {
          "@type": "Question",
          name: "How many classes are in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Farever currently has four playable starting classes: Cleric/Priest, Rogue, Warrior, and Mage.",
          },
        },
        {
          "@type": "Question",
          name: "Are Monk and Druid in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not yet. Monk and Druid are planned for later updates, but they are not current starting classes.",
          },
        },
        {
          "@type": "Question",
          name: "Is Rogue good for beginners?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Rogue is good if you like mobility and control. Shadow Step teleports behind the target and stuns for 2 seconds, but Rogue is less forgiving than Cleric/Priest.",
          },
        },
        {
          "@type": "Question",
          name: "Is Warrior good in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Warrior is good if you want direct melee pressure. Its early identity becomes clearer once weapon skills such as Berserk Attack and Smash Attack appear on axe setups.",
          },
        },
        {
          "@type": "Question",
          name: "Is Mage good in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Mage is good if you want ranged magic. The key is the weapon: fire scepter gives fire abilities, while another scepter can add healing and magic damage.",
          },
        },
        {
          "@type": "Question",
          name: "What does Cleric/Priest do in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Cleric/Priest is the safest support-style class. Judgment is the key early example because it releases a prayer-based nova and can heal.",
          },
        },
        {
          "@type": "Question",
          name: "What does Rogue do in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Rogue focuses on mobility, control, and positioning. Shadow Step is the key early example because it teleports behind the target and stuns for 2 seconds.",
          },
        },
        {
          "@type": "Question",
          name: "What weapons can Rogue use in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Early examples show Rogue using dagger-style weapons and bow. Bow is the clearest ranged option tied to Rogue so far.",
          },
        },
        {
          "@type": "Question",
          name: "What weapons can Warrior use in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Early examples point Warrior toward swords and axes. Axe-style setups can unlock Berserk Attack and Smash Attack.",
          },
        },
        {
          "@type": "Question",
          name: "What weapons can Mage use in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Mage-style builds lean on magic weapons such as scepters. A fire scepter changes the skill package into fire abilities.",
          },
        },
        {
          "@type": "Question",
          name: "What weapons can Cleric/Priest use in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Cleric/Priest can use healing or magic weapons, and some setups can push it toward a defensive or paladin-style route. Always check the weapon tooltip.",
          },
        },
        {
          "@type": "Question",
          name: "Should I pick a Farever class based on a tier list?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not yet. Farever builds depend on class, weapon, runes, and Arsenal together. Pick the class that fits how you want to learn the game first.",
          },
        },
        {
          "@type": "Question",
          name: "Which class is best for solo play in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Cleric/Priest is the safest solo pick. Rogue is faster but squishier, Warrior is direct melee, and Mage is ranged but weapon-dependent.",
          },
        },
        {
          "@type": "Question",
          name: "Which class is best for co-op in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Cleric/Priest is the easiest co-op recommendation because healing and support are always useful. Rogue, Warrior, and Mage all become easier to play when another player helps with pressure or control.",
          },
        },
        {
          "@type": "Question",
          name: "Which Farever guide should I read next?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Read the Farever Weapon Skills Guide for weapon skills, runes, and Arsenal, or the Farever Codeex and Leveling Guide for faster leveling.",
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
          title="Farever Classes Guide"
          description="Compare Cleric/Priest, Rogue, Warrior, and Mage in Farever, including the best beginner class, planned Monk and Druid classes, early skill examples, weapons by class, solo value, co-op value, and class choice mistakes."
          gameTitle="Farever"
          gameHref="/farever"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 7, 2026"
          toc={[
            {
              id: "best-starting-class",
              label: "Best starting class",
            },
            {
              id: "current-and-planned-classes",
              label: "Current and planned",
            },
            {
              id: "cleric-priest",
              label: "Cleric / Priest",
            },
            {
              id: "rogue",
              label: "Rogue",
            },
            {
              id: "warrior",
              label: "Warrior",
            },
            {
              id: "mage",
              label: "Mage",
            },
            {
              id: "technical-skill-notes",
              label: "Skill notes",
            },
            {
              id: "weapons-by-class",
              label: "Weapons by class",
            },
            {
              id: "stats-to-watch",
              label: "Stats",
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
              href: "/farever/mount-guide",
              label: "Mount Guide",
            },
            {
              href: "/farever/first-dungeon-guide",
              label: "First Dungeon Guide",
            },
          ]}
        >
          <FareverClassesContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}