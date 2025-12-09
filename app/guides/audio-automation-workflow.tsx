// app/guides/audio-automation-workflow.tsx
'use client';
import Layout from '../../components/Layout';
import '../../styles/globals.css';
import React from 'react';

const AudioAutomationWorkflow = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-50 via-white to-indigo-50 py-12 md:py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            {/* 面包屑导航 */}
            <nav className="breadcrumb mb-6">
              <ol className="flex items-center text-sm md:text-base text-gray-600">
                <li className="flex items-center">
                  <a href="/" className="hover:text-purple-600 transition-colors">Home</a>
                  <span className="mx-2">/</span>
                </li>
                <li className="flex items-center">
                  <a href="/guides" className="hover:text-purple-600 transition-colors">Guides</a>
                  <span className="mx-2">/</span>
                </li>
                <li className="text-gray-900 font-medium">Audio Automation Workflow</li>
              </ol>
            </nav>

            {/* 标题区域 */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                From Design to Automation: Building a Zero-Tech-Dependency Audio Integration Workflow for <em>Whisper of the House</em>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                A pillar-style, fact-faithful, E-E-A-T-driven analysis of how the audio team delivered thousands of sounds with no dedicated programmers
              </p>
              
              {/* 元信息 */}
              <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-gray-500">
                <span className="bg-gray-100 px-3 py-1 rounded-full">Technical Analysis</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full">Audio Engineering</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full">Workflow Automation</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full">E-E-A-T Focus</span>
              </div>
            </div>

            {/* 概览卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-purple-600 mb-2">2,000+</div>
                <div className="text-gray-700">Sound Effects</div>
                <div className="text-sm text-gray-500 mt-1">Delivered under pressure</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-indigo-600 mb-2">~50 min</div>
                <div className="text-gray-700">of Music</div>
                <div className="text-sm text-gray-500 mt-1">Originally estimated at ~40 min</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-teal-600 mb-2">4 months</div>
                <div className="text-gray-700">Production Window</div>
                <div className="text-sm text-gray-500 mt-1">For all audio delivery</div>
              </div>
            </div>
          </div>
        </section>

        {/* 主要内容 */}
        <div className="container mx-auto max-w-4xl px-4 py-8">
          {/* Preface: Why Audio Automation Became Non-Negotiable */}
          <section className="mb-12">
            <div className="flex items-start mb-8">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Preface: Why Audio Automation Became Non-Negotiable</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4">
                    In many indie game pipelines, audio is the last system to enter production and often receives the tightest budget and time allotment. <em>Whisper of the House</em> followed that familiar pattern. The audio team officially joined the project in mid-October 2024, at a stage when most core gameplay modules were already stable and the broader production had shifted into high-volume content filling.
                  </p>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                    <p className="text-blue-800 font-medium mb-2">At onboarding, the team estimated final audio scope to include:</p>
                    <ul className="list-disc pl-5 text-blue-800 space-y-1">
                      <li><strong>~40 minutes of music</strong>, later expanding to <strong>~50 minutes</strong></li>
                      <li><strong>1,000+ sound effects</strong>, later expanding to <strong>2,000+ sound effects</strong></li>
                    </ul>
                  </div>
                  
                  <p className="text-gray-700 mb-4">
                    The release plan at that time targeted <strong>February 2025</strong>, leaving roughly <strong>four months</strong> for audio delivery once holidays and QA windows were subtracted. That four-month window had to cover not only asset creation, but also <strong>engine integration and complex audio feature development from scratch</strong>—without audio programmers or dedicated technical staff.
                  </p>
                  
                  <p className="text-gray-700">
                    Although the game ultimately slipped to an August 2025 launch, this extension was unknown during early production. So the audio team had to operate under the original constraints. In that reality, a highly efficient, automation-first workflow wasn't optional—it was the only path to shipping.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* The Core Problem: Massive Audio Needs, Minimal Tech Bandwidth */}
          <section className="mb-12">
            <div className="flex items-start mb-8">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The Core Problem: Massive Audio Needs, Minimal Tech Bandwidth</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4">
                    Audio integration is usually bottlenecked by either programming effort or middleware authoring overhead. <em>Whisper of the House</em> had both risks:
                  </p>
                  
                  <div className="bg-gray-50 rounded-xl p-6 my-6 border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Constraints:</h3>
                    <ol className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3">
                          <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          </div>
                        </div>
                        <span className="text-gray-700"><strong>Thousands of interactable furniture objects</strong> required SFX coverage.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3">
                          <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-700">The project did <strong>not</strong> use traditional spreadsheet-based item management.</span>
                          <p className="text-gray-600 text-sm mt-1">Instead, a <strong>custom in-engine item manager</strong> handled objects—making spreadsheet-centric audio mapping inefficient.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3">
                          <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          </div>
                        </div>
                        <span className="text-gray-700">The audio team needed a system that minimized demands on core programmers, ran independently from the rest of production, and reduced internal audio operations to near-one-click integration.</span>
                      </li>
                    </ol>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Workflow Goals</h3>
                  <div className="bg-purple-50 rounded-xl p-6 my-6 border border-purple-200">
                    <ol className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                          <span className="text-purple-600 font-bold">1</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-800">Minimize programmer workload</span>
                          <p className="text-gray-600 text-sm mt-1">Any single programming request from audio had to be achievable in <strong>under 30 minutes</strong>.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                          <span className="text-purple-600 font-bold">2</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-800">Full decoupling from the main project workflow</span>
                          <p className="text-gray-600 text-sm mt-1">Audio integration should not require touching engine files or disrupting other departments.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                          <span className="text-purple-600 font-bold">3</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-800">Extreme simplification of audio-side operations</span>
                          <p className="text-gray-600 text-sm mt-1">The ideal outcome: <em>click "Render" in Reaper → audio appears in game automatically</em>.</p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Key Insight: Use Existing Object Tags as the Automation Backbone */}
          <section className="mb-12">
            <div className="flex items-start mb-8">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The Key Insight: Use Existing Object Tags as the Automation Backbone</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4">
                    Even though audio came in late, the project already contained something valuable:
                    <strong> every object had carefully planned, pre-existing classification tags</strong>, created by design long before audio involvement.
                  </p>
                  
                  <p className="text-gray-700 mb-4">
                    These tags were originally unrelated to sound. But they provided a reliable and scalable way to identify interactable objects during gameplay. That led to the foundational strategy:
                  </p>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 my-6">
                    <blockquote className="text-xl font-medium text-gray-800 italic border-l-4 border-green-500 pl-4 my-4">
                      "Instead of building a new tracking system, audio would 'ride on' the tagging system already in place."
                    </blockquote>
                    <p className="text-green-800 mt-4">
                      This turned an otherwise expensive integration layer into a near-free dependency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Tag-Driven Switch Automation System (Wwise + Engine) */}
          <section className="mb-12">
            <div className="flex items-start mb-8">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The Tag-Driven Switch Automation System (Wwise + Engine)</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    The team proposed a <strong>Switch-based automation scheme driven by in-engine tags</strong>, using Wwise to carry most of the authoring burden.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">System Design Overview</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
                      <h4 className="text-lg font-semibold text-blue-800 mb-2">1. Universal Events for Shared Behaviors</h4>
                      <ul className="list-disc pl-5 text-blue-800">
                        <li>Interactions like <strong>"pick up"</strong> and <strong>"put down"</strong> were unified into generic Wwise Events.</li>
                        <li>Result: <strong>thousands of object-specific Events were compressed into only two</strong>.</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
                      <h4 className="text-lg font-semibold text-blue-800 mb-2">2. SwitchGroups for Hierarchical Classification</h4>
                      <ul className="list-disc pl-5 text-blue-800">
                        <li>SFX were layered using <strong>SwitchGroups</strong> and selected using <strong>SwitchValues</strong>.</li>
                        <li>Conceptually similar to footstep systems that switch based on surface type.</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
                      <h4 className="text-lg font-semibold text-blue-800 mb-2">3. Two-Level Switch Structure</h4>
                      <ul className="list-disc pl-5 text-blue-800">
                        <li><strong>Level type (room/world)</strong> → <strong>specific object name</strong></li>
                        <li>Prevented any single SwitchGroup from becoming unmanageably large.</li>
                      </ul>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Why This Worked So Well</h3>
                  <div className="bg-gray-50 rounded-xl p-6 my-6">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>The <em>hardest work</em>—tagging every object—was already complete.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>The engine needed only a tiny one-time adjustment.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Wwise became the independent integration hub.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Updating audio required <strong>only SoundBank refreshes</strong>, not engine edits.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-6">
                    <p className="text-green-800 font-semibold">
                      With this structure, two events controlled about <strong>90% of the game's sound playback</strong>, while keeping audio fully decoupled from production files and schedules elsewhere in the studio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Next Bottleneck: Too Much Manual Authoring Inside Wwise */}
          <section className="mb-12">
            <div className="flex items-start mb-8">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The Next Bottleneck: Too Much Manual Authoring Inside Wwise</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4">
                    The tagging strategy removed engine overhead, but introduced a new problem:
                  </p>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-6">
                    <p className="text-amber-800 mb-3">To integrate a single sound, the audio team still had to manually:</p>
                    <ul className="list-disc pl-5 text-amber-800 space-y-2">
                      <li>create multiple SwitchGroups and Values,</li>
                      <li>manage layered hierarchies,</li>
                      <li>assign every audio file to the correct SwitchValue.</li>
                    </ul>
                    <p className="text-amber-800 mt-3">At scale, that was still costly.</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6 my-6">
                    <h3 className="text-xl font-semibold text-orange-800 mb-2">The Solution Needed</h3>
                    <p className="text-orange-800 text-lg font-medium">
                      The workflow needed one more leap: <strong>fully automated Wwise authoring.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Semantic Naming System: Encode Integration Rules Into File Names */}
          <section className="mb-12">
            <div className="flex items-start mb-8">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">5</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The Semantic Naming System: Encode Integration Rules Into File Names</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    Instead of writing code first, the team designed a naming convention that <strong>contained all integration metadata</strong> required by automation.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Example File Name</h3>
                  <div className="bg-gray-900 rounded-xl p-6 my-6">
                    <div className="font-mono text-base md:text-lg text-green-300 bg-black/30 p-4 rounded-lg overflow-x-auto">
                      Main_Item(5)_Down(5)(Room)_Luna(5)(Luna)_Bed(2)_02
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Naming Rules (Fully Specified)</h3>
                  <div className="bg-gray-50 rounded-xl p-6 my-6">
                    <ol className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                          <span className="text-purple-600 font-bold">1</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-800">"<code>_</code>" separates hierarchy levels.</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                          <span className="text-purple-600 font-bold">2</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-800">Text outside parentheses is the level name</span>
                          <p className="text-gray-600 text-sm mt-1">e.g., "Item."</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                          <span className="text-purple-600 font-bold">3</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-800">First parentheses = container type ID</span>
                          <div className="text-gray-600 text-sm mt-1 ml-6">
                            <p>• <code>5</code> = SwitchContainer</p>
                            <p>• <code>2</code> = RandomContainer</p>
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                          <span className="text-purple-600 font-bold">4</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-800">Second parentheses (if present) = SwitchGroup name</span>
                          <p className="text-gray-600 text-sm mt-1">If the group doesn't exist, <strong>automation creates it</strong>.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                          <span className="text-purple-600 font-bold">5</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-800">Any level bound to a SwitchGroup auto-creates a Value</span>
                          <p className="text-gray-600 text-sm mt-1">The Value has the same name as the <em>next</em> hierarchy level. The next level is auto-assigned to that Value.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                          <span className="text-purple-600 font-bold">6</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-800">First level defaults to WorkUnit.</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                          <span className="text-purple-600 font-bold">7</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-800">Last level defaults to SFX.</span>
                        </div>
                      </li>
                    </ol>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">What This Achieves</h3>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-6">
                    <p className="text-gray-700 mb-3">Once the naming rules are applied, importing that file should automatically generate:</p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>the entire hierarchy,</li>
                      <li>correct container types,</li>
                      <li>missing SwitchGroups and Values,</li>
                      <li>and correct assignments.</li>
                    </ul>
                    <div className="mt-4 p-4 bg-green-100 rounded-lg border border-green-300">
                      <p className="text-green-800 font-semibold text-center">
                        In other words, <strong>the file name becomes the blueprint.</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Using AI to Build the Wwise Import Script (No Technical Staff Needed) */}
          <section className="mb-12">
            <div className="flex items-start mb-8">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">6</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Using AI to Build the Wwise Import Script (No Technical Staff Needed)</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    Because all logic was already embedded in naming rules, the scripting task became a translation problem:
                    convert deterministic steps into pseudocode, then hand those to an AI tool iteratively.
                  </p>
                  
                  <div className="bg-blue-50 rounded-xl p-6 my-6 border border-blue-200">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">Key Implementation Facts</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>The script was produced with <strong>no audio programmers</strong> and <strong>no tech support</strong>.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Communication with AI reportedly took about <strong>half a person-day</strong>.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>The resulting script successfully created correct hierarchy types, created missing SwitchGroups/Values, and executed correct assignments automatically.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    The team validated the result by importing assets and confirming correct Wwise structures with no manual intervention.
                  </p>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 my-6">
                    <h3 className="text-xl font-semibold text-purple-800 mb-3">The E-E-A-T Moment</h3>
                    <blockquote className="text-purple-800 text-lg italic border-l-4 border-purple-500 pl-4 my-4">
                      "The automation succeeded not because of speculative tech, but because the design logic was fully defined first."
                    </blockquote>
                    <p className="text-purple-700">
                      AI simply executed a complete, rule-based system that was designed by humans.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How the Pipeline Runs in Practice (Engine ↔ Wwise) */}
          <section className="mb-12">
            <div className="flex items-start mb-8">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">7</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How the Pipeline Runs in Practice (Engine ↔ Wwise)</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">Let's walk through the real runtime chain as described:</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                      <h3 className="text-lg font-semibold text-blue-800 mb-3">In the Engine</h3>
                      <p className="text-gray-700 mb-3">Example scenario:</p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                        <li>In the <strong>Luna</strong> level, the player places a <strong>Bed</strong> object.</li>
                        <li>The engine triggers the <strong>"put down"</strong> universal event.</li>
                        <li>The engine reads tags:</li>
                        <ul className="list-disc pl-5 mt-1">
                          <li>room tag → <code>"Luna"</code></li>
                          <li>object tag → <code>"Bed"</code></li>
                        </ul>
                        <li>It performs <strong>SetSwitchValue</strong> as:</li>
                        <ul className="list-disc pl-5 mt-1">
                          <li>Set <code>"Room"</code> group to <code>"Luna"</code></li>
                          <li>Set <code>"Luna"</code> group to <code>"Bed"</code></li>
                        </ul>
                        <li>It then fires <code>play_putdown</code>, which corresponds to the "Down" hierarchy.</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                      <h3 className="text-lg font-semibold text-green-800 mb-3">In Wwise</h3>
                      <p className="text-gray-700 mb-3">If a file exists named:</p>
                      <div className="bg-gray-900 rounded-lg p-3 mb-3">
                        <code className="text-green-300 text-sm font-mono">Main_Item(5)_Down(5)(Room)_Luna(5)(Luna)_Bed(2)_02</code>
                      </div>
                      <p className="text-gray-700 text-sm">Then after the two SwitchValue operations, Wwise resolves to that exact node and plays it.</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 my-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">The Outcome</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <span>Engine setup happens <strong>once</strong>, early.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <span>Wwise population happens <strong>automatically</strong> through import.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <span>After that, <strong>any correctly named sound "grows into the engine" by itself</strong>.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Minimal Programming Request (Producer-Friendly Integration) */}
          <section className="mb-12">
            <div className="flex items-start mb-8">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">8</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The Minimal Programming Request (Producer-Friendly Integration)</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">The only engine-side work needed:</p>
                  
                  <div className="bg-gray-300 text-white rounded-xl p-6 my-6">
                    <blockquote className="text-lg font-medium border-l-4 border-green-400 pl-4 my-2">
                      "Standardize all object interactions into three universal interfaces: 'pick up,' 'put down,' 'use.' When triggered, read object tags → set Room group and Object group → SetSwitchValue."
                    </blockquote>
                    <p className="text-gray-300 mt-4 text-center font-semibold">That's it.</p>
                  </div>
                  
                  <div className="bg-indigo-50 rounded-xl p-6 my-6 border border-indigo-200">
                    <h3 className="text-lg font-semibold text-indigo-800 mb-3">From a production perspective:</h3>
                    <ul className="list-disc pl-5 text-indigo-800 space-y-2">
                      <li>one tiny task for programmers,</li>
                      <li>no recurring dependency,</li>
                      <li>no shared files to manage,</li>
                      <li>QA can validate audio in-game without extra tooling.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* One-Click Delivery: Reaper → Script → Game */}
          <section className="mb-12">
            <div className="flex items-start mb-8">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">9</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">One-Click Delivery: Reaper → Script → Game</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    Even with Wwise import automated, the sound designer still needed to:
                  </p>
                  
                  <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 my-6">
                    <ol className="list-decimal pl-5 space-y-3 text-rose-800">
                      <li>click Render in Reaper,</li>
                      <li>select export folder in the script,</li>
                      <li>click Import.</li>
                    </ol>
                    <p className="text-rose-800 mt-4">The target workflow demanded true one-click integration.</p>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Final Optimization Plan</h3>
                  <div className="bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-xl p-6 my-6">
                    <ol className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-4 mt-1">
                          <span className="font-bold text-pink-600">1</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Clicking <strong>Render</strong> auto-launches the import script.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-4 mt-1">
                          <span className="font-bold text-pink-600">2</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Render path is passed into the script.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-4 mt-1">
                          <span className="font-bold text-pink-600">3</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Import executes automatically.</p>
                        </div>
                      </li>
                    </ol>
                    <div className="mt-4 p-4 bg-pink-100 rounded-lg border border-pink-300">
                      <p className="text-pink-800 font-semibold text-center">
                        They used: <strong>AI to write a Lua script for Reaper</strong> and <strong>Reaper Custom Actions</strong> to bind Render and Lua into a single operation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 my-6 text-center">
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Result</h3>
                    <blockquote className="text-green-900 text-xl italic">
                      "Render once, and the sound appears in game automatically."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* "Straight-Line" Feature Design Under Deadline */}
          <section className="mb-12">
            <div className="flex items-start mb-8">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">10</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">"Straight-Line" Feature Design Under Deadline</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    Besides automation, the team also delivered practical audio features using minimal-tech solutions.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                      <h3 className="text-xl font-semibold text-amber-800 mb-4">1) Real-time Stereo Positioning in a 2D Game</h3>
                      <p className="text-gray-700 mb-4">
                        Wwise 3D spatialization couldn't work directly because:
                      </p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
                        <li>objects and camera were not on the same plane,</li>
                        <li>camera position in editor was far from the gameplay plane,</li>
                        <li>zooming would break any static listener workaround.</li>
                      </ul>
                      <p className="text-gray-700 mb-4">
                        Instead, the team chose a simple, robust RTPC method:
                      </p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
                        <li>draw a vertical centerline on screen,</li>
                        <li>compute object distance from that centerline (left negative, right positive),</li>
                        <li>map the value to a <strong>GameParameter</strong>,</li>
                        <li>drive stereo panning via <strong>RTPC</strong>.</li>
                      </ul>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                        <p className="text-amber-800 font-medium">This approach:</p>
                        <ul className="list-disc pl-5 text-amber-800 mt-2">
                          <li>stays correct at any zoom,</li>
                          <li>requires no complex listener system,</li>
                          <li>matches the game's needs without over-engineering.</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                      <h3 className="text-xl font-semibold text-purple-800 mb-4">2) The Record Player "Speaker Effect"</h3>
                      <p className="text-gray-700 mb-4">
                        The game includes a record player furniture item:
                      </p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
                        <li>When stationary, it plays normal BGM.</li>
                        <li>When picked up, audio should sound like it's coming from a speaker.</li>
                      </ul>
                      <p className="text-gray-700 mb-4">
                        Instead of real-time DSP:
                      </p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
                        <li>they pre-rendered a "speaker-processed" version of the music,</li>
                        <li>switched between normal and processed tracks using a <strong>Switch track</strong>,</li>
                        <li>and applied the same stereo RTPC positioning.</li>
                      </ul>
                      <div className="bg-purple-100 border border-purple-300 rounded-lg p-4 mt-4">
                        <p className="text-purple-800 font-semibold text-center">
                          Again: <em>deadline-smart, tech-light, and deterministic</em>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Lessons That Generalize Beyond Whisper of the House */}
          <section className="mb-12">
            <div className="flex items-start mb-8">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">11</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Lessons That Generalize Beyond <em>Whisper of the House</em></h2>
                <div className="prose prose-lg max-w-none">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                      <h3 className="text-xl font-semibold text-blue-800 mb-4">For Small Indie Teams</h3>
                      <p className="text-gray-700 mb-4">This workflow shows how to:</p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>minimize headcount,</li>
                        <li>decouple audio from engineering schedules,</li>
                        <li>and scale content production under tight deadlines.</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                      <h3 className="text-xl font-semibold text-green-800 mb-4">For Larger Studios</h3>
                      <p className="text-gray-700 mb-4">Even if full adoption isn't needed:</p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>any highly repetitive audio module can use this pattern,</li>
                        <li>enabling sound designers to integrate assets <strong>without deep middleware knowledge</strong>,</li>
                        <li>reducing training costs,</li>
                        <li>and refocusing talent on asset quality rather than authoring overhead.</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-xl p-8 my-6">
                    <h3 className="text-xl font-semibold text-white mb-4">The Real Engine of Automation Was Design</h3>
                    <p className="text-gray-100 mb-4">
                      The AI tools mattered, but the decisive factor was not "AI magic."
                      It was <strong>designing a complete, rule-based system first</strong>, then letting AI transcribe those rules into working scripts.
                    </p>
                    <blockquote className="text-gray-300 text-lg italic border-l-4 border-amber-500 pl-4 my-4">
                      "Designers can use system design to bypass technical bottlenecks. AI then executes the plan, not invents it."
                    </blockquote>
                    <p className="text-gray-300">
                      That aligns with one of Wwise's key advantages for indie production.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Closing */}
          <section className="mb-12">
            <div className="flex items-start mb-8">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Closing</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    The audio pipeline for <em>Whisper of the House</em> proves that automation is not a privilege reserved for large teams with specialized staff. Under extreme schedule pressure, the team delivered:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <div className="text-4xl mb-4">🎵</div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">thousands of sounds,</h4>
                      <p className="text-gray-600 text-sm">tens of minutes of music</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <div className="text-4xl mb-4">🏷️</div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">a tag-driven universal event system,</h4>
                      <p className="text-gray-600 text-sm">fully automated Wwise authoring via semantic file naming</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <div className="text-4xl mb-4">⚡</div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">one-click Reaper-to-engine integration</h4>
                      <p className="text-gray-600 text-sm">all without adding any audio programmers</p>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-6">
                    <p className="text-indigo-800">
                      The unexpected bonus: because the logic is generic and tag-based, the system is reusable across future indie projects, sometimes even more naturally than it fit <em>Whisper of the House</em> itself.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-8 my-6 text-center">
                    <h3 className="text-2xl font-bold text-amber-800 mb-4">Pillar Takeaway</h3>
                    <blockquote className="text-amber-900 text-xl italic">
                      "Automation at scale starts with deterministic design, not with code. Once the rules are complete, tools—AI included—can make them real."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default AudioAutomationWorkflow;