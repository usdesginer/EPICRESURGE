'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionReveal } from '@/components/ui/section-reveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { 
  Mail, 
  ShieldCheck, 
  Building2, 
  Loader2,
  Lock,
  ArrowRight,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DIVISIONS = [
  "Cryptocurrency Scam",
  "Loan Fraud & Advance-Fee Scheme",
  "Bad Broker & Blocked Withdrawals",
  "Romance Scam & Pig Butchering",
  "Bank Transfer & Wire Fraud",
  "Other Online Financial Fraud"
];

export function ContactPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [caseId, setCaseId] = useState('');
  const [honeypot, setHoneypot] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    country: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot spam defense
    if (honeypot) {
      setSubmitted(true);
      return;
    }

    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      toast({
        variant: 'destructive',
        title: "Required Information Missing",
        description: "Please fill in all required fields to submit your inquiry.",
      });
      return;
    }
    
    setLoading(true);

    try {
      const generatedId = `EPR-${Math.floor(10000 + Math.random() * 90000)}`;
      setCaseId(generatedId);
      
      const payload = {
        case_id: generatedId,
        case_type: formData.service,
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        user_country: formData.country,
        description: formData.message,
        status: 'Review Pending',
        risk_level: 'Initial Inquiry',
        evidence_integrity: 'Pending Review',
        form_values: { source: 'Contact Portal' }
      };

      const { error } = await supabase
        .from('cases')
        .insert([payload]);

      if (error) throw error;

      toast({
        title: "Inquiry Received",
        description: "Your case inquiry has been securely delivered to our team.",
      });

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        country: '',
        message: ''
      });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: "Transmission Failed",
        description: error.message || "An error occurred. Please try again or email us directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#080F1D] text-[#F8FAFC]">
      <Navbar />
      
      {/* Hero Header: Desktop 56-68px */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 border-b border-[#1E2E48] bg-[#080F1D] overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionReveal className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111D31] border border-[#1E2E48] text-[#38BDF8] text-xs font-semibold mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>Confidential & Secure Communication</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold mb-5 tracking-tight text-[#F8FAFC]">
              Contact Our Investigation Team
            </h1>
            
            <p className="text-base md:text-[17px] text-[#94A3B8] leading-relaxed max-w-2xl mx-auto font-normal">
              Whether you are reporting a suspected scam, requesting an asset trace, or seeking guidance on your options, our senior investigators are available to assist you.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">
            
            {/* Left Column: Direct Info & Hubs */}
            <div className="lg:col-span-5 space-y-6">
              <SectionReveal>
                <Card className="border-[#1E2E48] bg-[#111D31] p-7 md:p-8 rounded-2xl shadow-lg shadow-black/20 hover:border-slate-700 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0E1726] border border-[#162338] flex items-center justify-center shrink-0 text-[#38BDF8]">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#38BDF8] mb-1">Direct Senior Desk</p>
                      <a href="mailto:investigator@epicresurge.com" className="text-lg md:text-xl font-headline font-bold text-[#F8FAFC] hover:text-[#38BDF8] transition-colors break-all">
                        investigator@epicresurge.com
                      </a>
                      <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed font-normal">
                        Send sensitive transaction documents or private briefings directly to our investigators.
                      </p>
                    </div>
                  </div>
                </Card>

                <div className="pt-4 space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8] px-1">Global Regional Desks</h3>
                  <div className="grid gap-3">
                    {[
                      { city: "Switzerland Operations Office", region: "Landstrasse 73, 8718 Schänis, Switzerland", time: "Central European Operations & Forensic Desk" },
                      { city: "New York Hub", region: "North America Operations Desk", time: "Mon–Fri: 9am - 8pm EST" },
                      { city: "London Hub", region: "UK & Commonwealth Liaison", time: "Mon–Fri: 8am - 7pm GMT" },
                      { city: "Singapore Hub", region: "Asia-Pacific Regional Office", time: "Mon–Sat: 9am - 9pm SGT" }
                    ].map((hub, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-[#111D31] border border-[#1E2E48] hover:border-slate-700 transition-all flex items-start gap-3.5">
                        <Building2 className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-bold text-[#F8FAFC]">{hub.city}</h4>
                          <p className="text-xs text-[#94A3B8] font-normal">{hub.region}</p>
                          <p className="text-[11px] text-[#38BDF8] mt-1 font-medium">{hub.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#0E1726] border border-[#1E2E48] text-xs text-[#94A3B8] space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-[#F8FAFC]">
                    <Lock className="w-4 h-4 text-[#10B981]" />
                    <span>Non-Disclosure & Privacy Assurance</span>
                  </div>
                  <p className="leading-relaxed font-normal">
                    All case inquiries are covered by attorney-client-style confidentiality protocols. We never share your records with third parties without your explicit authorization.
                  </p>
                </div>
              </SectionReveal>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <SectionReveal delay={150}>
                <Card className="border-[#1E2E48] bg-[#111D31] rounded-2xl p-6 md:p-10 shadow-lg shadow-black/25">
                  {submitted ? (
                    <div className="py-12 text-center space-y-5 animate-in fade-in">
                      <div className="w-16 h-16 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-headline font-bold text-[#F8FAFC]">Inquiry Received</h3>
                      <p className="text-sm text-[#94A3B8] max-w-md mx-auto leading-relaxed font-normal">
                        Thank you for reaching out. Your case reference is <strong className="text-[#F8FAFC] font-numeric font-bold">{caseId}</strong>. A specialist will review your information and reply to your email within 24 hours.
                      </p>
                      <Button 
                        onClick={() => setSubmitted(false)}
                        className="bg-[#2563EB] hover:bg-blue-600 text-[#F8FAFC] font-semibold rounded-xl px-6"
                      >
                        Send Another Inquiry
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Anti-Spam Honeypot */}
                      <input 
                        type="text" 
                        name="contact_verification_hp" 
                        value={honeypot} 
                        onChange={e => setHoneypot(e.target.value)} 
                        tabIndex={-1} 
                        autoComplete="off" 
                        className="hidden" 
                        aria-hidden="true" 
                      />

                      <div className="border-b border-[#1E2E48] pb-4 mb-2">
                        <h2 className="text-xl font-headline font-bold text-[#F8FAFC]">Case Intake Form</h2>
                        <p className="text-xs text-[#94A3B8] mt-1 font-normal">Please provide accurate details so we can assign the best specialist to your case.</p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-[#94A3B8]">Your Full Name *</label>
                          <Input 
                            placeholder="John Doe" 
                            className="bg-[#0E1726] border-[#1E2E48] rounded-xl h-11 text-[#F8FAFC] placeholder:text-[#94A3B8]/50 text-sm focus:border-[#38BDF8]" 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required 
                          />
                        </div>
                        
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-[#94A3B8]">Email Address *</label>
                          <Input 
                            type="email" 
                            placeholder="john@example.com" 
                            className="bg-[#0E1726] border-[#1E2E48] rounded-xl h-11 text-[#F8FAFC] placeholder:text-[#94A3B8]/50 text-sm focus:border-[#38BDF8]" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required 
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-[#94A3B8]">Phone Number (Optional)</label>
                          <Input 
                            type="tel" 
                            placeholder="+1 (555) 000-0000" 
                            className="bg-[#0E1726] border-[#1E2E48] rounded-xl h-11 text-[#F8FAFC] placeholder:text-[#94A3B8]/50 text-sm focus:border-[#38BDF8]" 
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-[#94A3B8]">Country of Residence</label>
                          <Input 
                            placeholder="e.g. United States, Canada, UK" 
                            className="bg-[#0E1726] border-[#1E2E48] rounded-xl h-11 text-[#F8FAFC] placeholder:text-[#94A3B8]/50 text-sm focus:border-[#38BDF8]" 
                            value={formData.country}
                            onChange={(e) => setFormData({...formData, country: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-[#94A3B8]">Type of Fraud or Incident *</label>
                        <Select 
                          value={formData.service} 
                          onValueChange={(val) => setFormData({...formData, service: val})}
                          required
                        >
                          <SelectTrigger className="bg-[#0E1726] border-[#1E2E48] rounded-xl h-11 text-sm text-[#F8FAFC] focus:border-[#38BDF8]">
                            <SelectValue placeholder="Select Incident Type *" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#111D31] border-[#1E2E48]">
                            {DIVISIONS.map((service) => (
                              <SelectItem key={service} value={service} className="text-sm font-medium text-[#F8FAFC]">
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-[#94A3B8]">Case Details & Narrative *</label>
                        <Textarea 
                          placeholder="Please describe what happened, the platform name, when you deposited, and the approximate amount..." 
                          className="min-h-[130px] bg-[#0E1726] border-[#1E2E48] rounded-xl text-[#F8FAFC] placeholder:text-[#94A3B8]/50 text-sm focus:border-[#38BDF8] leading-relaxed" 
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          required
                        />
                      </div>

                      <div className="pt-2">
                        <Button 
                          type="submit"
                          disabled={loading} 
                          className="w-full sm:w-auto h-12 px-8 bg-[#2563EB] hover:bg-blue-600 text-[#F8FAFC] font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                        >
                          {loading ? (
                            <div className="flex items-center gap-2">
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>Submitting Case...</span>
                            </div>
                          ) : (
                            <>
                              <span>Submit Confidential Case</span>
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </Button>
                      </div>

                      <div className="pt-4 border-t border-[#1E2E48] flex items-center justify-between text-xs text-[#94A3B8]">
                        <span className="flex items-center gap-1.5">
                          <Lock className="w-3.5 h-3.5 text-[#10B981]" />
                          256-Bit SSL Encrypted
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
                          24h Response Window
                        </span>
                      </div>
                    </form>
                  )}
                </Card>
              </SectionReveal>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default ContactPage;
