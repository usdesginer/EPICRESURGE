'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, ChevronDown, Menu, PhoneCall, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { supabase } from '@/lib/supabase';
import { cn } from '@/lib/utils';

const servicesList = [
  { name: "All Services Overview", href: "/services" },
  { name: "Scam Investigation", href: "/services/scam-investigation" },
  { name: "Loan Fraud Investigation", href: "/services/loan-fraud-investigation" },
  { name: "Bad Broker Triage", href: "/services/bad-broker-triage" },
  { name: "Romance Scam Recovery", href: "/services/romance-scam-recovery" },
  { name: "Fraud Assessment", href: "/services/fraud-assessment" },
  { name: "Recovery Guidance", href: "/how-it-works" },
];

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetchLogo();

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
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
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled 
        ? "bg-[#0B1528]/95 backdrop-blur-md border-b border-[#1C2C48] shadow-lg shadow-black/20" 
        : "bg-[#0B1528]/90 backdrop-blur-sm border-b border-[#18253D]"
    )}>
      <div className={cn(
        "container mx-auto px-4 md:px-6 flex items-center justify-between transition-all duration-300",
        scrolled ? "h-16 md:h-17" : "h-18 md:h-20"
      )}>
        <Link href="/" className="flex items-center gap-3 group">
          <div className={cn(
            "w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center transition-all overflow-hidden",
            logoUrl ? "bg-transparent p-0.5" : "bg-[#1D4ED8] shadow-md shadow-blue-900/40 group-hover:bg-[#1E40AF]"
          )}>
            {logoUrl ? (
              <img 
                src={logoUrl} 
                alt="EpicResurge Logo" 
                className="w-full h-full object-contain"
                onError={() => setLogoUrl(null)}
              />
            ) : (
              <Shield className="text-white w-6 h-6" />
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-headline font-bold tracking-tight text-white flex items-center">
              EpicResurge
            </span>
            <span className="text-[11px] uppercase tracking-wider text-[#94A3B8] font-medium hidden sm:block">
              Financial Fraud Investigation & Consulting
            </span>
          </div>
        </Link>
        
        <div className="hidden lg:flex items-center gap-7 ml-auto mr-8">
          {mounted && (
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1.5 text-[13.5px] font-medium text-[#CBD5E1] hover:text-[#C5A059] transition-colors outline-none cursor-pointer py-2">
                Services <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-72 bg-[#0B1528] border-[#1C2C48] shadow-2xl rounded-xl p-2 text-[#E2E8F0]">
                {servicesList.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link 
                      href={service.href} 
                      className="w-full cursor-pointer py-2.5 px-3 text-[13.5px] text-[#CBD5E1] hover:text-white hover:bg-[#13223D] rounded-lg transition-colors font-medium flex items-center justify-between group/item"
                    >
                      <span>{service.name}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-[13.5px] font-medium text-[#CBD5E1] hover:text-[#C5A059] transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button asChild size="sm" className="bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-semibold text-xs sm:text-sm px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-md border border-blue-400/30 transition-all">
            <Link href="/#forensic-intake" className="flex items-center gap-1.5 sm:gap-2">
              <span>Free Review</span> <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Button>

          {/* Mobile Menu Trigger */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden h-10 w-10 text-[#94A3B8] hover:text-white hover:bg-[#13223D]">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0B1528] border-[#1C2C48] text-white w-full sm:max-w-xs p-6 overflow-y-auto">
              <SheetHeader className="pb-6 border-b border-[#1C2C48] text-left">
                <SheetTitle className="text-xl font-headline font-bold text-white flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#C5A059]" /> EpicResurge
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-6 pt-6">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">Our Services</p>
                  <div className="grid gap-2">
                    {servicesList.map((service) => (
                      <Link 
                        key={service.name} 
                        href={service.href} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-sm font-medium text-[#CBD5E1] hover:text-[#C5A059] transition-colors py-1"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#1C2C48]">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">Navigation</p>
                  <div className="grid gap-2">
                    {navLinks.map((link) => (
                      <Link 
                        key={link.href} 
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-sm font-medium text-[#CBD5E1] hover:text-[#C5A059] transition-colors py-1"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <Button asChild onClick={() => setIsMobileMenuOpen(false)} className="w-full bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-semibold py-3 rounded-xl shadow-md border border-blue-400/30">
                    <Link href="/#forensic-intake">
                      Start Free Consultation
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
