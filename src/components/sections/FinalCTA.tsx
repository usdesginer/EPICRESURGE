'use client';

import Link from 'next/link';
import { 
  ShieldCheck, 
  ArrowRight, 
  Mail, 
  Lock, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';
import { SectionReveal } from '@/components/ui/section-reveal';
import { Button } from '@/components/ui/button';

export function FinalCTA() {
  return (
    <section className="py-20 md:py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-5xl">
        <SectionReveal>
          <div className="p-8 sm:p-10 md:p-14 rounded-3xl bg-[#0F172A] border border-slate-800 shadow-xl text-center space-y-6 text-white">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-blue-400 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>We Are Here to Help</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-white tracking-tight max-w-2xl mx-auto leading-tight">
              Take the First Step Toward Understanding Your Options
            </h2>

            {/* Reassuring Subtext */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
              You do not have to navigate this alone. Share what happened in simple, everyday terms. Our specialists will review the details confidentially and provide an honest, objective evaluation.
            </p>

            {/* Action Buttons: Full-width on mobile */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2 max-w-md mx-auto">
              <Link href="#forensic-intake" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto h-13 px-8 text-sm sm:text-base bg-[#2563EB] hover:bg-blue-600 text-white font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-2">
                  <span>Start Free Case Review</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              
              <a href="mailto:investigator@epicresurge.com" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-13 px-7 text-sm sm:text-base border-slate-700 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>Email an Investigator</span>
                </Button>
              </a>
            </div>

            {/* Reassurance Checklist */}
            <div className="pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Upfront Review Fee</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Strict Confidentiality</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Response Within 24 Hours</span>
              </div>
            </div>

          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
