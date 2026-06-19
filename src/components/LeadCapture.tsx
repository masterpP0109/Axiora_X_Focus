/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, Phone, Clock, Calendar, CheckSquare, MessageSquare, 
  ArrowRight, ShieldCheck, CheckCircle2, User, Globe, AlertCircle 
} from 'lucide-react';

export default function LeadCapture({ initialData }: { initialData?: any }) {
  const [formData, setFormData] = useState({
    name: initialData?.clientName || '',
    email: initialData?.clientEmail || '',
    orgName: '',
    projectType: 'system-integration',
    msg: '',
    urgency: 'medium'
  });
  
  const [submitted, setSubmitted] = useState(false);

  // Scheduling states
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);

  const dates = [
    { day: 'Mon', num: '22', full: 'June 22, 2026' },
    { day: 'Tue', num: '23', full: 'June 23, 2026' },
    { day: 'Wed', num: '24', full: 'June 24, 2026' },
    { day: 'Thu', num: '25', full: 'June 25, 2026' },
    { day: 'Fri', num: '26', full: 'June 26, 2026' }
  ];

  const timeSlots = [
    '09:00 AM UTC', '11:00 AM UTC', '01:30 PM UTC', '03:00 PM UTC', '04:30 PM UTC'
  ];

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTimeSlot) return;
    setBookingConfirmed(true);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#07080C] border-t border-zinc-900/60 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-indigo-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Column 1: Copy, High Trust Credentials, WhatsApp, Hotlines */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950 border border-zinc-850 text-[10px] font-mono text-teal-400 tracking-wider uppercase mb-4">
                Strategy & Intake
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight mb-6">
                Initiate Systems Consultation
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6 font-sans">
                AXIORA X acts as a long-term partner in technology, performance, and automation. We review organization architectures closely before hosting kickoff calls. Choose a pathway below to connect with our design team.
              </p>
            </div>

            {/* Direct Channels Cards */}
            <div className="space-y-4">
              <a 
                href="mailto:partner@axiorax.com" 
                className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/80 hover:border-zinc-700/80 hover:bg-zinc-900/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-500/5 border border-teal-500/20 flex items-center justify-center text-teal-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Secure Channels</div>
                  <div className="text-sm font-semibold text-white group-hover:text-teal-400 transition-colors">partner@axiorax.com</div>
                </div>
              </a>

              <a 
                href="https://wa.me/1555000212" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/80 hover:border-zinc-700/80 hover:bg-zinc-900/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-500/5 border border-teal-500/20 flex items-center justify-center text-teal-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">WhatsApp Executive Hotline</div>
                  <div className="text-sm font-semibold text-white group-hover:text-teal-400 transition-colors">+1 (555) 000-212</div>
                </div>
              </a>
            </div>

            {/* High Trust badge */}
            <div className="p-4 bg-zinc-950 border border-zinc-850 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-teal-400">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">Strict Integration Criteria</span>
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                AXIORA X operates with strict bandwidth allocations monthly. We specialize in high-efficiency custom systems for businesses, academic portals, and institutional workflows. No generic templates, no outsourcing.
              </p>
            </div>
          </div>

          {/* Column 2: Dual Entry Options (Consultation Scheduler & Short Intake Form) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-zinc-950/80 border border-zinc-900 rounded-2xl p-6 md:p-8 shadow-2xl">
              
              {/* Toggle Form / Booking */}
              <div className="grid grid-cols-2 border-b border-zinc-850 pb-6 mb-6 gap-3">
                <div className="text-left">
                  <div className="text-xs font-mono text-teal-400 mb-1">OPTION A</div>
                  <div className="text-sm font-semibold text-white">Interactive Scheduler</div>
                </div>
                <div className="text-left border-l border-zinc-850 pl-4">
                  <div className="text-xs font-mono text-zinc-500 mb-1">OPTION B</div>
                  <div className="text-sm font-semibold text-zinc-300">Intake Portfolio Form</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Visual Calendar Booking */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-zinc-300 font-semibold text-sm">
                    <Calendar className="w-4 h-4 text-teal-400" />
                    <span>Select Strategy Spot</span>
                  </div>

                  {!bookingConfirmed ? (
                    <form onSubmit={handleBookingSubmit} className="space-y-4">
                      {/* Dates Row */}
                      <div className="grid grid-cols-5 gap-2">
                        {dates.map((d) => (
                          <button
                            key={d.num}
                            type="button"
                            onClick={() => setSelectedDate(d.full)}
                            className={`p-2 rounded border text-center transition-all duration-300 ${
                              selectedDate === d.full
                                ? 'bg-teal-500/10 border-teal-500 text-teal-400'
                                : 'bg-zinc-900/40 border-zinc-850 text-zinc-400 hover:border-zinc-700 hover:text-white'
                            }`}
                          >
                            <div className="text-[10px] font-mono uppercase text-zinc-500">{d.day}</div>
                            <div className="text-xs font-bold font-display">{d.num}</div>
                          </button>
                        ))}
                      </div>

                      {/* Time slots list */}
                      <div className="space-y-2">
                        <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Available Time Slots</label>
                        <div className="grid grid-cols-1 gap-1.5">
                          {timeSlots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setSelectedTimeSlot(slot)}
                              className={`p-2 rounded text-left border text-xs transition-all duration-300 ${
                                selectedTimeSlot === slot
                                  ? 'bg-teal-500/10 border-teal-500/50 text-teal-400'
                                  : 'bg-zinc-900/30 border-zinc-850/80 text-zinc-300 hover:border-zinc-700/80 hover:text-white'
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={!selectedDate || !selectedTimeSlot}
                        className="w-full py-2.5 rounded bg-zinc-900 border border-zinc-850 text-white font-medium text-xs hover:border-teal-400 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        Reserve Call Time
                      </button>
                    </form>
                  ) : (
                    <div className="p-4 bg-teal-950/20 border border-teal-500/20 rounded-xl space-y-3">
                      <div className="flex items-center gap-2 text-teal-400">
                        <CheckCircle2 className="w-5 h-5" />
                        <span className="text-xs font-semibold uppercase font-mono">Spot Held Security Reserved</span>
                      </div>
                      <p className="text-[11px] text-zinc-300 leading-relaxed">
                        We have reserved <strong>{selectedTimeSlot}</strong> on <strong>{selectedDate}</strong>. Complete the details form on the right or check your email to complete registration.
                      </p>
                      <button
                        onClick={() => setBookingConfirmed(false)}
                        className="text-[10px] font-mono text-zinc-500 underline hover:text-white"
                      >
                        Change reserved time
                      </button>
                    </div>
                  )}
                </div>

                {/* Intake Text Fields */}
                <div>
                  {!submitted ? (
                    <form onSubmit={handleInquirySubmit} className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1.5">Your Name / Title</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                          <input
                            type="text"
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleFormChange}
                            placeholder="e.g. Dean Henderson / VP of Dev"
                            className="w-full bg-zinc-900/40 border border-zinc-850 rounded px-10 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500/50"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1.5">Corporate Email</label>
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          placeholder="executive@institution.edu"
                          className="w-full bg-zinc-900/40 border border-zinc-850 rounded px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500/50"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1.5">Project Scope</label>
                          <select
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleFormChange}
                            className="w-full bg-zinc-900/40 border border-zinc-[850] rounded px-2.5 py-2.5 text-[11px] text-zinc-300 focus:outline-none focus:border-teal-500/50"
                          >
                            <option value="system-integration">System Integration</option>
                            <option value="school-portal">School / LMS Suite</option>
                            <option value="crm-funnel">CRM Leads Pipeline</option>
                            <option value="custom-dashboards">Custom Dashboard</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1.5">Target Urgent</label>
                          <select
                            name="urgency"
                            value={formData.urgency}
                            onChange={handleFormChange}
                            className="w-full bg-zinc-900/40 border border-zinc-[850] rounded px-2.5 py-2.5 text-[11px] text-zinc-300 focus:outline-none focus:border-teal-500/50"
                          >
                            <option value="high">Immediate (Days)</option>
                            <option value="medium">Standard (Weeks)</option>
                            <option value="low">Planning Phase</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1.5">System Mandates / Context</label>
                        <textarea
                          name="msg"
                          rows={3}
                          value={formData.msg}
                          onChange={handleFormChange}
                          placeholder="Provide a brief context of your current databases, tech systems, or scaling challenges..."
                          className="w-full bg-zinc-900/40 border border-zinc-850 rounded px-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500/50 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-lg bg-teal-500 text-black font-semibold text-xs hover:bg-teal-405 transition-all duration-300 cursor-pointer shadow-lg flex items-center justify-center gap-1"
                      >
                        Submit Technical Inquiry Request
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  ) : (
                    <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl text-center space-y-4 animate-fade-in py-10">
                      <div className="w-12 h-12 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mx-auto">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">Intake Filed Successfully</h4>
                        <p className="text-[11px] text-zinc-400 mt-2 leading-relaxed">
                          Your coordinates have been directed to AXIORA X. A systems designer will analyze this against current server logs and follow up with a physical kickoff invitation in 12 hours.
                        </p>
                      </div>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-[10px] font-mono text-zinc-500 underline hover:text-white"
                      >
                        Submit another ticket
                      </button>
                    </div>
                  )}
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
