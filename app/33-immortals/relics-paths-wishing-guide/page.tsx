import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import RelicsPathsWishingGuideContent from "@/data/33-immortals/relics-paths-wishing-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/33-immortals/relics-paths-wishing-guide`;

const imageUrls = [
`${siteUrl}/images/33-immortals/33-immortals-relic-drop-new-relic-unlocked.webp`,
`${siteUrl}/images/33-immortals/33-immortals-relic-choice-reroll-inner-fire.webp`,
`${siteUrl}/images/33-immortals/33-immortals-relic-healing-orbs-build.webp`,
`${siteUrl}/images/33-immortals/33-immortals-relic-collection-unlocked.webp`,
`${siteUrl}/images/33-immortals/33-immortals-legendary-boss-relic-reward.webp`,
];

const toc = [
{ id: "relics-guide", label: "Relics guide" },
{ id: "path-of-honor", label: "Path of Honor" },
{ id: "how-relics-work", label: "How Relics work" },
{ id: "key-relic-names", label: "Key Relic names" },
{ id: "action-boost-duo-relics", label: "Action, Boost and Duo" },
{ id: "duo-relic-targets", label: "Duo Relic targets" },
{ id: "best-relic-paths", label: "Best Relic Paths" },
{ id: "relics-by-weapon", label: "Relics by weapon" },
{ id: "reroll-relics", label: "When to reroll" },
{ id: "upgrade-dismantle-relics", label: "Upgrade or dismantle" },
{ id: "relic-tokens", label: "Relic Tokens" },
{ id: "relic-wishing", label: "Relic Wishing" },
{ id: "legendary-relics", label: "Boss Relics" },
{ id: "common-relic-mistakes", label: "Common mistakes" },
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
href: "/33-immortals/weapons-unlock-upgrades-guide",
label: "33 Immortals Weapons Unlock and Upgrades Guide",
},
{
href: "/33-immortals/bosses-guide",
label: "33 Immortals Boss Mechanics Guide",
},
{
href: "/33-immortals/achievements-guide",
label: "33 Immortals Achievements Guide",
},
];

export const metadata: Metadata = {
title: "33 Immortals Relics Guide: Paths, Wishing & Key Names",
description:
"Choose better 33 Immortals relics with Path of Honor tips, key relic names, Duo targets, Wishing rules, rerolls, dismantle choices and boss rewards.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"33 Immortals Relics Guide: Paths, Wishing, Key Names and Boss Rewards",
description:
"Learn 33 Immortals Relic Paths, Path of Honor, Action Relics, Boost Relics, Duo targets, key relic names, Wishing rules, Bones rerolls, dismantle choices, Relic Tokens and boss rewards.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "33 Immortals new relic unlocked message during a run.",
},
],
},
twitter: {
card: "summary_large_image",
title: "33 Immortals Relics Guide",
description:
"Relic Paths, Path of Honor, key relic names, Duo targets, Wishing rules, rerolls, dismantle choices and boss rewards.",
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
name: "Relics, Paths and Wishing Guide",
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
"33 Immortals Relics Guide: Relic Paths, Path of Honor, Key Relic Names, Wishing, Rerolls, Dismantle Choices and Boss Rewards",
description:
"A player-focused 33 Immortals relics guide for the 1.0 Relic system. The guide explains Relic Paths, Path of Honor, Unity, Malice, Vainglory, Revenge and Mercy, Action Relics, Boost Relics, Duo Relics, key relic names such as Bloodstained Stole, Emerald of Princes, Seraphic Tear, Tusk Of Ciriatto, Preserved Heretic Head and Coffer of the Devoted, how to choose relics by weapon, when to reroll with Bones, when to upgrade or dismantle relics, how Relic Tokens affect long-term collection, how Relic Wishing works, which Wishing mistakes to avoid, and how to read boss relic rewards such as Empyreal Light, Polished Monstrance, Shrunken Papal Heart and Wax Death Mask.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-17",
dateModified: "2026-06-17",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "33 Immortals" },
{ "@type": "Thing", name: "33 Immortals relics" },
{ "@type": "Thing", name: "33 Immortals relic guide" },
{ "@type": "Thing", name: "33 Immortals Relic Paths" },
{ "@type": "Thing", name: "33 Immortals Path of Honor" },
{ "@type": "Thing", name: "33 Immortals Path of Unity" },
{ "@type": "Thing", name: "33 Immortals Path of Malice" },
{ "@type": "Thing", name: "33 Immortals Path of Vainglory" },
{ "@type": "Thing", name: "33 Immortals Path of Revenge" },
{ "@type": "Thing", name: "33 Immortals Path of Mercy" },
{ "@type": "Thing", name: "33 Immortals Action Relics" },
{ "@type": "Thing", name: "33 Immortals Boost Relics" },
{ "@type": "Thing", name: "33 Immortals Duo Relics" },
{ "@type": "Thing", name: "33 Immortals Relic Wishing" },
{ "@type": "Thing", name: "33 Immortals Wishing rules" },
{ "@type": "Thing", name: "33 Immortals Relic Tokens" },
{ "@type": "Thing", name: "33 Immortals relic reroll" },
{ "@type": "Thing", name: "33 Immortals relic dismantle" },
{ "@type": "Thing", name: "33 Immortals boss relics" },
{ "@type": "Thing", name: "33 Immortals Bloodstained Stole" },
{ "@type": "Thing", name: "33 Immortals Emerald of Princes" },
{ "@type": "Thing", name: "33 Immortals Seraphic Tear" },
{ "@type": "Thing", name: "33 Immortals Tusk Of Ciriatto" },
{ "@type": "Thing", name: "33 Immortals Preserved Heretic Head" },
{ "@type": "Thing", name: "33 Immortals Coffer of the Devoted" },
{ "@type": "Thing", name: "33 Immortals Empyreal Light" },
{ "@type": "Thing", name: "33 Immortals Shrunken Papal Heart" },
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
name: "What is the best Relic Path in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"For most players in 1.0, Path of Honor is the safest starting foundation because Inner Fire supports both damage and survival. Unity is also strong for Co-op Power and team-focused builds.",
},
},
{
"@type": "Question",
name: "Why is Path of Honor good in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"Path of Honor is strong when your weapon can trigger its effects consistently and your run needs safer damage scaling. It also connects well with many relic decisions and team-focused builds.",
},
},
{
"@type": "Question",
name: "Should I always pick the highest rarity relic in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. A lower rarity relic that supports your weapon, Path or survival plan can be better than a higher rarity relic that does not fit the run.",
},
},
{
"@type": "Question",
name: "When should I reroll Relics in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"Reroll when both relic choices are bad for your build and you still have enough Bones for healing, keys, upgrades or the next objective. Do not reroll yourself into a weak Chamber entry.",
},
},
{
"@type": "Question",
name: "When should I dismantle a Relic in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"Consider dismantling when the relic is clearly off-path, does not trigger with your weapon, and is not worth upgrading or keeping for the next fight.",
},
},
{
"@type": "Question",
name: "How do Duo Relics work in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"Duo Relics combine two Path directions. They are strongest after your first Path already works, so do not chase a Duo Relic before your base build is stable.",
},
},
{
"@type": "Question",
name: "How does Relic Wishing work in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"Relic Wishing helps you aim for a specific Action Relic before a run. As of 1.0, it costs Eternal Shards and should be used only when you know the weapon, Path and role you want to build around.",
},
},
{
"@type": "Question",
name: "How do I complete Prayer Answered in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"Wish for a relic, then find and equip that relic in the Beyond. Pick a Wish target you can recognize during the run so you do not reroll or skip it by mistake.",
},
},
{
"@type": "Question",
name: "What are Relic Tokens for in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"Relic Tokens help unlock new relics for future runs. They matter for long-term build variety, Treasure Hunter and Collector progress.",
},
},
{
"@type": "Question",
name: "What are boss relics in 33 Immortals?",
acceptedAnswer: {
"@type": "Answer",
text:
"Boss relics are run-changing rewards that can improve boss damage, Co-Strike value, healing, Co-op Power recovery, status effects or team survival during boss routes.",
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
       title="Build Better 33 Immortals Relic Paths Without Wasting Bones"
       description="Learn how to read key Relic names, choose Path of Honor or other 1.0 Paths, use Wishing, reroll safely, dismantle bad relics and chase boss rewards."
       gameTitle="33 Immortals"
       gameHref="/33-immortals"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 17, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <RelicsPathsWishingGuideContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
