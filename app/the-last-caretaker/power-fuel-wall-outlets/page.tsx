import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TheLastCaretakerPowerFuelWallOutletsContent from "@/data/the-last-caretaker/power-fuel-wall-outlets.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-last-caretaker/power-fuel-wall-outlets`;

const imageUrls = [
`${siteUrl}/images/the-last-caretaker/the-last-caretaker-wall-outlets-skill-unlocks.webp`,
`${siteUrl}/images/the-last-caretaker/the-last-caretaker-electric-cable-extender-input.webp`,
`${siteUrl}/images/the-last-caretaker/the-last-caretaker-electric-cable-extender-range.webp`,
`${siteUrl}/images/the-last-caretaker/the-last-caretaker-gas-fuel-wall-socket-blocked-output.webp`,
];

export const metadata: Metadata = {
title: "The Last Caretaker Wall Outlets Guide - Power & Fuel",
description:
"Fix Update 5 wall outlets, cable range, blocked output, Grid Scan, power/fuel/gas routing, oil-diesel-petrol lines, and Project Eden support on your ship.",
alternates: {
canonical: pageUrl,
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
name: "The Last Caretaker Guide",
item: `${siteUrl}/the-last-caretaker`,
},
{
"@type": "ListItem",
position: 3,
name: "Power & Fuel Wall Outlets",
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
"The Last Caretaker Power and Fuel Wall Outlets Guide: Update 5 Sockets, Cable Range, Blocked Output, Grid Scan, and Ship Routing",
description:
"This The Last Caretaker wall outlets guide explains how Update 5 buildable sockets differ from old fixed ship sockets, how to unlock and place wall outlets, how to clean up power, fuel, and gas routing, how cable range and walls affect placement, how to fix blocked output, when to use Grid Scan, and how to rebuild a messy ship one network at a time.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-26",
dateModified: "2026-06-26",
about: [
{
"@type": "VideoGame",
name: "The Last Caretaker",
},
{
"@type": "Thing",
name: "The Last Caretaker Update 5",
},
{
"@type": "Thing",
name: "Wall Outlets",
},
{
"@type": "Thing",
name: "Power Wall Outlets",
},
{
"@type": "Thing",
name: "Fuel Wall Outlets",
},
{
"@type": "Thing",
name: "Gas Wall Outlets",
},
{
"@type": "Thing",
name: "Electric Cable Extenders",
},
{
"@type": "Thing",
name: "Cable Range",
},
{
"@type": "Thing",
name: "Blocked Output",
},
{
"@type": "Thing",
name: "Grid Scan",
},
{
"@type": "Thing",
name: "Oil Routing",
},
{
"@type": "Thing",
name: "Diesel Routing",
},
{
"@type": "Thing",
name: "Petrol Routing",
},
{
"@type": "Thing",
name: "Project Eden",
},
{
"@type": "Thing",
name: "Oil Whale",
},
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
},
{
"@type": "FAQPage",
"@id": `${pageUrl}#faq`,
mainEntity: [
{
"@type": "Question",
name: "Are wall outlets new in Update 5?",
acceptedAnswer: {
"@type": "Answer",
text: "Yes. These are buildable wall outlet tools added with Update 5, separate from the ship's older fixed sockets.",
},
},
{
"@type": "Question",
name: "Why is my wall outlet not working?",
acceptedAnswer: {
"@type": "Answer",
text: "Check output direction, range, input source, target system, network type, and blocked output. Most wall outlet problems come from placement or connection issues.",
},
},
{
"@type": "Question",
name: "How do I unlock wall outlets?",
acceptedAnswer: {
"@type": "Answer",
text: "Unlock wall outlets through the Update 5 skill screen, then check the current build prompt for the material cost before placing them.",
},
},
{
"@type": "Question",
name: "Are wall outlets wireless?",
acceptedAnswer: {
"@type": "Answer",
text: "No. Wall outlets are cleaner connection points, not wireless routing. They still need valid connections and enough range.",
},
},
{
"@type": "Question",
name: "Do cables lose range through walls or floors?",
acceptedAnswer: {
"@type": "Answer",
text: "They can feel much shorter when the route passes through ship structure. If a cable burns too much range, move the outlet closer or route around the obstruction.",
},
},
{
"@type": "Question",
name: "What does blocked output mean?",
acceptedAnswer: {
"@type": "Answer",
text: "The socket is too close to a wall, machine, tank, floor edge, or another object. Move it until the output side has clear space.",
},
},
{
"@type": "Question",
name: "Do I still need electric cable extenders?",
acceptedAnswer: {
"@type": "Answer",
text: "Yes. Extenders are useful for small gaps. If you need several extenders, move the wall outlet closer instead.",
},
},
{
"@type": "Question",
name: "Should I clean up power or fuel first?",
acceptedAnswer: {
"@type": "Answer",
text: "Clean up the system that is blocking progress. If machines lose power, fix power first. If oil, diesel, or petrol storage is confusing, fix fuel routing first.",
},
},
{
"@type": "Question",
name: "Do wall outlets help Project Eden?",
acceptedAnswer: {
"@type": "Answer",
text: "Yes. Project Eden can need support inputs after the frame is placed, so cleaner power, fuel, gas, and oxygen-style routing can save time later.",
},
},
{
"@type": "Question",
name: "What should I read next?",
acceptedAnswer: {
"@type": "Answer",
text: "Use the Oil Whale Guide if you are cleaning routing for Whale oil, or the Project Eden Guide if you are preparing Pishon support systems.",
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
title="The Last Caretaker Power & Fuel Wall Outlets Guide"
description="Use this Update 5 guide to unlock wall outlets, place power, fuel, and gas sockets, fix blocked output, avoid cable range problems, use Grid Scan, and rebuild a messy ship one network at a time."
gameTitle="The Last Caretaker"
gameHref="/the-last-caretaker"
breadcrumbBaseHref="/"
breadcrumbBaseLabel="Home"
updatedAt="June 26, 2026"
toc={[
{
id: "what-wall-outlets-are",
label: "What wall outlets are",
},
{
id: "unlock-and-build",
label: "Unlock & build",
},
{
id: "when-to-use-wall-outlets",
label: "When to use them",
},
{
id: "power-wall-outlets",
label: "Power outlets",
},
{
id: "range-and-distance",
label: "Range & distance",
},
{
id: "fuel-and-gas-wall-outlets",
label: "Fuel & gas outlets",
},
{
id: "blocked-output",
label: "Blocked output",
},
{
id: "grid-scan",
label: "Grid Scan",
},
{
id: "cleanup-order",
label: "Cleanup order",
},
{
id: "common-mistakes",
label: "Common mistakes",
},
{
id: "faq",
label: "FAQ",
},
]}
relatedLinks={[
{
href: "/the-last-caretaker",
label: "The Last Caretaker Guide Hub",
},
{
href: "/the-last-caretaker/new-horizons-guide",
label: "New Horizons Guide",
},
{
href: "/the-last-caretaker/oil-whale-guide",
label: "Oil Whale Guide",
},
{
href: "/the-last-caretaker/project-eden-guide",
label: "Project Eden Guide",
},
{
href: "/the-last-caretaker/research-outpost-theta-9-guide",
label: "Research Outpost Theta 9 Guide",
},
{
href: "/#all-game-guides",
label: "All Game Guides",
},
]}
> <TheLastCaretakerPowerFuelWallOutletsContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
