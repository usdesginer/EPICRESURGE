'use client';

import { SectionReveal } from '@/components/ui/section-reveal';
import { 
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const REPORTS = [
  {
    id: "EPR-GUIDE-01",
    title: "How Scammers Use Crypto Mixers & How We Trace Them",
    category: "Blockchain Forensics",
    date: "Updated Weekly",
    abstract: "A simple guide explaining why cryptocurrency mixers do not guarantee 100% anonymity, and how heuristic clustering helps trace funds back to exchanges.",
    topics: ["Mixer Tracing", "Cluster Analysis", "Exchange Exit Nodes"]
  },
  {
    id: "EPR-GUIDE-02",
    title: "The Fake Broker Playbook: From Big 'Profits' to Frozen Withdrawals",
    category: "Forex & Trading Fraud",
    date: "Consumer Alert",
    abstract: "An inside breakdown of how unregulated broker platforms fabricate live trading charts and demand secondary 'tax fees' when victims ask to withdraw.",
    topics: ["Fake Profits", "Secondary Fee Traps", "Bank Wire Tracing"]
  },
  {
    id: "EPR-GUIDE-03",
    title: "Anatomy of Romance Scams: Protecting Your Digital Assets",
    category: "Social Engineering",
    date: "Special Briefing",
    abstract: "How fraudsters use dating apps and social messaging to build trust before introducing fraudulent investment portals, and how victims can break the cycle.",
    topics: ["Romance Schemes", "DeFi Drainers", "Identity Attribution"]
  }
];

export function IntelligenceReports() {
  return (
    <section id="intelligence" className="py-24 bg-[#080F1D] relative overflow-hidden border-b border-[#1E2E48]">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header: Desktop 36-44px */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <SectionReveal className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111D31] border border-[#1E2E48] text-[#38BDF8] text-xs font-semibold mb-4">
              <BookOpen className="w-4 h-4" />
              <span>Educational Knowledge Center</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-headline font-bold mb-4 text-[#F8FAFC]">
              Investigative Guides & Scam Briefings
            </h2>
            <p className="text-base md:text-[17px] text-[#94A3B8] leading-relaxed font-normal">
              Learn how online scams operate, how stolen assets move on-chain, and how forensic methods help recover funds.
            </p>
          </SectionReveal>
          
          <SectionReveal delay={100}>
            <Link href="#forensic-intake">
              <Button size="lg" className="h-12 px-6 bg-[#2563EB] hover:bg-blue-600 text-[#F8FAFC] font-semibold rounded-xl shadow-md transition-all flex items-center gap-2">
                <span>Request Case Guidance</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </SectionReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {REPORTS.map((report, idx) => (
            <SectionReveal key={report.id} delay={idx * 80} className="h-full">
              <Card className="h-full rounded-2xl border-[#1E2E48] bg-[#111D31] hover:border-slate-700 transition-all duration-200 flex flex-col justify-between shadow-lg shadow-black/20">
                <CardContent className="p-7 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-5 pb-3 border-b border-[#1E2E48]">
                      <span className="text-xs font-mono font-semibold text-[#38BDF8]">{report.id}</span>
                      <span className="text-[11px] font-semibold text-[#94A3B8] bg-[#0E1726] px-2.5 py-0.5 rounded border border-[#162338]">
                        {report.category}
                      </span>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-lg md:text-[19px] font-headline font-bold text-[#F8FAFC] mb-2 leading-snug">
                        {report.title}
                      </h3>
                      <p className="text-xs text-[#94A3B8] mb-4">{report.date}</p>
                    </div>

                    <p className="text-sm md:text-[15px] text-[#94A3B8] leading-relaxed mb-6 font-normal">
                      {report.abstract}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1E2E48]">
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {report.topics.map((topic, tIdx) => (
                        <span key={tIdx} className="text-[11px] font-medium text-[#94A3B8] bg-[#0E1726] border border-[#162338] px-2 py-0.5 rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
                    
                    <a href="mailto:investigator@epicresurge.com">
                      <Button variant="outline" className="w-full h-11 rounded-xl border-[#1E2E48] bg-[#0E1726] hover:bg-[#162540] text-[#F8FAFC] font-medium text-xs flex items-center justify-center gap-2">
                        <span>Request Free Investigation Briefing</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </SectionReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
