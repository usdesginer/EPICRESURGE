'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Loader2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    fetchLogo();
    checkExistingSession();
  }, []);

  const checkExistingSession = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      router.push('/admin');
    }
  };

  const fetchLogo = async () => {
    try {
      const { data } = supabase.storage
        .from('assets')
        .getPublicUrl('logo.png');
      
      if (data?.publicUrl) {
        setLogoUrl(`${data.publicUrl}?t=${Date.now()}`);
      }
    } catch {
      setLogoUrl(null);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      toast({
        title: "Authenticated Successfully",
        description: "Welcome to the EpicResurge Operations Portal.",
      });

      router.push('/admin');
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Authentication Failed',
        description: error.message || 'Invalid administrator email or password.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-4 sm:p-6 text-[#0F172A] font-sans">
      
      {/* Return to Public Website */}
      <div className="w-full max-w-md mb-4 text-left">
        <Link 
          href="/" 
          className="text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1.5"
        >
          &larr; Back to Public Portal
        </Link>
      </div>

      <Card className="w-full max-w-md border-slate-200/90 bg-white rounded-2xl shadow-lg shadow-slate-200/50 overflow-hidden">
        
        {/* Card Header */}
        <CardHeader className="text-center space-y-3 pt-9 pb-6 border-b border-slate-100 bg-slate-50/50">
          <div className={cn(
            "w-14 h-14 rounded-xl flex items-center justify-center mx-auto transition-all overflow-hidden border border-slate-200 shadow-xs",
            logoUrl ? "bg-white p-1" : "bg-[#2563EB] text-white"
          )}>
            {logoUrl ? (
              <img 
                src={logoUrl} 
                alt="EpicResurge" 
                className="w-full h-full object-contain"
                onError={() => setLogoUrl(null)}
              />
            ) : (
              <Shield className="w-7 h-7 text-white" />
            )}
          </div>

          <div>
            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 mb-1.5">
              Authorized Access Only
            </div>
            <CardTitle className="text-2xl font-headline font-bold text-[#0F172A] tracking-tight">
              Operations Portal
            </CardTitle>
            <p className="text-xs text-slate-500 mt-1 font-medium">
              EpicResurge Case Management & Restitution Engine
            </p>
          </div>
        </CardHeader>
        
        {/* Form Body */}
        <CardContent className="p-6 sm:p-8 space-y-6">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-slate-700">Staff Email</Label>
              <Input
                type="email"
                placeholder="investigator@epicresurge.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate-50 border-slate-200 rounded-xl h-11 text-[#0F172A] placeholder:text-slate-400 text-xs focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                required
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label className="text-xs font-semibold text-slate-700">Password</Label>
                <span className="text-[11px] text-slate-400 font-medium">Encrypted</span>
              </div>
              <Input
                type="password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-slate-50 border-slate-200 rounded-xl h-11 text-[#0F172A] placeholder:text-slate-400 text-xs focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                required
              />
            </div>
            
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-11 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 mt-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <>
                  <span>Sign In to Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>
          
          <div className="pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-400">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-medium text-[11px]">256-Bit TLS Authenticated Session</span>
          </div>
        </CardContent>
      </Card>

      <p className="text-[11px] text-slate-400 mt-6 text-center">
        &copy; {new Date().getFullYear()} EpicResurge LLC &bull; Confidential Investigation Infrastructure
      </p>
    </main>
  );
}
