// components/blog/ArticleCard.tsx
import Link from 'next/link';
import Image from 'next/image';

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  imageUrl?: string;
  category?: string;
  readTime?: string;
  publishedAt?: string;
  featured?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  excerpt,
  slug,
  imageUrl,
  category,
  readTime,
  publishedAt,
  featured = false
}) => {
  // 格式化日期
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <article className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 ${
      featured ? 'border-l-4 border-blue-500' : ''
    }`}>
      {/* 文章图片 */}
      {imageUrl && (
        <Link href={`/winter-burrow/${slug}`} className="block relative h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
      )}
      
      {/* 文章内容 */}
      <div className="p-6">
        {/* 分类和元信息 */}
        <div className="flex items-center justify-between mb-3 text-sm text-gray-600">
          <div className="flex items-center space-x-3">
            {category && (
              <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                {category}
              </span>
            )}
            {readTime && <span>{readTime} read</span>}
          </div>
          {publishedAt && <span>{formatDate(publishedAt)}</span>}
        </div>

        {/* 文章标题 */}
        <Link href={`/winter-burrow/${slug}`}>
          <h3 className={`font-bold mb-3 hover:text-blue-600 transition-colors duration-200 ${
            featured ? 'text-xl' : 'text-lg'
          }`}>
            {title}
          </h3>
        </Link>

        {/* 文章摘要 */}
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>

        {/* 阅读更多链接 */}
        <Link 
          href={`/winter-burrow/${slug}`}
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
        >
          Read More
          <svg 
            className="w-4 h-4 ml-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;