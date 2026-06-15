import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ResearchProgressionGuideContent from "@/data/solarpunk/research-progression-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/solarpunk/research-progression-guide`;

const imageUrls = [
`${siteUrl}/images/solarpunk/solarpunk-first-research-table.webp`,
`${siteUrl}/images/solarpunk/solarpunk-traderbot-first-blueprints.webp`,
];

const toc = [
{ id: "solarpunk-research-progression-guide", label: "Research guide" },
{ id: "research-table-tier-requirements", label: "Tier requirements" },
{ id: "starter-research-priorities", label: "Starter priorities" },
{ id: "tier-2-unlocks", label: "Tier 2 and Map" },
{ id: "cotton-night-tip", label: "Cotton tip" },
{ id: "tier-3-unlocks", label: "Tier 3" },
{ id: "traderbot-blueprint-tiers", label: "Blueprint tiers" },
{ id: "traderbot-trade-route", label: "Traderbot route" },
{ id: "resource-gates", label: "Resource gates" },
{ id: "battery-vs-animal-transport", label: "Battery vs Animal Transport" },
{ id: "important-research-decisions", label: "Research decisions" },
{ id: "tier-5-animal-basics", label: "Animal Basics" },
{ id: "tier-6-growbox-cooking-seedspack", label: "Tier 6" },
{ id: "recommended-research-route", label: "Research route" },
{ id: "mistakes", label: "Mistakes" },
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
href: "/solarpunk/energy-system-guide",
label: "Solarpunk Energy System Guide",
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
title: "Solarpunk Research Guide: Tiers, Map & Unlock Route",
description:
"Unlock Solarpunk research tiers, craft the Map, pick Traderbot blueprints, fix resource gates, and choose Battery vs Animal Transport.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Solarpunk Research Guide: Tier Requirements, Map Unlock, Traderbot Blueprints and Resource Gates",
description:
"Learn how Solarpunk research progression works, including Research Table tier materials, Map unlock, cotton and cloth bottlenecks, Traderbot blueprint tiers, Battery vs Animal Transport, Animal Basics, Windmill, and what resource is blocking your next unlock.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Solarpunk Research Table used to unlock early survival and progression recipes.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Solarpunk Research Progression Guide",
description:
"Check research tier materials, unlock Map, follow Traderbot blueprints, and fix stuck progression gates.",
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
name: "Solarpunk Research Progression Guide",
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
"Solarpunk Research Progression Guide: Tier Requirements, Map Unlock, Traderbot Blueprints and Resource Gates",
description:
"A player-focused Solarpunk research progression guide explaining how Research Table tiers and Traderbot blueprint tiers work, what materials unlock each Research Table tier, how to unlock and craft the Map with 2 Cloth after Tier 2, why cotton and cloth can block early progression, which starter research unlocks to prioritize, when to research Airship Dock, how Traderbot trades lead into Energy Workbench, solar power, Battery, Animal Transport, Windmill and drones, why Battery is usually safer than Animal Transport if your power grid is unstable, how to use resource gates to find what is blocking your save, and how to avoid spending Wheat, eggs, Cobalt, Sunflower or other gate materials too early.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-09",
dateModified: "2026-06-09",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "Solarpunk" },
{ "@type": "Thing", name: "Solarpunk research guide" },
{ "@type": "Thing", name: "Solarpunk research progression" },
{ "@type": "Thing", name: "Solarpunk Research Table" },
{ "@type": "Thing", name: "Solarpunk Research Table tiers" },
{ "@type": "Thing", name: "Solarpunk Tier 2 research" },
{ "@type": "Thing", name: "Solarpunk Tier 3 research" },
{ "@type": "Thing", name: "Solarpunk how to unlock Tier 2" },
{ "@type": "Thing", name: "Solarpunk how to unlock Map" },
{ "@type": "Thing", name: "Solarpunk Map" },
{ "@type": "Thing", name: "Solarpunk Cloth" },
{ "@type": "Thing", name: "Solarpunk cotton" },
{ "@type": "Thing", name: "Solarpunk cotton glows at night" },
{ "@type": "Thing", name: "Solarpunk Airship Dock" },
{ "@type": "Thing", name: "Solarpunk Traderbot" },
{ "@type": "Thing", name: "Solarpunk blueprint tiers" },
{ "@type": "Thing", name: "Solarpunk Energy Workbench" },
{ "@type": "Thing", name: "Solarpunk Battery" },
{ "@type": "Thing", name: "Solarpunk Animal Transport" },
{ "@type": "Thing", name: "Solarpunk Battery vs Animal Transport" },
{ "@type": "Thing", name: "Solarpunk Animal Basics" },
{ "@type": "Thing", name: "Solarpunk Wheat" },
{ "@type": "Thing", name: "Solarpunk Silicon" },
{ "@type": "Thing", name: "Solarpunk Cobalt" },
{ "@type": "Thing", name: "Solarpunk Windmill" },
{ "@type": "Thing", name: "Solarpunk resource gates" },
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
name: "How do I unlock Tier 2 at the Research Table?",
acceptedAnswer: {
"@type": "Answer",
text:
"Unlock Tier 2 with 1 Build-Hammer and 1 Beeswax. Build beehives early so Beeswax does not delay your first major research tier.",
},
},
{
"@type": "Question",
name: "How do I unlock Tier 3 at the Research Table?",
acceptedAnswer: {
"@type": "Answer",
text:
"Unlock Tier 3 with 1 Iron Bar. Mine iron, process it into an Iron Bar, then use it at the Research Table.",
},
},
{
"@type": "Question",
name: "How do I unlock Tier 4, Tier 5, and Tier 6?",
acceptedAnswer: {
"@type": "Answer",
text:
"Tier 4 needs 1 Copper, Tier 5 needs 1 Wheat, and Tier 6 needs 1 Sunflower. These tier gates follow your exploration route.",
},
},
{
"@type": "Question",
name: "How do I unlock the Map in Solarpunk?",
acceptedAnswer: {
"@type": "Answer",
text:
"Unlock Research Table Tier 2, research Map, then craft it with 2 Cloth. Keep cotton growing because Cloth is needed for Map, Bed, Airship Dock, and other progression steps.",
},
},
{
"@type": "Question",
name: "Why can't I find cotton on my first island?",
acceptedAnswer: {
"@type": "Answer",
text:
"Cotton is easier to spot at night because it glows in the dark. Check your starter island again after sunset if you are short on cotton or need more Cloth.",
},
},
{
"@type": "Question",
name: "What should I research first?",
acceptedAnswer: {
"@type": "Answer",
text:
"Start with Rain Collector, Chest, Beehive, and Bed. These stabilize water, storage, Beeswax, and sleep before you chase Airship Dock or energy systems.",
},
},
{
"@type": "Question",
name: "Should I research Map early?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. Map is one of the best Tier 2 unlocks because it gives you a proper island-ring view instead of relying only on eyesight.",
},
},
{
"@type": "Question",
name: "What should I unlock first with Traderbot blueprints?",
acceptedAnswer: {
"@type": "Answer",
text:
"Take Energy Workbench early. It opens solar panels, cables, Network Display, drills, switches, and the rest of the power route.",
},
},
{
"@type": "Question",
name: "Should I choose Battery or Animal Transport first?",
acceptedAnswer: {
"@type": "Answer",
text:
"Choose Battery first if your base already has power problems. Choose Animal Transport first only if your grid is stable and moving animals is your immediate blocker.",
},
},
{
"@type": "Question",
name: "How do I unlock Battery?",
acceptedAnswer: {
"@type": "Answer",
text:
"Push Traderbot blueprint progression to Tier 2. You need Silicon to open that tier, so find quartz after the first airship range upgrade and smelt it into Silicon.",
},
},
{
"@type": "Question",
name: "How do I unlock Windmill?",
acceptedAnswer: {
"@type": "Answer",
text:
"Windmill is part of later blueprint progression. Push toward Cobalt and blueprint Tier 3, then prioritize Windmill if your power grid is strained.",
},
},
{
"@type": "Question",
name: "I'm stuck and don't know what to do next in Solarpunk. What should I check?",
acceptedAnswer: {
"@type": "Answer",
text:
"Check the resource gate table first. Most stuck points are caused by one missing gate: Beeswax, Iron Bar, Copper, Map, Airship Dock, Silicon, Wheat, eggs, Cobalt, or Sunflower.",
},
},
{
"@type": "Question",
name: "When should I unlock Animal Basics?",
acceptedAnswer: {
"@type": "Answer",
text:
"Unlock Animal Basics after you have Wheat and can afford the Wheat cost without breaking Traderbot's 10 Wheat and 10 Bread route.",
},
},
{
"@type": "Question",
name: "What should I read next?",
acceptedAnswer: {
"@type": "Answer",
text:
"Read the Airship Guide if you need copper, wheat, quartz, silicon, eggs, or cobalt. Read the Energy System Guide if you are choosing between Battery, Advanced Dock, Animal Transport, Windmill, and other power unlocks.",
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
       title="Unlock Research Tiers Without Wasting Gate Materials"
       description="Check tier materials, unlock the Map, follow Traderbot blueprints, and find the resource blocking your next upgrade."
       gameTitle="Solarpunk"
       gameHref="/solarpunk"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 9, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <ResearchProgressionGuideContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
