'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { EducationalResources } from '@/components/sections/EducationalResources';
import { AIGuidedTool } from '@/components/sections/AIGuidedTool';
import { FAQSection } from '@/components/sections/FAQSection';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      {/* 00. Professional Navigation: Logo, main links, enquiry button */}
      <Navbar />
      
      {/* 01. Hero — Make the first impression count (Option A Transaction Visualization) */}
      <Hero />
      
      {/* 02. Our Services — Who we help and how (Combined Situations + Services) */}
      <ServicesSection />

      {/* 03. How It Works — Our investigation process (Combined 4 Steps + Walkthrough) */}
      <ProcessSection />

      {/* 04. Why EpicResurge — Trust and credibility (Delaware LLC, CFE, Privacy) */}
      <WhyChooseUs />

      {/* 05. Knowledge Centre — Learn and stay protected (Shortened Guides) */}
      <EducationalResources />

      {/* 06. Request an Assessment — Start the conversation (Combined Form + Reassurance CTA) */}
      <AIGuidedTool />

      {/* 07. Frequently Asked Questions — Expandable answers to common questions */}
      <FAQSection />

      {/* 08. Professional Footer — Company information, sitemap, legal policies */}
      <Footer />
    </main>
  );
}
