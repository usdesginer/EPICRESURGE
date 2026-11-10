import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight, 
  AlertTriangle, 
  FileText, 
  Lock,
  Coins
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Educational Resources & Scam Prevention Guides | EpicResurge',
  description: 'Practical guides and checklists to help fraud victims preserve evidence, avoid secondary scams, and report incidents effectively.',
};

const GUIDES = [
  {
    id: "broker-fraud",
    title: "How to Spot Fake Investment Brokers and Refuse Withdrawal Fees",
    summary: "A breakdown of common tactics used by fraudulent trading platforms, including advance fee demands, fake account managers, and simulated profit statements.",
    steps: [
      "Never send additional money to 'unlock' an existing balance.",
      "Check the broker's registration on the SEC, FCA, or ASIC official registries.",
      "Document all chat logs, deposit instructions, and withdrawal errors immediately.",
      "Stop communications if the broker uses threats of legal action or account termination."
    ]
  },
  {
    id: "immediate-steps",
    title: "The First 24 Hours: What to Do Immediately After Sending Funds to a Scam",
    summary: "Critical immediate actions to preserve your digital records and prevent further unauthorized access to your devices or accounts.",
    steps: [
      "Record every transaction hash (TXID) or bank wire confirmation number.",
      "Change passwords on your email, banking, and cryptocurrency exchange accounts immediately.",
      "Uninstall any remote desktop software (AnyDesk, TeamViewer) the scammers asked you to install.",
      "Contact your sending bank or exchange to file an urgent disputed payment notice."
    ]
  },
  {
    id: "secondary-scams",
    title: "How to Identify Secondary Recovery Scams",
    summary: "Why victims are targeted repeatedly by imposters claiming they can 'hack the blockchain' to get stolen money back.",
    steps: [
      "Block anyone on social media (Telegram, Instagram, WhatsApp) claiming private hacking capabilities.",
      "Be suspicious of unsolicited messages offering to recover funds for an upfront fee.",
      "Legitimate recovery occurs through legal and financial compliance channels, not private hackers.",
      "Demand formal corporate registration details before engaging with any investigation agency."
    ]
  }
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#080F1D] text-[#F8FAFC]">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-[#080F1D] to-[#0E1726] border-b border-[#1E2E48]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111D31] border border-[#1E2E48] text-[#38BDF8] text-xs font-semibold">
            <BookOpen className="w-4 h-4" />
            <span>Educational Knowledge Base</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-[#F8FAFC] tracking-tight">
            Scam Prevention & Action Guides
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
            Practical, actionable advice to help you preserve digital evidence, understand fraud mechanics, and protect yourself against future threats.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl space-y-12">
          
          <div className="space-y-8">
            {GUIDES.map((guide, idx) => (
              <div 
                key={guide.id} 
                id={guide.id}
                className="p-6 sm:p-8 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-5 shadow-lg shadow-black/20"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] bg-[#080F1D] px-2.5 py-1 rounded-md border border-[#1E2E48]">
                    Guide 0{idx + 1}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-headline font-bold text-[#F8FAFC]">
                  {guide.title}
                </h2>

                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {guide.summary}
                </p>

                <div className="p-5 rounded-xl bg-[#080F1D] border border-[#1E2E48] space-y-3">
                  <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider block">
                    Essential Action Points:
                  </span>
                  <ul className="space-y-2 text-sm text-[#F8FAFC]/90">
                    {guide.steps.map((step, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Tool Callout */}
          <div className="p-8 rounded-2xl bg-[#0E1726] border border-[#1E2E48] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-[#F8FAFC]">
                Want to test a platform against known red flags?
              </h3>
              <p className="text-sm text-[#94A3B8]">
                Use our interactive symptom checker to evaluate your incident in under 2 minutes.
              </p>
            </div>

            <Link href="/#red-flags" className="shrink-0 w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-12 px-6 bg-[#2563EB] hover:bg-blue-600 text-[#F8FAFC] font-semibold text-sm rounded-xl">
                <span>Open Scam Checker</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

