// components/winter-burrow/MainContentSection.tsx
import React, { ReactNode } from 'react';

interface ContentSectionProps {
  id: string;
  title: string;
  children: ReactNode;
  icon: string;
  titleColor: string; // Tailwind color class, e.g., 'text-green-700'
  borderColor: string; // Tailwind color class, e.g., 'border-green-200'
}

export const MainContentSection: React.FC<ContentSectionProps> = ({ id, title, children, icon, titleColor, borderColor }) => {
  return (
    <section id={id} className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className={`text-3xl font-bold ${titleColor} mb-4 border-b-2 ${borderColor} pb-2`}>
        {icon} {title}
      </h2>
      {children}
    </section>
  );
};