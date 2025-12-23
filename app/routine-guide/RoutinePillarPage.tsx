// 文件名: RoutinePillarPage.tsx
'use client';
import Layout from '../../components/Layout';
import Link from 'next/link';
import React, { useState } from 'react';
import FAQ, { FAQItem } from '../../components/FAQ'; // 导入FAQ组件
import MissionBriefingCard from '../../components/MissionBriefingCard'; // 导入FAQ组件
import SystemInstruction from '../../components/HowToUse'; // 导入FAQ组件

import { Lock } from 'lucide-react';
import { chapterOneData,chapterTwoData,chapterThreeData,chapterFourData,chapterFiveData,chapterSixData} from './missionData'; // 注意路径，如果在同级目录用 ./


// 定义数据类型接口
interface RoutineData {
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
  category: string;
  readTime: string;
  publishedAt: string;
  imageUrl: string;
  difficulty: string;
  tags: string[];
}

interface RoutinePillarPageProps {
  routineData: RoutineData;
  guideData: GuideData[];
}

// FAQ数据 - 定义为组件内部常量
const faqItems: FAQItem[] = [
  {
    question: "Is there combat in ROUTINE?",
    answer: "Yes—but it is a last resort. The C.A.T. can temporarily disable robotic threats, but limited power and recovery make stealth and avoidance the only sustainable strategies.",
    category: "Gameplay",
    difficulty: "beginner"
  },
  {
    question: "How extreme is the lack of a HUD?",
    answer: "Completely uncompromising. There is no traditional interface. All information exists within the world itself, reinforcing a fully diegetic interface.",
    category: "Interface",
    difficulty: "intermediate"
  },
  {
    question: "Is ROUTINE an immersive sim?",
    answer: "It shares core DNA with immersive sims through systemic interaction, environmental problem-solving, and player-driven outcomes, expressed through horror rather than empowerment.",
    category: "Genre",
    difficulty: "intermediate"
  },
  {
    question: "What games does ROUTINE appeal to?",
    answer: "Players who appreciate Alien: Isolation, SOMA, and first-person immersive horror experiences built on tension, observation, and atmosphere will find ROUTINE immediately familiar—and far less forgiving.",
    category: "Comparisons",
    difficulty: "beginner"
  },
  {
    question: "Is the 2025 release different from early footage?",
    answer: "The 2025 release represents the definitive realization of the original analog horror vision, refined with modern fidelity while preserving its uncompromising mechanical identity.",
    category: "Release",
    difficulty: "beginner"
  },
  {
    question: "How long is the gameplay?",
    answer: "ROUTINE emphasizes quality over quantity. A single playthrough typically takes 8-12 hours, but exploration and observation can extend this significantly. The non-linear structure encourages multiple approaches.",
    category: "Gameplay",
    difficulty: "beginner"
  },
  {
    question: "Are there save points?",
    answer: "Yes, but they are diegetic. You must find and interact with specific terminals throughout the lunar base to save your progress. This adds to the tension and strategic planning.",
    category: "Gameplay",
    difficulty: "intermediate"
  },
  {
    question: "Can I customize difficulty settings?",
    answer: "ROUTINE doesn't have traditional difficulty settings. Instead, the challenge emerges from your playstyle. Aggressive players will face more threats, while cautious observers can navigate with less danger.",
    category: "Gameplay",
    difficulty: "intermediate"
  },
  {
    question: "What are the system requirements?",
    answer: "ROUTINE is optimized for modern systems but maintains its analog aesthetic. Minimum: Windows 10, Intel Core i5, 8GB RAM, GTX 1060. Recommended: Windows 11, Intel Core i7, 16GB RAM, RTX 3060.",
    category: "Technical",
    difficulty: "beginner"
  },
  {
    question: "Is there VR support?",
    answer: "No official VR support is planned. The game's tension relies on precise control of perspective and audio cues that would be challenging to implement effectively in VR.",
    category: "Technical",
    difficulty: "beginner"
  },
  {
    question: "How does the C.A.T. tool battery work?",
    answer: "The C.A.T. has a finite battery that depletes with use. It can be recharged at specific terminals throughout the base. Overuse without recharging will leave you vulnerable at critical moments.",
    category: "Mechanics",
    difficulty: "intermediate"
  },
  {
    question: "Are there multiple endings?",
    answer: "ROUTINE features multiple outcomes based on your investigation choices and interactions with the lunar base's systems. Discovering the truth requires thorough exploration and observation.",
    category: "Story",
    difficulty: "advanced"
  }
];

const RoutinePillarPage: React.FC<RoutinePillarPageProps> = ({ 
  routineData, 
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
        <div className="guide-hero" style={{ backgroundImage: `url(${routineData.hero.imageUrl})` }}>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">{routineData.hero.title}</h1>
            <p className="hero-subtitle">{routineData.hero.subtitle}</p>
            <div className="hero-meta">
              <span className="meta-tag">Immersive Horror</span>
              <span className="meta-tag">Survival</span>
              <span className="meta-tag">First-Person</span>
              <span className="meta-tag">Analog Futurism</span>
            </div>
          </div>
        </div>

        <div className="guide-content">
          {/* Introduction Section */}
          <section className="section">
            <div className="section-header">
              <span className="section-number">01</span>
              <h2 className="section-title">Mission Briefing</h2>
            </div>
            
            <div className="content-image" style={{ textAlign: "center" }}>
              <img 
                src="/images/routine/lunar-base-exterior.webp" 
                alt="Abandoned lunar base exterior" 
                className="intro-image"
                loading="lazy"
              />
            </div>

            <div className="content-grid">
              <div className="content-card">
                <h3 className="card-title">Mission Context</h3>
                <p className="card-text">{routineData.intro[0]}</p>
              </div>
              
              <div className="content-card">
                <h3 className="card-title">Core Philosophy</h3>
                <p className="card-text">{routineData.intro[1]}</p>
              </div>
            </div>
          </section>

          {/* Core Mechanics Section */}
          <section className="section">
            <div className="section-header">
              <span className="section-number">02</span>
              <h2 className="section-title">Core Mechanics</h2>
            </div>
            
            <div className="gameplay-grid">
              {routineData.gameplay.map((feature) => (
                <div key={feature.id} className="gameplay-card">
                  <div className="gameplay-icon">{feature.icon}</div>
                  <h3 className="gameplay-title">{feature.title}</h3>
                  <p className="gameplay-desc">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Survival Protocol Section */}
          <section className="section">
            <div className="section-header">
              <span className="section-number">03</span>
              <h2 className="section-title">Survival Protocol</h2>
            </div>
            
            <div className="guide-intro">
              <h3 className="guide-intro-title">{routineData.guide.guideTitle}</h3>
              <p className="guide-intro-text">Essential survival protocols for navigating the abandoned lunar facility. Observation precedes survival.</p>
            </div>
            
            <div className="steps-container">
              {routineData.guide.steps.map((step, index) => (
                <div key={index} className="step-card">
                  <div className="step-header">
                    <span className="step-number">Protocol {step.step}</span>
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

          {/* Features & Analysis Section */}
          <section className="section">
            <div className="section-header">
              <span className="section-number">04</span>
              <h2 className="section-title">Technical Analysis</h2>
            </div>
            
            <div className="features-grid">
              {routineData.features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-desc">{feature.detail}</p>
                </div>
              ))}
            </div>
            
            {/* Ratings */}
            <div className="ratings-section">
              <h3 className="ratings-title">Threat Assessment</h3>
              <div className="ratings-grid">
                {routineData.ratings.map((rating, index) => (
                  <div key={index} className="rating-card">
                    <div className="rating-score">{rating.score}</div>
                    <div className="rating-category">{rating.category}</div>
                    <div className="rating-desc">{rating.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="section">
            <div className="section-header">
              <span className="section-number">05</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>
            
            <FAQ
              faqItems={faqItems}
              title="Mission Protocol FAQs"
              subtitle="Common operational questions and technical clarifications for lunar base investigation"
              showCategoryFilter={true}
              showDifficultyFilter={true}
              theme="tech"
              maxWidth="100%"
            />
          </section>

          {/* Access Mission Section */}
          <section className="section cta-section">
            <div className="section-header">
              <span className="section-number">06</span>
              <h2 className="section-title">Initialize Mission</h2>
            </div>
            
            <div className="cta-content">
              <h3 className="cta-title">{routineData.cta.title}</h3>
              <p className="cta-text">Do you have the discipline to observe before you act? Begin the investigation on your platform of choice.</p>
              
              <div className="platforms">
                <a 
                  href={routineData.cta.linkUrl} 
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

          {/* 07 Related Missions - 升级为战术简报中心 */}
          <section className="section guides-section">
            <div className="section-header">
              <span className="section-number">07</span>
              <h2 className="section-title">Mission Briefings</h2>
            </div>

            <div className="guides-intro">
              <p>Structural analysis and tactical intelligence for specific mission sectors. Select a briefing for deep-dive protocol.</p>
            </div>

            <div className="mission-briefing-grid">
              {/* 已完成：Chapter 01 */}
              <MissionBriefingCard {...chapterOneData} />

              {/* 已完成：Chapter 02 */}
              <MissionBriefingCard {...chapterTwoData} />

              {/* 已完成：Chapter 03 */}
              <MissionBriefingCard {...chapterThreeData} />

              {/* 已完成：Chapter 04 */}
              <MissionBriefingCard {...chapterFourData} />

              {/* 已完成：Chapter 05 */}
              <MissionBriefingCard {...chapterFiveData} />

              {/* 已完成：Chapter 06 */}
              <MissionBriefingCard {...chapterSixData} />

              <SystemInstruction />

            </div>

          </section>

          {/* Final Transmission */}
          <section className="conclusion-section">
            <h2 className="conclusion-title">FINAL TRANSMISSION: ROUTINE - Analog Horror Perfected</h2>
            <div className="conclusion-content">
              <p>
                ROUTINE represents a paradigm shift in immersive horror, stripping away modern gaming conveniences 
                to deliver an uncompromising experience where every interaction carries weight and every decision echoes 
                through the cold vacuum of the abandoned lunar base.
              </p>
              <p>
                This is not horror through jump scares or scripted sequences, but through systemic tension—a world that 
                reacts to your presence, where the environment itself becomes both obstacle and narrator. The decade-long 
                development speaks to a vision uncompromised by trends, delivering exactly what it promised: a slow-burn, 
                methodical investigation where survival depends on observation, not reaction.
              </p>
              <p>
                For those who value atmospheric tension over instant gratification, patience over power, and immersion 
                over hand-holding, ROUTINE stands as a landmark achievement. It shares DNA with 
                <a href="https://store.steampowered.com/app/214490/Alien_Isolation/" className="game-link" rel="nofollow noopener noreferrer"> Alien: Isolation</a>'s systemic horror, 
                <a href="https://store.steampowered.com/app/282140/SOMA/" className="game-link" rel="nofollow noopener noreferrer"> SOMA</a>'s philosophical dread, and the 
                <a href="https://store.steampowered.com/app/480490/Prey/" className="game-link" rel="nofollow noopener noreferrer"> Prey</a>'s environmental storytelling, 
                while carving its own distinct identity in the pantheon of immersive horror.
              </p>
            </div>
          </section>
        </div>
        
        {/* Back to Missions Link */}
        <div className="back-to-guides-container">
          <Link href="/guides" className="back-to-guides">← Return to Mission Logs</Link>
        </div>

      </div>

      <style jsx>{`
  :root {
    --cyber-primary: #00c8ff;
    --cyber-dark: #0066cc;
    --cyber-light: #80e1ff;
    --cyber-lighter: #e6f7ff;
    --cyber-gradient: linear-gradient(135deg, var(--cyber-primary) 0%, var(--cyber-dark) 100%);
    --dark-bg: #0a0a0a;
    --darker-bg: #050505;
    --card-bg: #111111;
    --text-primary: #ffffff;
    --text-secondary: #aaaaaa;
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
  
  /* Hero Section */
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
    background: rgba(0, 200, 255, 0.1);
    padding: 8px 20px;
    border-radius: 25px;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--cyber-light);
    border: 1px solid rgba(0, 200, 255, 0.3);
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
    border-bottom: 2px solid var(--cyber-primary);
  }
  
  .section-number {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--cyber-primary);
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
    border: 1px solid rgba(0, 200, 255, 0.1);
    transition: all 0.3s ease;
  }
  
  .content-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    border-color: var(--cyber-primary);
  }
  
  .card-title {
    font-size: 1.5rem;
    color: var(--cyber-light);
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
    border: 1px solid rgba(0, 200, 255, 0.1);
    transition: all 0.3s ease;
  }
  
  .gameplay-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    border-color: var(--cyber-primary);
  }
  
  .gameplay-icon {
    font-size: 3.5rem;
    margin-bottom: 20px;
    color: var(--cyber-light);
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
    background: rgba(0, 200, 255, 0.1);
    border-radius: 15px;
    padding: 30px;
    margin-bottom: 40px;
    border-left: 5px solid var(--cyber-primary);
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
    border: 1px solid rgba(0, 200, 255, 0.1);
  }
  
  .step-header {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 15px;
  }
  
  .step-number {
    display: inline-block;
    background: var(--cyber-primary);
    color: #000;
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
    color: var(--cyber-light);
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
    border: 1px solid rgba(0, 200, 255, 0.1);
    transition: all 0.3s ease;
  }
  
  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  }
  
  .feature-title {
    font-size: 1.4rem;
    color: var(--cyber-light);
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
    border: 1px solid rgba(0, 200, 255, 0.1);
    transition: all 0.3s ease;
  }
  
  .rating-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  }
  
  .rating-score {
    font-size: 2.8rem;
    font-weight: 800;
    color: var(--cyber-light);
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
  background: var(--dark-bg);
  border-radius: 20px;
  padding: 60px 40px;
  text-align: center;
  border: 1px solid rgba(0, 200, 255, 0.3);
  box-shadow: 0 5px 20px rgba(0, 200, 255, 0.1);
}

.cta-section .section-header {
  border-bottom-color: rgba(0, 200, 255, 0.3);
  justify-content: flex-start;
}

.cta-section .section-number {
  color: var(--cyber-primary);
  background: rgba(0, 200, 255, 0.1);
  padding: 8px 20px;
  border-radius: 8px;
  margin-right: 20px;
  min-width: 60px;
  text-align: center;
}

.cta-section .section-title {
  color: var(--text-primary);
  font-size: 2.4rem;
  font-weight: 700;
  margin: 0;
}

.cta-content {
  max-width: 700px;
  margin: 40px auto 0;
  text-align: center;
}

.cta-title {
  font-size: 2.4rem;
  margin-bottom: 20px;
  font-weight: 700;
  color: var(--cyber-light);
}

.cta-text {
  font-size: 1.2rem;
  color: var(--text-secondary);
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
  background: var(--cyber-primary);
  color: black;
  font-weight: 700;
}

.platform-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 200, 255, 0.3);
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
    border: 2px solid var(--cyber-primary);
    background: var(--card-bg);
    color: var(--cyber-light);
    border-radius: 25px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
  }
  
  .filter-btn.active,
  .filter-btn:hover {
    background: var(--cyber-primary);
    color: black;
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
    border: 1px solid rgba(0, 200, 255, 0.1);
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
    background: rgba(0, 200, 255, 0.2);
    color: #00c8ff;
  }
  
  .guide-difficulty.intermediate {
    background: rgba(255, 150, 0, 0.2);
    color: #ff9600;
  }
  
  .guide-difficulty.advanced {
    background: rgba(255, 0, 100, 0.2);
    color: #ff0064;
  }

  .guide-difficulty.expert {
    background-color: rgba(180, 0, 255, 0.2) !important;
    color: white; /* 使用了亮度更高的浅紫色，确保在全黑背景下清晰 */
    border: 1px solid rgba(180, 0, 255, 0.4) !important;
    display: inline-block;
    padding: 2px 8px;
    border-radius: 4px;
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
    background: rgba(0, 200, 255, 0.1);
    color: var(--cyber-light);
    padding: 6px 14px;
    border-radius: 15px;
    font-size: 0.85rem;
  }
  
  .guide-link {
    display: inline-block;
    color: var(--cyber-light);
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
    align-self: flex-start;
  }
  
  .guide-link:hover {
    color: var(--cyber-primary);
  }
  
  /* Conclusion Section */
  .conclusion-section {
    background: rgba(0, 200, 255, 0.1);
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
    color: var(--cyber-light);
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
    background: var(--cyber-gradient);
    color: black;
    text-decoration: none;
    border-radius: 30px;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 200, 255, 0.3);
  }
  
  .back-to-guides:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 200, 255, 0.4);
  }
  
  /* 图片样式 */
  .intro-image {
    width: 100%;
    max-width: 800px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    margin: 20px 0;
  }
  
  .step-image-container {
    margin-top: 20px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
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
    
    .mission-briefing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 25px;
      margin-top: 40px;
    }
          
    .locked-briefing-card {
      min-height: 200px;
      border: 1px dashed #333;
      transition: all 0.3s ease;
    }
          
    /* 增强原本的 UI 风格 */
    .guides-section {
      padding: 40px;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 20px;
      border: 1px solid rgba(0, 200, 255, 0.05);
    }
  }
`}</style>
    </Layout>
  );
};

export default RoutinePillarPage;