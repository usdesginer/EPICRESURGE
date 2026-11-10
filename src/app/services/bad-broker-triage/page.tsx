import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { 
  ShieldAlert, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  AlertTriangle, 
  FileText, 
  Lock, 
  TrendingDown, 
  Ban,
  Clock
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Bad Broker Triage & Withdrawal Recovery | EpicResurge',
  description: 'Emergency forensic intervention for victims of unregulated brokers, blocked account withdrawals, manipulated margins, and artificial tax fee demands.',
};

export default function BadBrokerTriagePage() {
  return (
    <main className="min-h-screen bg-[#080F1D] text-[#F8FAFC]">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-[#080F1D] to-[#0E1726] border-b border-[#1E2E48]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111D31] border border-[#1E2E48] text-[#38BDF8] text-xs font-semibold">
            <ShieldAlert className="w-4 h-4" />
            <span>Specialized Service</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-[#F8FAFC] tracking-tight">
            Bad Broker Triage
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
            Urgent assessment and strategic intervention when an unverified broker or trading platform blocks your withdrawals, demands fabricated clearance fees, or locks your account.
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
              <h3 className="text-lg font-bold text-[#F8FAFC]">Artificial Roadblocks</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Rogue brokers permit seamless deposits but fabricate arbitrary reasons to prevent withdrawals—claiming unpaid taxes, liquidity fees, or AML verification holds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">02. How We Intervene</span>
              <h3 className="text-lg font-bold text-[#F8FAFC]">Forensic Audit & Pressure</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                We preserve digital evidence of simulated trades, identify payment gateway merchants, and draft formal regulatory complaints that establish criminal liability.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">03. Critical Warning</span>
              <h3 className="text-lg font-bold text-[#F8FAFC]">Do Not Pay More</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Never send additional funds to "unlock" an account. Legitimate brokers never demand advance tax payments or release fees to execute client withdrawals.
              </p>
            </div>
          </div>

          {/* Warning Signs We Audit */}
          <div className="p-8 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-6">
            <h2 className="text-2xl font-headline font-bold text-[#F8FAFC]">
              Classic Bad Broker Tactics We Triage
            </h2>
            <div className="grid sm:grid-cols-2 gap-5 text-sm text-[#94A3B8]">
              <div className="p-5 rounded-xl bg-[#080F1D] border border-[#1E2E48] space-y-2">
                <span className="font-bold text-[#F8FAFC] flex items-center gap-2">
                  <Lock className="w-4 h-4 text-rose-500" /> Advance Tax & Clearance Demands
                </span>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  The broker claims you must wire an additional 15% to 30% to satisfy "international financial regulation" or "withholding taxes" before your profits can be released.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#080F1D] border border-[#1E2E48] space-y-2">
                <span className="font-bold text-[#F8FAFC] flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-amber-500" /> Manipulated Spread & Ghost Trades
                </span>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  When you request a withdrawal, sudden simulated slippage or unapproved trades wipe your account balance, followed by an aggressive margin call demand.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#080F1D] border border-[#1E2E48] space-y-2">
                <span className="font-bold text-[#F8FAFC] flex items-center gap-2">
                  <Ban className="w-4 h-4 text-purple-500" /> Unregistered Offshore Entities
                </span>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Platforms claiming high-level licenses in Tier-1 jurisdictions, while their terms of service quietly bind victims to unregulated offshore shell entities.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#080F1D] border border-[#1E2E48] space-y-2">
                <span className="font-bold text-[#F8FAFC] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#38BDF8]" /> Aggressive Account Lockouts
                </span>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Account managers who were available 24/7 suddenly become unreachable, disable live chat access, or terminate login permissions following a withdrawal request.
                </p>
              </div>
            </div>
          </div>

          {/* Triage Deliverables */}
          <div className="p-8 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-6">
            <h2 className="text-2xl font-headline font-bold text-[#F8FAFC]">
              Our Triage & Evidence Preservation Protocol
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-[#94A3B8]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
                <span><strong>Regulatory Cross-Check:</strong> Checking broker entities against warning registers published by the SEC, CFTC, FCA, CySEC, and ASIC.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
                <span><strong>Server & Log Preservation:</strong> Cryptographically preserving web console records, falsified balance sheets, and transaction receipts.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
                <span><strong>Merchant & Gateway Identification:</strong> Pinpointing the third-party credit card processing gateways or bank accounts used to accept client funds.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
                <span><strong>Chargeback & Legal Dossier:</strong> Drafting formal evidence reports ready for submission to card-issuing banks, fraud departments, and legal counsel.</span>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="text-center space-y-5 p-8 rounded-2xl bg-[#0E1726] border border-[#1E2E48]">
            <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC]">
              Is an Online Broker Withholding Your Money?
            </h3>
            <p className="text-sm text-[#94A3B8] max-w-xl mx-auto">
              Do not send additional deposits. Submit your platform records for a confidential triage review by our fraud analysts.
            </p>
            <Button asChild className="bg-[#2563EB] hover:bg-blue-600 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md">
              <Link href="/#forensic-intake" className="flex items-center gap-2">
                <span>Request Emergency Broker Triage</span> <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

