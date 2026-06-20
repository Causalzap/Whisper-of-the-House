import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ManuscriptLocationsContent from "@/data/the-adventures-of-elliot/manuscript-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-adventures-of-elliot/manuscript-locations`;

const imageUrls = [
`${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-finding-new-manuscripts.webp`,
`${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-manuscript-tome-pickup.webp`,
`${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-grey-hero-manuscript.webp`,
`${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-travelers-notes-manuscript.webp`,
];

const toc = [
{ id: "manuscript-locations-guide", label: "Manuscript locations guide" },
{ id: "how-manuscripts-work", label: "How manuscripts work" },
{
id: "historys-tapestry-not-unlocking",
label: "History's Tapestry not unlocking",
},
{ id: "manuscript-tags", label: "Manuscript tags" },
{ id: "manuscript-count-by-age", label: "Count by age" },
{ id: "all-manuscript-locations", label: "All 31 manuscripts" },
{ id: "epilogue-manuscripts", label: "Epilogue manuscripts" },
{ id: "northern-tower-manuscripts", label: "Northern Tower manuscripts" },
{ id: "mount-phoenix-manuscripts", label: "Mount Phoenix manuscripts" },
{ id: "easiest-manuscripts-to-miss", label: "Easiest manuscripts to miss" },
{ id: "missing-manuscript-checklist", label: "Missing manuscript checklist" },
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
href: "/the-adventures-of-elliot/cat-locations",
label: "The Adventures of Elliot Cat Locations",
},
{
    href: "/the-adventures-of-elliot/beginner-guide",
    label: "The Adventures of Elliot Beginner Guide",
    },
{
href: "/the-adventures-of-elliot/shards-of-life-locations",
label: "The Adventures of Elliot Shards of Life Locations",
},
];

const faqEntities = [
{
"@type": "Question",
name: "How many manuscripts are in The Adventures of Elliot?",
acceptedAnswer: {
"@type": "Answer",
text:
"There are 31 manuscripts in The Adventures of Elliot: The Millennium Tales.",
},
},
{
"@type": "Question",
name: "What do manuscripts unlock in The Adventures of Elliot?",
acceptedAnswer: {
"@type": "Answer",
text:
"Collecting every manuscript unlocks the History's Tapestry achievement or trophy.",
},
},
{
"@type": "Question",
name: "Do manuscripts give gameplay upgrades in The Adventures of Elliot?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. Manuscripts mainly provide lore, worldbuilding, character background, and completion progress. They do not give direct stat boosts, combat upgrades, or exploration abilities.",
},
},
{
"@type": "Question",
name: "Where can I check collected manuscripts in The Adventures of Elliot?",
acceptedAnswer: {
"@type": "Answer",
text:
"Collected manuscripts can be checked on the bookshelf on the second floor of the orphanage in the Kingdom of Huther.",
},
},
{
"@type": "Question",
name: "Does this manuscript guide follow the orphanage bookshelf order?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes. The numbers in the full table follow the same left-to-right, top-to-bottom order as the orphanage bookshelf. Match an empty bookshelf slot to the same number in the guide.",
},
},
{
"@type": "Question",
name: "Are manuscripts missable in The Adventures of Elliot?",
acceptedAnswer: {
"@type": "Answer",
text:
"Manuscripts are not permanently missable, but three only appear after the True Ending final boss. Before the epilogue, you should expect to stop at 28 out of 31 if everything else is collected.",
},
},
{
"@type": "Question",
name: "Why am I stuck at 28 out of 31 manuscripts?",
acceptedAnswer: {
"@type": "Answer",
text:
"You are probably missing the three epilogue manuscripts: Gogyo's Diary, Marnie's Diary, and Diona's Diary. Finish the True Ending, load the clear save, then collect them.",
},
},
{
"@type": "Question",
name: "Why is History's Tapestry not unlocking?",
acceptedAnswer: {
"@type": "Answer",
text:
"Compare your orphanage bookshelf order against the full manuscript list. The usual causes are missing an epilogue diary, a Northern Tower manuscript, a Mount Phoenix manuscript, or an ability-gated dungeon manuscript.",
},
},
{
"@type": "Question",
name: "Which manuscripts are after the True Ending final boss?",
acceptedAnswer: {
"@type": "Answer",
text:
"The epilogue manuscripts are Gogyo's Diary, Marnie's Diary, and Diona's Diary.",
},
},
{
"@type": "Question",
name: "Which manuscript should I check first if one is missing?",
acceptedAnswer: {
"@type": "Answer",
text:
"Start with the epilogue diaries, Northern Tower manuscripts, Mount Phoenix manuscripts, A Traveler's Notes on the Ice, A Traveler's Notes on the Sand, and Memorandum on Permilleshrooms.",
},
},
];

export const metadata: Metadata = {
title: "The Adventures of Elliot Manuscript Locations: All 31",
description:
"Find all 31 manuscripts in The Adventures of Elliot, fix History's Tapestry, check bookshelf order, 28/31, epilogue diaries and missing spots.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"The Adventures of Elliot Manuscript Locations: All 31 and History's Tapestry",
description:
"Track all 31 manuscripts in The Adventures of Elliot with orphanage bookshelf order, 28/31 cleanup, True Ending epilogue diaries, Northern Tower, Mount Phoenix, and History's Tapestry troubleshooting.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Finding new manuscripts in The Adventures of Elliot.",
},
],
},
twitter: {
card: "summary_large_image",
title: "The Adventures of Elliot Manuscript Locations: All 31",
description:
"Find all manuscripts, fix History's Tapestry, check 28/31 cleanup, epilogue diaries, Northern Tower and Mount Phoenix.",
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
name: "Manuscript Locations",
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
"The Adventures of Elliot Manuscript Locations: All 31, History's Tapestry, Bookshelf Order and 28/31 Cleanup",
description:
"A player-focused The Adventures of Elliot manuscript locations guide covering all 31 manuscripts, History's Tapestry, orphanage bookshelf order, left-to-right and top-to-bottom slot matching, 28 out of 31 pre-epilogue cleanup, True Ending epilogue manuscripts, Gogyo's Diary, Marnie's Diary, Diona's Diary, Northern Tower manuscript checks, Mount Phoenix manuscript checks, ability-gated manuscripts, and missing-manuscript troubleshooting.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-20",
dateModified: "2026-06-20",
articleSection: "Guides",
about: [
{
"@type": "VideoGame",
name: "The Adventures of Elliot: The Millennium Tales",
},
{
"@type": "Thing",
name: "The Adventures of Elliot manuscript locations",
},
{
"@type": "Thing",
name: "The Adventures of Elliot all manuscripts",
},
{
"@type": "Thing",
name: "History's Tapestry",
},
{
"@type": "Thing",
name: "orphanage bookshelf",
},
{
"@type": "Thing",
name: "28 out of 31 manuscripts",
},
{
"@type": "Thing",
name: "Gogyo's Diary",
},
{
"@type": "Thing",
name: "Marnie's Diary",
},
{
"@type": "Thing",
name: "Diona's Diary",
},
{
"@type": "Thing",
name: "Northern Tower manuscripts",
},
{
"@type": "Thing",
name: "Mount Phoenix manuscripts",
},
{
"@type": "Thing",
name: "True Ending manuscripts",
},
{
"@type": "Thing",
name: "Age of Safekeeping",
},
{
"@type": "Thing",
name: "Age of Reconstruction",
},
{
"@type": "Thing",
name: "Age of Magic",
},
{
"@type": "Thing",
name: "Age of Budding",
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
       title="The Adventures of Elliot Manuscript Locations: All 31"
       description="Find every manuscript with bookshelf order, History's Tapestry troubleshooting, 28/31 cleanup, True Ending epilogue diaries, Northern Tower and Mount Phoenix checks."
       gameTitle="The Adventures of Elliot"
       gameHref="/the-adventures-of-elliot"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 20, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <ManuscriptLocationsContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
