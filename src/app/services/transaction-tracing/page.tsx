import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { 
  GitBranch, 
  Coins, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  Building, 
  FileCheck2, 
  ShieldCheck 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Transaction Tracing Services | EpicResurge',
  description: 'Following the movement of digital money across public ledgers to identify connected accounts, wallets, and exchange touchpoints.',
};

export default function TransactionTracingPage() {
  return (
    <main className="min-h-screen bg-[#080F1D] text-[#F8FAFC]">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-[#080F1D] to-[#0E1726] border-b border-[#1E2E48]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111D31] border border-[#1E2E48] text-[#38BDF8] text-xs font-semibold">
            <GitBranch className="w-4 h-4" />
            <span>Forensic Capability</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-[#F8FAFC] tracking-tight">
            Transaction Tracing & Asset Flow Audit
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
            We follow the movement of digital money across public blockchains and banking wires to map transaction hops, mixer transfers, and centralized exchange cash-out nodes.
          </p>

          <div className="pt-2">
            <Link 
              href="/services/loan-fraud-investigation"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#38BDF8] bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-xl hover:bg-blue-500/20 transition-colors"
            >
              <span>Looking for advance-fee or credit schemes? Explore Loan Fraud Investigation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl space-y-14">
          
          {/* 3 Core Questions */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">01. What It Means</span>
              <h3 className="text-lg font-bold text-[#F8FAFC]">Following Digital Money</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Public blockchain ledgers record every transaction. We follow the movement of funds from your initial transfer through intermediate hops and smart contracts.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">02. How It Helps You</span>
              <h3 className="text-lg font-bold text-[#F8FAFC]">Locating Destinations</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Scammers must eventually deposit funds into centralized exchanges or bank accounts to cash out. We pinpoint these destination accounts so formal notices can be served.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">03. What to Do Next</span>
              <h3 className="text-lg font-bold text-[#F8FAFC]">Provide Transaction IDs</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Share your transaction hashes (TXIDs) or withdrawal receipts. Our team will verify whether the trail leads to active, identifiable destination services.
              </p>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="p-8 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-6">
            <h2 className="text-2xl font-headline font-bold text-[#F8FAFC]">
              Supported Blockchains & Networks
            </h2>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              We trace transactions across all major public ledgers, tokens, and multi-chain bridges:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-[#94A3B8]">
              <div className="p-4 rounded-xl bg-[#080F1D] border border-[#1E2E48] space-y-1">
                <span className="font-bold text-[#F8FAFC]">Bitcoin (BTC)</span>
                <p className="text-xs text-[#94A3B8]">UTXO ledger clustering, change address identification, and coin-join analysis.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#080F1D] border border-[#1E2E48] space-y-1">
                <span className="font-bold text-[#F8FAFC]">Ethereum & EVM Chains</span>
                <p className="text-xs text-[#94A3B8]">ETH, Arbitrum, Optimism, Polygon, and BSC token contract tracking.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#080F1D] border border-[#1E2E48] space-y-1">
                <span className="font-bold text-[#F8FAFC]">Stablecoins (USDT / USDC)</span>
                <p className="text-xs text-[#94A3B8]">ERC-20, TRC-20, and Solana token transfers to known liquidity hubs.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-5 p-8 rounded-2xl bg-[#0E1726] border border-[#1E2E48]">
            <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC]">
              Have Transaction Hashes to Trace?
            </h3>
            <p className="text-sm text-[#94A3B8] max-w-lg mx-auto leading-relaxed">
              Submit your transaction IDs for an initial check. We will tell you whether the money trail leads to identifiable exchange accounts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/#forensic-intake" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto h-12 px-7 bg-[#2563EB] hover:bg-blue-600 text-[#F8FAFC] font-semibold rounded-xl flex items-center justify-center gap-2">
                  <span>Start Free Tracing Review</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/#process" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-6 border-[#1E2E48] bg-[#111D31] hover:bg-[#162540] text-[#F8FAFC] font-medium rounded-xl">
                  <span>How It Works</span>
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

