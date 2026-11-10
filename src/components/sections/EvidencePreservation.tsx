'use client';

import { SectionReveal } from '@/components/ui/section-reveal';
import { 
  XCircle, 
  CheckCircle2, 
  Save, 
  AlertTriangle,
  Lock,
  Mail,
  ArrowRight, 
  FileCheck 
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const DO_LIST = [
  { label: "Blockchain Transaction IDs (TXIDs)", desc: "Copy the unique transaction hashes for all crypto transfers you sent or received." },
  { label: "Full Chat Histories", desc: "Export or screenshot all messages from WhatsApp, Telegram, dating apps, or emails." },
  { label: "Bank & Wire Transfer Receipts", desc: "Download official bank records showing recipient accounts and routing numbers." },
  { label: "Platform Screenshots", desc: "Capture your account balance, deposit history, and any frozen withdrawal alerts." },
  { label: "Website Links & Addresses", desc: "Save the exact URLs, broker portals, or mobile app download links used." }
];

const DONT_LIST = [
  { label: "Do NOT Pay Any More Fees", desc: "Never pay requested 'withdrawal fees', 'clearance taxes', or 'insurance deposits'." },
  { label: "Do NOT Alert the Scammers", desc: "Avoid threatening or tipping off the suspects before gathering your documentation." },
  { label: "Do NOT Delete Messages or Apps", desc: "Keep all software and chat histories intact; they hold critical forensic timestamps." },
  { label: "Beware of Unverified Recovery Traps", desc: "Avoid anonymous social media accounts promising guaranteed returns for advance fees." }
];

export function EvidencePreservation() {
  return (
    <section id="preservation" className="py-24 bg-[#080F1D] relative border-b border-[#1E2E48]">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header: Desktop 36-44px */}
          <SectionReveal className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111D31] border border-[#1E2E48] text-[#38BDF8] text-xs font-semibold mb-4">
              <FileCheck className="w-4 h-4" />
              <span>Evidence Guide</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-headline font-bold mb-4 text-[#F8FAFC]">
              What to Save & What to Avoid
            </h2>
            <p className="text-base md:text-[17px] text-[#94A3B8] leading-relaxed font-normal">
              Solid evidence is the foundation of any successful fund trace and recovery. Follow these guidelines to preserve critical records before they can be erased.
            </p>
          </SectionReveal>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            
            {/* What to Save */}
            <SectionReveal delay={100} className="h-full">
              <Card className="border-[#1E2E48] bg-[#111D31] p-6 md:p-8 rounded-2xl h-full flex flex-col justify-between shadow-lg shadow-black/20">
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#1E2E48]">
                    <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 text-[#10B981] flex items-center justify-center shrink-0">
                      <Save className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-[20px] font-headline font-bold text-[#F8FAFC]">What You Should Save</h3>
                      <p className="text-xs text-[#94A3B8]">Essential records to gather for your case review</p>
                    </div>
                  </div>

                  <div className="space-y-3.5">
                    {DO_LIST.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0E1726] border border-[#162338]">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-bold text-[#F8FAFC]">{item.label}</h4>
                          <p className="text-xs text-[#94A3B8] leading-relaxed mt-0.5 font-normal">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </SectionReveal>

            {/* What NOT to Do */}
            <SectionReveal delay={200} className="h-full">
              <Card className="border-[#1E2E48] bg-[#111D31] p-6 md:p-8 rounded-2xl h-full flex flex-col justify-between shadow-lg shadow-black/20">
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#1E2E48]">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
                      <XCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-[20px] font-headline font-bold text-[#F8FAFC]">Critical Mistakes to Avoid</h3>
                      <p className="text-xs text-[#94A3B8]">Actions that could harm your chances of recovery</p>
                    </div>
                  </div>

                  <div className="space-y-3.5">
                    {DONT_LIST.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0E1726] border border-red-500/15">
                        <AlertTriangle className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-bold text-red-200">{item.label}</h4>
                          <p className="text-xs text-[#94A3B8] leading-relaxed mt-0.5 font-normal">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-[#0E1726] border border-[#1E2E48] text-xs text-[#94A3B8] leading-relaxed flex items-center gap-3">
                  <Lock className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>All evidence shared with EpicResurge is protected under strict non-disclosure and encrypted protocols.</span>
                </div>
              </Card>
            </SectionReveal>

          </div>

          <SectionReveal className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-3.5">
              <Link href="#forensic-intake">
                <Button size="lg" className="h-12 px-7 bg-[#2563EB] hover:bg-blue-600 text-[#F8FAFC] font-semibold rounded-xl shadow-md transition-all flex items-center gap-2">
                  <span>Submit Your Evidence for Free Review</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href="mailto:investigator@epicresurge.com">
                <Button size="lg" variant="outline" className="h-12 px-7 border-[#1E2E48] bg-[#111D31] hover:bg-[#162540] text-[#F8FAFC] font-medium rounded-xl transition-all flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#38BDF8]" />
                  <span>Send Documents by Email</span>
                </Button>
              </a>
            </div>
          </SectionReveal>

        </div>
      </div>
    </section>
  );
}
