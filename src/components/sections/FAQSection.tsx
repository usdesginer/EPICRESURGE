'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionReveal } from "@/components/ui/section-reveal";
import { HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    question: "Can money lost to a cryptocurrency or broker scam really be recovered?",
    answer: "Yes, in many cases recovery is achievable. While scammers use private wallet addresses, cryptocurrency records are public and permanent. We follow the movement of the money until it reaches cryptocurrency exchanges or bank accounts with verified identity records, where formal notices can be submitted."
  },
  {
    question: "Does EpicResurge charge an upfront fee to evaluate my case?",
    answer: "No. Our initial case review and preliminary check are 100% free and confidential. We review your transaction records and evidence first to provide an honest, objective opinion on whether recovery is feasible before any formal work begins."
  },
  {
    question: "What information or evidence do I need to provide?",
    answer: "To start, all you need are transaction records, payment receipts, the name or website of the platform, and any messages or emails you received. If you don't have everything right now, submit what you have and our team will guide you."
  },
  {
    question: "How long does an investigation typically take?",
    answer: "Our preliminary review is completed within 24 to 48 hours. A complete investigation and evidentiary report typically takes between 1 and 3 weeks, depending on how many intermediate transactions the scammers used."
  },
  {
    question: "The broker says I must pay 'taxes' or a 'release fee' to withdraw. What should I do?",
    answer: "Stop immediately and do not send any more money. Legitimate financial regulators and real brokerages never require upfront payments or 'clearance deposits' to withdraw your own balance. This is a common advance fee fraud trap used when a person attempts to withdraw."
  },
  {
    question: "How does EpicResurge assist after the funds are traced?",
    answer: "Once our investigators locate the destination accounts, we prepare a clear written report. We assist you in presenting this report to law enforcement authorities, banks, and directly to the compliance teams at the receiving cryptocurrency exchanges to request an account hold."
  },
  {
    question: "How is my personal privacy and sensitive data protected?",
    answer: "EpicResurge is legally registered in the State of Delaware. All client communications, transaction records, and submitted evidence are protected under strict non-disclosure terms and stored in AES-256 encrypted digital vaults accessible only to assigned senior investigators."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-[#F8F7F4] relative border-b border-[#E8E5DF]">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        
        {/* Header */}
        <SectionReveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F3] border border-[#E2D1A8] text-[#9E7D3B] text-xs font-semibold mb-4 shadow-xs">
            <HelpCircle className="w-4 h-4 text-[#C5A059]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-[28px] md:text-[34px] font-headline font-[750] leading-[1.18] tracking-[-0.03em] mb-4 text-[#0B1528]">
            Answers to Common Questions
          </h2>
          <p className="text-base text-[#475569] max-w-2xl mx-auto leading-[1.65] font-normal">
            Clear, transparent answers to help you understand how asset tracing and fraud recovery works.
          </p>
        </SectionReveal>
        
        <Accordion type="single" collapsible className="w-full space-y-3.5 mb-14">
          {faqs.map((faq, idx) => (
            <AccordionItem 
              key={idx} 
              value={`item-${idx}`} 
              className="border border-[#E8E5DF] bg-[#FAF8F3] rounded-2xl px-6 shadow-xs transition-all duration-300 hover:border-[#C5A059]/60 hover:shadow-sm data-[state=open]:border-[#1D4ED8] data-[state=open]:ring-2 data-[state=open]:ring-blue-200/50 data-[state=open]:bg-white"
            >
              <AccordionTrigger className="text-left text-[17px] md:text-[18px] font-bold text-[#0B1528] py-5 hover:no-underline hover:text-[#1D4ED8] data-[state=open]:text-[#1D4ED8] transition-colors leading-[1.3]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#475569] text-base leading-[1.65] pb-6 font-normal">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <SectionReveal className="text-center">
          <div className="p-8 rounded-2xl bg-[#FAF8F3] border border-[#E8E5DF] max-w-2xl mx-auto text-center shadow-xs">
            <h3 className="text-lg md:text-[20px] font-headline font-bold text-[#0B1528] mb-2">Have a question not listed here?</h3>
            <p className="text-sm md:text-[15px] text-[#4A5568] mb-6 leading-relaxed font-normal">
              Our investigation specialists are available to answer your questions and review your case confidentially.
            </p>
            <Link href="#forensic-intake">
              <Button size="lg" className="h-12 px-7 bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-semibold rounded-xl shadow-sm transition-all inline-flex items-center gap-2">
                <span>Speak With an Investigator</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </SectionReveal>

      </div>
    </section>
  );
}
