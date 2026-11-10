import Link from 'next/link';
import { AlertTriangle, ArrowRight, Mail, CheckCircle2, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionReveal } from '@/components/ui/section-reveal';

const scamSigns = [
  {
    title: "Demands for 'Taxes' or 'Release Fees'",
    desc: "When you try to withdraw your money, the platform suddenly requires you to pay 10% to 30% in 'clearance fees' or 'taxes' upfront."
  },
  {
    title: "Blocked or Frozen Withdrawals",
    desc: "Your withdrawal requests remain permanently 'pending', 'under audit', or are outright rejected with vague excuses."
  },
  {
    title: "Unresponsive Broker or Account Manager",
    desc: "The charming 'advisor' or trader who called or texted daily suddenly stops replying or blocks you once you stop depositing."
  },
  {
    title: "Fake Account Balances & Artificial Profits",
    desc: "The platform's dashboard shows enormous trading profits that were never real, designed solely to tempt you into depositing more."
  },
  {
    title: "Disappearing Website or Broken Links",
    desc: "The website domain changes, login portals stop loading, or the platform vanishes completely overnight."
  },
  {
    title: "Online Romantic Interest Pitching Crypto",
    desc: "Someone you met on Tinder, Bumble, or WhatsApp claims to have insider crypto trading tips and insists you join their platform."
  },
  {
    title: "Remote Access Software Requests",
    desc: "The support agent urged you to install AnyDesk, TeamViewer, or a custom APK to 'help you trade' or manage your wallet."
  },
  {
    title: "Job Offers Requiring Advance Payments",
    desc: "An online employer or task website asks you to pay for training, deposit crypto to 'recharge accounts', or buy equipment."
  }
];

export function SignsSection() {
  return (
    <section id="signs" className="py-24 bg-[#0B0F19] relative border-b border-slate-850">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
              <ShieldAlert className="w-4 h-4" />
              <span>Scam Identification</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-headline font-bold mb-5 text-white">
              Common Warning Signs of an Online Scam
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Fraudsters rely on recurring psychological and technical tactics. If you recognize any of the warning signs below, you may be dealing with an active scam.
            </p>
          </SectionReveal>
          
          <div className="grid md:grid-cols-2 gap-5 mb-16">
            {scamSigns.map((sign, idx) => (
              <SectionReveal key={idx} delay={idx * 40}>
                <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-900 transition-all duration-300 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1.5">{sign.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{sign.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="text-center">
            <div className="p-8 md:p-12 glass-card border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900/90 to-blue-950/40 rounded-2xl max-w-4xl mx-auto text-center shadow-xl">
              <h3 className="text-2xl md:text-3xl font-headline font-bold mb-3 text-white">
                Recognize Any of These Signs?
              </h3>
              <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
                Do not send any more money to the platform, no matter what they promise. Contact our investigation team for a free, confidential review of your situation.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="#forensic-intake" className="w-full sm:w-auto">
                  <Button size="lg" className="h-13 px-8 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/25 transition-all w-full sm:w-auto flex items-center justify-center gap-2">
                    <span>Submit Your Case For Free</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <a href="mailto:investigator@epicresurge.com" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="h-13 px-8 border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white font-medium rounded-xl transition-all w-full sm:w-auto flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span>investigator@epicresurge.com</span>
                  </Button>
                </a>
              </div>
            </div>
          </SectionReveal>
          
        </div>
      </div>
    </section>
  );
}
