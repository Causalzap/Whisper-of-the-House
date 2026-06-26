import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TheLastCaretakerTheta9Content from "@/data/the-last-caretaker/research-outpost-theta-9-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-last-caretaker/research-outpost-theta-9-guide`;

const imageUrls = [
`${siteUrl}/images/the-last-caretaker/the-last-caretaker-theta-9-emergency-survivor-flag.webp`,
`${siteUrl}/images/the-last-caretaker/the-last-caretaker-theta-9-underwater-entry.webp`,
`${siteUrl}/images/the-last-caretaker/the-last-caretaker-theta-9-nests-spiders.webp`,
`${siteUrl}/images/the-last-caretaker/the-last-caretaker-theta-9-ventilation-authorization.webp`,
`${siteUrl}/images/the-last-caretaker/the-last-caretaker-theta-9-authorization-granted.webp`,
];

export const metadata: Metadata = {
title: "The Last Caretaker Theta 9 Guide - Ventilation 3.3",
description:
"Find Research Outpost Theta 9, read red/yellow/green locks, clear nests, get Outpost Theta authorization, open Ventilation 3.3 and explore Roth’s Anomaly safely.",
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
name: "Research Outpost Theta 9 Guide",
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
"The Last Caretaker Research Outpost Theta 9 Guide: Emergency Signal, Door Locks, Ventilation 3.3, Terminal Authorization, and Roth’s Anomaly",
description:
"This The Last Caretaker Research Outpost Theta 9 guide explains how to follow the emergency survivor signal, prepare with Tide Ripper and weapons, enter the underwater station, understand red, yellow, and green door locks, clear nests and spiders, solve the Ventilation 3.3 authorization blocker, find the PECO / Pico terminal route, get Outpost Theta authorization, and explore the Roth’s Anomaly facility safely.",
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
name: "Research Outpost Theta 9",
},
{
"@type": "Thing",
name: "Theta 9",
},
{
"@type": "Thing",
name: "Ventilation 3.3",
},
{
"@type": "Thing",
name: "Outpost Theta Authorization",
},
{
"@type": "Thing",
name: "PECO Terminal",
},
{
"@type": "Thing",
name: "Pico Terminal",
},
{
"@type": "Thing",
name: "Roth’s Anomaly",
},
{
"@type": "Thing",
name: "Emergency Survivor Signal",
},
{
"@type": "Thing",
name: "Door Lock Colors",
},
{
"@type": "Thing",
name: "Tide Ripper",
},
{
"@type": "Thing",
name: "Nests",
},
{
"@type": "Thing",
name: "Spiders",
},
{
"@type": "Thing",
name: "Underwater Station",
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
name: "Where is Research Outpost Theta 9?",
acceptedAnswer: {
"@type": "Answer",
text: "Theta 9 starts from the old emergency survivor signal in New Horizons. Follow the marker, then look for the underwater station entry or airlock route.",
},
},
{
"@type": "Question",
name: "What should I bring before entering Theta 9?",
acceptedAnswer: {
"@type": "Answer",
text: "Bring Tide Ripper or underwater mobility, weapons, ammo, healing, inventory space, energy safety, and a recent save.",
},
},
{
"@type": "Question",
name: "What do red, yellow, and green door locks mean?",
acceptedAnswer: {
"@type": "Answer",
text: "Green usually means the route is available, yellow means the door is waiting on a condition such as power or authorization, and red means the route is blocked harder until the required condition is met.",
},
},
{
"@type": "Question",
name: "Why is Ventilation 3.3 locked?",
acceptedAnswer: {
"@type": "Answer",
text: "Ventilation 3.3 needs Outpost Theta authorization. Find the station terminal route first, then return to the door.",
},
},
{
"@type": "Question",
name: "What does “No Power” mean on the Ventilation door?",
acceptedAnswer: {
"@type": "Answer",
text: "It usually means the door is not ready to open even if you are standing at the right place. Check the station route, nearby terminals, and power state before assuming the door is bugged.",
},
},
{
"@type": "Question",
name: "Where is the PECO / Pico terminal?",
acceptedAnswer: {
"@type": "Answer",
text: "After you find the Ventilation 3.3 blocker, backtrack and sweep nearby rooms, side paths, lower passages, and terminal prompts. Clear enemies first so you can read prompts safely.",
},
},
{
"@type": "Question",
name: "How do I open Ventilation 3.3?",
acceptedAnswer: {
"@type": "Answer",
text: "Acquire Outpost Theta authorization from the correct terminal, then return to the Ventilation 3.3 door. If it still does not open, check power, the exact door, and whether the authorization message appeared.",
},
},
{
"@type": "Question",
name: "Should I loot everything before opening Ventilation 3.3?",
acceptedAnswer: {
"@type": "Answer",
text: "No. Open the route first, then do a cleanup pass. Looting too early can make you overweight before the real blocker is solved.",
},
},
{
"@type": "Question",
name: "Do I need Tide Ripper?",
acceptedAnswer: {
"@type": "Answer",
text: "Not always, but it is strongly recommended. Theta 9 is an underwater station route, and good mobility makes the approach, mistakes, and return much safer.",
},
},
{
"@type": "Question",
name: "What should I read next?",
acceptedAnswer: {
"@type": "Answer",
text: "Use the New Horizons Guide for the full Update 5 route, or the Power and Fuel Wall Outlets Guide if your ship power and routing need cleanup before another deep trip.",
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
title="The Last Caretaker Research Outpost Theta 9 Guide"
description="Follow the emergency survivor signal into Theta 9, prepare Tide Ripper and weapons, read red/yellow/green door locks, clear nests, get Outpost Theta authorization, and open Ventilation 3.3 without getting stuck."
gameTitle="The Last Caretaker"
gameHref="/the-last-caretaker"
breadcrumbBaseHref="/"
breadcrumbBaseLabel="Home"
updatedAt="June 26, 2026"
toc={[
{
id: "where-theta-9-starts",
label: "Where Theta 9 starts",
},
{
id: "what-to-bring",
label: "What to bring",
},
{
id: "enter-the-outpost",
label: "Enter the outpost",
},
{
id: "clear-enemy-rooms",
label: "Clear enemy rooms",
},
{
id: "door-lock-colors",
label: "Door lock colors",
},
{
id: "ventilation-33",
label: "Ventilation 3.3",
},
{
id: "terminal-authorization",
label: "Terminal authorization",
},
{
id: "after-ventilation-opens",
label: "After Ventilation opens",
},
{
id: "loot-and-return",
label: "Loot & return",
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
href: "/the-last-caretaker/oil-whale-guide",
label: "Oil Whale Guide",
},
{
href: "/#all-game-guides",
label: "All Game Guides",
},
]}
> <TheLastCaretakerTheta9Content /> </GuideArticlePage> </main> <Footer />
</>
);
}
