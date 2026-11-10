import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  GitBranch, 
  FileSearch, 
  AlertTriangle, 
  Compass, 
  ShieldCheck, 
  ArrowRight,
  Shield,
  Info,
  Landmark,
  ShieldAlert,
  HeartHandshake
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Investigation Services | EpicResurge',
  description: 'Explore the full range of scam investigation, loan fraud investigation, bad broker triage, romance scam recovery, and financial restitution services.',
};

const SERVICES_DETAILED = [
  {
    id: "scam-investigation",
    href: "/services/scam-investigation",
    title: "Scam Investigation",
    summary: "Examining available information about a suspected scam to establish what happened, who was involved, and what evidence exists.",
    details: [
      "Interviews and narrative incident intake",
      "Analysis of fraudulent trading websites and social channels",
      "Background checks on unverified broker entities",
      "Identification of known scam patterns and syndicates"
    ],
    icon: Search
  },
  {
    id: "loan-fraud-investigation",
    href: "/services/loan-fraud-investigation",
    title: "Loan Fraud Investigation",
    summary: "Investigating advance-fee loan schemes, predatory online lenders, fake collateral demands, and fraudulent commercial financing agreements to trace and recover stolen capital.",
    details: [
      "Auditing fraudulent lending platforms and bogus credit charters",
      "Tracking wire transfers and crypto deposit addresses used by fake loan brokers",
      "Locating beneficiary accounts and serving legal freeze notifications",
      "Preparing evidentiary dossiers for banking fraud teams, FTC, and CFPB"
    ],
    icon: Landmark
  },
  {
    id: "bad-broker-triage",
    href: "/services/bad-broker-triage",
    title: "Bad Broker Triage",
    summary: "Immediate forensic triage and intervention when an unregulated broker, fake CFD platform, or rogue exchange withholds withdrawals or demands bogus taxes.",
    details: [
      "Cross-checking broker licenses against global regulatory warnings (SEC, FCA, ASIC)",
      "Documenting deliberate withdrawal sabotage, fake margin calls, and account lockouts",
      "Preserving cryptographic server logs, trade sheets, and communication chains",
      "Serving formal dispute and freeze demands to payment processors and banks"
    ],
    icon: ShieldAlert
  },
  {
    id: "romance-scam-recovery",
    href: "/services/romance-scam-recovery",
    title: "Romance Scam Recovery",
    summary: "Empathetic, confidential forensic investigation for victims of emotional deception, online grooming, and multi-layered 'pig butchering' (Sha Zhu Pan) investment schemes.",
    details: [
      "De-anonymizing fake persona profiles, VOIP numbers, and social footprints",
      "Tracing fund movements across blockchain liquidity pools and currency exchanges",
      "Organizing comprehensive evidence packages for international law enforcement",
      "Direct coordination with destination exchanges to freeze syndicate cash-out endpoints"
    ],
    icon: HeartHandshake
  },
  {
    id: "fraud-assessment",
    href: "/services/fraud-assessment",
    title: "Fraud Assessment",
    summary: "Checking suspicious investment platforms, apps, and businesses to identify warning signs before or after funds are transferred.",
    details: [
      "Verification of claimed regulatory licenses and registrations",
      "Domain age, server infrastructure, and ownership auditing",
      "Evaluation of artificial trading balances and withdrawal roadblocks",
      "Objective risk scoring for disputed platforms"
    ],
    icon: AlertTriangle
  },
  {
    id: "recovery-guidance",
    href: "/how-it-works",
    title: "Recovery Guidance & Restitution",
    summary: "Explaining possible steps towards recovering your money, including contacting relevant banks, exchanges, and authorities.",
    details: [
      "Drafting formal notification letters to destination exchanges",
      "Submitting bank wire recall requests with correspondent banks",
      "Preparing crime reports for law enforcement agencies",
      "Ongoing liaison support until formal resolution"
    ],
    icon: Compass
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#080F1D] text-[#F8FAFC]">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-[#080F1D] to-[#0E1726] border-b border-[#1E2E48]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111D31] border border-[#1E2E48] text-[#38BDF8] text-xs font-semibold">
            <Shield className="w-4 h-4" />
            <span>Comprehensive Services</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-[#F8FAFC] tracking-tight">
            How We Can Help You
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
            Six clearly structured service categories designed to examine facts, keep important records safe, and guide you through legitimate recovery options.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl space-y-8">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DETAILED.map((service) => {
              const Icon = service.icon;

              return (
                <div 
                  key={service.id} 
                  className="rounded-2xl bg-[#111D31] border border-[#1E2E48] p-6 sm:p-7 flex flex-col justify-between shadow-lg shadow-black/20 hover:border-slate-700 transition-all"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#080F1D] border border-[#1E2E48] flex items-center justify-center text-[#38BDF8] mb-5">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h2 className="text-xl font-headline font-bold text-[#F8FAFC] mb-2.5">
                      {service.title}
                    </h2>

                    <p className="text-sm text-[#94A3B8] leading-relaxed mb-5">
                      {service.summary}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-[#1E2E48]/60 mb-6">
                      <p className="text-xs font-semibold text-[#38BDF8] uppercase tracking-wider">Includes:</p>
                      <ul className="space-y-1.5 text-xs text-[#94A3B8]">
                        {service.details.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link href={service.href} className="block w-full">
                    <Button variant="outline" className="w-full h-11 border-[#1E2E48] bg-[#0E1726] hover:bg-[#162540] text-[#F8FAFC] text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5">
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#38BDF8]" />
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Scope Notice */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0E1726] border border-[#1E2E48] flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className="w-11 h-11 rounded-xl bg-[#2563EB]/15 text-[#38BDF8] flex items-center justify-center shrink-0">
              <Info className="w-6 h-6" />
            </div>

            <div className="space-y-1 flex-1">
              <h3 className="text-base font-bold text-[#F8FAFC]">
                Only Genuine, Verified Services
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                EpicResurge only displays services we genuinely provide. We examine transactions, compile court-ready evidence, and provide structured recovery guidance. We never claim private instant hacking or guarantee unfeasible outcomes.
              </p>
            </div>

            <Link href="/#forensic-intake" className="shrink-0 w-full md:w-auto">
              <Button className="w-full md:w-auto h-11 px-6 bg-[#2563EB] hover:bg-blue-600 text-[#F8FAFC] font-semibold text-xs rounded-xl shadow-md">
                <span>Start Free Case Review</span>
              </Button>
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

