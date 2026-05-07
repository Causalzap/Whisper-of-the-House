import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FareverMountContent from "@/data/farever/mount-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/farever/mount-guide`;

export const metadata: Metadata = {
    title: "Farever Mount Guide: Free Mount, Glider & Fast Travel",
    description: "Get your free Farever mount! Learn to equip it, fix keybinds, master glider movement, avoid early vendor mistakes, and unlock obelisk fast travel.",
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
          name: "Farever Mount Guide",
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
        "Farever Mount Guide: How to Get the Free Mount, Equip It, Fix Keybinds, Use Glider, and Unlock Fast Travel",
      description:
        "This Farever mount guide explains how to claim the free mount, equip it from Collections, fix the mount key not working, change mount and dismount keybinds, use mount and glider movement, understand vendor mount and glider prices, avoid companion confusion, and use obelisks for automatic travel.",
      image: [
        `${siteUrl}/images/farever/farever-free-mount-shop.webp`,
        `${siteUrl}/images/farever/farever-mount-not-working-collections.webp`,
        `${siteUrl}/images/farever/farever-mount-hotkeys.webp`,
        `${siteUrl}/images/farever/farever-mount-glider-transition.webp`,
        `${siteUrl}/images/farever/farever-mount-glider-vendor.webp`,
        `${siteUrl}/images/farever/farever-companion-collections.webp`,
        `${siteUrl}/images/farever/farever-obelisk-fast-travel.webp`,
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
          name: "Farever mount guide",
        },
        {
          "@type": "Thing",
          name: "Farever free mount",
        },
        {
          "@type": "Thing",
          name: "Farever mount not working",
        },
        {
          "@type": "Thing",
          name: "Farever Collections",
        },
        {
          "@type": "Thing",
          name: "Farever mount keybind",
        },
        {
          "@type": "Thing",
          name: "Farever glider",
        },
        {
          "@type": "Thing",
          name: "Farever vendor mount",
        },
        {
          "@type": "Thing",
          name: "Farever companion",
        },
        {
          "@type": "Thing",
          name: "Farever pet net",
        },
        {
          "@type": "Thing",
          name: "Farever obelisk",
        },
        {
          "@type": "Thing",
          name: "Farever fast travel",
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
          name: "How do you get a mount in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Press Esc, open the shop, claim the free items, then press Y to open Collections. Select the mount tab and equip the mount.",
          },
        },
        {
          "@type": "Question",
          name: "Why does my mount key not work in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You probably claimed the mount but did not equip it. Open Collections with Y, select the mount tab, equip the mount, then test the key again.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the mount after I claim it in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The mount is in Collections, not your normal inventory.",
          },
        },
        {
          "@type": "Question",
          name: "What key opens Collections in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The default Collections key is Y.",
          },
        },
        {
          "@type": "Question",
          name: "How do I change my mount key in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Open Options, then Hotkeys, and change the mount or dismount key there.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to buy the 1000 gold mount in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No, not if you already claimed and equipped the free mount. Treat the 1000 gold vendor mount as optional unless you want that specific mount.",
          },
        },
        {
          "@type": "Question",
          name: "How much does the vendor glider cost in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "One early vendor shows a glider for 500 gold.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use the glider and mount together in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. You can use the mount for ground movement, then jump and glide while airborne for smoother travel.",
          },
        },
        {
          "@type": "Question",
          name: "Is a companion the same as a mount in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. A companion follows you, while a mount is used for riding. Check the correct Collections tab.",
          },
        },
        {
          "@type": "Question",
          name: "Is the pet net a mount item in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. The pet net is for catching pets and uses an active weapon slot. Do not equip it before combat.",
          },
        },
        {
          "@type": "Question",
          name: "How do obelisks work with mounts in Farever?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Mounts help with local travel, while obelisks help with longer travel. Unlock obelisks to reveal zones, set respawn points, and use automatic travel routes.",
          },
        },
        {
          "@type": "Question",
          name: "Which Farever guide should I read next?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Read the Farever Beginner Guide if you are still learning the first-hour route, or the Farever Codeex and Leveling Guide if you want to route map completion and obelisks better.",
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
          title="Farever Mount Guide"
          description="Learn how to claim the free mount in Farever, equip it from Collections, fix mount keybinds, use glider movement, avoid early vendor mistakes, and unlock obelisk travel."
          gameTitle="Farever"
          gameHref="/farever"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 7, 2026"
          toc={[
            {
              id: "how-to-get-free-mount",
              label: "Free mount",
            },
            {
              id: "mount-not-working",
              label: "Mount not working",
            },
            {
              id: "mount-keybinds",
              label: "Keybinds",
            },
            {
              id: "mount-and-glider",
              label: "Mount and glider",
            },
            {
              id: "vendor-mounts-gliders",
              label: "Vendor items",
            },
            {
              id: "collections-tabs",
              label: "Collections tabs",
            },
            {
              id: "obelisk-fast-travel",
              label: "Obelisks",
            },
            {
              id: "pet-net-warning",
              label: "Pet net",
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
              href: "/farever/weapon-skills-guide",
              label: "Weapon Skills Guide",
            },
            {
              href: "/farever/first-dungeon-guide",
              label: "First Dungeon Guide",
            },
          ]}
        >
          <FareverMountContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}