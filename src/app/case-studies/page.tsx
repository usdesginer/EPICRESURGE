import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { 
  FileCheck2, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  Info,
  GitBranch,
  Building,
  Landmark
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Studies & Investigation Examples | EpicResurge',
  description: 'Anonymized case studies and transaction walkthroughs demonstrating how EpicResurge examines evidence and coordinates with exchanges and authorities.',
};

const CASE_STUDIES = [
  {
    id: "case-01",
    tag: "Broker Withdrawal Fraud",
    title: "Unregulated Broker Demands Advance 'Tax' Clearance",
    challenge: "A client invested funds in an online brokerage that showed substantial account gains. When the client requested a withdrawal of $65,000, the broker refused and demanded an additional $12,000 as a 'liquidity unlock tax'.",
    investigation: "Our team examined the platform's infrastructure and established that the trading engine was a simulated offline script. We followed the client's original wire payments and cryptocurrency deposits to an identified centralized exchange account.",
    outcome: "We compiled an evidentiary dossier documenting the fake license, simulated transactions, and recipient exchange account. A formal report was submitted to the exchange's legal compliance team, resulting in an emergency administrative hold on the destination account.",
    icon: AlertTriangle
  },
  {
    id: "case-02",
    tag: "Cryptocurrency Investment Scheme",
    title: "Multi-Hop Digital Asset Tracing to Exchange Touchpoints",
    challenge: "A victim was persuaded to transfer 2.4 Bitcoin across multiple transactions to an automated 'yield generation pool'. The platform went offline 48 hours later, and communications were severed.",
    investigation: "Our analysts traced the Bitcoin movement across eight intermediate hops, identifying a clustering pattern indicating consolidated funds being routed through an aggregator to a major regulated exchange.",
    outcome: "We organized the transaction chain into a timestamped forensic flow map, linking the stolen assets directly to a KYC-verified deposit cluster. The report was accepted by cybercrime investigators and legal counsel to initiate formal freezing orders.",
    icon: GitBranch
  },
  {
    id: "case-03",
    tag: "Bank Wire Transfer Fraud",
    title: "Business Email Impersonation and Wire Interception",
    challenge: "An individual transferred funds for a property purchase after receiving fraudulent wire instructions from a compromised email account mimicking their escrow agent.",
    investigation: "Within 6 hours of notification, we audited the SWIFT payment path and identified the intermediary correspondent bank holding the wire before final settlement into the fraudster's shell company account.",
    outcome: "We prepared an immediate fraud alert packet and assisted the client in filing emergency recall petitions through the sending financial institution, successfully intercepting the wire before withdrawal.",
    icon: Landmark
  }
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#080F1D] text-[#F8FAFC]">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-[#080F1D] to-[#0E1726] border-b border-[#1E2E48]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111D31] border border-[#1E2E48] text-[#38BDF8] text-xs font-semibold">
            <FileCheck2 className="w-4 h-4" />
            <span>Investigation Walkthroughs</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-[#F8FAFC] tracking-tight">
            Case Studies & Real Examples
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
            These anonymized examples illustrate how financial fraud is examined, how evidence is preserved, and how formal channels are engaged.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl space-y-12">
          
          <div className="space-y-8">
            {CASE_STUDIES.map((study) => {
              const Icon = study.icon;

              return (
                <div 
                  key={study.id} 
                  className="p-6 sm:p-8 md:p-10 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-6 shadow-xl shadow-black/20"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1E2E48] pb-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] bg-[#0E1726] px-3 py-1 rounded-md border border-[#1E2E48] w-fit">
                      {study.tag}
                    </span>
                    <span className="text-xs text-[#94A3B8]">Anonymized Case Record</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-headline font-bold text-[#F8FAFC]">
                    {study.title}
                  </h2>

                  <div className="space-y-4 text-sm leading-relaxed">
                    <div className="p-4 rounded-xl bg-[#080F1D] border border-[#1E2E48] space-y-1">
                      <span className="text-xs font-bold text-red-400 uppercase tracking-wider">The Challenge:</span>
                      <p className="text-[#94A3B8]">{study.challenge}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#080F1D] border border-[#1E2E48] space-y-1">
                      <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider">Our Investigation:</span>
                      <p className="text-[#94A3B8]">{study.investigation}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#080F1D] border border-[#10B981]/30 space-y-1">
                      <span className="text-xs font-bold text-[#10B981] uppercase tracking-wider">The Resolution:</span>
                      <p className="text-[#F8FAFC]">{study.outcome}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Educational Disclaimer */}
          <div className="p-6 rounded-2xl bg-[#0E1726] border border-[#1E2E48] flex items-start gap-4 text-xs sm:text-sm text-[#94A3B8]">
            <Info className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-[#F8FAFC]">Educational Case Study Notice:</strong>
              <p>
                All case summaries are anonymized to protect client privacy. Past outcomes do not guarantee identical results for every case. The success of any investigation depends on the timing of reports, available records, and the jurisdictional policies of the institutions involved.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-5 p-8 rounded-2xl bg-[#111D31] border border-[#1E2E48]">
            <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC]">
              Have a Similar Case You Need Examined?
            </h3>
            <p className="text-sm text-[#94A3B8] max-w-lg mx-auto">
              Our specialists evaluate every case on its unique factual merits at zero upfront cost.
            </p>
            <Link href="/#forensic-intake" className="inline-block">
              <Button size="lg" className="h-12 px-7 bg-[#2563EB] hover:bg-blue-600 text-[#F8FAFC] font-semibold text-sm rounded-xl shadow-md flex items-center gap-2">
                <span>Start Free Case Review</span>
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

