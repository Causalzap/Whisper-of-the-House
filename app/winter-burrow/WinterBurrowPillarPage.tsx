// 文件名: WinterBurrowPillarPage.tsx
'use client';
import Layout from '../../components/Layout';
import Link from 'next/link';
import React, { useState } from 'react';

// 定义数据类型接口
interface WinterBurrowData {
  hero: {
    title: string;
    subtitle: string;
    imageUrl: string;
  };
  intro: string[];
  gameplay: {
    id: string;
    title: string;
    description: string;
    icon: string;
  }[];
  guide: {
    guideTitle: string;
    steps: {
      step: number;
      title: string;
      detail: string;
      image: string;
      imageAlt: string;
    }[];
  };
  features: {
    title: string;
    detail: string;
  }[];
  ratings: {
    score: string;
    category: string;
    desc: string;
  }[];
  cta: {
    title: string;
    linkText: string;
    linkUrl: string;
  };
}

interface GuideData {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  description: string;
  category: string;
  readTime: string;
  publishedAt: string;
  imageUrl: string;
  difficulty: string;
  tags: string[];
}

interface WinterBurrowPillarPageProps {
  winterBurrowData: WinterBurrowData;
  guideData: GuideData[];
}

const WinterBurrowPillarPage: React.FC<WinterBurrowPillarPageProps> = ({ 
  winterBurrowData, 
  guideData 
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Filter guides based on difficulty
  const filteredGuides = activeFilter === 'all' 
    ? guideData 
    : guideData.filter(guide => guide.difficulty === activeFilter);

  return (
    <Layout>
      <div className="guide-container">
        {/* Hero Section */}
        <div className="guide-hero" style={{ backgroundImage: `url(${winterBurrowData.hero.imageUrl})` }}>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">{winterBurrowData.hero.title}</h1>
            <p className="hero-subtitle">{winterBurrowData.hero.subtitle}</p>
            <div className="hero-meta">
              <span className="meta-tag">Cozy Game</span>
              <span className="meta-tag">Survival</span>
              <span className="meta-tag">Relaxing</span>
              <span className="meta-tag">Single Player</span>
            </div>
          </div>
        </div>

        <div className="guide-content">
          {/* Introduction Section */}
          <section className="section">
            <div className="section-header">
              <span className="section-number">01</span>
              <h2 className="section-title">Game Introduction</h2>
            </div>
            
            <div className="content-image" style={{ textAlign: "center" }}>
              <img 
                src="/images/winter-burrow/winter-burrow-cover.webp" 
                alt="Winter Burrow gameplay screenshot" 
                className="intro-image"
                loading="lazy"
              />
            </div>

            <div className="content-grid">
              <div className="content-card">
                <h3 className="card-title">Story Background</h3>
                <p className="card-text">{winterBurrowData.intro[0]}</p>
              </div>
              
              <div className="content-card">
                <h3 className="card-title">Game Core</h3>
                <p className="card-text">{winterBurrowData.intro[1]}</p>
              </div>
            </div>
          </section>

          {/* Core Gameplay Section */}
          <section className="section">
            <div className="section-header">
              <span className="section-number">02</span>
              <h2 className="section-title">Core Gameplay</h2>
            </div>
            
            <div className="gameplay-grid">
              {winterBurrowData.gameplay.map((feature) => (
                <div key={feature.id} className="gameplay-card">
                  <div className="gameplay-icon">{feature.icon}</div>
                  <h3 className="gameplay-title">{feature.title}</h3>
                  <p className="gameplay-desc">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Survival Guide Section */}
          <section className="section">
            <div className="section-header">
              <span className="section-number">03</span>
              <h2 className="section-title">Survival Guide</h2>
            </div>
            
            <div className="guide-intro">
              <h3 className="guide-intro-title">{winterBurrowData.guide.guideTitle}</h3>
              <p className="guide-intro-text">For first-time Winter Burrow players, here's a complete guide to surviving your first winter.</p>
            </div>
            
            <div className="steps-container">
              {winterBurrowData.guide.steps.map((step, index) => (
                <div key={index} className="step-card">
                  <div className="step-header">
                    <span className="step-number">Step {step.step}</span>
                    <h3 className="step-title">{step.title}</h3>
                  </div>
                  <p className="step-content" dangerouslySetInnerHTML={{ 
                    __html: step.detail.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                  }} />
                  
                  {step.image && (
                    <div className="step-image-container">
                      <img 
                        src={step.image} 
                        alt={step.imageAlt} 
                        className="step-image"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Features & Review Section */}
          <section className="section">
            <div className="section-header">
              <span className="section-number">04</span>
              <h2 className="section-title">Features & Review</h2>
            </div>
            
            <div className="features-grid">
              {winterBurrowData.features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-desc">{feature.detail}</p>
                </div>
              ))}
            </div>
            
            {/* Ratings */}
            <div className="ratings-section">
              <h3 className="ratings-title">Game Ratings</h3>
              <div className="ratings-grid">
                {winterBurrowData.ratings.map((rating, index) => (
                  <div key={index} className="rating-card">
                    <div className="rating-score">{rating.score}</div>
                    <div className="rating-category">{rating.category}</div>
                    <div className="rating-desc">{rating.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Download Section */}
          <section className="section cta-section">
            <div className="section-header">
              <span className="section-number">05</span>
              <h2 className="section-title">Get the Game</h2>
            </div>
            
            <div className="cta-content">
              <h3 className="cta-title">{winterBurrowData.cta.title}</h3>
              <p className="cta-text">Ready to start your winter burrow journey? Get the game now on your favorite platform.</p>
              
              <div className="platforms">
                <a 
                  href={winterBurrowData.cta.linkUrl} 
                  className="platform-btn steam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="platform-icon">🎮</span>
                  <span className="platform-text">Steam</span>
                </a>
              </div>
            </div>
          </section>

          {/* Guides Section */}
          <section className="section guides-section">
            <div className="section-header">
              <span className="section-number">06</span>
              <h2 className="section-title">More Guides</h2>
            </div>
            
            <div className="guides-intro">
              <p>Explore our comprehensive collection of Winter Burrow guides to enhance your gameplay experience.</p>
            </div>
            
            {/* Filter Buttons */}
            <div className="filter-buttons">
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
            </div>
            
            {/* Guides Grid */}
            <div className="guides-grid">
              {filteredGuides.map((guide) => (
                <div key={guide.id} className="guide-card">
                  <div className="guide-card-header">
                    <span className={`guide-difficulty ${guide.difficulty}`}>
                      {guide.difficulty.charAt(0).toUpperCase() + guide.difficulty.slice(1)}
                    </span>
                    <span className="guide-readtime">{guide.readTime}</span>
                  </div>
                  
                  <div className="guide-card-image-container">
                    <img 
                      src={guide.imageUrl} 
                      alt={guide.title} 
                      className="guide-card-image"
                      loading="lazy"
                    />
                  </div>
                  
                  <h3 className="guide-card-title">{guide.title}</h3>
                  <p className="guide-card-desc">{guide.description}</p>
                  
                  <div className="guide-tags">
                    {guide.tags.map((tag, index) => (
                      <span key={index} className="guide-tag">{tag}</span>
                    ))}
                  </div>
                  
                  <Link href={`/winter-burrow/${guide.slug}`} className="guide-link">
                    Read Guide →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="conclusion-section">
            <h2 className="conclusion-title">Conclusion: Winter Burrow — A Healing Survival Adventure</h2>
            <div className="conclusion-content">
              <p>
                Winter Burrow offers a perfect choice for players who love a relaxing and cozy game style. 
                It lacks the pressure of traditional survival games, instead encouraging players to explore, 
                build, and solve mysteries at their own pace.
              </p>
              <p>
                The core of the game lies in the process of rebuilding home, not a race against time. 
                Whether gathering resources, repairing furniture, or interacting with the forest animal 
                neighbors, every moment is filled with warmth and hope.
              </p>
              <p>
                If you are a fan of cozy games like 
                <a href="https://store.steampowered.com/app/413150/Stardew_Valley/" className="game-link" rel="nofollow noopener noreferrer"> Stardew Valley</a> or 
                <a href="https://store.steampowered.com/app/1458100/Cozy_Grove/" className="game-link" rel="nofollow noopener noreferrer"> Cozy Grove</a>, 
                Winter Burrow is definitely worth a try.
              </p>
            </div>
          </section>
        </div>
        
        {/* Back to Guides Link */}
        <div className="back-to-guides-container">
          <Link href="/guides" className="back-to-guides">← Back to All Guides</Link>
        </div>

      </div>

      <style jsx>{`
  :root {
    --purple-primary: #6B46C1;
    --purple-dark: #553C9A;
    --purple-light: #9F7AEA;
    --purple-lighter: #E9D8FD;
    --purple-gradient: linear-gradient(135deg, var(--purple-primary) 0%, var(--purple-dark) 100%);
    --dark-bg: #1a1a1a;
    --darker-bg: #111111;
    --card-bg: #222222;
    --text-primary: #ffffff;
    --text-secondary: #cccccc;
  }
  
  /* Base Styles */
  .guide-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    color: var(--text-primary);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    background: var(--dark-bg);
  }
  
  /* Hero Section - 根据图片样式设计 */
  .guide-hero {
    position: relative;
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    margin: 40px 0;
    overflow: hidden;
    background: var(--darker-bg);
    isolation: isolate;
  }
  
  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  
  .hero-title {
    font-size: 3.2rem;
    font-weight: 800;
    margin-bottom: 20px;
    line-height: 1.2;
    color: var(--text-primary);
  }
  
  .hero-subtitle {
    font-size: 1.4rem;
    color: var(--text-secondary);
    margin-bottom: 30px;
    line-height: 1.6;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .hero-meta {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
  }
  
  .meta-tag {
    background: rgba(255, 255, 255, 0.1);
    padding: 8px 20px;
    border-radius: 25px;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text-primary);
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
  }
  
  /* Section Styles */
  .section {
    margin: 80px 0;
  }
  
  .section-header {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    padding-bottom: 20px;
    border-bottom: 2px solid var(--purple-primary);
  }
  
  .section-number {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--purple-primary);
    margin-right: 20px;
    min-width: 60px;
  }
  
  .section-title {
    font-size: 2.4rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
  }
  
  /* Content Grid */
  .content-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin-top: 30px;
  }
  
  .content-card {
    background: var(--card-bg);
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }
  
  .content-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    border-color: var(--purple-primary);
  }
  
  .card-title {
    font-size: 1.5rem;
    color: var(--purple-light);
    margin-bottom: 15px;
    font-weight: 600;
  }
  
  .card-text {
    color: var(--text-secondary);
    line-height: 1.7;
    font-size: 1.05rem;
  }
  
  /* Gameplay Grid */
  .gameplay-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 30px;
  }
  
  .gameplay-card {
    background: var(--card-bg);
    border-radius: 15px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }
  
  .gameplay-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    border-color: var(--purple-primary);
  }
  
  .gameplay-icon {
    font-size: 3.5rem;
    margin-bottom: 20px;
    color: var(--purple-light);
  }
  
  .gameplay-title {
    font-size: 1.4rem;
    color: var(--text-primary);
    margin-bottom: 15px;
    font-weight: 600;
  }
  
  .gameplay-desc {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 1.05rem;
  }
  
  /* Steps Container */
  .guide-intro {
    background: rgba(107, 70, 193, 0.1);
    border-radius: 15px;
    padding: 30px;
    margin-bottom: 40px;
    border-left: 5px solid var(--purple-primary);
  }
  
  .guide-intro-title {
    font-size: 1.8rem;
    color: var(--text-primary);
    margin-bottom: 15px;
    font-weight: 600;
  }
  
  .guide-intro-text {
    color: var(--text-secondary);
    font-size: 1.1rem;
    line-height: 1.6;
  }
  
  .steps-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  
  .step-card {
    background: var(--card-bg);
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .step-header {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 15px;
  }
  
  .step-number {
    display: inline-block;
    background: var(--purple-primary);
    color: white;
    padding: 8px 18px;
    border-radius: 20px;
    font-size: 1rem;
    font-weight: 600;
  }
  
  .step-title {
    font-size: 1.6rem;
    color: var(--text-primary);
    margin: 0;
    font-weight: 600;
  }
  
  .step-content {
    color: var(--text-secondary);
    line-height: 1.7;
    font-size: 1.05rem;
    margin-bottom: 20px;
  }
  
  .step-content strong {
    color: var(--purple-light);
    font-weight: 600;
  }
  
  /* Features Grid */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-bottom: 50px;
  }
  
  .feature-card {
    background: var(--card-bg);
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }
  
  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  }
  
  .feature-title {
    font-size: 1.4rem;
    color: var(--purple-light);
    margin-bottom: 15px;
    font-weight: 600;
  }
  
  .feature-desc {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 1.05rem;
  }
  
  /* Ratings */
  .ratings-section {
    margin-top: 60px;
  }
  
  .ratings-title {
    font-size: 2rem;
    color: var(--text-primary);
    margin-bottom: 40px;
    text-align: center;
    font-weight: 700;
  }
  
  .ratings-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
  }
  
  .rating-card {
    background: var(--card-bg);
    border-radius: 15px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }
  
  .rating-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  }
  
  .rating-score {
    font-size: 2.8rem;
    font-weight: 800;
    color: var(--purple-light);
    margin-bottom: 10px;
  }
  
  .rating-category {
    font-size: 1.3rem;
    color: var(--text-primary);
    margin-bottom: 10px;
    font-weight: 600;
  }
  
  .rating-desc {
    color: var(--text-secondary);
    font-size: 1rem;
  }
  
  /* CTA Section */
  .cta-section {
  background: var(--purple-primary); /* 浅蓝色背景 */
  border-radius: 20px;
  padding: 60px 40px;
  text-align: center;
  border: 1px solid #e8e8e8;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
}

.cta-section .section-header {
  border-bottom-color: #e8e8e8;
  justify-content: flex-start; /* 左对齐布局 */
}

.cta-section .section-number {
  color: white; /* 05 为白色 */
  background: var(--purple-primary); /* 添加紫色背景 */
  padding: 8px 20px;
  border-radius: 8px;
  margin-right: 20px;
  min-width: 60px;
  text-align: center;
}

.cta-section .section-title {
  color: #333; /* Get the Game 为黑色 */
  font-size: 2.4rem;
  font-weight: 700;
  margin: 0;
}

.cta-content {
  max-width: 700px;
  margin: 40px auto 0; /* 添加顶部间距 */
  text-align: center;
}

.cta-title {
  font-size: 2.4rem;
  margin-bottom: 20px;
  font-weight: 700;
  color: #333; /* 主标题为黑色 */
}

.cta-text {
  font-size: 1.2rem;
  color: #666; /* 描述文字为深灰色 */
  margin-bottom: 40px;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.platforms {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.platform-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.platform-btn.steam {
  background: #1b2838; /* Steam 按钮深蓝色 */
  color: white;
}

.platform-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.platform-icon {
  font-size: 1.2rem;
}
  
  /* Guides Section */
  .guides-section {
    margin-top: 80px;
  }
  
  .guides-intro {
    text-align: center;
    margin-bottom: 40px;
    color: var(--text-secondary);
    font-size: 1.1rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .filter-buttons {
    display: flex;
    gap: 15px;
    margin-bottom: 40px;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .filter-btn {
    padding: 12px 25px;
    border: 2px solid var(--purple-primary);
    background: var(--card-bg);
    color: var(--purple-light);
    border-radius: 25px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
  }
  
  .filter-btn.active,
  .filter-btn:hover {
    background: var(--purple-primary);
    color: white;
  }
  
  .guides-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 40px;
  }
  
  .guide-card {
    background: var(--card-bg);
    border-radius: 15px;
    padding: 25px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
  }
  
  .guide-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  }
  
  .guide-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }
  
  .guide-difficulty {
    padding: 6px 15px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
  }
  
  .guide-difficulty.beginner {
    background: rgba(46, 125, 50, 0.2);
    color: #4CAF50;
  }
  
  .guide-difficulty.intermediate {
    background: rgba(245, 124, 0, 0.2);
    color: #FF9800;
  }
  
  .guide-difficulty.advanced {
    background: rgba(123, 31, 162, 0.2);
    color: #9C27B0;
  }
  
  .guide-readtime {
    color: var(--text-secondary);
    font-size: 0.9rem;
  }
  
  .guide-card-title {
    font-size: 1.3rem;
    color: var(--text-primary);
    margin-bottom: 12px;
    font-weight: 600;
    flex-grow: 1;
  }
  
  .guide-card-desc {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 20px;
    font-size: 0.95rem;
    flex-grow: 1;
  }
  
  .guide-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
  }
  
  .guide-tag {
    background: rgba(255, 255, 255, 0.1);
    color: var(--text-secondary);
    padding: 6px 14px;
    border-radius: 15px;
    font-size: 0.85rem;
  }
  
  .guide-link {
    display: inline-block;
    color: var(--purple-light);
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
    align-self: flex-start;
  }
  
  .guide-link:hover {
    color: var(--purple-primary);
  }
  
  /* Conclusion Section */
  .conclusion-section {
    background: rgba(107, 70, 193, 0.1);
    border-radius: 20px;
    padding: 70px 50px;
    margin: 80px 0;
  }
  
  .conclusion-title {
    font-size: 2.4rem;
    color: var(--text-primary);
    margin-bottom: 30px;
    text-align: center;
    font-weight: 700;
    line-height: 1.3;
  }
  
  .conclusion-content {
    max-width: 900px;
    margin: 0 auto;
    font-size: 1.1rem;
  }
  
  .conclusion-content p {
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 25px;
    font-size: 1.1rem;
  }
  
  .game-link {
    color: var(--purple-light);
    text-decoration: none;
    font-weight: 600;
    margin: 0 5px;
  }
  
  .game-link:hover {
    text-decoration: underline;
  }
  
  /* Back to Guides Link */
  .back-to-guides-container {
    text-align: center;
    margin: 4rem 0;
  }
  
  .back-to-guides {
    display: inline-block;
    padding: 14px 28px;
    background: var(--purple-gradient);
    color: white;
    text-decoration: none;
    border-radius: 30px;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
  }
  
  .back-to-guides:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
  }
  
  /* 图片样式 */
  .intro-image {
    width: 100%;
    max-width: 800px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    margin: 20px 0;
  }
  
  .step-image-container {
    margin-top: 20px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .step-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
    display: block;
  }
  
  .guide-card-image-container {
    width: 100%;
    height: 180px;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 20px;
  }
  
  .guide-card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .guide-card:hover .guide-card-image {
    transform: scale(1.05);
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .guide-container {
      padding: 0 15px;
    }
    
    .hero-title {
      font-size: 2.4rem;
    }
    
    .hero-subtitle {
      font-size: 1.2rem;
    }
    
    .section-title {
      font-size: 2rem;
    }
    
    .content-grid,
    .gameplay-grid,
    .features-grid,
    .ratings-grid {
      grid-template-columns: 1fr;
    }
    
    .guides-grid {
      grid-template-columns: 1fr;
    }
    
    .platforms {
      flex-direction: column;
      align-items: center;
    }
    
    .platform-btn {
      width: 100%;
      max-width: 300px;
      justify-content: center;
    }
    
    .conclusion-title {
      font-size: 2rem;
    }
  }
  
  @media (max-width: 480px) {
    .guide-hero {
      padding: 60px 20px;
    }
    
    .hero-title {
      font-size: 2rem;
    }
    
    .section-title {
      font-size: 1.8rem;
    }
    
    .section-header {
      flex-direction: column;
      align-items: flex-start;
    }
    
    .section-number {
      margin-bottom: 10px;
    }
    
    .filter-buttons {
      flex-direction: column;
      align-items: stretch;
    }
    
    .filter-btn {
      text-align: center;
    }
    
    .conclusion-title {
      font-size: 1.8rem;
    }
  }
`}</style>
    </Layout>
  );
};

export default WinterBurrowPillarPage;