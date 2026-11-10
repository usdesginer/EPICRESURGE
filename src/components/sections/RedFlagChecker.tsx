'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Lock, 
  RefreshCw 
} from 'lucide-react';
import { SectionReveal } from '@/components/ui/section-reveal';
import { Button } from '@/components/ui/button';

interface CheckItem {
  id: string;
  text: string;
  severity: 'high' | 'critical';
  scamType: string;
}

const RED_FLAGS: CheckItem[] = [
  {
    id: "tax_demand",
    text: "The platform demands a 10%–25% 'tax', 'liquidity unlock fee', or 'insurance deposit' before I can withdraw.",
    severity: 'critical',
    scamType: "Advance Fee Fraud / Pig Butchering"
  },
  {
    id: "fake_profit",
    text: "My account shows massive profits (2x to 10x), but my withdrawal requests remain in 'pending' or 'rejected' status.",
    severity: 'critical',
    scamType: "Rigged Broker Simulation"
  },
  {
    id: "online_contact",
    text: "I was introduced to the platform by someone I met on a dating app, WhatsApp, Instagram, or LinkedIn.",
    severity: 'high',
    scamType: "Sha Zhu Pan (Pig Butchering)"
  },
  {
    id: "remote_access",
    text: "The 'account manager' asked to install AnyDesk, TeamViewer, or remote screen-sharing software on my phone or computer.",
    severity: 'critical',
    scamType: "Device Takeover & Bank Intrusion"
  },
  {
    id: "changing_addresses",
    text: "Every time I made a deposit, the recipient crypto wallet address or recipient bank account name changed.",
    severity: 'high',
    scamType: "Mule Account / Mixer Inflow"
  },
  {
    id: "support_ghosting",
    text: "Customer service stopped responding, disabled my chat, or threatened to 'blacklist' me when I insisted on a refund.",
    severity: 'high',
    scamType: "Exit Scam & Threat Extortion"
  },
  {
    id: "task_recharging",
    text: "I was hired for a remote 'task optimization' job and had to deposit cryptocurrency to clear negative combo tasks.",
    severity: 'critical',
    scamType: "Recruitment Task Scam"
  },
  {
    id: "fake_recovery_hacker",
    text: "Someone on social media or Telegram claims they can 'hack the blockchain' to recover my funds within hours for an upfront fee.",
    severity: 'critical',
    scamType: "Secondary Recovery Scam"
  }
];

export function RedFlagChecker() {
  const [selectedFlags, setSelectedFlags] = useState<string[]>([]);

  const toggleFlag = (id: string) => {
    setSelectedFlags(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const resetAll = () => {
    setSelectedFlags([]);
  };

  const count = selectedFlags.length;
  
  let riskLevel = {
    title: "Diagnostic Ready",
    color: "text-[#94A3B8]",
    badge: "bg-[#0E1726] text-[#94A3B8] border-[#1E2E48]",
    description: "Check the warning signs you've observed to generate an immediate threat analysis and actionable guidance.",
    urgency: "None Selected"
  };

  if (count === 1) {
    riskLevel = {
      title: "Suspicious Activity Detected",
      color: "text-[#F59E0B]",
      badge: "bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/30",
      description: "You have selected a recognized indicator of fraudulent platforms. Exercising extreme caution is recommended before making any further transactions.",
      urgency: "Moderate Risk"
    };
  } else if (count >= 2 && count <= 3) {
    riskLevel = {
      title: "High Probability of Financial Fraud",
      color: "text-[#F59E0B]",
      badge: "bg-[#F59E0B]/15 text-[#F59E0B] border-[#F59E0B]/35",
      description: "Multiple confirmed scam indicators identified. The platform is very likely manipulating your balance and will not release funds voluntarily.",
      urgency: "High Risk"
    };
  } else if (count >= 4) {
    riskLevel = {
      title: "Critical Alert: Active Fraud Syndicate",
      color: "text-red-400",
      badge: "bg-red-500/15 text-red-400 border-red-500/30",
      description: "Severe fraudulent activity confirmed. The platform is operating an extortion scheme. Cease all payments immediately and preserve all digital evidence.",
      urgency: "Immediate Action Required"
    };
  }

  return (
    <section id="scam-checker" className="py-24 bg-[#080F1D] relative border-b border-[#1E2E48]">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header: Desktop 36-44px */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111D31] border border-[#F59E0B]/30 text-[#F59E0B] text-xs font-semibold mb-4">
              <ShieldAlert className="w-4 h-4" />
              <span>Interactive Diagnostic Tool</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-headline font-bold mb-4 text-[#F8FAFC]">
              Scam Symptom & Red Flag Checker
            </h2>
            
            <p className="text-base md:text-[17px] text-[#94A3B8] leading-relaxed max-w-2xl mx-auto font-normal">
              Not sure whether you are dealing with a legitimate trading delay or an intentional scam? Select the signs you have encountered below for an instant evaluation.
            </p>
          </SectionReveal>
        </div>

        {/* Checker Grid */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (7 cols): Checklist items */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between pb-2 px-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
                Select All Behaviors You Observed ({count} selected)
              </span>
              {count > 0 && (
                <button
                  type="button"
                  onClick={resetAll}
                  className="text-xs text-[#38BDF8] hover:underline flex items-center gap-1 font-medium transition-colors"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset selections</span>
                </button>
              )}
            </div>

            {RED_FLAGS.map((flag) => {
              const isChecked = selectedFlags.includes(flag.id);
              return (
                <button
                  key={flag.id}
                  type="button"
                  onClick={() => toggleFlag(flag.id)}
                  className={`w-full p-4 rounded-xl border text-left transition-all duration-200 flex items-start gap-3.5 ${
                    isChecked
                      ? 'border-[#38BDF8] bg-[#2563EB]/15 text-[#F8FAFC] shadow-sm'
                      : 'border-[#1E2E48] bg-[#111D31] text-[#94A3B8] hover:border-slate-700 hover:text-[#F8FAFC]'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                    isChecked 
                      ? 'bg-[#2563EB] border-[#2563EB] text-[#F8FAFC]' 
                      : 'border-[#1E2E48] bg-[#0E1726]'
                  }`}>
                    {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>

                  <div className="space-y-1">
                    <p className={`text-sm md:text-[15px] leading-relaxed ${isChecked ? 'font-semibold text-[#F8FAFC]' : 'font-normal text-[#F8FAFC]/90'}`}>
                      {flag.text}
                    </p>
                    <span className="text-[12px] text-[#38BDF8] font-medium inline-block">
                      Indicator: {flag.scamType}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column (5 cols): Live Diagnostic Results Box */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="p-6 md:p-8 rounded-2xl bg-[#111D31] border border-[#1E2E48] shadow-lg shadow-black/25 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#1E2E48]">
                <span className="text-xs uppercase font-bold tracking-wider text-[#94A3B8]">
                  Diagnostic Evaluation
                </span>
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${riskLevel.badge}`}>
                  {riskLevel.urgency}
                </span>
              </div>

              <div>
                <h3 className={`text-xl font-headline font-bold mb-2 ${riskLevel.color}`}>
                  {riskLevel.title}
                </h3>
                <p className="text-sm md:text-[15px] text-[#94A3B8] leading-relaxed font-normal">
                  {riskLevel.description}
                </p>
              </div>

              {/* Actionable Dos and Don'ts */}
              <div className="space-y-4 pt-1">
                <div className="p-4 rounded-xl bg-[#0E1726] border border-red-500/25 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider">
                    <XCircle className="w-4 h-4" />
                    <span>Immediate DO NOTS</span>
                  </div>
                  <ul className="text-xs md:text-sm text-[#94A3B8] space-y-1.5 pl-6 list-disc">
                    <li><strong className="text-[#F8FAFC]">DO NOT</strong> send any more money to &ldquo;unlock&rdquo; funds.</li>
                    <li><strong className="text-[#F8FAFC]">DO NOT</strong> install remote screen software (AnyDesk).</li>
                    <li><strong className="text-[#F8FAFC]">DO NOT</strong> pay recovery hackers on social media.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#0E1726] border border-[#10B981]/25 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#10B981] uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Essential Immediate Steps</span>
                  </div>
                  <ul className="text-xs md:text-sm text-[#94A3B8] space-y-1.5 pl-6 list-disc">
                    <li>Take full screenshots of all chat logs, deposit hashes, and balances.</li>
                    <li>Export crypto transaction IDs (TXIDs) from your exchange or wallet.</li>
                    <li>Have an accredited forensic team audit the destination wallets.</li>
                  </ul>
                </div>
              </div>

              {/* Direct Next Step */}
              <div className="pt-2">
                <Link href="#forensic-intake" className="block w-full">
                  <Button className="w-full h-12 bg-[#2563EB] hover:bg-blue-600 text-[#F8FAFC] font-semibold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2">
                    <span>Request Free Case Assessment</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>

                <p className="text-center text-[12px] text-[#94A3B8] mt-3 flex items-center justify-center gap-1.5 font-normal">
                  <Lock className="w-3 h-3 text-[#10B981]" />
                  <span>Delaware registered • 100% Confidential • Zero upfront fee</span>
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
