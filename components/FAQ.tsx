// 文件名: components/FAQ.tsx
'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced' ;
}

interface FAQProps {
  faqItems: FAQItem[];
  title?: string;
  subtitle?: string;
  showCategoryFilter?: boolean;
  showDifficultyFilter?: boolean;
  defaultExpanded?: boolean;
  theme?: 'default' | 'tech' | 'cozy' | 'dark';
  maxWidth?: string;
}

const FAQ: React.FC<FAQProps> = ({
  faqItems,
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about the game",
  showCategoryFilter = false,
  showDifficultyFilter = false,
  defaultExpanded = false,
  theme = 'default',
  maxWidth = '800px',
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(defaultExpanded ? 0 : null);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // 获取所有分类和难度级别
  const categories = ['all', ...Array.from(new Set(faqItems.map(item => item.category || 'general').filter(Boolean)))];
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];

  // 过滤 FAQ
  const filteredFaqItems = faqItems.filter(item => {
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter || (!item.category && categoryFilter === 'all');
    const matchesDifficulty = difficultyFilter === 'all' || item.difficulty === difficultyFilter || (!item.difficulty && difficultyFilter === 'all');
    const matchesSearch = searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const toggleAll = () => {
    setExpandedIndex(expandedIndex === null ? 0 : null);
  };

  // 主题配置
  const themeConfig = {
    default: {
      bg: 'bg-gray-50',
      border: 'border-gray-200',
      text: 'text-gray-800',
      accent: 'text-blue-600',
      accentBg: 'bg-blue-50',
      accentBorder: 'border-blue-200',
    },
    tech: {
      bg: 'bg-gray-300',
      border: 'border-cyan-700',
      text: 'text-gray-700',
      accent: 'text-cyan-400',
      accentBg: 'bg-cyan-900/20',
      accentBorder: 'border-cyan-800',
    },
    cozy: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      text: 'text-gray-800',
      accent: 'text-purple-600',
      accentBg: 'bg-purple-50',
      accentBorder: 'border-purple-200',
    },
    dark: {
      bg: 'bg-gray-950',
      border: 'border-gray-800',
      text: 'text-gray-200',
      accent: 'text-gray-300',
      accentBg: 'bg-gray-900',
      accentBorder: 'border-gray-700',
    },
  };

  const themeStyle = themeConfig[theme];

  return (
    <div className="w-full" style={{ maxWidth: maxWidth, margin: '0 auto' }}>
      {/* Header */}
      <div className={`mb-8 text-center ${themeStyle.text}`}>
        <div className="flex items-center justify-center gap-3 mb-4">
          <HelpCircle className={`w-8 h-8 ${themeStyle.accent}`} />
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>
        {subtitle && <p className="text-lg opacity-80">{subtitle}</p>}
      </div>

      {/* Filters */}
      {(showCategoryFilter || showDifficultyFilter || searchQuery !== '') && (
        <div className={`mb-6 p-4 rounded-lg ${themeStyle.accentBg} ${themeStyle.accentBorder} border`}>
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full px-4 py-2 rounded-lg ${themeStyle.bg} border ${themeStyle.border} focus:outline-none focus:ring-2 focus:ring-cyan-500 ${themeStyle.text}`}
              />
            </div>
            
            {/* Filters */}
            <div className="flex gap-3">
              {showCategoryFilter && (
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className={`px-4 py-2 rounded-lg border ${themeStyle.border} bg-transparent ${themeStyle.text} focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-gray-900">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              )}
              
              {showDifficultyFilter && (
                <select
                  value={difficultyFilter}
                  onChange={(e) => setDifficultyFilter(e.target.value)}
                  className={`px-4 py-2 rounded-lg border ${themeStyle.border} bg-transparent ${themeStyle.text} focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty} className="bg-gray-900">
                      {difficulty === 'all' ? 'All Levels' : 
                       difficulty === 'beginner' ? 'Beginner' :
                       difficulty === 'intermediate' ? 'Intermediate' : 'Advanced'}
                    </option>
                  ))}
                </select>
              )}
              
              <button
                onClick={toggleAll}
                className={`px-4 py-2 rounded-lg border ${themeStyle.accentBorder} ${themeStyle.accent} hover:opacity-80 transition-opacity`}
              >
                {expandedIndex !== null ? 'Collapse All' : 'Expand All'}
              </button>
            </div>
          </div>
          
          {/* Search results info */}
          {searchQuery && (
            <div className="mt-3 text-sm opacity-70">
              Found {filteredFaqItems.length} result{filteredFaqItems.length !== 1 ? 's' : ''} for "{searchQuery}"
            </div>
          )}
        </div>
      )}

      {/* FAQ Items */}
      <div className="space-y-4">
        {filteredFaqItems.length === 0 ? (
          <div className={`p-8 text-center rounded-lg ${themeStyle.accentBg} ${themeStyle.accentBorder} border`}>
            <p className={`text-lg ${themeStyle.text}`}>No questions found matching your criteria.</p>
            <button
              onClick={() => { setSearchQuery(''); setCategoryFilter('all'); setDifficultyFilter('all'); }}
              className="mt-4 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          filteredFaqItems.map((item, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg border ${themeStyle.border} transition-all duration-300 hover:shadow-lg`}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleItem(index)}
                className={`w-full flex items-center justify-between p-6 text-left ${themeStyle.bg} hover:opacity-90 transition-opacity`}
                aria-expanded={expandedIndex === index}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className={`text-lg font-semibold ${themeStyle.text}`}>
                      {item.question}
                    </span>
                    
                    {/* Badges */}
                    <div className="flex gap-2">
                      {item.category && (
                        <span className={`px-2 py-1 text-xs rounded-full ${theme === 'tech' ? 'bg-cyan-900/30 text-cyan-300' : 'bg-blue-100 text-blue-800'}`}>
                          {item.category}
                        </span>
                      )}
                      {item.difficulty && (
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          item.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                          item.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {item.difficulty}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className={`ml-4 transform transition-transform duration-300 ${
                  expandedIndex === index ? 'rotate-180' : ''
                }`}>
                  {expandedIndex === index ? (
                    <ChevronUp className={`w-5 h-5 ${themeStyle.accent}`} />
                  ) : (
                    <ChevronDown className={`w-5 h-5 ${themeStyle.accent}`} />
                  )}
                </div>
              </button>
              
              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className={`p-6 border-t ${themeStyle.border} ${themeStyle.text}`}>
                  <div className="prose prose-lg max-w-none">
                    {item.answer.split('\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Stats */}
      <div className={`mt-8 pt-6 border-t ${themeStyle.border} text-sm ${themeStyle.text} opacity-70`}>
        <div className="flex flex-wrap justify-between items-center">
          <div>
            Showing {filteredFaqItems.length} of {faqItems.length} questions
          </div>
          <div className="flex items-center gap-2 mt-2 md:mt-0">
            <span>Still have questions?</span>
            <a
              href="#contact"
              className={`px-3 py-1 rounded-full border ${themeStyle.accentBorder} ${themeStyle.accent} hover:opacity-80 transition-opacity`}
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;