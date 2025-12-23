import React, { useState } from 'react';
import { Shield, Zap, Search, ChevronDown, ChevronUp, Lock } from 'lucide-react';
import Link from 'next/link';

interface CodeInfo {
  label: string;
  source: string;
}

interface MissionBriefingProps {
  chapter: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  priorityHint: string;
  keyPoints: string[];
  codes: CodeInfo[];
  imageUrl?: string;
  slug: string;
}

const MissionBriefingCard: React.FC<MissionBriefingProps> = ({
  chapter,
  title,
  difficulty,
  priorityHint,
  keyPoints,
  codes,
  imageUrl,
  slug
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const difficultyColor = {
    Beginner: 'text-cyan-400 border-cyan-400',
    Intermediate: 'text-yellow-400 border-yellow-400',
    Advanced: 'text-red-500 border-red-500'
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-zinc-600 shadow-2xl">
      {/* 顶部标题栏 - 始终显示 */}
      <div 
        className="p-4 flex items-center justify-between cursor-pointer bg-gradient-to-r from-zinc-900 to-zinc-800"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-4">
          <div className="bg-zinc-800 p-2 rounded text-zinc-400 font-mono text-xs">
            CH-{chapter}
          </div>
          <div>
            <h3 className="text-white font-bold tracking-wider uppercase text-sm">{title}</h3>
            <div className={`text-[10px] uppercase border px-1.5 mt-1 inline-block rounded ${difficultyColor[difficulty]}`}>
              {difficulty}
            </div>
          </div>
        </div>
        <div className="text-zinc-500">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>

      {/* 展开内容 - 战术核心 */}
      {isExpanded && (
        <div className="p-4 border-t border-zinc-800 animate-in fade-in slide-in-from-top-2 duration-300">
          
          {/* 1. 战术警报 (差异化核心：最优路径提醒) */}
          <div className="mb-4 flex items-start gap-3 bg-red-950/20 border border-red-900/50 p-3 rounded">
            <Zap className="text-red-500 mt-1 shrink-0" size={16} />
            <p className="text-xs text-red-200 leading-relaxed">
              <span className="font-bold text-red-400">TACTICAL ALERT:</span> {priorityHint}
            </p>
          </div>

          {/* 2. 关键节点清单 */}
          <div className="mb-4">
            <h4 className="text-zinc-500 text-[10px] uppercase tracking-widest mb-2 flex items-center gap-1">
              <Search size={12} /> Objectives & Collectibles
            </h4>
            <ul className="space-y-1.5">
              {keyPoints.map((point, index) => (
                <li key={index} className="text-xs text-zinc-300 flex items-center gap-2">
                  <div className="w-1 h-1 bg-zinc-600 rounded-full" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* 3. 密码速查 (玩家痛点：不再需要翻找长文) */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {codes.map((code, index) => (
              <div key={index} className="bg-zinc-950 border border-zinc-800 p-2 rounded">
                <div className="text-[9px] text-zinc-500 uppercase flex items-center gap-1">
                  <Lock size={10} /> {code.label}
                </div>
                <div className="text-[11px] text-cyan-500 font-mono mt-0.5 uppercase">
                  {code.source}
                </div>
              </div>
            ))}
          </div>

          {/* 4. 视觉战术图 (可选) */}
          {imageUrl && (
            <div className="relative group">
              <img 
                src={imageUrl} 
                alt="Tactical Hint" 
                className="w-full h-32 object-cover rounded border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-500"
                loading='lazy'
              />
              <div className="absolute inset-0 bg-zinc-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] text-white bg-zinc-800 px-2 py-1 rounded border border-zinc-600">VIEW TACTICAL IMAGE</span>
              </div>
            </div>
          )}

          <Link 
            href={`/routine-guide/${slug}`}
            className="block w-full mt-4 py-2 border border-zinc-700 hover:bg-zinc-800 hover:border-zinc-500 text-zinc-400 text-[10px] uppercase tracking-widest transition-all rounded text-center"
          >
            Access Full Protocol →
          </Link>
        </div>
      )}
    </div>
  );
};

export default MissionBriefingCard;