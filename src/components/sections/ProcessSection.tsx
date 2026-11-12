'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  FileSearch, 
  Compass, 
  ShieldCheck, 
  Clock, 
  Send, 
  Search, 
  FileCheck, 
  Info,
  Layers,
  Sparkles
} from 'lucide-react';
import { SectionReveal } from '@/components/ui/section-reveal';

interface ProcessStep {
  stepNumber: string;
  badge: string;
  title: string;
  shortName: string;
  description: string;
  details: string[];
  icon: any;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    badge: "Initial Contact",
    shortName: "Initial Assessment",
    title: "Tell us what happened",
    description: "Describe the incident, when it happened, and how the money was sent. You can begin with a simple explanation in plain English.",
    details: [
      "No technical knowledge or complicated terms required",
      "Share payment receipts, transaction details, or platform names",
      "100% confidential under strict privacy standards"
    ],
    icon: MessageSquare
  },
  {
    stepNumber: "02",
    badge: "Preliminary Review",
    shortName: "Investigation",
    title: "We review your information",
    description: "We examine the details you provide and determine whether the case is suitable for further investigation.",
    details: [
      "Initial check of available cryptocurrency and payment records",
      "Review of whether transactions connect to identifiable services",
      "Completed within 24 hours at zero upfront cost"
    ],
    icon: FileSearch
  },
  {
    stepNumber: "03",
    badge: "Honest Assessment",
    shortName: "Tracing & Analysis",
    title: "Understand your options",
    description: "We explain what the available evidence shows, what can and cannot be established, and which next steps may be appropriate.",
    details: [
      "Plain-English explanation of what the available records show",
      "Honest breakdown of what can and cannot be established",
      "Clear guidance on reporting to your bank, exchange, or authorities"
    ],
    icon: Compass
  },
  {
    stepNumber: "04",
    badge: "Informed Decision",
    shortName: "Recovery Support",
    title: "Decide how to proceed",
    description: "If further assistance is appropriate, we explain the proposed work, costs, and limitations before you decide whether to continue.",
    details: [
      "Complete clarity on proposed work, timelines, and costs",
      "Zero pressure to proceed with paid services",
      "You remain in complete control of every decision"
    ],
    icon: ShieldCheck
  }
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      stepRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // If element is around middle of screen
        if (rect.top <= window.innerHeight * 0.55 && rect.bottom >= window.innerHeight * 0.25) {
          setActiveStep(idx);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStep = (idx: number) => {
    setActiveStep(idx);
    const target = stepRefs.current[idx];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="process" className="py-24 bg-[#E4E8ED] relative border-b border-[#D0D7E2]">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F3] border border-[#E2D1A8] text-[#9E7D3B] text-xs font-semibold mb-4 shadow-xs">
              <Clock className="w-4 h-4 text-[#C5A059]" />
              <span>How It Works · Investigative Process</span>
            </div>
            
            <h2 className="text-[28px] md:text-[34px] font-headline font-[750] leading-[1.18] tracking-[-0.03em] mb-4 text-[#0B1528]">
              Our Investigation & Recovery Process
            </h2>
            
            <p className="text-base text-[#475569] leading-[1.65] max-w-2xl mx-auto font-normal">
              You should never have to guess what happens next. Here is how we evaluate your case and what an actual transaction investigation looks like in practice.
            </p>
          </SectionReveal>
        </div>

        {/* Investigative Process Track: Horizontal Progress Nodes */}
        <div className="max-w-5xl mx-auto mb-14">
          <SectionReveal>
            <div className="bg-[#FAF8F3] border border-[#D0D7E2] rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#D0D7E2]/80">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1D4ED8] animate-pulse" />
                  Investigative Progression Tracker
                </span>
                <span className="text-xs text-[#64748B] font-medium hidden sm:inline">
                  Step {activeStep + 1} of 4 Active
                </span>
              </div>

              {/* Connected Line & 4 Interactive Nodes */}
              <div className="relative pt-2 pb-4">
                {/* Background Line */}
                <div className="absolute top-7 left-6 right-6 h-[2px] bg-[#D0D7E2] pointer-events-none hidden sm:block" />
                
                {/* Animated Active Line */}
                <div 
                  className="absolute top-7 left-6 h-[2.5px] bg-gradient-to-r from-[#1D4ED8] to-[#38BDF8] pointer-events-none transition-all duration-500 hidden sm:block shadow-sm shadow-blue-500/50"
                  style={{
                    width: `calc(${activeStep * 33.33}% - 12px)`
                  }}
                />

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
                  {PROCESS_STEPS.map((step, idx) => {
                    const isActive = activeStep === idx;
                    const isCompleted = activeStep > idx;

                    return (
                      <button
                        key={step.stepNumber}
                        onClick={() => scrollToStep(idx)}
                        className="text-left group/node focus:outline-none cursor-pointer transition-all"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-numeric font-bold text-sm transition-all duration-300 ${
                            isActive 
                              ? 'bg-[#1D4ED8] text-white ring-4 ring-blue-200/70 shadow-md shadow-blue-900/20 scale-105' 
                              : isCompleted 
                              ? 'bg-[#FAF8F3] text-[#0F766E] border border-teal-200' 
                              : 'bg-white border border-[#D0D7E2] text-slate-500 group-hover/node:border-[#C5A059]'
                          }`}>
                            {isCompleted ? <CheckCircle2 className="w-5 h-5 text-[#0F766E]" /> : step.stepNumber}
                          </div>
                        </div>

                        <p className={`text-xs font-bold tracking-tight transition-colors ${
                          isActive ? 'text-[#1D4ED8]' : 'text-[#0B1528]'
                        }`}>
                          {step.shortName}
                        </p>
                        <p className="text-[11px] text-[#64748B] hidden sm:block mt-0.5 line-clamp-1">
                          {step.badge}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
        
        {/* Part A: The Four-Step Detailed Journey Cards */}
        <div className="max-w-5xl mx-auto space-y-6 mb-20">
          <SectionReveal>
            <div className="flex items-center justify-between mb-2 pb-2 border-b border-[#D0D7E2]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                Part A · The Four-Step Client Journey
              </span>
              <span className="text-xs text-[#64748B] font-medium">
                Transparent & predictable expectations
              </span>
            </div>
          </SectionReveal>

          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isHighlighted = activeStep === idx;

            return (
              <div 
                key={step.stepNumber} 
                ref={el => { stepRefs.current[idx] = el; }}
                className="transition-all duration-300"
              >
                <SectionReveal delay={idx * 60}>
                  <div className={`p-7 md:p-8 rounded-2xl bg-[#FAF8F3] border card-border-glow transition-all duration-300 shadow-xs group ${
                    isHighlighted 
                      ? 'border-[#1D4ED8] ring-2 ring-blue-200/60 shadow-md shadow-blue-900/10' 
                      : 'border-[#D0D7E2] hover:border-[#C5A059]/60'
                  }`}>
                    <div className="grid md:grid-cols-12 gap-6 items-start">
                      
                      {/* Step Number & Badge */}
                      <div className="md:col-span-3 flex md:flex-col items-center md:items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-3xl md:text-4xl font-numeric font-extrabold transition-colors ${
                            isHighlighted ? 'text-[#1D4ED8]' : 'text-slate-400 group-hover:text-[#1D4ED8]'
                          }`}>
                            {step.stepNumber}
                          </span>
                          <div className={`w-9 h-9 rounded-lg border flex items-center justify-center transition-colors ${
                            isHighlighted ? 'bg-[#1D4ED8] text-white border-[#1D4ED8]' : 'bg-blue-50/80 border-blue-200 text-[#1D4ED8]'
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                        </div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#475569] bg-white px-2.5 py-1 rounded-md border border-[#D0D7E2]">
                          {step.badge}
                        </span>
                      </div>

                      {/* Step Content */}
                      <div className="md:col-span-9 space-y-4">
                        <div>
                          <h3 className="text-xl md:text-[22px] font-headline font-bold text-[#0B1528] mb-2 leading-snug group-hover:text-[#1D4ED8] transition-colors">
                            Step {idx + 1}: {step.title}
                          </h3>
                          <p className="text-base md:text-[17px] text-[#334155] font-normal leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        {/* Supporting Details */}
                        <div className="pt-2 grid sm:grid-cols-2 gap-2.5">
                          {step.details.map((detail, dIdx) => (
                            <div key={dIdx} className="flex items-center gap-2 text-xs md:text-sm text-[#475569]">
                              <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </SectionReveal>
              </div>
            );
          })}
        </div>

        {/* Part B: Practical Investigation Walkthrough */}
        <div className="max-w-5xl mx-auto mb-16">
          <SectionReveal>
            <div className="rounded-2xl bg-[#FAF8F3] border border-[#D0D7E2] overflow-hidden shadow-sm card-border-glow">
              
              {/* Header */}
              <div className="p-6 md:p-8 border-b border-[#D0D7E2] bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8] bg-blue-50/80 px-3 py-1 rounded-md border border-blue-200 inline-block mb-2">
                    PART B · VISUAL INVESTIGATION EXAMPLE
                  </span>
                  <h3 className="text-xl md:text-2xl font-headline font-bold text-[#0B1528]">
                    How an Example Cryptocurrency Transaction Is Examined
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#64748B] font-medium">
                  <Clock className="w-4 h-4 text-[#1D4ED8]" />
                  <span>Standard Forensic Methodology</span>
                </div>
              </div>

              {/* 3 Step Visual Progression */}
              <div className="p-6 md:p-8 space-y-6">
                
                {/* Stage 1 */}
                <div className="rounded-xl bg-white border border-[#D0D7E2] p-5 sm:p-6 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0">
                      <Send className="w-5 h-5" />
                    </div>
                    
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Stage 1 · Outgoing Deposit</span>
                        <span className="text-xs text-slate-400 font-mono">Timestamp: Day 0</span>
                      </div>
                      <h4 className="text-base sm:text-lg font-headline font-bold text-[#0B1528]">
                        Victim Transfers Funds to the Deceptive Platform
                      </h4>
                      <p className="text-sm text-[#475569] leading-relaxed font-normal">
                        Funds leave your private wallet or exchange account and arrive at an address controlled by the scammers. On the victim&apos;s phone, the platform shows artificial balances, but the actual funds have already moved.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Animated Connecting Arrow */}
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white border border-[#D0D7E2] flex items-center justify-center text-[#1D4ED8] shadow-xs">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="rounded-xl bg-white border border-[#D0D7E2] p-5 sm:p-6 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50/80 border border-blue-200 text-[#1D4ED8] flex items-center justify-center shrink-0">
                      <Search className="w-5 h-5" />
                    </div>
                    
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">Stage 2 · Ledger Tracing & Cluster Mapping</span>
                        <span className="text-xs text-slate-400 font-mono">Days 1 – 3</span>
                      </div>
                      <h4 className="text-base sm:text-lg font-headline font-bold text-[#0B1528]">
                        Examining Transaction Hops & Bypassing Obfuscation
                      </h4>
                      <p className="text-sm text-[#475569] leading-relaxed font-normal">
                        Our investigators trace the transaction across blockchain ledgers. Scammers often split money across multiple intermediate wallets or attempt mixing. We follow these trails until funds reach a centralized service with identity verification.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Animated Connecting Arrow */}
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white border border-[#D0D7E2] flex items-center justify-center text-[#1D4ED8] shadow-xs">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="rounded-xl bg-teal-50/60 border border-teal-200 p-5 sm:p-6 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-teal-100/80 text-[#0F766E] flex items-center justify-center shrink-0">
                      <FileCheck className="w-5 h-5" />
                    </div>
                    
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-teal-800">Stage 3 · Evidentiary Dossier & Exchange Notification</span>
                        <span className="text-xs text-slate-400 font-mono">Formal Output</span>
                      </div>
                      <h4 className="text-base sm:text-lg font-headline font-bold text-[#0B1528]">
                        Documenting Destination Accounts & Supporting Action
                      </h4>
                      <p className="text-sm text-[#475569] leading-relaxed font-normal">
                        We compile an evidence report identifying the receiving accounts, transaction hashes, and timeline. You can provide this formal documentation to police, your bank, or exchange compliance teams to request an account freeze.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Disclaimer */}
              <div className="p-4 sm:p-5 bg-white border-t border-[#D0D7E2] text-xs text-[#64748B] flex items-center gap-2.5">
                <Info className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                <span>Every investigation is unique. Outcomes depend on available records and the timing of reporting.</span>
              </div>

            </div>
          </SectionReveal>
        </div>

        {/* Section Bottom CTA */}
        <div className="text-center">
          <SectionReveal>
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <Link href="#forensic-intake">
                <Button size="lg" className="h-13 px-8 text-base bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-semibold rounded-xl shadow-md transition-all flex items-center gap-2 group">
                  <span>Start Your Case with Step 1</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="h-13 px-7 text-base border-[#DCD7CE] bg-[#FAF8F3] hover:bg-[#F3EFE6] text-[#0B1528] font-medium rounded-xl transition-all shadow-xs">
                  <span>Explore Service Details</span>
                </Button>
              </Link>
            </div>
          </SectionReveal>
        </div>

      </div>
    </section>
  );
}
