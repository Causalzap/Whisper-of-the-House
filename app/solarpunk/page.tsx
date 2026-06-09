import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import SolarpunkGuideContent from "@/data/solarpunk/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/solarpunk`;

const imageUrls = [
`${siteUrl}/images/solarpunk/solarpunk-standard-soft-mode-choice.webp`,
`${siteUrl}/images/solarpunk/solarpunk-first-island-basic-resources.webp`,
`${siteUrl}/images/solarpunk/solarpunk-first-research-table.webp`,
`${siteUrl}/images/solarpunk/solarpunk-crashed-airship-component-wreck.webp`,
`${siteUrl}/images/solarpunk/solarpunk-energy-workbench-unlocks.webp`,
`${siteUrl}/images/solarpunk/solarpunk-wheat-quartz-islands-after-upgrade.webp`,
];

const toc = [
{ id: "solarpunk-guide-hub", label: "Guide hub" },
{ id: "which-guide-to-read", label: "Which guide" },
{ id: "recommended-progression-route", label: "Progression route" },
{ id: "first-island-start", label: "First island" },
{ id: "research-and-map", label: "Research and Map" },
{ id: "airship-progression", label: "Airship" },
{ id: "energy-and-automation", label: "Energy" },
{ id: "farming-animals-eggs", label: "Farming and eggs" },
{ id: "stuck-checklist", label: "Stuck checklist" },
{ id: "common-mistakes", label: "Mistakes" },
{ id: "best-guide-order", label: "Guide order" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
{
href: "/solarpunk/beginners-guide",
label: "Solarpunk Beginner Guide",
},
{
href: "/solarpunk/research-progression-guide",
label: "Solarpunk Research Progression Guide",
},
{
href: "/solarpunk/airship-guide",
label: "Solarpunk Airship Guide",
},
{
href: "/solarpunk/energy-system-guide",
label: "Solarpunk Energy System Guide",
},
{
href: "/solarpunk/farming-guide",
label: "Solarpunk Farming Guide",
},
];

export const metadata: Metadata = {
title: "Solarpunk Guide: Beginner, Airship, Energy & Farming",
description:
"Start Solarpunk with first-island tips, airship upgrades, power fixes, wheat, eggs, research tiers, Map unlock and stuck progression gates.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Solarpunk Guide Hub: Beginner Route, Airship, Energy, Farming and Research",
description:
"A Solarpunk guide hub for first-island survival, Research Table tiers, Map unlock, Airship Dock, Crashed Airship Component, 32 Copper range upgrade, power systems, Wheat, chickens, eggs, and stuck progression gates.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Solarpunk new world screen showing Standard and Soft mode choice.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Solarpunk Guide Hub",
description:
"Find the right Solarpunk guide for first island setup, airship upgrades, power, farming, research, and stuck progression gates.",
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
name: "Solarpunk Guide",
item: pageUrl,
},
],
},
{
"@type": ["CollectionPage", "WebPage"],
"@id": `${pageUrl}#webpage`,
url: pageUrl,
name: "Solarpunk Guide Hub",
headline:
"Solarpunk Guide Hub: Beginner Route, Airship Upgrades, Energy Systems, Farming and Research Progression",
description:
"A Solarpunk guide hub that helps players choose the right guide for their current progression problem, including first-island survival, Standard vs Soft mode, Survival Guide, Research Table tiers, Map unlock, Crashed Airship Component, Airship Dock, Traderbot, 32 Copper range upgrade, Wheat, Quartz, Silicon, Energy Workbench, Network Display, batteries, sprinklers, switches, Windmill, chickens, eggs, Animal Basics, seed packs, and common stuck points.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-09",
dateModified: "2026-06-09",
about: [
{ "@type": "VideoGame", name: "Solarpunk" },
{ "@type": "Thing", name: "Solarpunk guide" },
{ "@type": "Thing", name: "Solarpunk beginner guide" },
{ "@type": "Thing", name: "Solarpunk first island" },
{ "@type": "Thing", name: "Solarpunk Standard vs Soft mode" },
{ "@type": "Thing", name: "Solarpunk Research Table" },
{ "@type": "Thing", name: "Solarpunk Map unlock" },
{ "@type": "Thing", name: "Solarpunk Traderbot" },
{ "@type": "Thing", name: "Solarpunk Airship Dock" },
{ "@type": "Thing", name: "Solarpunk Crashed Airship Component" },
{ "@type": "Thing", name: "Solarpunk airship guide" },
{ "@type": "Thing", name: "Solarpunk energy system" },
{ "@type": "Thing", name: "Solarpunk farming guide" },
{ "@type": "Thing", name: "Solarpunk Wheat" },
{ "@type": "Thing", name: "Solarpunk Quartz" },
{ "@type": "Thing", name: "Solarpunk Silicon" },
{ "@type": "Thing", name: "Solarpunk chickens" },
{ "@type": "Thing", name: "Solarpunk eggs" },
{ "@type": "Thing", name: "Solarpunk research progression" },
{ "@type": "Thing", name: "Solarpunk stuck progression" },
],
publisher: {
"@type": "Organization",
name: "Whisper of the House",
url: siteUrl,
},
mainEntity: {
"@type": "ItemList",
"@id": `${pageUrl}#guides`,
name: "Solarpunk Guide Cluster",
itemListElement: [
{
"@type": "ListItem",
position: 1,
name: "Solarpunk Beginner Guide",
url: `${siteUrl}/solarpunk/beginners-guide`,
},
{
"@type": "ListItem",
position: 2,
name: "Solarpunk Research Progression Guide",
url: `${siteUrl}/solarpunk/research-progression-guide`,
},
{
"@type": "ListItem",
position: 3,
name: "Solarpunk Airship Guide",
url: `${siteUrl}/solarpunk/airship-guide`,
},
{
"@type": "ListItem",
position: 4,
name: "Solarpunk Energy System Guide",
url: `${siteUrl}/solarpunk/energy-system-guide`,
},
{
"@type": "ListItem",
position: 5,
name: "Solarpunk Farming Guide",
url: `${siteUrl}/solarpunk/farming-guide`,
},
],
},
},
{
"@type": "FAQPage",
"@id": `${pageUrl}#faq`,
mainEntity: [
{
"@type": "Question",
name: "What should I do first in Solarpunk?",
acceptedAnswer: {
"@type": "Answer",
text:
"Collect berries, sticks, stones, wood, cotton, and seeds. Then craft basic tools, plant berries and cotton, craft the Survival Guide, build the Research Table, make a Rain Collector, and set up storage and a Bed.",
},
},
{
"@type": "Question",
name: "Should I choose Standard or Soft mode?",
acceptedAnswer: {
"@type": "Answer",
text:
"Choose Standard if you want the intended survival pressure. Choose Soft if you mainly want relaxed building, farming, decorating, and exploration.",
},
},
{
"@type": "Question",
name: "How do I unlock the Map in Solarpunk?",
acceptedAnswer: {
"@type": "Answer",
text:
"Unlock Research Table Tier 2, research Map, then craft it with 2 Cloth. Keep cotton growing because Cloth is needed for Map, Bed, Airship Dock, and other early progression steps.",
},
},
{
"@type": "Question",
name: "How do I build the first airship?",
acceptedAnswer: {
"@type": "Answer",
text:
"Collect the Crashed Airship Component from the wreck, unlock the Airship Dock, place the dock, then build the first airship from the dock panel.",
},
},
{
"@type": "Question",
name: "Why did my airship range not expand?",
acceptedAnswer: {
"@type": "Answer",
text:
"You probably completed the Traderbot upgrade trade but did not apply the upgrade at your dock. Return home, dock the airship, open the dock panel, and click Upgrade.",
},
},
{
"@type": "Question",
name: "Where do I find Wheat?",
acceptedAnswer: {
"@type": "Answer",
text:
"After the first airship range upgrade, search the second ring for wheat islands. Bring home both Wheat and seeds, then grow a surplus before feeding animals seriously.",
},
},
{
"@type": "Question",
name: "How do I get silicon?",
acceptedAnswer: {
"@type": "Answer",
text:
"Mine quartz after the first airship range upgrade, bring it home, and smelt quartz into silicon.",
},
},
{
"@type": "Question",
name: "Why is my power not working?",
acceptedAnswer: {
"@type": "Answer",
text:
"Your grid may be out of sunlight, overloaded, missing stored power, or split into separate cable networks. Build a Network Display, check generation and load, then add batteries, switches, or more stable generation as needed.",
},
},
{
"@type": "Question",
name: "Should I choose Battery or Animal Transport first?",
acceptedAnswer: {
"@type": "Answer",
text:
"Choose Battery first if your base already has power problems from drills, sprinklers, solar panels, or Advanced Dock. Choose Animal Transport first only if your grid is stable and moving animals is your immediate blocker.",
},
},
{
"@type": "Question",
name: "Why are my chickens not producing eggs?",
acceptedAnswer: {
"@type": "Answer",
text:
"Check the progression order first. If chicken hunger refuses to reach 10/10, stop wasting animal feed and finish the 10 Wheat and 10 Bread Traderbot gates. Then check feed, water, shelter, spacing, and happiness.",
},
},
{
"@type": "Question",
name: "What should I read if I am completely stuck?",
acceptedAnswer: {
"@type": "Answer",
text:
"Read the Research Progression Guide and use the resource gate table. Most stuck points are caused by one missing gate material, trade item, airship upgrade step, or blueprint tier.",
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
       title="Find the Right Solarpunk Guide for Your Next Progression Gate"
       description="Jump to the right route for first island survival, research tiers, airship upgrades, energy systems, farming, eggs, and stuck points."
       gameTitle="Solarpunk"
       gameHref="/solarpunk"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 9, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <SolarpunkGuideContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
