import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import DarktideSkitariiWeaponsContent from "@/data/darktide/skitarii-weapons.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/darktide/skitarii-weapons`;

const imageUrls = [
`${siteUrl}/images/darktide/darktide-skitarii-starting-weapons.webp`,
`${siteUrl}/images/darktide/darktide-skitarii-arc-rifle-testing.webp`,
`${siteUrl}/images/darktide/darktide-skitarii-arc-rifle-blaze-away.webp`,
`${siteUrl}/images/darktide/darktide-skitarii-transonic-blades-attunement-test.webp`,
];

export const metadata: Metadata = {
title: "Darktide Skitarii Weapons Guide: Arc Rifle & Blades",
description:
"Choose Skitarii weapons by leveling role, Arc Maul safety, Phosphor vs Galvanic, Arc Rifle Blaze Away, Transonic Blades modes and Power Sword charges.",
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
name: "Skitarii Weapons Guide",
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
"Darktide Skitarii Weapons Guide: Arc Maul, Phosphor Pistol, Galvanic Rifle, Arc Rifle, Transonic Blades, and Power Sword",
description:
"This Darktide Skitarii weapons guide explains which weapons to use first while leveling, why Arc Maul is the safest early melee option, when to choose Phosphor Blast Pistol or Galvanic Rifle, how Arc Rifle works with Voltaic Arcs and Blaze Away, how Paired Transonic Blades use two attunements with Shred and Perfect Strike, how Mechanicus Power Sword charge management works, and which weapon mistakes to avoid before pushing harder difficulties.",
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
name: "Darktide Skitarii weapons",
},
{
"@type": "Thing",
name: "Skitarii Arc Maul",
},
{
"@type": "Thing",
name: "Skitarii Phosphor Blast Pistol",
},
{
"@type": "Thing",
name: "Skitarii Galvanic Rifle",
},
{
"@type": "Thing",
name: "Skitarii Arc Rifle",
},
{
"@type": "Thing",
name: "Arc Rifle Blaze Away",
},
{
"@type": "Thing",
name: "Paired Transonic Blades",
},
{
"@type": "Thing",
name: "Transonic Blades Shred",
},
{
"@type": "Thing",
name: "Transonic Blades Perfect Strike",
},
{
"@type": "Thing",
name: "Mechanicus Power Sword",
},
{
"@type": "Thing",
name: "Skitarii Chordclaw",
},
{
"@type": "Thing",
name: "Skitarii Voltaic Arcs",
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
name: "What is the best Skitarii weapon for leveling?",
acceptedAnswer: {
"@type": "Answer",
text: "Arc Maul is the safest early melee weapon. For ranged, use Phosphor Blast Pistol for comfort or Galvanic Rifle if you enjoy precision weak spot shooting.",
},
},
{
"@type": "Question",
name: "Is Arc Maul good for Skitarii?",
acceptedAnswer: {
"@type": "Answer",
text: "Yes. Arc Maul is a strong early weapon because it electrocutes enemies, builds up to 8 special charges, and gives safe stagger while you learn the class.",
},
},
{
"@type": "Question",
name: "Should I use Phosphor Blast Pistol or Galvanic Rifle?",
acceptedAnswer: {
"@type": "Answer",
text: "Use Phosphor Blast Pistol for smoother leveling and quick reactions. Use Galvanic Rifle if you want precision headshots and weak spot scaling.",
},
},
{
"@type": "Question",
name: "What are the best Galvanic Rifle blessings?",
acceptedAnswer: {
"@type": "Answer",
text: "For a precision crit route, use Deadly Accurate and Headhunter. That setup only makes sense if you are landing weak spot hits consistently.",
},
},
{
"@type": "Question",
name: "Is Arc Rifle worth using?",
acceptedAnswer: {
"@type": "Answer",
text: "Yes, after your build has Voltaic support. Arc Rifle is strongest when enemies are already being electrocuted and its Arc effect can spread through groups.",
},
},
{
"@type": "Question",
name: "What Arc Rifle blessing should I chase first?",
acceptedAnswer: {
"@type": "Answer",
text: "The current first chase is Blaze Away. Cavalcade is acceptable as a temporary roll while testing.",
},
},
{
"@type": "Question",
name: "Are Paired Transonic Blades good?",
acceptedAnswer: {
"@type": "Answer",
text: "Yes. They are the best melee specialization route if you learn the two attunements and build around crits, Chordclaw, and Flensing Protocols.",
},
},
{
"@type": "Question",
name: "What are the best Paired Transonic Blades blessings?",
acceptedAnswer: {
"@type": "Answer",
text: "Start with Shred and Perfect Strike. Shred builds crit chance on chained hits, while Perfect Strike helps critical hits push through hit mass armor bonuses.",
},
},
{
"@type": "Question",
name: "Is Mechanicus Power Sword worth using?",
acceptedAnswer: {
"@type": "Answer",
text: "Yes, if you like charge-management melee. It stores up to 6 Special charges and rewards careful timing, but it is not automatically better than Arc Maul or Transonic Blades.",
},
},
{
"@type": "Question",
name: "What should I read after the Skitarii weapons guide?",
acceptedAnswer: {
"@type": "Answer",
text: "Use the Best Skitarii Builds Guide for talent routes, or the Servo Skull Guide for objective, revive, and skull command problems.",
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
title="Darktide Skitarii Weapons Guide"
description="Choose the right Skitarii weapon for each stage: Arc Maul for safe leveling, Phosphor or Galvanic for ranged comfort, Arc Rifle for Voltaic control, and Transonic Blades for Chordclaw melee."
gameTitle="Darktide"
gameHref="/darktide"
breadcrumbBaseHref="/"
breadcrumbBaseLabel="Home"
updatedAt="June 24, 2026"
toc={[
{
id: "best-skitarii-weapons-overview",
label: "Weapons overview",
},
{
id: "arc-maul",
label: "Arc Maul",
},
{
id: "phosphor-vs-galvanic",
label: "Phosphor vs Galvanic",
},
{
id: "arc-rifle",
label: "Arc Rifle",
},
{
id: "transonic-blades",
label: "Transonic Blades",
},
{
id: "mechanicus-power-sword",
label: "Power Sword",
},
{
id: "weapon-power-and-upgrades",
label: "Upgrade timing",
},
{
id: "common-weapon-mistakes",
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
href: "/darktide/skitarii-servo-skull",
label: "Skitarii Servo Skull Guide",
},
{
href: "/#all-game-guides",
label: "All Game Guides",
},
]}
> <DarktideSkitariiWeaponsContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
