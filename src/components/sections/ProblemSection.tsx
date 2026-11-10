'use client';

import Link from 'next/link';
import { AlertCircle, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const problemCategories = [
  { title: "Crypto & Bitcoin Theft", desc: "Transactions sent to scam addresses, drainers, or fake web3 dApps" },
  { title: "Unregulated Brokers", desc: "Platforms blocking withdrawals or demanding extra tax/fees" },
  { title: "Fake Investment Schemes", desc: "Ponzi schemes promising guaranteed daily or weekly profits" },
  { title: "Romance & Imposter Scams", desc: "Individuals online who persuaded you to send money or crypto" },
  { title: "Locked Crypto Wallets", desc: "Lost hardware wallet passphrases or inaccessible private keys" },
  { title: "Employment Scams", desc: "Fake job offers demanding upfront equipment or training payments" }
];

export function ProblemSection() {
  return (
    <section className="py-24 bg-[#080F1D] relative border-b border-[#1E2E48]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Card: Specializations */}
            <div className="lg:col-span-7 bg-[#111D31] border border-[#1E2E48] rounded-2xl p-8 md:p-10 flex flex-col justify-between shadow-lg shadow-black/20">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E1726] border border-[#1E2E48] text-[#38BDF8] text-xs font-semibold mb-6">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Investigative Expertise</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4 text-[#F8FAFC]">
                  We Investigate All Major Forms of Online Financial Fraud
                </h2>
                
                <p className="text-[#94A3B8] text-base md:text-[17px] mb-8 leading-relaxed font-normal">
                  Scams come in many shapes, but they all leave a financial trail. Our specialized investigators analyze the transactions, identify the receiving parties, and prepare formal documentation for recovery.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-3.5 mb-8">
                  {problemCategories.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#0E1726] border border-[#162338] hover:border-[#1E2E48] transition-colors">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="w-2 h-2 rounded-full bg-[#38BDF8] shrink-0" />
                        <h4 className="font-bold text-sm text-[#F8FAFC]">{item.title}</h4>
                      </div>
                      <p className="text-xs text-[#94A3B8] leading-relaxed pl-4.5 font-normal">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link href="#forensic-intake">
                  <Button size="lg" className="h-12 px-7 bg-[#2563EB] hover:bg-blue-600 text-[#F8FAFC] font-semibold rounded-xl shadow-md transition-all flex items-center gap-2">
                    <span>Request Free Case Assessment</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right Card: Time Sensitivity */}
            <div className="lg:col-span-5 rounded-2xl p-8 md:p-10 bg-[#111D31] border border-[#F59E0B]/25 shadow-lg shadow-black/20 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E1726] border border-[#F59E0B]/30 text-[#F59E0B] text-xs font-semibold mb-6">
                  <Clock className="w-4 h-4" />
                  <span>Time-Sensitive Factor</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-headline font-bold mb-4 text-[#F8FAFC]">
                  Why Acting Quickly Is Essential
                </h3>
                
                <p className="text-[#94A3B8] text-sm md:text-base mb-6 leading-relaxed font-normal">
                  Scammers often move stolen funds across multiple foreign exchanges and accounts within days. The sooner a trail is audited, the higher the likelihood of interdicting and freezing the assets.
                </p>
                
                <div className="space-y-3 mb-6">
                  {[
                    { label: "Rapid Asset Laundering", desc: "Funds are frequently shuffled between multiple wallets and decentralized bridges." },
                    { label: "Platform Deletion", desc: "Fraudulent websites often shut down and vanish once victims realize they have been scammed." },
                    { label: "Exchange Interdiction", desc: "Centralized crypto exchanges can freeze accounts when served with valid forensic proof quickly." },
                    { label: "Evidence Preservation", desc: "Chat logs, withdrawal rejection notices, and email headers must be secured before deletion." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3.5 p-3 rounded-xl bg-[#0E1726] border border-[#162338]">
                      <div className="w-7 h-7 rounded-lg bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center shrink-0 mt-0.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs md:text-sm text-[#F8FAFC]">{item.label}</h4>
                        <p className="text-xs text-[#94A3B8] leading-relaxed mt-0.5 font-normal">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-3.5 rounded-xl bg-[#0E1726] border border-[#38BDF8]/20 text-xs text-[#38BDF8] leading-relaxed font-medium">
                Tip: Keep all screenshots of communications, deposit receipts, and transaction hashes ready for your review.
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
