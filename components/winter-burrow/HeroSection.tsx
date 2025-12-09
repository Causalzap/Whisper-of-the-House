// components/winter-burrow/HeroSection.tsx
import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export const HeroSection: React.FC<HeroProps> = ({ title, subtitle, imageUrl }) => {
  return (
    <header 
      className="relative bg-cover bg-center h-96 flex items-center justify-center p-4" 
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-3 drop-shadow-lg">{title}</h1>
        <p className="text-xl md:text-2xl font-light italic drop-shadow-md">{subtitle}</p>
      </div>
    </header>
  );
};