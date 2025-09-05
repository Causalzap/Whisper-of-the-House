// app/guides/top-tips-and-tricks.tsx
'use client'; 
import Layout from '../../components/Layout'; // If paths are configured in tsconfig
import '../../styles/globals.css'; // 添加全局样式导入
import React from 'react';



const TopTipsAndTricks = () => {
  return (
    <Layout>
      <div className="guide-container">
        {/* 面包屑导航 */}
        <nav className="breadcrumb">
          <ol>
            <li><a href="/">Home</a></li>
            <li><a href="/guides">Guides</a></li>
            <li className="current">Top Tips & Tricks</li>
          </ol>
        </nav>

        <div className="guide-header">
          <h1>Whisper of the House: Essential Tips & Tricks to Master Hidden Features</h1>
          <p className="guide-subtitle">Unlock the full potential of Whisper of the House with these expert strategies for design, exploration, and secret discovery</p>
        </div>

        <div className="guide-content">
          <section className="guide-section">
            <div className="section-header">
              <div className="section-number">1</div>
              <h2>Master Furniture Placement for Optimal Design</h2>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Rotate & Zoom Furniture</h3>
              <p className="subsection-content">
                Right-click to rotate furniture and use your mouse scroll wheel to zoom in and out. This is essential for fitting pieces into tight spaces and fine-tuning your design layout.
              </p>
              <div className="tip-example">
              <video 
                className="example-video" 
                src="/videos/whisper_of_the_house_rotate_items.mp4" 
                controls 
                loop 
                muted 
                playsInline
              />
                <p className="example-caption">Example: Rotating a sofa to fit perfectly in a corner</p>
              </div>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Use Vertical Space</h3>
              <p className="subsection-content">
                Maximize every room by placing items on shelves, walls, or elevated surfaces. This tactic is key for creating more spacious and visually appealing rooms while utilizing all available space.
              </p>
            </div>
          </section>

          <section className="guide-section">
            <div className="section-header">
              <div className="section-number">2</div>
              <h2>Efficient Inventory Management: Recycle and Reorganize</h2>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Leverage the Recycling Bin</h3>
              <p className="subsection-content">
                Discard unnecessary items in the underground recycling bin to earn valuable vouchers. These can be spent on furniture, plants, and décor that elevate your designs.
              </p>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Smart Vouchers Spending</h3>
              <p className="subsection-content">
                Early in the game, focus on purchasing plants and decorations, as they have versatile uses across various rooms. Save larger furniture purchases for when you unlock more rooms and need them to complete your designs.
              </p>
              <div className="tip-example">
                <img 
                  src="/images/whisper_of_the_house_best_early_game_purchases.jpg" 
                  alt="Whisper of the House: Best early-game purchases - plants and small décor item" 
                  className="example-image"
                />
                <p className="example-caption">Best early-game purchases: plants and small décor items</p>
              </div>
            </div>
          </section>

          <section className="guide-section">
            <div className="section-header">
              <div className="section-number">3</div>
              <h2>Explore & Interact for Hidden Content and Easter Eggs</h2>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Hover Over Objects</h3>
              <p className="subsection-content">
                Hovering your mouse over interactive objects reveals their details. Repeatedly clicking on these may trigger hidden content, unlock secret tasks, and reveal Easter eggs.
              </p>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Search for Environmental Clues</h3>
              <p className="subsection-content">
                Pay attention to footprints, stains, and unusual patterns on the floor. These often lead to hidden items or interactions that unlock additional content.
              </p>
              <div className="tip-example">
                <img 
                  src="/images/whisper_of_the_house_abnormal_point_17_luna_bathroom_footprints.png" 
                  alt="Whisper of the House: Following footprints to a hidden item" 
                  className="example-image"
                />
                <p className="example-caption">Example: Following footprints to a hidden item</p>
              </div>
            </div>
          </section>

          <section className="guide-section">
            <div className="section-header">
              <div className="section-number">4</div>
              <h2>Unlock Secret Rooms & Hidden Areas</h2>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Identify Suspicious Walls</h3>
              <p className="subsection-content">
                Some walls conceal hidden rooms. Look out for cracks, gaps, or odd paintings, as these could indicate secret spaces that can be unlocked with the right interactions.
              </p>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Use the Time Machine</h3>
              <p className="subsection-content">
                The time machine is a crucial item that grants access to previously unreachable areas and unlocks hidden storylines, enriching your experience and revealing more of the game's mysteries.
              </p>
              <div className="tip-example">
                <img 
                  src="/images/whisper_of_the_house_time_machine_secret_area.png" 
                  alt="Whisper of the house：Time machine unlocking a secret area" 
                  className="example-image"
                />
                <p className="example-caption">Time machine unlocking a secret area</p>
              </div>
            </div>
          </section>

          <section className="guide-section">
            <div className="section-header">
              <div className="section-number">5</div>
              <h2>Take Advantage of Special Interactions for Rewards</h2>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Pet the Cat for Hidden Rewards</h3>
              <p className="subsection-content">
                Interact with the cat in various locations to trigger special animations and earn small rewards that help with progression.
              </p>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Discover Hidden Items in Trash Bins</h3>
              <p className="subsection-content">
                Open trash bins throughout the game to find hidden items or uncover unusual objects that might provide additional clues or valuable rewards.
              </p>
              <div className="tip-example">
              <img 
                  src="/images/whisper_of_the_house_item_in_trash_bin.png" 
                  alt="Whisper of the house：Finding a rare item in a trash bin" 
                  className="example-image"
                />
                <p className="example-caption">Finding a rare item in a trash bin</p>
              </div>
            </div>
          </section>

          <section className="guide-conclusion">
            <h2>Become a Master of Whisper of the House</h2>
            <p>
              By following these essential tips and strategies, you'll unlock hidden secrets, optimize your room designs, and enhance your overall experience. Whisper of the House offers endless possibilities for players who love to solve puzzles and engage in creative challenges. Experiment with layouts, explore hidden areas, and uncover the whimsical mysteries that make this pixel puzzle game so uniquely enjoyable.
            </p>
            <p>
              Whether you're designing rooms, collecting hidden items, or unlocking secret content, these tips will ensure you're always ahead in the game. Start using these strategies today and master the complexities of Whisper of the House for an enhanced gaming experience!
            </p>
          </section>
        </div>
      </div>

      <style jsx>{`
        /* 组件特定样式 */
        .tip-example {
          background: rgba(78, 204, 163, 0.1);
          border-radius: 8px;
          padding: 1rem;
          margin: 1rem 0;
          border-left: 3px solid var(--accent);
        }
        
        .example-image {
          max-width: 100%;
          height: auto;
          border-radius: 12px; /* 圆角优化 */
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25); /* 阴影增加层次感 */
          display: block;
          margin: 0 auto; /* 图片居中 */
        }
        
        .example-image::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, rgba(78, 204, 163, 0.1), rgba(100, 149, 237, 0.1));
        }
        
        .example-caption {
          font-style: italic;
          color: var(--text-gray);
          font-size: 0.9rem;
          text-align: center;
          margin-top: 0.5rem;
        }
        
        @media (max-width: 768px) {
          .example-image {
            height: 150px;
          }
        }
      `}</style>
    </Layout>
  );
};

export default TopTipsAndTricks;