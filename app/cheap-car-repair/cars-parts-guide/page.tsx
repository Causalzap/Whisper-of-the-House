import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import CarsPartsGuideContent from "@/data/cheap-car-repair/cars-parts-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/cheap-car-repair/cars-parts-guide`;

const imageUrls = [
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-shocked-driver-objectives.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-daddys-little-girl-rear-left-tire.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-daddys-little-girl-battery.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-air-intake-pipe.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-air-filter-sponge-substitute.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-fuel-filter-location.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-alternator-neighbor-yard.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-part-store-alternator-pulley.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-timing-belt-spark-plugs.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-daddys-little-girl-brake-fluid.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-oil-drain-service-pit.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-daddys-little-girl-fluid-mixing-table.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-scrapyard-parts.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-used-parts-sell-scrap.webp`,
];

const toc = [
{ id: "confirmed-parts-list", label: "Confirmed parts list" },
{ id: "where-to-find-parts", label: "Where to find parts" },
{ id: "vehicles-and-jobs", label: "Vehicles and jobs" },
{ id: "tires-and-rims", label: "Tires and rims" },
{ id: "battery", label: "Battery" },
{ id: "air-filter-and-intake", label: "Air filter and intake" },
{
id: "can-you-use-a-sponge-as-an-air-filter",
label: "Sponge as air filter",
},
{ id: "fuel-filter", label: "Fuel filter" },
{ id: "alternator", label: "Alternator" },
{ id: "timing-belt-and-spark-plugs", label: "Timing belt and spark plugs" },
{ id: "fluids-and-drain-plugs", label: "Fluids and drain plugs" },
{ id: "shocked-driver", label: "Before Shocked Driver" },
{ id: "scrapyard-part-store-and-scrap", label: "Scrapyard and part store" },
{ id: "how-sloppiness-works-with-parts", label: "Sloppiness with parts" },
{ id: "substitute-parts", label: "Substitute parts" },
{ id: "known-issues", label: "Known issues" },
{ id: "common-parts-mistakes", label: "Common mistakes" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
{ href: "/cheap-car-repair", label: "Cheap Car Repair Complete Guide" },
{
href: "/cheap-car-repair/daddys-little-girl-mission",
label: "Daddy's Little Girl Mission Walkthrough",
},
{
href: "/cheap-car-repair/controls-drop-items-save-tools",
label: "Controls, Drop Items, Save and Tools Guide",
},
{
href: "/cheap-car-repair/how-to-make-money",
label: "How to Make Money in Cheap Car Repair",
},
{
href: "/cheap-car-repair/story-missions-walkthrough",
label: "Story Missions Walkthrough",
},
{
href: "/cheap-car-repair/shocked-driver-mission",
label: "Shocked Driver Mission Walkthrough",
},
];

export const metadata: Metadata = {
title: "Cheap Car Repair Parts Guide: Filters, Tires, Pulleys",
description:
"Find parts in Cheap Car Repair: tires, rims, filters, battery, alternator, timing belt, sponge substitute, sloppiness risks and stuck fixes.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Cheap Car Repair Cars and Parts Guide: Filters, Tires, Pulleys and Sloppiness",
description:
"Learn where to find Cheap Car Repair parts, how tires and rims work, when sponge air filters and cheap substitutes are safe, and how to avoid sloppiness penalties.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 900,
height: 1600,
alt: "Cheap Car Repair Shocked Driver job objective list showing tires, rims, pulleys, dents and paint.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Cheap Car Repair Parts Guide: Filters, Tires, Pulleys",
description:
"Find key Cheap Car Repair parts, avoid rim and filter mistakes, use sponge substitutes safely, and understand sloppiness with parts.",
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
name: "Cheap Car Repair Guide",
item: `${siteUrl}/cheap-car-repair`,
},
{
"@type": "ListItem",
position: 3,
name: "Cars and Parts Guide",
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
"Cheap Car Repair Cars and Parts Guide: Where to Find Filters, Tires, Rims, Battery, Alternator, Timing Belt, Spark Plugs, Pulleys and Substitute Parts",
description:
"A player-focused Cheap Car Repair cars and parts guide covering the confirmed early and mid-early parts that block jobs, including batteries, tires, rims, brake fluid, petrol, air intake pipe, air filter, sponge air filter substitute, fuel filter, alternator, alternator pulley, timing belt, spark plugs, oil filter, pulleys, fluid mixing table, service pit oil draining, scrapyard parts, part store purchases, sloppiness risk, known launch-build stuck points and common parts mistakes. The guide explains where parts show up, when to search before buying, how to avoid confusing tires with rims or filters with each other, when cheap substitutes are worth using, and what to check when a parts job will not finish.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-05-29",
dateModified: "2026-05-29",
about: [
{ "@type": "VideoGame", name: "Cheap Car Repair" },
{ "@type": "Thing", name: "Cheap Car Repair Parts Guide" },
{ "@type": "Thing", name: "Cheap Car Repair Cars" },
{ "@type": "Thing", name: "Cheap Car Repair Filters" },
{ "@type": "Thing", name: "Cheap Car Repair Tires" },
{ "@type": "Thing", name: "Cheap Car Repair Rims" },
{ "@type": "Thing", name: "Battery" },
{ "@type": "Thing", name: "Air Filter" },
{ "@type": "Thing", name: "Sponge Air Filter Substitute" },
{ "@type": "Thing", name: "Air Intake Pipe" },
{ "@type": "Thing", name: "Fuel Filter" },
{ "@type": "Thing", name: "Alternator" },
{ "@type": "Thing", name: "Alternator Pulley" },
{ "@type": "Thing", name: "Timing Belt" },
{ "@type": "Thing", name: "Spark Plugs" },
{ "@type": "Thing", name: "Oil Filter" },
{ "@type": "Thing", name: "Pulleys" },
{ "@type": "Thing", name: "Fluid Mixing Table" },
{ "@type": "Thing", name: "Service Pit" },
{ "@type": "Thing", name: "Scrapyard" },
{ "@type": "Thing", name: "Part Store" },
{ "@type": "Thing", name: "Sloppiness" },
{ "@type": "Thing", name: "Known Issues" },
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
name: "Is this a full Cheap Car Repair parts list?",
acceptedAnswer: {
"@type": "Answer",
text:
"Not yet. This is a confirmed early parts guide for the opening and mid-early jobs. It focuses on parts that actually block players: tires, rims, filters, battery, alternator, timing belt, spark plugs, pulleys and fluids.",
},
},
{
"@type": "Question",
name: "Where is the fuel filter in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"For one early fuel filter job, the hint says a fuel filter was lying on the cabinet in the living room. Check the house before searching outside.",
},
},
{
"@type": "Question",
name: "What is the difference between a tire and a rim in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"The tire is the rubber part. The rim is the metal wheel part. Some jobs need both, and replacing a tire may still require the original rim.",
},
},
{
"@type": "Question",
name: "What does RL mean in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"RL means rear left. In Daddy's Little Girl, the tire objective is the rear-left tire.",
},
},
{
"@type": "Question",
name: "Why will the air intake pipe not install in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"The pipe needs to be placed first, then secured with pliers. If it will not install, drop the wrong item with G, aim at the rear engine install point, place the pipe, then clip it.",
},
},
{
"@type": "Question",
name: "Where is the alternator in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"One early alternator objective points you toward the neighbor's yard. If the game gives that hint, search outside before buying.",
},
},
{
"@type": "Question",
name: "What are pulleys used for in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Pulleys appear in bigger jobs such as Shocked Driver. Big pulley, small pulley and alternator pulley can be separate objectives, so check the exact part name.",
},
},
{
"@type": "Question",
name: "How do I remove the timing belt in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Click the timing belt and look for the blocking part. Remove the part that physically blocks access, then return to the belt.",
},
},
{
"@type": "Question",
name: "What is the fluid mixing table in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"The fluid mixing table is used when a job asks for a prepared mixture instead of a normal refill. Place the canister on the table with E, add the required fluids in the requested amounts, then pour the finished mixture into the correct tank.",
},
},
{
"@type": "Question",
name: "How do I use the service pit to drain oil in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"For drain-and-refill jobs, move under the car through the service pit and find the drain plug. Empty the old fluid first, then return to the reservoir or fill point and add the new fluid. If the job still does not update, check whether the cap or drain plug step is unfinished.",
},
},
{
"@type": "Question",
name: "Why do I need to drain fluid first in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Some jobs are full fluid changes, not simple refills. If the job says to drain and refill, empty the tank first from the correct drain point or service pit.",
},
},
{
"@type": "Question",
name: "What happens when sloppiness is detected in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"When sloppiness is detected, the shortcut can stop being profitable. You may lose part of the payout, miss the sloppiness bonus, trigger a customer complaint or create a follow-up problem. That is why risky swaps are better on low-risk jobs than on story customers.",
},
},
{
"@type": "Question",
name: "Is there a sloppiness meter I can see in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. Job screens can show a sloppiness bar, and completion screens can tell you whether the customer noticed the sloppy work. Use that feedback to learn which shortcuts are safe and which ones are too obvious.",
},
},
{
"@type": "Question",
name: "Should I buy parts or search first in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Search when the game gives a clear hint or the part is likely nearby. Buy when the missing part is specific, cheap enough, and the job payout justifies saving time.",
},
},
{
"@type": "Question",
name: "Can parts despawn in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Loose parts can remain around for a while, but do not treat random piles as permanent storage. Keep important parts where you can find them again.",
},
},
{
"@type": "Question",
name: "Why can't I finish a parts job in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"The usual cause is a wrong part, wrong side, missing rim, loose bolt, unsecured clip, open cap, unfinished fluid amount or required part left on the floor.",
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
       title="Cheap Car Repair Cars and Parts Guide"
       description="Find the parts that block early jobs, avoid tire and rim mistakes, use cheap substitutes safely, and learn when sloppiness turns a shortcut into a problem."
       gameTitle="Cheap Car Repair"
       gameHref="/cheap-car-repair"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="May 29, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <CarsPartsGuideContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
