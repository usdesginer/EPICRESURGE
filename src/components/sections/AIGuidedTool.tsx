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
    <section id="forensic-intake" className="py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      {/* Ambient drifting light backdrop */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-500/[0.04] rounded-full blur-[140px] pointer-events-none animate-ambient-drift" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {step === 'form' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Top Eyebrow Badge */}
            <div className="text-center mb-10 md:mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold mb-3 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
                <span>Confidential Case Review · Free Initial Assessment</span>
              </div>
            </div>

            {/* Main 2-Column Conversion Layout */}
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
              
              {/* Left Column: Headline, Explanation & What Happens Next */}
              <div className="lg:col-span-5 space-y-6">
                <SectionReveal>
                  <div className="space-y-4">
                    <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-headline font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
                      Every Situation Has a Story. <br />
                      <span className="text-[#2563EB]">Let&apos;s Understand Yours.</span>
                    </h2>
                    
                    <p className="text-base sm:text-[17px] text-slate-600 leading-relaxed font-normal">
                      Tell us what happened, and our team will review your enquiry to determine whether we may be able to help.
                    </p>
                  </div>

                  {/* 100% Free Initial Assessment Callout */}
                  <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/80 flex items-start gap-3 mt-6">
                    <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-[#0F172A]">100% Free Initial Assessment</p>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        There is zero cost or obligation for submitting your case for preliminary review. All initial evaluations are strictly free.
                      </p>
                    </div>
                  </div>

                  {/* What Happens Next: 3 Simple Steps */}
                  <div className="pt-4 space-y-3.5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      What happens after you submit:
                    </h3>

                    <div className="space-y-3">
                      {/* Step 1 */}
                      <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                        <span className="w-6 h-6 rounded-full bg-blue-100 text-[#2563EB] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          1
                        </span>
                        <div>
                          <p className="text-sm font-bold text-[#0F172A]">Your enquiry is received</p>
                          <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                            A reference ID is generated immediately and your details are assigned to a senior investigator.
                          </p>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                        <span className="w-6 h-6 rounded-full bg-blue-100 text-[#2563EB] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          2
                        </span>
                        <div>
                          <p className="text-sm font-bold text-[#0F172A]">Your information is reviewed</p>
                          <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                            We check available blockchain ledgers, platforms, and payment records within 24 hours.
                          </p>
                        </div>
                      </div>

                      {/* Step 3 */}
                      <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                        <span className="w-6 h-6 rounded-full bg-blue-100 text-[#2563EB] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          3
                        </span>
                        <div>
                          <p className="text-sm font-bold text-[#0F172A]">We explain the available next steps</p>
                          <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                            You receive an honest breakdown of what the evidence shows and what recovery pathways are possible.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Direct Email Link & Response Time */}
                  <div className="pt-2 text-xs text-slate-500 space-y-2 border-t border-slate-200/80">
                    <div className="flex items-center gap-2 font-medium">
                      <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Response-Time Guarantee: Under 24 hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#2563EB] shrink-0" />
                      <span>Prefer direct email? </span>
                      <a href="mailto:investigator@epicresurge.com" className="text-[#2563EB] font-semibold hover:underline">
                        investigator@epicresurge.com
                      </a>
                    </div>
                  </div>
                </SectionReveal>
              </div>

              {/* Right Column: Short, Clean Form */}
              <div className="lg:col-span-7">
                <SectionReveal delay={100}>
                  <Card className="border-slate-200 bg-white p-6 sm:p-8 md:p-9 rounded-2xl shadow-md card-border-glow">
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
                          <Label className="text-xs font-semibold uppercase tracking-wider text-slate-700">Your Full Name *</Label>
                          <Input 
                            placeholder="e.g. John Doe" 
                            className="bg-slate-50 border-slate-300 rounded-xl h-11 text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all"
                            value={bookingValues.name}
                            onChange={e => setBookingValues({...bookingValues, name: e.target.value})}
                            required
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label className="text-xs font-semibold uppercase tracking-wider text-slate-700">Email Address *</Label>
                          <Input 
                            type="email" 
                            placeholder="john@example.com" 
                            className="bg-slate-50 border-slate-300 rounded-xl h-11 text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all"
                            value={bookingValues.email}
                            onChange={e => setBookingValues({...bookingValues, email: e.target.value})}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <Label className="text-xs font-semibold uppercase tracking-wider text-slate-700">Phone (Optional)</Label>
                          <Input 
                            type="tel"
                            placeholder="+1 (555) 000-0000" 
                            className="bg-slate-50 border-slate-300 rounded-xl h-11 text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all"
                            value={bookingValues.phone}
                            onChange={e => setBookingValues({...bookingValues, phone: e.target.value})}
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label className="text-xs font-semibold uppercase tracking-wider text-slate-700">Country of Residence</Label>
                          <Input 
                            placeholder="e.g. United States, UK, Canada" 
                            className="bg-slate-50 border-slate-300 rounded-xl h-11 text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all"
                            value={bookingValues.country}
                            onChange={e => setBookingValues({...bookingValues, country: e.target.value})}
                          />
                        </div>
                      </div>

                      {/* Incident Particulars */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <Label className="text-xs font-semibold uppercase tracking-wider text-slate-700">Type of Incident *</Label>
                          <select
                            value={scamType}
                            onChange={e => setScamType(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-300 rounded-xl h-11 px-3 text-sm text-[#0F172A] focus:border-[#2563EB] focus:ring-2 focus:ring-blue-600/20 focus:bg-white outline-none transition-all"
                          >
                            {SCAM_TYPES.map(type => (
                              <option key={type} value={type} className="bg-white text-[#0F172A]">{type}</option>
                            ))}
                          </select>
                        </div>
                        <div className="space-y-1.5">
                          <Label className="text-xs font-semibold uppercase tracking-wider text-slate-700">Estimated Amount Lost</Label>
                          <Input 
                            placeholder="e.g. $15,000 USD / 0.5 BTC" 
                            className="bg-slate-50 border-slate-300 rounded-xl h-11 text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all"
                            value={estimatedLoss}
                            onChange={e => setEstimatedLoss(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold uppercase tracking-wider text-slate-700">What Happened? *</Label>
                        <Textarea 
                          placeholder="Briefly describe the platform name, what was promised, how you deposited funds, and what occurred when you attempted to withdraw..."
                          className="min-h-[110px] bg-slate-50 border-slate-300 rounded-xl text-[#0F172A] placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-600/20 focus:bg-white leading-relaxed text-sm transition-all"
                          value={description}
                          onChange={e => setDescription(e.target.value)}
                          required
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <Button 
                          type="submit"
                          disabled={loading}
                          className="w-full h-13 text-base font-semibold bg-[#2563EB] hover:bg-blue-700 text-white rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 group"
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
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-200 text-xs text-slate-500">
                        <div className="flex items-center gap-2">
                          <Lock className="w-3.5 h-3.5 text-emerald-600" />
                          <span>256-Bit Encrypted Secure Submission</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
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
            <div className="w-20 h-20 rounded-2xl bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center mx-auto mb-6 shadow-xs">
              <svg 
                className="w-10 h-10 text-emerald-600 animate-draw-check" 
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
            
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-[#0F172A] mb-3">
              Case Successfully Submitted
            </h2>
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold mb-8">
              <span>Your Case Reference ID:</span>
              <span className="font-numeric font-bold text-[#2563EB]">{caseId}</span>
            </div>

            <div className="max-w-xl mx-auto p-8 rounded-2xl bg-white border border-slate-200 text-left space-y-6 shadow-md shadow-slate-200/50">
              <h4 className="text-base font-semibold text-[#0F172A] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#2563EB]" /> What Happens Next?
              </h4>
              
              <ol className="space-y-4 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-[#2563EB] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <div>
                    <strong className="text-[#0F172A]">Assigned to an Investigator:</strong> A senior financial fraud analyst has received your submission.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-[#2563EB] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <div>
                    <strong className="text-[#0F172A]">Preliminary Trail Scan:</strong> We audit transaction and platform details to evaluate recovery feasibility.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-[#2563EB] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <div>
                    <strong className="text-[#0F172A]">Confidential Contact:</strong> You will receive a direct email briefing from your investigator within 24 hours.
                  </div>
                </li>
              </ol>

              <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Your submission is securely logged and protected under strict confidentiality.</span>
              </div>
            </div>

            <Button 
              variant="outline" 
              className="mt-8 h-12 px-8 border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-medium rounded-xl shadow-sm"
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
