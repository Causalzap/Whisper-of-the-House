import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import HowToMakeMoneyContent from "@/data/cheap-car-repair/how-to-make-money.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/cheap-car-repair/how-to-make-money`;

const imageUrls = [
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-good-enough-payout.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-first-job-objectives.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-sloppiness-bonus.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-sloppiness-detected-penalty.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-rust-grinder.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-daddys-little-girl-fluid-mixing-table.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-fuel-filter-location.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-christopher-kingman-job-list.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-serve-clients-earn-cash.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-scrapyard-parts.webp`,
`${siteUrl}/images/cheap-car-repair/cheap-car-repair-used-parts-sell-scrap.webp`,
];

const toc = [
{ id: "how-money-works", label: "How money works" },
{ id: "best-jobs-for-money", label: "Best jobs for money" },
{ id: "early-fast-money-route", label: "Early fast money route" },
{ id: "first-job-money", label: "First job money lesson" },
{ id: "sloppiness-and-profit", label: "Sloppiness and profit" },
{ id: "cheap-shortcuts-that-save-money", label: "Cheap shortcuts" },
{ id: "bodywork-profit", label: "Bodywork profit" },
{ id: "fluid-jobs-profit", label: "Fluid jobs" },
{ id: "found-parts-profit", label: "Found parts" },
{ id: "your-own-car-investment", label: "Your own car" },
{ id: "dangerous-customers", label: "Dangerous customers" },
{ id: "regular-clients", label: "Regular clients" },
{ id: "scrapyard-and-store", label: "Scrapyard and store" },
{ id: "money-mistakes", label: "Money mistakes" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
{ href: "/cheap-car-repair", label: "Cheap Car Repair Complete Guide" },
{
href: "/cheap-car-repair/daddys-little-girl-mission",
label: "Daddy's Little Girl Mission Walkthrough",
},
{
href: "/cheap-car-repair/controls-drop-items-save-tools",
label: "Controls, Drop Items, Save and Tools Guide",
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
title: "How to Make Money in Cheap Car Repair Fast",
description:
"Make money fast in Cheap Car Repair with better job choices, cheap parts, found parts, sloppiness bonuses, regular clients and early profit routes.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"How to Make Money in Cheap Car Repair: Best Jobs, Cheap Parts and Sloppiness",
description:
"Learn the best early ways to make money in Cheap Car Repair, which jobs are worth taking, when cheap parts help, how sloppiness affects profit and when to repair your own car.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Cheap Car Repair payout screen showing a good-enough repair with salary and final money total.",
},
],
},
twitter: {
card: "summary_large_image",
title: "How to Make Money in Cheap Car Repair Fast",
description:
"Pick better jobs, avoid bad purchases, use cheap parts safely, understand sloppiness bonuses and build a steady early cash route.",
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
name: "How to Make Money",
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
"How to Make Money in Cheap Car Repair: Best Jobs, Early Fast Money Route, Cheap Parts, Found Parts, Sloppiness Bonus and Customer Risk",
description:
"A player-focused Cheap Car Repair money guide explaining how to make money fast, how to judge whether a job is worth doing, which early job types are best for profit, how base salary, part cost, time cost and sloppiness outcomes affect final payout, how to use regular clients for repeat cash, when to search before buying parts, how to use found parts, when cheap shortcuts save money, what sloppiness bonus and sloppiness detected mean, how to decide whether to repair your own car, when dangerous customers are not worth scamming, and how to avoid common money mistakes.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-05-29",
dateModified: "2026-05-29",
about: [
{ "@type": "VideoGame", name: "Cheap Car Repair" },
{ "@type": "Thing", name: "Cheap Car Repair Money Guide" },
{ "@type": "Thing", name: "How to Make Money" },
{ "@type": "Thing", name: "Best Jobs for Money" },
{ "@type": "Thing", name: "Fast Money Route" },
{ "@type": "Thing", name: "Cheap Parts" },
{ "@type": "Thing", name: "Found Parts" },
{ "@type": "Thing", name: "Sloppiness Bonus" },
{ "@type": "Thing", name: "Sloppiness Detected" },
{ "@type": "Thing", name: "Regular Clients" },
{ "@type": "Thing", name: "Scrapyard" },
{ "@type": "Thing", name: "Part Store" },
{ "@type": "Thing", name: "Repair Your Own Car" },
{ "@type": "Thing", name: "Customer Risk" },
{ "@type": "Thing", name: "Christopher Kingman" },
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
name: "What is the best way to make money in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Take jobs where the payout is higher than your part cost, supply cost and time cost. Use found parts, finish only the required objectives and save good parts for your own car or higher-paying jobs.",
},
},
{
"@type": "Question",
name: "What jobs pay the most in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Large multi-part jobs can pay more, but they are only good profit if you already have the parts or can find them cheaply. Early on, quick fluid, tire, battery and filter jobs can be better money than a big job that forces you to buy expensive parts.",
},
},
{
"@type": "Question",
name: "What is the fastest early money route in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Finish small jobs quickly, use driveway clients for repeat cash, search hinted locations before buying parts and avoid long repairs until you know the missing parts.",
},
},
{
"@type": "Question",
name: "Should I repair my own car in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes, when the story requires it or when the part gives long-term value. Do not over-invest in cosmetic repairs too early if those parts could finish a paying customer job.",
},
},
{
"@type": "Question",
name: "What does sloppiness bonus mean in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"A sloppiness bonus means your cheap repair worked in your favor. You saved value through bad or cheap work, and the customer did not notice enough to punish you.",
},
},
{
"@type": "Question",
name: "What does sloppiness detected mean in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Sloppiness detected means the customer noticed the bad work. The shortcut can reduce your payout, remove the bonus or create a follow-up problem.",
},
},
{
"@type": "Question",
name: "Should I use proper parts or cheap parts in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use cheap parts only when the job accepts them and the saved value is worth the risk. For the full decision framework, use the cheap shortcuts section of the guide.",
},
},
{
"@type": "Question",
name: "Is painting over rust good for profit in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Only when the job accepts it. Painting too early can save time, but if the objective still wants rust removal or filler work, it can create sloppiness instead of profit.",
},
},
{
"@type": "Question",
name: "Are regular clients worth doing in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. Regular driveway clients are your repeat cash source once they start appearing. They are useful between story jobs, especially when their repair uses parts you already have.",
},
},
{
"@type": "Question",
name: "Is the scrapyard worth using in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. The scrapyard can save money on common replacement parts. It is most useful when a job needs a part that would cost too much at the store.",
},
},
{
"@type": "Question",
name: "Should I buy parts or search first in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"Search first when the game gives a hint or the part is likely nearby. Buy only when the missing part is specific, cheap enough or the job payout justifies saving time.",
},
},
{
"@type": "Question",
name: "Why am I losing money in Cheap Car Repair?",
acceptedAnswer: {
"@type": "Answer",
text:
"You may be buying too many parts, wasting supplies, getting sloppiness detected, using good parts on low-value jobs or starting big repairs without checking the missing parts first.",
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
       title="How to Make Money Fast in Cheap Car Repair"
       description="Pick better jobs, keep part costs low, use cheap repairs safely and learn when sloppiness turns into profit instead of a penalty."
       gameTitle="Cheap Car Repair"
       gameHref="/cheap-car-repair"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="May 29, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <HowToMakeMoneyContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
