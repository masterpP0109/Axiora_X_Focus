/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, Sliders, CheckCircle, Clock, ArrowRight, Sparkles, 
  RefreshCw, DollarSign, Layers, Building2, School, 
  Briefcase, Activity, ShieldCheck, BookOpen, ChevronRight, 
  FileText, Send, HelpCircle, TrendingUp, AlertTriangle, ShieldCheck as SecureIcon 
} from 'lucide-react';

interface InteractiveBuildersProps {
  onBlueprintSubmit: (details: any) => void;
}

export default function InteractiveBuilders({ onBlueprintSubmit }: InteractiveBuildersProps) {
  const [activeTab, setActiveTab] = useState<'discovery' | 'analyzer' | 'calculator' | 'consultation'>('discovery');

  return (
    <section id="systems-engine" className="relative py-28 bg-[#090A0E] overflow-hidden border-t border-zinc-900/80">
      {/* Background Ornaments */}
      <div className="glow-mesh top-1/4 left-1/3 w-[500px] h-[500px]" />
      <div className="glow-mesh-indigo bottom-1/4 right-1/4 w-[600px] h-[600px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0F171E] border border-teal-500/20 text-[10px] font-mono text-teal-400 mb-4 tracking-widest uppercase">
            <Cpu className="w-3.5 h-3.5" />
            AXIORA X CONSULTATIVE DIAGNOSIS WORKSPACE
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-white mb-6">
            Identify Gaps. Blueprint Outcomes.
          </h2>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-sans">
            We do not sell templates, web pages, or static creative designs. Explore your organizational challenges, run self-serving metric projections, and build custom strategic solutions below.
          </p>
        </div>

        {/* Strategic Tab Controls */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 mb-12 p-1.5 bg-zinc-950 border border-zinc-900 rounded-xl max-w-4xl mx-auto">
          {[
            { id: 'discovery', label: '[1] Problem Discovery', icon: HelpCircle },
            { id: 'analyzer', label: '[2] Opportunity Analyzer', icon: Activity },
            { id: 'calculator', label: '[3] Growth & ROI Meter', icon: Sliders },
            { id: 'consultation', label: '[4] Structured Consultation Builder', icon: Sparkles }
          ].map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full md:w-auto flex items-center justify-center gap-2.5 px-4.5 py-3.5 rounded-lg text-xs font-mono tracking-wider transition-all duration-300 font-medium ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#121E23] to-[#0A1014] border border-teal-500/40 text-teal-400 shadow-[0_4px_12px_rgba(45,212,191,0.06)]'
                    : 'text-zinc-500 border border-transparent hover:text-zinc-300 hover:bg-zinc-900/40'
                }`}
              >
                <tab.icon className={`w-3.5 h-3.5 ${isSelected ? 'text-teal-400' : 'text-zinc-600'}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Workspace Display Area */}
        <div className="bg-zinc-950/40 border border-zinc-900 rounded-2xl shadow-2xl p-6 md:p-10 min-h-[520px]">
          <AnimatePresence mode="wait">
            {activeTab === 'discovery' && (
              <motion.div
                key="discovery"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <ProblemDiscoveryView />
              </motion.div>
            )}

            {activeTab === 'analyzer' && (
              <motion.div
                key="analyzer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <DigitalOpportunityAnalyzerView />
              </motion.div>
            )}

            {activeTab === 'calculator' && (
              <motion.div
                key="calculator"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <GrowthPotentialCalculatorView />
              </motion.div>
            )}

            {activeTab === 'consultation' && (
              <motion.div
                key="consultation"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <StrategicConsultationBuilderView onBlueprintSubmit={onBlueprintSubmit} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   TAB 1: PROBLEM DISCOVERY ASSESSMENT
   ============================================================================ */
function ProblemDiscoveryView() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const topics = [
    {
      id: 'growth',
      label: 'Growth Barriers',
      desc: 'Unable to expand into premium territory. Stuck with low-value transactions due to weak brand positioning and poor digital authority.',
      malady: 'The business relies on static visual pamphlets which fail to convey strategic scale, keeping the sales cycle prolonged and pricing depressed.',
      cost: 'Your sales cycle remains highly dependent on direct manual outreach, capping your expansion bandwidth at 15% and losing five-figure opportunities to aggressive rivals.',
      outcome: 'A modern, authoritative digital frontend designed to establish unmatched market positioning paired with conversion pipelines.'
    },
    {
      id: 'communication',
      label: 'Friction in Communication',
      desc: 'Information gaps, broken email threads, and manual phone handoffs slowing customer coordination and parent alignment.',
      malady: 'Absence of secure, synchronized customer portal architectures, trapping communications in separate inbox silos.',
      cost: 'Over 20 staff-hours wasted per week repeating simple announcements, retrieving lost documents, and apologizing for coordination delays.',
      outcome: 'Fully secure, custom self-service portals offering continuous coordination, document downloads, and real-time alerts.'
    },
    {
      id: 'administration',
      label: 'Administrative Overload',
      desc: 'Office administrative staff spending crucial leadership hours managing spreadsheets, student rosters, or manual registries.',
      malady: 'Operational flows remain paper-filed or spreadsheet-reliant rather than database-governed.',
      cost: 'High overhead costs alongside database duplication mistakes, with a direct 35% lag in administrative efficiency.',
      outcome: 'Automated student/client portals that auto-generate records and trigger secure administrative receipts instantly.'
    },
    {
      id: 'operations',
      label: 'Siloed Operations',
      desc: 'Independent database platforms, calendars, CRMs, and billing sheets that do not talk to each other.',
      malady: 'Disconnected SaaS setups that require endless manual copy-pasting to update customer data.',
      cost: 'Severe data leakage. Staff spends days correcting record errors, resulting in mismatched appointments and billing stress.',
      outcome: 'Robust API adapters, webhooks, and secure PostgreSQL middle-layers linking web actions directly to internal systems.'
    },
    {
      id: 'lead-gen',
      label: 'Dormant Inbound Channels',
      desc: 'Generating reasonable website traffic and impressions, but failing to convert users into high-intent corporate inquiries or meetings.',
      malady: 'Relying on standard "Contact Us" textforms that fail to qualify visitors, driving high bounce rates and low-trust engagement.',
      cost: 'Marketing investments are entirely wasted, as over 92% of high-intent website visitors exit without scheduling.',
      outcome: 'Multi-step diagnostic qualifying systems that pre-screen prospective leads and direct qualified bookings straight to calendar grids.'
    },
    {
      id: 'reporting',
      label: 'Trapped Business Reporting',
      desc: 'Struggling to extract real-time performance variables, leaving leadership to make blind strategic assessments.',
      malady: 'Operational metrics are trapped in isolated spreadsheets rather than connected telemetry dashboards.',
      cost: 'Ignored inefficiencies. Inability to identify where drop-offs occur leads to operational leakage and inaccurate forecasting.',
      outcome: 'Secure, real-time analytics suites with robust graphical representations of systems wellness and client metrics.'
    },
    {
      id: 'automation',
      label: 'Absence of Automated Loops',
      desc: 'Operational activities require manual staff initiation, leaving lead nurturing and compliance processes vulnerable to human memory.',
      malady: 'No backend workflow engine directing standard sequences (agreements, alerts, logs) after client actions.',
      cost: 'Immediate drops in client trust. Delays in follow-up loops make stakeholders seek secondary, more responsive partners.',
      outcome: 'Event-driven system pipelines that trigger messaging sequences, generate contracts, and auto-issue PDFs.'
    },
    {
      id: 'experience',
      label: 'Coarse Customer Experience',
      desc: 'A clunky onboarding, tedious invoice payments, and manual access codes leaving users frustrated.',
      malady: 'Client interface isn\'t cohesive—onboarding, billing, and system access are handled via fragmented emails.',
      cost: 'Higher refund rates and standard customer attrition. Bad initial design acts as a silent killer for retention.',
      outcome: 'An elite client portal mapping the entire onboarding, reporting, and Stripe billing cycle into a single secure gateway.'
    }
  ];

  const activeTopicObj = topics.find(t => t.id === selectedTopic);

  return (
    <div>
      <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider mb-6">
        Step 1: Diagnose your administrative & growth bottlenecks
      </div>
      <h3 className="text-xl md:text-2xl font-display font-medium text-white mb-6">
        What is slowing your organization down?
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {topics.map((t) => {
          const isSelected = selectedTopic === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setSelectedTopic(t.id)}
              className={`p-5 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#10191E] border-teal-500/80 text-white shadow-[0_4px_20px_rgba(45,212,191,0.04)]'
                  : 'bg-zinc-900/20 border-zinc-900 text-zinc-400 hover:bg-zinc-900/40 hover:border-zinc-800'
              }`}
            >
              <div>
                <span className={`text-[9px] font-mono border px-2 py-0.5 rounded uppercase leading-none mb-3 inline-block ${
                  isSelected ? 'border-teal-500/20 text-teal-400 bg-teal-950/20' : 'border-zinc-800 text-zinc-500'
                }`}>
                  {t.id.replace('-', ' ')}
                </span>
                <h4 className="text-xs md:text-sm font-semibold text-white block mb-2">{t.label}</h4>
                <p className="text-[11px] text-zinc-400 leading-relaxed font-sans line-clamp-3">{t.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-zinc-900/60 flex items-center justify-between text-[10px] font-mono">
                <span className={isSelected ? 'text-teal-400' : 'text-zinc-500'}>
                  {isSelected ? 'ACTIVE DIAGNOSIS' : 'DIAGNOSE GAPS'}
                </span>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isSelected ? 'translate-x-1 text-teal-400' : 'text-zinc-600'}`} />
              </div>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {selectedTopic && activeTopicObj ? (
          <motion.div
            key={selectedTopic}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="mt-8 p-6 md:p-8 bg-zinc-950/90 border border-zinc-900 rounded-2xl relative overflow-hidden"
          >
            {/* Design Watermarks */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs text-teal-400 font-mono mb-2">
                    <AlertTriangle className="w-4 h-4 text-teal-500/80 animate-pulse" />
                    STRATEGIC BOTTLENECK ANALYSIS: {activeTopicObj.label.toUpperCase()}
                  </div>
                  <h4 className="text-lg md:text-xl font-display text-white font-medium">
                    The Cost of ignoring this operational lag is compounding.
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl bg-zinc-900/10 border border-zinc-900">
                    <span className="text-[10px] font-mono text-zinc-500 block mb-1">THE CAUSAL ROOT:</span>
                    <p className="text-xs text-zinc-300 leading-relaxed font-sans">{activeTopicObj.malady}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-red-950/5 border border-red-900/10">
                    <span className="text-[10px] font-mono text-red-400/80 block mb-1">THE COST OF INACTION:</span>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">{activeTopicObj.cost}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-900 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-teal-500/80 block mb-1">TRANSFORMATION HORIZON:</span>
                    <div className="text-xs font-semibold text-white">{activeTopicObj.outcome}</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 p-5 rounded-xl bg-zinc-900/20 border border-zinc-850 flex flex-col justify-between h-full">
                <div>
                  <h5 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2.5">Engineered Systems Answer</h5>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-6">
                    Rather than building a basic website template, we design a connected, automated database machine crafted strictly surrounding these outcomes.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="w-full py-3.5 rounded-lg bg-teal-500 text-black font-semibold text-xs text-center block hover:opacity-90 hover:scale-[1.01] transition-all duration-200"
                >
                  Configure Transformation Plan
                </a>
              </div>
            </div>

          </motion.div>
        ) : (
          <div className="mt-8 p-12 bg-zinc-900/10 border border-zinc-900 border-dashed rounded-2xl text-center">
            <HelpCircle className="w-10 h-10 text-zinc-700 mx-auto mb-4" />
            <div className="text-xs font-mono text-zinc-500 mb-1">AWAITING CORRELATION SELECTION</div>
            <p className="text-xs text-zinc-500 max-w-sm mx-auto font-sans">
              Select one of the strategic administrative or growth bottlenecks above to view roots, risks, and systems outcomes.
            </p>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ============================================================================
   TAB 2: DIGITAL OPPORTUNITY ANALYZER
   ============================================================================ */
function DigitalOpportunityAnalyzerView() {
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState({ q1: 0, q2: 0, q3: 0 });
  const [isAnalyzed, setIsAnalyzed] = useState(false);
  const [coordinates, setCoordinates] = useState({ name: '', email: '' });
  const [leadSaved, setLeadSaved] = useState(false);

  const resetAll = () => {
    setStep(1);
    setIsAnalyzed(false);
    setAnswers({ q1: 0, q2: 0, q3: 0 });
    setLeadSaved(false);
    setCoordinates({ name: '', email: '' });
  };

  const handleNext = (scoreValue: number) => {
    if (step === 1) {
      setAnswers({ ...answers, q1: scoreValue });
      setStep(2);
    } else if (step === 2) {
      setAnswers({ ...answers, q2: scoreValue });
      setStep(3);
    } else if (step === 3) {
      const q3Val = scoreValue;
      setAnswers({ ...answers, q3: q3Val });
      setIsAnalyzed(true);
    }
  };

  const calculateResults = () => {
    const totalScore = answers.q1 + answers.q2 + answers.q3;
    let rank = 'Low Systems Vulnerability';
    let efficiencyLoss = '10%';
    let leakageCost = '$8,000 /yr';
    let summary = 'Your enterprise maintains a baseline layer of integration. However, disjointed booking networks or manual double-entry spreadsheets are subtly slowing organizational growth.';

    if (totalScore >= 7) {
      rank = 'Critical Strategic Vulnerability';
      efficiencyLoss = '45% - 60%';
      leakageCost = '$45,000+ /yr';
      summary = 'Your systems operate in severe isolation. Staff are significantly bogged down by paper entries, disjointed bookings, and mismatched database tables. Over 30% of warm customer interests freeze in manual delays.';
    } else if (totalScore >= 4) {
      rank = 'Moderate Administrative Leakage';
      efficiencyLoss = '25% - 40%';
      leakageCost = '$18,500 /yr';
      summary = 'Partial integrations exist, but manual interventions are required to sync leads to lists, update calendars, or hand off invoice files. A continuous systems pipeline is highly recommended.';
    }

    return { rank, efficiencyLoss, leakageCost, summary, totalScore };
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSaved(true);
  };

  const result = calculateResults();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider mb-2">
        Module 2: Digital Opportunity Analyzer
      </div>

      {!isAnalyzed ? (
        <div>
          {/* Progress node bar */}
          <div className="w-full bg-zinc-900 rounded-full h-1 mb-8 overflow-hidden">
            <div 
              className="bg-teal-400 h-1 transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="q1"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="space-y-6"
              >
                <div className="text-zinc-500 font-mono text-xs">DIAGNOSTIC QUESTION 01/03</div>
                <h4 className="text-lg md:text-xl font-display font-medium text-white max-w-2xl">
                  Roughly how many hours per staff member are wasted on manual database entry, scheduling adjustments, or administrative spreadsheets weekly?
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
                  {[
                    { label: 'Minimal (Under 5 hours/week)', val: 1, desc: 'Highly automated pipelines or very light transaction volume.' },
                    { label: 'Compounding (5 - 15 hours/week)', val: 2, desc: 'Simple forms are copied manually; data syncs rely on daily staff checks.' },
                    { label: 'Stagnating (15 - 30 hours/week)', val: 3, desc: 'Multiple legacy folders or spreadsheets hand-matched daily.' },
                    { label: 'Critical Burden (Over 30 hours/week)', val: 4, desc: 'Employees spend the majority of their work hours processing paperwork manually.' }
                  ].map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => handleNext(opt.val)}
                      className="p-4 rounded-xl border border-zinc-900 bg-zinc-900/30 text-left hover:bg-zinc-900/60 hover:border-teal-500/40 transition-all duration-300 group"
                    >
                      <div className="text-xs font-semibold text-white group-hover:text-teal-400 block mb-1">{opt.label}</div>
                      <p className="text-[10px] text-zinc-400 leading-relaxed font-sans">{opt.desc}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="q2"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="space-y-6"
              >
                <div className="text-zinc-500 font-mono text-xs">DIAGNOSTIC QUESTION 02/03</div>
                <h4 className="text-lg md:text-xl font-display font-medium text-white max-w-2xl">
                  What primary mechanism captures incoming inquiries or registrations from prospects on your current platform?
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
                  {[
                    { label: 'Automated CRM Integrations (HubSpot, Salesforce)', val: 1, desc: 'Leads auto-funnel to calendars and queues with instant response loops.' },
                    { label: 'Simple Contact form directing to email box', val: 2, desc: 'Requires staff to read, draft a reply, and suggest meeting times manually.' },
                    { label: 'Telephone hotline back-and-forth', val: 3, desc: 'High friction. Prospective interests often vanish due to voicemails.' },
                    { label: 'No established digital registration channel', val: 4, desc: 'Completely traditional or offline word-of-mouth reliance.' }
                  ].map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => handleNext(opt.val)}
                      className="p-4 rounded-xl border border-zinc-900 bg-zinc-900/30 text-left hover:bg-zinc-900/60 hover:border-teal-500/40 transition-all duration-300 group"
                    >
                      <div className="text-xs font-semibold text-white group-hover:text-teal-400 block mb-1">{opt.label}</div>
                      <p className="text-[10px] text-zinc-400 leading-relaxed font-sans">{opt.desc}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="q3"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="space-y-6"
              >
                <div className="text-zinc-500 font-mono text-xs">DIAGNOSTIC QUESTION 03/03</div>
                <h4 className="text-lg md:text-xl font-display font-medium text-white max-w-2xl">
                  How secure, organized, and compliant are your audience records (e.g. roster archives, transactional invoices, client data)?
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
                  {[
                    { label: 'Encrypted cloud database with zero double-entries', val: 1, desc: 'Real-time sync between client logs, billing records, and CRM.' },
                    { label: 'Scattered spreadsheet records with basic file system protection', val: 2, desc: 'Highly vulnerable to data entry typos, loss of sync, and security mishaps.' },
                    { label: 'Legacy paper files or local hard disk storage', val: 3, desc: 'Severe security hazard. High risk of compliance failures and immediate data loss.' }
                  ].map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => handleNext(opt.val)}
                      className="p-4 rounded-xl border border-zinc-900 bg-zinc-900/30 text-left hover:bg-zinc-900/60 hover:border-teal-500/40 transition-all duration-300 group"
                    >
                      <div className="text-xs font-semibold text-white group-hover:text-teal-400 block mb-1">{opt.label}</div>
                      <p className="text-[10px] text-zinc-400 leading-relaxed font-sans">{opt.desc}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-fade-in">
          {/* Results Analysis */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl bg-zinc-900/10 border border-zinc-900 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest block mb-1">VULNERABILITY LEVEL:</span>
                <h4 className="text-xl md:text-2xl font-display text-white font-medium">{result.rank}</h4>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-900">
                  <span className="text-[9px] font-mono text-zinc-500 block mb-0.5">EST. WORK EFFICIENCY LEAKAGE</span>
                  <div className="text-xl font-mono text-teal-400 font-bold">{result.efficiencyLoss}</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-900">
                  <span className="text-[9px] font-mono text-zinc-500 block mb-0.5">ANNUAL FINANCIAL LACK ESTIMATE</span>
                  <div className="text-xl font-mono text-red-400 font-bold">{result.leakageCost}</div>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono text-zinc-500 block mb-1">DIAGNOSTIC SUMMARY:</span>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">{result.summary}</p>
              </div>
            </div>

            <button
              onClick={resetAll}
              className="px-5 py-2.5 rounded bg-zinc-900 hover:bg-zinc-850 text-zinc-400 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
              Retake Opportunity Audit
            </button>
          </div>

          {/* Lead capture opportunity document */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0F171E] to-zinc-950 border border-zinc-900 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-[#07080B] bg-[size:16px_16px] [background-image:linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] pointer-events-none" />

            {!leadSaved ? (
              <form onSubmit={handleLeadSubmit} className="space-y-4 relative z-10">
                <div className="pb-3 border-b border-zinc-855/60">
                  <span className="text-[9.5px] font-mono text-teal-400 tracking-wider uppercase block mb-1">Secure PDF Strategy Request</span>
                  <h5 className="text-sm font-semibold text-white">Generate Full Physical Integration Report</h5>
                  <p className="text-[10px] text-zinc-400 leading-relaxed mt-1 font-sans">
                    We compile these scores into a formal optimization prospectus detailing specific PostgreSQL data layouts, API relays, and CRM structures. Enter coordinates to authorize generation.
                  </p>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Authorized Executive Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Director Carter"
                    value={coordinates.name}
                    onChange={(e) => setCoordinates({ ...coordinates, name: e.target.value })}
                    className="w-full bg-zinc-900/60 border border-zinc-850 focus:border-teal-500/50 rounded px-3 py-2 text-xs text-white focus:outline-none focus:ring-0"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Enterprise/School Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="carter@academy.org"
                    value={coordinates.email}
                    onChange={(e) => setCoordinates({ ...coordinates, email: e.target.value })}
                    className="w-full bg-zinc-900/60 border border-zinc-850 focus:border-teal-500/50 rounded px-3 py-2 text-xs text-white focus:outline-none focus:ring-0"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded bg-teal-500 hover:bg-teal-400 text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-lg shadow-teal-500/5 transition-all duration-300"
                >
                  <Send className="w-3.5 h-3.5" />
                  Generate and Deliver Audit Report
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-white">Report Queue Authorized</h5>
                  <p className="text-xs text-zinc-400 leading-relaxed mt-2 font-sans">
                    Thank you, {coordinates.name}. A senior systems architect has been dispatched to synthesize your diagnostic answers. Your physical integration blueprint will land in <strong>{coordinates.email}</strong> shortly.
                  </p>
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-zinc-900 mt-6 flex justify-between items-center text-[10px] font-mono text-zinc-600">
              <span>STATUS: ENCRYPTED</span>
              <span>REF_NUM: AX_Opportunity_2026</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================================================
   TAB 3: GROWTH POTENTIAL & ROI CALCULATOR
   ============================================================================ */
function GrowthPotentialCalculatorView() {
  const [dealValue, setDealValue] = useState<number>(15000); // 5K to 100K
  const [monthlyInquiries, setMonthlyInquiries] = useState<number>(35); // 10 to 500
  const [adminHours, setAdminHours] = useState<number>(80); // 20 to 400

  // Calculations
  // Baseline conversion rate without automated qualifier/CRM system is roughly 5%
  // With high-polish positioning + diagnostic qualifies, inquiry-to-spot booking goes up by roughly 8%
  const recapturedLeadsCount = Math.round(monthlyInquiries * 0.08);
  const capitalRecapturedMonthly = recapturedLeadsCount * dealValue;
  const capitalRecapturedYearly = capitalRecapturedMonthly * 12;

  // Automated workflows reclaim about 75% of waste administrative hours
  const hoursSavedMonthly = Math.round(adminHours * 0.75);
  const staffHoursSavedYearly = hoursSavedMonthly * 12;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* Parameter Sliders */}
      <div className="lg:col-span-7 space-y-6">
        <div>
          <h3 className="text-xl font-display font-semibold text-white mb-2">Systems Growth Potential Calculator</h3>
          <p className="text-zinc-400 text-xs font-sans">
            Adjust the metrics below reflecting your current transaction scopes to isolate capital and administrative leakages.
          </p>
        </div>

        {/* Contract Value Slider */}
        <div className="p-5.5 rounded-xl bg-zinc-900/20 border border-zinc-900">
          <div className="flex justify-between items-center mb-3">
            <label className="text-[11px] font-mono uppercase text-zinc-400 tracking-wider">Average Program/Contract Value</label>
            <span className="font-mono text-sm text-teal-400 font-bold">
              ${dealValue.toLocaleString()}
            </span>
          </div>
          <input
            type="range"
            min="5000"
            max="100000"
            step="5000"
            value={dealValue}
            onChange={(e) => setDealValue(parseInt(e.target.value))}
            className="w-full brightness-90 accent-teal-400 h-1 rounded bg-zinc-800"
          />
          <div className="flex justify-between text-[9px] font-mono text-zinc-500 mt-2">
            <span>$5,000</span>
            <span>Strategic Scale</span>
            <span>$100,000+ Enterprise</span>
          </div>
        </div>

        {/* Monthly Inquiries Slider */}
        <div className="p-5.5 rounded-xl bg-zinc-900/20 border border-zinc-900">
          <div className="flex justify-between items-center mb-3">
            <label className="text-[11px] font-mono uppercase text-zinc-400 tracking-wider">Estimated Monthly Organic Inquiries</label>
            <span className="font-mono text-sm text-teal-400 font-bold">
              {monthlyInquiries} prospects/mo
            </span>
          </div>
          <input
            type="range"
            min="10"
            max="500"
            step="10"
            value={monthlyInquiries}
            onChange={(e) => setMonthlyInquiries(parseInt(e.target.value))}
            className="w-full brightness-90 accent-teal-400 h-1 rounded bg-zinc-800"
          />
          <div className="flex justify-between text-[9px] font-mono text-zinc-500 mt-2">
            <span>10 Inquiries</span>
            <span>Mass Volume</span>
            <span>500+ Regional Loads</span>
          </div>
        </div>

        {/* Admin hours slider */}
        <div className="p-5.5 rounded-xl bg-zinc-900/20 border border-zinc-900">
          <div className="flex justify-between items-center mb-3">
            <label className="text-[11px] font-mono uppercase text-zinc-400 tracking-wider">Monthly Manual Office Task Hours</label>
            <span className="font-mono text-sm text-teal-400 font-bold">
              {adminHours} wasted hours/mo
            </span>
          </div>
          <input
            type="range"
            min="20"
            max="400"
            step="20"
            value={adminHours}
            onChange={(e) => setAdminHours(parseInt(e.target.value))}
            className="w-full brightness-90 accent-teal-400 h-1 rounded bg-zinc-800"
          />
          <div className="flex justify-between text-[9px] font-mono text-zinc-500 mt-2">
            <span>20 Hours</span>
            <span>High Burden</span>
            <span>400 Hours / Full Team Drag</span>
          </div>
        </div>
      </div>

      {/* Projection Display */}
      <div className="lg:col-span-5 bg-gradient-to-b from-[#0E151A] to-zinc-950 border border-zinc-900 rounded-xl p-6.5 flex flex-col justify-between relative overflow-hidden">
        {/* Systems grid line decorations */}
        <div className="absolute inset-0 bg-[#07080B] bg-[size:12px_12px] [background-image:linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] pointer-events-none" />

        <div className="space-y-6 relative z-10">
          <div className="pb-4 border-b border-zinc-900">
            <span className="text-[10px] font-mono text-teal-400 tracking-widest uppercase block mb-1">Total Annual Recaptured Value</span>
            <div className="text-3xl font-display font-medium text-white">${capitalRecapturedYearly.toLocaleString()}</div>
            <p className="text-[10px] text-zinc-500 leading-relaxed mt-1 font-sans">
              Calculated capital recovered directly by sealing current lead drop-offs and streamlining intake filters.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-400 flex items-center gap-1.5 font-sans">
                <TrendingUp className="w-4 h-4 text-emerald-500" />
                Additional Recovered Leads/Mo:
              </span>
              <span className="font-mono text-white text-xs font-bold bg-[#14221D] text-emerald-400 border border-emerald-500/10 px-2 py-0.5 rounded">
                +{recapturedLeadsCount} active spots
              </span>
            </div>

            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-400 flex items-center gap-1.5 font-sans">
                <Clock className="w-4 h-4 text-teal-400" />
                Annual Repetitive Time Salvaged:
              </span>
              <span className="font-mono text-white text-xs font-bold bg-[#122026] text-teal-400 border border-teal-500/10 px-2 py-0.5 rounded">
                {staffHoursSavedYearly} hrs / yr
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-900 space-y-3">
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Calculated Systems Impact Blueprint:</div>
            <div className="space-y-1.5 text-[11px] font-sans text-zinc-400 leading-relaxed">
              <p>
                1. <strong>Automated Qualifiers</strong> will handle initial inquiries immediately, avoiding manual drop-offs and reclaiming <span className="text-teal-400 font-bold">${capitalRecapturedMonthly.toLocaleString()}/mo</span>.
              </p>
              <p>
                2. <strong>Connected CRM Sync</strong> bypasses dual admin entry steps, shifting <span className="text-teal-400 font-bold">{hoursSavedMonthly} hrs/mo</span> of manual staff overhead.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 relative z-10 space-y-4">
          <a
            href="#contact"
            className="w-full py-3 rounded-lg bg-teal-500 hover:bg-teal-450 text-black font-semibold text-center text-xs tracking-wider uppercase block shadow-lg cursor-pointer"
          >
            Deploy Automated Systems Integration
          </a>
          <div className="text-[9.5px] text-zinc-600 font-mono text-center">
            *Projections are estimations modeled upon 120-day historical deployments.
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   TAB 4: STRATEGIC CONSULTATION BUILDER
   ============================================================================ */
function StrategicConsultationBuilderView({ onBlueprintSubmit }: { onBlueprintSubmit: (details: any) => void }) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [priority, setPriority] = useState<string>('');
  const [techContext, setTechContext] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [success, setSuccess] = useState(false);

  const handleNextStep = () => {
    if (step === 1 && priority) setStep(2);
    else if (step === 2 && techContext) setStep(3);
  };

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail) return;

    const summaryDetails = {
      clientName,
      clientEmail,
      priority,
      techContext,
      timestamp: new Date().toISOString()
    };
    onBlueprintSubmit(summaryDetails);
    setSuccess(true);
  };

  const handleRestart = () => {
    setStep(1);
    setPriority('');
    setTechContext('');
    setClientName('');
    setClientEmail('');
    setSuccess(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch font-sans">
      
      {/* Dynamic Form Core */}
      <div className="lg:col-span-7 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-7 h-7 rounded-sm bg-teal-500/10 border border-teal-500/30 text-teal-400 font-mono text-xs leading-none">
              {step}
            </span>
            <div className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">
              Consultation Qualification · Section {step} of 3
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!success ? (
              <div className="space-y-6">
                {step === 1 && (
                  <motion.div
                    key="consult_s1"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-5"
                  >
                    <h3 className="text-lg md:text-xl font-display font-medium text-white">
                      Select your organization\'s primary structural transformation vector:
                    </h3>
                    <div className="grid grid-cols-1 gap-2.5">
                      {[
                        { id: 'b2b', label: 'Revise & Elevate Brand Architecture', desc: 'Secure maximum authority positioning to justify premium contract pricing with corporate leads.' },
                        { id: 'lms', label: 'Deploy Academic Management / Student Portals', desc: 'Consolidate catalogs, parent correspondence grids, enrollments, and tuition pipelines.' },
                        { id: 'relays', label: 'Integrate Isolated Data Nodes & API Relays', desc: 'Link separate tools (databases, CRM systems, schedulers, communications) into unified loops.' },
                        { id: 'reports', label: 'Hardcode Executive Telemetry & KPI Boards', desc: 'Replace unaligned paper archives with database-governed real-time visual dashboards.' }
                      ].map((item) => {
                        const isChosen = priority === item.label;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setPriority(item.label)}
                            className={`p-4 rounded-xl border text-left transition-all duration-300 w-full ${
                              isChosen
                                ? 'bg-zinc-900 border-teal-500 text-white'
                                : 'bg-zinc-900/30 border-zinc-900 text-zinc-400 hover:border-zinc-800'
                            }`}
                          >
                            <span className="text-xs font-semibold block text-white mb-0.5">{item.label}</span>
                            <span className="text-[11px] text-zinc-400 block leading-relaxed">{item.desc}</span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        disabled={!priority}
                        onClick={handleNextStep}
                        className="px-6 py-2.5 rounded bg-teal-500 hover:bg-teal-400 text-black text-xs font-bold tracking-wider uppercase disabled:opacity-40"
                      >
                        Proceed To Technology Context
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="consult_s2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-5"
                  >
                    <h3 className="text-lg md:text-xl font-display font-medium text-white col-span-2">
                      What represents your current technology landscape & legacy databases?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { id: 'nocon', label: 'Disconnected SaaS Frameworks', desc: 'Relying heavily on separate instances of CRM, calendars, and spreadsheets without sync.' },
                        { id: 'legacy', label: 'Legacy SQL or Relational database Host', desc: 'Private local databases that need modern web-facing APIs, security, or portals.' },
                        { id: 'basic', label: 'Generic unstyled CMS (WordPress/Wix)', desc: 'Front-end presents basic content, but generates zero active administrative automations.' },
                        { id: 'paper', label: 'Traditional Paper or Spreadsheet queues', desc: 'Relying strictly on administrative memory and manual inbox files to handle registrations.' }
                      ].map((item) => {
                        const isChosen = techContext === item.label;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setTechContext(item.label)}
                            className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                              isChosen
                                ? 'bg-zinc-900 border-teal-500 text-white'
                                : 'bg-zinc-900/30 border-zinc-900 text-zinc-400 hover:border-zinc-800'
                            }`}
                          >
                            <span className="text-xs font-semibold block text-white mb-1">{item.label}</span>
                            <span className="text-[10px] text-zinc-400 leading-normal block">{item.desc}</span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-zinc-500 hover:text-white text-xs font-mono"
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        disabled={!techContext}
                        onClick={handleNextStep}
                        className="px-6 py-2.5 rounded bg-teal-500 hover:bg-teal-400 text-black text-xs font-bold tracking-wider uppercase disabled:opacity-40"
                      >
                        Proceed To Verification
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="consult_s3"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg md:text-xl font-display font-medium text-white">
                      Enter secure executive coordinates to reserve the audit strategy session:
                    </h3>
                    <p className="text-zinc-400 text-xs font-sans">
                      AXIORA X coordinates strict physical audits surrounding selected profiles: <strong>{priority}</strong>.
                    </p>

                    <form onSubmit={handleConsultSubmit} className="space-y-4 pt-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10.5px] font-mono text-zinc-500 uppercase tracking-wider mb-1">Your Full Name & Corporate Title</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Dean Montgomery"
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                            className="w-full bg-zinc-900/60 border border-zinc-850 rounded px-3.5 py-2.5 text-xs text-white focus:border-teal-500 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[10.5px] font-mono text-zinc-500 uppercase tracking-wider mb-1">Protected Enterprise / School Email</label>
                          <input
                            type="email"
                            required
                            placeholder="e.g. montgomery@college.edu"
                            value={clientEmail}
                            onChange={(e) => setClientEmail(e.target.value)}
                            className="w-full bg-zinc-900/60 border border-zinc-850 rounded px-3.5 py-2.5 text-xs text-white focus:border-teal-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="pt-4 flex justify-between items-center">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="text-zinc-500 hover:text-white text-xs font-mono"
                        >
                          ← Back
                        </button>
                        <button
                          type="submit"
                          className="px-6 py-3.5 bg-teal-500 hover:bg-teal-400 text-black text-xs font-bold tracking-wider uppercase rounded shadow-lg"
                        >
                          Submit Comprehensive systems Audit Request
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-5"
              >
                <div className="w-14 h-14 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-display font-medium text-white">Consultation Intake Form Secured</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed max-w-md mx-auto mt-2 font-sans">
                    We have synchronized your requirements matrix regarding <strong>{priority}</strong>. A strategic transformation consultant will review your coordinates (<em>{clientEmail}</em>) and coordinate a strict 1-on-1 operational audit in under 12 hours.
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={handleRestart}
                    className="px-5 py-2.5 rounded border border-zinc-900 bg-zinc-900/30 hover:bg-zinc-900 hover:text-white text-xs font-mono text-zinc-400 transition-colors"
                  >
                    Reset intake sequence
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* State Tracker Footer */}
        <div className="pt-6 border-t border-zinc-900 mt-8 flex flex-wrap gap-x-6 gap-y-1.5 text-[10px] font-mono text-zinc-500 uppercase">
          <div><span className="text-teal-500/80">Vector:</span> {priority || 'NOT_SELECTED'}</div>
          <div><span className="text-teal-500/80">Legacy Context:</span> {techContext || 'NOT_SELECTED'}</div>
        </div>
      </div>

      {/* Corporate Strategy Receipt Panel */}
      <div className="lg:col-span-5 bg-gradient-to-b from-zinc-950 to-zinc-900/10 border border-zinc-900 rounded-xl p-6.5 flex flex-col justify-between relative overflow-hidden">
        {/* Abstract Blueprint Grid */}
        <div className="absolute inset-0 bg-[#07080B] bg-[size:16px_16px] [background-image:linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-900">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
              <div className="text-[10px] font-mono font-bold tracking-widest text-[#F4F4F5]">STRATEGIC MATRIX DIAGRAM</div>
            </div>
            <FileText className="w-3.5 h-3.5 text-zinc-700" />
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-[9px] font-mono text-zinc-500 uppercase block mb-1">AUDIT STAGE:</span>
              <div className="text-xs font-semibold text-white">
                {step === 1 ? 'TRANSFORMATION DIALING' : step === 2 ? 'DATABASE SCOPING' : 'EXECUTIVE VERIFICATION'}
              </div>
            </div>

            <div>
              <span className="text-[9px] font-mono text-zinc-500 uppercase block mb-1">TRANSFORMATION FOCUS:</span>
              <div className="p-3 bg-zinc-950 border border-zinc-900/60 rounded text-[10.5px] font-mono text-zinc-300">
                {priority || 'Awaiting structural focus...'}
              </div>
            </div>

            <div>
              <span className="text-[9px] font-mono text-zinc-500 uppercase block mb-1">LEGACY PROFILE:</span>
              <div className="p-3 bg-zinc-950 border border-zinc-900/60 rounded text-[10.5px] font-mono text-zinc-300">
                {techContext || 'Awaiting technology landscape...'}
              </div>
            </div>
          </div>

          <div className="p-3.5 bg-teal-950/10 border border-teal-500/20 rounded-lg space-y-1">
            <div className="text-[10.5px] font-semibold text-white flex items-center gap-1 font-sans">
              <SecureIcon className="w-3.5 h-3.5 text-teal-400" />
              Corporate Compliance Security:
            </div>
            <p className="text-[10px] text-zinc-400 leading-relaxed font-sans">
              All submitted data maps, current operational challenges, and contact coordinates strictly fall under standard NDA security parameters, never shared with third-party vendors.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-zinc-900 mt-6 flex justify-between items-center text-[9px] font-mono text-zinc-600">
          <span>SLA SECURED INITIATION</span>
          <span>AXIORA X CLOUD TRANSFORMATION</span>
        </div>

      </div>

    </div>
  );
}
