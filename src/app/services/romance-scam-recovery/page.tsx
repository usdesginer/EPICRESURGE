import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { 
  HeartHandshake, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  UserCheck, 
  Lock, 
  MessageSquare,
  Network,
  HelpCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Romance Scam Recovery & Fraud Investigation | EpicResurge',
  description: 'Confidential, empathetic forensic investigation for victims of online romance fraud, emotional manipulation, and cross-border pig butchering schemes.',
};

export default function RomanceScamRecoveryPage() {
  return (
    <main className="min-h-screen bg-[#080F1D] text-[#F8FAFC]">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-[#080F1D] to-[#0E1726] border-b border-[#1E2E48]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111D31] border border-[#1E2E48] text-[#38BDF8] text-xs font-semibold">
            <HeartHandshake className="w-4 h-4" />
            <span>Specialized Service</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-[#F8FAFC] tracking-tight">
            Romance Scam Recovery
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
            Discreet, compassionate, and objective investigation for victims of emotional deception, online grooming syndicates, and 'pig butchering' (Sha Zhu Pan) schemes.
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
              <h3 className="text-lg font-bold text-[#F8FAFC]">Coerced Financial Trust</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Perpetrators build deep emotional intimacy over weeks or months through social apps, WhatsApp, or Telegram before directing you to fraudulent investment websites.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">02. How We Help</span>
              <h3 className="text-lg font-bold text-[#F8FAFC]">De-Anonymizing Syndicates</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                We trace the destination cryptocurrency wallets, uncover linked syndicate accounts across centralized exchanges, and assemble formal evidence packets.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">03. Our Promise</span>
              <h3 className="text-lg font-bold text-[#F8FAFC]">Zero Judgment & Privacy</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                You are not alone, and you did nothing wrong. These are multi-million-dollar criminal enterprises. All consultations are 100% confidential and handled with care.
              </p>
            </div>
          </div>

          {/* Anatomy of Modern Romance Fraud */}
          <div className="p-8 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-6">
            <h2 className="text-2xl font-headline font-bold text-[#F8FAFC]">
              How Romance Investment Syndicates Operate
            </h2>
            <div className="grid sm:grid-cols-3 gap-5 text-sm text-[#94A3B8]">
              <div className="p-5 rounded-xl bg-[#080F1D] border border-[#1E2E48] space-y-2">
                <span className="font-bold text-[#F8FAFC] flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#38BDF8]" /> Phase 1: The Grooming
                </span>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Beginning with a "wrong number" text, LinkedIn message, or dating profile. They portray themselves as wealthy, loving professionals who share your core values.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#080F1D] border border-[#1E2E48] space-y-2">
                <span className="font-bold text-[#F8FAFC] flex items-center gap-2">
                  <Network className="w-4 h-4 text-amber-500" /> Phase 2: The Investment
                </span>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  They introduce a "special trading platform" or crypto arbitrage dApp, demonstrating large simulated profits and allowing a small initial withdrawal to gain trust.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#080F1D] border border-[#1E2E48] space-y-2">
                <span className="font-bold text-[#F8FAFC] flex items-center gap-2">
                  <Lock className="w-4 h-4 text-rose-500" /> Phase 3: The Freeze & Extortion
                </span>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Once large savings are deposited, withdrawal requests trigger demands for tax fees or VIP security deposits, followed by the contact ghosting the victim.
                </p>
              </div>
            </div>
          </div>

          {/* Investigation Methodology */}
          <div className="p-8 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-6">
            <h2 className="text-2xl font-headline font-bold text-[#F8FAFC]">
              Our Romance Fraud Investigation Process
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-[#94A3B8]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
                <span><strong>Multi-Chain Transaction Tracing:</strong> Following USDT, BTC, and ETH transfers through intermediary clusters to centralized exchange deposit addresses.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
                <span><strong>Exchange Freeze Liaison:</strong> Preparing urgent legal notifications to destination exchanges to freeze cash-out accounts before liquidation.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
                <span><strong>Syndicate Network Correlation:</strong> Matching wallet addresses and phone footprints against known international organized crime clusters.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
                <span><strong>Formal Evidentiary Dossier:</strong> Preparing complete chronological evidence ready for local police departments, FBI IC3, or national fraud reporting centres.</span>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="text-center space-y-5 p-8 rounded-2xl bg-[#0E1726] border border-[#1E2E48]">
            <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC]">
              Speak With an Understanding Investigator
            </h3>
            <p className="text-sm text-[#94A3B8] max-w-xl mx-auto">
              You are treated with dignity, complete privacy, and respect. Let our team examine your transaction history and outline realistic recovery options.
            </p>
            <Button asChild className="bg-[#2563EB] hover:bg-blue-600 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md">
              <Link href="/#forensic-intake" className="flex items-center gap-2">
                <span>Start Confidential Case Review</span> <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

