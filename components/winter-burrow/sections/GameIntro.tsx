// components/winter-burrow/sections/GameIntro.tsx
import React from 'react';
import { MainContentSection } from '../MainContentSection';

interface IntroProps {
  paragraphs: string[];
}

export const GameIntro: React.FC<IntroProps> = ({ paragraphs }) => {
  // 仅针对 Winter Burrow 示例：手动高亮“温馨治愈”
  const formatText = (text: string) => {
    if (text.includes('温馨治愈')) {
      return (
        <>
          《林间暖巢(Winter Burrow)》是一款**温馨治愈**的森林生存游戏。
          {text.substring(text.indexOf('温馨治愈') + 4)}
        </>
      );
    }
    return text;
  };

  return (
    <MainContentSection 
      id="intro" 
      title="01 游戏介绍" 
      icon="📖" 
      titleColor="text-green-700" 
      borderColor="border-green-200"
    >
      {paragraphs.map((p, index) => (
        <p key={index} className="mb-4 leading-relaxed text-lg">
          {formatText(p)}
        </p>
      ))}
    </MainContentSection>
  );
};