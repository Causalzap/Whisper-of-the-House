// app/collection/FurnitureClient.tsx
'use client';

import React, { useState } from 'react';

const FurnitureClient = () => {
  const [activeCategory, setActiveCategory] = useState<'furniture' | 'gardening' | 'rugs' | 'appliances'>('furniture');
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { id: 'furniture' as const, name: 'Furniture', icon: '🪑', color: 'bg-blue-500' },
    { id: 'gardening' as const, name: 'Gardening', icon: '🌿', color: 'bg-green-500' },
    { id: 'rugs' as const, name: 'Rugs', icon: '🧵', color: 'bg-purple-500' },
    { id: 'appliances' as const, name: 'Appliances', icon: '🔌', color: 'bg-red-500' }
  ];

  // 修正后的图片路径 - 确保文件实际存在于public/images目录
  const items = {
    furniture: [
      { 
        id: 1, 
        name: 'Comfortable Sofa', 
        description: 'Comfortable sofa in Whisper of the House, ideal for cozy living rooms.', 
        image: '/images/whisper_of_the_house_furniture_01.png' 
      },
      { 
        id: 2, 
        name: 'Round Wooden Table', 
        description: 'Round wooden table from Whisper of the House, perfect for small dining areas.', 
        image: '/images/whisper_of_the_house_furniture_02.png' 
      },
      { 
        id: 3, 
        name: 'Wooden Chair', 
        description: 'Wooden chair from Whisper of the House, great for dining rooms or kitchens.', 
        image: '/images/whisper_of_the_house_furniture_03.png' 
      },
      { 
        id: 4, 
        name: 'Minimalist Desk', 
        description: 'Minimalist desk from Whisper of the House, ideal for study or home office spaces.', 
        image: '/images/whisper_of_the_house_furniture_04.png' 
      },
      { 
        id: 5, 
        name: 'Modern Stool', 
        description: 'Modern stool from Whisper of the House, perfect for kitchens or home bars.', 
        image: '/images/whisper_of_the_house_furniture_05.png' 
      },
      { 
        id: 6, 
        name: 'Stylish Chair', 
        description: 'Stylish chair from Whisper of the House, designed for comfort in any room.', 
        image: '/images/whisper_of_the_house_furniture_06.png' 
      },
      { 
        id: 7, 
        name: 'Functional Table', 
        description: 'Functional table from Whisper of the House, versatile for various room settings.', 
        image: '/images/whisper_of_the_house_furniture_07.png' 
      },
      { 
        id: 8, 
        name: 'Classic Dining Table', 
        description: 'Classic dining table from Whisper of the House, suitable for family meals.', 
        image: '/images/whisper_of_the_house_furniture_08.png' 
      },
      { 
        id: 9, 
        name: 'Elegant Bookshelf', 
        description: 'Elegant bookshelf from Whisper of the House, ideal for organizing books and decor.', 
        image: '/images/whisper_of_the_house_furniture_09.png' 
      },
      { 
        id: 10, 
        name: 'Vintage Chair', 
        description: 'Vintage chair from Whisper of the House, perfect for adding charm to any room.', 
        image: '/images/whisper_of_the_house_furniture_10.png' 
      },
    ],
    gardening: [
      { 
        id: 1, 
        name: 'Garden Bench', 
        description: 'Elegant garden bench for outdoor relaxation', 
        image: '/images/whisper_of_the_house_gardening_01.jpg' 
      },
      { 
        id: 2, 
        name: 'Flower Pots Set', 
        description: 'Beautiful set of flower pots for various plants', 
        image: '/images/whisper_of_the_house_gardening_02.jpg' 
      },
    ],
    rugs: [
      { 
        id: 1, 
        name: 'Persian Style Rug', 
        description: 'Traditional Persian style rug for luxurious feel', 
        image: '/images/whisper_of_the_house_rug_01.jpg' 
      },
      { 
        id: 2, 
        name: 'Modern Rug', 
        description: 'Simple modern rug suitable for any room', 
        image: '/images/whisper_of_the_house_rug_02.jpg' 
      },
    ],
    appliances: [
      { 
        id: 1, 
        name: 'Washing Machine', 
        description: 'Front-loading washing machine for laundry room', 
        image: '/images/whisper_of_the_house_appliance_01.jpg' 
      },
      { 
        id: 2, 
        name: 'Kitchen Appliance', 
        description: 'Essential kitchen appliance for cooking', 
        image: '/images/whisper_of_the_house_appliance_02.jpg' 
      },
      { 
        id: 3, 
        name: 'Refrigerator', 
        description: 'Large capacity refrigerator to keep food fresh', 
        image: '/images/whisper_of_the_house_appliance_03.jpg' 
      },
      { 
        id: 4, 
        name: 'Large Refrigerator', 
        description: 'Large capacity refrigerator to keep food fresh', 
        image: '/images/whisper_of_the_house_appliance_04.jpg' 
      },
    ],
  };

  // 图片加载失败处理
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    console.warn(`Image failed to load: ${target.src}`);
    
    // 创建彩色占位符
    const colors = ['bg-gradient-to-br from-blue-400 to-blue-600', 
                   'bg-gradient-to-br from-green-400 to-green-600',
                   'bg-gradient-to-br from-purple-400 to-purple-600',
                   'bg-gradient-to-br from-red-400 to-red-600'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // 替换img为div
    const parent = target.parentElement;
    if (parent) {
      parent.innerHTML = `
        <div class="w-full h-full flex items-center justify-center ${randomColor} rounded-lg">
          <span class="text-white text-4xl">${categories.find(cat => cat.id === activeCategory)?.icon || '🖼️'}</span>
        </div>
      `;
    }
  };

  const toggleShowAll = () => setShowAll((s) => !s);
  const displayedItems = showAll ? items[activeCategory] : items[activeCategory].slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-900">
      {/* 英雄区域 */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-purple-900 via-purple-800 to-gray-900">
        <div className="container mx-auto max-w-6xl text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Whisper of the House Collection
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Explore the most popular furniture, appliances, rugs, and gardening items in the game
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        {/* 分类选项卡 */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id 
                    ? `${category.color} text-white shadow-lg transform -translate-y-1` 
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
                onClick={() => {
                  setActiveCategory(category.id);
                  setShowAll(false);
                }}
              >
                <span className="text-xl">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* 物品展示区域 */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-2xl hover:border-white/20 hover:transform hover:-translate-y-2"
              >
                {/* 图片区域 - 添加加载状态和错误处理 */}
                <div className="h-64 bg-gray-800 flex items-center justify-center p-4 relative">
                  <img 
                    src={item.image}
                    alt={item.name}
                    onError={handleImageError}
                    className="w-full h-full object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {items[activeCategory].length > 6 && (
            <div className="text-center mt-12">
              <button 
                onClick={toggleShowAll} 
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                {showAll 
                  ? 'Show Less' 
                  : `View All ${categories.find((c) => c.id === activeCategory)?.name} →`}
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default FurnitureClient;