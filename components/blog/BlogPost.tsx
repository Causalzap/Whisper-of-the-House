// components/BlogPost.tsx
"use client";
import { useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../Layout';

interface ArticleContent {
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

interface BlogPostProps {
  content: ArticleContent;
  relatedArticles?: Array<{
    title: string;
    description: string;
    href: string;
    readTime: string;
    category: string;
    badgeColor: string;
    tag: string;
    tagColor: string;
  }>;
}

export default function BlogPost({ content, relatedArticles = [] }: BlogPostProps) {
  const [activeGame, setActiveGame] = useState<string | null>(null);

  // 设置页面标题和元数据
  useEffect(() => {
    document.title = content.seo.title;
    
    // 更新页面描述
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', content.seo.description);
  }, [content]);

  // 修复后的内容格式化函数 - 添加图片处理
  const formatContent = (contentText: string) => {
    let inOrderedList = false;
    let inUnorderedList = false;
    let listItems: string[] = [];
    
    const lines = contentText.split('\n');
    const result: string[] = [];
    
    const closeCurrentList = () => {
      if (inOrderedList && listItems.length > 0) {
        result.push(`<ol class="ordered-list">${listItems.join('')}</ol>`);
        listItems = [];
        inOrderedList = false;
      } else if (inUnorderedList && listItems.length > 0) {
        result.push(`<ul class="unordered-list">${listItems.join('')}</ul>`);
        listItems = [];
        inUnorderedList = false;
      }
    };
    
    // 处理行内格式
    const processInlineFormatting = (text: string) => {
      // 第一步：处理图片语法
      let processed = text.replace(/!\[([^\]]+)\]\(([^)]+)\)/g, 
        '<div class="markdown-image"><img src="$2" alt="$1" class="article-image" /><p class="image-caption">$1</p></div>'
      );
      
      // 第二步：处理链接
      processed = processed.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, url) => {
        const isInternal = url.startsWith('/');
        const isAppStore = url.includes('play.google.com') || url.includes('apps.apple.com');
        const isExternal = url.startsWith('http') && !isAppStore;
        
        let relAttr = '';
        let targetAttr = '';
        let linkClass = 'internal-link';
        
        if (isAppStore) {
          // 应用商店链接 - 特殊处理
          linkClass = 'app-store-link';
          targetAttr = ' target="_blank"';
          // 不添加 nofollow，因为应用商店链接通常希望被搜索引擎跟踪
        } else if (isExternal) {
          // 普通外部链接
          linkClass = 'external-link';
          relAttr = ' rel="nofollow noopener"';
          targetAttr = ' target="_blank"';
        }
        // 内部链接保持默认设置
        
        return `<a href="${url}" class="${linkClass}"${relAttr}${targetAttr}>${linkText}</a>`;
      });
      
      // 第三步：处理加粗
      processed = processed.replace(/\*\*([^*]+)\*\*/g, '<strong class="content-strong">$1</strong>');
      
      // 第四步：处理斜体
      processed = processed.replace(/\*([^*\s][^*]*[^*\s])\*/g, '<em class="content-em">$1</em>');
      
      return processed;
    };
    
    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      if (!trimmedLine) {
        closeCurrentList();
        result.push('');
        return;
      }
      
      // 处理有序列表项
      const orderedMatch = trimmedLine.match(/^(\d+)[、.]\s+(.*)$/);
      if (orderedMatch) {
        if (!inOrderedList) {
          closeCurrentList();
          inOrderedList = true;
          inUnorderedList = false;
        }
        const [, number, content] = orderedMatch;
        const formattedContent = processInlineFormatting(content);
        listItems.push(
          `<li class="ordered-item">
            <span class="list-number">${number}.</span>${formattedContent}
          </li>`
        );
        return;
      }
      
      // 处理无序列表项
      const unorderedMatch = trimmedLine.match(/^[-*●]\s+(.*)$/);
      if (unorderedMatch) {
        if (!inUnorderedList) {
          closeCurrentList();
          inUnorderedList = true;
          inOrderedList = false;
        }
        const content = unorderedMatch[1];
        const formattedContent = processInlineFormatting(content);
        listItems.push(
          `<li class="unordered-item">
            <span class="list-bullet">•</span>${formattedContent}
          </li>`
        );
        return;
      }
      
      // 如果不是列表项，关闭当前列表
      closeCurrentList();
      
      // 处理标题
      if (trimmedLine.startsWith('## ')) {
        const titleContent = processInlineFormatting(trimmedLine.substring(3));
        result.push(`<h2 class="content-h2">${titleContent}</h2>`);
        return;
      }
      if (trimmedLine.startsWith('### ')) {
        const titleContent = processInlineFormatting(trimmedLine.substring(4));
        result.push(`<h3 class="content-h3">${titleContent}</h3>`);
        return;
      }
      if (trimmedLine.startsWith('#### ')) {
        const titleContent = processInlineFormatting(trimmedLine.substring(5));
        result.push(`<h4 class="content-h4">${titleContent}</h4>`);
        return;
      }
      
      // 处理普通段落
      const formattedLine = processInlineFormatting(trimmedLine);
      if (formattedLine.trim()) {
        result.push(`<p class="content-p">${formattedLine}</p>`);
      }
    });
    
    // 处理最后可能未关闭的列表
    closeCurrentList();
    
    return result.join('');
  };

  return (
    <Layout>
      <article className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 面包屑导航 */}
          <nav className="mb-8">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/winter-burrow" className="text-blue-600 hover:text-blue-800 transition-colors">Winter Burrow</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">Current Article</span>
            </div>
          </nav>

          {/* 文章头部 */}
          <header className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-full text-sm font-medium mb-6 shadow-lg">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              {content.category}
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {content.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {content.excerpt}
            </p>

            <div className="flex items-center justify-center gap-6 text-gray-600 text-sm">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <time dateTime={content.publishedAt}>
                  {new Date(content.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>{content.readTime} read</span>
              </div>
            </div>
          </header>

          {/* 文章内容容器 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 article-content-container">
            <div 
              dangerouslySetInnerHTML={{ 
                __html: formatContent(content.content)
              }} 
            />
          </div>

          {/* 标签部分 */}
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {content.seo.keywords.map((keyword, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200 shadow-sm"
              >
                #{keyword}
              </span>
            ))}
          </div>

          {/* 相关文章推荐 */}
          {relatedArticles.length > 0 && (
            <section className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">You Might Also Like</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedArticles.map((article, index) => (
                  <Link 
                    key={index}
                    href={article.href}
                    className="group block transition-transform hover:scale-105 duration-300"
                  >
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group-hover:border-blue-300 h-full">
                      <div className="p-6 h-full flex flex-col">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 w-fit ${
                          article.badgeColor === 'green' ? 'bg-green-100 text-green-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {article.category}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors flex-grow">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed flex-grow">{article.description}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                          <span>{article.readTime} read</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            article.tagColor === 'green' ? 'bg-green-50 text-green-600' :
                            'bg-blue-50 text-blue-600'
                          }`}>
                            {article.tag}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

        </div>
      </article>

      <style jsx global>{`
        /* 全局样式修复 - 确保动态生成的HTML能正确应用样式 */
        .article-content-container {
          line-height: 1.8;
          color: #374151;
          font-size: 1.125rem;
        }

        /* 图片样式 - 新增 */
        .article-content-container .markdown-image {
          margin: 2rem 0;
          text-align: center;
          border-radius: 12px;
          overflow: hidden;
        }

        .article-content-container .markdown-image img.article-image {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e7eb;
          transition: all 0.3s ease;
        }

        .article-content-container .markdown-image img.article-image:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        .article-content-container .image-caption {
          margin-top: 0.5rem;
          font-size: 0.9rem;
          color: #6b7280;
          font-style: italic;
          text-align: center;
          line-height: 1.4;
        }

        /* 修复2: 确保标题样式正确应用 */
        .article-content-container .content-h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #1f2937;
          margin: 3rem 0 1.5rem 0;
          padding-bottom: 0.5rem;
          border-bottom: 3px solid #3b82f6;
          position: relative;
        }

        .article-content-container .content-h2::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 6rem;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          border-radius: 3px;
        }

        .article-content-container .content-h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #374151;
          margin: 2.5rem 0 1rem 0;
          padding-left: 1rem;
          border-left: 4px solid #10b981;
        }

        .article-content-container .content-h4 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #4b5563;
          margin: 2rem 0 1rem 0;
          padding-left: 0.5rem;
          border-left: 3px solid #f59e0b;
        }

        /* 段落样式 */
        .article-content-container .content-p {
          margin-bottom: 1.5rem;
          color: #4b5563;
          line-height: 1.7;
        }

        /* 修复3: 加粗文本样式 */
        .article-content-container .content-strong {
          font-weight: 600;
          color: #1f2937;
          background: linear-gradient(120deg, #a5b4fc 0%, #a5b4fc 100%);
          background-repeat: no-repeat;
          background-size: 100% 0.2em;
          background-position: 0 88%;
          padding: 0.1em 0;
        }

        /* 修复1: 斜体文本样式 */
        .article-content-container .content-em {
          font-style: italic;
          color: #6b7280;
          background: linear-gradient(120deg, #d1d5db 0%, #d1d5db 100%);
          background-repeat: no-repeat;
          background-size: 100% 0.1em;
          background-position: 0 88%;
          padding: 0.1em 0;
        }

        /* 链接样式 */
        .article-content-container .internal-link {
          color: #3b82f6;
          text-decoration: none;
          border-bottom: 1px solid #dbeafe;
          transition: all 0.2s ease;
          font-weight: 500;
        }

        .article-content-container .internal-link:hover {
          color: #1d4ed8;
          border-bottom-color: #3b82f6;
          background-color: #eff6ff;
          padding: 0.1em 0.2em;
          border-radius: 0.25rem;
        }

        .article-content-container .external-link {
          color: #059669;
          text-decoration: none;
          border-bottom: 1px solid #a7f3d0;
          transition: all 0.2s ease;
          font-weight: 500;
        }

        .article-content-container .external-link:hover {
          color: #047857;
          border-bottom-color: #10b981;
          background-color: #ecfdf5;
          padding: 0.1em 0.2em;
          border-radius: 0.25rem;
        }

        /* 应用商店链接样式 */
        .article-content-container .app-store-link {
          color: #34c759;
          text-decoration: none;
          border-bottom: 1px solid #a7f3d0;
          transition: all 0.2s ease;
          font-weight: 500;
        }

        .article-content-container .app-store-link:hover {
          color: #30a14e;
          border-bottom-color: #34c759;
          background-color: #f0fdf4;
          padding: 0.1em 0.2em;
          border-radius: 0.25rem;
        }

        /* 有序列表样式 */
        .article-content-container .ordered-list {
          margin: 2rem 0;
          padding-left: 0;
          list-style: none;
        }

        .article-content-container .ordered-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1rem;
          padding: 1rem;
          background: #f8fafc;
          border-radius: 0.5rem;
          border-left: 4px solid #3b82f6;
          transition: all 0.2s ease;
        }

        .article-content-container .ordered-item:hover {
          background: #eff6ff;
          transform: translateX(4px);
        }

        .article-content-container .list-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          background: #3b82f6;
          color: white;
          border-radius: 50%;
          font-weight: 600;
          font-size: 0.875rem;
          margin-right: 1rem;
          flex-shrink: 0;
        }

        /* 无序列表样式 */
        .article-content-container .unordered-list {
          margin: 2rem 0;
          padding-left: 0;
          list-style: none;
        }

        .article-content-container .unordered-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1rem;
          padding: 1rem;
          background: #f0fdf4;
          border-radius: 0.5rem;
          border-left: 4px solid #10b981;
          transition: all 0.2s ease;
        }

        .article-content-container .unordered-item:hover {
          background: #ecfdf5;
          transform: translateX(4px);
        }

        .article-content-container .list-bullet {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 1.5rem;
          height: 1.5rem;
          color: #10b981;
          font-weight: bold;
          font-size: 1.2rem;
          margin-right: 1rem;
          flex-shrink: 0;
        }

        /* 响应式设计 */
        @media (max-width: 768px) {
          .article-content-container {
            font-size: 1rem;
            line-height: 1.7;
            padding: 1.5rem;
          }
          
          .article-content-container .markdown-image {
            margin: 1.5rem 0;
          }
          
          .article-content-container .markdown-image img.article-image {
            max-width: 100%;
            border-radius: 6px;
          }
          
          .article-content-container .content-h2 {
            font-size: 1.75rem;
            margin: 2rem 0 1rem 0;
          }
          
          .article-content-container .content-h3 {
            font-size: 1.375rem;
            margin: 1.5rem 0 0.75rem 0;
          }
          
          .article-content-container .content-h4 {
            font-size: 1.125rem;
            margin: 1.5rem 0 0.75rem 0;
          }
          
          .article-content-container .ordered-item,
          .article-content-container .unordered-item {
            padding: 0.75rem;
            margin-bottom: 0.75rem;
          }
          
          .article-content-container .list-number {
            width: 1.75rem;
            height: 1.75rem;
            font-size: 0.75rem;
            margin-right: 0.75rem;
          }
        }
      `}</style>
    </Layout>
  );
}