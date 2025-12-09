// data/blogArticles.ts - 作为文章索引和元数据存储
export interface BlogArticleMeta {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  category?: string;
  readTime?: string;
  publishedAt?: string;
  imageUrl?: string;
}

// 这里只存储文章的元数据，不存储具体内容
export const blogArticlesMeta: BlogArticleMeta[] = [
  {
     "id": '1',
     "title": "Winter Burrow Early Survival & Pre-Mainline Walkthrough (Beginner-Friendly Guide)",
     "slug": "winter-burrow-early-survival-guide",
     "excerpt": "A complete, accuracy-verified pillar guide for new players",
     "category": "Game Guide",
     "readTime": "8 min",
     "publishedAt": "2025-12-05",
     "imageUrl": "/assets/img/winter-burrow-guide-cover.jpg",
  },
  {
    id: '2',
    "title": "Winter Burrow Owl Chase Chapter (Part 2) Survival Guide",
    "slug": "winter-burrow-owl-chase-part2-guide",
    "excerpt": "This guide is designed for players who have completed the early-game setup—crafted basic Warmth gear, established a functioning Burrow base, and triggered the forced Owl abduction cutscene.",
    "category": "Game Guide",
    "readTime": "10 min",
    "publishedAt": "2025-12-06",
    "imageUrl": "/assets/img/winter-burrow-owl-chase-guide-cover.jpg",
  },
  {
    id: '3',
    "title": "Winter Burrow: \"Gnawtusk To The Rescue\" Chapter Walkthrough",
    "slug": "winter-burrow-gnawtusk-rescue-chapter-guide",
    "excerpt": "The \"Gnawtusk To The Rescue\" chapter centers on progressing through the frigid Shadow Pines region, upgrading tools through the squirrel's Stash tasks, and uncovering the clues needed to reach the owl's nest and bring Auntie home safely.",
    "category": "Game Guide",
    "readTime": "12 min",
    "publishedAt": "2025-12-07",
    "imageUrl": "/assets/img/winter-burrow-gnawtusk-guide-cover.jpg",
  },
  {
    id: '4',
    "title": "Winter Burrow - \"Bufo's Request: Part 4\" Main Story & Base Upgrade Guide",
    "slug": "winter-burrow-bufo-request-part4-guide",
    "excerpt": "The fourth part of the \"Bufo's Request\" storyline centers on restoring Auntie's condition, upgrading tools to the Granite tier, and expanding several core functions of the Burrow.",
    "category": "Game Guide",
    "readTime": "15 min",
    "publishedAt": "2025-12-08",
    "imageUrl": "/assets/img/winter-burrow-bufo-request-part4-cover.jpg",
  },
  {
    id: '5',
    "title": "Winter Burrow - \"Finding Poliwog\" Complete Walkthrough",
    "slug": "winter-burrow-finding-poliwog-walkthrough",
    "excerpt": "The \"Finding Poliwog\" storyline focuses on locating Poliwog, resolving the emotional conflict between him and Bufo, and completing a sequence of gathering and crafting tasks that ultimately lead to reconciliation.",
    "category": "Game Guide",
    "readTime": "10 min",
    "publishedAt": "2025-12-09",
    "imageUrl": "/assets/img/winter-burrow-finding-poliwog-cover.jpg",
  }
];