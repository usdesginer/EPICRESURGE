import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { 
  AlertTriangle, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight, 
  Globe, 
  FileSearch, 
  Lock, 
  Scale 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fraud Assessment Services | EpicResurge',
  description: 'Objective risk assessment of suspicious investment platforms, apps, websites, and business claims to identify fraud warning signs.',
};

export default function FraudAssessmentPage() {
  return (
    <main className="min-h-screen bg-[#080F1D] text-[#F8FAFC]">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-[#080F1D] to-[#0E1726] border-b border-[#1E2E48]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111D31] border border-[#1E2E48] text-[#38BDF8] text-xs font-semibold">
            <AlertTriangle className="w-4 h-4" />
            <span>Core Service 04</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-[#F8FAFC] tracking-tight">
            Fraud Assessment
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
            We assess suspicious investment platforms, websites, businesses, and online activities to help identify warning signs.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl space-y-14">
          
          {/* 3 Core Questions */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">01. What It Means</span>
              <h3 className="text-lg font-bold text-[#F8FAFC]">Objective Risk Check</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                We independently verify platform claims, registration numbers, domain histories, and withdrawal conditions to determine whether a service is legitimate.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">02. How It Helps You</span>
              <h3 className="text-lg font-bold text-[#F8FAFC]">Preventing Further Loss</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                You receive a clear verdict before paying additional &ldquo;clearance fees&rdquo; or &ldquo;unfreeze taxes,&rdquo; preventing you from losing more money to extortion tactics.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">03. What to Do Next</span>
              <h3 className="text-lg font-bold text-[#F8FAFC]">Request an Assessment</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Share the website address, platform name, or broker proposal you received. Our analysts will evaluate the warning signs at zero cost.
              </p>
            </div>
          </div>

          {/* Assessment Checklist */}
          <div className="p-8 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-6">
            <h2 className="text-2xl font-headline font-bold text-[#F8FAFC]">
              Key Warning Signs We Audit
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-[#94A3B8]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
                <span><strong>Advance Fee Requests:</strong> Demands for upfront taxes or deposits before releasing account balances.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
                <span><strong>Fabricated Licenses:</strong> Forged SEC, FCA, or ASIC regulatory certificates on website footers.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
                <span><strong>Simulated Trading Engines:</strong> Virtual dashboard profits that bear no connection to actual exchange liquidity.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
                <span><strong>Domain Age Mismatch:</strong> Claims of operating for years despite the website domain being created weeks ago.</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-5 p-8 rounded-2xl bg-[#0E1726] border border-[#1E2E48]">
            <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC]">
              Unsure About an Investment Opportunity?
            </h3>
            <p className="text-sm text-[#94A3B8] max-w-lg mx-auto leading-relaxed">
              Get an objective, confidential assessment before sending funds or agreeing to advance fee payments.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/#forensic-intake" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto h-12 px-7 bg-[#2563EB] hover:bg-blue-600 text-[#F8FAFC] font-semibold rounded-xl flex items-center justify-center gap-2">
                  <span>Request Free Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/#red-flags" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-6 border-[#1E2E48] bg-[#111D31] hover:bg-[#162540] text-[#F8FAFC] font-medium rounded-xl">
                  <span>Interactive Scam Checker</span>
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

