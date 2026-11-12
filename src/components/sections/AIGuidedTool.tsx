"use client"

import { useState } from 'react'
import { aiGuidedRecoveryPreparation } from '@/ai/flows/ai-guided-recovery-preparation'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { supabase } from '@/lib/supabase'
import { 
  Loader2, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  ShieldCheck, 
  Clock,
  Mail,
  FileText,
  Search,
  Compass,
  AlertCircle
} from 'lucide-react'
import { SectionReveal } from '@/components/ui/section-reveal'

const SCAM_TYPES = [
  "Crypto & Digital Asset Scam",
  "Loan Fraud & Advance-Fee Scheme",
  "Bad Broker & Blocked Withdrawals",
  "Romance Scam & Pig Butchering",
  "Investment & Ponzi Scheme",
  "Bank Transfer & Wire Fraud",
  "Other Financial Scam"
];

export function AIGuidedTool() {
  const [step, setStep] = useState<'form' | 'result'>('form')
  const [description, setDescription] = useState('')
  const [scamType, setScamType] = useState('Crypto & Bitcoin Scam')
  const [estimatedLoss, setEstimatedLoss] = useState('')
  const [loading, setLoading] = useState(false)
  const [caseId, setCaseId] = useState('')
  const [honeypot, setHoneypot] = useState('')

  const [bookingValues, setBookingValues] = useState({
    name: '',
    email: '',
    phone: '',
    country: ''
  })
  
  const { toast } = useToast()

  const handleFinalSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    
    // Honeypot spam protection: bots fill hidden inputs
    if (honeypot) {
      setStep('result')
      return
    }

    if (!bookingValues.email || !bookingValues.name || !description) {
      toast({ 
        variant: 'destructive', 
        title: "Required Fields Missing", 
        description: "Please provide your name, email, and a brief description of what happened." 
      })
      return
    }
    
    setLoading(true)
    const generatedId = `EPR-${Math.floor(10000 + Math.random() * 90000)}`
    setCaseId(generatedId)

    try {
      const promptText = `
NAME: ${bookingValues.name}
EMAIL: ${bookingValues.email}
PHONE: ${bookingValues.phone}
COUNTRY: ${bookingValues.country}
SCAM TYPE: ${scamType}
ESTIMATED LOSS: ${estimatedLoss}
NARRATIVE: ${description}
      `.trim()

      await supabase.from('cases').insert([{
        case_id: generatedId,
        case_type: scamType,
        user_name: bookingValues.name,
        user_email: bookingValues.email,
        user_phone: bookingValues.phone,
        user_country: bookingValues.country,
        description: `${description}\n\nEstimated Loss: ${estimatedLoss}`,
        status: 'Review Pending',
        risk_level: 'Initial Intake'
      }]);

      aiGuidedRecoveryPreparation({ initialProblemDescription: promptText }).then(aiOutput => {
         supabase.from('cases').update({ result_data: aiOutput }).eq('case_id', generatedId);
      }).catch(err => console.error("Background AI processing error:", err));

      setStep('result')
    } catch (error: any) {
      toast({ 
        variant: 'destructive', 
        title: "Submission Error", 
        description: error.message || "Failed to submit case. Please try again or email us directly." 
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="forensic-intake" className="py-24 bg-[#1C3048] border-y border-[#284666] relative overflow-hidden text-white">
      {/* Ambient drifting light backdrop */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#1D4ED8]/[0.08] rounded-full blur-[140px] pointer-events-none animate-ambient-drift" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {step === 'form' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Top Eyebrow Badge: Midnight + Champagne Gold */}
            <div className="text-center mb-10 md:mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1528] border border-[#C5A059]/40 text-[#DFBA73] text-xs font-semibold mb-3 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                <span>Confidential Case Review · Free Initial Assessment</span>
              </div>
            </div>

            {/* Main 2-Column Conversion Layout */}
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
              
              {/* Left Column: Headline, Explanation & What Happens Next */}
              <div className="lg:col-span-5 space-y-6">
                <SectionReveal>
                  <div className="space-y-4">
                    <h2 className="text-[28px] sm:text-[32px] lg:text-[34px] font-headline font-[750] text-white tracking-[-0.03em] leading-[1.18]">
                      Every Situation Has a Story. <br />
                      <span className="text-[#60A5FA]">Let&apos;s Understand Yours.</span>
                    </h2>
                    
                    <p className="text-base text-[#CBD5E1] leading-[1.65] font-normal">
                      Tell us what happened, and our team will review your enquiry to determine whether we may be able to help.
                    </p>
                  </div>

                  {/* 100% Free Initial Assessment Callout */}
                  <div className="p-4 rounded-xl bg-[#101D30] border border-[#233C5E] flex items-start gap-3 mt-6 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#0F766E] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-white">100% Free Initial Assessment</p>
                      <p className="text-xs text-[#94A3B8] mt-0.5 leading-relaxed">
                        There is zero cost or obligation for submitting your case for preliminary review. All initial evaluations are strictly free.
                      </p>
                    </div>
                  </div>

                  {/* What Happens Next: 3 Simple Steps */}
                  <div className="pt-4 space-y-3.5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
                      What happens after you submit:
                    </p>

                    <div className="space-y-3">
                      {/* Step 1 */}
                      <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#122238] border border-[#244066] shadow-xs">
                        <span className="w-6 h-6 rounded-full bg-[#1D4ED8] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          1
                        </span>
                        <div>
                          <p className="text-sm font-bold text-white">Your enquiry is received</p>
                          <p className="text-xs text-[#CBD5E1] mt-0.5 leading-relaxed">
                            A reference ID is generated immediately and your details are assigned to a senior investigator.
                          </p>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#122238] border border-[#244066] shadow-xs">
                        <span className="w-6 h-6 rounded-full bg-[#1D4ED8] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          2
                        </span>
                        <div>
                          <p className="text-sm font-bold text-white">Your information is reviewed</p>
                          <p className="text-xs text-[#CBD5E1] mt-0.5 leading-relaxed">
                            We check available blockchain ledgers, platforms, and payment records within 24 hours.
                          </p>
                        </div>
                      </div>

                      {/* Step 3 */}
                      <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#122238] border border-[#244066] shadow-xs">
                        <span className="w-6 h-6 rounded-full bg-[#1D4ED8] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          3
                        </span>
                        <div>
                          <p className="text-sm font-bold text-white">We explain the available next steps</p>
                          <p className="text-xs text-[#CBD5E1] mt-0.5 leading-relaxed">
                            You receive an honest breakdown of what the evidence shows and what recovery pathways are possible.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Direct Email Link & Response Time */}
                  <div className="pt-2 text-xs text-[#94A3B8] space-y-2 border-t border-[#244066]">
                    <div className="flex items-center gap-2 font-medium">
                      <Clock className="w-4 h-4 text-[#0F766E] shrink-0" />
                      <span>Response-Time Guarantee: Under 24 hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#60A5FA] shrink-0" />
                      <span>Prefer direct email? </span>
                      <a href="mailto:investigator@epicresurge.com" className="text-[#60A5FA] font-semibold hover:underline">
                        investigator@epicresurge.com
                      </a>
                    </div>
                  </div>
                </SectionReveal>
              </div>

              {/* Right Column: Short, Clean Form in Soft Ivory */}
              <div className="lg:col-span-7">
                <SectionReveal delay={100}>
                  <Card className="border-[#E5DFD3] bg-[#FAF8F5] p-6 sm:p-8 md:p-9 rounded-2xl shadow-2xl shadow-black/40 text-[#0B1528] card-border-glow">
                    <form onSubmit={handleFinalSubmit} className="space-y-5">
                      
                      {/* Honeypot Spam Protection Field */}
                      <input 
                        type="text" 
                        name="user_verification_token_hp" 
                        value={honeypot} 
                        onChange={e => setHoneypot(e.target.value)} 
                        tabIndex={-1} 
                        autoComplete="off" 
                        className="hidden" 
                        aria-hidden="true" 
                      />

                      {/* Contact Info */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <Label className="text-xs font-semibold uppercase tracking-wider text-[#475569]">Your Full Name *</Label>
                          <Input 
                            placeholder="e.g. John Doe" 
                            className="bg-white border-[#D6CFC3] rounded-xl h-11 text-[#0B1528] placeholder:text-slate-400 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all"
                            value={bookingValues.name}
                            onChange={e => setBookingValues({...bookingValues, name: e.target.value})}
                            required
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label className="text-xs font-semibold uppercase tracking-wider text-[#475569]">Email Address *</Label>
                          <Input 
                            type="email" 
                            placeholder="john@example.com" 
                            className="bg-white border-[#D6CFC3] rounded-xl h-11 text-[#0B1528] placeholder:text-slate-400 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all"
                            value={bookingValues.email}
                            onChange={e => setBookingValues({...bookingValues, email: e.target.value})}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <Label className="text-xs font-semibold uppercase tracking-wider text-[#475569]">Phone (Optional)</Label>
                          <Input 
                            type="tel"
                            placeholder="+1 (555) 000-0000" 
                            className="bg-white border-[#D6CFC3] rounded-xl h-11 text-[#0B1528] placeholder:text-slate-400 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all"
                            value={bookingValues.phone}
                            onChange={e => setBookingValues({...bookingValues, phone: e.target.value})}
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label className="text-xs font-semibold uppercase tracking-wider text-[#475569]">Country of Residence</Label>
                          <Input 
                            placeholder="e.g. United States, UK, Canada" 
                            className="bg-white border-[#D6CFC3] rounded-xl h-11 text-[#0B1528] placeholder:text-slate-400 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all"
                            value={bookingValues.country}
                            onChange={e => setBookingValues({...bookingValues, country: e.target.value})}
                          />
                        </div>
                      </div>

                      {/* Incident Particulars */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <Label className="text-xs font-semibold uppercase tracking-wider text-[#475569]">Type of Incident *</Label>
                          <select
                            value={scamType}
                            onChange={e => setScamType(e.target.value)}
                            className="w-full bg-white border border-[#D6CFC3] rounded-xl h-11 px-3 text-sm text-[#0B1528] focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-600/20 focus:bg-white outline-none transition-all"
                          >
                            {SCAM_TYPES.map(type => (
                              <option key={type} value={type} className="bg-white text-[#0B1528]">{type}</option>
                            ))}
                          </select>
                        </div>
                        <div className="space-y-1.5">
                          <Label className="text-xs font-semibold uppercase tracking-wider text-[#475569]">Estimated Amount Lost</Label>
                          <Input 
                            placeholder="e.g. $15,000 USD / 0.5 BTC" 
                            className="bg-white border-[#D6CFC3] rounded-xl h-11 text-[#0B1528] placeholder:text-slate-400 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all"
                            value={estimatedLoss}
                            onChange={e => setEstimatedLoss(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold uppercase tracking-wider text-[#475569]">What Happened? *</Label>
                        <Textarea 
                          placeholder="Briefly describe the platform name, what was promised, how you deposited funds, and what occurred when you attempted to withdraw..."
                          className="min-h-[110px] bg-white border-[#D6CFC3] rounded-xl text-[#0B1528] placeholder:text-slate-400 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-600/20 focus:bg-white leading-relaxed text-sm transition-all"
                          value={description}
                          onChange={e => setDescription(e.target.value)}
                          required
                        />
                      </div>

                      {/* Submit Button: Refined Blue */}
                      <div className="pt-2">
                        <Button 
                          type="submit"
                          disabled={loading}
                          className="w-full h-13 text-base font-semibold bg-[#1D4ED8] hover:bg-[#1E40AF] text-white rounded-xl shadow-lg shadow-blue-900/40 transition-all flex items-center justify-center gap-2 group border border-blue-400/20"
                        >
                          {loading ? (
                            <div className="flex items-center gap-2">
                              <Loader2 className="w-5 h-5 animate-spin" />
                              <span>Submitting Your Case Securely...</span>
                            </div>
                          ) : (
                            <>
                              <span>Submit Free Case Assessment</span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </Button>
                      </div>

                      {/* Form Security & Privacy Strip */}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-[#E5DFD3] text-xs text-[#64748B]">
                        <div className="flex items-center gap-2">
                          <Lock className="w-3.5 h-3.5 text-[#0F766E]" />
                          <span>256-Bit Encrypted Secure Submission</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E]" />
                          <span>Strict Non-Disclosure Guarantee</span>
                        </div>
                      </div>

                    </form>
                  </Card>
                </SectionReveal>
              </div>

            </div>
          </div>
        )}

        {/* Success Confirmation State */}
        {step === 'result' && (
          <div className="animate-in fade-in zoom-in-95 duration-500 text-center py-16">
            <div className="w-20 h-20 rounded-2xl bg-[#101D30] border-2 border-teal-500/40 flex items-center justify-center mx-auto mb-6 shadow-xs">
              <svg 
                className="w-10 h-10 text-[#0F766E] animate-draw-check" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-3">
              Case Successfully Submitted
            </h2>
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1528] border border-[#244066] text-[#CBD5E1] text-xs font-semibold mb-8">
              <span>Your Case Reference ID:</span>
              <span className="font-numeric font-bold text-[#60A5FA]">{caseId}</span>
            </div>

            <div className="max-w-xl mx-auto p-8 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD3] text-[#0B1528] text-left space-y-6 shadow-xl">
              <h4 className="text-base font-semibold text-[#0B1528] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#1D4ED8]" /> What Happens Next?
              </h4>
              
              <ol className="space-y-4 text-sm text-[#475569]">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1D4ED8] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <div>
                    <strong className="text-[#0B1528]">Assigned to an Investigator:</strong> A senior financial fraud analyst has received your submission.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1D4ED8] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <div>
                    <strong className="text-[#0B1528]">Preliminary Trail Scan:</strong> We audit transaction and platform details to evaluate recovery feasibility.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1D4ED8] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <div>
                    <strong className="text-[#0B1528]">Confidential Contact:</strong> You will receive a direct email briefing from your investigator within 24 hours.
                  </div>
                </li>
              </ol>

              <div className="pt-4 border-t border-[#E5DFD3] text-xs text-[#64748B] flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#0F766E] shrink-0" />
                <span>Your submission is securely logged and protected under strict confidentiality.</span>
              </div>
            </div>

            <Button 
              variant="outline" 
              className="mt-8 h-12 px-8 border-[#244066] bg-[#101D30] hover:bg-[#13253F] text-white font-medium rounded-xl shadow-sm"
              onClick={() => setStep('form')}
            >
              Submit Another Inquiry or Update
            </Button>
          </div>
        )}

      </div>
    </section>
  )
}
