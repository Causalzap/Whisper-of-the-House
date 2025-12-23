// components/MissionSidebar.tsx
import { Eye, ChevronRight } from 'lucide-react';
import { VisualIntel } from '@/app/routine-guide/Content';

export const MissionVisualCard = ({ intel }: { intel: VisualIntel }) => (
  <div className="group bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
    <div className="aspect-video bg-zinc-800 relative">
      <img src={intel.image} alt={intel.title} className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <span className="absolute bottom-3 left-3 text-[10px] font-mono bg-cyan-950 text-cyan-400 px-2 py-1 rounded">{intel.tag}</span>
    </div>
    <div className="p-4">
      <h4 className="text-white text-sm font-bold mb-1">{intel.title}</h4>
      <p className="text-xs text-zinc-500 leading-relaxed">{intel.description}</p>
    </div>
  </div>
);

export const MissionFAQ = ({ faq }: { faq: { q: string, a: string }[] }) => (
  <div className="p-6 border border-dashed border-zinc-800 rounded-lg">
    <h4 className="text-zinc-400 text-xs font-bold uppercase mb-4 tracking-widest">Field Troubleshooting</h4>
    {faq.map((item, i) => (
      <details key={i} className="group cursor-pointer mb-3">
        <summary className="text-sm text-zinc-300 hover:text-cyan-400 transition-colors list-none flex justify-between items-center">
          Q: {item.q}
          <ChevronRight size={14} className="group-open:rotate-90 transition-transform" />
        </summary>
        <p className="text-xs text-zinc-500 mt-2 pl-2 border-l border-zinc-700">{item.a}</p>
      </details>
    ))}
  </div>
);