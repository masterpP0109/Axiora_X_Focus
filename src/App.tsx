/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, ArrowRight, ShieldCheck, CheckCircle, Flame, Target, 
  Layers, Users, BookOpen, GraduationCap, Briefcase, 
  BarChart3, RefreshCw, Terminal, Clock, Bookmark, Network,
  Zap, ChevronRight, Sparkles, MessageCircle, Info 
} from 'lucide-react';
import SectionHeader from './components/SectionHeader';
import InteractiveBuilders from './components/InteractiveBuilders';
import LeadCapture from './components/LeadCapture';

export default function App() {
  // Shared state: when user fills the wizard, we pass details to autofill contact form
  const [sessionBlueprintData, setSessionBlueprintData] = useState<any>(null);
  const [activePipelineSignal, setActivePipelineSignal] = useState<string>('idle');
  const [currentTime, setCurrentTime] = useState<string>('');

  // Live real-time clock showing accurate coordination
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'UTC'
      };
      setCurrentTime(now.toLocaleTimeString('en-US', options) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleBlueprintGenerated = (data: any) => {
    setSessionBlueprintData(data);
    // Smooth scroll to contact intake
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Trigger a packet event on the interactive SVG node map
  const triggerPipelineCycle = (node: string) => {
    setActivePipelineSignal(node);
    setTimeout(() => {
      setActivePipelineSignal('idle');
    }, 2800);
  };

  return (
    <div className="min-h-screen bg-[#07080B] text-zinc-100 font-sans tracking-tight antialiased select-none selection:bg-teal-500/20 selection:text-teal-400">
      
      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#07080B]/85 backdrop-blur-md border-b border-zinc-900/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3.5 group">
            {/* High-fidelity Vector representation of the official interlaced loop 'X' logo brandmark */}
            <div className="w-9 h-9 flex items-center justify-center relative">
              <svg 
                className="w-full h-full text-white transition-all duration-500 group-hover:scale-105 group-hover:text-teal-400" 
                viewBox="0 0 100 100" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="6.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Left continuous loop ribbon */}
                <path d="M28,26 C33,14 47,14 50,30 C53,46 67,86 72,74 C77,62 63,62 50,50 C37,38 23,38 28,26 Z" />
                {/* Right continuous loop ribbon (perfect mirror balance creating the double loops) */}
                <path d="M72,26 C67,14 53,14 50,30 C47,46 33,86 28,74 C23,62 37,62 50,50 C63,38 77,38 72,26 Z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-medium tracking-[0.25em] text-white text-sm flex items-center gap-0.5">
                AXIORA<span className="text-[9px] font-sans text-zinc-500 font-normal align-super -mt-1.5 opacity-80">®</span>
              </span>
              <span className="text-[7.5px] font-mono tracking-[0.35em] text-teal-400/80 uppercase">Digital Systems</span>
            </div>
          </a>

          {/* Nav core */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono text-zinc-400">
            <a href="#whoweare" className="hover:text-teal-400 transition-colors uppercase tracking-wider">[1.0 Position]</a>
            <a href="#problems" className="hover:text-teal-400 transition-colors uppercase tracking-wider">[2.0 Solved Work]</a>
            <a href="#systems" className="hover:text-teal-400 transition-colors uppercase tracking-wider">[3.0 Catalog]</a>
            <a href="#systems-engine" className="hover:text-teal-400 transition-colors uppercase tracking-wider">[4.0 Workspace]</a>
            <a href="#methodology" className="hover:text-teal-400 transition-colors uppercase tracking-wider">[5.0 Process]</a>
          </nav>

          {/* Right Indicators */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-950 border border-zinc-900 text-[10px] font-mono text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-teal-400 animate-spin-slow" />
              <span>{currentTime || 'SYSTEM_SYNC_AWAIT'}</span>
            </div>
            
            <a 
              href="#contact" 
              className="px-4 py-2 border border-teal-500/30 rounded text-xs font-mono text-teal-400 hover:bg-teal-500/10 hover:border-teal-500 transition-all duration-300 uppercase tracking-widest"
            >
              Consult Space_
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="relative pt-32 pb-24 overflow-hidden border-b border-zinc-900/65">
        {/* Visual mesh light */}
        <div className="absolute top-20 right-1/4 w-[600px] h-[600px] glow-mesh pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] glow-mesh-indigo pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Core copy block */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900/80 border border-zinc-800 text-[10px] font-mono text-teal-400 tracking-wider uppercase">
                <Network className="w-3.5 h-3.5" />
                SYSTEM DESIGN ARCHITECTURE FIRM
              </div>

              <h1 className="text-4xl sm:text-6xl font-display font-medium leading-[1.1] tracking-tight text-white">
                We Engineer <span className="text-zinc-500 font-light italic">Digital Systems</span>.<br className="hidden sm:inline" /> Not Basic Websites.
              </h1>

              <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl font-sans">
                AXIORA X helps businesses, schools, and institutions solve real operational and growth problems. Unlike ordinary agencies focused only on raw visuals, we build outcome-driven platforms. Every project is shaped by one question: <span className="text-white font-medium italic">What measurable improvement will this system create for your organization?</span>
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a 
                  href="#systems-engine" 
                  className="px-6 py-4 rounded bg-teal-500 text-black text-sm md:text-base font-semibold font-display hover:bg-teal-400 transition-all duration-300 shadow-lg shadow-teal-500/10 cursor-pointer"
                >
                  Configure Interactive Blueprint
                </a>
                
                <a 
                  href="#systems" 
                  className="px-6 py-4 rounded border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/40 text-sm md:text-base font-medium transition-all duration-300"
                >
                  Review Systems Catalog
                </a>
              </div>

              {/* Secure partner credentials anchor */}
              <div className="pt-8 border-t border-zinc-900 flex flex-wrap gap-8 text-[11px] font-mono text-zinc-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>HIGH-TRUST ALIGNMENT</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-teal-400" />
                  <span>NO TEMPLATE PROMISES</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-indigo-400" />
                  <span>MEASURABLE REVENUE ROI</span>
                </div>
              </div>
            </div>

            {/* Dynamic Server-Side Simulation Node graph */}
            <div className="lg:col-span-5 bg-gradient-to-tr from-zinc-950 to-zinc-900/30 border border-zinc-800/80 rounded-2xl p-6 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-850">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
                  <span className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase">AXIORA FLOW ENGINE v1.4</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-teal-950/40 border border-teal-500/20 text-[9px] font-mono text-teal-400">{activePipelineSignal.toUpperCase()}</span>
              </div>

              {/* Node Schematic Visual Element */}
              <div className="space-y-6 relative py-4">
                
                {/* Node 1 */}
                <div className="flex items-center justify-between p-3.5 rounded bg-zinc-900/60 border border-zinc-850 hover:bg-zinc-900 transition-colors z-20 relative">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-zinc-950 border border-zinc-800 flex items-center justify-center text-teal-400">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Client / Visitor Traffic</div>
                      <div className="text-[9px] font-mono text-zinc-500">B2B, Academic parent, Institution</div>
                    </div>
                  </div>
                  <button 
                    onClick={() => triggerPipelineCycle('traffic')}
                    className="p-1 px-2.5 rounded bg-zinc-950 border border-zinc-850 hover:border-teal-500/50 text-[9px] font-mono text-zinc-400 hover:text-teal-400 transition-colors"
                  >
                    Send Packet
                  </button>
                </div>

                {/* Packet Line 1 */}
                <div className="h-6 w-0.5 bg-zinc-800 mx-auto relative">
                  {activePipelineSignal === 'traffic' && (
                    <div className="absolute top-0 left-0 w-full h-full bg-teal-400 animate-[bounce_1.5s_infinite] shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
                  )}
                </div>

                {/* Node 2 */}
                <div className="flex items-center justify-between p-3.5 rounded bg-zinc-900/60 border border-zinc-850 hover:bg-zinc-900 transition-colors z-20 relative">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-zinc-950 border border-zinc-800 flex items-center justify-center text-teal-400">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Frictionless Ingestion Wizard</div>
                      <div className="text-[9px] font-mono text-zinc-500">Interactive scope blueprints, qualifiers</div>
                    </div>
                  </div>
                  <button 
                    onClick={() => triggerPipelineCycle('wizard')}
                    className="p-1 px-2.5 rounded bg-zinc-950 border border-zinc-850 hover:border-teal-500/50 text-[9px] font-mono text-zinc-400 hover:text-teal-400 transition-colors"
                  >
                    Compile
                  </button>
                </div>

                {/* Packet Line 2 */}
                <div className="h-6 w-0.5 bg-zinc-800 mx-auto relative">
                  {activePipelineSignal === 'wizard' && (
                    <div className="absolute top-0 left-0 w-full h-full bg-teal-400 animate-[bounce_1.5s_infinite] shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
                  )}
                </div>

                {/* Node 3 */}
                <div className="flex items-center justify-between p-3.5 rounded bg-zinc-900/60 border border-zinc-850 hover:bg-zinc-900 transition-colors z-20 relative">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-zinc-950 border border-zinc-800 flex items-center justify-center text-teal-400">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Integrated DBMS Pipeline</div>
                      <div className="text-[9px] font-mono text-zinc-500">HubSpot sync, PostgreSQL sync, PDF relay</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono text-teal-400 bg-teal-950/30 px-2 py-1 rounded border border-teal-500/20">AUTO-RELAY</span>
                </div>

              </div>

              {/* Simulated Log metrics box */}
              <div className="bg-zinc-950/90 border border-zinc-850/60 rounded-lg p-3 text-[10px] font-mono text-zinc-400 mt-4 space-y-1 z-20 relative">
                <div className="flex justify-between">
                  <span>LAST_API_STATUS_CODE:</span>
                  <span className="text-emerald-400">200_OK_VERIFIED</span>
                </div>
                <div className="flex justify-between">
                  <span>DATA_TRANSFER_LATENCY:</span>
                  <span className="text-zinc-300">14ms cached serverless</span>
                </div>
                <div className="flex justify-between">
                  <span>RECURRING_STAFF_HOURS_SAVED:</span>
                  <span className="text-teal-400 font-bold">~30 hours/week logs</span>
                </div>
              </div>

              <div className="text-center pt-4 text-[10px] text-zinc-500 font-mono">
                Click "Send Packet" or "Compile" to simulate flow
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHOWEARE: Corporate Position & Agency Differences */}
      <section id="whoweare" className="py-24 relative bg-[#090A0E] overflow-hidden border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader 
            tag="1.0 Strategic Brand Position" 
            title="AXIORA X vs. Standard Agencies" 
            subtitle="We do not sell static templates or pages. We design digital systems that bridge organizational gaps, secure administration portals, and drive real outcomes."
          />

          {/* Real Alignment Deck: Vision, Mission & Core Philosophy */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            
            {/* Vision & Mission card */}
            <div className="lg:col-span-7 bg-gradient-to-br from-zinc-950 to-zinc-900/40 border border-zinc-900 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-zinc-800 transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-teal-500/10 transition-colors" />
              
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0F171E] border border-teal-500/20 text-[10px] font-mono text-teal-400 uppercase tracking-widest">
                  PAN-AFRICAN BRAND VISION
                </div>
                
                <p className="text-lg md:text-xl font-display font-light text-zinc-200 leading-relaxed max-w-xl">
                  "To become a leading African digital systems company known for turning ideas, operations, and online presence into practical platforms that improve growth, communication, efficiency, and impact."
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-zinc-850/80">
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2">Our Official Mission</div>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-sans">
                  To design and build digital systems that help businesses, schools, and organizations grow, operate more efficiently, and achieve measurable results.
                </p>
              </div>
            </div>

            {/* Core Philosophy Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-zinc-950 to-zinc-900/40 border border-zinc-900 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-zinc-800 transition-all duration-300">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-6">
                  Our Core Philosophy
                </div>

                <div className="space-y-5.5">
                  {[
                    { num: "01", text: "A website should not exist just to look good. It should guide users toward action." },
                    { num: "02", text: "A school platform should not only store information. It should make administration simpler and communication clearer." },
                    { num: "03", text: "A digital system should not only function. It should improve efficiency, reduce friction, and support decision-making." },
                    { num: "04", text: "Every design choice should contribute to trust, speed, clarity, or conversion." }
                  ].map((phil, i) => (
                    <div key={i} className="flex gap-3.5 items-start">
                      <span className="text-[10px] font-mono text-teal-400 bg-teal-950/40 px-2 py-0.5 rounded border border-teal-500/20 leading-none mt-0.5 shrink-0">
                        {phil.num}
                      </span>
                      <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                        {phil.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Positioning Side-by-Side Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            
            {/* Ordinary web boutique */}
            <div className="p-8 rounded-2xl bg-zinc-950/40 border border-zinc-900 relative">
              <div className="absolute top-4 right-4 px-2 py-0.5 rounded bg-red-950/40 text-red-400 border border-red-500/20 text-[9px] font-mono">
                LACKS COMPLIANCE & AUTOMATION
              </div>
              
              <h3 className="text-lg font-display font-bold text-zinc-400 mb-6">Standard Freelancer / Web Agency</h3>
              
              <ul className="space-y-4 text-xs font-sans text-zinc-500">
                {[
                  'Rely strictly on third-party WordPress templates bloated with fragile plugins.',
                  'Incapable of writing custom PostgreSQL or Firebase server logic or secure JWT authorization.',
                  'Create generic "Contact Us" forms that result in massive spam and zero automated qualification.',
                  'No systems mindset—leaving staff to manually paste data between emails, CRMs, and spreadsheets.',
                  'Inflexible and unresponsive to security audits or academic school regulatory compliance bodies.'
                ].map((item, id) => (
                  <li key={id} className="flex gap-3 items-start">
                    <span className="text-red-500 font-bold mt-0.5 shrink-0">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AXIORA SYSTEM */}
            <div className="p-8 rounded-2xl bg-[#0F1117] border border-teal-500/20 shadow-2xl relative">
              <div className="absolute top-4 right-4 px-2.5 py-1 rounded bg-teal-950/80 text-teal-400 border border-teal-500/40 text-[9px] font-mono font-bold animate-pulse">
                AXIORA X SECURE ARCHITECTURE
              </div>
              
              <h3 className="text-lg font-display font-extrabold text-white mb-6">AXIORA X Growth & Systems Partner</h3>
              
              <ul className="space-y-4 text-xs font-sans text-zinc-300">
                {[
                  'Bespoke React + Vite code bases optimized manually for flawless fast performance.',
                  'Develop dedicated, secure database schemas and robust Webhook connectors.',
                  'Convert static traffic into high-converting qualifiers and automated scheduling routines.',
                  'Establish real, custom REST APIs and unified workflows to eradicate redundant office labor.',
                  'Secure setups optimized for audit validation, high administrative loads, and school portal standards.'
                ].map((item, id) => (
                  <li key={id} className="flex gap-3 items-start">
                    <CheckCircle className="text-teal-400 w-4 h-4 mt-0.5 shrink-0" />
                    <span className="text-zinc-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* PROBLEMS WE SOLVED (SEGMENTED VIEW) */}
      <section id="problems" className="py-24 relative bg-[#07080C] overflow-hidden border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader 
            tag="2.0 Problems We Engineered Out" 
            title="Outcome-Driven Systems Balanced For Any Client Matrix"
            subtitle="AXIORA X adapts its work to the type of organization, but our performance-first thinking stays the same. We construct custom systems tailored to your sector's exact conversion and operational load."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            
            {/* Segment 1 */}
            <div className="p-6 rounded-2xl bg-zinc-900/20 border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 mb-6">
                  <Briefcase className="w-5 h-5" />
                </div>
                
                <h3 className="text-xl font-display font-medium text-white mb-3">Targeted Businesses</h3>
                <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                  Build outcome-driven platforms for fast-growth startups and established corporations seeking real, measurable performance and lead metrics.
                </p>

                <div className="space-y-2 pt-4 border-t border-zinc-850">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5 font-bold">Official Specialization:</div>
                  {[
                    'Lead generation engines',
                    'Conversion-focused websites',
                    'Sales funnels & pipelines',
                    'CRM workflow sync & automation',
                    'Strategic growth analytics'
                  ].map((it) => (
                    <div key={it} className="flex items-center gap-2 text-xs text-zinc-300">
                      <span className="text-teal-400 font-mono text-[9px]">●</span>
                      <span>{it}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 pt-4 text-xs font-mono text-teal-400 flex items-center gap-1">
                <span>Configure Business Engine</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Segment 2 */}
            <div className="p-6 rounded-2xl bg-zinc-900/20 border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 mb-6">
                  <GraduationCap className="w-5 h-5" />
                </div>
                
                <h3 className="text-xl font-display font-medium text-white mb-3">Academic Schools</h3>
                <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                  Support complete parent-teacher communications, record administrative portals, and secure admissions with a system built for absolute peace of mind.
                </p>

                <div className="space-y-2 pt-4 border-t border-zinc-850">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5 font-bold">Official Specialization:</div>
                  {[
                    'School management systems',
                    'Seamless enrollment portals',
                    'Parent communication systems',
                    'Secure student records tracker',
                    'Fee workflows & tuition dashboards'
                  ].map((it) => (
                    <div key={it} className="flex items-center gap-2 text-xs text-zinc-300">
                      <span className="text-teal-400 font-mono text-[9px]">●</span>
                      <span>{it}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 pt-4 text-xs font-mono text-teal-400 flex items-center gap-1">
                <span>Configure Academic System</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Segment 3 */}
            <div className="p-6 rounded-2xl bg-zinc-900/20 border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 mb-6">
                  <Cpu className="w-5 h-5" />
                </div>
                
                <h3 className="text-xl font-display font-medium text-white mb-3">NGOs & Institutions</h3>
                <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                  Connect scattered administration nodes. Automate volunteer systems, track donors, and establish bulletproof internal reporting structures.
                </p>

                <div className="space-y-2 pt-4 border-t border-zinc-850">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5 font-bold">Official Specialization:</div>
                  {[
                    'Advanced donor tracking systems',
                    'Comprehensive reporting tools',
                    'Volunteer coordination networks',
                    'Confidential internal platforms',
                    'Digital workflow optimization'
                  ].map((it) => (
                    <div key={it} className="flex items-center gap-2 text-xs text-zinc-300">
                      <span className="text-teal-400 font-mono text-[9px]">●</span>
                      <span>{it}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 pt-4 text-xs font-mono text-teal-400 flex items-center gap-1">
                <span>Configure Institutional Flow</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SYSTEMS CATALOG: What We Build */}
      <section id="systems" className="py-24 relative bg-[#090A0E] overflow-hidden border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader 
            tag="3.0 Engineered Platforms" 
            title="The AXIORA X Systems Catalog" 
            subtitle="We configure, develop, and warrant secure systems architectures built exclusively to minimize administrative overhead."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            
            {[
              { title: 'Authority Frontends', desc: 'Custom corporate web apps with sharp type tracking, designed to command immense trust from high-level boards and private capital stakeholders.' },
              { title: 'Qualifying Funnels', desc: 'Step-by-step diagnostic builders that pre-screen and qualify user traffic, converting high-value prospects into reserved agency bookings.' },
              { title: 'School Portal Management', desc: 'Private portals incorporating secure credential access for parents and faculty, student course logging, and grade report generation.' },
              { title: 'Webhook Pipelines', desc: 'Direct, native API connectors linking web actions seamlessly to HubSpot, Salesforce, active databases, and instant Slack notifications.' },
              { title: 'Tuition & Invoicing Gates', desc: 'Secure billing nodes incorporating subscription or localized tuition payment plans, coupled with automatic PDF invoice output.' },
              { title: 'Telemetry Boards', desc: 'Real-time internal diagnostics panels presenting system efficiency, conversion margins, and core organizational KPIs.' },
              { title: 'Document Generators', desc: 'Automated engines compiling detailed administrative surveys, record lists, or blueprints into pristine downloadable files.' },
              { title: 'CRM Workflows', desc: 'Complete pipeline setups removing physical sales outreach bottlenecks, maintaining continuous lead sequences automatically.' }
            ].map((sys, idx) => (
              <div key={idx} className="p-5.5 rounded-xl bg-zinc-950/40 border border-zinc-850 hover:bg-zinc-950 transition-colors flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-teal-400/80 mb-2 block">MODULE_0{idx + 1}</span>
                  <h4 className="text-sm font-semibold text-white mb-2">{sys.title}</h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed font-sans">{sys.desc}</p>
                </div>
                
                <div className="pt-4 mt-4 border-t border-zinc-900 text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  Engineered & Hardened
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* INTERACTIVE BUILDER WORKSPACE */}
      <InteractiveBuilders onBlueprintSubmit={handleBlueprintGenerated} />

      {/* METHODOLOGY: How We Deliver */}
      <section id="methodology" className="py-24 relative bg-[#07080C] overflow-hidden border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader 
            tag="5.0 Delivery Pipeline" 
            title="The AXIORA X Methodology" 
            subtitle="The company is known for a structured, results-driven process inspired by conversion-focused methodology."
          />

          <div className="mt-16 max-w-4xl mx-auto relative pl-6 sm:pl-10 space-y-12">
            
            {/* Stem line */}
            <div className="absolute top-2 bottom-2 left-6 sm:left-10 w-0.5 bg-zinc-800" />

            {[
              { num: '01', phase: 'Research', desc: 'Understand the client, users, pain points, competitors, and goals to build a quantitative foundation.' },
              { num: '02', phase: 'Positioning', desc: 'Clarify the message, offer, and value proposition so the organization stands out with complete operational clarity.' },
              { num: '03', phase: 'Traffic and Reach', desc: 'Attract the right high-intent audience through ads, search, social media, direct referrals, and strategic partnerships.' },
              { num: '04', phase: 'Conversion and Experience', desc: 'Build the website or system so users can take action easily, confidently, and without administrative friction.' },
              { num: '05', phase: 'Automation and Efficiency', desc: 'Reduce manual work and office overhead through automated workflows, robust data integrations, and streamlined digital processes.' },
              { num: '06', phase: 'Measurement and Optimization', desc: 'Track performance variables continuously, identify user drop-offs immediately, and improve results iteratively.' }
            ].map((step, idx) => (
              <div key={idx} className="relative pl-10">
                
                {/* Node orb */}
                <div className="absolute -left-14 top-0.5 w-8 h-8 rounded-full bg-zinc-950 border border-zinc-850 text-teal-400 font-mono text-xs flex items-center justify-center font-bold">
                  {step.num}
                </div>

                <div>
                  <h4 className="text-lg font-display font-medium text-white mb-2">{step.phase}</h4>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed max-w-2xl font-sans">{step.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (OUTCOME-DRIVEN ARCHITECTURE) */}
      <section className="py-24 relative bg-[#090A0E] overflow-hidden border-b border-zinc-905">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Copy */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-teal-950/40 text-teal-400 border border-teal-500/20 text-[10px] font-mono tracking-wider uppercase">
                Athenticity & Authority
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight">
                Designed to Inspire Absolute Corporate Trust
              </h2>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-sans">
                Serious organizations, colleges, and business entities do not run on flashy trends or gimmicky templates. They select technology suppliers based on security, flawless UX speed, and rigorous planning.
              </p>

              <div className="space-y-4 pt-6">
                {[
                  { title: 'Tailored, Template-Free Code', desc: 'No WordPress vulnerabilities, no page builders slowing performance down. Handcoded to achieve highest speed scores.' },
                  { title: 'Strict NDA & Asset Privacy', desc: 'Your backend database tables, client files, and system designs remain strictly confidential under heavy legal coverage.' },
                  { title: 'Continuous Performance Warranty', desc: 'We do not hand over code and vanish. AXIORA X includes direct executive channels and a signature operational SLA warranty.' }
                ].map((item, id) => (
                  <div key={id} className="flex gap-4 p-4 rounded-xl bg-zinc-950/40 border border-zinc-850">
                    <div className="w-5 h-5 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-[11px] text-zinc-400 leading-relaxed font-sans">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Credibility Card Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { metric: '99.9%', label: 'Uptime SLA Target', sub: 'Calculated using serverless cloud database distribution clusters.' },
                { metric: '100%', label: 'Strict Custom Code', sub: 'Zero pre-purchased styling kits or performance-bogging layout blocks.' },
                { metric: '30 hours', label: 'Average Weekly Savings', sub: 'Eradicating boring, repetitive database and parent contact management.' },
                { metric: '24 hours', label: 'Response Protocol', sub: 'High-touch professional client support system for any active pipeline.' }
              ].map((val, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-zinc-950 border border-zinc-850 text-left">
                  <div className="text-2xl md:text-3xl font-display font-medium text-teal-450 text-white mb-1.5">{val.metric}</div>
                  <div className="text-xs font-semibold text-zinc-300 mb-1">{val.label}</div>
                  <p className="text-[10px] text-zinc-500 leading-relaxed">{val.sub}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* THE EMBARRASSING TRUTHS & CODES OF VALUE */}
      <section className="py-24 bg-[#07080C] relative overflow-hidden border-b border-zinc-900/60">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8 relative z-10">
          <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">The AXIORA X Covenant</span>
          <h2 className="text-2xl md:text-4xl font-display font-light text-zinc-300 leading-normal max-w-4xl mx-auto">
            “If your only objective is to throw an aesthetic gallery link onto the internet, we are not the right firm. If you intend to <span className="text-white font-medium">automate admin workflows</span>, securely capture lead records, and command undeniable brand authority under academic standards, we are built for you.”
          </h2>
          <div className="text-xs font-mono text-teal-400 tracking-wider">
            — THE PARTNERSHIP OF AXIORA X
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE & CONSULTATION AREA */}
      <LeadCapture initialData={sessionBlueprintData} />

      {/* FOOTER */}
      <footer className="bg-[#050608] border-t border-zinc-900/80 py-16 text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 flex items-center justify-center text-white">
                <svg 
                  className="w-full h-full text-white" 
                  viewBox="0 0 100 100" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="8" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M28,26 C33,14 47,14 50,30 C53,46 67,86 72,74 C77,62 63,62 50,50 C37,38 23,38 28,26 Z" />
                  <path d="M72,26 C67,14 53,14 50,30 C47,46 33,86 28,74 C23,62 37,62 50,50 C63,38 77,38 72,26 Z" />
                </svg>
              </div>
              <span className="font-display font-medium tracking-[0.2em] text-[#F4F4F5] text-xs">AXIORA®</span>
            </div>
            <p className="text-[11px] text-zinc-500 leading-relaxed font-sans">
              Handcrafting robust corporate and academic systems to minimize administrative overhead and fuel secure digital presence.
            </p>
          </div>

          <div>
            <div className="font-mono text-zinc-300 uppercase tracking-widest text-[10px] mb-4">Core Competency</div>
            <ul className="space-y-2 text-[11px] font-sans">
              <li><span className="hover:text-zinc-300 transition-colors">Strategy copy & brand writing</span></li>
              <li><span className="hover:text-zinc-300 transition-colors">High-compliance parent portals</span></li>
              <li><span className="hover:text-zinc-300 transition-colors">Automated CRM integrations</span></li>
              <li><span className="hover:text-zinc-300 transition-colors">Premium corporate frontends</span></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-zinc-300 uppercase tracking-widest text-[10px] mb-4">Integrations</div>
            <ul className="space-y-2 text-[11px] font-sans">
              <li><span className="hover:text-zinc-300 transition-colors">PostgreSQL schemas</span></li>
              <li><span className="hover:text-zinc-300 transition-colors">HubSpot webhook connectors</span></li>
              <li><span className="hover:text-zinc-300 transition-colors">Secure SSO authentications</span></li>
              <li><span className="hover:text-zinc-300 transition-colors">Tuition invoicing pathways</span></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-zinc-300 uppercase tracking-widest text-[10px] mb-4">Secure Status</div>
            <div className="space-y-2.5 text-[11px] font-sans">
              <div className="flex items-center gap-1.5 text-emerald-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-450 bg-emerald-400 animate-ping" />
                <span>SERVER: STABLE_200</span>
              </div>
              <div className="font-mono text-[10px] text-zinc-500">
                CLIENTS LOAD: BALANCED<br />
                REVENUE METRIC GOALS: SECURED<br />
                REF_BLOCK: AX_SECURE_2026
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-zinc-900/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-zinc-600">
          <div>
            © 2026 AXIORA X. All architectural properties reserved. Powered by Antigravity Agent.
          </div>
          <div className="flex gap-6 uppercase">
            <span>Security Statement</span>
            <span>Non-Disclosure Accord</span>
            <span>Terms of Scopes</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
