// components/InteractiveMissionLog.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle2, Circle, AlertTriangle, Zap, Info, ChevronRight } from 'lucide-react';
import { Phase } from '@/app/routine-guide/Content'; // 根据你的实际路径调整

interface MissionLogProps {
  chapterNumber: string;
  title: string;
  phases: Phase[];
}

const InteractiveMissionLog: React.FC<MissionLogProps> = ({ chapterNumber, title, phases }) => {
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const totalTasks = phases.reduce((acc, phase) => acc + phase.tasks.length, 0);

  useEffect(() => {
    setProgress(totalTasks > 0 ? Math.round((completedTasks.length / totalTasks) * 100) : 0);
  }, [completedTasks, totalTasks]);

  const toggleTask = (taskId: string) => {
    setCompletedTasks(prev => 
      prev.includes(taskId) ? prev.filter(id => id !== taskId) : [...prev, taskId]
    );
  };

  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl max-w-2xl mx-auto font-mono">
      <div className="p-6 border-b border-zinc-800 bg-zinc-900/50">
        <div className="flex justify-between items-end mb-4">
          <div>
            <h2 className="text-cyan-400 text-xs tracking-[0.3em] uppercase mb-1">Mission Log</h2>
            <h2 className="text-white text-xl font-bold uppercase tracking-tight">Chapter {chapterNumber}: {title}</h2>
          </div>
          <div className="text-right">
            <span className="text-zinc-500 text-[10px] uppercase block mb-1">Completion</span>
            <span className="text-cyan-500 text-2xl font-black">{progress}%</span>
          </div>
        </div>
        <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
          <div className="h-full bg-cyan-500 transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="p-4 space-y-8 max-h-[600px] overflow-y-auto">
        {phases.map((phase) => (
          <div key={phase.id} className="space-y-3">
            <h3 className="text-zinc-500 text-[10px] uppercase tracking-widest flex items-center gap-2">
              <ChevronRight size={12} className="text-cyan-500" /> {phase.title}
            </h3>
            <div className="space-y-2">
              {phase.tasks.map((task) => {
                const isDone = completedTasks.includes(task.id);
                return (
                  <div key={task.id} onClick={() => toggleTask(task.id)} className={`group cursor-pointer p-3 rounded border transition-all ${isDone ? 'bg-zinc-900/30 border-zinc-800 opacity-60' : 'bg-zinc-900 border-zinc-800 hover:border-zinc-600'}`}>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5">{isDone ? <CheckCircle2 size={18} className="text-cyan-500" /> : <Circle size={18} className="text-zinc-700 group-hover:text-zinc-500" />}</div>
                      <div className="flex-1">
                        <p className={`text-sm ${isDone ? 'text-zinc-500 line-through' : 'text-zinc-200'} font-sans`}>
                          {task.text}
                          {task.isCritical && <span className="ml-2 text-[9px] bg-red-950 text-red-500 px-1.5 py-0.5 rounded border border-red-900/50">REQUIRED</span>}
                        </p>
                        {task.tip && !isDone && (
                          <div className="mt-2 flex items-start gap-1.5 text-xs text-zinc-500 italic bg-black/40 p-2 rounded">
                            <Info size={12} className="mt-0.5 text-cyan-700 shrink-0" />
                            {task.tip}
                          </div>
                        )}
                        {task.isAction && !isDone && (
                          <div className="mt-2 flex items-center gap-1.5 text-[10px] text-yellow-500 font-bold uppercase tracking-tighter">
                            <Zap size={10} fill="currentColor" /> Combat/Action Mechanic Required
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-zinc-900/30 border-t border-zinc-800 text-[10px] text-zinc-600 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <AlertTriangle size={10} />
          <span>DATA SYNCED WITH LUNAR ARCHIVE</span>
        </div>
        <span>V.08-STABLE</span>
      </div>
    </div>
  );
};

export default InteractiveMissionLog;