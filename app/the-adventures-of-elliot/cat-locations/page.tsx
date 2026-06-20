import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import CatLocationsContent from "@/data/the-adventures-of-elliot/cat-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-adventures-of-elliot/cat-locations`;

const imageUrls = [
`${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-cat-rewards-katzenmeister.webp`,
`${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-cat-traveler-quest-start.webp`,
];

const toc = [
{ id: "cat-locations-guide", label: "Cat locations guide" },
{ id: "how-to-start-cat-quest", label: "Start the cat quest" },
{
id: "capricious-neighbors-cat-quest-not-starting",
label: "Capricious Neighbors not starting",
},
{ id: "all-cat-rewards", label: "Cat rewards" },
{ id: "cat-needle-not-showing-cats", label: "Cat Needle not showing cats" },
{ id: "best-cat-cleanup-route", label: "Best cleanup route" },
{ id: "cat-tags", label: "Cat tags" },
{ id: "cat-count-by-age", label: "Cat count by age" },
{
id: "age-of-safekeeping-cat-locations",
label: "Age of Safekeeping cats",
},
{
id: "age-of-reconstruction-cat-locations",
label: "Age of Reconstruction cats",
},
{
id: "mount-phoenix-cat-not-appearing",
label: "Mount Phoenix cat not appearing",
},
{ id: "age-of-magic-cat-locations", label: "Age of Magic cats" },
{
id: "geared-ruins-cat-not-appearing",
label: "Geared Ruins cat not appearing",
},
{ id: "age-of-budding-cat-locations", label: "Age of Budding cats" },
{ id: "easiest-cats-to-miss", label: "Easiest cats to miss" },
{ id: "true-ending-cats-locked", label: "True Ending cats" },
{ id: "missing-one-cat", label: "Missing one cat" },
{ id: "what-to-read-next", label: "What to read next" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
{
href: "/the-adventures-of-elliot",
label: "The Adventures of Elliot Guide Hub",
},
{
href: "/the-adventures-of-elliot/walkthrough",
label: "The Adventures of Elliot Walkthrough",
},
{
href: "/the-adventures-of-elliot/achievements-guide",
label: "The Adventures of Elliot Achievements Guide",
},
{
    href: "/the-adventures-of-elliot/manuscript-locations",
    label: "The Adventures of Elliot Manuscript Locations",
    },
{
href: "/the-adventures-of-elliot/shards-of-life-locations",
label: "The Adventures of Elliot Shards of Life Locations",
},
{
href: "/the-adventures-of-elliot/beginner-guide",
label: "The Adventures of Elliot Beginner Guide",
},
];

const faqEntities = [
{
"@type": "Question",
name: "Can I miss cats permanently in The Adventures of Elliot?",
acceptedAnswer: {
"@type": "Answer",
text:
"Most missing-cat problems come from checking the wrong age, missing a dungeon route, or searching before a story-gated cat appears. Before assuming a cat is gone forever, check the correct age, Cat Needle result, dungeon entrance, and True Ending route state.",
},
},
{
"@type": "Question",
name: "Do I need all 50 cats for the True Ending in The Adventures of Elliot?",
acceptedAnswer: {
"@type": "Answer",
text:
"The full 50-cat set is for the final cat reward, Medal of the Katzenmeister. However, three cats are tied to the True Ending route, so cat collection and late story progress overlap.",
},
},
{
"@type": "Question",
name: "Why is Cat Needle not showing the last cat?",
acceptedAnswer: {
"@type": "Answer",
text:
"The cat may be in another age, behind a dungeon route, on a different height level, or locked behind True Ending progress. Check the correct age, route state, dungeon entrance, shortcut, cave, ladder, and sublevel before rechecking every open field.",
},
},
{
"@type": "Question",
name: "Why is the Mount Phoenix cat not appearing in The Adventures of Elliot?",
acceptedAnswer: {
"@type": "Answer",
text:
"The Mount Phoenix cat in the Age of Reconstruction is tied to the True Ending route. If it is not appearing, continue the True Ending quest line first, then return to Mount Phoenix. Do not confuse it with the Age of Magic Mount Phoenix cat.",
},
},
{
"@type": "Question",
name: "Why is the Geared Ruins cat not appearing in The Adventures of Elliot?",
acceptedAnswer: {
"@type": "Answer",
text:
"There are two important Geared Ruins checks. Cat 38 is in the Age of Magic and is tied to the True Ending route, while Cat 44 is in the Age of Budding on the second level. Confirm the age and route state before searching again.",
},
},
{
"@type": "Question",
name: "Why is Capricious Neighbors cat quest not starting?",
acceptedAnswer: {
"@type": "Answer",
text:
"If Capricious Neighbors is not starting, progress the main story until the Moonmirror step is complete, then return to the Kingdom of Huther and continue the Euygene or town dialogue. After the route opens, look for the Ailurophilic Traveler near the fountain.",
},
},
{
"@type": "Question",
name: "Is Medal of the Katzenmeister useful?",
acceptedAnswer: {
"@type": "Answer",
text:
"Medal of the Katzenmeister is mainly a decorative completion reward. The more practical cat rewards are Cat Needle, Bomb Pouch, and Quiver.",
},
},
{
"@type": "Question",
name: "What is the fastest final cleanup order for cats?",
acceptedAnswer: {
"@type": "Answer",
text:
"Check Safekeeping, Reconstruction, Magic, and Budding in order. In each age, prioritize dungeons, Monster Trails, shortcut routes, sublevels, and True Ending cats before rechecking open fields.",
},
},
];

export const metadata: Metadata = {
title: "The Adventures of Elliot Cat Locations: All 50 Cats",
description:
"Find all 50 cats in The Adventures of Elliot with Cat Needle, Ailurophilic Traveler rewards, True Ending cats, Mount Phoenix, Geared Ruins and cleanup tips.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"The Adventures of Elliot Cat Locations: All 50 Cats, Cat Needle and True Ending Cats",
description:
"Use a cleanup route for all 50 cats in The Adventures of Elliot, including Ailurophilic Traveler rewards, Cat Needle, Capricious Neighbors, Mount Phoenix, Geared Ruins, Grandtree, missing-cat troubleshooting, and True Ending cats.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "The Adventures of Elliot cat reward board showing Cat Needle, Bomb Pouch, Quiver, Golden Egg, and Medal of the Katzenmeister.",
},
],
},
twitter: {
card: "summary_large_image",
title: "The Adventures of Elliot Cat Locations: All 50 Cats",
description:
"Find every cat with Cat Needle, Ailurophilic Traveler rewards, True Ending cats and missing-cat troubleshooting.",
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
name: "The Adventures of Elliot Guide",
item: `${siteUrl}/the-adventures-of-elliot`,
},
{
"@type": "ListItem",
position: 3,
name: "Cat Locations",
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
"The Adventures of Elliot Cat Locations: All 50 Cats, Cat Needle, Rewards and True Ending Cats",
description:
"A player-focused The Adventures of Elliot cat locations guide covering all 50 cats, the Ailurophilic Traveler, Cat Needle, reward thresholds, Capricious Neighbors, missing-cat troubleshooting, Mount Phoenix cat not appearing, Geared Ruins cat not appearing, True Ending cats, dungeon cats, ability-gated cats, and a phase-based cleanup route across the Age of Safekeeping, Age of Reconstruction, Age of Magic, and Age of Budding.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-18",
dateModified: "2026-06-20",
articleSection: "Guides",
about: [
{
"@type": "VideoGame",
name: "The Adventures of Elliot: The Millennium Tales",
},
{ "@type": "Thing", name: "The Adventures of Elliot cat locations" },
{ "@type": "Thing", name: "The Adventures of Elliot 50 cats" },
{ "@type": "Thing", name: "The Adventures of Elliot missing one cat" },
{ "@type": "Thing", name: "Cat Needle not showing cats" },
{ "@type": "Thing", name: "Ailurophilic Traveler" },
{ "@type": "Thing", name: "Capricious Neighbors" },
{ "@type": "Thing", name: "Mount Phoenix cat not appearing" },
{ "@type": "Thing", name: "Geared Ruins cat not appearing" },
{ "@type": "Thing", name: "True Ending cats" },
{ "@type": "Thing", name: "Medal of the Katzenmeister" },
{ "@type": "Thing", name: "Cat Needle" },
{ "@type": "Thing", name: "Bomb Pouch" },
{ "@type": "Thing", name: "Quiver" },
{ "@type": "Thing", name: "Golden Egg" },
{ "@type": "Thing", name: "Kingdom of Huther fountain" },
{ "@type": "Thing", name: "Age of Safekeeping" },
{ "@type": "Thing", name: "Age of Reconstruction" },
{ "@type": "Thing", name: "Age of Magic" },
{ "@type": "Thing", name: "Age of Budding" },
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
mainEntity: faqEntities,
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
       title="The Adventures of Elliot Cat Locations: All 50 Cats"
       description="Find every cat with a phase-based cleanup route for the Ailurophilic Traveler, Cat Needle, reward milestones, True Ending cats, Mount Phoenix, Geared Ruins, and missing-cat problems."
       gameTitle="The Adventures of Elliot"
       gameHref="/the-adventures-of-elliot"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 20, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <CatLocationsContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
