// components/winter-burrow/TableOfContents.tsx
import React from 'react';

interface TOCItem {
  id: string;
  title: string;
}

interface TOCProps {
  sections: TOCItem[];
}

export const TableOfContents: React.FC<TOCProps> = ({ sections }) => (
  <nav className="p-4 bg-amber-50 rounded-xl shadow-md sticky top-4 mb-8">
    <h3 className="text-xl font-bold text-amber-900 mb-3 border-b border-amber-300 pb-2">📦 页面目录</h3>
    <ul className="space-y-2">
      {sections.map(sec => (
        <li key={sec.id}>
          <a
            href={`#${sec.id}`}
            className="text-amber-800 hover:text-amber-600 transition duration-150 text-sm md:text-base"
          >
            {sec.title}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);