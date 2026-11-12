'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  ArrowRight, 
  Lock, 
  CheckCircle2, 
  AlertTriangle,
  GitBranch,
  Building2,
  Activity,
  Layers,
  Sparkles,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionReveal } from '@/components/ui/section-reveal';

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 500, y: 300 });
  const heroRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F8F7F4] border-b border-[#E8E5DF] min-h-[90vh] flex items-center transition-colors"
    >
      {/* 1. Subtle Interactive Intelligence Cursor Glow */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0"
        style={{
          background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(197, 160, 89, 0.04), transparent 75%)`
        }}
        aria-hidden="true"
      />

      {/* 2. Thin Data Network Background with Traveling Pulse Paths */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <svg 
          className="absolute w-full h-full opacity-35" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
        >
          <defs>
            <linearGradient id="heroLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#C5A059" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          
          {/* Subtle connecting ledger lines */}
          <path 
            d="M 50,150 Q 400,220 750,180 T 1400,280" 
            fill="none" 
            stroke="url(#heroLineGrad)" 
            strokeWidth="1.2" 
            strokeDasharray="4 6"
            className="animate-flow-dash"
          />
          <path 
            d="M 100,500 Q 600,380 1000,550 T 1450,420" 
            fill="none" 
            stroke="url(#heroLineGrad)" 
            strokeWidth="1" 
            strokeDasharray="6 8"
            className="animate-flow-dash"
            style={{ animationDuration: '2.5s' }}
          />

          {/* Network constellation dots */}
          <circle cx="400" cy="220" r="2.5" fill="#1D4ED8" opacity="0.3" />
          <circle cx="750" cy="180" r="3" fill="#C5A059" opacity="0.5" className="animate-pulse" />
          <circle cx="1000" cy="550" r="2.5" fill="#1D4ED8" opacity="0.3" />
        </svg>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#1D4ED8]/[0.02] rounded-full blur-[150px] animate-ambient-drift" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Direct Value Proposition & Purpose */}
          <div className="lg:col-span-7 space-y-6 md:space-y-7 text-left">
            <div>
              {/* Eyebrow Label: Soft Ivory + Champagne Gold */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F3] border border-[#E2D1A8] text-[#9E7D3B] text-xs sm:text-[13px] font-semibold tracking-wide uppercase mb-3 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
                <span>EPICRESURGE · INVESTIGATION & RECOVERY SUPPORT</span>
              </div>
              
              {/* Main Headline: Line-by-Line Upward Mask Animation */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] font-headline font-extrabold leading-[1.14] sm:leading-[1.1] tracking-tight text-[#0B1528]">
                <span className="block overflow-hidden py-0.5">
                  <span className="block animate-text-mask-up" style={{ animationDelay: '60ms' }}>
                    Lost Money to an Online Scam?
                  </span>
                </span>
                <span className="block overflow-hidden py-0.5">
                  <span className="block animate-text-mask-up text-[#1D4ED8]" style={{ animationDelay: '180ms' }}>
                    Let&apos;s Trace What Happened.
                  </span>
                </span>
                <span className="block overflow-hidden py-0.5">
                  <span className="block animate-text-mask-up text-[#1E293B]" style={{ animationDelay: '300ms' }}>
                    Explore Your Recovery Options.
                  </span>
                </span>
              </h1>
              
              {/* Clear, Everyday English Description */}
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal max-w-2xl pt-2">
                We help individuals and businesses investigate online scams, trace digital asset transactions, and understand the possible next steps towards recovering lost funds.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
                <Link href="#forensic-intake" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto h-13 px-8 text-base bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-semibold rounded-xl shadow-md shadow-blue-900/20 hover:shadow-lg hover:shadow-blue-900/30 transition-all duration-300 hover:scale-[1.015] active:scale-[0.985] flex items-center justify-center gap-2.5 group"
                  >
                    <span>Request a Free Case Assessment</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                <Link href="#services" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full sm:w-auto h-13 px-7 text-base border-[#DCD7CE] bg-[#FAF8F3] hover:bg-[#F3EFE6] text-[#0B1528] font-medium rounded-xl transition-all duration-300 hover:border-[#C5A059]/60 flex items-center justify-center gap-2 shadow-xs"
                  >
                    <span>Explore Our Services</span>
                  </Button>
                </Link>
              </div>

              {/* Short Trust Statement Underneath Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-[#475569] font-medium border-t border-[#E8E5DF] mt-6">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0" />
                  <span>Confidential enquiries</span>
                </div>
                <span className="hidden sm:inline text-slate-300">•</span>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0" />
                  <span>Evidence-based investigations</span>
                </div>
                <span className="hidden sm:inline text-slate-300">•</span>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0" />
                  <span>Clear guidance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Option A - Prominent Transaction Investigation Visualization */}
          <div className="lg:col-span-5 w-full">
            <SectionReveal delay={120}>
              <div className="relative p-5 sm:p-7 rounded-2xl bg-[#FAF8F3] border border-[#E8E5DF] shadow-xl shadow-slate-900/5 overflow-hidden w-full card-border-glow">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#E8E5DF]">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span className="text-xs font-bold text-[#0B1528] uppercase tracking-wider">
                      Transaction Investigation
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#1D4ED8] font-semibold bg-blue-50/80 px-2.5 py-1 rounded-md border border-blue-200">
                    <Activity className="w-3 h-3 text-[#1D4ED8]" />
                    <span>Live Ledger Trail</span>
                  </div>
                </div>

                {/* Visual Pathway: 3 Main Journey Nodes */}
                <div className="space-y-2 relative">
                  
                  {/* Step 1: Initial Transaction */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E8E5DF] hover:border-slate-300 transition-all">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-rose-50 border border-rose-200/80 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                          <AlertTriangle className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                              Initial Transaction
                            </span>
                            <span className="text-[11px] text-slate-500 font-mono">TX: 0x8a2f...39b1</span>
                          </div>
                          <p className="text-xs sm:text-sm font-bold text-[#0B1528]">
                            142,500 USDT / Disputed Transfer
                          </p>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            Funds sent to fraudulent unhosted wallet
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] text-rose-700 font-bold px-2 py-0.5 rounded bg-rose-50 border border-rose-200 shrink-0">
                        Reported
                      </span>
                    </div>
                  </div>

                  {/* Elegant Animated Flow Indicator */}
                  <div className="py-1 px-4 flex items-center justify-between text-slate-400 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] animate-ping" />
                      <span className="text-[11px] text-[#475569]">Tracing 3 intermediate hops & mixer exit</span>
                    </div>
                    <svg className="w-16 h-3 text-[#1D4ED8]" viewBox="0 0 64 12" fill="none">
                      <path d="M 0,6 L 64,6" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="animate-flow-dash" />
                    </svg>
                  </div>

                  {/* Step 2: Intermediate Transfer Analysis */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E8E5DF] hover:border-slate-300 transition-all">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5">
                          <GitBranch className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                              Intermediate Movement
                            </span>
                            <span className="text-[11px] text-slate-500 font-mono">3 Wallet Hops</span>
                          </div>
                          <p className="text-xs sm:text-sm font-bold text-[#0B1528]">
                            Split into Liquidity Pool Nodes
                          </p>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            Obfuscation bypassed via UTXO cluster mapping
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] text-blue-700 font-bold px-2 py-0.5 rounded bg-blue-50 border border-blue-200 shrink-0">
                        Traced
                      </span>
                    </div>
                  </div>

                  {/* Second Animated Flow Indicator */}
                  <div className="py-1 px-4 flex items-center justify-between text-slate-400 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0F766E] animate-ping" />
                      <span className="text-[11px] text-[#475569]">Destination exchange node identified</span>
                    </div>
                    <svg className="w-16 h-3 text-[#0F766E]" viewBox="0 0 64 12" fill="none">
                      <path d="M 0,6 L 64,6" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="animate-flow-dash" />
                    </svg>
                  </div>

                  {/* Step 3: Destination Exchange Identified */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-teal-50/60 border border-teal-200 hover:border-teal-300 transition-all">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-teal-100/80 text-[#0F766E] flex items-center justify-center shrink-0 mt-0.5">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-100/90 px-2 py-0.5 rounded border border-teal-300">
                              Destination Identified
                            </span>
                            <span className="text-[11px] text-teal-800 font-mono">Tier-1 Exchange</span>
                          </div>
                          <p className="text-xs sm:text-sm font-bold text-teal-950">
                            Verified KYC Deposit Cluster
                          </p>
                          <p className="text-[11px] text-teal-700 mt-0.5">
                            Formal evidentiary notice prepared for exchange compliance
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] text-teal-800 font-bold px-2 py-0.5 rounded bg-teal-100 border border-teal-300 shrink-0">
                        Actionable
                      </span>
                    </div>
                  </div>

                </div>

                {/* Card Subtitle Reassurance */}
                <div className="mt-4 pt-3.5 border-t border-[#E8E5DF] flex items-center justify-between text-xs text-[#475569]">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#1D4ED8]" />
                    <span>Evidence organized for legal & police reporting</span>
                  </div>
                  <span className="font-semibold text-[#0B1528]">Case Study Walkthrough</span>
                </div>

              </div>
            </SectionReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
