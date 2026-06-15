import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import EnergySystemGuideContent from "@/data/solarpunk/energy-system-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/solarpunk/energy-system-guide`;

const imageUrls = [
`${siteUrl}/images/solarpunk/solarpunk-energy-workbench-unlocks.webp`,
`${siteUrl}/images/solarpunk/solarpunk-network-display-power-balance.webp`,
`${siteUrl}/images/solarpunk/solarpunk-drill-120-power-warning.webp`,
`${siteUrl}/images/solarpunk/solarpunk-battery-tier-2-unlock.webp`,
`${siteUrl}/images/solarpunk/solarpunk-sprinkler-eight-plots.webp`,
`${siteUrl}/images/solarpunk/solarpunk-copper-island-drill-outpost.webp`,
`${siteUrl}/images/solarpunk/solarpunk-windmill-tier-3-unlock.webp`,
];

const toc = [
{ id: "solarpunk-energy-system-guide", label: "Energy guide" },
{ id: "power-values", label: "Power values" },
{ id: "what-to-build-first", label: "Build order" },
{ id: "why-power-stops", label: "Power problems" },
{ id: "use-network-display", label: "Network Display" },
{ id: "early-best-energy-setup", label: "Early setup" },
{ id: "solar-panel-placement", label: "Panel placement" },
{ id: "solar-panel-vs-generator", label: "Solar vs generator" },
{ id: "drill-power", label: "Drill power" },
{ id: "battery-setup", label: "Batteries" },
{ id: "battery-priority", label: "Unlock priorities" },
{ id: "sprinklers-power", label: "Sprinklers" },
{ id: "switches-logic", label: "Switches" },
{ id: "remote-mining-outpost", label: "Mining outpost" },
{ id: "windmill-priority", label: "Windmills" },
{ id: "recommended-power-route", label: "Power route" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
{
href: "/solarpunk",
label: "Solarpunk Guide Hub",
},
{
href: "/solarpunk/beginners-guide",
label: "Solarpunk Beginner Guide",
},
{
href: "/solarpunk/airship-guide",
label: "Solarpunk Airship Guide",
},
{
href: "/solarpunk/research-progression-guide",
label: "Solarpunk Research Progression Guide",
},
{
href: "/solarpunk/farming-guide",
label: "Solarpunk Farming Guide",
},
{
  href: "/solarpunk/animals-guide",
  label: "Solarpunk Animals Guide",
},
];

export const metadata: Metadata = {
title: "Solarpunk Energy Guide: Power, Drill, Battery & Windmill",
description:
"Fix Solarpunk power issues with Network Display, solar panels, drill load, batteries, sprinklers, switches, mining outposts and windmills.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Solarpunk Energy Guide: Solar Panels, Drill Power, Batteries, Switches and Windmills",
description:
"Learn how Solarpunk power works, why machines shut off, how to read the Network Display, how much load drills and sprinklers add, when to build batteries, how to place solar panels, how to stop sprinklers wasting power, and how to set up remote mining outposts.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Solarpunk Energy Workbench showing solar panels, cables, Network Display and drill unlocks.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Solarpunk Energy System Guide",
description:
"Use Network Display, solar panels, batteries, switches and windmills to fix drills, sprinklers and power overloads.",
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
item: `${siteUrl}/solarpunk`,
},
{
"@type": "ListItem",
position: 3,
name: "Solarpunk Energy System Guide",
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
"Solarpunk Energy System Guide: How to Fix Power Problems, Run Drills, Use Batteries and Build a Stable Grid",
description:
"A player-focused Solarpunk energy system guide explaining how power works, what to build after the Energy Workbench, why solar panels stop at night, why bad weather can break weak grids, how to use the Network Display, how to plan solar panel and windmill placement, how drill power affects early automation, when to build batteries, why sprinklers can drain stored power, how to use switches and logic to control demand, how to set up a remote mining outpost, when Windmill becomes a priority, and how to avoid common solar, battery, sprinkler, drill, Advanced Dock and cable network mistakes.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-09",
dateModified: "2026-06-09",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "Solarpunk" },
{ "@type": "Thing", name: "Solarpunk energy system" },
{ "@type": "Thing", name: "Solarpunk energy guide" },
{ "@type": "Thing", name: "Solarpunk power not working" },
{ "@type": "Thing", name: "Solarpunk Network Display" },
{ "@type": "Thing", name: "Solarpunk Energy Workbench" },
{ "@type": "Thing", name: "Solarpunk solar panels" },
{ "@type": "Thing", name: "Solarpunk solar panel placement" },
{ "@type": "Thing", name: "Solarpunk generator" },
{ "@type": "Thing", name: "Solarpunk drill power" },
{ "@type": "Thing", name: "Solarpunk how many solar panels for drill" },
{ "@type": "Thing", name: "Solarpunk battery" },
{ "@type": "Thing", name: "Solarpunk battery storage" },
{ "@type": "Thing", name: "Solarpunk sprinklers power" },
{ "@type": "Thing", name: "Solarpunk switches" },
{ "@type": "Thing", name: "Solarpunk logic blocks" },
{ "@type": "Thing", name: "Solarpunk mining outpost" },
{ "@type": "Thing", name: "Solarpunk windmill" },
{ "@type": "Thing", name: "Solarpunk Advanced Dock power" },
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
name: "Why is my Solarpunk power not working?",
acceptedAnswer: {
"@type": "Answer",
text:
"Most of the time, your grid is either out of sunlight, overloaded, missing stored power, or split into separate cable networks. Build a Network Display, check generation and consumption, then turn off non-essential machines.",
},
},
{
"@type": "Question",
name: "Why do solar panels stop at night?",
acceptedAnswer: {
"@type": "Answer",
text:
"Solar panels need sunlight. At night, they stop producing energy. Sleep through the night early on, then build batteries later so your machines can keep running after sunset.",
},
},
{
"@type": "Question",
name: "Why are my solar panels not producing enough?",
acceptedAnswer: {
"@type": "Answer",
text:
"Check placement first. Solar panels should be in open sky, away from roofs, tall walls, and cramped blocked corners. Staggering panels also makes expansion cleaner.",
},
},
{
"@type": "Question",
name: "How much power does a solar panel make?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use the Network Display to check your current build and current conditions. Solar output can change with sunlight, weather, and time of day, so do not plan only from one moment of output.",
},
},
{
"@type": "Question",
name: "How much power does a drill need?",
acceptedAnswer: {
"@type": "Answer",
text:
"A drill is a heavy early load. Check the drill's power requirement on your Network Display before connecting it to the same weak grid as sprinklers or an Advanced Dock.",
},
},
{
"@type": "Question",
name: "How many solar panels do I need for a drill?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use the Network Display to compare your solar generation against the drill's load. If the drill overloads the grid, reduce optional machines, add more generation, or wait until you have batteries.",
},
},
{
"@type": "Question",
name: "How much power does a sprinkler use?",
acceptedAnswer: {
"@type": "Answer",
text:
"Sprinklers add a constant power load while active. Check the Network Display after each new sprinkler and avoid running a large sprinkler field on the same weak grid as a drill.",
},
},
{
"@type": "Question",
name: "How much storage does a battery have?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use the Battery panel or Network Display to confirm the storage value in your current build. Batteries are most useful once night, rain, drills, sprinklers, or the Advanced Dock begin interrupting your routine.",
},
},
{
"@type": "Question",
name: "Should I build Battery or Animal Transport first?",
acceptedAnswer: {
"@type": "Answer",
text:
"If your machines already shut off, build Battery first. Animal Transport is useful, but Battery solves the power instability that affects drills, sprinklers, docks, and other powered systems.",
},
},
{
"@type": "Question",
name: "What does the Network Display do?",
acceptedAnswer: {
"@type": "Answer",
text:
"The Network Display helps you see how much power your grid is generating, consuming, and storing. Build it early so you stop guessing why machines turn off.",
},
},
{
"@type": "Question",
name: "How do I stop sprinklers from wasting power?",
acceptedAnswer: {
"@type": "Answer",
text:
"Put sprinklers on their own cable branch with a switch. Turn them off during rain or when your battery storage is low.",
},
},
{
"@type": "Question",
name: "How do I control which machines get power?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use switches to separate branches of your grid. Put sprinklers, drills, or optional devices like the Advanced Dock on controllable lines so they do not all compete for power at once.",
},
},
{
"@type": "Question",
name: "How do I set up a mining outpost in Solarpunk?",
acceptedAnswer: {
"@type": "Answer",
text:
"Bring a drill, local generation, cables, a battery if unlocked, food, water, and repair supplies. Keep the outpost on its own local grid so the drill is easier to power and troubleshoot.",
},
},
{
"@type": "Question",
name: "Is the Advanced Dock worth it?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes, but not before your base has stable power. The Advanced Dock uses power, so adding it too early can make an already strained grid worse.",
},
},
{
"@type": "Question",
name: "When should I build windmills?",
acceptedAnswer: {
"@type": "Answer",
text:
"Build windmills after Tier 3 when your base is too large for simple solar and batteries. Windmills help diversify your energy sources and reduce bad-weather problems.",
},
},
{
"@type": "Question",
name: "Should I use one big power grid or separate networks?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use one main grid early because it is easier to read and troubleshoot. Split into separate networks later when you know exactly what each area needs.",
},
},
{
"@type": "Question",
name: "What should I read next?",
acceptedAnswer: {
"@type": "Answer",
text:
"Read the Airship Guide if you need copper, wheat, silicon, or more islands. Read the Research Progression Guide if you are choosing between Battery, Advanced Dock, Animal Transport, Windmill, and other Traderbot unlocks.",
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
       title="Fix Your Power Grid Before Drills and Sprinklers Break It"
       description="Use Network Display, solar panels, batteries, switches and windmills to keep drills, sprinklers and docks running."
       gameTitle="Solarpunk"
       gameHref="/solarpunk"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 9, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <EnergySystemGuideContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
