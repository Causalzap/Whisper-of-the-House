'use client'; 

import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // 引入 Link 用于内部链接优化 SEO
import Layout from '../../components/Layout';


// Bro, 如果你的项目配置了 Next/Image，建议把下面的 <img> 换成 <Image /> 以获得更好的性能
// import Image from 'next/image';

export default function HowToHelpLuna() {
  // --- 交互式清单逻辑 (保持不变) ---
  const [checklist, setChecklist] = useState({
    accept: false,
    secretRoom: false,
    findTrap: false,
    placeTrap: false,
    cleanAnomalies: false,
    waitDay2: false,
    friendRoom: false
  });

  const [progress, setProgress] = useState(0);

  const toggleItem = (key: keyof typeof checklist) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    const total = Object.keys(checklist).length;
    const completed = Object.values(checklist).filter(Boolean).length;
    setProgress(Math.round((completed / total) * 100));
  }, [checklist]);
  // --- 逻辑结束 ---

  return (
    <Layout>
    <article className="max-w-4xl mx-auto px-4 py-8 text-gray-800 font-sans leading-relaxed">
      {/* --- SEO Header --- */}
      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-indigo-900 leading-tight">
          How to Help Luna in Whisper of the House: <br/>
          <span className="text-indigo-600 text-3xl md:text-4xl">Secret Room, Mouse Trap & All Endings</span>
        </h1>
        <p className="text-xl text-gray-600 border-l-4 border-indigo-500 pl-6 italic">
          "I cleaned everything but Luna is still scared?" — If this sounds like you, you likely missed the hidden Mouse Trap. Follow this ultimate guide to unlock the Secret Room, trigger the second commission, and see the true ending.
        </p>
      </header>

      {/* --- Interactive Mission Tracker (Tool Functionality) --- */}
      <div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-2xl p-6 mb-12 shadow-lg sticky top-4 z-10 backdrop-blur-md bg-opacity-95">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-indigo-900 flex items-center">
            <span className="mr-2">📋</span> Luna's Request Checklist
          </h3>
          <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold">{progress}% Ready</span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 mb-6 overflow-hidden">
          <div 
            className="bg-indigo-600 h-full rounded-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(79,70,229,0.5)]" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <ChecklistItem label="1. Accept Commission via Email" checked={checklist.accept} onClick={() => toggleItem('accept')} />
          <ChecklistItem label="2. Find Secret Room (Move Painting)" checked={checklist.secretRoom} onClick={() => toggleItem('secretRoom')} />
          <ChecklistItem label="3. Pick up Mouse Trap (Secret Room)" checked={checklist.findTrap} onClick={() => toggleItem('findTrap')} />
          <ChecklistItem label="4. ⚠️ Place Trap in Bathroom" checked={checklist.placeTrap} onClick={() => toggleItem('placeTrap')} isCritical />
          <ChecklistItem label="5. Clean Footprints/Anomalies" checked={checklist.cleanAnomalies} onClick={() => toggleItem('cleanAnomalies')} />
          <ChecklistItem label="6. Wait for Day 2 Email" checked={checklist.waitDay2} onClick={() => toggleItem('waitDay2')} />
          <ChecklistItem label="7. Help Friend (Bedframe/Duck)" checked={checklist.friendRoom} onClick={() => toggleItem('friendRoom')} />
        </div>
      </div>

      {/* --- Introduction Content --- */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Luna's Quest Matters</h2>
        <p className="mb-4 text-lg">
          Are you ready to help Luna with her unsettling move to Whisper Town? Among all the residents in <em>Whisper of the House</em>, Luna’s storyline is arguably one of the most intricate—and the easiest to fail. Her request seems simple on the surface: organize a messy room. But beneath the clutter lies a narrative filled with deep-rooted fears, hidden anomalies, and crucial choices that determine the outcome of her story.
        </p>
        <p className="text-lg">
          Many players find themselves stuck, wondering why they never received Luna's second email, or how to access the mysterious locked area in her home. The answer lies in a specific sequence of actions involving a <strong>Secret Room</strong> and a <strong>Mouse Trap</strong>.
        </p>
      </section>

      {/* --- Phase 1: The Beginning --- */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">Phase 1: The Beginning – Accepting Luna’s Request</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-bold text-indigo-900 mb-2">1. Prerequisite: Clean Your Own Home</h3>
          <p className="mb-4 text-lg">
            Before you can help others, you must help yourself. Ensure you have completed the initial tutorial phase by organizing your own base. Once the game registers your competency, the story trigger activates.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold text-indigo-900 mb-2">2. The Email Trigger</h3>
          <p className="mb-4 text-lg">
            Check your in-game computer. You should see a new email with the subject line regarding a "Request for Help." Luna mentions she has just moved to Whisper Town but is struggling to sleep due to "noises" and a feeling of being watched. This is your first clue that this isn't just a cleaning job—it's an investigation.
          </p>
        </div>

        {/* IMG 1: Email & Map */}
        <figure className="mb-8">
          <img 
            src="/images/guides/luna-email-request.jpg" 
            alt="Whisper of the house luna request email letter" 
            className="w-full rounded-xl shadow-md border border-gray-200 hover:shadow-xl transition-shadow"
          />
          <figcaption className="text-center text-gray-500 mt-2 text-sm">Accept Luna's request to unlock her location on the map.</figcaption>
        </figure>
      </section>

      {/* --- Phase 2: Organizing --- */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">Phase 2: The First Commission – Organizing the Apartment</h2>
        <p className="mb-4 text-lg">
          Upon entering Luna's home, you'll be greeted by a chaotic scene. Boxes are unpacked, items are scattered, and the vibe is undeniably tense.
        </p>
        
        <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
          <li><strong>Bathroom Items:</strong> Towels, toiletries, and cleaning supplies go here.</li>
          <li><strong>Living Room:</strong> Books, electronics, and general decor.</li>
          <li><strong>Basement/Hallway:</strong> Tools and heavy equipment.</li>
        </ul>

        <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-400">
          <p className="font-bold text-yellow-800 mb-1">💡 Pro Tip for Speedrunners:</p>
          <p className="text-yellow-800 text-base">
            Don't obsess over precise pixel-perfect placement. The game's logic relies on "Zones." As long as a toothbrush is <em>somewhere</em> in the bathroom zone, it counts. If the checklist doesn't tick off, try moving the item to the center of the room or spam-clicking it into a different corner until it registers.
          </p>
        </div>
      </section>

      {/* --- Phase 3: The Secret Room --- */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">Phase 3: The Turning Point – Finding the Secret Room</h2>
        <p className="mb-4 text-lg">
          <strong>This is the most critical part of the guide.</strong> If you finish organizing and leave now, you will fail Luna's storyline. You <em>must</em> find the source of her fear.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-indigo-900 mb-2">Step 1: The "Mona Lisa" Painting</h3>
            <p className="mb-4 text-lg">
              Head upstairs to Luna's <strong>Bedroom</strong>. On the wall, notice the painting that looks like the <em>Mona Lisa</em>. Click and <strong>drag the painting</strong> to the side. It will slide away, revealing a suspicious crack in the concrete wall.
            </p>
            <h3 className="text-xl font-bold text-indigo-900 mb-2">Step 2: The "Spam-Click" Method</h3>
            <p className="mb-4 text-lg">
              The crack won't open with a single click. You need to forcefully break it open. <strong>Click repeatedly and rapidly</strong> on the crack until the wall crumbles.
            </p>
          </div>
          
          {/* IMG 2: Painting Crack */}
          <div className="flex flex-col gap-4">
             <img 
              src="/images/guides/luna-painting-crack.jpg" 
              alt="Hidden crack behind painting in Luna's bedroom whisper of the house" 
              className="w-full rounded-xl shadow-md h-full object-cover"
            />
          </div>
        </div>

        {/* IMG 4: Secret Room Interior */}
        <figure className="mb-8">
          <img 
            src="/images/guides/luna-secret-room.jpg" 
            alt="Luna's secret room full of trash and anomalies" 
            className="w-full rounded-xl shadow-md"
          />
          <figcaption className="text-center text-gray-500 mt-2 text-sm">The "Dirty Hidden Room" filled with trash is the source of the Anomaly.</figcaption>
        </figure>
      </section>

      {/* --- Phase 4: Mouse Trap (CRITICAL) --- */}
      <section className="mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-red-100 rounded-full opacity-50 blur-2xl"></div>
        <h2 className="text-3xl font-bold mb-6 text-red-700 border-b border-red-200 pb-2">Phase 4: The Mouse Trap Incident (CRITICAL)</h2>
        
        <div className="bg-red-50 border-2 border-red-500 rounded-xl p-6 mb-8 flex items-start shadow-sm">
          <span className="text-5xl mr-5">⚠️</span>
          <div>
            <h4 className="font-bold text-red-800 text-xl mb-2">WARNING: Do Not Skip This!</h4>
            <p className="text-red-700 text-lg">
              If you leave Luna's house without placing the Mouse Trap, the game considers the "Help" incomplete. You will <strong>NOT</strong> receive the second email, and Luna's story ends prematurely.
            </p>
          </div>
        </div>

        <p className="mb-6 text-lg">
          Inside the Secret Room, amidst the garbage on the floor, lies a <strong>Mouse Trap</strong>. Luna is afraid of "something" moving around. By setting a trap, you are validating her fears and offering a solution.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
           <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-indigo-600 font-bold text-xl block mb-1">Action A:</span>
                <p><strong>Pick it Up:</strong> Click the Mouse Trap in the Secret Room to add it to your inventory.</p>
              </div>
              <img 
                  src="/images/guides/find-mouse-trap.jpg" 
                  alt="Location of mouse trap inside the secret room" 
                  className="w-full rounded-lg shadow-md border-2 border-indigo-50"
              />
           </div>

           <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-green-600 font-bold text-xl block mb-1">Action B:</span>
                <p><strong>Place in Bathroom:</strong> Carry it downstairs. Place it on the bathroom floor near the food scraps or muddy footprints.</p>
              </div>
              <img 
                  src="/images/guides/place-mouse-trap.jpg" 
                  alt="Placing mouse trap in bathroom to help luna" 
                  className="w-full rounded-lg shadow-md border-2 border-green-50"
              />
           </div>
        </div>
      </section>

      {/* --- Phase 5: Anomalies --- */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">Phase 5: Collecting Anomalies – Bathroom Clues</h2>
        <p className="mb-4 text-lg">
          While you are in the bathroom placing the trap, look at the floor. You will notice muddy <strong>Footprints</strong> and strange <strong>Stains</strong>.
        </p>
        <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
            <li><strong>Interact with them:</strong> Click on the footprints and stains to clean/investigate them.</li>
            <li><strong>Museum Collection:</strong> Successfully identifying these anomalies adds them to your Museum Collection.</li>
            <li><strong>Narrative Clue:</strong> These footprints imply that the "noises" Luna heard weren't in her head. Someone—or something—has been walking through her bathroom.</li>
        </ul>
        
        {/* IMG 7: Footprints */}
        <figure className="mb-6 w-full md:w-3/4 mx-auto">
          <img 
            src="/images/guides/luna-bathroom-footprints.jpg" 
            alt="Footprints and stains anomaly in luna's bathroom" 
            className="w-full rounded-xl shadow-md"
          />
        </figure>
      </section>

      {/* --- Phase 6 & 7: The Second Commission --- */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">Phase 6 & 7: The Second Task – Helping Luna’s Friend</h2>
        <div className="mb-6">
            <h3 className="text-xl font-bold text-indigo-900 mb-2">The Waiting Game</h3>
            <p className="text-lg">
              Return to your home and <strong>Go to Sleep</strong> to advance the game clock. The next morning, check your email. If you did everything right, you will see a "Thank You" email from Luna. She will mention that the trap caught something and that she now has a friend moving in.
            </p>
        </div>

        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
          <h3 className="font-bold text-indigo-900 text-xl mb-4">Day 2 Hidden Anomalies (Don't Miss These!)</h3>
          <p className="mb-4">While furnishing the guest room, keep an eye out for two specific anomalies exclusive to this mission:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div>
                <strong className="text-indigo-700 block mb-1">1. The Glowing Bedframe</strong>
                <p className="text-sm text-gray-700 mb-2">In the friend's bedroom, the bedframe will occasionally glow with a faint purple light. Click it to collect the Anomaly.</p>
                <img 
                    src="/images/guides/luna-bedframe-anomaly.jpg" 
                    alt="Anomaly bedframe in Luna's friend's room" 
                    className="w-full rounded-lg shadow-sm"
                />
             </div>
             <div>
                <strong className="text-indigo-700 block mb-1">2. The Rubber Duck</strong>
                <p className="text-sm text-gray-700 mb-2">In the bathroom, find the rubber duck. Give it a squeeze (click it). It’s a fun, hidden interaction.</p>
                <img 
                    src="/images/guides/luna-rubber-duck.jpg" 
                    alt="Rubber duck anomaly location whisper of the house" 
                    className="w-full rounded-lg shadow-sm"
                />
             </div>
          </div>
        </div>
      </section>

      {/* --- Troubleshooting --- */}
      <section className="mt-16 bg-gray-50 rounded-2xl p-8 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Troubleshooting & Multiple Endings</h2>
        
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-red-400">
            <h4 className="font-bold text-lg text-gray-900 mb-2">Problem: "I didn't get the second email!"</h4>
            <p className="text-gray-700">
              <strong>Cause:</strong> You missed the Mouse Trap step. <br/>
              <strong>The Fix:</strong> You cannot simply go back. You must use the <strong>Time Machine</strong> feature in your base. Select the date of the first Luna commission and "Replay" the day. This time, ensure you grab the trap from the Secret Room.
            </p>
          </div>

           <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-indigo-400">
            <h4 className="font-bold text-lg text-gray-900 mb-2">Problem: "I can't find the Secret Room crack?"</h4>
            <p className="text-gray-700">
               Make sure you have dragged the painting far enough. Sometimes the hitbox requires the painting to be completely clear of the wall section before the crack becomes interactable.
            </p>
          </div>
        </div>
      </section>

      {/* --- Conclusion & Internal Links --- */}
      <footer className="mt-12 text-center">
         <h3 className="text-2xl font-bold mb-4">Ready for more secrets?</h3>
         <p className="mb-6 text-gray-600 max-w-2xl mx-auto">
            Helping Luna is just the beginning. Check out our other technical guides to uncover every corner of Whisper Town.
         </p>
         <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="/guides/hidden-secrets" className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors">
                View All Hidden Secrets
            </Link>
            <Link href="/guides/audio-automation-workflow" className="px-6 py-3 bg-white text-indigo-600 border border-indigo-200 font-bold rounded-lg hover:bg-indigo-50 transition-colors">
                Read Audio Tech Guide
            </Link>
         </div>
      </footer>
    </article>
  </Layout>
    
  );
  
}

// --- Helper Component for Checklist Items (Visual Improvements) ---
function ChecklistItem({ label, checked, onClick, isCritical = false }: { label: string, checked: boolean, onClick: () => void, isCritical?: boolean }) {
  return (
    <div 
      onClick={onClick}
      className={`
        flex items-center p-4 rounded-xl cursor-pointer border-2 transition-all select-none group
        ${checked 
          ? 'bg-green-50 border-green-200 shadow-none' 
          : isCritical 
            ? 'bg-white border-red-100 hover:border-red-300 shadow-sm hover:shadow-md' 
            : 'bg-white border-gray-100 hover:border-indigo-200 shadow-sm hover:shadow-md'
        }
      `}
    >
      {/* Checkbox Circle */}
      <div className={`
        w-6 h-6 rounded-md border-2 flex items-center justify-center mr-3 transition-colors flex-shrink-0
        ${checked 
          ? 'bg-green-500 border-green-500' 
          : isCritical
            ? 'border-red-300 group-hover:border-red-400'
            : 'border-gray-300 group-hover:border-indigo-400'
        }
      `}>
        {checked && (
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
        )}
      </div>
      
      {/* Label Text */}
      <span className={`
        font-medium text-sm md:text-base
        ${checked ? 'line-through text-gray-400' : 'text-gray-700'} 
        ${isCritical && !checked ? 'text-red-600 font-bold' : ''}
      `}>
        {label}
      </span>
    </div>
  );
}