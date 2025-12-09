// lib/blogUtils.ts
import { blogArticlesMeta, BlogArticleMeta } from '@/data/blogArticles';

// 重新导出类型，这样其他地方可以导入
export type { BlogArticleMeta };

// 获取所有文章的元数据
export function getAllBlogArticles() {
  return blogArticlesMeta;
}

// 根据slug获取单篇文章
export function getBlogArticleBySlug(slug: string) {
  return blogArticlesMeta.find(article => article.slug === slug);
}

// 获取最新文章
export function getLatestArticles(count?: number) {
  const sorted = [...blogArticlesMeta].sort((a, b) => 
    new Date(b.publishedAt || '').getTime() - new Date(a.publishedAt || '').getTime()
  );
  return count ? sorted.slice(0, count) : sorted;
}