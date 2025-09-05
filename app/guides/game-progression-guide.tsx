// app/guides/game-progression-guide.tsx
'use client'; 
import Layout from '../../components/Layout';
import React from 'react';


const GameProgressionGuide = () => {
  return (
    <Layout>
      <div className="guide-container">
        {/* 面包屑导航 */}
        <nav className="breadcrumb">
          <ol>
            <li><a href="/">Home</a></li>
            <li><a href="/guides">Guides</a></li>
            <li className="current">Game Progression Guide</li>
          </ol>
        </nav>

        <div className="guide-header">
          <h1>Whisper of the House - Progression Guide: How to Master the Game and Unlock Secrets</h1>
          <p className="guide-subtitle">Your comprehensive guide to advancing through the game, unlocking new areas, and maximizing your design potential</p>
        </div>

        <div className="guide-content">
          <section className="guide-section">
            <div className="section-header">
              <div className="section-number">1</div>
              <h2>Understanding the Core Gameplay Mechanics</h2>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Furniture Organization and Placement</h3>
              <p className="subsection-content">
                Your primary job is to arrange furniture in each room. Make sure to use the space efficiently by rotating and adjusting the furniture to fit each room's layout. Some furniture items can be rotated, folded, or hung, providing flexibility in your designs.
              </p>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Meeting Client Demands</h3>
              <p className="subsection-content">
                Each resident will have specific requests for their rooms. Some of these requests will be unusual, like hanging beds or placing glowing plants in certain spots. Make sure to meet their demands to unlock new rewards and tasks.
              </p>
            </div>
          </section>

          <section className="guide-section">
            <div className="section-header">
              <div className="section-number">2</div>
              <h2>Key Progression Tasks</h2>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Main Tasks</h3>
              <p className="subsection-content">
                As you help residents organize and decorate their rooms, you'll progress through the story. Complete each task to unlock new areas and opportunities.
              </p>
              <ul className="subsection-list">
                <li><strong>Luna's Hidden Room</strong>: Move the Mona Lisa painting to reveal a hidden passage.</li>
                <li><strong>Grandpa's Tasks</strong>: Ensure the furniture in Grandpa's house is correctly placed to avoid being stuck in the game.</li>
              </ul>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Unlocking Hidden Rooms</h3>
              <p className="subsection-content">
                Some residents' homes contain hidden rooms or Easter eggs. To unlock them, interact with specific objects, rotate furniture, or complete secret tasks.
              </p>
              <ul className="subsection-list">
                <li>Rotate a bed to reveal a hidden room.</li>
                <li>Move furniture in a specific order to trigger a hidden story.</li>
              </ul>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Potion Puzzle and Secret Areas</h3>
              <p className="subsection-content">
                The game offers various puzzles, including crafting potions and unlocking secret portals. Some areas can only be accessed by completing potion-related tasks.
              </p>
              <p className="subsection-content">
                <strong>Example</strong>: Find the lost journal pages to create "Mirror Dew" and unlock a gateway.
              </p>
            </div>
          </section>

          <section className="guide-section">
            <div className="section-header">
              <div className="section-number">3</div>
              <h2>Hidden Elements and Easter Eggs</h2>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Camera Function</h3>
              <p className="subsection-content">
                Use the camera to capture fun moments and interact with hidden content. The camera can trigger secret tasks or rewards when used in specific areas.
              </p>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Vouchers and Rewards</h3>
              <p className="subsection-content">
                Recycle unnecessary items in the underground recycling bin to earn vouchers. These vouchers can be used to purchase plants, furniture, and decoration sets to improve your designs.
              </p>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Community Interaction</h3>
              <p className="subsection-content">
                You can visit other players' towns to gain inspiration and interact with their designs. Join the official Discord or forum for exclusive rewards and community events.
              </p>
            </div>
          </section>

          <section className="guide-section">
            <div className="section-header">
              <div className="section-number">4</div>
              <h2>Unlocking New Areas and Secrets</h2>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Time Machine</h3>
              <p className="subsection-content">
                The time machine is a unique item that allows you to enter areas that are otherwise inaccessible. Some endings and secret areas can only be unlocked using this feature.
              </p>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Exploring Hidden Walls</h3>
              <p className="subsection-content">
                Not all walls in the game are real. Some have hidden rooms behind them. Look for suspicious cracks, gaps, or unusual paintings to uncover secret spaces.
              </p>
            </div>
          </section>

          <section className="guide-section">
            <div className="section-header">
              <div className="section-number">5</div>
              <h2>Final Tips for Progression</h2>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Focus on Completing Client Requests</h3>
              <p className="subsection-content">
                These tasks help you unlock new furniture, hidden rooms, and progress the story. By satisfying clients' needs, you'll gradually uncover the town's mysteries.
              </p>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Use Vouchers Wisely</h3>
              <p className="subsection-content">
                Spend your vouchers on useful items like plants and décor early on to improve your space. Save larger furniture sets for later when you unlock new areas.
              </p>
            </div>
          </section>

          <section className="guide-conclusion">
            <h2>Master Your Journey in Whisper of the House</h2>
            <p>
              By following these strategies, you'll be able to progress efficiently through Whisper of the House while discovering its hidden secrets and stories. Stay curious, explore all the rooms, and enjoy the satisfaction of transforming the town one space at a time!
            </p>
          </section>
        </div>
      </div>

      <style jsx>{`
        .guide-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem 1rem;
          color: #e6e6e6;
        }
        
        .guide-header {
          text-align: center;
          margin-bottom: 3rem;
          padding: 2rem;
          background: rgba(26, 26, 46, 0.8);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .guide-header h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #fff;
          background: linear-gradient(135deg, #fff 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .guide-subtitle {
          font-size: 1.2rem;
          color: #a5a5a5;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .guide-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .guide-section {
          background: rgba(26, 26, 46, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .guide-section:hover {
          border-color: rgba(100, 149, 237, 0.3);
          transform: translateY(-3px);
        }
        
        .section-header {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #4ecca3;
        }
        
        .section-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: #4ecca3;
          color: #1a1a2e;
          border-radius: 50%;
          font-weight: bold;
          font-size: 1.2rem;
          margin-right: 1rem;
        }
        
        .guide-section h2 {
          font-size: 1.8rem;
          color: #fff;
          margin: 0;
        }
        
        .subsection {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
          border-left: 2px solid rgba(100, 149, 237, 0.5);
        }
        
        .subsection-title {
          font-size: 1.3rem;
          color: #4ecca3;
          margin-bottom: 0.5rem;
        }
        
        .subsection-content {
          color: #e6e6e6;
          line-height: 1.6;
          margin-bottom: 0.5rem;
        }
        
        .subsection-content strong {
          color: #4ecca3;
          font-weight: 600;
        }
        
        .subsection-list {
          list-style: none;
          margin: 1rem 0;
          padding-left: 1rem;
        }
        
        .subsection-list li {
          margin-bottom: 0.5rem;
          position: relative;
          padding-left: 1.5rem;
        }
        
        .subsection-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #4ecca3;
        }
        
        .guide-conclusion {
          background: rgba(78, 204, 163, 0.1);
          border-radius: 12px;
          padding: 2rem;
          border: 1px solid rgba(78, 204, 163, 0.3);
          text-align: center;
        }
        
        .guide-conclusion h2 {
          font-size: 1.8rem;
          color: #4ecca3;
          margin-bottom: 1rem;
        }
        
        .guide-conclusion p {
          color: #e6e6e6;
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .guide-header h1 {
            font-size: 2rem;
          }
          
          .guide-subtitle {
            font-size: 1rem;
          }
          
          .guide-section {
            padding: 1.5rem;
          }
          
          .section-header {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .section-number {
            margin-bottom: 0.5rem;
          }
          
          .guide-section h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </Layout>
  );
};

export default GameProgressionGuide;