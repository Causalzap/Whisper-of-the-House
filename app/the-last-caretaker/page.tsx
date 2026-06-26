import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TheLastCaretakerContent from "@/data/the-last-caretaker/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-last-caretaker`;

const imageUrls = [
`${siteUrl}/images/the-last-caretaker/the-last-caretaker-new-horizons-pishon-marker.webp`,
`${siteUrl}/images/the-last-caretaker/the-last-caretaker-pishon-eden-frame-platform.webp`,
`${siteUrl}/images/the-last-caretaker/the-last-caretaker-oil-whale-parked-next-to-boat.webp`,
`${siteUrl}/images/the-last-caretaker/the-last-caretaker-theta-9-ventilation-authorization.webp`,
];

export const metadata: Metadata = {
title: "The Last Caretaker Guide - New Horizons Routes",
description:
"Start The Last Caretaker with power, cables, boat basics, then route New Horizons through Project Eden, Oil Whale, Theta 9, wall outlets and ship cleanup.",
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
"The Last Caretaker Guide: New Horizons Route, Project Eden, Oil Whale, Theta 9, Wall Outlets, and Ship Systems",
description:
"This The Last Caretaker guide hub helps new and returning players choose the right route: early power, cables, recycler, fabricator, boat basics, New Horizons, Project Eden at Pishon, First Roots, Oil Whale and Project Jonah, Research Outpost Theta 9, Roth's Anomaly, door lock colors, wall outlets, power routing, fuel routing, and ship cleanup.",
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
name: "The Last Caretaker New Horizons",
},
{
"@type": "Thing",
name: "Project Eden",
},
{
"@type": "Thing",
name: "Pishon",
},
{
"@type": "Thing",
name: "First Roots",
},
{
"@type": "Thing",
name: "Oil Whale",
},
{
"@type": "Thing",
name: "Project Jonah",
},
{
"@type": "Thing",
name: "Research Outpost Theta 9",
},
{
"@type": "Thing",
name: "Roth's Anomaly",
},
{
"@type": "Thing",
name: "Ventilation 3.3",
},
{
"@type": "Thing",
name: "Wall Outlets",
},
{
"@type": "Thing",
name: "Power Routing",
},
{
"@type": "Thing",
name: "Fuel Routing",
},
{
"@type": "Thing",
name: "Boat Systems",
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
name: "Is The Last Caretaker worth starting after New Horizons?",
acceptedAnswer: {
"@type": "Answer",
text: "Yes, if you like survival crafting, physical ship systems, cable routing, deep-water exploration, and long-term project goals. New Horizons gives returning players more to chase, but new players should still learn power, recycler, fabricator, battery, diesel, and boat basics first.",
},
},
{
"@type": "Question",
name: "What should I do first as a new player?",
acceptedAnswer: {
"@type": "Answer",
text: "Reconnect power, learn cables, use the recycler and fabricator, stabilize the boat, and understand battery and diesel storage before sailing too far.",
},
},
{
"@type": "Question",
name: "What should I do first in Update 5?",
acceptedAnswer: {
"@type": "Answer",
text: "Pick the route that matches your current blocker. Project Eden is for Pishon and first roots, Oil Whale is for Project Jonah and oil pulls, Theta 9 is for the underwater station, and wall outlets are for ship routing cleanup.",
},
},
{
"@type": "Question",
name: "When should I skip Project Eden for now?",
acceptedAnswer: {
"@type": "Answer",
text: "Skip a real Eden build if you cannot craft Stainless Steel, cannot support water and power, or cannot carry construction parts. Mark Pishon first, then return prepared.",
},
},
{
"@type": "Question",
name: "When should I skip Oil Whale for now?",
acceptedAnswer: {
"@type": "Answer",
text: "Skip the Whale if Lazarus Complex is not producing a mature human yet, if you only have seeds, or if your boat power and oil storage are not ready for the cycle.",
},
},
{
"@type": "Question",
name: "When should I skip Theta 9 for now?",
acceptedAnswer: {
"@type": "Answer",
text: "Skip Theta 9 if you are overweight, missing underwater mobility, short on weapons, low on energy, or have no recent save. The station is safer when you enter prepared.",
},
},
{
"@type": "Question",
name: "Are wall outlets only quality of life?",
acceptedAnswer: {
"@type": "Answer",
text: "No. They clean up the ship, but they also change how you plan power, fuel, gas, oil, diesel, petrol, and Project Eden support. Bad placement can still break the route.",
},
},
{
"@type": "Question",
name: "What should I read next?",
acceptedAnswer: {
"@type": "Answer",
text: "Start with the New Horizons Guide if you are returning, or use the All Game Guides page if you want another game hub.",
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
title="The Last Caretaker Guide"
description="Choose the right The Last Caretaker route before wasting power, storage, or a long trip: start with boat basics if you are new, or route New Horizons through Project Eden, Oil Whale, Theta 9, and wall outlet cleanup if you are returning."
gameTitle="The Last Caretaker"
gameHref="/the-last-caretaker"
breadcrumbBaseHref="/"
breadcrumbBaseLabel="Home"
updatedAt="June 26, 2026"
toc={[
{
id: "start-here",
label: "Start here",
},
{
id: "guide-picker",
label: "Guide picker",
},
{
id: "first-hour-route",
label: "First-hour route",
},
{
id: "new-horizons-route",
label: "New Horizons route",
},
{
id: "project-eden",
label: "Project Eden",
},
{
id: "oil-whale",
label: "Oil Whale",
},
{
id: "research-outpost-theta-9",
label: "Theta 9",
},
{
id: "power-fuel-wall-outlets",
label: "Wall outlets",
},
{
id: "what-can-wait",
label: "What can wait",
},
{
id: "common-mistakes",
label: "Hub-level mistakes",
},
{
id: "faq",
label: "FAQ",
},
]}
relatedLinks={[
{
href: "/the-last-caretaker/new-horizons-guide",
label: "New Horizons Guide",
},
{
href: "/the-last-caretaker/project-eden-guide",
label: "Project Eden Guide",
},
{
href: "/the-last-caretaker/oil-whale-guide",
label: "Oil Whale Guide",
},
{
href: "/the-last-caretaker/research-outpost-theta-9-guide",
label: "Research Outpost Theta 9 Guide",
},
{
href: "/the-last-caretaker/power-fuel-wall-outlets",
label: "Power & Fuel Wall Outlets Guide",
},
{
href: "/#all-game-guides",
label: "All Game Guides",
},
]}
> <TheLastCaretakerContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
