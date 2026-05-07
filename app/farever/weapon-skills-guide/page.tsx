import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FareverWeaponSkillsContent from "@/data/farever/weapon-skills-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/farever/weapon-skills-guide`;

export const metadata: Metadata = {
    title: "Farever Weapon Skills Guide: Runes, Upgrades & Builds",
    description: "Master Farever weapon skills! Learn about skill ranks, enhancement runes, the Arsenal system, class-specific weapons, and early build priorities.",
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
          name: "Farever Weapon Skills Guide",
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
        "Farever Weapon Skills Guide: Weapons, Runes, Arsenal, Upgrades, and Early Builds",
      description:
        "This Farever weapon skills guide explains how weapon skills work, how green plus skill upgrades work, when to enhance weapons, how runes unlock class skill bonuses, how the Arsenal slot works, and how early weapon access changes Rogue, Warrior, Mage, and Cleric/Priest builds.",
      image: [
        `${siteUrl}/images/farever/farever-weapon-skill-upgrade.webp`,
        `${siteUrl}/images/farever/farever-fire-scepter-skills.webp`,
        `${siteUrl}/images/farever/farever-weapon-enhancement-station.webp`,
        `${siteUrl}/images/farever/farever-runes-skill-bonus.webp`,
        `${siteUrl}/images/farever/farever-arsenal-slot.webp`,
        `${siteUrl}/images/farever/farever-warrior-axes-berserk-smash.webp`,
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
          name: "Farever weapon skills",
        },
        {
          "@type": "Thing",
          name: "Farever weapons",
        },
        {
          "@type": "Thing",
          name: "Farever builds",
        },
        {
          "@type": "Thing",
          name: "Farever green plus",
        },
        {
          "@type": "Thing",
          name: "Farever skill ranks",
        },
        {
          "@type": "Thing",
          name: "Farever weapon enhancement",
        },
        {
          "@type": "Thing",
          name: "Farever runes",
        },
        {
          "@type": "Thing",
          name: "Farever Arsenal",
        },
        {
          "@type": "Thing",
          name: "Farever Rogue weapons",
        },
        {
          "@type": "Thing",
          name: "Farever Mage weapons",
        },
        {
          "@type": "Thing",
          name: "Farever Warrior weapons",
        },
        {
          "@type": "Thing",
          name: "Farever Cleric weapons",
        },
        {
          "@type": "Thing",
          name: "Farever Shadow Step",
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
          name: "Farever scepter",
        },
        {
          "@type": "Thing",
          name: "Farever fire scepter",
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
          name: "How do weapon skills work in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Weapons provide active skills, and switching weapons can change your skill bar. Your class has its own skills, but a large part of your active combat kit comes from your equipped weapon.",
          },
        },
        {
          "@type": "Question",
          name: "Do all weapons give the same number of skills in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. A simple one-handed weapon may give fewer skills, while a two-handed weapon can give a larger package such as multiple active skills plus a passive.",
          },
        },
        {
          "@type": "Question",
          name: "What does the green plus mean on a skill in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A green blinking plus means that skill can be upgraded. Open the skill screen, click the skill, and spend the rank point if the upgrade fits your current weapon kit.",
          },
        },
        {
          "@type": "Question",
          name: "Should I upgrade weapon skills or the weapon itself first in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Upgrade active weapon skills first. Early weapon enhancement can give small stat gains, while skill ranks directly improve the buttons you are pressing in combat.",
          },
        },
        {
          "@type": "Question",
          name: "Should I enhance low-level weapons in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Only if you plan to keep the weapon or the effect is strong. Early station upgrades can be minor, so save materials for weapons you will actually use.",
          },
        },
        {
          "@type": "Question",
          name: "What is Arsenal in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Arsenal is a secondary weapon slot that lets you use one skill from another weapon. It is useful for adding healing, shielding, utility, or extra damage.",
          },
        },
        {
          "@type": "Question",
          name: "How do I change my Arsenal skill in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Hold Control and left-click the Arsenal weapon, then select the skill you want from that weapon.",
          },
        },
        {
          "@type": "Question",
          name: "How do runes work in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Runes unlock class skill bonuses. Right-click the rune in your inventory first, then choose the unlocked bonus on the related skill screen.",
          },
        },
        {
          "@type": "Question",
          name: "Are runes for weapon skills or class skills in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Runes are mainly for class skill bonuses. Weapon skills are upgraded separately through skill ranks.",
          },
        },
        {
          "@type": "Question",
          name: "What is a good early Arsenal choice in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use Arsenal to cover your weakness. If your main weapon has damage but no safety, add a healing or shield tool. If your main weapon is safe but slow, add a burst or AoE tool.",
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
          name: "What weapons can Mage use in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Mage-style builds lean heavily on magic weapons such as scepters. A fire scepter can swap you into fire abilities, while another scepter can add healing and magic damage.",
          },
        },
        {
          "@type": "Question",
          name: "What weapons can Warrior use in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Early examples point Warrior toward direct melee weapons such as swords and axes. Axe-style setups can unlock skills like Berserk Attack and Smash Attack.",
          },
        },
        {
          "@type": "Question",
          name: "Can Rogue use a bow in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Bow appears as a Rogue-friendly ranged option in early examples. Use it if you like Rogue mobility but want more range than dagger-style play.",
          },
        },
        {
          "@type": "Question",
          name: "What are Berserk Attack and Smash Attack in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Berserk Attack and Smash Attack are early axe-style skills seen with a Warrior-style double-axe setup. They make the weapon feel more direct and AoE-focused.",
          },
        },
        {
          "@type": "Question",
          name: "Is Shadow Step a weapon skill in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Shadow Step is a Rogue-style mobility and control skill that teleports behind the target and stuns. It is a good example of why class skills and weapon skills both matter.",
          },
        },
        {
          "@type": "Question",
          name: "Which Farever guide should I read next?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Read the Farever Classes Guide if you are choosing a starter class, or the Farever Codeex and Leveling Guide if you want to level faster.",
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
          title="Farever Weapon Skills Guide"
          description="Learn how Farever weapon skills work, including skill ranks, green plus upgrades, weapon enhancement, runes, Arsenal, Rogue bows, Mage scepters, Warrior axes, and early build priorities."
          gameTitle="Farever"
          gameHref="/farever"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 7, 2026"
          toc={[
            {
              id: "how-weapon-skills-work",
              label: "Weapon skills",
            },
            {
              id: "weapon-examples",
              label: "Weapon examples",
            },
            {
              id: "weapon-access",
              label: "Weapon access",
            },
            {
              id: "skill-ranks",
              label: "Skill ranks",
            },
            {
              id: "weapon-enhancement",
              label: "Enhancement",
            },
            {
              id: "runes",
              label: "Runes",
            },
            {
              id: "arsenal",
              label: "Arsenal",
            },
            {
              id: "class-examples",
              label: "Class examples",
            },
            {
              id: "pet-net",
              label: "Pet net",
            },
            {
              id: "build-priority",
              label: "Build priority",
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
              href: "/farever/classes-guide",
              label: "Classes Guide",
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
          <FareverWeaponSkillsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}