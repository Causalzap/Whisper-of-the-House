// app/winter-burrow/best-turn-based-rpgs-of-all-time-guide/page.tsx
import { articleContent } from './content';
import { createBlogPage, generateBlogMetadata } from '../../utils/blogPageFactory';
import { Metadata } from 'next';

import { blogArticlesMeta } from '@/data/blogArticles'; // 导入统一的数据源


// 从 blogArticlesMeta 中获取相关文章（排除当前文章）
const getRelatedArticles = (currentSlug: string) => {
  return blogArticlesMeta
    .filter(article => article.slug !== currentSlug) // 排除当前文章
    .slice(0, 4) // 限制显示数量
    .map(article => ({
      title: article.title,
      description: article.excerpt,
      href: `/winter-burrow/${article.slug}`,
      readTime: article.readTime || "5 min",
      category: article.category || "Game Guide",
      badgeColor: getBadgeColor(article.category), // 根据分类生成颜色
      tag: getTagFromCategory(article.category), // 根据分类生成标签
      tagColor: getTagColor(article.category) // 根据分类生成标签颜色
    }));
};

// 工具函数：根据分类生成徽章颜色
const getBadgeColor = (category?: string) => {
  const colorMap: Record<string, string> = {
    "Strategy Guide": "blue",
    "Game Collection": "purple", 
    "War Games Guide": "green",
    "Mobile Games Guide": "orange",
    "Indie Games Guide": "pink"
  };
  return colorMap[category || ""] || "blue";
};

// 工具函数：根据分类生成标签
const getTagFromCategory = (category?: string) => {
  const tagMap: Record<string, string> = {
    "Strategy Guide": "Strategy",
    "Game Collection": "Collection",
    "War Games Guide": "War Games", 
    "Mobile Games Guide": "Mobile",
    "Indie Games Guide": "Indie"
  };
  return tagMap[category || ""] || "Guide";
};

// 工具函数：根据分类生成标签颜色
const getTagColor = (category?: string) => {
  const colorMap: Record<string, string> = {
    "Strategy Guide": "green",
    "Game Collection": "blue",
    "War Games Guide": "red",
    "Mobile Games Guide": "orange",
    "Indie Games Guide": "purple"
  };
  return colorMap[category || ""] || "green";
};

// 使用动态生成的相关文章
const relatedArticles = getRelatedArticles(articleContent.slug);


// 获取基础 URL
const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://www.whisperofthehouse.com';
};

// 生成规范的 canonical URL
const generateCanonicalUrl = () => {
  const baseUrl = getBaseUrl();
  return `${baseUrl}/winter-burrow/${articleContent.slug}`;
};

// 简化版本：不尝试合并 openGraph，直接重新定义
export const generateMetadata = (): Metadata => {
  const baseMetadata = generateBlogMetadata(articleContent);
  const canonicalUrl = generateCanonicalUrl();
  const baseUrl = getBaseUrl();
  
  return {
    // 展开基础元数据
    ...baseMetadata,
    // 添加必要的元数据
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    // 直接定义 openGraph，不尝试从 baseMetadata 合并
    openGraph: {
      title: articleContent.seo.title,
      description: articleContent.seo.description,
      url: canonicalUrl,
      type: 'article',
      publishedTime: articleContent.publishedAt,
      ...(articleContent.imageUrl && {
        images: [
          {
            url: articleContent.imageUrl.startsWith('http') 
              ? articleContent.imageUrl 
              : `${baseUrl}${articleContent.imageUrl}`,
            width: 1200,
            height: 630,
            alt: articleContent.title,
          }
        ]
      }),
    },
    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: articleContent.seo.title,
      description: articleContent.seo.description,
      ...(articleContent.imageUrl && {
        images: [
          articleContent.imageUrl.startsWith('http') 
            ? articleContent.imageUrl 
            : `${baseUrl}${articleContent.imageUrl}`
        ]
      }),
    },
  };
};

// 创建页面组件
const BlogPage = createBlogPage(articleContent, relatedArticles);

export default BlogPage;