'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Coins, 
  TrendingUp, 
  Landmark, 
  UserCheck, 
  ArrowRight, 
  Search, 
  GitBranch, 
  Compass, 
  Info,
  ShieldAlert,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  HeartHandshake,
  BadgeAlert
} from 'lucide-react';
import { SectionReveal } from '@/components/ui/section-reveal';
import { Button } from '@/components/ui/button';

// 5 Situation Cards Representing Core Victim Scenarios
const SITUATIONS = [
  {
    id: "crypto-scams",
    title: "Cryptocurrency scams",
    subtitle: "Lost money through suspicious crypto transactions or fake web3 dApps?",
    imageUrl: "https://images.openai.com/static-rsc-4/fLGgKQbINdt2EvqkP2OaJ4IhCbVvGs067jfNyw_EcsddFkaCueyVJUk7c2VGdpNdOSJbkrcBCFYMo5ZPXMOiUW_6mFlGCC0lCJ8pDphpV8bld2ux5jIusLN3GVeAba6jBi8OYZhAG1YIDfaur_9NNi43zECH9iE4BUUQXY_lHis?purpose=inline",
    icon: Coins,
    tag: "Crypto Fraud"
  },
  {
    id: "investment-scams",
    title: "Bad broker & trading scams",
    subtitle: "Invested in a platform that locks withdrawals or demands fake clearance fees?",
    imageUrl: "https://images.openai.com/static-rsc-4/1P3IPVzuUQyTFHWG6S1QsPkOGEMLKcsNN6YBPwQ0WWyexTXRvyq0kMg1AorG5ruFKMxatoazC_X1dQiXu4-dxSaoh_4FQBGGz2th991WznSu8MkDLoj5XAnXVpt0lpeEK3QE-3o4IxGHY-h5fBMawBYgfZ3FhzEB-KTaI-s8KIg?purpose=inline",
    icon: TrendingUp,
    tag: "Broker Triage"
  },
  {
    id: "loan-fraud",
    title: "Loan fraud & advance fees",
    subtitle: "Paid upfront collateral, fees, or insurance for an online loan that never arrived?",
    imageUrl: "https://images.openai.com/static-rsc-4/O6BlensE0sq5fBKvEMnlbrMOAxMs82-DSZNWVBrYq2s1Unfwxi-B3qJJbbbD0aNrHujIPwKRJ1IyGgc4bZi_hU2Hs8bVfrCV215H5C9bexSpgD37rjPzo3sKMVhZnK-C3UOEQUFJAJD1zLpsry2yDbM62v8xTM3QKbIfpitSsuI?purpose=inline",
    icon: Landmark,
    tag: "Loan Fraud"
  },
  {
    id: "romance-scams",
    title: "Romance & trust schemes",
    subtitle: "Met someone online who gained your trust and guided you into an investment?",
    imageUrl: "https://images.openai.com/static-rsc-4/wknvzZmZFX41Pp-t20j5fsyfVloBLMLahnH3F6n2F0WMR-HS0r4dXaed0uq3gGfq7Tboe95dM8gYSHHovG-xBGQvE78mjv2ioIn8Da7ZUSyO1ZhzvA_dmITGmb17I2XD5vRyKd--Rr7kkowDGbcx9ITRGXqNxlQVPeYowDUVQxhHf4MR5dsFYu-36GVrXsoC?purpose=inline",
    icon: HeartHandshake,
    tag: "Romance Fraud"
  },
  {
    id: "bank-fraud",
    title: "Bank transfer fraud",
    subtitle: "Tricked into sending money to an impersonator via wire or push payment?",
    imageUrl: "https://images.openai.com/static-rsc-4/O6BlensE0sq5fBKvEMnlbrMOAxMs82-DSZNWVBrYq2s1Unfwxi-B3qJJbbbD0aNrHujIPwKRJ1IyGgc4bZi_hU2Hs8bVfrCV215H5C9bexSpgD37rjPzo3sKMVhZnK-C3UOEQUFJAJD1zLpsry2yDbM62v8xTM3QKbIfpitSsuI?purpose=inline",
    icon: UserCheck,
    tag: "Wire & Bank"
  }
];

// 3 Larger Core Service Pillars
const SERVICE_PILLARS = [
  {
    id: "investigate",
    title: "Investigate",
    tagline: "Scam & Platform Investigation",
    description: "We examine suspicious online activities, investment platforms, and digital evidence to understand what happened.",
    href: "/services/scam-investigation",
    buttonText: "Explore scam investigations",
    icon: Search,
    points: [
      "Auditing suspicious brokerages & fake trading apps",
      "Organizing correspondence, chat logs, and emails",
      "Identifying warning signs and deceptive platform tactics"
    ]
  },
  {
    id: "trace",
    title: "Trace & Intervene",
    tagline: "Loan Fraud Investigation & Asset Tracing",
    description: "We investigate fraudulent loan offers, deceptive lender entities, and trace illicit fund movements across banking networks and ledgers.",
    href: "/services/loan-fraud-investigation",
    buttonText: "Learn about loan fraud investigation",
    icon: Landmark,
    points: [
      "Auditing counterfeit lending licenses & forged credit agreements",
      "Tracing wire and cryptocurrency advance-fee deposits",
      "Locating beneficiary accounts & coordinating with bank fraud desks"
    ]
  },
  {
    id: "guide",
    title: "Triage & Recover",
    tagline: "Bad Broker Triage & Recovery Guidance",
    description: "We intervene against unverified brokers withholding withdrawals, compile regulatory dossiers, and guide formal recovery channels.",
    href: "/services/bad-broker-triage",
    buttonText: "Explore bad broker triage",
    icon: Compass,
    points: [
      "Intervening against forced withdrawal fees & account lockouts",
      "Submitting formal evidence packets to exchanges and banks",
      "Protecting clients from repeat and secondary recovery scams"
    ]
  }
];

export function ServicesSection() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="services" className="py-24 bg-[#F4F0E8] relative border-b border-[#E5DFD3]">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F3] border border-[#E2D1A8] text-[#9E7D3B] text-xs font-semibold mb-4 shadow-xs">
              <ShieldAlert className="w-4 h-4 text-[#C5A059]" />
              <span>Who We Help & Our Services</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-headline font-bold mb-4 text-[#0B1528] tracking-tight">
              Online Scams Come in Different Forms. <br className="hidden sm:inline" />
              <span className="text-[#1D4ED8]">We&apos;re Here to Help.</span>
            </h2>
            
            <p className="text-base md:text-[18px] text-[#475569] leading-relaxed max-w-2xl mx-auto font-normal">
              Whether you experienced an uncooperative broker, fake cryptocurrency exchange, or fraudulent transfer, we examine available records and explain your recovery options.
            </p>
          </SectionReveal>
        </div>

        {/* 1. Four Small Situation Cards */}
        <div className="mb-20">
          <SectionReveal>
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#E5DFD3]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#475569]">
                Common Situations We Handle
              </span>
              <span className="text-xs text-[#64748B] font-medium">
                Select your situation for tailored guidance
              </span>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-4.5">
            {SITUATIONS.map((item, idx) => {
              const Icon = item.icon;
              const hasError = imageErrors[item.id];

              return (
                <SectionReveal key={item.id} delay={idx * 60} className="h-full">
                  <Link href="#forensic-intake" className="block h-full group">
                    <div className="h-full rounded-2xl bg-[#FAF8F3] border border-[#E5DFD3] hover:border-[#C5A059]/60 card-border-glow flex flex-col justify-between overflow-hidden shadow-xs">
                      <div>
                        {/* Compact Image Container */}
                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 border-b border-[#E5DFD3]">
                          {!hasError ? (
                            <Image
                              src={item.imageUrl}
                              alt={item.title}
                              fill
                              unoptimized
                              onError={() => handleImageError(item.id)}
                              className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-slate-100">
                              <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#1D4ED8] flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                                <Icon className="w-5 h-5" />
                              </div>
                              <span className="text-[11px] font-semibold text-slate-600">{item.tag}</span>
                            </div>
                          )}

                          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F3]/80 via-transparent to-transparent pointer-events-none" />

                          <div className="absolute bottom-2.5 left-3 w-7 h-7 rounded-md bg-[#FAF8F3] border border-[#E5DFD3] flex items-center justify-center text-[#1D4ED8] shadow-xs group-hover:scale-110 group-hover:bg-[#1D4ED8] group-hover:text-white transition-all duration-300">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        {/* Text Content */}
                        <div className="p-4 sm:p-4.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8] block mb-1">
                            {item.tag}
                          </span>
                          
                          <h3 className="text-base font-headline font-bold text-[#0B1528] mb-1 leading-snug group-hover:text-[#1D4ED8] transition-colors duration-200">
                            {item.title}
                          </h3>
                          
                          <p className="text-xs text-[#475569] leading-relaxed font-normal">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Small Card Bottom Link */}
                      <div className="px-4 pb-4 pt-1 flex items-center justify-between text-xs font-semibold text-[#1D4ED8]">
                        <span>Check this case</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </SectionReveal>
              );
            })}
          </div>
        </div>

        {/* 2. Three Larger Core Service Pillars */}
        <div>
          <SectionReveal>
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#E5DFD3]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8] block mb-1">
                  How We Help
                </span>
                <h3 className="text-xl md:text-2xl font-headline font-bold text-[#0B1528]">
                  Three Core Service Pillars
                </h3>
              </div>
              <Link href="/services" className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-[#1D4ED8] hover:underline">
                <span>View all 6 detailed services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {SERVICE_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;

              return (
                <SectionReveal key={pillar.id} delay={idx * 80} className="h-full">
                  <div className="h-full rounded-2xl bg-[#FAF8F3] border border-[#E5DFD3] hover:border-[#C5A059]/60 card-border-glow p-7 md:p-8 flex flex-col justify-between shadow-xs group">
                    <div>
                      {/* Top Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-13 h-13 rounded-2xl bg-blue-50/80 border border-blue-200 flex items-center justify-center text-[#1D4ED8] group-hover:bg-[#1D4ED8] group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-xs">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-numeric font-bold text-[#C5A059] group-hover:text-[#1D4ED8] transition-colors">
                          0{idx + 1}
                        </span>
                      </div>

                      {/* Main Title & Tagline */}
                      <span className="text-xs font-semibold text-[#1D4ED8] uppercase tracking-wider block mb-1">
                        {pillar.tagline}
                      </span>
                      <h4 className="text-2xl md:text-[26px] font-headline font-extrabold text-[#0B1528] mb-3 leading-snug group-hover:text-[#1D4ED8] transition-colors">
                        {pillar.title}
                      </h4>

                      {/* Everyday English Description */}
                      <p className="text-sm md:text-[15px] text-[#475569] leading-relaxed font-normal mb-6">
                        {pillar.description}
                      </p>

                      {/* 3 Key Deliverables */}
                      <div className="space-y-2.5 pt-2 border-t border-[#E5DFD3]/80 mb-6">
                        {pillar.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#475569]">
                            <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Button */}
                    <div className="pt-4 border-t border-[#E5DFD3]/80">
                      <Link href={pillar.href} className="inline-block w-full">
                        <Button 
                          variant="outline" 
                          className="w-full justify-between h-12 text-sm font-semibold border-[#DCD7CE] bg-white hover:bg-[#F3EFE6] hover:border-[#C5A059] hover:text-[#0B1528] text-[#0B1528] rounded-xl transition-all shadow-xs group/btn"
                        >
                          <span>{pillar.buttonText}</span>
                          <ArrowRight className="w-4 h-4 text-[#1D4ED8] group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>

          {/* Honest Service Scope Disclosure */}
          <SectionReveal>
            <div className="p-6 sm:p-7 rounded-2xl bg-[#FAF8F3] border border-[#E5DFD3] flex flex-col md:flex-row items-start md:items-center gap-5 shadow-xs">
              <div className="w-11 h-11 rounded-xl bg-blue-50/80 border border-blue-200 text-[#1D4ED8] flex items-center justify-center shrink-0">
                <Info className="w-5 h-5" />
              </div>

              <div className="space-y-1 flex-1">
                <h4 className="text-sm sm:text-base font-bold text-[#0B1528]">
                  Our Commitment to Honest Service Scope
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                  EpicResurge examines transactions, organizes records, and provides guidance to help you report what happened to banks, cryptocurrency exchanges, and relevant authorities. We do not make false promises of guaranteed recovery, protecting you from secondary recovery scams.
                </p>
              </div>

              <div className="shrink-0 w-full md:w-auto pt-2 md:pt-0">
                <Link href="/services" className="block w-full md:w-auto">
                  <Button variant="outline" className="w-full md:w-auto h-10 px-5 border-[#DCD7CE] bg-white hover:bg-[#F3EFE6] text-[#0B1528] text-xs sm:text-sm font-semibold rounded-xl shadow-xs">
                    <span>View All Services</span>
                  </Button>
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>

      </div>
    </section>
  );
}
