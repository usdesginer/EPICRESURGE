'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#080F1D] text-[#F8FAFC] flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-2xl bg-[#111D31] border border-[#1E2E48] shadow-2xl shadow-black/40">
        
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-[#F59E0B] flex items-center justify-center mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-headline font-bold text-[#F8FAFC]">
            Something Didn&apos;t Load Correctly
          </h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            We encountered a temporary issue while loading this page. You can try refreshing the page or head back to the homepage.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button 
            onClick={() => reset()}
            className="w-full sm:w-auto h-11 px-5 bg-[#2563EB] hover:bg-blue-600 text-[#F8FAFC] font-semibold rounded-xl flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </Button>

          <Link href="/" className="w-full sm:w-auto">
            <Button 
              variant="outline" 
              className="w-full sm:w-auto h-11 px-5 border-[#1E2E48] bg-[#0E1726] hover:bg-[#162540] text-[#F8FAFC] font-medium rounded-xl flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Go to Homepage</span>
            </Button>
          </Link>
        </div>

        <p className="text-xs text-[#94A3B8] pt-4 border-t border-[#1E2E48]/60">
          Need immediate assistance? Email us at{' '}
          <a href="mailto:investigator@epicresurge.com" className="text-[#38BDF8] hover:underline">
            investigator@epicresurge.com
          </a>
        </p>

      </div>
    </div>
  );
}

