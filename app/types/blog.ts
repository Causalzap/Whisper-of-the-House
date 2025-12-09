export interface ArticleContent {
    title: string;
    slug: string;
    excerpt: string;
    category: string;
    readTime: string;
    publishedAt: string;
    imageUrl: string;
    content: string;
    seo: {
      title: string;
      description: string;
      keywords: string[];
    };
  }