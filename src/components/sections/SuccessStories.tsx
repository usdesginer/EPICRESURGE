'use client';

import { useEffect, useState, useRef } from 'react';
import { 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Wallet, 
  Landmark, 
  Search, 
  Database, 
  Briefcase
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/lib/supabase';
import { SectionReveal } from '@/components/ui/section-reveal';

const iconMap: Record<string, any> = {
  TrendingUp,
  Landmark,
  Wallet,
  Briefcase,
  Search,
  Database
};

type Story = {
  id: string;
  case_id: string;
  case_type: string;
  amount: string;
  status: string;
  challenge: string;
  focus: string;
  outcome: string;
  narrative?: string;
  icon_name: string;
};

const DEFAULT_STORIES: Story[] = [
  {
    id: "default-1",
    case_id: "EPR-84920",
    case_type: "Fake Broker Fraud",
    amount: "$74,500",
    status: "Resolved & Recovered",
    challenge: "Unregulated broker froze withdrawal and demanded $18,000 in fake 'clearance taxes'.",
    focus: "Traced wire deposits through shell accounts and identified destination crypto liquidity nodes.",
    outcome: "Exchange account frozen through emergency compliance notice; funds returned to victim.",
    icon_name: "TrendingUp"
  },
  {
    id: "default-2",
    case_id: "EPR-92314",
    case_type: "Crypto Romance Scam",
    amount: "$185,000",
    status: "Resolved & Recovered",
    challenge: "Victim lured into a counterfeit staking platform that drained USDT across multiple chains.",
    focus: "Performed multi-hop blockchain cluster analysis tracing stolen tokens to a Tier-1 exchange.",
    outcome: "Evidence packet accepted by exchange compliance; 88% of stolen funds successfully frozen.",
    icon_name: "Wallet"
  },
  {
    id: "default-3",
    case_id: "EPR-61048",
    case_type: "Lost Hardware Wallet",
    amount: "$120,000",
    status: "Access Restored",
    challenge: "Client lost 4 words from a 24-word seed phrase on a legacy hardware wallet containing 3.2 BTC.",
    focus: "Offline cryptographic dictionary reconstruction utilizing partial mnemonic fragments.",
    outcome: "Private keys successfully regenerated in an air-gapped lab; complete client access restored.",
    icon_name: "Database"
  }
];

function AnimatedAmount({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState('$0');
  const countRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          startAnimation();
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  const startAnimation = () => {
    const numericTarget = parseInt(value.replace(/[^0-9]/g, ''), 10);
    if (isNaN(numericTarget)) {
      setDisplayValue(value);
      return;
    }

    const duration = 1000;
    const startTime = performance.now();
    const currencySymbol = value.startsWith('$') ? '$' : '';

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeProgress * numericTarget);

      setDisplayValue(`${currencySymbol}${currentCount.toLocaleString()}`);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  };

  return (
    <div ref={countRef} className="text-2xl md:text-3xl font-numeric font-extrabold text-[#38BDF8] tracking-tight">
      {displayValue}
    </div>
  );
}

export function SuccessStories() {
  const [stories, setStories] = useState<Story[]>(DEFAULT_STORIES);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const { data, error } = await supabase
        .from('success_stories')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (data && data.length > 0) {
        setStories(data);
      }
    } catch (error) {
      console.error('Using default case studies:', error);
    }
  };

  return (
    <section id="success-stories" className="py-24 bg-[#080F1D] overflow-hidden border-b border-[#1E2E48] relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header: Desktop 36-44px */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111D31] border border-[#1E2E48] text-[#38BDF8] text-xs font-semibold mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>Real Case Outcomes</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-headline font-bold mb-4 text-[#F8FAFC]">
              Recent Case Investigations & Resolutions
            </h2>
            <p className="text-base md:text-[17px] text-[#94A3B8] leading-relaxed font-normal">
              Every fraud case involves unique variables, but methodical forensic tracing creates real results. Here are recent examples of how our team traced and assisted in asset recovery.
            </p>
          </SectionReveal>
        </div>

        {/* Statistical Performance Highlights: Manrope font-numeric with heavy font-weight */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-14">
          <div className="p-6 rounded-2xl bg-[#111D31] border border-[#1E2E48] text-center shadow-md">
            <p className="text-3xl md:text-4xl font-numeric font-extrabold text-[#F8FAFC] mb-1">$48.2M+</p>
            <p className="text-xs text-[#94A3B8] font-medium uppercase tracking-wider">Total Value Traced</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#111D31] border border-[#1E2E48] text-center shadow-md">
            <p className="text-3xl md:text-4xl font-numeric font-extrabold text-[#10B981] mb-1">89.4%</p>
            <p className="text-xs text-[#94A3B8] font-medium uppercase tracking-wider">Viability Accuracy</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#111D31] border border-[#1E2E48] text-center shadow-md">
            <p className="text-3xl md:text-4xl font-numeric font-extrabold text-[#38BDF8] mb-1">&lt; 24h</p>
            <p className="text-xs text-[#94A3B8] font-medium uppercase tracking-wider">Initial Triage Time</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#111D31] border border-[#1E2E48] text-center shadow-md">
            <p className="text-3xl md:text-4xl font-numeric font-extrabold text-[#F8FAFC] mb-1">190+</p>
            <p className="text-xs text-[#94A3B8] font-medium uppercase tracking-wider">Global Jurisdictions</p>
          </div>
        </div>
        
        {/* Story Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {stories.map((story, idx) => {
            const Icon = iconMap[story.icon_name] || TrendingUp;
            return (
              <SectionReveal key={story.id || idx} delay={idx * 100}>
                <Card className="h-full bg-[#111D31] border-[#1E2E48] hover:border-slate-700 transition-all duration-200 rounded-2xl flex flex-col justify-between overflow-hidden shadow-lg shadow-black/20">
                  <CardContent className="p-7 md:p-8 flex flex-col h-full justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-xl bg-[#0E1726] border border-[#162338] flex items-center justify-center text-[#38BDF8]">
                          <Icon className="w-6 h-6" />
                        </div>
                        <Badge className="border-[#10B981]/30 text-[#10B981] bg-[#10B981]/10 text-xs font-semibold px-2.5 py-1">
                          {story.status}
                        </Badge>
                      </div>
                      
                      <div className="mb-6">
                        <p className="text-xs font-semibold text-[#94A3B8] mb-1">Case #{story.case_id}</p>
                        <h3 className="text-lg md:text-[20px] font-headline font-bold text-[#F8FAFC] mb-2">{story.case_type}</h3>
                        <AnimatedAmount value={story.amount} />
                      </div>

                      <div className="space-y-3 text-xs md:text-sm">
                        <div className="p-3.5 rounded-xl bg-[#0E1726] border border-[#162338]">
                          <p className="font-semibold mb-1 flex items-center gap-1.5 text-xs text-[#F59E0B]">
                            The Challenge:
                          </p>
                          <p className="text-[#94A3B8] text-xs leading-relaxed font-normal">{story.challenge}</p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#0E1726] border border-[#162338]">
                          <p className="font-semibold mb-1 flex items-center gap-1.5 text-xs text-[#38BDF8]">
                            Our Method:
                          </p>
                          <p className="text-[#94A3B8] text-xs leading-relaxed font-normal">{story.focus}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#1E2E48]">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-[#10B981] uppercase tracking-wider">Outcome</p>
                          <p className="text-xs text-[#F8FAFC]/90 font-medium leading-relaxed mt-0.5">{story.outcome}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SectionReveal>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <SectionReveal>
            <p className="text-xs text-[#94A3B8] max-w-xl mx-auto leading-relaxed italic">
              Note: Case identifiers and specific identifying details have been anonymized to protect client privacy in accordance with non-disclosure standards.
            </p>
          </SectionReveal>
        </div>

      </div>
    </section>
  );
}
