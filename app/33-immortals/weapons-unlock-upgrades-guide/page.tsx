import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import WeaponsUnlockUpgradesGuideContent from "@/data/33-immortals/weapons-unlock-upgrades-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/33-immortals/weapons-unlock-upgrades-guide`;

const imageUrls = [
`${siteUrl}/images/33-immortals/33-immortals-weapon-upgrade-unlocked.webp`,
`${siteUrl}/images/33-immortals/33-immortals-crossbows-mastery-upgrade-slot.webp`,
`${siteUrl}/images/33-immortals/33-immortals-hooks-gluttony-parry.webp`,
`${siteUrl}/images/33-immortals/33-immortals-weapon-shrine-upgrade-menu.webp`,
`${siteUrl}/images/33-immortals/33-immortals-weapon-upgrade-token-prompt.webp`,
];

const toc = [
{ id: "weapons-guide", label: "Weapons guide" },
{ id: "which-weapon-to-unlock-first", label: "What to unlock first" },
{ id: "weapon-core-loops", label: "Weapon core loops" },
{ id: "bow-of-hope", label: "Bow of Hope" },
{ id: "glaive-of-temperance", label: "Glaive of Temperance" },
{ id: "crossbows-of-pride", label: "Crossbows of Pride" },
{ id: "sword-of-justice", label: "Sword of Justice" },
{ id: "staff-of-sloth", label: "Staff of Sloth" },
{ id: "hooks-of-gluttony", label: "Hooks of Gluttony" },
{ id: "daggers-of-greed", label: "Daggers of Greed" },
{ id: "scepter-of-charity", label: "Scepter of Charity" },
{ id: "weapon-unlock-costs", label: "Unlock costs and slots" },
{ id: "weapon-mastery", label: "Weapon Mastery" },
{ id: "upgrade-priority", label: "Upgrade priority" },
{ id: "common-weapon-mistakes", label: "Common mistakes" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
{
href: "/33-immortals",
label: "33 Immortals Guide Hub",
},
{
href: "/33-immortals/beginner-progression-guide",
label: "33 Immortals Beginner Progression Guide",
},
{
href: "/33-immortals/bosses-guide",
label: "33 Immortals Boss Mechanics Guide",
},
{
href: "/33-immortals/relics-paths-wishing-guide",
label: "33 Immortals Relics, Paths and Wishing Guide",
},
{
href: "/33-immortals/achievements-guide",
label: "33 Immortals Achievements Guide",
},
];

export const metadata: Metadata = {
title: "33 Immortals Weapons Guide: Best Tier, Unlocks & Mastery",
description:
"Pick the best 33 Immortals weapon with 1.0 tier signals, unlock costs, Bow/Glaive/Crossbows loops, Scepter, upgrade slots and 48% Mastery.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"33 Immortals Weapons Guide: Best Tier, Unlocks, Core Loops and Mastery",
description:
"Choose the best 33 Immortals weapon with 1.0 tier signals, Bow recall, Glaive Temperance, Crossbows Pride, Sword Justice, Scepter support, unlock costs, upgrade slots and 48% Weapon Mastery.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "33 Immortals weapon upgrade unlocked screen for weapon progression.",
},
],
},
twitter: {
card: "summary_large_image",
title: "33 Immortals Weapons Guide: Best Tier and Mastery",
description:
"Bow, Glaive, Crossbows, Sword, Staff, Hooks, Daggers, Scepter, unlock costs, upgrade slots and 48% Mastery explained.",
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
name: "33 Immortals Guide",
item: `${siteUrl}/33-immortals`,
},
{
"@type": "ListItem",
position: 3,
name: "Weapons Unlock and Upgrades Guide",
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
"33 Immortals Weapons Guide: Best Weapon Tier Signals, Unlock Costs, Core Resource Loops, Upgrade Slots and 48% Weapon Mastery",
description:
"A player-focused 33 Immortals weapons guide for 1.0 covering the best weapon tier signal, Bow of Hope recall, Glaive of Temperance meter and spacing, Crossbows of Pride brand and Pride spending, Sword of Justice resource management, Staff of Sloth control, Hooks of Gluttony pull and parry timing, Daggers of Greed Takedown commitment, Scepter of Charity support and Blind utility, weapon unlock costs, second upgrade slot cost, Weapon Shrine planning, Master Gauges, known mastery stat signals, upgrade priority, common weapon mistakes and the 48% full-mastery damage goal.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-17",
dateModified: "2026-06-17",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "33 Immortals" },
{ "@type": "Thing", name: "33 Immortals weapons" },
{ "@type": "Thing", name: "33 Immortals weapons guide" },
{ "@type": "Thing", name: "33 Immortals best weapon" },
{ "@type": "Thing", name: "33 Immortals weapon tier list" },
{ "@type": "Thing", name: "33 Immortals Bow of Hope" },
{ "@type": "Thing", name: "33 Immortals Glaive of Temperance" },
{ "@type": "Thing", name: "33 Immortals Crossbows of Pride" },
{ "@type": "Thing", name: "33 Immortals Sword of Justice" },
{ "@type": "Thing", name: "33 Immortals Staff of Sloth" },
{ "@type": "Thing", name: "33 Immortals Hooks of Gluttony" },
{ "@type": "Thing", name: "33 Immortals Daggers of Greed" },
{ "@type": "Thing", name: "33 Immortals Scepter of Charity" },
{ "@type": "Thing", name: "33 Immortals weapon unlocks" },
{ "@type": "Thing", name: "33 Immortals Weapon Shrine" },
{ "@type": "Thing", name: "33 Immortals weapon upgrades" },
{ "@type": "Thing", name: "33 Immortals second weapon upgrade slot" },
{ "@type": "Thing", name: "33 Immortals Weapon Mastery" },
{ "@type": "Thing", name: "33 Immortals Master Gauge" },
{ "@type": "Thing", name: "33 Immortals 48% mastery damage" },
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
name: "What is the best weapon in 33 Immortals 1.0?",
acceptedAnswer: {
"@type": "Answer",
text:
"The clearest current high-ceiling signal is Bow of Hope, Glaive of Temperance and Crossbows of Pride, but the best weapon is still the one whose resource loop you can execute consistently.",
},
},
{
"@type": "Question",
name: "What weapon should I unlock first in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"Most new players should start with Bow of Hope or Crossbows of Pride for safer ranged learning, then test Sword, Staff, Scepter, Glaive, Hooks or Daggers based on role.",
},
},
{
"@type": "Question",
name: "Is Bow of Hope good in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. Bow of Hope is one of the safest strong picks because recall gives ranged damage, stun value and a repeatable learning loop.",
},
},
{
"@type": "Question",
name: "Is Glaive of Temperance worth learning in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes, if you want a high-ceiling melee weapon. Glaive needs Temperance meter control and spacing, so it becomes stronger after practice.",
},
},
{
"@type": "Question",
name: "Are Crossbows of Pride beginner-friendly?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. Crossbows of Pride are strong because the loop is clear: brand first, build Pride, then spend Pride with Heavy Bolt.",
},
},
{
"@type": "Question",
name: "Is Sword of Justice good for beginners?",
acceptedAnswer: {
"@type": "Answer",
text:
"Sword of Justice is good if you want frontline control. Learn to spend Justice on Guard when safety matters and Heavy Slash when the fight is safe.",
},
},
{
"@type": "Question",
name: "Is Scepter of Charity good in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"Scepter of Charity is a 1.0 support-specialist weapon built around Blind and safer mid-to-long range team value. Its final tier ranking is still being assessed.",
},
},
{
"@type": "Question",
name: "How much do weapons cost to unlock in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"As of 1.0, all weapons cost 50 Eternal Shards to unlock. Scepter of Charity is unlocked at its Weapon Shrine in Dark Woods for 50 Eternal Shards.",
},
},
{
"@type": "Question",
name: "How much does the second weapon upgrade slot cost?",
acceptedAnswer: {
"@type": "Answer",
text:
"The first weapon upgrade slot is free. The second weapon upgrade slot costs 1000 Eternal Shards and 5 Paragons.",
},
},
{
"@type": "Question",
name: "How does Weapon Mastery work in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"Weapon upgrades have a Master Gauge. Each mastered upgrade gives 1% damage, and mastering all 48 Weapon Upgrades gives 48% damage.",
},
},
{
"@type": "Question",
name: "Should I follow a 33 Immortals weapon tier list?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use tier lists as a signal, not as a command. A top-tier weapon only helps if you understand and execute its resource loop.",
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
/> <GuideArticlePage
       title="Choose the Best 33 Immortals Weapon by Loop, Not Tier Alone"
       description="Compare 1.0 tier signals, unlock costs, Bow recall, Glaive Temperance, Crossbows Pride, Sword Justice, Scepter support, upgrade slots and Weapon Mastery."
       gameTitle="33 Immortals"
       gameHref="/33-immortals"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 17, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <WeaponsUnlockUpgradesGuideContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
