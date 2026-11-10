'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ShieldCheck, Award, Globe, Fingerprint } from 'lucide-react';
import { SectionReveal } from '@/components/ui/section-reveal';
import placeholderData from '@/app/lib/placeholder-images.json';
import { supabase } from '@/lib/supabase';

const teamMembers = [
  { 
    id: 'team-1', 
    name: "Dr. Aris Thorne",
    role: "Lead Digital Forensic Analyst",
    credentials: "Former Cybercrime & Financial Intelligence Unit",
    specialties: ["Blockchain Auditing", "Asset Seizure Protocols"],
    location: "Zurich Hub"
  },
  { 
    id: 'team-2', 
    name: "Marcus Vance",
    role: "Blockchain Intelligence Specialist",
    credentials: "Certified Fraud Examiner (CFE)",
    specialties: ["Smart Contract Audit", "DEX Tracking"],
    location: "Singapore Hub"
  },
  { 
    id: 'team-3', 
    name: "Elena Rossi",
    role: "Financial Fraud Investigator",
    credentials: "M.S. Forensic Accounting",
    specialties: ["Money Laundering Patterns", "OSINT"],
    location: "London Hub"
  },
  { 
    id: 'team-4', 
    name: "Jameson Burke",
    role: "Cybersecurity & Recovery Analyst",
    credentials: "CISSP Certified Security Professional",
    specialties: ["Intrusion Analysis", "Wallet Key Forensics"],
    location: "New York Hub"
  }
];

export function TeamSection() {
  const [assetUrls, setAssetUrls] = useState<Record<string, string>>({});
  const images = placeholderData.placeholderImages;

  useEffect(() => {
    fetchCustomAssets();
  }, []);

  const fetchCustomAssets = async () => {
    const urls: Record<string, string> = {};
    for (const member of teamMembers) {
      const fileName = `${member.id}.png`;
      const { data } = supabase.storage
        .from('assets')
        .getPublicUrl(fileName);
      
      if (data?.publicUrl) {
        urls[member.id] = `${data.publicUrl}?t=${Date.now()}`;
      }
    }
    setAssetUrls(urls);
  };

  return (
    <section className="py-24 bg-[#080F1D] relative border-b border-[#1E2E48]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-14 items-start mb-16">
          
          <div className="lg:w-1/3">
            <SectionReveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111D31] border border-[#1E2E48] text-[#38BDF8] text-xs font-semibold mb-4">
                <ShieldCheck className="w-4 h-4" />
                <span>Senior Investigators</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-headline font-bold mb-5 text-[#F8FAFC]">
                Led by Seasoned Forensic Specialists
              </h2>
              <p className="text-base md:text-[17px] text-[#94A3B8] mb-8 leading-relaxed font-normal">
                Our recovery operations are conducted by investigators with decades of combined experience in financial intelligence, blockchain auditing, and cybercrime defense.
              </p>
              
              <div className="space-y-3">
                {[
                  { icon: ShieldCheck, text: "Ex-Law Enforcement & Intelligence Analysts" },
                  { icon: Award, text: "Certified Fraud Examiners (CFE)" },
                  { icon: Fingerprint, text: "Certified Blockchain Forensics Specialists" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#111D31] border border-[#1E2E48]">
                    <item.icon className="w-5 h-5 text-[#38BDF8] shrink-0" />
                    <span className="text-xs md:text-sm font-medium text-[#F8FAFC]">{item.text}</span>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
          
          <div className="lg:w-2/3 w-full grid sm:grid-cols-2 gap-6">
            {teamMembers.map((member, idx) => {
              const imageData = images.find(img => img.id === member.id);
              const customUrl = assetUrls[member.id];
              const displayUrl = customUrl || imageData?.imageUrl || '';

              return (
                <SectionReveal key={member.id} delay={idx * 80}>
                  <div className="group relative overflow-hidden bg-[#111D31] border border-[#1E2E48] rounded-2xl aspect-[4/5] shadow-lg shadow-black/25 transition-all duration-300 hover:border-slate-700">
                    {/* Member Photo */}
                    <div className="relative w-full h-full">
                       <Image 
                        src={displayUrl}
                        alt={member.name}
                        fill
                        unoptimized
                        className="object-cover opacity-75 grayscale group-hover:grayscale-0 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500 ease-out"
                        data-ai-hint={imageData?.imageHint}
                        onError={() => {
                          if (customUrl) {
                            setAssetUrls(prev => {
                              const next = { ...prev };
                              delete next[member.id];
                              return next;
                            });
                          }
                        }}
                      />
                    </div>
                    
                    {/* Clean Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080F1D] via-[#080F1D]/50 to-transparent opacity-95 transition-opacity duration-300" />
                    
                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                      <div className="mb-3">
                        <p className="text-xs font-semibold text-[#38BDF8] mb-1 flex items-center gap-1.5">
                          <Globe className="w-3.5 h-3.5" /> {member.location}
                        </p>
                        <h3 className="text-lg md:text-[20px] font-headline font-bold text-[#F8FAFC] mb-0.5">{member.name}</h3>
                        <p className="text-xs font-medium text-[#94A3B8]">{member.role}</p>
                      </div>

                      <div className="pt-3 border-t border-[#1E2E48] space-y-2.5">
                        <p className="text-xs text-[#94A3B8] font-medium">
                          {member.credentials}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {member.specialties.map((spec, sIdx) => (
                            <span key={sIdx} className="px-2 py-0.5 bg-[#0E1726] border border-[#162338] text-[11px] font-medium text-[#38BDF8] rounded-md">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
