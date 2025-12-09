// components/blog/BlogSection.tsx
"use client";
import ArticleCard from './ArticleCard';
import { getLatestArticles, BlogArticleMeta } from '@/lib/blogUtils';

interface BlogSectionProps {
  maxArticles?: number;
  title?: string;
  description?: string;
  articles?: BlogArticleMeta[];
  showViewAllButton?: boolean;
}

const BlogSection: React.FC<BlogSectionProps> = ({ 
  maxArticles, 
  title = "Game Guides & Insights",
  description = "Discover the latest game guides, strategies, and insights to enhance your gaming experience",
  articles,
  showViewAllButton = true
}) => {
  // 获取文章列表
  const articleList = articles || getLatestArticles();
  
  // 正确的显示逻辑
  const displayCount = maxArticles || articleList.length;
  const displayedArticles = articleList.slice(0, displayCount);
  
  // 正确的条件：只有在设置了 maxArticles 且总文章数超过显示数量时才显示按钮
  const shouldShowMoreButton = showViewAllButton && 
    maxArticles !== undefined && 
    articleList.length > displayCount;

  if (displayedArticles.length === 0) {
    return null;
  }

  return (
    <section id="blog" className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">{title}</h2>
        {description && (
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedArticles.map((article) => (
          <ArticleCard
            key={article.id}
            {...article}
          />
        ))}
      </div>

      {/* 修复后的按钮显示逻辑 */}
      {shouldShowMoreButton && (
        <div className="text-center mt-8">
          <a 
            href="/blog" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Show More Articles
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      )}
    </section>
  );
};

export default BlogSection;