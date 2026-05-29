import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ControlsDropItemsSaveToolsContent from "@/data/cheap-car-repair/controls-drop-items-save-tools.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/cheap-car-repair/controls-drop-items-save-tools`;

const imageUrls = [
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-drop-item-g-prompt.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-pick-up-tool-g-drop.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-save-game-menu.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-rust-grinder.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-daddys-little-girl-rear-left-tire.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-daddys-little-girl-brake-fluid.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-daddys-little-girl-fluid-mixing-table.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-oil-drain-service-pit.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-air-intake-pipe.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-daddys-little-girl-rear-engine-hatch.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-daddys-little-girl-job-complete.webp`,
];

const toc = [
{ id: "cheap-car-repair-controls", label: "Controls" },
{ id: "how-to-drop-items", label: "How to drop items" },
{ id: "how-to-save", label: "How to save" },
{ id: "can-you-remap-controls", label: "Remap controls" },
{ id: "how-to-run-faster", label: "Run faster" },
{ id: "tools-overview", label: "Tools overview" },
{ id: "grinder-polisher-paint", label: "Grinder, paint and polish" },
{ id: "wrench-bolts-wheels", label: "Wrench and wheels" },
{ id: "fluids", label: "Fluids and caps" },
{ id: "fluid-mixing-table", label: "Fluid mixing table" },
{ id: "service-pit-drain-oil", label: "Service pit and oil drain" },
{ id: "pliers-clips", label: "Pliers and clips" },
{ id: "rear-engine-access", label: "Rear engine access" },
{ id: "what-to-check-when-stuck", label: "When stuck" },
{ id: "using-the-quest-log", label: "Quest log" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
{ href: "/cheap-car-repair", label: "Cheap Car Repair Complete Guide" },
{
href: "/cheap-car-repair/daddys-little-girl-mission",
label: "Daddy's Little Girl Mission Walkthrough",
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
href: "/cheap-car-repair/cars-parts-guide",
label: "Cars and Parts Guide",
},
];

export const metadata: Metadata = {
title: "Cheap Car Repair Controls, How to Drop Items and Save Guide",
description:
"Learn Cheap Car Repair controls, how to drop items with G, save your game, remap keys, run faster, use tools, fluids, pliers and the service pit.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Cheap Car Repair Controls Guide: Drop Items, Save, Tools, Fluids and Service Pit",
description:
"Use the right Cheap Car Repair controls for dropping items, saving, running, remapping keys, using tools, mixing fluids, draining oil and fixing stuck parts.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Cheap Car Repair tutorial prompt explaining that G throws the tool or item the player is holding.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Cheap Car Repair Controls, How to Drop Items and Save Guide",
description:
"Drop items with G, save safely, run faster, use tools, fix key remapping issues, handle fluids and use the service pit in Cheap Car Repair.",
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
name: "Controls, Drop Items and Save Guide",
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
"Cheap Car Repair Controls Guide: How to Drop Items, Save, Remap Controls, Run Faster, Use Tools, Fluids, Pliers, Rear Engine Access and the Service Pit",
description:
"A player-focused Cheap Car Repair controls guide explaining how to drop or throw items with G, how to save the game, how the main controls work, what to do when key remapping fails, how to run faster with Shift, how to use the grinder, paint, polisher, wrench, car jack, pliers, bolts, clips, fluid containers, fluid mixing table, service pit, rear engine access in Daddy's Little Girl, quest log checks and common stuck points when tools or parts will not work.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-05-29",
dateModified: "2026-05-29",
about: [
{ "@type": "VideoGame", name: "Cheap Car Repair" },
{ "@type": "Thing", name: "Cheap Car Repair Controls" },
{ "@type": "Thing", name: "How to Drop Items" },
{ "@type": "Thing", name: "Cheap Car Repair Save Game" },
{ "@type": "Thing", name: "Cheap Car Repair Key Remapping" },
{ "@type": "Thing", name: "Cheap Car Repair Sprint" },
{ "@type": "Thing", name: "Cheap Car Repair Tools" },
{ "@type": "Thing", name: "Grinder" },
{ "@type": "Thing", name: "Spray Paint" },
{ "@type": "Thing", name: "Wrench" },
{ "@type": "Thing", name: "Car Jack" },
{ "@type": "Thing", name: "Pliers" },
{ "@type": "Thing", name: "Fluid Mixing Table" },
{ "@type": "Thing", name: "Service Pit" },
{ "@type": "Thing", name: "Rear Engine Access" },
{ "@type": "Thing", name: "Daddy's Little Girl" },
{ "@type": "Thing", name: "Air Intake Pipe" },
{ "@type": "Thing", name: "Quest Log" },
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
name: "How do you drop items in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Press G to throw or drop the tool, bottle, spray can or part you are holding. If you cannot pick up another tool, you are probably already holding something, so drop the current item first, then aim at the new tool and press E.",
},
},
{
"@type": "Question",
name: "How do you save in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use Save Game from the menu before stopping a long session or leaving a job half-finished. The game can also show saving progress during some story steps.",
},
},
{
"@type": "Question",
name: "Can you remap controls in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"You can use the control settings, but some players have reported remapping issues in the launch build. If a remapped action does not work, return that action to the default key and test again.",
},
},
{
"@type": "Question",
name: "How do you run faster in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Hold Shift to run faster. Use it when moving between the garage, house, yard, customer cars and outside part locations.",
},
},
{
"@type": "Question",
name: "How do you use the wrench in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Click the part so its bolts highlight. Use right mouse to unscrew bolts and left mouse to tighten them.",
},
},
{
"@type": "Question",
name: "How do you remove a wheel in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use the car jack first, raise the car, click the wheel, unscrew every bolt with right mouse, then remove the wheel.",
},
},
{
"@type": "Question",
name: "How do you refill brake fluid in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Open the brake fluid reservoir cap, add the required brake fluid, then close the cap again.",
},
},
{
"@type": "Question",
name: "What is the fluid mixing table in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"The fluid mixing table is used for prepared mixtures. Place the canister on the table with E, add the required fluids in the correct amounts, then pour the mixture into the car.",
},
},
{
"@type": "Question",
name: "How do you use the service pit to drain oil in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Move under the car through the service pit, find the drain plug, empty the old fluid first, then refill from the correct fill point.",
},
},
{
"@type": "Question",
name: "How do you use pliers in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use pliers on clips and clamps after the part is seated. For the air intake pipe, place the pipe first, then secure the clips with pliers.",
},
},
{
"@type": "Question",
name: "Where is the engine in Daddy's Little Girl?",
acceptedAnswer: {
"@type": "Answer",
text:
"The engine is in the rear. Go to the back of the Mini Fiax, remove the liftgate, then work on the air intake and filter area from the rear opening.",
},
},
{
"@type": "Question",
name: "How do you zoom in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Press C to zoom or get a closer view. This helps with bolts, wheels and small engine parts.",
},
},
{
"@type": "Question",
name: "Why can't I finish the job in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Check the quest log. You may have a loose bolt, open cap, missing part, unsecured clip, unfinished fluid amount, wrong tire side or a customer call step still unchecked.",
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
       title="How to Drop Items, Save and Use Tools in Cheap Car Repair"
       description="Use the controls that actually matter: drop items with G, save before risky jobs, run faster, use tools correctly, drain oil and stop small part interactions from blocking your repair."
       gameTitle="Cheap Car Repair"
       gameHref="/cheap-car-repair"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="May 29, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <ControlsDropItemsSaveToolsContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
