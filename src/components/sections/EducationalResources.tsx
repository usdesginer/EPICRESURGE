'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  BookOpen, 
  ArrowRight, 
  ShieldAlert, 
  Coins, 
  AlertTriangle, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { SectionReveal } from '@/components/ui/section-reveal';
import { Button } from '@/components/ui/button';

interface FeaturedArticle {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  href: string;
  icon: any;
  readTime: string;
}

const FEATURED_ARTICLES: FeaturedArticle[] = [
  {
    id: "crypto-scams",
    tag: "Crypto Scams",
    title: "Crypto scams",
    subtitle: "How to recognize warning signs.",
    imageUrl: "https://images.openai.com/static-rsc-4/fLGgKQbINdt2EvqkP2OaJ4IhCbVvGs067jfNyw_EcsddFkaCueyVJUk7c2VGdpNdOSJbkrcBCFYMo5ZPXMOiUW_6mFlGCC0lCJ8pDphpV8bld2ux5jIusLN3GVeAba6jBi8OYZhAG1YIDfaur_9NNi43zECH9iE4BUUQXY_lHis?purpose=inline",
    href: "/resources#crypto-scams",
    icon: Coins,
    readTime: "4 min read"
  },
  {
    id: "investment-fraud",
    tag: "Investment Fraud",
    title: "Investment fraud",
    subtitle: "How fraudulent platforms operate.",
    imageUrl: "https://images.openai.com/static-rsc-4/1P3IPVzuUQyTFHWG6S1QsPkOGEMLKcsNN6YBPwQ0WWyexTXRvyq0kMg1AorG5ruFKMxatoazC_X1dQiXu4-dxSaoh_4FQBGGz2th991WznSu8MkDLoj5XAnXVpt0lpeEK3QE-3o4IxGHY-h5fBMawBYgfZ3FhzEB-KTaI-s8KIg?purpose=inline",
    href: "/resources#broker-fraud",
    icon: AlertTriangle,
    readTime: "5 min read"
  },
  {
    id: "recovery-scams",
    tag: "Recovery Scams",
    title: "Recovery scams",
    subtitle: "How to avoid being scammed twice.",
    imageUrl: "https://images.openai.com/static-rsc-4/wknvzZmZFX41Pp-t20j5fsyfVloBLMLahnH3F6n2F0WMR-HS0r4dXaed0uq3gGfq7Tboe95dM8gYSHHovG-xBGQvE78mjv2ioIn8Da7ZUSyO1ZhzvA_dmITGmb17I2XD5vRyKd--Rr7kkowDGbcx9ITRGXqNxlQVPeYowDUVQxhHf4MR5dsFYu-36GVrXsoC?purpose=inline",
    href: "/resources#secondary-scams",
    icon: ShieldAlert,
    readTime: "6 min read"
  }
];

export function EducationalResources() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="resources" className="py-20 md:py-24 bg-[#F4F0E8] relative border-b border-[#E5DFD3]">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F3] border border-[#E2D1A8] text-[#9E7D3B] text-xs font-semibold mb-3 shadow-xs">
              <BookOpen className="w-4 h-4 text-[#C5A059]" />
              <span>Knowledge Centre · Learn & Stay Protected</span>
            </div>
            
            <h2 className="text-[28px] md:text-[34px] font-headline font-[750] leading-[1.18] tracking-[-0.03em] mb-3 md:mb-4 text-[#0B1528]">
              Educational Resources & Fraud Prevention
            </h2>
            
            <p className="text-base text-[#475569] leading-[1.65] max-w-2xl mx-auto font-normal">
              Practical guides written by our investigators to help you recognize warning signs, understand deceptive tactics, and protect your digital assets.
            </p>
          </SectionReveal>
        </div>

        {/* 3 Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
          {FEATURED_ARTICLES.map((article, idx) => {
            const Icon = article.icon;
            const hasError = imageErrors[article.id];

            return (
              <SectionReveal key={article.id} delay={idx * 70} className="h-full">
                <Link href={article.href} className="block h-full group">
                  <div className="h-full rounded-2xl bg-[#FAF8F3] border border-[#E5DFD3] hover:border-[#C5A059]/60 card-border-glow flex flex-col justify-between overflow-hidden shadow-xs">
                    <div>
                      {/* Image Preview Container */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-[#E5DFD3]">
                        {!hasError ? (
                          <Image
                            src={article.imageUrl}
                            alt={article.title}
                            fill
                            unoptimized
                            onError={() => handleImageError(article.id)}
                            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-100">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center mb-2">
                              <Icon className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-semibold text-slate-600">{article.tag}</span>
                          </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F3]/80 via-transparent to-transparent" />

                        <div className="absolute bottom-3 left-4 w-9 h-9 rounded-lg bg-white/95 border border-[#E5DFD3] flex items-center justify-center text-[#1D4ED8] shadow-xs">
                          <Icon className="w-4 h-4" />
                        </div>

                        <span className="absolute top-3 right-3 text-[11px] font-semibold text-slate-700 bg-white/90 backdrop-blur-xs px-2.5 py-0.5 rounded-md border border-[#E5DFD3]">
                          {article.readTime}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D4ED8] block mb-1.5">
                          {article.tag}
                        </span>

                        <h3 className="text-[19px] font-headline font-bold text-[#0B1528] mb-2 leading-[1.25] tracking-[-0.02em] group-hover:text-[#1D4ED8] transition-colors relative inline-block after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-[2px] after:bg-[#1D4ED8] group-hover:after:w-full after:transition-all after:duration-300">
                          {article.title}
                        </h3>

                        <p className="text-[15px] text-[#475569] leading-[1.65] font-normal">
                          {article.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Link */}
                    <div className="px-6 pb-6 pt-1 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#1D4ED8]">
                      <span>Read guide</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            );
          })}
        </div>

        {/* Exactly One Action Button: Explore All Resources → */}
        <div className="text-center">
          <SectionReveal delay={150}>
            <Link href="/resources">
              <Button size="lg" className="h-12 px-8 bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-semibold text-sm rounded-xl shadow-md shadow-blue-900/20 transition-all inline-flex items-center gap-2 group">
                <span>Explore All Resources</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Button>
            </Link>
          </SectionReveal>
        </div>

      </div>
    </section>
  );
}
