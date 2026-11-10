'use client';

import Link from 'next/link';
import { 
  ShieldCheck, 
  XCircle, 
  CheckCircle2, 
  Scale, 
  Lock, 
  FileText, 
  ArrowRight, 
  Building
} from 'lucide-react';
import { SectionReveal } from '@/components/ui/section-reveal';
import { Button } from '@/components/ui/button';

export function TrustPledge() {
  return (
    <section id="trust-pledge" className="py-20 bg-[#080F1D] relative border-b border-[#1E2E48]">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Heading: Desktop 36-44px */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111D31] border border-[#1E2E48] text-[#38BDF8] text-xs font-semibold mb-4">
              <Scale className="w-4 h-4" />
              <span>Transparent & Regulated Practice</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-headline font-bold mb-4 text-[#F8FAFC] leading-tight">
              Our Honest Recovery Pledge: <br className="hidden sm:block" />
              <span className="text-[#38BDF8]">Protecting Victims From Secondary Scams</span>
            </h2>
            
            <p className="text-base md:text-[17px] text-[#94A3B8] leading-relaxed max-w-3xl mx-auto font-normal">
              Many fraud victims are targeted a second time by predatory &ldquo;recovery hackers&rdquo; on social media who promise instant, guaranteed refunds in exchange for upfront crypto fees. At EpicResurge, we adhere to strict legal transparency.
            </p>
          </SectionReveal>
        </div>

        {/* The Side-by-Side Comparison Box */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch mb-12">
          
          {/* Left Column: What We NEVER Do */}
          <SectionReveal delay={50} className="h-full">
            <div className="p-7 md:p-8 rounded-2xl bg-[#111D31] border border-red-500/25 flex flex-col justify-between h-full shadow-lg shadow-black/20">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-red-400">Scam Red Flags</span>
                    <h3 className="text-lg md:text-[20px] font-headline font-bold text-[#F8FAFC]">What EpicResurge Will NEVER Do</h3>
                  </div>
                </div>

                <ul className="space-y-4 text-sm md:text-[15px] text-[#94A3B8]">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                    <span>
                      <strong className="text-[#F8FAFC]">Never guarantee 100% recovery:</strong> Legitimate investigators cannot guarantee a refund before tracing where the funds settled. Anyone promising guaranteed recovery is lying.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                    <span>
                      <strong className="text-[#F8FAFC]">Never ask for your seed phrase or private keys:</strong> We will never ask for your passwords, recovery phrases, or remote wallet access.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                    <span>
                      <strong className="text-[#F8FAFC]">Never demand &ldquo;clearance taxes&rdquo;:</strong> We will never tell you that your funds are &ldquo;ready to release&rdquo; if you only deposit another 10% for IMF or anti-money laundering fees.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                    <span>
                      <strong className="text-[#F8FAFC]">Never claim to &ldquo;hack the blockchain&rdquo;:</strong> Blockchains cannot be &ldquo;hacked&rdquo; to reverse transactions. Legitimate recovery requires forensic tracing, exchange freezing, and legal process.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-red-500/15 text-xs text-red-400 font-medium">
                ⚠️ If any online service makes these promises, cease all contact immediately.
              </div>
            </div>
          </SectionReveal>

          {/* Right Column: What We GUARANTEE */}
          <SectionReveal delay={150} className="h-full">
            <div className="p-7 md:p-8 rounded-2xl bg-[#111D31] border border-[#10B981]/25 flex flex-col justify-between h-full shadow-lg shadow-black/20">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center text-[#10B981] shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-[#10B981]">Legal Standard & Accountability</span>
                    <h3 className="text-lg md:text-[20px] font-headline font-bold text-[#F8FAFC]">What EpicResurge GUARANTEES</h3>
                  </div>
                </div>

                <ul className="space-y-4 text-sm md:text-[15px] text-[#94A3B8]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
                    <span>
                      <strong className="text-[#F8FAFC]">Zero upfront evaluation fee:</strong> Our senior analysts review your transaction hashes and scenario at zero cost to confirm technical feasibility before anything else.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
                    <span>
                      <strong className="text-[#F8FAFC]">Delaware registered corporate entity:</strong> We are a verified entity registered with the Delaware Division of Corporations, bound by U.S. commercial and consumer standards.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
                    <span>
                      <strong className="text-[#F8FAFC]">Court-ready forensic evidence:</strong> We produce verified intelligence packages formatted for submission to cybercrime units, FBI IC3, Interpol, and global exchange compliance teams.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
                    <span>
                      <strong className="text-[#F8FAFC]">Direct human investigator contact:</strong> You receive a dedicated case reference and can speak directly to a named analyst via secure, confidential channels.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-[#10B981]/15 text-xs text-[#10B981] font-medium">
                ✅ Complete transparency, rigorous evidence, and zero false promises.
              </div>
            </div>
          </SectionReveal>

        </div>

        {/* 4 Trust Metrics Bar */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#111D31] border border-[#1E2E48] shadow-md">
          <div className="flex items-center gap-3 p-3">
            <Building className="w-6 h-6 text-[#38BDF8] shrink-0" />
            <div>
              <p className="text-xs text-[#94A3B8]">Entity Registration</p>
              <p className="text-sm font-headline font-bold text-[#F8FAFC]">State of Delaware</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3">
            <Lock className="w-6 h-6 text-[#10B981] shrink-0" />
            <div>
              <p className="text-xs text-[#94A3B8]">Security Standard</p>
              <p className="text-sm font-headline font-bold text-[#F8FAFC]">Air-Gapped Lab</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3">
            <FileText className="w-6 h-6 text-[#38BDF8] shrink-0" />
            <div>
              <p className="text-xs text-[#94A3B8]">Admissibility</p>
              <p className="text-sm font-headline font-bold text-[#F8FAFC]">Court-Ready Reports</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3">
            <ShieldCheck className="w-6 h-6 text-[#38BDF8] shrink-0" />
            <div>
              <p className="text-xs text-[#94A3B8]">Initial Assessment</p>
              <p className="text-sm font-headline font-bold text-[#F8FAFC]">100% Free & Confidential</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-10 text-center">
          <Link href="#forensic-intake">
            <Button size="lg" className="h-12 px-7 bg-[#2563EB] hover:bg-blue-600 text-[#F8FAFC] font-semibold rounded-xl shadow-md shadow-[#2563EB]/25 transition-all inline-flex items-center gap-2">
              <span>Have a Case Evaluated Honestly</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
