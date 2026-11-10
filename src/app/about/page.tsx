import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  Scale, 
  MapPin, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  Mail,
  Users
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | EpicResurge Scam Investigation & Asset Recovery',
  description: 'Learn about EpicResurge, our Delaware corporate registration, certified fraud examiners, and our commitment to honest, evidence-based scam investigation.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#080F1D] text-[#F8FAFC]">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-[#080F1D] to-[#0E1726] border-b border-[#1E2E48]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111D31] border border-[#1E2E48] text-[#38BDF8] text-xs font-semibold">
            <Building2 className="w-4 h-4" />
            <span>About EpicResurge</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-[#F8FAFC] tracking-tight">
            An Independent, Accountable Investigation Firm
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
            EpicResurge was founded to bring clarity, transparency, and rigorous factual standards to online fraud investigation and scam recovery support.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl space-y-16">
          
          {/* Mission & Background */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">Our Purpose</span>
              <h2 className="text-2xl sm:text-3xl font-headline font-bold text-[#F8FAFC]">
                Protecting Scam Victims from Secondary Harm
              </h2>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                When people lose money to online fraud, they are often targeted again by unverified &ldquo;hackers&rdquo; making unrealistic recovery promises. EpicResurge was established as a counterweight: a fully registered, credentialed firm that operates strictly within legal frameworks.
              </p>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                We believe victims deserve straight answers, plain language, and objective evidence. We explain what the records show, where money moved, and what steps can realistically be taken.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-4">
              <h3 className="text-lg font-bold text-[#F8FAFC] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#10B981]" />
                <span>Our Core Commitments</span>
              </h3>
              <ul className="space-y-3 text-sm text-[#94A3B8]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Evaluation:</strong> Initial assessments are always free and confidential.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span><strong>No False Guarantees:</strong> We never claim 100% guaranteed recovery or instant private hacking.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span><strong>Evidentiary Focus:</strong> Every report is admissible and prepared for police, banks, and legal counsel.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Credentials & Corporate Registration */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-headline font-bold text-[#F8FAFC]">
                Corporate Profile & Registration
              </h2>
              <p className="text-sm sm:text-base text-[#94A3B8]">
                We maintain active corporate accountability and professional accreditations.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="p-6 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-2">
                <Scale className="w-6 h-6 text-[#38BDF8]" />
                <h4 className="text-base font-bold text-[#F8FAFC]">Delaware Registered</h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Legally registered Limited Liability Company under Delaware state laws, United States.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-2">
                <Award className="w-6 h-6 text-[#38BDF8]" />
                <h4 className="text-base font-bold text-[#F8FAFC]">Certified Analysts</h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Certified Fraud Examiners (CFE) and blockchain analytics specialists on active staff.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-2">
                <MapPin className="w-6 h-6 text-[#38BDF8]" />
                <h4 className="text-base font-bold text-[#F8FAFC]">International Hubs</h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Corporate office in Delaware with operational consultation liaison desks in NY and London.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-2">
                <FileText className="w-6 h-6 text-[#38BDF8]" />
                <h4 className="text-base font-bold text-[#F8FAFC]">Privacy Safeguards</h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Strict non-disclosure agreements, encrypted storage, and ISO-aligned digital evidence handling.
                </p>
              </div>
            </div>
          </div>

          {/* Consultation CTA Banner */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#111D31] border border-[#1E2E48] text-center space-y-5">
            <h3 className="text-xl sm:text-2xl font-headline font-bold text-[#F8FAFC]">
              Speak With Our Investigation Team
            </h3>
            <p className="text-sm text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
              If you have questions about how we operate or want to request an initial assessment of your case, our specialists are available to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/#forensic-intake" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto h-12 px-7 bg-[#2563EB] hover:bg-blue-600 text-[#F8FAFC] font-semibold rounded-xl flex items-center justify-center gap-2">
                  <span>Start Free Case Review</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-6 border-[#1E2E48] bg-[#0E1726] hover:bg-[#162540] text-[#F8FAFC] font-medium rounded-xl flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 text-[#38BDF8]" />
                  <span>Contact Our Office</span>
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

