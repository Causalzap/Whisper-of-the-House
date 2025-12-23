// components/HowToUse.tsx
import { Info, MousePointer2, LayoutDashboard } from 'lucide-react';

export default function SystemInstruction() {
  return (
    <div className="max-w-6xl mx-auto mb-10 p-4 bg-zinc-900/40 border border-zinc-800 rounded-lg animate-pulse-slow">
      <div className="flex items-center gap-2 text-cyan-500 mb-3 border-b border-zinc-800 pb-2">
        <Info size={16} />
        <span className="text-[10px] font-mono tracking-widest uppercase">System Operational Manual / FIELD PROTOCOL</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[11px] font-mono text-zinc-500">
        <div className="flex gap-3">
          <LayoutDashboard className="text-zinc-400 shrink-0" size={18} />
          <p><strong className="text-zinc-300 block mb-1 uppercase">Tactical Briefing</strong> Click on any chapter to expand the tactical overview and mission objectives.</p>
        </div>
        <div className="flex gap-3">
          <MousePointer2 className="text-zinc-400 shrink-0" size={18} />
          <p><strong className="text-zinc-300 block mb-1 uppercase">Interactive Tracking</strong> Use the checkboxes in mission logs to track your real-time stealth progress.</p>
        </div>
        <div className="flex gap-3">
          <div className="w-4 h-4 rounded-full border-2 border-red-500 shrink-0 animate-ping" />
          <p><strong className="text-zinc-300 block mb-1 uppercase">Critical Intel</strong> Look for the "REQ" tags to find items necessary for Security Level upgrades.</p>
        </div>
      </div>
    </div>
  );
}