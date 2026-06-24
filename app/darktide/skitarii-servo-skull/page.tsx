import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import DarktideSkitariiServoSkullContent from "@/data/darktide/skitarii-servo-skull.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/darktide/skitarii-servo-skull`;

const imageUrls = [
`${siteUrl}/images/darktide/darktide-skitarii-servo-skull-objective.webp`,
`${siteUrl}/images/darktide/darktide-skitarii-servo-skull-data-interrogator.webp`,
`${siteUrl}/images/darktide/darktide-skitarii-medicae-servo-skull-build.webp`,
`${siteUrl}/images/darktide/darktide-skitarii-purgator-servo-skull-build.webp`,
];

export const metadata: Metadata = {
title: "Darktide Skitarii Servo Skull Guide: Commands & Revives",
description:
"Use Skitarii Servo Skull with double-tap Tag, Data Interrogator, Medicae revives, Purgator fire, Noospheric Command and shared Charges.",
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
name: "Darktide Guide",
item: `${siteUrl}/darktide`,
},
{
"@type": "ListItem",
position: 3,
name: "Skitarii Servo Skull Guide",
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
"Darktide Skitarii Servo Skull Guide: Double-Tap Tag, Data Interrogator, Medicae, Purgator, and Noospheric Command",
description:
"This Darktide Skitarii Servo Skull guide explains how to send the base Servo-Skull with double-tap Tag, how Data Interrogator automation works, why Servo Skull commands fail, how Medicae Servo-Skull revives and protects allies, how Purgator Servo-Skull flamer placement works, how shared Charges affect Medicae and Purgator, what Noospheric Command does, and when Servo Skull is better than doing objectives manually.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-24",
dateModified: "2026-06-24",
about: [
{
"@type": "VideoGame",
name: "Warhammer 40,000: Darktide",
},
{
"@type": "Thing",
name: "Darktide Skitarii Servo Skull",
},
{
"@type": "Thing",
name: "Skitarii double-tap Tag",
},
{
"@type": "Thing",
name: "Skitarii Data Interrogator",
},
{
"@type": "Thing",
name: "Medicae Servo-Skull",
},
{
"@type": "Thing",
name: "Purgator Servo-Skull",
},
{
"@type": "Thing",
name: "Noospheric Command",
},
{
"@type": "Thing",
name: "Improved Servo-Skull",
},
{
"@type": "Thing",
name: "Artificer Servo Skull",
},
{
"@type": "Thing",
name: "Skitarii shared Charges",
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
name: "How do I send Skitarii Servo Skull?",
acceptedAnswer: {
"@type": "Answer",
text: "Double-tap your Tag input to send the base Servo-Skull at enemies or a Data Interrogator. Use Blitz or grenade input for Medicae and Purgator Servo-Skull actions.",
},
},
{
"@type": "Question",
name: "Why is my Servo Skull not working?",
acceptedAnswer: {
"@type": "Answer",
text: "Servo Skull usually fails because you are using the wrong input, targeting the wrong thing, missing line of sight, or out of shared Medicae and Purgator Charges.",
},
},
{
"@type": "Question",
name: "What does base Servo-Skull Blitz empower do?",
acceptedAnswer: {
"@type": "Answer",
text: "Base Servo-Skull Blitz empower gives +100% Fire Rate, +25% Damage, applies 1 Burn stack per hit up to 8, and makes the target take +15% more damage for 5 seconds.",
},
},
{
"@type": "Question",
name: "What does Noospheric Command do?",
acceptedAnswer: {
"@type": "Answer",
text: "Noospheric Command makes the base Servo-Skull attack faster for 2 seconds when you order it to attack an enemy, but it costs 25% Capacitance. It is best for players who actively use double-tap Tag for skull damage.",
},
},
{
"@type": "Question",
name: "What does Improved Servo-Skull do?",
acceptedAnswer: {
"@type": "Answer",
text: "Improved or Artificer Servo-Skull makes the previously temporary empowered bonuses permanent, so the base skull contributes more consistently.",
},
},
{
"@type": "Question",
name: "Can Servo Skull do Data Interrogator objectives?",
acceptedAnswer: {
"@type": "Answer",
text: "Yes. Double-tap Tag on a valid Data Interrogator to send the skull to solve it while you keep fighting.",
},
},
{
"@type": "Question",
name: "How does Medicae Servo-Skull work?",
acceptedAnswer: {
"@type": "Answer",
text: "Target a knocked down, hogtied, or netted ally with Blitz input. Medicae Servo-Skull revives or injects them, then gives +75% Toughness Damage Reduction and 20% Toughness per second for 5 seconds.",
},
},
{
"@type": "Question",
name: "Do Medicae and Purgator Servo-Skull share Charges?",
acceptedAnswer: {
"@type": "Answer",
text: "Yes. Medicae Servo-Skull and Purgator Servo-Skull share 4 Charges, so using one can leave the other unavailable.",
},
},
{
"@type": "Question",
name: "What does Purgator Servo-Skull do?",
acceptedAnswer: {
"@type": "Answer",
text: "Purgator Servo-Skull deploys a Flamer Servo-Skull at a targeted area. Use Primary Action to switch between Dispersed and Focused Fire Mode.",
},
},
{
"@type": "Question",
name: "Is Servo Skull better than doing objectives manually?",
acceptedAnswer: {
"@type": "Answer",
text: "Not always. Servo Skull is better when staying free to fight is more important than doing the objective yourself.",
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
title="Darktide Skitarii Servo Skull Guide"
description="Learn when to double-tap Tag, when to use Blitz input, how Data Interrogator automation works, how Medicae and Purgator share Charges, and when Noospheric Command is worth taking."
gameTitle="Darktide"
gameHref="/darktide"
breadcrumbBaseHref="/"
breadcrumbBaseLabel="Home"
updatedAt="June 24, 2026"
toc={[
{
id: "servo-skull-inputs",
label: "Inputs",
},
{
id: "servo-skull-types-and-numbers",
label: "Types and numbers",
},
{
id: "base-servo-skull",
label: "Base Servo-Skull",
},
{
id: "data-interrogator",
label: "Data Interrogator",
},
{
id: "why-servo-skull-not-working",
label: "Why it fails",
},
{
id: "medicae-servo-skull",
label: "Medicae Skull",
},
{
id: "purgator-servo-skull",
label: "Purgator Skull",
},
{
id: "objective-vs-manual",
label: "Objective vs manual",
},
{
id: "servo-skull-build-priority",
label: "Build priority",
},
{
id: "common-servo-skull-mistakes",
label: "Common mistakes",
},
{
id: "faq",
label: "FAQ",
},
]}
relatedLinks={[
{
href: "/darktide",
label: "Darktide Skitarii Guide Hub",
},
{
href: "/darktide/best-skitarii-builds",
label: "Best Skitarii Builds Guide",
},
{
href: "/darktide/skitarii-weapons",
label: "Skitarii Weapons Guide",
},
{
href: "/#all-game-guides",
label: "All Game Guides",
},
]}
> <DarktideSkitariiServoSkullContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
