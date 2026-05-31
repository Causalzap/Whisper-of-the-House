import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BestStartingWeaponContent from "@/data/mina-the-hollower/best-starting-weapon.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/mina-the-hollower/best-starting-weapon`;

const imageUrls = [
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-starting-weapon-choice.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-nightstar-description.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-whisper-vesper-description.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-blaststrike-maul-description.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-blaststrike-maul-roll.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-early-flying-enemy.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-underlab-rest-point.webp`,
`${siteUrl}/images/mina-the-hollower/mina-the-hollower-attack-bone-up.webp`,
];

const toc = [
{ id: "best-starting-weapon", label: "Best starting weapon" },
{ id: "nightstar", label: "Nightstar" },
{ id: "whisper-vesper", label: "Whisper and Vesper" },
{ id: "blaststrike-maul", label: "Blaststrike Maul" },
{ id: "weapon-by-player-type", label: "By player type" },
{ id: "comparison", label: "Weapon comparison" },
{ id: "wrong-weapon-and-early-decisions", label: "Wrong weapon?" },
{ id: "all-weapons-later", label: "Other weapons" },
{ id: "common-mistakes", label: "Common mistakes" },
{ id: "recommended-start", label: "Beginner setup" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
    {
        href: "/mina-the-hollower/all-trinkets-guide",
        label: "All Trinkets Guide",
      },
{ href: "/mina-the-hollower", label: "Mina the Hollower Beginner Guide" },
{
href: "/mina-the-hollower/where-to-go-first",
label: "Where to Go First in Mina the Hollower",
},
{
href: "/mina-the-hollower/how-to-get-map",
label: "How to Get the Map in Mina the Hollower",
},
{
href: "/mina-the-hollower/bones-farming",
label: "How to Farm Bones Fast in Mina the Hollower",
},
{
href: "/mina-the-hollower/best-early-trinkets",
label: "Best Early Trinkets in Mina the Hollower",
},
{
href: "/mina-the-hollower/fast-travel",
label: "How to Unlock Fast Travel in Mina the Hollower",
},
];

export const metadata: Metadata = {
title: "Mina the Hollower Best Starting Weapon Guide",
description:
"Choose the best starting weapon in Mina the Hollower: Nightstar, Whisper and Vesper, or Blaststrike Maul. Learn upgrades, costs and what to buy later.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Mina the Hollower Best Starting Weapon: Nightstar, Whisper and Vesper, or Blaststrike Maul",
description:
"Find the best starting weapon for your playstyle, compare Nightstar, Whisper and Vesper, and Blaststrike Maul, then learn where to buy and upgrade weapons.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 767,
height: 410,
alt: "Mina the Hollower starting weapon choice with Whisper and Vesper, Nightstar, and Blaststrike Maul.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Mina the Hollower Best Starting Weapon Guide",
description:
"Compare Nightstar, Whisper and Vesper, and Blaststrike Maul, plus weapon buying, upgrade costs and what to do if you picked wrong.",
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
name: "Mina the Hollower Guide",
item: `${siteUrl}/mina-the-hollower`,
},
{
"@type": "ListItem",
position: 3,
name: "Best Starting Weapon",
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
"Mina the Hollower Best Starting Weapon Guide: Nightstar, Whisper and Vesper, Blaststrike Maul, Weapon Buying and Upgrade Costs",
description:
"A player-focused Mina the Hollower starting weapon guide comparing Nightstar, Whisper and Vesper, and Blaststrike Maul for beginners and different playstyles. It explains why Nightstar is the safest first pick, when to choose the daggers or Maul, how four-direction combat affects weapon reach, how the Blaststrike Maul invulnerable roll works, whether you should restart after picking the wrong weapon, where to buy other weapons at Legovich's Arms in Ossex City Center, early weapon and upgrade costs, the Armand duel trigger, later weapons such as Battery Buster and Guardian Casket, and what to upgrade after choosing a weapon.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-05-30",
dateModified: "2026-05-30",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "Mina the Hollower" },
{ "@type": "Thing", name: "Best Starting Weapon" },
{ "@type": "Thing", name: "Nightstar" },
{ "@type": "Thing", name: "Whisper and Vesper" },
{ "@type": "Thing", name: "Blaststrike Maul" },
{ "@type": "Thing", name: "Legovich's Arms" },
{ "@type": "Thing", name: "Ossex City Center" },
{ "@type": "Thing", name: "Weapon upgrades" },
{ "@type": "Thing", name: "Armand duel" },
{ "@type": "Thing", name: "Battery Buster" },
{ "@type": "Thing", name: "Guardian Casket" },
{ "@type": "Thing", name: "Bone costs" },
{ "@type": "Thing", name: "Four-direction combat" },
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
name: "What is the best starting weapon in Mina the Hollower?",
acceptedAnswer: {
"@type": "Answer",
text:
"The best starting weapon for most beginners is Nightstar because its range gives you safer spacing while you learn four-direction combat and enemy movement.",
},
},
{
"@type": "Question",
name: "Can you try weapons before choosing in Mina the Hollower?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. You can test all three starting weapons before committing. Swing each one a few times and choose the weapon that feels safest under pressure.",
},
},
{
"@type": "Question",
name: "Should I restart if I chose the wrong weapon?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. You can buy other weapons later at Legovich's Arms in Ossex City Center, so do not delete your save just because your first weapon feels awkward.",
},
},
{
"@type": "Question",
name: "Where do you buy other weapons after choosing?",
acceptedAnswer: {
"@type": "Answer",
text:
"Go to Legovich's Arms in Ossex City Center. You can buy the other starting weapons there and later build toward the full weapon set.",
},
},
{
"@type": "Question",
name: "How much do weapons cost in Mina the Hollower?",
acceptedAnswer: {
"@type": "Answer",
text:
"Plan around 2,000 Bones for early weapon purchases at Legovich's Arms.",
},
},
{
"@type": "Question",
name: "How much do weapon upgrades cost?",
acceptedAnswer: {
"@type": "Answer",
text:
"The first weapon upgrade costs 2,000 Bones. Later upgrades cost 2,500 Bones each.",
},
},
{
"@type": "Question",
name: "What happens when you upgrade a weapon a second time?",
acceptedAnswer: {
"@type": "Answer",
text:
"Trying to upgrade a weapon a second time triggers the Armand duel. Be ready before committing to that upgrade.",
},
},
{
"@type": "Question",
name: "Can you change weapons later?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. You are not locked into the starting weapon forever, so do not restart just because your first pick feels awkward.",
},
},
{
"@type": "Question",
name: "Why is Nightstar good for beginners?",
acceptedAnswer: {
"@type": "Answer",
text:
"Nightstar has better reach, which matters because Mina attacks in four directions. It gives you more space to line up attacks without standing directly in danger.",
},
},
{
"@type": "Question",
name: "Is Blaststrike Maul safer than it looks?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes, if you use it correctly. While charging, Mina can roll with invulnerability, but the Maul is still risky if you mistime the charge or roll into danger.",
},
},
{
"@type": "Question",
name: "What other weapons unlock later?",
acceptedAnswer: {
"@type": "Answer",
text:
"There are five weapons total. Beyond the three starters, later weapons include Battery Buster and Guardian Casket.",
},
},
{
"@type": "Question",
name: "Should I buy a new weapon early?",
acceptedAnswer: {
"@type": "Answer",
text:
"Only if your starting weapon feels bad. Otherwise, buy the Isle Map and invest in Attack, Defense and survival upgrades first.",
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
       title="Which Starting Weapon Should You Pick?"
       description="Choose between Nightstar, Whisper and Vesper, and Blaststrike Maul without restarting later. This guide explains which weapon is safest, when to buy another one and how upgrades work."
       gameTitle="Mina the Hollower"
       gameHref="/mina-the-hollower"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="May 30, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <BestStartingWeaponContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
