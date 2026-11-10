'use client';

import { SectionReveal } from '@/components/ui/section-reveal';
import { Globe, Activity, ShieldCheck, Server } from 'lucide-react';

const investigationNodes = [
  { coords: { x: '25%', y: '35%' }, city: "New York" },
  { coords: { x: '48%', y: '28%' }, city: "London" },
  { coords: { x: '53%', y: '36%' }, city: "Zurich" },
  { coords: { x: '78%', y: '58%' }, city: "Singapore" },
  { coords: { x: '85%', y: '75%' }, city: "Sydney" },
  { coords: { x: '68%', y: '45%' }, city: "Dubai" },
];

export function GlobalIntelligence() {
  return (
    <section className="py-24 bg-[#080F1D] relative overflow-hidden border-b border-[#1E2E48]">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-14 items-center">
          
          <div className="lg:w-5/12">
            <SectionReveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111D31] border border-[#1E2E48] text-[#38BDF8] text-xs font-semibold mb-4">
                <Globe className="w-4 h-4" />
                <span>Worldwide Jurisdiction Coverage</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-headline font-bold mb-5 text-[#F8FAFC]">
                Global Investigation & Cross-Border Reach
              </h2>
              <p className="text-base md:text-[17px] text-[#94A3B8] mb-8 leading-relaxed font-normal">
                Online fraudsters often move stolen assets across foreign borders and decentralized networks to evade detection. EpicResurge operates internationally to track funds and coordinate with global exchanges and authorities.
              </p>
              
              <div className="space-y-3.5">
                {[
                  { 
                    title: "Exchange Compliance Coordination", 
                    desc: "Direct channels with major exchanges (Binance, Coinbase, OKX, Kraken) to request emergency account freezes.", 
                    icon: ShieldCheck 
                  },
                  { 
                    title: "Cross-Border Bank Tracing", 
                    desc: "Following intermediary wire routes and correspondent banking networks across 190+ jurisdictions.", 
                    icon: Server 
                  },
                  { 
                    title: "Live On-Chain Surveillance", 
                    desc: "Real-time automated alerts the moment stolen crypto touches a fiat off-ramp or cash-out endpoint.", 
                    icon: Activity 
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 md:p-5 rounded-xl bg-[#111D31] border border-[#1E2E48] flex items-start gap-4 hover:border-slate-700 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#0E1726] border border-[#162338] text-[#38BDF8] flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm md:text-[15px] font-bold text-[#F8FAFC] mb-1">{item.title}</h4>
                      <p className="text-xs md:text-sm text-[#94A3B8] leading-relaxed font-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>

          <div className="lg:w-7/12 w-full">
            <SectionReveal delay={150} className="relative aspect-[16/10] bg-[#111D31] border border-[#1E2E48] rounded-2xl overflow-hidden shadow-lg shadow-black/25">
              {/* World Grid Map */}
              <div className="absolute inset-0 opacity-15">
                <svg viewBox="0 0 1000 500" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <rect width="1000" height="500" fill="url(#grid-pattern)" />
                  <defs>
                    <pattern id="grid-pattern" width="24" height="24" patternUnits="userSpaceOnUse">
                      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                </svg>
              </div>

              {/* Pulsing Nodes */}
              {investigationNodes.map((node, idx) => (
                <div 
                  key={idx} 
                  className="absolute"
                  style={{ left: node.coords.x, top: node.coords.y }}
                >
                  <div className="relative group">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-[#38BDF8]/40 animate-ping opacity-30" />
                    <div className="w-3 h-3 rounded-full bg-[#2563EB] relative z-10 cursor-pointer shadow-sm shadow-[#2563EB]" />
                    <span className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-[#F8FAFC] whitespace-nowrap bg-[#0E1726] px-2 py-0.5 rounded border border-[#1E2E48]">
                      {node.city}
                    </span>
                  </div>
                </div>
              ))}

              <div className="absolute bottom-5 left-5 flex items-center gap-4 bg-[#0E1726] border border-[#1E2E48] px-4 py-2.5 rounded-xl shadow-md">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="text-xs font-semibold text-[#F8FAFC]">Global Monitoring Active</span>
                </div>
              </div>
            </SectionReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
