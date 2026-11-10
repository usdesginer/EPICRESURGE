import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy & Data Protection | EpicResurge',
  description: 'Our commitment to confidential data handling, strict privacy protocols, and secure evidence storage for all client inquiries.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#080F1D] text-[#F8FAFC]">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-[#080F1D] to-[#0E1726] border-b border-[#1E2E48]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111D31] border border-[#1E2E48] text-[#38BDF8] text-xs font-semibold">
            <Lock className="w-4 h-4" />
            <span>Privacy & Legal Standards</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-[#F8FAFC] tracking-tight">
            Privacy Policy & Data Stewardship
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
            We treat your personal information, communications, and financial records with strict confidentiality and care.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl space-y-10 text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          
          <div className="p-6 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-3">
            <h2 className="text-xl font-bold text-[#F8FAFC]">1. Information We Collect</h2>
            <p>
              When you submit a case inquiry or contact our team, we collect the details you provide voluntarily: your name, email address, phone number (if provided), country of residence, and the narrative description of the incident, including transaction identifiers, screenshots, and correspondence.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-3">
            <h2 className="text-xl font-bold text-[#F8FAFC]">2. How We Use Your Information</h2>
            <p>
              Your data is used solely for the purpose of evaluating the factual viability of your case, communicating our findings, and, where agreed upon in writing, preparing formal evidentiary reports for presentation to financial institutions, cryptocurrency exchanges, and law enforcement authorities.
            </p>
            <p className="font-semibold text-[#F8FAFC]">
              We never sell, rent, monetize, or trade your personal information to third parties under any circumstances.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-3">
            <h2 className="text-xl font-bold text-[#F8FAFC]">3. Data Security & Encryption</h2>
            <p>
              All online form transmissions are protected with industry-standard 256-bit SSL encryption. Internal evidentiary files are secured in encrypted, access-controlled repositories accessible only to authorized senior investigators assigned to your case.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-3">
            <h2 className="text-xl font-bold text-[#F8FAFC]">4. Data Retention & Erasure Rights</h2>
            <p>
              In accordance with international data protection frameworks (including GDPR and CCPA), you maintain the right to request a copy of your records or to request full erasure of your contact details and case files at any time by contacting our privacy officer.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#111D31] border border-[#1E2E48] space-y-3">
            <h2 className="text-xl font-bold text-[#F8FAFC]">5. Complaint Handling & Escalation</h2>
            <p>
              If you have any questions, concerns, or complaints regarding how your information was processed or how your case was handled, you may contact our senior management directly at{' '}
              <a href="mailto:privacy@epicresurge.com" className="text-[#38BDF8] hover:underline font-medium">
                privacy@epicresurge.com
              </a>. All complaints receive formal written acknowledgment within 48 business hours.
            </p>
          </div>

          <div className="text-center pt-4 text-xs text-[#94A3B8]">
            <p>Last updated: November 2026 • EpicResurge LLC, Registered in Delaware, USA</p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

