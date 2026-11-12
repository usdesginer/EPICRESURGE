'use client';

import { Shield, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { cn } from '@/lib/utils';

export function Footer() {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  useEffect(() => {
    fetchLogo();
  }, []);

  const fetchLogo = async () => {
    try {
      const { data } = supabase.storage
        .from('assets')
        .getPublicUrl('logo.png');
      
      if (data?.publicUrl) {
        setLogoUrl(`${data.publicUrl}?t=${Date.now()}`);
      }
    } catch (error) {
      setLogoUrl(null);
    }
  };

  return (
    <footer id="contact" className="bg-[#101820] border-t border-[#1E293B] pt-16 pb-12 text-[#94A3B8] relative">
      {/* Signature dual Refined Blue & Champagne Gold border line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#1D4ED8] via-[#C5A059]/40 to-transparent absolute top-0 left-0" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-14">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center transition-all overflow-hidden",
                logoUrl ? "bg-transparent p-0.5" : "bg-[#1D4ED8] shadow-md shadow-[#1D4ED8]/25"
              )}>
                {logoUrl ? (
                  <img 
                    src={logoUrl} 
                    alt="EpicResurge Logo" 
                    className="w-full h-full object-contain"
                    onError={() => setLogoUrl(null)}
                  />
                ) : (
                  <Shield className="text-[#F8F7F4] w-6 h-6" />
                )}
              </div>
              <span className="text-xl font-headline font-bold text-[#F8F7F4] flex items-center">
                EpicResurge<span className="text-[#C5A059] font-extrabold">.</span>
              </span>
            </Link>
            
            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-sm font-normal">
              EpicResurge is a Delaware-registered digital asset forensic and financial fraud investigation firm. We trace stolen crypto and wire funds to help victims pursue structured asset recovery.
            </p>

            <div className="pt-2 flex flex-col gap-2.5">
              <span className="inline-flex items-center gap-1.5 text-xs text-[#CBD5E1] bg-[#1C2836] px-3 py-1.5 rounded-lg border border-[#2A3A4E] w-fit">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                Delaware Division of Corporations Registered
              </span>
              <div className="text-xs text-[#CBD5E1] flex items-start gap-2 pt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  <span className="text-[#94A3B8] block text-[11px] uppercase tracking-wider font-semibold">Operations Office</span>
                  Landstrasse 73, 8718 Schänis, Switzerland
                </address>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold text-[#F8F7F4] uppercase tracking-wider mb-4">Investigation Services</h4>
            <ul className="space-y-2.5 text-sm text-[#94A3B8]">
              <li><Link href="/services" className="hover:text-[#DFBA73] transition-colors relative inline-block after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-[1px] after:bg-[#DFBA73] hover:after:w-full after:transition-all after:duration-200">All Services Overview</Link></li>
              <li><Link href="/services/scam-investigation" className="hover:text-[#DFBA73] transition-colors relative inline-block after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-[1px] after:bg-[#DFBA73] hover:after:w-full after:transition-all after:duration-200">Scam Investigation</Link></li>
              <li><Link href="/services/loan-fraud-investigation" className="hover:text-[#DFBA73] transition-colors relative inline-block after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-[1px] after:bg-[#DFBA73] hover:after:w-full after:transition-all after:duration-200">Loan Fraud Investigation</Link></li>
              <li><Link href="/services/bad-broker-triage" className="hover:text-[#DFBA73] transition-colors relative inline-block after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-[1px] after:bg-[#DFBA73] hover:after:w-full after:transition-all after:duration-200">Bad Broker Triage</Link></li>
              <li><Link href="/services/romance-scam-recovery" className="hover:text-[#DFBA73] transition-colors relative inline-block after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-[1px] after:bg-[#DFBA73] hover:after:w-full after:transition-all after:duration-200">Romance Scam Recovery</Link></li>
              <li><Link href="/services/fraud-assessment" className="hover:text-[#DFBA73] transition-colors relative inline-block after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-[1px] after:bg-[#DFBA73] hover:after:w-full after:transition-all after:duration-200">Fraud Assessment</Link></li>
            </ul>
          </div>
          
          {/* Company & Trust */}
          <div>
            <h4 className="text-xs font-semibold text-[#F8F7F4] uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-[#94A3B8]">
              <li><Link href="/about" className="hover:text-[#DFBA73] transition-colors relative inline-block after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-[1px] after:bg-[#DFBA73] hover:after:w-full after:transition-all after:duration-200">About EpicResurge</Link></li>
              <li><Link href="/how-it-works" className="hover:text-[#DFBA73] transition-colors relative inline-block after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-[1px] after:bg-[#DFBA73] hover:after:w-full after:transition-all after:duration-200">How It Works (4 Steps)</Link></li>
              <li><Link href="/#why-us" className="hover:text-[#DFBA73] transition-colors relative inline-block after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-[1px] after:bg-[#DFBA73] hover:after:w-full after:transition-all after:duration-200">Why People Trust Us</Link></li>
              <li><Link href="/resources" className="hover:text-[#DFBA73] transition-colors relative inline-block after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-[1px] after:bg-[#DFBA73] hover:after:w-full after:transition-all after:duration-200">Scam Prevention Guides</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[#DFBA73] transition-colors relative inline-block after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-[1px] after:bg-[#DFBA73] hover:after:w-full after:transition-all after:duration-200">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-[#F8F7F4] uppercase tracking-wider mb-4">Direct Contact</h4>
            <ul className="space-y-2.5 text-sm text-[#94A3B8]">
              <li>
                <a href="mailto:investigator@epicresurge.com" className="text-[#F8F7F4] hover:text-[#DFBA73] transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#1D4ED8]" />
                  <span>investigator@epicresurge.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1 text-xs text-[#CBD5E1]">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  Landstrasse 73<br />
                  8718 Schänis<br />
                  Switzerland
                </address>
              </li>
              <li><Link href="/contact" className="hover:text-[#DFBA73] transition-colors">Contact Our Office</Link></li>
              <li><Link href="/#forensic-intake" className="text-[#DFBA73] hover:underline font-semibold">Start Free Case Review →</Link></li>
            </ul>
          </div>

        </div>
        
        {/* Bottom Legal Notice */}
        <div className="pt-8 border-t border-[#1E293B] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#94A3B8]/80">
          <p>
            © {new Date().getFullYear()} EpicResurge LLC. All rights reserved. Registered in the State of Delaware.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-[#DFBA73] transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-[#DFBA73] transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-[#DFBA73] transition-colors">Contact</Link>
          </div>
        </div>
        <p className="mt-4 text-[11px] text-center text-[#94A3B8]/60 leading-relaxed">
          Disclaimer: EpicResurge is an independent investigative firm. Recovery outcomes depend on evidence availability and cooperation from the relevant financial and legal authorities.
        </p>
      </div>
    </footer>
  );
}
