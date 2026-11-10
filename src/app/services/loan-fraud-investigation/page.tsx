import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { 
  Landmark, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  AlertTriangle, 
  FileText, 
  Scale,
  Building2,
  DollarSign
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Loan Fraud Investigation & Asset Recovery | EpicResurge',
  description: 'Forensic investigation of advance-fee loan schemes, predatory online lenders, fake collateral demands, and fraudulent commercial financing.',
};

export default function LoanFraudInvestigationPage() {
  return (
    <main className="min-h-screen bg-[#080F1D] text-[#F8FAFC]">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-[#080F1D] to-[#0E1726] border-b border-[#1E2E48]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111D31] border border-[#1E2E48] text-[#38BDF8] text-xs font-semibold">
            <Landmark className="w-4 h-4" />
            <span>Specialized Service</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-[#F8FAFC] tracking-tight">
            Loan Fraud Investigation
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
            We investigate advance-fee loan schemes, predatory digital lenders, fake escrow demands, and deceptive credit agreements to identify perpetrators and trace stolen capital.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl space-y-14">
          
          {/* 3 Core Questions */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">01. What It Means</span>
              <h3 className="text-lg font-bold text-[#F8FAFC]">Unmasking Fake Lenders</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Fraudulent loan schemes promise guaranteed financing, but require victims to pay advance "insurance", "clearing fees", or "crypto collateral" before disappearing with the money.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">02. How We Help</span>
              <h3 className="text-lg font-bold text-[#F8FAFC]">Tracing Stolen Deposits</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                We trace the wire transfers, cryptocurrency deposits, and payment processor routes used by fraudulent lenders to locate the destination beneficiary accounts.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">03. What to Do Next</span>
              <h3 className="text-lg font-bold text-[#F8FAFC]">Free Case Evaluation</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Provide loan agreements, fee payment receipts, and communications. Our team will review the lender's legitimacy and identify actionable recovery channels.
              </p>
            </div>
          </div>

          {/* Common Loan Fraud Modalities */}
          <div className="p-8 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-6">
            <h2 className="text-2xl font-headline font-bold text-[#F8FAFC]">
              Types of Loan Fraud We Investigate
            </h2>
            <div className="grid sm:grid-cols-2 gap-5 text-sm text-[#94A3B8]">
              <div className="p-5 rounded-xl bg-[#080F1D] border border-[#1E2E48] space-y-2">
                <span className="font-bold text-[#F8FAFC] flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-[#38BDF8]" /> Advance-Fee Loan Scams
                </span>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Borrowers are approved for large loans but told they must first pay "origination fees", "transfer insurance", or "tax clearances". Once paid, the lender disappears.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#080F1D] border border-[#1E2E48] space-y-2">
                <span className="font-bold text-[#F8FAFC] flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#38BDF8]" /> Clone Banking & Credit Institutions
                </span>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Syndicates clone real regulated banks or credit unions, using forged state registry numbers, deceptive domain names, and fabricated loan officers.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#080F1D] border border-[#1E2E48] space-y-2">
                <span className="font-bold text-[#F8FAFC] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#38BDF8]" /> Cryptocurrency Collateral Schemes
                </span>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Lenders demanding substantial crypto deposits (USDT, BTC) into an "escrow smart contract" or custodial wallet before disbursing cash funds.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#080F1D] border border-[#1E2E48] space-y-2">
                <span className="font-bold text-[#F8FAFC] flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#38BDF8]" /> Commercial & SBA Loan Deceptions
                </span>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Fraudulent brokerages targeting small business owners seeking commercial credit, extracting thousands in upfront documentation retainers.
                </p>
              </div>
            </div>
          </div>

          {/* Investigation Methodology */}
          <div className="p-8 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-6">
            <h2 className="text-2xl font-headline font-bold text-[#F8FAFC]">
              Our Loan Fraud Investigation Methodology
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-[#94A3B8]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
                <span><strong>License & Registry Verification:</strong> Auditing state licensing registries (NMLS, state banking commissions, FCA) to confirm illegal operation.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
                <span><strong>Banking & Wire Path Tracing:</strong> Identifying intermediary correspondent banks and receiving mule accounts used to launder upfront fees.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
                <span><strong>Recall & Freeze Liaison:</strong> Drafting urgent indemnity recall requests for beneficiary financial institutions under fraud reporting codes.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
                <span><strong>Regulatory & Police Filings:</strong> Compiling complete evidentiary packets formatted for the FTC, CFPB, state AGs, and local cybercrime divisions.</span>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="text-center space-y-5 p-8 rounded-2xl bg-[#0E1726] border border-[#1E2E48]">
            <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC]">
              Were You Deceived by an Online Loan or Lender?
            </h3>
            <p className="text-sm text-[#94A3B8] max-w-xl mx-auto">
              Our investigators can analyze the lender's contracts, trace where your advance payments moved, and explain available recovery channels.
            </p>
            <Button asChild className="bg-[#2563EB] hover:bg-blue-600 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md">
              <Link href="/#forensic-intake" className="flex items-center gap-2">
                <span>Start Free Case Review</span> <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

