import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AirshipGuideContent from "@/data/solarpunk/airship-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/solarpunk/airship-guide`;

const imageUrls = [
`${siteUrl}/images/solarpunk/solarpunk-crashed-airship-component-west-cliff.webp`,
`${siteUrl}/images/solarpunk/solarpunk-stairs-to-crashed-airship.webp`,
`${siteUrl}/images/solarpunk/solarpunk-first-airship-dock-build.webp`,
`${siteUrl}/images/solarpunk/solarpunk-first-airship-build-materials.webp`,
`${siteUrl}/images/solarpunk/solarpunk-airship-controls-first-flight.webp`,
`${siteUrl}/images/solarpunk/solarpunk-traderbot-first-blueprints.webp`,
`${siteUrl}/images/solarpunk/solarpunk-airship-upgrade-32-copper.webp`,
`${siteUrl}/images/solarpunk/solarpunk-dock-airship-upgrade-button.webp`,
`${siteUrl}/images/solarpunk/solarpunk-wheat-quartz-islands-after-upgrade.webp`,
`${siteUrl}/images/solarpunk/solarpunk-quartz-smelted-into-silicon.webp`,
`${siteUrl}/images/solarpunk/solarpunk-airship-egg-upgrade.webp`,
`${siteUrl}/images/solarpunk/solarpunk-cobalt-island-after-upgrade.webp`,
`${siteUrl}/images/solarpunk/solarpunk-advanced-dock-boost.webp`,
`${siteUrl}/images/solarpunk/solarpunk-airship-repair-kit.webp`,
];

const toc = [
{ id: "solarpunk-airship-guide", label: "Airship guide" },
{ id: "airship-milestones", label: "Milestones" },
{ id: "find-crashed-airship-parts", label: "Crashed component" },
{ id: "airship-dock-materials", label: "Dock materials" },
{ id: "first-airship-build-materials", label: "First airship" },
{ id: "before-first-flight", label: "Before flying" },
{ id: "airship-controls", label: "Controls" },
{ id: "traderbot-first-upgrade", label: "32 copper upgrade" },
{ id: "why-airship-range-not-expanding", label: "Range not expanding" },
{ id: "after-first-upgrade", label: "Wheat and quartz" },
{ id: "best-islands-to-explore", label: "Best islands" },
{ id: "egg-upgrade-cobalt", label: "Eggs and cobalt" },
{ id: "advanced-dock-boost", label: "Advanced Dock" },
{ id: "repair-and-retrieve", label: "Repair and retrieve" },
{ id: "co-op-airship", label: "Co-op airship" },
{ id: "airship-mistakes", label: "Mistakes" },
{ id: "recommended-airship-route", label: "Route" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
{
href: "/solarpunk",
label: "Solarpunk Guide Hub",
},
{
  href: "/solarpunk/animals-guide",
  label: "Solarpunk Animals Guide",
},
{
href: "/solarpunk/beginners-guide",
label: "Solarpunk Beginner Guide",
},
{
href: "/solarpunk/energy-system-guide",
label: "Solarpunk Energy System Guide",
},
{
href: "/solarpunk/research-progression-guide",
label: "Solarpunk Research Progression Guide",
},
{
href: "/solarpunk/farming-guide",
label: "Solarpunk Farming Guide",
},
];

export const metadata: Metadata = {
title: "Solarpunk Airship Guide: Build, Upgrade & Range Fix",
description:
"Build the Solarpunk airship, find crashed parts, use the dock, upgrade range with 32 copper, fix map range issues, and get wheat, quartz and cobalt.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Solarpunk Airship Guide: Crashed Parts, Dock, 32 Copper Upgrade and Range Fix",
description:
"Build your first airship in Solarpunk, find the crashed airship component, unlock the Airship Dock, use the 32 copper upgrade, fix map range issues, reach wheat and quartz islands, save eggs for the next upgrade, and push toward cobalt and Tier 3.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Solarpunk crashed airship component on the west-side cliff of the starter island.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Solarpunk Airship Guide",
description:
"Find the crashed part, build the dock, craft your first airship, upgrade with 32 copper, and fix map range problems.",
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
name: "Solarpunk Airship Guide",
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
"Solarpunk Airship Guide: How to Find the Crashed Airship Component, Build the Dock, Upgrade Range and Reach New Islands",
description:
"A player-focused Solarpunk airship guide explaining how to start the airship route, find the crashed airship component on the west-side cliff of the starter island, build stairs to reach the wreck, unlock the Airship Dock with 5 Wood, 5 Iron and 5 Cloth, build the first airship with 10 Iron, 3 Cloth and 1 Crashed Airship Component, use first flight controls, reach Traderbot, trade 32 Copper for the first airship upgrade, return to the dock to apply the upgrade, fix map range problems, find wheat and quartz after the first upgrade, smelt quartz into silicon, save 6 eggs for the next airship upgrade, reach cobalt islands, understand co-op airship ownership, use Advanced Dock boost safely, repair damaged airships, and avoid common airship progression mistakes.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-09",
dateModified: "2026-06-09",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "Solarpunk" },
{ "@type": "Thing", name: "Solarpunk airship" },
{ "@type": "Thing", name: "Solarpunk airship guide" },
{ "@type": "Thing", name: "Solarpunk how to build airship" },
{ "@type": "Thing", name: "Solarpunk crashed airship component" },
{ "@type": "Thing", name: "Solarpunk Airship Dock" },
{ "@type": "Thing", name: "Solarpunk Airship Dock materials" },
{ "@type": "Thing", name: "Solarpunk first airship materials" },
{ "@type": "Thing", name: "Solarpunk airship parts" },
{ "@type": "Thing", name: "Solarpunk 32 copper airship upgrade" },
{ "@type": "Thing", name: "Solarpunk airship range not expanding" },
{ "@type": "Thing", name: "Solarpunk Traderbot" },
{ "@type": "Thing", name: "Solarpunk wheat" },
{ "@type": "Thing", name: "Solarpunk quartz" },
{ "@type": "Thing", name: "Solarpunk silicon" },
{ "@type": "Thing", name: "Solarpunk cobalt" },
{ "@type": "Thing", name: "Solarpunk co-op airship" },
{ "@type": "Thing", name: "Solarpunk Advanced Dock" },
{ "@type": "Thing", name: "Solarpunk airship repair kit" },
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
name: "How do I start the airship route in Solarpunk?",
acceptedAnswer: {
"@type": "Answer",
text:
"Wait for the crashed-airship smoke, build stairs up the starter island's west-side cliff, collect the Crashed Airship Component, then continue toward the Airship Dock at the Research Table.",
},
},
{
"@type": "Question",
name: "Where is the crashed airship in Solarpunk?",
acceptedAnswer: {
"@type": "Answer",
text:
"The crashed airship is on the west-side cliff of the starter island. It may not be visible immediately. Progress through the early tasks until the smoke appears, then use stairs to climb up.",
},
},
{
"@type": "Question",
name: "How do I get Airship Parts in Solarpunk?",
acceptedAnswer: {
"@type": "Answer",
text:
"For the first airship, you need the Crashed Airship Component from the wreck on the starter island's west-side cliff. Build stairs to reach the wreck, collect the component, then return to your dock.",
},
},
{
"@type": "Question",
name: "What are the Airship Dock materials?",
acceptedAnswer: {
"@type": "Answer",
text:
"The Airship Dock research step uses 5 Wood, 5 Iron, and 5 Cloth. After researching it, build and place the dock near a clear edge.",
},
},
{
"@type": "Question",
name: "What are the first airship materials?",
acceptedAnswer: {
"@type": "Answer",
text:
"The first airship needs 10 Iron, 3 Cloth, and 1 Crashed Airship Component. Build it from the Airship Dock panel.",
},
},
{
"@type": "Question",
name: "How do I upgrade the airship?",
acceptedAnswer: {
"@type": "Answer",
text:
"Complete the required Traderbot trade, return home, dock the airship, open the dock panel, and click Upgrade.",
},
},
{
"@type": "Question",
name: "Why did my airship range not expand?",
acceptedAnswer: {
"@type": "Answer",
text:
"You probably completed the trade but did not apply the upgrade at your dock. The map circle expands only after the dock upgrade step.",
},
},
{
"@type": "Question",
name: "How do I know if an island is out of range?",
acceptedAnswer: {
"@type": "Answer",
text:
"Open the map and check the white range circle. If the island is outside the circle, your current airship level cannot reach it yet.",
},
},
{
"@type": "Question",
name: "What does the first airship upgrade need?",
acceptedAnswer: {
"@type": "Answer",
text:
"The first major range upgrade needs 32 copper through Traderbot. Bring extra copper if possible because energy systems also need it.",
},
},
{
"@type": "Question",
name: "Where should I go after the first airship upgrade?",
acceptedAnswer: {
"@type": "Answer",
text:
"Search the next ring for wheat and quartz. A northwest island group can be a good target if it appears in your map layout, but use the range circle and visible islands as your guide.",
},
},
{
"@type": "Question",
name: "How do I get silicon?",
acceptedAnswer: {
"@type": "Answer",
text:
"Mine quartz on second-ring islands, bring it home, and smelt it into silicon.",
},
},
{
"@type": "Question",
name: "How do I get the egg airship upgrade?",
acceptedAnswer: {
"@type": "Answer",
text:
"Grow wheat, make animal feed, support chickens with food, water, and shelter, then save six eggs for Traderbot.",
},
},
{
"@type": "Question",
name: "Can co-op players use the same airship?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. In co-op, only the player who built an airship can use it. Your partner needs their own Airship Dock and airship for independent travel.",
},
},
{
"@type": "Question",
name: "Should I fly during thunderstorms?",
acceptedAnswer: {
"@type": "Answer",
text:
"Avoid it when carrying rare materials. Bad weather makes flying, docking, and recovery riskier. Wait, sleep, or dock safely if possible.",
},
},
{
"@type": "Question",
name: "Is the Advanced Dock worth it?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes, but only after your power grid is stable. Advanced Dock uses power, and boost can make you crash if you use it too close to your dock.",
},
},
{
"@type": "Question",
name: "How do I repair the airship?",
acceptedAnswer: {
"@type": "Answer",
text:
"Craft or carry a repair kit, then use it on the damaged airship. Also remember that the dock can retrieve a lost or crashed airship.",
},
},
{
"@type": "Question",
name: "What should I read next?",
acceptedAnswer: {
"@type": "Answer",
text:
"Read the Energy System Guide if Advanced Dock, drills, or batteries are causing power problems. Read the Research Progression Guide if Traderbot, Tier 2, Tier 3, Battery, Windmill, or cobalt are confusing.",
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
       title="Build and Upgrade Your Airship Without Missing the Dock Step"
       description="Find the crashed component, build the Airship Dock, craft your first airship, fix range problems, and know where to fly next."
       gameTitle="Solarpunk"
       gameHref="/solarpunk"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 9, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <AirshipGuideContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
