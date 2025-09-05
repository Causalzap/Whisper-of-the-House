// app/guides/beginners-guide.tsx
'use client'; 
import Layout from '../../components/Layout';
import '../../styles/globals.css'; 
import React from 'react';



const BeginnerGuide = () => {
  return (
    <Layout>

      <div className="guide-container">

        {/* 面包屑导航 */}
        <nav className="breadcrumb">
          <ol>
            <li><a href="/">Home</a></li>
            <li><a href="/guides">Guides</a></li>
            <li className="current">Beginner's Guide</li>
          </ol>
        </nav>

        <div className="guide-header">
          <h1>Whisper of the House — Beginner's Guide: Your Ultimate Resource for Success</h1>
          <p className="guide-subtitle">Transform a forgotten town through creative room designs and furniture arrangement</p>
        </div>

        <div className="guide-content">
          <section className="guide-section">
            <div className="section-header">
              <div className="section-number">1</div>
              <h2>Mastering Basic Gameplay: How to Organize and Decorate Rooms</h2>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Furniture Organization and Placement</h3>
              <p className="subsection-content">
                Your primary job is to arrange furniture in each room, ensuring optimal space usage and aesthetic appeal. You'll need to carefully consider the shape, direction, and combination of furniture pieces. <strong>Key tip</strong>: Rotate furniture when needed to maximize space and design flexibility.
              </p>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Meeting Client Demands</h3>
              <p className="subsection-content">
                Each client in the game has their own unique needs and requests for their rooms. Some may ask for quirky, out-of-the-box solutions like hanging beds or placing glowing plants. As a designer, it's your job to meet these demands creatively, while also fulfilling functional requirements.
              </p>
            </div>
          </section>

          <section className="guide-section">
            <div className="section-header">
              <div className="section-number">2</div>
              <h2>How to Complete Tasks and Unlock New Challenges</h2>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Help Residents by Organizing Their Rooms</h3>
              <p className="subsection-content">
                The game progresses as you complete tasks for each resident. These tasks will vary, but they all involve organizing and designing rooms based on the client's desires. Successfully completing a task rewards you with new items, unlocking additional rooms or secret areas, and sometimes hidden Easter eggs.
              </p>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Unlock Hidden Secrets</h3>
              <p className="subsection-content">
                Explore every corner of the town and uncover hidden secrets, puzzles, and challenges. Completing these secret tasks often leads to valuable rewards and unique items that will help you design even more vibrant spaces.
              </p>
            </div>
          </section>

          <section className="guide-section">
            <div className="section-header">
              <div className="section-number">3</div>
              <h2>Essential Controls and Systems for Efficient Gameplay</h2>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Moving the Character</h3>
              <p className="subsection-content">
                Use the <strong>WASD keys</strong> or arrow keys to navigate the rooms. This allows you to move around freely as you position furniture and interact with objects.
              </p>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Interacting with Furniture</h3>
              <p className="subsection-content">
                Left-click to pick up, place, or rotate furniture. Experiment with different placements to discover the most functional and aesthetic layouts for each room.
              </p>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Inventory Management</h3>
              <p className="subsection-content">
                Use the inventory system to search for and organize your collected items. You can filter by item type, such as furniture, decor, or tools, or even by color, making it easier to locate the pieces you need for each room.
              </p>
            </div>
          </section>

          <section className="guide-section">
            <div className="section-header">
              <div className="section-number">4</div>
              <h2>Top Tips for New Players: How to Maximize Your Design Potential</h2>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Rotate Furniture for Optimal Layouts</h3>
              <p className="subsection-content">
                Certain furniture pieces can be rotated to fit better within the room's layout. Experimenting with angles and orientations can lead to more effective designs.
              </p>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Adjust Room Layouts Creatively</h3>
              <p className="subsection-content">
                Don't be afraid to mix and match different furniture pieces and decor to find unique, functional arrangements. The more you experiment, the more you'll discover new ways to enhance your spaces.
              </p>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Complete Client Requests Efficiently</h3>
              <p className="subsection-content">
                Focus on the specific needs of each client, ensuring that their requirements are met before you begin to explore hidden elements of the room. This will help you unlock new areas and items faster.
              </p>
            </div>
          </section>

          <section className="guide-section">
            <div className="section-header">
              <div className="section-number">5</div>
              <h2>Why Play Whisper of the House?</h2>
            </div>
            
            <p className="section-description">
              Whisper of the House is more than just a game; it's a creative journey. By designing rooms, uncovering secrets, and helping residents, you'll bring life back to a forgotten town. Whether you're a puzzle enthusiast, interior design lover, or someone seeking a relaxing escape, Whisper of the House offers an immersive and rewarding experience.
            </p>
            
            <div className="subsection">
              <h3 className="subsection-title">Unique Gameplay</h3>
              <p className="subsection-content">
                Blend of furniture organization, problem-solving, and story progression.
              </p>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Endless Creativity</h3>
              <p className="subsection-content">
                Freedom to experiment with room layouts and designs.
              </p>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Rewarding Challenges</h3>
              <p className="subsection-content">
                Unlock secret areas and items as you progress.
              </p>
            </div>
            
            <p className="section-description">
              Embark on your design adventure today and turn your vision into reality in Whisper of the House—where every room tells a story.
            </p>
          </section>
        </div>
      </div>

      
    </Layout>
  );
};

export default BeginnerGuide;