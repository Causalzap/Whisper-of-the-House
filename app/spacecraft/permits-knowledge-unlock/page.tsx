import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import PermitsKnowledgeUnlockContent from "@/data/spacecraft/permits-knowledge-unlock.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/spacecraft/permits-knowledge-unlock`;

const imageUrls = [
`${siteUrl}/images/spacecraft/spacecraft-knowledge-menu-modular-systems.webp`,
`${siteUrl}/images/spacecraft/spacecraft-electromagnetism-permit-ftl.webp`,
`${siteUrl}/images/spacecraft/spacecraft-cargo-accommodation-permit.webp`,
`${siteUrl}/images/spacecraft/spacecraft-personal-factory-permit-300.webp`,
`${siteUrl}/images/spacecraft/spacecraft-automated-factories-logistics.webp`,
`${siteUrl}/images/spacecraft/spacecraft-interplanetary-logistics-plumbing.webp`,
`${siteUrl}/images/spacecraft/spacecraft-technology-level-unlocks.webp`,
];

const toc = [
{
id: "spacecraft-permits-knowledge-unlock-guide",
label: "Permit unlock order",
},
{
id: "knowledge-permits-vs-level-unlocks-vs-corpo-permits",
label: "Unlock systems",
},
{
id: "electromagnetism-ftl",
label: "Electromagnetism",
},
{
id: "cargo-accommodation",
label: "Cargo Accommodation",
},
{
id: "personal-factory",
label: "Personal Factory",
},
{
id: "automated-factories",
label: "Automated Factories",
},
{
id: "modular-systems-2",
label: "Modular Systems 2",
},
{
id: "interplanetary-logistics-plumbing-liquid-logistics",
label: "Logistics and Plumbing",
},
{
id: "science-technology-exploration-progression",
label: "Progression",
},
{
id: "common-permit-mistakes",
label: "Mistakes",
},
{
id: "permit-blocker-fixes",
label: "Blocker fixes",
},
{
id: "what-to-do-after-permits",
label: "Next route",
},
{
id: "faq",
label: "FAQ",
},
];

const relatedLinks = [
{
href: "/spacecraft",
label: "SpaceCraft Guide Hub",
},
{
href: "/spacecraft/scanalyzer-alpha-ftl-engine",
label: "SpaceCraft Scanalyzer Alpha and FTL Guide",
},
{
href: "/spacecraft/beginner-guide",
label: "SpaceCraft Beginner Guide",
},
{
href: "/spacecraft/ship-upgrades-cargo-inventory",
label: "SpaceCraft Ship Upgrades Guide",
},
{
href: "/spacecraft/resources-locations",
label: "SpaceCraft Resources Guide",
},
{
href: "/spacecraft/base-building-automation",
label: "SpaceCraft Base Building and Automation Guide",
},
{
href: "/spacecraft/noviciate-corporation-unlock",
label: "SpaceCraft Noviciate and Corporation Unlock Guide",
},
];

export const metadata: Metadata = {
title: "SpaceCraft Permits Guide: What to Unlock First",
description:
"Choose the best SpaceCraft permits, avoid bad unlocks, and understand Knowledge, Lab analysis, Science, Technology, Exploration, and automation.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title: "SpaceCraft Permits and Knowledge Unlock Guide",
description:
"A practical SpaceCraft permit guide covering costs, unlock order, Modular Systems 2, Lab analysis, Science and Technology XP, automation, and logistics.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "SpaceCraft Knowledge permit tree showing Modular Systems, Electromagnetism, Cargo Accommodation, Personal Factory, Modular Structures, and Solar Panel.",
},
],
},
twitter: {
card: "summary_large_image",
title: "SpaceCraft Permits Guide",
description:
"Learn what SpaceCraft permits to unlock first, what to delay, and how Lab analysis, Science XP, Technology XP, and automation affect recipes.",
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
name: "SpaceCraft Guide",
item: `${siteUrl}/spacecraft`,
},
{
"@type": "ListItem",
position: 3,
name: "SpaceCraft Permits and Knowledge Unlock Guide",
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
"SpaceCraft Permits and Knowledge Unlock Guide: Best Permit Order, Costs, Modular Systems 2, Lab Analysis, Automation and Progression",
description:
"A player-focused SpaceCraft permits and Knowledge unlock guide covering the full permit table, credit costs, main unlocks, recommended timing, Modular Systems, Electromagnetism, Cargo Accommodation, Personal Factory, Automated Factories, Modular Systems 2, Plumbing, Liquid Logistics, Interplanetary Logistics, Laboratory analysis, Science XP, Technology XP, Exploration progression, common permit mistakes, and route-based blocker fixes.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-16",
dateModified: "2026-06-16",
articleSection: "Guides",
about: [
{
"@type": "VideoGame",
name: "SpaceCraft",
},
{
"@type": "Thing",
name: "SpaceCraft permits",
},
{
"@type": "Thing",
name: "SpaceCraft Knowledge",
},
{
"@type": "Thing",
name: "SpaceCraft Modular Systems",
},
{
"@type": "Thing",
name: "SpaceCraft Electromagnetism",
},
{
"@type": "Thing",
name: "SpaceCraft Cargo Accommodation",
},
{
"@type": "Thing",
name: "SpaceCraft Personal Factory",
},
{
"@type": "Thing",
name: "SpaceCraft Automated Factories",
},
{
"@type": "Thing",
name: "SpaceCraft Modular Systems 2",
},
{
"@type": "Thing",
name: "SpaceCraft Laboratory analysis",
},
{
"@type": "Thing",
name: "SpaceCraft Science XP",
},
{
"@type": "Thing",
name: "SpaceCraft Technology XP",
},
{
"@type": "Thing",
name: "SpaceCraft Exploration progression",
},
{
"@type": "Thing",
name: "SpaceCraft Interplanetary Logistics",
},
{
"@type": "Thing",
name: "SpaceCraft Plumbing",
},
{
"@type": "Thing",
name: "SpaceCraft Liquid Logistics",
},
],
publisher: {
"@type": "Organization",
name: "Whisper of the House",
url: siteUrl,
},
},
{
"@type": "FAQPage",
"@id": `${pageUrl}#faq`,
mainEntity: [
{
"@type": "Question",
name: "What permit should I unlock first in SpaceCraft?",
acceptedAnswer: {
"@type": "Answer",
text:
"Unlock Modular Systems when the opening route points you to the Knowledge menu. It starts the early ship-module and Scanalyzer Alpha route.",
},
},
{
"@type": "Question",
name: "Is Electromagnetism required for FTL in SpaceCraft?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. Buy Electromagnetism when the FTL route asks for it, then check the FTL Engine - Eco ingredient chain.",
},
},
{
"@type": "Question",
name: "Is Cargo Accommodation worth it in SpaceCraft?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes, once cargo space becomes the bottleneck. It opens Small Cargo Hold and makes mining trips, upgrade runs, and request deliveries easier.",
},
},
{
"@type": "Question",
name: "When should I buy Personal Factory in SpaceCraft?",
acceptedAnswer: {
"@type": "Answer",
text:
"Buy Personal Factory when you are ready to claim a base and build the first production loop. Do not buy it just to stare at base recipes without parts, credits, or a good deposit.",
},
},
{
"@type": "Question",
name: "When should I buy Automated Factories in SpaceCraft?",
acceptedAnswer: {
"@type": "Answer",
text:
"Buy Automated Factories after your first Extractor-to-Smelter loop works. It is strongest when storage, drone routing, landing, and production scaling are the next bottlenecks.",
},
},
{
"@type": "Question",
name: "Is Modular Systems 2 worth 2000 credits in SpaceCraft?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes, once the first FTL, Cargo Accommodation, and base-start routes are stable. Modular Systems 2 opens Cargo Hold, Hi-Pi Laser, Overclocked Hi-Pi Laser, Module Kit, and Strong Metal Sheet.",
},
},
{
"@type": "Question",
name: "Are Corpo Permits the same as Knowledge permits in SpaceCraft?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. Knowledge permits are personal unlocks. Corpo permits are corporation-side upgrades that matter after Noviciate and the first corpo request.",
},
},
{
"@type": "Question",
name: "Should I buy decoration permits early in SpaceCraft?",
acceptedAnswer: {
"@type": "Answer",
text:
"Usually no. Ship Coating and Brand Management are cheap, but they do not solve FTL, cargo, base, power, or automation blockers.",
},
},
{
"@type": "Question",
name: "How do I get Science XP in SpaceCraft?",
acceptedAnswer: {
"@type": "Answer",
text:
"Study minerals and organic resources at the Laboratory. Resource analysis can give Science XP and may also unlock recipe or material knowledge.",
},
},
{
"@type": "Question",
name: "How do I get Technology XP in SpaceCraft?",
acceptedAnswer: {
"@type": "Answer",
text:
"Crafting items in automated Smelters and Factories inside your space base generates Technology XP. Deploying a new base building for the first time also gives Technology XP.",
},
},
{
"@type": "Question",
name: "Why does a recipe say Requires Science level 2 in SpaceCraft?",
acceptedAnswer: {
"@type": "Answer",
text:
"That recipe is gated by Science progression, not only by a Knowledge permit. Analyze resources at the Laboratory until the required Science level is reached.",
},
},
{
"@type": "Question",
name: "Why do I have materials but no recipe in SpaceCraft?",
acceptedAnswer: {
"@type": "Answer",
text:
"Check Knowledge, Laboratory analysis, and progression levels. Some recipes stay unavailable until the relevant permit, resource analysis, blueprint access, or Science, Technology, or Exploration requirement is unlocked.",
},
},
{
"@type": "Question",
name: "What is the difference between permits and Science or Technology levels in SpaceCraft?",
acceptedAnswer: {
"@type": "Answer",
text:
"Permits are bought unlocks in Knowledge. Science and Technology levels can reveal additional tools, recipes, bases, structures, and higher-tier options through progression.",
},
},
{
"@type": "Question",
name: "Should I follow the full permit tree in order in SpaceCraft?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. Follow your active blocker. Buy the permit that solves your route now, then come back for later systems when they become relevant.",
},
},
],
},
],
};

export default function Page() {
return (
<> <Header /> <main>
<script
type="application/ld+json"
dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
    <GuideArticlePage
      title="Choose the Right Permit Before You Spend Credits"
      description="Use this SpaceCraft Knowledge guide to pick the right permit for your current blocker, from Modular Systems and Electromagnetism to Lab analysis, Science XP, Technology XP, Personal Factory, Automated Factories, Modular Systems 2, and logistics."
      gameTitle="SpaceCraft"
      gameHref="/spacecraft"
      breadcrumbBaseHref="/"
      breadcrumbBaseLabel="Home"
      updatedAt="June 16, 2026"
      toc={toc}
      relatedLinks={relatedLinks}
    >
      <PermitsKnowledgeUnlockContent />
    </GuideArticlePage>
  </main>
  <Footer />
</>

);
}
