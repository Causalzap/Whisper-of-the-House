import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TheLastCaretakerOilWhaleContent from "@/data/the-last-caretaker/oil-whale-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-last-caretaker/oil-whale-guide`;

const imageUrls = [
`${siteUrl}/images/the-last-caretaker/the-last-caretaker-oil-whale-parked-next-to-boat.webp`,
`${siteUrl}/images/the-last-caretaker/the-last-caretaker-oil-whale-wall-socket-connection.webp`,
`${siteUrl}/images/the-last-caretaker/the-last-caretaker-oil-whale-extra-storage-20000l.webp`,
`${siteUrl}/images/the-last-caretaker/the-last-caretaker-oil-whale-power-drain.webp`,
`${siteUrl}/images/the-last-caretaker/the-last-caretaker-wind-solar-whale-charging.webp`,
];

export const metadata: Metadata = {
title: "The Last Caretaker Oil Whale Guide - Project Jonah",
description:
"Start Project Jonah, summon the Oil Whale, dock from the side, manage 10,000L oil pulls, 75-100kW power, tanks, transfer speed and refinery choices.",
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
name: "Oil Whale Guide",
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
"The Last Caretaker Oil Whale Guide: Project Jonah, Omega Nursery, Power Cost, Oil Storage, and Transfer Setup",
description:
"This The Last Caretaker Oil Whale guide explains how to start the Project Jonah route, use Omega Nursery and Platform Omega, bring the right human, dock beside the Whale, find the Whale-side power switch, prepare 75-100kW of power, handle 10,000L oil pulls, plan 20,000L temporary storage, transfer oil back to the boat, and decide when the Whale is better than a refinery.",
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
name: "The Last Caretaker Oil Whale",
},
{
"@type": "Thing",
name: "Project Jonah",
},
{
"@type": "Thing",
name: "Omega Nursery",
},
{
"@type": "Thing",
name: "Platform Omega",
},
{
"@type": "Thing",
name: "Lazarus Complex",
},
{
"@type": "Thing",
name: "Oil Whale Power Switch",
},
{
"@type": "Thing",
name: "Oil Storage",
},
{
"@type": "Thing",
name: "Oil Transfer",
},
{
"@type": "Thing",
name: "Fuel Wall Outlets",
},
{
"@type": "Thing",
name: "Wind Turbines",
},
{
"@type": "Thing",
name: "Solar Panels",
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
name: "What if the Oil Whale does not appear?",
acceptedAnswer: {
"@type": "Answer",
text: "Check that you are on the Project Jonah route, that you are around Omega Nursery or Platform Omega, and that you brought a mature human. If you only brought seeds or are not at the shark icon route, you may be missing the trigger.",
},
},
{
"@type": "Question",
name: "Do I need Lazarus Complex before the Oil Whale?",
acceptedAnswer: {
"@type": "Answer",
text: "Yes. You need the Lazarus Complex running well enough to produce a mature human for the Project Jonah and Oil Whale step.",
},
},
{
"@type": "Question",
name: "Should I bring my best human?",
acceptedAnswer: {
"@type": "Answer",
text: "Avoid bringing your best human if possible. Use a duplicate or lower-priority human because recovering that human after the route can be awkward.",
},
},
{
"@type": "Question",
name: "Why will the Oil Whale not start even after docking?",
acceptedAnswer: {
"@type": "Answer",
text: "Check the Whale-side power switch and make sure you have enough available power. Docking beside the Whale is not enough if the setup is still unpowered.",
},
},
{
"@type": "Question",
name: "Can I reuse the Oil Whale after one oil pull?",
acceptedAnswer: {
"@type": "Answer",
text: "Yes, but each pull still costs power and setup time. Make sure you have enough battery reserve and tank capacity before repeating the cycle.",
},
},
{
"@type": "Question",
name: "Why is my oil transfer slower than 72,000L/hour?",
acceptedAnswer: {
"@type": "Answer",
text: "That number assumes a clean, stable connection. If the Whale drifts, the cable disconnects, the tank route is wrong, or storage is full, the real transfer will be slower or stop completely.",
},
},
{
"@type": "Question",
name: "Can I build solar panels or wind turbines on the Whale?",
acceptedAnswer: {
"@type": "Answer",
text: "Depending on your current build state, you may be able to place generation near or on the Whale. Boat power still matters because the boat is what needs to leave with the oil.",
},
},
{
"@type": "Question",
name: "Can I tow the Oil Whale?",
acceptedAnswer: {
"@type": "Answer",
text: "Do not rely on towing the Oil Whale. It is awkward and not a reliable progression route.",
},
},
{
"@type": "Question",
name: "Does the Oil Whale unlock Tower 4 or Pen 4?",
acceptedAnswer: {
"@type": "Answer",
text: "Not in a reliable way. Treat Tower 4 or Pen 4 Whale theories as unresolved unless your current build clearly gives you a working objective.",
},
},
{
"@type": "Question",
name: "What should I read next?",
acceptedAnswer: {
"@type": "Answer",
text: "Use the New Horizons Guide for the full Update 5 route, or the Power and Fuel Wall Outlets Guide if your oil, fuel, or power routing is messy.",
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
title="The Last Caretaker Oil Whale Guide"
description="Start the Project Jonah Oil Whale route with the right human, shark icon, side docking, Whale power switch, 10,000L oil pulls, 75-100kW power planning, boat tank storage, and safe transfer setup."
gameTitle="The Last Caretaker"
gameHref="/the-last-caretaker"
breadcrumbBaseHref="/"
breadcrumbBaseLabel="Home"
updatedAt="June 26, 2026"
toc={[
{
id: "oil-whale-start",
label: "How to start",
},
{
id: "is-oil-whale-worth-it",
label: "Is it worth it?",
},
{
id: "approach-dock-and-power-switch",
label: "Dock & power switch",
},
{
id: "where-to-put-oil-tanks",
label: "Oil tank placement",
},
{
id: "oil-amount",
label: "Oil amount",
},
{
id: "power-cost",
label: "Power cost",
},
{
id: "wind-solar",
label: "Wind & solar",
},
{
id: "transfer-oil",
label: "Transfer oil",
},
{
id: "oil-whale-vs-refinery",
label: "Whale vs refinery",
},
{
id: "can-you-tow-oil-whale",
label: "Can you tow it?",
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
href: "/the-last-caretaker/power-fuel-wall-outlets",
label: "Power & Fuel Wall Outlets Guide",
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
> <TheLastCaretakerOilWhaleContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
