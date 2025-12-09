// components/winter-burrow/sections/GuideSteps.tsx
import React from 'react';
import { MainContentSection } from '../MainContentSection';

interface GuideStep {
  step: number;
  title: string;
  detail: string;
}

interface GuideProps {
  guideTitle: string;
  steps: GuideStep[];
}

export const GuideSteps: React.FC<GuideProps> = ({ guideTitle, steps }) => {
  return (
    <MainContentSection 
      id="guide" 
      title="03 新手生存攻略" 
      icon="🛠️" 
      titleColor="text-red-700" 
      borderColor="border-red-200"
    >
      <h3 className="text-2xl font-semibold text-red-600 mb-4">{guideTitle}</h3>
      
      <ol className="space-y-5">
        {steps.map(step => (
          <li key={step.step} className="flex items-start">
            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full font-bold mr-3 mt-1">
              {step.step}
            </span>
            <div>
              <h4 className="text-xl font-bold text-red-800">{step.title}</h4>
              {/* 使用 dangerouslySetInnerHTML 处理**粗体**标记 */}
              <p 
                className="text-gray-700 mt-1" 
                dangerouslySetInnerHTML={{ __html: step.detail.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
              ></p>
            </div>
          </li>
        ))}
      </ol>
    </MainContentSection>
  );
};