import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import DeltaruneChapter5GuideContent from "@/data/deltarune/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/deltarune`;

const imageUrls = [
`${siteUrl}/images/deltarune/deltarune-chapter-5-festival-start.webp`,
`${siteUrl}/images/deltarune/deltarune-chapter-5-mystery-key-door.webp`,
`${siteUrl}/images/deltarune/deltarune-chapter-5-pink-secret-boss-intro.webp`,
`${siteUrl}/images/deltarune/deltarune-chapter-5-weird-route-bed.webp`,
];

export const metadata: Metadata = {
title: "DELTARUNE Chapter 5 Guide: Pink Coins, Bosses & Routes",
description:
"DELTARUNE Chapter 5 guide for all 19 Pink Coins, Mystery Key, Pink/Miumu, Flowery, foxes, Secret Egg, Weird Route, Side B, Sans Bread and save files.",
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
name: "DELTARUNE Chapter 5 Guide",
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
"DELTARUNE Chapter 5 Guide: All 19 Pink Coins, Mystery Key, Pink/Miumu, Flowery, Foxes, Secret Egg, Weird Route, and Side B",
description:
"This DELTARUNE Chapter 5 guide explains the normal route, all 19 Pink Coins, the 10 Pink Coin Mystery Key gate, post-Pink flower gear, Pink / Miumu secret boss prep, Flowery final boss, foxes, Secret Egg, Weird Route, Sans Bread, the lake Proceed timer, Side B, and how to separate normal, cleanup, and Weird Route save files.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-27",
dateModified: "2026-06-27",
about: [
{
"@type": "VideoGame",
name: "DELTARUNE",
},
{
"@type": "Thing",
name: "DELTARUNE Chapter 5",
},
{
"@type": "Thing",
name: "Pink Coins",
},
{
"@type": "Thing",
name: "Mystery Key",
},
{
"@type": "Thing",
name: "Pink Door",
},
{
"@type": "Thing",
name: "Pink / Miumu Secret Boss",
},
{
"@type": "Thing",
name: "Flowery Final Boss",
},
{
"@type": "Thing",
name: "Foxes",
},
{
"@type": "Thing",
name: "Secret Egg",
},
{
"@type": "Thing",
name: "Weird Route",
},
{
"@type": "Thing",
name: "Side B",
},
{
"@type": "Thing",
name: "Sans Bread",
},
{
"@type": "Thing",
name: "Save Files",
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
name: "Should I do the normal route or Weird Route first in DELTARUNE Chapter 5?",
acceptedAnswer: {
"@type": "Answer",
text: "Do the normal route first unless you specifically want Side B. Chapter 5 Weird Route needs a previous Weird Route save state and should be kept on a separate file.",
},
},
{
"@type": "Question",
name: "How many Pink Coins are in DELTARUNE Chapter 5?",
acceptedAnswer: {
"@type": "Answer",
text: "There are 19 Pink Coins in Chapter 5.",
},
},
{
"@type": "Question",
name: "How many Pink Coins do I need for the Mystery Key?",
acceptedAnswer: {
"@type": "Answer",
text: "You need 10 Pink Coins to buy the Mystery Key.",
},
},
{
"@type": "Question",
name: "Should I keep collecting Pink Coins after 10?",
acceptedAnswer: {
"@type": "Answer",
text: "Yes, if you care about post-Pink flower gear. The remaining 9 coins are not useless.",
},
},
{
"@type": "Question",
name: "When should I do serious Pink Coin cleanup?",
acceptedAnswer: {
"@type": "Answer",
text: "Do serious cleanup after Aqua, Petal Feather movement, and shortcuts open, but before committing to Flowery.",
},
},
{
"@type": "Question",
name: "Is Pink / Miumu the final boss?",
acceptedAnswer: {
"@type": "Answer",
text: "No. Pink / Miumu is the Chapter 5 secret boss. Flowery is tied to the normal-route final stretch.",
},
},
{
"@type": "Question",
name: "What should I know before fighting Pink / Miumu?",
acceptedAnswer: {
"@type": "Answer",
text: "Track DOKI, not damage. Phase targets are 15 / 15 / 20 DOKI, and GigaFlirt needs 80 TP available after the TP cap is rebuilt.",
},
},
{
"@type": "Question",
name: "How many foxes do I need in Chapter 5?",
acceptedAnswer: {
"@type": "Answer",
text: "You need 3 foxes to pass Aqua, but all 5 local foxes open the nearby Pink Coin room.",
},
},
{
"@type": "Question",
name: "Where does the Secret Egg route start?",
acceptedAnswer: {
"@type": "Answer",
text: "The Secret Egg route starts at the wheat field between two gates. Harvest the wheat route, follow the balloon, solve the dog flower order, use the watering can, and reach the man behind the tree.",
},
},
{
"@type": "Question",
name: "Does Chapter 5 end after sealing the first fountain?",
acceptedAnswer: {
"@type": "Answer",
text: "No. Be ready for Flowery, the first fountain, the second fountain, and the Chapter 6 continuation.",
},
},
{
"@type": "Question",
name: "What is the first Weird Route warning sign?",
acceptedAnswer: {
"@type": "Answer",
text: "Kris refusing to get out of bed is the first major sign. If you expected a normal route, stop and check your save.",
},
},
{
"@type": "Question",
name: "Do I need Bread from Sans for Chapter 5 Weird Route?",
acceptedAnswer: {
"@type": "Answer",
text: "Yes. In Chapter 5 Weird Route, get Bread from Sans at the ice cream stand before going to the lake.",
},
},
{
"@type": "Question",
name: "What happens if I fail the lake Proceed sequence?",
acceptedAnswer: {
"@type": "Answer",
text: "The Weird Route can abort into an altered state, and Kris can later carry the Shattered Rose title. Reload if you wanted the clean Side B result.",
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
title="DELTARUNE Chapter 5 Guide"
description="Plan Chapter 5 with the normal route, all 19 Pink Coins, Mystery Key, Pink / Miumu, Flowery, foxes, Secret Egg, Weird Route, Side B, and clean save-file roles."
gameTitle="DELTARUNE"
gameHref="/deltarune"
breadcrumbBaseHref="/"
breadcrumbBaseLabel="Home"
updatedAt="June 27, 2026"
toc={[
{
id: "start-here",
label: "Start here",
},
{
id: "which-guide-to-use",
label: "Which guide to use",
},
{
id: "first-run-route",
label: "First-run route",
},
{
id: "pink-coins-and-secret-boss",
label: "Pink Coins",
},
{
id: "pink-boss-prep",
label: "Pink / Miumu",
},
{
id: "foxes-and-secret-egg",
label: "Foxes & Egg",
},
{
id: "normal-ending-route",
label: "Flowery ending",
},
{
id: "weird-route-warning",
label: "Weird Route",
},
{
id: "save-file-plan",
label: "Save files",
},
{
id: "when-to-backtrack",
label: "Cleanup checkpoint",
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
href: "/deltarune/chapter-5-secret-boss-pink-coins",
label: "All 19 Pink Coins and Mystery Key Guide",
},
{
href: "/deltarune/chapter-5-secret-boss-guide",
label: "Pink / Miumu Secret Boss Guide",
},
{
href: "/deltarune/chapter-5-final-boss-guide",
label: "Flowery Final Boss Guide",
},
{
href: "/deltarune/chapter-5-foxes-secret-egg",
label: "Foxes and Secret Egg Guide",
},
{
href: "/deltarune/chapter-5-weird-route",
label: "Chapter 5 Weird Route Guide",
},
{
href: "/#all-game-guides",
label: "All Game Guides",
},
]}
> <DeltaruneChapter5GuideContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
