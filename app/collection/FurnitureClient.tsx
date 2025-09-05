// app/collection/FurnitureClient.tsx
'use client';

import React, { useState } from 'react';
import '../../styles/globals.css';

const FurnitureClient = () => {
  const [activeCategory, setActiveCategory] = useState<'furniture' | 'gardening' | 'rugs' | 'appliances'>('furniture');
  const [showAll, setShowAll] = useState(false);

  // 模拟数据 - 实际应用中应从API获取
  const categories = [
    { id: 'furniture', name: 'Furniture', icon: '🪑' },
    { id: 'gardening', name: 'Gardening', icon: '🌿' },
    { id: 'rugs', name: 'Rugs', icon: '🧵' },
    { id: 'appliances', name: 'Appliances', icon: '🔌' }
  ] as const;

  const items: Record<typeof categories[number]['id'], Array<{id:number;name:string;description:string;image:string;}>> = {
    furniture: [
      { id: 1, name: 'Whisper of the House Furniture Collection Set 1', description: 'Comfortable sofa in Whisper of the House, ideal for cozy living rooms.', image: '/images/whisper_of_the_house_furniture_01.png' },
      { id: 2, name: 'Whisper of the House Furniture Collection Set 2', description: 'Round wooden table from Whisper of the House, perfect for small dining areas.', image: '/images/whisper_of_the_house_furniture_02.png' },
      { id: 3, name: 'Whisper of the House Furniture Collection Set 3', description: 'Wooden chair from Whisper of the House, great for dining rooms or kitchens.', image: '/images/whisper_of_the_house_furniture_03.png' },
      { id: 4, name: 'Whisper of the House Furniture Collection Set 4', description: 'Minimalist desk from Whisper of the House, ideal for study or home office spaces.', image: '/images/whisper_of_the_house_furniture_04.png' },
      { id: 5, name: 'Whisper of the House Furniture Collection Set 5', description: 'Modern stool from Whisper of the House, perfect for kitchens or home bars.', image: '/images/whisper_of_the_house_furniture_05.png' },
      { id: 6, name: 'Whisper of the House Furniture Collection Set 6', description: 'Stylish chair from Whisper of the House, designed for comfort in any room.', image: '/images/whisper_of_the_house_furniture_06.png' },
      { id: 7, name: 'Whisper of the House Furniture Collection Set 7', description: 'Functional table from Whisper of the House, versatile for various room settings.', image: '/images/whisper_of_the_house_furniture_07.png' },
      { id: 8, name: 'Whisper of the House Furniture Collection Set 8', description: 'Classic dining table from Whisper of the House, suitable for family meals.', image: '/images/whisper_of_the_house_furniture_08.png' },
      { id: 9, name: 'Whisper of the House Furniture Collection Set 9', description: 'Elegant bookshelf from Whisper of the House, ideal for organizing books and decor.', image: '/images/whisper_of_the_house_furniture_09.png' },
      { id: 10, name: 'Whisper of the House Furniture Collection Set 10', description: 'Vintage chair from Whisper of the House, perfect for adding charm to any room.', image: '/images/whisper_of_the_house_furniture_10.png' },
    ],
    gardening: [
      { id: 1, name: 'Whisper of the House Plant Collection Set 1', description: 'Elegant garden bench for outdoor relaxation', image: '/images/whisper_of_the_house_gardening_01.jpg' },
      { id: 2, name: 'Whisper of the House Plant Collection Set 2', description: 'Beautiful set of flower pots for various plants', image: '/images/whisper_of_the_house_gardening_02.jpg' },
    ],
    rugs: [
      { id: 1, name: 'Whisper of the House Rugs Collection Set 1', description: 'Traditional Persian style rug for luxurious feel', image: '/images/whisper_of_the_house_rug_01.jpg' },
      { id: 2, name: 'Whisper of the House Rugs Collection Set 2', description: 'Simple modern rug suitable for any room', image: '/images/whisper_of_the_house_rug_02.jpg' },
    ],
    appliances: [
      { id: 1, name: 'Whisper of the House Appliance Collection Set 1', description: 'Front-loading washing machine for laundry room', image: '/images/whisper_of_the_house_appliance_01.jpg' },
      { id: 2, name: 'Whisper of the House Appliance Collection Set 2', description: 'Essential kitchen appliance for cooking', image: '/images/whisper_of_the_house_appliance_02.jpg' },
      { id: 3, name: 'Whisper of the House Appliance Collection Set 3', description: 'Large capacity refrigerator to keep food fresh', image: '/images/whisper_of_the_house_appliance_03.jpg' },
      { id: 4, name: 'Whisper of the House Appliance Collection Set 4', description: 'Large capacity refrigerator to keep food fresh', image: '/images/whisper_of_the_house_appliance_04.jpg' },
    ],
  };

  const toggleShowAll = () => setShowAll((s) => !s);
  const displayedItems = showAll ? items[activeCategory] : items[activeCategory].slice(0, 6);

  return (
    <>
      {/* 英雄区域 */}
      <section className="hero">
        <div className="container">
          <h1>Whisper of the House Collection — Furniture, Appliances, Rugs, and More</h1>
          <p>Explore the most popular items in the game</p>
        </div>
      </section>

      <div className="container">
        {/* 分类选项卡 */}
        <section className="category-tabs">
          <div className="tabs-container">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(category.id);
                  setShowAll(false);
                }}
              >
                <span className="tab-icon">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* 物品展示区域 */}
        <section className="items-showcase">
          <div className="items-grid">
            {displayedItems.map((item) => (
              <article key={item.id} className="item-card">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          {/* 显示更多按钮 */}
          {items[activeCategory].length > 6 && (
            <div className="view-all-container">
              <button onClick={toggleShowAll} className="cta-button">
                {showAll ? 'Show Less' : `View All ${categories.find((c) => c.id === activeCategory)?.name} →`}
              </button>
            </div>
          )}
        </section>
      </div>

      <style jsx>{`
        /* 英雄区域 */
        .hero {
          background: linear-gradient(135deg, var(--primary-dark), var(--accent));
          color: white;
          text-align: center;
          padding: 4rem 0;
          margin-bottom: 2rem;
        }
        .hero h1 { font-size: 2.5rem; margin-bottom: 1rem; }
        .hero p { font-size: 1.2rem; opacity: 0.9; }

        /* 分类选项卡 */
        .category-tabs { margin-bottom: 3rem; }
        .tabs-container {
          display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;
        }
        .tab {
          display: flex; align-items: center; gap: 0.5rem;
          padding: 0.8rem 1.5rem; background: rgba(255,255,255,0.1);
          border: none; border-radius: 50px; color: var(--text-light);
          font-weight: 500; cursor: pointer; transition: all .3s ease;
        }
        .tab:hover { background: rgba(255,255,255,0.15); transform: translateY(-2px); }
        .tab.active { background: var(--accent); color: white; }
        .tab-icon { font-size: 1.2rem; }

        /* 物品展示区域 */
        .items-showcase { padding: 2rem 0; }
        .items-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2.5rem; margin: 2rem 0;
        }
        .item-card {
          display: flex; flex-direction: column; border-radius: 8px; overflow: hidden;
          transition: all .3s ease; position: relative; background: rgba(255,255,255,0.05);
          backdrop-filter: blur(10px); box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        .item-card:hover { transform: translateY(-5px); box-shadow: 0 12px 30px rgba(0,0,0,0.25); }
        .item-image { width: 100%; height: 350px; overflow: hidden; display:flex; align-items:center; justify-content:center; }
        .item-image img { max-width: 100%; max-height: 100%; object-fit: contain; transition: transform .5s ease; }
        .item-card:hover .item-image img { transform: scale(1.05); }
        .item-content { padding: 1.5rem; flex-grow: 1; display:flex; flex-direction: column; }
        .item-card h3 { font-size: 1.3rem; margin-bottom: .8rem; color: #fff; }
        .item-card p { color: var(--text-gray); flex-grow: 1; margin-bottom: 1rem; line-height: 1.5; }
        .view-all-container { text-align: center; margin-top: 4rem; padding-top: 3rem; }
        .cta-button {
          background: linear-gradient(135deg, var(--primary), var(--accent)); color: white;
          border: none; padding: 1rem 2rem; border-radius: 50px; font-weight: 600;
          cursor: pointer; transition: all .3s ease;
        }
        .cta-button:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(0,0,0,0.2); }

        /* 响应式 */
        @media (max-width: 1024px) {
          .items-grid { grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem; }
          .item-image { height: 300px; }
        }
        @media (max-width: 768px) {
          .items-grid { grid-template-columns: 1fr; gap: 1.5rem; }
          .item-image { height: 250px; }
          .item-content { padding: 1.2rem; }
          .tabs-container { gap: .5rem; }
          .tab { padding: .6rem 1.2rem; font-size: .9rem; }
        }
        @media (max-width: 480px) {
          .items-showcase { padding: 1.5rem 0; }
          .item-image { height: 200px; }
          .hero h1 { font-size: 2rem; }
          .hero p { font-size: 1rem; }
        }
      `}</style>
    </>
  );
};

export default FurnitureClient;
