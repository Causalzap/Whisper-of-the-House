// app/utils/blogPageFactory.tsx
import BlogPost from '@/components/blog/BlogPost';
import { ArticleContent } from '../types/blog';

interface BlogPageProps {
  content: ArticleContent;
  relatedArticles?: Array<{
    title: string;
    description: string;
    href: string;
    readTime: string; // ✅ readTime
    category: string;
    badgeColor: string;
    tag: string;
    tagColor: string;
  }>;
}

/**
 * Factory that returns a React component for a blog article page.
 * IMPORTANT: must return the component, not undefined.
 */
export function createBlogPage(
  content: ArticleContent,
  relatedArticles?: BlogPageProps['relatedArticles']
) {
  const BlogPage: React.FC = () => {
    return <BlogPost content={content} relatedArticles={relatedArticles} />;
  };

  return BlogPage; // ✅ key fix
}

export function generateBlogMetadata(content: ArticleContent) {
  return {
    title: content.seo.title,
    description: content.seo.description,
    keywords: content.seo.keywords.join(', '),
  };
}
