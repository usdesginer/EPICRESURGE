import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  MessageSquare, 
  FileSearch, 
  Compass, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Info 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How It Works | EpicResurge 4-Step Investigation Process',
  description: 'Understand exactly what happens after contacting EpicResurge. Our transparent 4-step investigation process sets realistic expectations from day one.',
};

const DETAILED_STEPS = [
  {
    stepNumber: "01",
    badge: "Initial Contact",
    title: "Tell us what happened",
    lead: "Describe the incident, when it happened, and how the money was sent. You can begin with a simple explanation.",
    body: "You do not need technical knowledge or industry jargon. Simply describe what was promised, what platform you were dealing with, and when the issue occurred. If you have transaction receipts, wallet addresses, bank wires, or emails, you can include them.",
    whatHappensNext: "Our intake desk acknowledges your case and opens a secure, confidential file.",
    icon: MessageSquare
  },
  {
    stepNumber: "02",
    badge: "Preliminary Review",
    title: "We review your information",
    lead: "We examine the details you provide and determine whether the case is suitable for further investigation.",
    body: "Our analysts perform an initial check of public records, transaction paths, and recipient accounts to evaluate whether the funds moved to identifiable institutions, centralized exchanges, or corporate accounts.",
    whatHappensNext: "You receive an objective feasibility review within 24 hours at zero upfront cost.",
    icon: FileSearch
  },
  {
    stepNumber: "03",
    badge: "Honest Assessment",
    title: "Understand your options",
    lead: "We explain what the available evidence shows, what can and cannot be established, and which next steps may be appropriate.",
    body: "We provide an honest, plain-English breakdown of your situation. If the evidence shows reachable accounts, we outline the recovery channels. If the evidence cannot establish identifiable touchpoints, we tell you frankly so you do not waste further time or money.",
    whatHappensNext: "You receive a clear written roadmap of realistic options without false promises.",
    icon: Compass
  },
  {
    stepNumber: "04",
    badge: "Informed Decision",
    title: "Decide how to proceed",
    lead: "If further assistance is appropriate, we explain the proposed work, costs, and limitations before you decide whether to continue.",
    body: "You will never face surprise fees or high-pressure tactics. All proposed investigative work, report deliverables, and timelines are explained and agreed upon in writing before any commitment is made.",
    whatHappensNext: "You remain in complete control of every decision throughout the engagement.",
    icon: ShieldCheck
  }
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[#080F1D] text-[#F8FAFC]">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-[#080F1D] to-[#0E1726] border-b border-[#1E2E48]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111D31] border border-[#1E2E48] text-[#38BDF8] text-xs font-semibold">
            <Clock className="w-4 h-4" />
            <span>Clear Process</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-[#F8FAFC] tracking-tight">
            Getting Started Is Simple
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
            You should never have to guess what happens after contacting an investigation firm. Here is our exact step-by-step methodology.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl space-y-12">
          
          <div className="space-y-6">
            {DETAILED_STEPS.map((step, idx) => {
              const Icon = step.icon;

              return (
                <div 
                  key={step.stepNumber}
                  className="p-6 sm:p-8 rounded-2xl bg-[#111D31] border border-[#1E2E48] shadow-lg shadow-black/20"
                >
                  <div className="grid md:grid-cols-12 gap-6 items-start">
                    
                    <div className="md:col-span-3 flex md:flex-col items-center md:items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl sm:text-4xl font-numeric font-extrabold text-[#38BDF8]">
                          {step.stepNumber}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-[#080F1D] border border-[#1E2E48] flex items-center justify-center text-[#38BDF8]">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8] bg-[#080F1D] px-2.5 py-1 rounded-md border border-[#1E2E48]">
                        {step.badge}
                      </span>
                    </div>

                    <div className="md:col-span-9 space-y-4">
                      <div>
                        <h2 className="text-xl sm:text-2xl font-headline font-bold text-[#F8FAFC] mb-2">
                          Step {idx + 1}: {step.title}
                        </h2>
                        <p className="text-base text-[#F8FAFC]/90 font-medium leading-relaxed mb-3">
                          {step.lead}
                        </p>
                        <p className="text-sm text-[#94A3B8] leading-relaxed font-normal">
                          {step.body}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#080F1D] border border-[#1E2E48] flex items-start gap-2.5 text-xs sm:text-sm text-[#94A3B8]">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span><strong className="text-[#F8FAFC]">What happens next:</strong> {step.whatHappensNext}</span>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Reassurance Banner */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-[#111D31] to-[#0E1726] border border-[#1E2E48] text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-[#F8FAFC]">
                Ready to describe your situation?
              </h3>
              <p className="text-sm text-[#94A3B8] max-w-lg">
                Submit what you know. There is zero upfront cost, no obligation, and 100% strict confidentiality.
              </p>
            </div>

            <Link href="/#forensic-intake" className="shrink-0 w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-12 px-7 bg-[#2563EB] hover:bg-blue-600 text-[#F8FAFC] font-semibold text-sm rounded-xl shadow-md flex items-center justify-center gap-2">
                <span>Start Step 1: Tell Us What Happened</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

