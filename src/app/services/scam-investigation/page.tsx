import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  FileSearch, 
  Lock, 
  Mail,
  AlertCircle 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Scam Investigation Services | EpicResurge',
  description: 'Detailed scam investigation examining suspected fraud, establishing what happened, identifying parties involved, and compiling factual evidence.',
};

export default function ScamInvestigationPage() {
  return (
    <main className="min-h-screen bg-[#080F1D] text-[#F8FAFC]">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-[#080F1D] to-[#0E1726] border-b border-[#1E2E48]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111D31] border border-[#1E2E48] text-[#38BDF8] text-xs font-semibold">
            <Search className="w-4 h-4" />
            <span>Core Service 01</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-[#F8FAFC] tracking-tight">
            Scam Investigation
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
            We examine the available information about a suspected scam to help establish what happened, who may have been involved, and what evidence exists.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl space-y-14">
          
          {/* 3 Core Questions */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">01. What It Means</span>
              <h3 className="text-lg font-bold text-[#F8FAFC]">Factual Case Examination</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                We review your conversations, platform claims, deposit receipts, and account histories to reconstruct the timeline of what took place.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">02. How It Helps You</span>
              <h3 className="text-lg font-bold text-[#F8FAFC]">Clarity & Evidence</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                You receive an objective, factual assessment that removes uncertainty, identifies perpetrators where possible, and keeps proof safe.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">03. What to Do Next</span>
              <h3 className="text-lg font-bold text-[#F8FAFC]">Free Case Evaluation</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Submit what details you have. Our team will review your situation confidentially and outline feasible next steps within 24 hours.
              </p>
            </div>
          </div>

          {/* Investigation Methodology */}
          <div className="p-8 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-6">
            <h2 className="text-2xl font-headline font-bold text-[#F8FAFC]">
              What We Examine in a Scam Investigation
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-[#94A3B8]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
                <span><strong>Platform Authenticity:</strong> Checking whether trading software is simulated or connected to real markets.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
                <span><strong>Communication Records:</strong> Analyzing chat logs, phone records, and email headers for syndication patterns.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
                <span><strong>Payment Trails:</strong> Identifying beneficiary bank accounts and receiving cryptocurrency addresses.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
                <span><strong>Evidentiary Dossier:</strong> Compiling a formal report formatted for police, banks, and legal counsel.</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-5 p-8 rounded-2xl bg-[#0E1726] border border-[#1E2E48]">
            <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC]">
              Suspect You Are Dealing With a Scam?
            </h3>
            <p className="text-sm text-[#94A3B8] max-w-lg mx-auto leading-relaxed">
              Do not send further fees or compromise your records. Submit your details for a free, confidential review.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/#forensic-intake" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto h-12 px-7 bg-[#2563EB] hover:bg-blue-600 text-[#F8FAFC] font-semibold rounded-xl flex items-center justify-center gap-2">
                  <span>Start Free Case Review</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/services" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-6 border-[#1E2E48] bg-[#111D31] hover:bg-[#162540] text-[#F8FAFC] font-medium rounded-xl">
                  <span>All Services</span>
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

