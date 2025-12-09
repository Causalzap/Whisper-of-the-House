// components/winter-burrow/sections/KeyFeatures.tsx
import React from 'react';
import { MainContentSection } from '../MainContentSection';

interface Feature {
  title: string;
  detail: string;
}

interface KeyFeaturesProps {
  features: Feature[];
}

export const KeyFeatures: React.FC<KeyFeaturesProps> = ({ features }) => {
  return (
    <MainContentSection 
      id="features" 
      title="04 特色亮点与评测" 
      icon="✨" 
      titleColor="text-purple-700" 
      borderColor="border-purple-200"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="p-4 bg-purple-50 border-l-4 border-purple-400 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-800 mb-1">✅ {feature.title}</h3>
            <p className="text-gray-700 text-sm">{feature.detail}</p>
          </div>
        ))}
      </div>
    </MainContentSection>
  );
};