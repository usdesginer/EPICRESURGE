import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home, FileQuestion, HelpCircle, Mail } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#080F1D] text-[#F8FAFC] flex flex-col justify-between">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 py-32 flex-1 flex items-center justify-center">
        <div className="max-w-xl mx-auto text-center space-y-6">
          
          <div className="w-16 h-16 rounded-2xl bg-[#111D31] border border-[#1E2E48] text-[#38BDF8] flex items-center justify-center mx-auto shadow-lg shadow-black/30">
            <FileQuestion className="w-8 h-8" />
          </div>

          <span className="text-xs font-semibold uppercase tracking-wider text-[#38BDF8] bg-[#111D31] px-3 py-1 rounded-md border border-[#1E2E48] inline-block">
            Page Not Found • 404
          </span>

          <h1 className="text-3xl sm:text-4xl font-headline font-bold text-[#F8FAFC]">
            We Couldn&apos;t Find That Page
          </h1>

          <p className="text-base text-[#94A3B8] leading-relaxed max-w-md mx-auto">
            The page you are looking for may have been moved, renamed, or is temporarily unavailable. Let us help you get back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link href="/" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-12 px-6 bg-[#2563EB] hover:bg-blue-600 text-[#F8FAFC] font-semibold rounded-xl flex items-center justify-center gap-2">
                <Home className="w-4 h-4" />
                <span>Return to Homepage</span>
              </Button>
            </Link>
            
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-6 border-[#1E2E48] bg-[#111D31] hover:bg-[#162540] text-[#F8FAFC] font-medium rounded-xl flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-[#38BDF8]" />
                <span>Contact Our Team</span>
              </Button>
            </Link>
          </div>

          <div className="pt-8 border-t border-[#1E2E48]/60 text-xs text-[#94A3B8] space-y-2">
            <p>Popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4 text-[#38BDF8]">
              <Link href="/#services" className="hover:underline">Our Services</Link>
              <Link href="/#process" className="hover:underline">How It Works</Link>
              <Link href="/#faq" className="hover:underline">FAQ</Link>
              <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
