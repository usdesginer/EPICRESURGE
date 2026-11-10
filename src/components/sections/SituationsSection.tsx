'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Coins, 
  TrendingUp, 
  Landmark, 
  HeartHandshake, 
  ArrowRight, 
  MessageSquare, 
  ShieldAlert, 
  ChevronRight 
} from 'lucide-react';
import { SectionReveal } from '@/components/ui/section-reveal';
import { Button } from '@/components/ui/button';

interface SituationCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  icon: any;
  tag: string;
  recoveryMechanism: string;
}

const SITUATIONS: SituationCard[] = [
  {
    id: "crypto-scams",
    title: "Cryptocurrency scams",
    description: "Someone persuaded you to send Bitcoin, Ethereum, or another digital currency to a fraudulent investment or trading platform.",
    imageUrl: "https://images.openai.com/static-rsc-4/fLGgKQbINdt2EvqkP2OaJ4IhCbVvGs067jfNyw_EcsddFkaCueyVJUk7c2VGdpNdOSJbkrcBCFYMo5ZPXMOiUW_6mFlGCC0lCJ8pDphpV8bld2ux5jIusLN3GVeAba6jBi8OYZhAG1YIDfaur_9NNi43zECH9iE4BUUQXY_lHis?purpose=inline",
    icon: Coins,
    tag: "Digital Currency Scams",
    recoveryMechanism: "Examining cryptocurrency transactions & contacting exchanges"
  },
  {
    id: "fake-investments",
    title: "Fake investment opportunities",
    description: "You invested money in a company or platform that now refuses to let you withdraw your funds.",
    imageUrl: "https://images.openai.com/static-rsc-4/1P3IPVzuUQyTFHWG6S1QsPkOGEMLKcsNN6YBPwQ0WWyexTXRvyq0kMg1AorG5ruFKMxatoazC_X1dQiXu4-dxSaoh_4FQBGGz2th991WznSu8MkDLoj5XAnXVpt0lpeEK3QE-3o4IxGHY-h5fBMawBYgfZ3FhzEB-KTaI-s8KIg?purpose=inline",
    icon: TrendingUp,
    tag: "Broker & Platform Schemes",
    recoveryMechanism: "Checking platform records & tracing destination accounts"
  },
  {
    id: "bank-fraud",
    title: "Bank transfer fraud",
    description: "You transferred money to someone who misrepresented their identity or intentions.",
    imageUrl: "https://images.openai.com/static-rsc-4/O6BlensE0sq5fBKvEMnlbrMOAxMs82-DSZNWVBrYq2s1Unfwxi-B3qJJbbbD0aNrHujIPwKRJ1IyGgc4bZi_hU2Hs8bVfrCV215H5C9bexSpgD37rjPzo3sKMVhZnK-C3UOEQUFJAJD1zLpsry2yDbM62v8xTM3QKbIfpitSsuI?purpose=inline",
    icon: Landmark,
    tag: "Wire & Bank Transfers",
    recoveryMechanism: "Tracing bank transfers & requesting provider recalls"
  },
  {
    id: "romance-scams",
    title: "Romance and impersonation scams",
    description: "Someone built your trust online before asking for money or financial assistance.",
    imageUrl: "https://images.openai.com/static-rsc-4/wknvzZmZFX41Pp-t20j5fsyfVloBLMLahnH3F6n2F0WMR-HS0r4dXaed0uq3gGfq7Tboe95dM8gYSHHovG-xBGQvE78mjv2ioIn8Da7ZUSyO1ZhzvA_dmITGmb17I2XD5vRyKd--Rr7kkowDGbcx9ITRGXqNxlQVPeYowDUVQxhHf4MR5dsFYu-36GVrXsoC?purpose=inline",
    icon: HeartHandshake,
    tag: "Online Trust & Imposter Fraud",
    recoveryMechanism: "Reviewing communications & preparing reports for authorities"
  }
];

export function SituationsSection() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="situations" className="py-20 md:py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-full">
        
        {/* Section Header: Easy to read on mobile without excessive breaks */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
              <ShieldAlert className="w-4 h-4 text-[#2563EB]" />
              <span>Who We Help</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-headline font-bold mb-3 md:mb-4 text-[#0F172A] tracking-tight">
              Have you experienced any of these situations?
            </h2>
            
            <p className="text-sm sm:text-base md:text-[17px] text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
              Online fraud happens in different ways, but every incident leaves a record of what occurred. Select the category that describes what happened to you.
            </p>
          </SectionReveal>
        </div>

        {/* 4 Cards Grid: Stacks cleanly 1-col on mobile, 2-col on tablet, 4-col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-7xl mx-auto mb-12 md:mb-14">
          {SITUATIONS.map((item, idx) => {
            const Icon = item.icon;
            const hasError = imageErrors[item.id];

            return (
              <SectionReveal key={item.id} delay={idx * 70} className="h-full">
                <div className="h-full rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between shadow-sm overflow-hidden group">
                  
                  <div>
                    {/* Visual Image Container: Resizes without distortion */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-slate-200">
                      {!hasError ? (
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          fill
                          unoptimized
                          onError={() => handleImageError(item.id)}
                          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-100">
                          <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center mb-2">
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="text-xs font-semibold text-slate-600">{item.tag}</span>
                        </div>
                      )}

                      {/* Gentle Gradient for Contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />

                      {/* Icon Badge */}
                      <div className="absolute bottom-3 left-4 w-9 h-9 rounded-lg bg-white/95 border border-slate-200 flex items-center justify-center text-[#2563EB] shadow-sm">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 sm:p-6">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-700 block mb-2">
                        {item.tag}
                      </span>
                      
                      <h3 className="text-lg md:text-[20px] font-headline font-bold text-[#0F172A] mb-2 leading-snug">
                        {item.title}
                      </h3>
                      
                      <p className="text-sm text-slate-600 leading-relaxed font-normal mb-4">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer: Recovery Mechanism & Large Button */}
                  <div className="p-5 sm:p-6 pt-0">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 mb-4">
                      <span className="text-[11px] font-medium text-slate-500 block mb-0.5">How we assist:</span>
                      <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1 leading-snug">
                        <ChevronRight className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{item.recoveryMechanism}</span>
                      </span>
                    </div>

                    <Link href="#forensic-intake" className="block w-full">
                      <Button variant="outline" className="w-full h-11 border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-sm">
                        <span>Check Options For This Case</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    </Link>
                  </div>

                </div>
              </SectionReveal>
            );
          })}
        </div>

        {/* Closing Callout: Mobile responsive full-width card */}
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <div className="p-5 sm:p-7 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-md shadow-slate-200/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="space-y-1">
                <p className="text-base sm:text-lg font-bold text-[#0F172A]">
                  Not sure which category describes your situation?
                </p>
                <p className="text-xs sm:text-sm text-slate-600 font-normal">
                  Speak with our team and explain what happened. Every case begins with an honest, free assessment.
                </p>
              </div>

              <div className="shrink-0 w-full sm:w-auto">
                <Link href="#forensic-intake" className="block w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto h-12 px-6 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-sm transition-all flex items-center justify-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>Speak With Our Team</span>
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
