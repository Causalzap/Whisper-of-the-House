import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import DaddysLittleGirlMissionContent from "@/data/cheap-car-repair/daddys-little-girl-mission.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/cheap-car-repair/daddys-little-girl-mission`;

const imageUrls = [
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-daddys-little-girl-objectives.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-daddys-little-girl-rear-left-tire.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-daddys-little-girl-battery.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-daddys-little-girl-brake-fluid.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-daddys-little-girl-fluid-mixing-table.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-daddys-little-girl-rear-engine-hatch.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-air-intake-pipe.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-daddys-little-girl-job-complete.webp`,
];

const toc = [
{ id: "mission-objectives", label: "Mission objectives" },
{ id: "full-walkthrough", label: "Full walkthrough" },
{ id: "replace-rear-left-tire", label: "Rear-left tire" },
{ id: "replace-battery", label: "Battery" },
{ id: "brake-fluid", label: "Brake fluid" },
{ id: "petrol-fluid-mix", label: "Petrol mix" },
{ id: "rear-engine-access", label: "Rear engine access" },
{ id: "air-intake-pipe", label: "Air intake pipe" },
{ id: "air-filter-decision", label: "Air filter decision" },
{ id: "air-intake-not-installing", label: "Air intake fix" },
{ id: "parts-and-tools", label: "Parts and tools" },
{ id: "profit-and-sloppiness", label: "Profit and sloppiness" },
{ id: "finish-job", label: "Before calling Angelica" },
{ id: "common-mistakes", label: "Common mistakes" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
{ href: "/cheap-car-repair", label: "Cheap Car Repair Complete Guide" },
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
href: "/cheap-car-repair/cars-parts-guide",
label: "Cars and Parts Guide",
},
];

export const metadata: Metadata = {
title: "Cheap Car Repair Daddy's Little Girl Walkthrough",
description:
"Complete Daddy's Little Girl in Cheap Car Repair: rear-left tire, battery, brake fluid, petrol mix, rear engine access, air intake pipe and air filter.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Cheap Car Repair Daddy's Little Girl Mission Walkthrough: Air Intake, Tire, Battery and Brake Fluid",
description:
"Step through Daddy's Little Girl in Cheap Car Repair, including the RL tire, battery, brake fluid, petrol mix, rear engine hatch, air intake pipe fix and air filter choice.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 900,
height: 1600,
alt: "Cheap Car Repair Daddy's Little Girl mission objective list showing petrol, brake fluid, battery and rear-left tire.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Cheap Car Repair Daddy's Little Girl Walkthrough",
description:
"Fix Angelica's car, replace the RL tire and battery, refill fluids, access the rear engine, reinstall the air intake pipe and handle the air filter.",
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
name: "Daddy's Little Girl Mission",
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
"Cheap Car Repair Daddy's Little Girl Mission Walkthrough: Rear-Left Tire, Battery, Brake Fluid, Petrol Mix, Rear Engine Access, Air Intake Pipe Fix and Air Filter Choice",
description:
"A player-focused Cheap Car Repair Daddy's Little Girl mission walkthrough for Angelica's early job. It explains how long the mission takes, how to read the objective list, what RL means, how to replace the rear-left tire, keep the rim, replace the battery, refill brake fluid, use the fluid mixing table for petrol, access the Mini Fiax rear engine, remove the rear liftgate, reinstall the air intake pipe, secure clips with pliers, decide what to do with the air filter, fix the air intake pipe when it will not install, avoid sloppiness mistakes, and check the job list before calling Angelica.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-05-29",
dateModified: "2026-05-29",
about: [
{ "@type": "VideoGame", name: "Cheap Car Repair" },
{ "@type": "Thing", name: "Daddy's Little Girl Mission" },
{ "@type": "Thing", name: "Angelica" },
{ "@type": "Thing", name: "Mini Fiax" },
{ "@type": "Thing", name: "Rear-Left Tire" },
{ "@type": "Thing", name: "RL Tire" },
{ "@type": "Thing", name: "Battery" },
{ "@type": "Thing", name: "Brake Fluid" },
{ "@type": "Thing", name: "Petrol Mix" },
{ "@type": "Thing", name: "Fluid Mixing Table" },
{ "@type": "Thing", name: "Rear Engine Access" },
{ "@type": "Thing", name: "Rear Liftgate" },
{ "@type": "Thing", name: "Air Intake Pipe" },
{ "@type": "Thing", name: "Air Filter" },
{ "@type": "Thing", name: "Pliers" },
{ "@type": "Thing", name: "Sloppiness" },
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
name: "How long does Daddy's Little Girl take in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Daddy's Little Girl usually takes about 15 to 25 minutes on a first playthrough. It is faster once you know that RL means rear left and the Mini Fiax engine is in the rear.",
},
},
{
"@type": "Question",
name: "How do you complete Daddy's Little Girl in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Replace the rear-left tire, replace the battery, refill brake fluid, fill the petrol objective, open the rear engine area, remove and reinstall the air intake pipe, then secure the clips with pliers.",
},
},
{
"@type": "Question",
name: "What does RL mean in Daddy's Little Girl?",
acceptedAnswer: {
"@type": "Answer",
text:
"RL means rear left. The tire objective wants the rear-left tire, not the front wheel or the right side.",
},
},
{
"@type": "Question",
name: "How do I replace the tire in Daddy's Little Girl?",
acceptedAnswer: {
"@type": "Answer",
text:
"Raise the car with the jack, click the wheel so the bolts are highlighted, unscrew the bolts with right mouse, remove the wheel, keep the rim, add the replacement tire, mount the wheel and tighten the bolts.",
},
},
{
"@type": "Question",
name: "Where is the battery in Daddy's Little Girl?",
acceptedAnswer: {
"@type": "Answer",
text:
"Look around the garage area for a spare battery. Remove the old one from the car, place the replacement and tighten it.",
},
},
{
"@type": "Question",
name: "How do I refill brake fluid in Daddy's Little Girl?",
acceptedAnswer: {
"@type": "Answer",
text:
"Open the brake fluid reservoir cap, pick up the brake fluid, fill the reservoir and close the cap again.",
},
},
{
"@type": "Question",
name: "How do I fill up petrol in Daddy's Little Girl?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use the fluid mixing table, prepare the required mixture, then pour it into the tank until the objective is accepted.",
},
},
{
"@type": "Question",
name: "Where is the engine in Daddy's Little Girl?",
acceptedAnswer: {
"@type": "Answer",
text:
"The engine is in the rear. Remove the trunk hatch or liftgate so you can reach the air intake pipe and air filter area.",
},
},
{
"@type": "Question",
name: "How do I remove the air intake pipe in Daddy's Little Girl?",
acceptedAnswer: {
"@type": "Answer",
text:
"Pick up the pliers and use them on the clips holding the air intake pipe. After it is removed, make sure you reinstall it before finishing the job.",
},
},
{
"@type": "Question",
name: "Why won't the air intake pipe install in Daddy's Little Girl?",
acceptedAnswer: {
"@type": "Answer",
text:
"The pipe has to be placed before it can be clipped. If it will not install, use the reset steps in the air intake fix section, then place the pipe and secure the clips with pliers.",
},
},
{
"@type": "Question",
name: "What happens if I skip the air filter in Daddy's Little Girl?",
acceptedAnswer: {
"@type": "Answer",
text:
"Skipping, keeping or substituting the air filter can save value only if the job accepts the result. The risk is sloppiness: the customer may notice the cheap repair, while the air intake pipe itself still has to be reinstalled.",
},
},
{
"@type": "Question",
name: "Can I finish Daddy's Little Girl without the air intake pipe?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. If the intake pipe is removed, the car still needs it reinstalled before the job can be completed.",
},
},
{
"@type": "Question",
name: "Why can't I call Angelica in Daddy's Little Girl?",
acceptedAnswer: {
"@type": "Answer",
text:
"Check the job list. You may have the wrong tire, loose bolts, an open cap, missing battery work, incomplete petrol, or the air intake pipe still removed.",
},
},
{
"@type": "Question",
name: "Can I make more money on Daddy's Little Girl?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes, but only on flexible parts. Battery quality and air filter choices can create savings, while the air intake pipe, tire bolts, fluid caps and petrol objective must still be completed.",
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
       title="How to Complete Daddy's Little Girl in Cheap Car Repair"
       description="Fix Angelica's car without getting stuck: replace the rear-left tire, battery and fluids, find the rear engine, reinstall the air intake pipe and decide what to do with the air filter."
       gameTitle="Cheap Car Repair"
       gameHref="/cheap-car-repair"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="May 29, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <DaddysLittleGirlMissionContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
