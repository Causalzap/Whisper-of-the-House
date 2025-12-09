// components/winter-burrow/sections/GameplayFeatures.tsx
import React from 'react';
import { MainContentSection } from '../MainContentSection';

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface GameplayProps {
  features: FeatureItem[];
}

export const GameplayFeatures: React.FC<GameplayProps> = ({ features }) => {
  return (
    <MainContentSection 
      id="gameplay" 
      title="02 核心玩法" 
      icon="🎮" 
      titleColor="text-blue-700" 
      borderColor="border-blue-200"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map(item => (
          <div key={item.id} className="p-5 border-t-4 border-blue-400 bg-blue-50 rounded-lg shadow-md">
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </MainContentSection>
  );
};