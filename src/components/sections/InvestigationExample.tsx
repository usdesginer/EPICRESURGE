'use client';

import Link from 'next/link';
import { 
  ArrowRight, 
  Send, 
  Search, 
  FileCheck, 
  Info, 
  Clock, 
  ArrowDown 
} from 'lucide-react';
import { SectionReveal } from '@/components/ui/section-reveal';
import { Button } from '@/components/ui/button';

export function InvestigationExample() {
  return (
    <section id="investigation-example" className="py-24 bg-slate-50 relative border-b border-slate-200">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[380px] bg-[#2563EB]/[0.02] rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span>Case Walkthrough</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-headline font-bold mb-4 text-[#0F172A] tracking-tight">
              What an Investigation May Look Like
            </h2>
            
            <p className="text-base md:text-[18px] text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
              Instead of abstract claims, this walkthrough shows how an investigation actually looks from initial payment to structured findings.
            </p>
          </SectionReveal>
        </div>

        {/* Illustrative Example Card Container */}
        <div className="max-w-5xl mx-auto mb-12">
          <SectionReveal>
            <div className="rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-200/50 overflow-hidden">
              
              {/* Illustrative Example Banner Header */}
              <div className="p-6 md:p-8 border-b border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-md border border-blue-200 inline-block mb-2">
                    ILLUSTRATIVE EXAMPLE
                  </span>
                  <h3 className="text-xl md:text-2xl font-headline font-bold text-[#0F172A]">
                    Understanding a suspicious transaction
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <Clock className="w-4 h-4 text-[#2563EB]" />
                  <span>Standard Forensic Methodology</span>
                </div>
              </div>

              {/* 3 Step Visual Progression */}
              <div className="p-6 md:p-10 space-y-8 bg-white">
                
                {/* Step 1: Original Payment */}
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-6 md:p-7 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0">
                      <Send className="w-6 h-6" />
                    </div>
                    
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded border border-amber-200">
                          Stage 1
                        </span>
                        <h4 className="text-lg md:text-xl font-headline font-bold text-[#0F172A]">
                          Original payment
                        </h4>
                      </div>
                      
                      <p className="text-base text-slate-800 font-semibold leading-relaxed">
                        A person sends funds to a suspicious wallet.
                      </p>
                      
                      <p className="text-sm text-slate-600 leading-relaxed font-normal pt-1">
                        The investigation begins when money is sent from a personal wallet or bank account to an address provided by an unverified platform, broker, or individual. The client shares payment details, transaction timestamps, and communication records for an initial check.
                      </p>

                      <div className="pt-3 flex flex-wrap gap-2 text-xs text-slate-600">
                        <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-xs">Recorded: Transaction records & timestamps</span>
                        <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-xs">Recorded: Sent currency & amount</span>
                        <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-xs">Recorded: Platform promises & claims</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Flow Connector Arrow */}
                <div className="flex justify-center -my-3">
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#2563EB] shadow-xs">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                </div>

                {/* Step 2: Transaction Examination */}
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-5 sm:p-7 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start gap-4 sm:gap-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-[#2563EB] flex items-center justify-center shrink-0">
                      <Search className="w-6 h-6" />
                    </div>
                    
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100 px-2.5 py-0.5 rounded border border-blue-200">
                          Stage 2
                        </span>
                        <h4 className="text-lg md:text-xl font-headline font-bold text-[#0F172A]">
                          Transaction examination
                        </h4>
                      </div>
                      
                      <p className="text-base text-slate-800 font-semibold leading-relaxed">
                        Available records are examined to identify transaction connections.
                      </p>
                      
                      <p className="text-sm text-slate-600 leading-relaxed font-normal pt-1">
                        Following the movement of digital money across public records and bank accounts allows us to see where funds were transferred, check connected transactions, and determine if the trail connects to known cryptocurrency exchanges or businesses.
                      </p>

                      <div className="pt-3 flex flex-wrap gap-2 text-xs text-slate-600">
                        <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-xs">Followed: Money movement between wallets</span>
                        <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-xs">Checked: Connected transactions</span>
                        <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-xs">Identified: Cryptocurrency exchange accounts</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Flow Connector Arrow */}
                <div className="flex justify-center -my-3">
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#2563EB] shadow-xs">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                </div>

                {/* Step 3: Investigation Findings */}
                <div className="rounded-xl bg-emerald-50/50 border border-emerald-200 p-5 sm:p-7 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start gap-4 sm:gap-5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
                      <FileCheck className="w-6 h-6" />
                    </div>
                    
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded border border-emerald-200">
                          Stage 3
                        </span>
                        <h4 className="text-lg md:text-xl font-headline font-bold text-[#0F172A]">
                          Investigation findings
                        </h4>
                      </div>
                      
                      <p className="text-base text-slate-800 font-semibold leading-relaxed">
                        The findings are organized into a report explaining what the evidence supports.
                      </p>
                      
                      <p className="text-sm text-slate-600 leading-relaxed font-normal pt-1">
                        We organize the findings into a clear, written report. The report explains what the records show, maps out the path the money took, and outlines possible next steps for contacting your bank, cryptocurrency exchanges, and appropriate authorities.
                      </p>

                      <div className="pt-3 flex flex-wrap gap-2 text-xs text-slate-600">
                        <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-xs">Provided: Clear written report</span>
                        <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-xs">Provided: Easy-to-read transaction map</span>
                        <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-xs">Provided: Suggested next steps</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Explicit Disclaimer Notice: As explicitly requested */}
              <div className="p-6 md:p-7 bg-slate-50 border-t border-slate-200 flex items-start gap-4">
                <Info className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-xs md:text-sm font-semibold text-[#0F172A]">
                    Important Educational Disclosure
                  </p>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                    This is an example of an investigation process, not evidence of a specific recovered payment. Every incident is unique; the evidence that can be gathered depends strictly on the information, transaction records, and counterparties involved.
                  </p>
                </div>
              </div>

            </div>
          </SectionReveal>
        </div>

        {/* Bottom CTA Bar */}
        <div className="max-w-3xl mx-auto text-center">
          <SectionReveal>
            <p className="text-sm text-slate-600 mb-4 font-normal">
              Have transaction records you would like us to examine?
            </p>
            <Link href="#forensic-intake">
              <Button size="lg" className="h-12 px-7 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-sm transition-all inline-flex items-center gap-2">
                <span>Request a Preliminary Review</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </SectionReveal>
        </div>

      </div>
    </section>
  );
}
