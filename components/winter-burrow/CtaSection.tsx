// components/winter-burrow/CtaSection.tsx
import React from 'react';

interface CtaProps {
  title: string;
  linkText: string;
  linkUrl: string;
}

export const CtaSection: React.FC<CtaProps> = ({ title, linkText, linkUrl }) => {
  return (
    <section id="download" className="bg-yellow-500 p-8 rounded-xl shadow-2xl text-center text-white">
      <h2 className="text-3xl font-extrabold mb-4">{title}</h2>
      <a 
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-3 text-xl font-bold bg-yellow-700 hover:bg-yellow-800 transition duration-300 rounded-full shadow-lg transform hover:scale-105"
      >
        {linkText}
      </a>
    </section>
  );
};