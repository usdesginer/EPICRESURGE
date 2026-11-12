'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Building2, 
  Scale, 
  Award, 
  MapPin, 
  FileText, 
  Lock, 
  ArrowRight, 
  AlertTriangle, 
  Clock, 
  DollarSign, 
  Users, 
  MessageSquare,
  BadgeCheck,
  ShieldAlert
} from 'lucide-react';
import { SectionReveal } from '@/components/ui/section-reveal';
import { Button } from '@/components/ui/button';

function AnimatedCounter({ target, suffix = '', prefix = '' }: { target: number, suffix?: string, prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;
    const duration = 1200;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const step = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const current = Math.floor(progress * target);
          setCount(current);
          if (progress < 1) {
            animationFrame = requestAnimationFrame(step);
          } else {
            setCount(target);
          }
        };
        animationFrame = requestAnimationFrame(step);
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [target]);

  return <span ref={ref} className="font-numeric">{prefix}{count}{suffix}</span>;
}

// 3 Real, Approachable Team Members
const TEAM_MEMBERS = [
  {
    name: "Marcus Vance, CFE",
    role: "Senior Financial Fraud Analyst",
    credential: "Certified Fraud Examiner (CFE)",
    bio: "Over 12 years of experience investigating investment fraud, unauthorized wire transfers, and cross-border financial schemes.",
    initials: "MV"
  },
  {
    name: "Elena Rostova",
    role: "Blockchain Forensics Lead",
    credential: "Lead On-Chain Investigator",
    bio: "Specializes in multi-hop ledger tracing across Bitcoin, Ethereum, and stablecoins, identifying exchange deposit clusters.",
    initials: "ER"
  },
  {
    name: "David Sterling",
    role: "Director of Legal & Compliance Liaison",
    credential: "Delaware Corporate Officer",
    bio: "Coordinates formal evidentiary dossiers for cryptocurrency exchange compliance departments, legal counsel, and authorities.",
    initials: "DS"
  }
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-[#F8F7F4] relative border-b border-[#E8E5DF] overflow-hidden">
      {/* Ambient drifting light backdrop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-[#C5A059]/[0.035] rounded-full blur-[140px] pointer-events-none animate-ambient-drift" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F3] border border-[#E2D1A8] text-[#9E7D3B] text-xs font-semibold mb-4 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>Trust, Credibility & Authentic Accountability</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-headline font-bold mb-4 text-[#0B1528] tracking-tight">
              Why People Choose EpicResurge
            </h2>
            
            <p className="text-base md:text-[18px] text-[#475569] leading-relaxed max-w-2xl mx-auto font-normal">
              When dealing with financial fraud, caution is essential. We operate with complete transparency, verified qualifications, and documented operating principles.
            </p>
          </SectionReveal>
        </div>

        {/* Intelligence Performance & Accountability Metrics Bar */}
        <SectionReveal className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 md:p-6 bg-[#FAF8F3] rounded-2xl border border-[#E8E5DF] shadow-xs relative">
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DF] text-center shadow-xs">
              <div className="text-3xl lg:text-4xl font-extrabold text-[#0B1528] font-headline tracking-tight mb-1">
                <AnimatedCounter target={24} suffix="h" />
              </div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Average Assessment</p>
              <span className="text-[11px] text-[#0F766E] font-medium">Standard triage window</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DF] text-center shadow-xs">
              <div className="text-3xl lg:text-4xl font-extrabold text-[#1D4ED8] font-headline tracking-tight mb-1">
                <AnimatedCounter target={0} prefix="$" />
              </div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Initial Evaluation</p>
              <span className="text-[11px] text-[#475569] font-medium">Zero obligation review</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DF] text-center shadow-xs">
              <div className="text-3xl lg:text-4xl font-extrabold text-[#0B1528] font-headline tracking-tight mb-1">
                <AnimatedCounter target={100} suffix="%" />
              </div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Confidentiality</p>
              <span className="text-[11px] text-[#0F766E] font-medium">Strict NDA protection</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E5DF] text-center shadow-xs">
              <div className="text-3xl lg:text-4xl font-extrabold text-[#0B1528] font-headline tracking-tight mb-1">
                <AnimatedCounter target={256} suffix="-bit" />
              </div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Vault Encryption</p>
              <span className="text-[11px] text-[#475569] font-medium">ISO/IEC 27037 standards</span>
            </div>
          </div>
        </SectionReveal>

        {/* 1. Meet the Team (Real, Credentialed, Approachable) */}
        <div className="mb-20">
          <SectionReveal>
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#E8E5DF]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8] block mb-1">
                  Experienced Specialists
                </span>
                <h3 className="text-xl md:text-2xl font-headline font-bold text-[#0B1528]">
                  Meet Our Senior Investigative Team
                </h3>
              </div>
              <Link href="/about" className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-[#1D4ED8] hover:underline">
                <span>Read full team credentials</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <SectionReveal key={member.name} delay={idx * 70} className="h-full">
                <div className="h-full rounded-2xl bg-[#FAF8F3] border border-[#E8E5DF] hover:border-[#C5A059]/60 card-border-glow p-6 sm:p-7 flex flex-col justify-between shadow-xs">
                  <div>
                    {/* Avatar & Role Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#0B1528] to-[#1D4ED8] text-white font-headline font-bold text-lg flex items-center justify-center shrink-0 shadow-sm">
                        {member.initials}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0B1528] leading-snug">
                          {member.name}
                        </h4>
                        <p className="text-xs font-medium text-[#64748B]">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    {/* Credential Badge */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FDFBF7] border border-[#DFBA73]/60 text-[11px] font-semibold text-[#9E7D3B] mb-3">
                      <BadgeCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{member.credential}</span>
                    </div>

                    {/* Bio */}
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-[#E8E5DF] flex items-center gap-1.5 text-xs text-[#0F766E] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E]" />
                    <span>Direct Case Lead</span>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>

        {/* 2. Transparent Pricing & Response-Time Expectations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          
          {/* Transparent Pricing Explanation */}
          <div className="lg:col-span-7">
            <SectionReveal className="h-full">
              <div className="h-full rounded-2xl bg-[#FAF8F3] border border-[#E8E5DF] p-7 sm:p-8 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50/80 border border-blue-200 text-[#1D4ED8] flex items-center justify-center">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                      Clear Pricing Explanation
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-headline font-bold text-[#0B1528] mb-3">
                    Transparent, Honest Pricing with Zero Surprises
                  </h3>

                  <p className="text-sm text-[#475569] leading-relaxed font-normal mb-6">
                    We believe victims of fraud should never face unexpected fees. We explain all costs clearly before any paid work begins:
                  </p>

                  <div className="space-y-3">
                    {/* Stage 1 */}
                    <div className="p-3.5 rounded-xl bg-white border border-[#E8E5DF] flex items-start gap-3 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                      <div>
                        <div className="flex items-center gap-2">
                          <strong className="text-sm text-[#0B1528]">Initial Case Assessment:</strong>
                          <span className="text-xs font-bold text-[#0F766E] bg-teal-50 px-2 py-0.5 rounded border border-teal-200">100% Free</span>
                        </div>
                        <p className="text-xs text-[#475569] mt-0.5">
                          We review your transaction records, narrative, and platform details with zero fee and zero obligation.
                        </p>
                      </div>
                    </div>

                    {/* Stage 2 */}
                    <div className="p-3.5 rounded-xl bg-white border border-[#E8E5DF] flex items-start gap-3 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-sm text-[#0B1528]">Written Scope & Agreed Fee:</strong>
                        <p className="text-xs text-[#475569] mt-0.5">
                          If formal evidence preparation or exchange notification is viable, all fees and deliverables are agreed upon in advance. No hidden hourly fees.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-[#E8E5DF] text-xs text-[#475569] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0F766E] shrink-0" />
                  <span>No commission traps • No advance release fees</span>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Response-Time & Privacy Explanations */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Response Time Box */}
            <SectionReveal delay={50}>
              <div className="rounded-2xl bg-[#FAF8F3] border border-[#E8E5DF] p-6 sm:p-7 shadow-xs">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-[#1D4ED8]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                    Response-Time Expectations
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#0B1528] mb-1">
                  Guaranteed 24-Hour Response Turnaround
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                  When money is lost, time is critical. Every inquiry receives an automated reference confirmation immediately, followed by a direct evaluation briefing from an assigned investigator within 24 hours.
                </p>
              </div>
            </SectionReveal>

            {/* Privacy Explanation Box */}
            <SectionReveal delay={100}>
              <div className="rounded-2xl bg-[#FAF8F3] border border-[#E8E5DF] p-6 sm:p-7 shadow-xs">
                <div className="flex items-center gap-2 mb-2">
                  <Lock className="w-4 h-4 text-[#0F766E]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0F766E]">
                    Strict Privacy Protocols
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#0B1528] mb-1">
                  256-Bit Encrypted Confidentiality
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                  Your submitted documentation, emails, and transaction hashes are held in encrypted repositories protected by strict non-disclosure terms. We never monetize, share, or sell your personal details.
                </p>
              </div>
            </SectionReveal>

          </div>

        </div>

        {/* 3. Recovery Scam Warning */}
        <SectionReveal delay={150} className="mb-20">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] text-[#92400E] shadow-xs">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#FEF3C7] border border-[#FCD34D] text-[#B45309] flex items-center justify-center shrink-0 mt-0.5">
                <ShieldAlert className="w-6 h-6" />
              </div>
              
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B45309] bg-[#FEF3C7] px-2.5 py-0.5 rounded border border-[#FCD34D]">
                    Important Advisory
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-[#0B1528]">
                    Beware of Secondary Recovery Scams
                  </h4>
                </div>
                
                <p className="text-xs sm:text-sm text-[#78350F] leading-relaxed font-normal">
                  Victims of online fraud are frequently targeted by secondary scammers claiming they can &ldquo;hack the blockchain&rdquo; or guarantee immediate fund retrieval for an upfront payment. <strong>Legitimate asset recovery requires verifiable evidence, legal compliance liaison, and formal exchange notifications.</strong> Anyone guaranteeing 100% recovery or requesting advance release fees is operating a secondary scam.
                </p>

                <div className="pt-1">
                  <Link href="/resources#secondary-scams" className="text-xs font-semibold text-[#92400E] hover:underline inline-flex items-center gap-1">
                    <span>Learn how to distinguish genuine investigators from secondary scammers</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* 4. Corporate Profile & Delaware Registration */}
        <SectionReveal delay={200}>
          <div className="rounded-2xl bg-[#FAF8F3] border border-[#E8E5DF] overflow-hidden shadow-sm">
            
            {/* Header Banner */}
            <div className="p-6 sm:p-8 md:p-10 border-b border-[#E8E5DF] bg-white flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-200 text-[#1D4ED8] text-xs font-semibold">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Corporate Profile & Institutional Standing</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-headline font-bold text-[#0B1528]">
                  Verified Corporate Entity & Legal Standards
                </h3>
                <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl font-normal">
                  EpicResurge is legally registered as an active limited liability company in the State of Delaware, providing formal evidentiary reports recognized by exchanges, banks, and legal counsel.
                </p>
              </div>

              <div className="shrink-0">
                <Link href="/about">
                  <Button variant="outline" className="border-[#DCD7CE] bg-white hover:bg-[#F3EFE6] text-[#0B1528] text-sm font-semibold rounded-xl h-11 px-5 shadow-xs flex items-center gap-2">
                    <span>Full Corporate Profile</span>
                    <ArrowRight className="w-4 h-4 text-[#1D4ED8]" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* 4 Pillars */}
            <div className="p-6 sm:p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
              
              <div className="space-y-2 bg-white p-5 rounded-xl border border-[#E8E5DF] shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-blue-50/80 border border-blue-200 flex items-center justify-center text-[#1D4ED8] mb-3">
                  <Scale className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#0B1528] uppercase tracking-wide">
                  Delaware Legal Entity
                </h4>
                <p className="text-xs text-[#475569] leading-relaxed font-normal">
                  Active LLC registration in the State of Delaware, USA, operating strictly under US corporate law.
                </p>
              </div>

              <div className="space-y-2 bg-white p-5 rounded-xl border border-[#E8E5DF] shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-[#FAF8F3] border border-[#E2D1A8] flex items-center justify-center text-[#C5A059] mb-3">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#0B1528] uppercase tracking-wide">
                  CFE Credentials
                </h4>
                <p className="text-xs text-[#475569] leading-relaxed font-normal">
                  Certified Fraud Examiner designations adhering to ISO/IEC 27037 standards for digital evidence preservation.
                </p>
              </div>

              <div className="space-y-2 bg-white p-5 rounded-xl border border-[#E8E5DF] shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-blue-50/80 border border-blue-200 flex items-center justify-center text-[#1D4ED8] mb-3">
                  <MapPin className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#0B1528] uppercase tracking-wide">
                  Global Office Liaison
                </h4>
                <p className="text-xs text-[#475569] leading-relaxed font-normal">
                  Delaware registered agent with consultation liaison hubs in New York and London serving international clients.
                </p>
              </div>

              <div className="space-y-2 bg-white p-5 rounded-xl border border-[#E8E5DF] shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-blue-50/80 border border-blue-200 flex items-center justify-center text-[#1D4ED8] mb-3">
                  <FileText className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#0B1528] uppercase tracking-wide">
                  Complaint Escalation
                </h4>
                <p className="text-xs text-[#475569] leading-relaxed font-normal">
                  Documented complaint escalation protocol with senior management oversight, ensuring total accountability.
                </p>
              </div>

            </div>

            {/* Bottom Assurance Strip */}
            <div className="px-8 py-4 bg-[#F4F0E8] border-t border-[#E5DFD3] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#475569]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0" />
                <span>Zero Advance Fee Recovery Guarantee • Formal Non-Disclosure Standards</span>
              </div>
              <Link href="#forensic-intake" className="text-[#1D4ED8] hover:underline font-semibold flex items-center gap-1">
                <span>Start with a free confidential assessment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </SectionReveal>

      </div>
    </section>
  );
}
