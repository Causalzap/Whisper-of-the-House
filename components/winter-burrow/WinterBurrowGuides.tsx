// components/winter-burrow/WinterBurrowGuides.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import './WinterBurrowGuides.css'; // 或者使用内联样式

// 定义攻略数据的类型
interface Guide {
  id: number;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  tags: string[];
  image?: string;
  slug: string;
}

// 分离的数据文件 (可以放在单独的文件中)
const guidesData: Guide[] = [
  {
    id: 1,
    title: "Winter Burrow Complete Beginner's Guide",
    description: "From character creation to basic survival skills, this guide will help you quickly master the game's basic operations and core mechanics to successfully get through the early game.",
    difficulty: "beginner",
    tags: ["Getting Started", "Survival Tips", "Basic Building"],
    slug: "complete-beginners-guide"
  },
  {
    id: 2,
    title: "Efficient Resource Collection and Management System",
    description: "Learn how to efficiently collect key resources like wood, stone, and food, and establish an effective storage and management system to ensure your survival needs.",
    difficulty: "beginner",
    tags: ["Resource Management", "Collection Tips", "Storage Solutions"],
    slug: "resource-collection-management"
  },
  {
    id: 3,
    title: "Perfect Base Construction and Layout Planning",
    description: "From site selection to functional area division, this guide will teach you how to build a base that is both beautiful and practical, maximizing space utilization efficiency.",
    difficulty: "intermediate",
    tags: ["Base Building", "Layout Planning", "Decoration Tips"],
    slug: "base-construction-layout"
  },
  {
    id: 4,
    title: "Seasonal Changes and Coping Strategies",
    description: "Understand the game's seasonal change mechanism and learn how to adjust your survival strategy in different seasons to cope with various environmental challenges.",
    difficulty: "intermediate",
    tags: ["Season System", "Environmental Adaptation", "Survival Strategy"],
    slug: "seasonal-changes-strategies"
  },
  {
    id: 5,
    title: "Forest Animal Neighbors Interaction Guide",
    description: "Build friendships with animal neighbors in the forest, learn about each character's background story, and unlock special quests and rewards.",
    difficulty: "intermediate",
    tags: ["NPC Interaction", "Quest Guide", "Character Stories"],
    slug: "animal-neighbors-interaction"
  },
  {
    id: 6,
    title: "Complete Crafting and Synthesis System Analysis",
    description: "Deeply explore the game's crafting system, from basic tools to advanced equipment, master all recipes and optimal synthesis paths.",
    difficulty: "advanced",
    tags: ["Crafting System", "Recipes", "Equipment Crafting"],
    slug: "crafting-synthesis-system"
  },
  {
    id: 7,
    title: "Hidden Areas and Easter Egg Exploration Guide",
    description: "Discover secret areas, hidden quests, and developer easter eggs in the game to unlock more game content and special rewards.",
    difficulty: "advanced",
    tags: ["Hidden Content", "Easter Eggs", "Exploration"],
    slug: "hidden-areas-easter-eggs"
  },
  {
    id: 8,
    title: "Advanced Survival Techniques and Efficiency Optimization",
    description: "Master advanced survival skills, optimize your game flow, maximize resource utilization efficiency, and become a Winter Burrow survival expert.",
    difficulty: "expert",
    tags: ["Advanced Techniques", "Efficiency Optimization", "Expert Guide"],
    slug: "advanced-survival-techniques"
  },
  {
    id: 9,
    title: "Complete Story Analysis and Ending Guide",
    description: "In-depth analysis of the game's plot, understanding character background stories, exploring multiple ending conditions, and experiencing the complete game story.",
    difficulty: "advanced",
    tags: ["Plot Analysis", "Ending Guide", "Story Analysis"],
    slug: "story-analysis-ending-guide"
  },
  {
    id: 10,
    title: "DLC Content and Expansion Pack Complete Guide",
    description: "Explore all the DLC content of the game, understand new features, characters and areas, and make full use of the rich content provided by the expansion pack.",
    difficulty: "intermediate",
    tags: ["DLC Guide", "Expansion Content", "New Features"],
    slug: "dlc-expansion-guide"
  }
];

// 难度类型
type DifficultyFilter = 'all' | 'beginner' | 'intermediate' | 'advanced' | 'expert';

const WinterBurrowGuides: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<DifficultyFilter>('all');

  // 根据筛选条件过滤攻略
  const filteredGuides = activeFilter === 'all' 
    ? guidesData 
    : guidesData.filter(guide => guide.difficulty === activeFilter);

  // 获取难度对应的CSS类名
  const getDifficultyClass = (difficulty: Guide['difficulty']): string => {
    const difficultyClasses = {
      beginner: 'difficulty beginner',
      intermediate: 'difficulty intermediate',
      advanced: 'difficulty advanced',
      expert: 'difficulty expert'
    };
    return difficultyClasses[difficulty];
  };

  // 获取难度显示文本
  const getDifficultyText = (difficulty: Guide['difficulty']): string => {
    return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
  };

  return (
    <section className="guides-section">
      <div className="container">
        <header className="page-header">
          <h1>Winter Burrow Complete Guide Collection</h1>
          <p>
            Explore this cozy healing survival adventure game with our detailed guides. 
            From basic setup to advanced techniques, we&apos;ve prepared comprehensive 
            walkthroughs to help you build a warm home in this snowy world.
          </p>
        </header>
        
        <div className="guides-content">
          <h2 className="section-title">Detailed Guides</h2>
          
          {/* 筛选按钮 */}
          <div className="filters">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Guides
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'beginner' ? 'active' : ''}`}
              onClick={() => setActiveFilter('beginner')}
            >
              Beginner
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'intermediate' ? 'active' : ''}`}
              onClick={() => setActiveFilter('intermediate')}
            >
              Intermediate
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'advanced' ? 'active' : ''}`}
              onClick={() => setActiveFilter('advanced')}
            >
              Advanced
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'expert' ? 'active' : ''}`}
              onClick={() => setActiveFilter('expert')}
            >
              Expert
            </button>
          </div>
          
          {/* 攻略网格 */}
          <div className="guides-grid">
            {filteredGuides.map((guide) => (
              <div 
                key={guide.id} 
                className="guide-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
                }}
              >
                {guide.image && (
                  <img 
                    src={guide.image} 
                    alt={guide.title}
                    className="guide-image"
                  />
                )}
                
                <div className="guide-content">
                  <span className={getDifficultyClass(guide.difficulty)}>
                    {getDifficultyText(guide.difficulty)}
                  </span>
                  <h3 className="guide-title">{guide.title}</h3>
                  <p className="guide-description">{guide.description}</p>
                  
                  <div className="guide-tags">
                    {guide.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/guides/winter-burrow/${guide.slug}`} 
                    className="guide-link"
                  >
                    View Guide
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .page-header {
          text-align: center;
          margin-bottom: 40px;
          padding: 20px;
        }
        
        .page-header h1 {
          font-size: 2.8rem;
          color: #2c3e50;
          margin-bottom: 10px;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.1);
        }
        
        .page-header p {
          font-size: 1.2rem;
          color: #7f8c8d;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .guides-content {
          margin-top: 30px;
        }
        
        .section-title {
          font-size: 2rem;
          color: #34495e;
          margin-bottom: 25px;
          padding-bottom: 10px;
          border-bottom: 3px solid #3498db;
          display: inline-block;
        }
        
        .filters {
          display: flex;
          gap: 15px;
          margin-bottom: 25px;
          flex-wrap: wrap;
        }
        
        .filter-btn {
          padding: 8px 16px;
          border: 1px solid #3498db;
          background: white;
          color: #3498db;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 0.9rem;
        }
        
        .filter-btn.active, .filter-btn:hover {
          background: #3498db;
          color: white;
        }
        
        .guides-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }
        
        .guide-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .guide-image {
          height: 180px;
          width: 100%;
          object-fit: cover;
          border-bottom: 1px solid #eee;
        }
        
        .guide-content {
          padding: 20px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        
        .guide-title {
          font-size: 1.3rem;
          margin-bottom: 10px;
          color: #2c3e50;
          line-height: 1.4;
        }
        
        .guide-description {
          color: #7f8c8d;
          line-height: 1.5;
          margin-bottom: 15px;
          flex-grow: 1;
        }
        
        .guide-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 15px;
        }
        
        .tag {
          background: #e1f0fa;
          color: #2980b9;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
        }
        
        .guide-link {
          display: inline-block;
          background: #3498db;
          color: white;
          text-align: center;
          padding: 8px 15px;
          border-radius: 5px;
          text-decoration: none;
          font-weight: 600;
          transition: background 0.3s;
          margin-top: auto;
        }
        
        .guide-link:hover {
          background: #2980b9;
        }
        
        .difficulty {
          display: inline-block;
          padding: 3px 8px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 10px;
        }
        
        .beginner {
          background: #e8f6f3;
          color: #1abc9c;
        }
        
        .intermediate {
          background: #fff9e6;
          color: #f39c12;
        }
        
        .advanced {
          background: #fdebd0;
          color: #e67e22;
        }
        
        .expert {
          background: #fbeeee;
          color: #e74c3c;
        }
        
        /* 响应式设计 */
        @media (max-width: 1200px) {
          .guides-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media (max-width: 900px) {
          .guides-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 600px) {
          .guides-grid {
            grid-template-columns: 1fr;
          }
          
          .page-header h1 {
            font-size: 2.2rem;
          }
          
          .filters {
            justify-content: center;
          }
        }
        
        @media (max-width: 480px) {
          .container {
            padding: 0 10px;
          }
          
          .page-header h1 {
            font-size: 1.8rem;
          }
          
          .page-header p {
            font-size: 1rem;
          }
          
          .section-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default WinterBurrowGuides;