'use client';

import Link from 'next/link';
import { 
  ShieldCheck, 
  ArrowRight, 
  Landmark, 
  Scale, 
  Lock, 
  FileCheck2, 
  Coins, 
  AlertCircle,
  Building2,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { SectionReveal } from '@/components/ui/section-reveal';
import { Button } from '@/components/ui/button';

const RECOVERY_CHANNELS = [
  {
    id: "exchange-freezes",
    title: "Exchange Account Freezes & Interdictions",
    subtitle: "Centralized Exchange Compliance Desks",
    icon: Coins,
    description: "Scammers ultimately must cash out stolen cryptocurrency for fiat currency at centralized exchanges (Binance, OKX, Kraken, Coinbase). We serve formal forensic interdiction packets to freeze the perpetrator's account before liquidation.",
    highlights: [
      "Emergency hold requests served directly to exchange legal teams",
      "Identification of perpetrator KYC identity and cash-out nodes",
      "Preservation of tied fiat and crypto balances pending restitution"
    ],
    outcome: "Funds frozen on-exchange and preserved for legal recovery"
  },
  {
    id: "banking-recalls",
    title: "Banking Recalls & Wire Transfer Interventions",
    subtitle: "Correspondent Banking Networks",
    icon: Landmark,
    description: "For wire transfers sent to fraudulent brokers or imposter accounts, we trace intermediary correspondent banking hops and deploy formal recall petitions and SWIFT hold notices through cooperating financial institutions.",
    highlights: [
      "Intermediary bank node tracing across 190+ jurisdictions",
      "Immediate submission of SWIFT recall & fraud alert notices",
      "Identification of shell company beneficiary accounts"
    ],
    outcome: "Suspicious wire routes frozen in correspondent holding accounts"
  },
  {
    id: "legal-subpoenas",
    title: "Court-Ready Evidence & Law Enforcement Subpoenas",
    subtitle: "Legal Evidentiary Packages",
    icon: Scale,
    description: "We compile verified, timestamped forensic evidence packages that meet federal and international legal standards, allowing law enforcement (FBI IC3, Interpol, Europol) and counsel to issue freezing orders and court restitution.",
    highlights: [
      "Formatted specifically for cybercrime prosecutors and civil litigators",
      "Unbroken chain of custody with certified forensic timestamps",
      "Direct cooperation with assigned detectives and legal counsel"
    ],
    outcome: "Legally enforceable restitution and asset return orders"
  },
  {
    id: "air-gapped-lab",
    title: "Air-Gapped Cryptographic Restitution",
    subtitle: "Hardware & Key Access Restoration",
    icon: Lock,
    description: "For clients whose funds are trapped in inaccessible wallets due to lost passphrases, damaged backup sheets, or corrupted keystores, our physical air-gapped lab reconstructs missing cryptographic elements safely offline.",
    highlights: [
      "Zero-knowledge physical lab with zero internet connectivity",
      "Algorithmic reconstruction of partial seed phrases and PINs",
      "Secure cold storage transfer to a brand new client-owned address"
    ],
    outcome: "Direct restoration of full client wallet ownership"
  }
];

export function RecoverySolutions() {
  return (
    <section id="recovery-solutions" className="py-24 bg-[#080F1D] relative border-b border-[#1E2E48]">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header: Desktop 36-44px */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111D31] border border-[#1E2E48] text-[#38BDF8] text-xs font-semibold mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>How We Recover Your Funds</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-headline font-bold mb-4 text-[#F8FAFC]">
              How Scam Funds Are Actually Recovered
            </h2>
            
            <p className="text-base md:text-[17px] text-[#94A3B8] leading-relaxed max-w-2xl mx-auto font-normal">
              Tracing is only the first step. True recovery requires holding perpetrator accounts accountable. Here are the four legal and technical channels we use to recover your stolen funds.
            </p>
          </SectionReveal>
        </div>

        {/* 4 Core Recovery Channels */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto mb-14">
          {RECOVERY_CHANNELS.map((channel, idx) => {
            const Icon = channel.icon;
            return (
              <SectionReveal key={channel.id} delay={idx * 80} className="h-full">
                <div className="p-7 md:p-8 rounded-2xl bg-[#111D31] border border-[#1E2E48] hover:border-slate-700 transition-all duration-200 h-full flex flex-col justify-between shadow-lg shadow-black/20">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#0E1726] border border-[#162338] text-[#38BDF8] flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold text-[#38BDF8] bg-[#0E1726] px-2.5 py-1 rounded-md border border-[#1E2E48]">
                        {channel.subtitle}
                      </span>
                    </div>

                    <h3 className="text-lg md:text-[21px] font-headline font-bold text-[#F8FAFC] mb-3">
                      {channel.title}
                    </h3>

                    <p className="text-sm md:text-[15px] text-[#94A3B8] leading-relaxed mb-6 font-normal">
                      {channel.description}
                    </p>

                    <div className="space-y-2.5 mb-6 pt-4 border-t border-[#1E2E48]">
                      {channel.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#F8FAFC]/90">
                          <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#1E2E48]">
                    <div className="p-3 rounded-xl bg-[#0E1726] border border-[#162338] mb-4">
                      <span className="text-[11px] font-medium text-[#94A3B8] block mb-0.5">Recovery Outcome:</span>
                      <span className="text-xs font-bold text-[#10B981] flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                        <span>{channel.outcome}</span>
                      </span>
                    </div>

                    <Link href="#forensic-intake" className="block w-full">
                      <Button className="w-full h-11 bg-[#2563EB] hover:bg-blue-600 text-[#F8FAFC] font-semibold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2">
                        <span>Check Feasibility for This Recovery Method</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>

        {/* Free Consultation Review Guarantee Banner */}
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <div className="p-7 md:p-9 rounded-2xl bg-[#111D31] border border-[#1E2E48] shadow-lg shadow-black/25 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1.5 text-center sm:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-[#10B981] flex items-center justify-center sm:justify-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  Zero Financial Risk Assessment
                </span>
                <h4 className="text-xl md:text-2xl font-headline font-bold text-[#F8FAFC]">
                  Find Out What Recovery Route Fits Your Case
                </h4>
                <p className="text-xs md:text-sm text-[#94A3B8] max-w-lg leading-relaxed font-normal">
                  Our investigators analyze your transaction hashes, verify the receiving nodes, and tell you honestly whether your funds can be frozen before you make any commitment.
                </p>
              </div>

              <div className="shrink-0 w-full sm:w-auto">
                <Link href="#forensic-intake" className="block w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto h-12 px-7 bg-[#2563EB] hover:bg-blue-600 text-[#F8FAFC] font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-2">
                    <span>Start Free Recovery Review</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>

      </div>
    </section>
  );
}

