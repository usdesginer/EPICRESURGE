'use client';

import { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { 
  Shield, 
  Activity, 
  FileText, 
  User, 
  Globe, 
  Clock, 
  LogOut, 
  Search,
  Filter,
  Trash2,
  MoreVertical,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Fingerprint,
  Target,
  ShieldCheck,
  Network,
  Upload,
  Image as ImageIcon,
  Settings,
  Info,
  Layers,
  Star,
  Plus,
  TrendingUp,
  Landmark,
  Wallet,
  Briefcase,
  Download,
  Database,
  Lock,
  RefreshCw,
  X,
  Phone,
  Mail,
  MapPin,
  Calendar,
  AlertTriangle,
  ArrowUpRight,
  ExternalLink,
  Printer,
  Copy,
  Check,
  FolderOpen,
  Award,
  Sparkles,
  HelpCircle,
  FileCheck,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogTrigger 
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import placeholderData from '@/app/lib/placeholder-images.json';

type CaseRecord = {
  id: string;
  case_id: string;
  case_type: string;
  user_name: string;
  user_email: string;
  user_phone?: string;
  user_country: string;
  risk_level: string;
  evidence_integrity: string;
  status: string;
  created_at: string;
  description: string;
  result_data: any;
  form_values: any;
  evidence_files: {name: string, path: string, url: string}[];
  best_contact_time?: string;
  preferred_method?: string;
};

type SuccessStory = {
  id: string;
  case_id: string;
  case_type: string;
  amount: string;
  status: string;
  challenge: string;
  focus: string;
  outcome: string;
  narrative: string;
  icon_name: string;
  created_at?: string;
};

export default function AdminDashboard() {
  const [cases, setCases] = useState<CaseRecord[]>([]);
  const [stories, setStories] = useState<SuccessStory[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState<'inquiries' | 'resolutions' | 'branding' | 'media'>('inquiries');
  
  // Search & Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [riskFilter, setRiskFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Selected Case for Detailed Dossier Dialog
  const [selectedCase, setSelectedCase] = useState<CaseRecord | null>(null);

  // Manual Case Registration Modal State
  const [isNewCaseOpen, setIsNewCaseOpen] = useState(false);
  const [submittingCase, setSubmittingCase] = useState(false);
  const [newCaseForm, setNewCaseForm] = useState({
    case_id: '',
    user_name: '',
    user_email: '',
    user_phone: '',
    user_country: 'United States',
    case_type: 'Cryptocurrency Scam',
    risk_level: 'High',
    evidence_integrity: 'Standard',
    status: 'Review Pending',
    amount: '',
    description: ''
  });
  
  // Logo State
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [uploadingLogo, setUploadingLogo] = useState(false);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  // Hero Background State
  const [heroBgFile, setHeroBgFile] = useState<File | null>(null);
  const [heroBgPreview, setHeroBgPreview] = useState<string | null>(null);
  const [uploadingHeroBg, setUploadingHeroBg] = useState(false);
  const [heroBgUrl, setHeroBgUrl] = useState<string | null>(null);
  
  // Success Story Form State
  const [isStoryDialogOpen, setIsStoryDialogOpen] = useState(false);
  const [storyForm, setStoryForm] = useState<Partial<SuccessStory>>({
    case_id: '',
    case_type: '',
    amount: '',
    status: 'Resolved',
    challenge: '',
    focus: '',
    outcome: '',
    narrative: '',
    icon_name: 'TrendingUp'
  });

  // Media Library State
  const [selectedAssetId, setSelectedAssetId] = useState<string | null>(null);
  const [assetFile, setAssetFile] = useState<File | null>(null);
  const [assetPreview, setAssetPreview] = useState<string | null>(null);
  const [uploadingAsset, setUploadingAsset] = useState(false);

  // SQL Copy State
  const [copiedSql, setCopiedSql] = useState(false);

  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    checkAuth();
    fetchCases();
    fetchStories();
    fetchLogo();
    fetchHeroBg();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.push('/admin/login');
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

  const fetchHeroBg = async () => {
    try {
      const { data } = supabase.storage
        .from('assets')
        .getPublicUrl('hero-bg.png');
      
      if (data?.publicUrl) {
        setHeroBgUrl(`${data.publicUrl}?t=${Date.now()}`);
      }
    } catch {
      setHeroBgUrl(null);
    }
  };

  const fetchCases = async () => {
    setLoading(true);
    setRefreshing(true);
    const { data, error } = await supabase
      .from('cases')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching cases:', error);
      toast({
        variant: "destructive",
        title: "Sync Error",
        description: error.message || "Failed to load case records from database.",
      });
    } else {
      setCases(data || []);
    }
    setLoading(false);
    setRefreshing(false);
  };

  const fetchStories = async () => {
    const { data, error } = await supabase
      .from('success_stories')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching stories:', error);
    } else {
      setStories(data || []);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({ title: "Signed Out", description: "Administrator session ended safely." });
    router.push('/admin/login');
  };

  const deleteCase = async (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (confirm('Permanently delete this case record? This action cannot be reversed.')) {
      const { error } = await supabase.from('cases').delete().eq('id', id);
      if (!error) {
        setCases(prev => prev.filter(c => c.id !== id));
        if (selectedCase?.id === id) {
          setSelectedCase(null);
        }
        toast({ title: "Record Deleted", description: "The case dossier has been permanently purged." });
      } else {
        toast({ variant: 'destructive', title: "Delete Failed", description: error.message });
      }
    }
  };

  const updateCaseStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('cases')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) throw error;

      setCases(prev => prev.map(c => c.id === id ? { ...c, status: newStatus } : c));
      if (selectedCase && selectedCase.id === id) {
        setSelectedCase(prev => prev ? { ...prev, status: newStatus } : null);
      }
      toast({
        title: "Status Updated",
        description: `Case marked as '${newStatus}'.`,
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Update Failed",
        description: error.message || "Failed to update case status.",
      });
    }
  };

  const handleCreateCase = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittingCase(true);
    try {
      const generatedId = newCaseForm.case_id.trim() || `EPR-${Math.floor(10000 + Math.random() * 90000)}`;
      const payload = {
        case_id: generatedId,
        user_name: newCaseForm.user_name.trim(),
        user_email: newCaseForm.user_email.trim(),
        user_phone: newCaseForm.user_phone.trim() || 'Not provided',
        user_country: newCaseForm.user_country.trim() || 'United States',
        case_type: newCaseForm.case_type,
        risk_level: newCaseForm.risk_level,
        evidence_integrity: newCaseForm.evidence_integrity,
        status: newCaseForm.status,
        description: newCaseForm.description.trim() || 'Direct staff intake recording.',
        form_values: { reportedLoss: newCaseForm.amount.trim() || 'Undisclosed' },
        evidence_files: []
      };

      const { error } = await supabase.from('cases').insert([payload]);
      if (error) throw error;

      toast({
        title: "Case Registered",
        description: `Case ${generatedId} has been created and indexed.`,
      });

      setIsNewCaseOpen(false);
      setNewCaseForm({
        case_id: '',
        user_name: '',
        user_email: '',
        user_phone: '',
        user_country: 'United States',
        case_type: 'Cryptocurrency Scam',
        risk_level: 'High',
        evidence_integrity: 'Standard',
        status: 'Review Pending',
        amount: '',
        description: ''
      });
      fetchCases();
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: "Registration Failed",
        description: error.message || "Could not register new case.",
      });
    } finally {
      setSubmittingCase(false);
    }
  };

  const deleteStory = async (id: string) => {
    if (confirm('Delete this case insight?')) {
      const { error } = await supabase.from('success_stories').delete().eq('id', id);
      if (!error) {
        setStories(prev => prev.filter(s => s.id !== id));
        toast({ title: "Resolution Removed" });
      }
    }
  };

  const saveStory = async () => {
    if (!storyForm.case_id || !storyForm.challenge) {
      toast({ variant: 'destructive', title: "Missing Information", description: "Case ID and Challenge are required." });
      return;
    }

    try {
      const { error } = await supabase
        .from('success_stories')
        .insert([storyForm]);

      if (error) throw error;

      toast({ title: "Resolution Registered", description: "The case outcome has been published to the portal." });
      setIsStoryDialogOpen(false);
      setStoryForm({
        case_id: '',
        case_type: '',
        amount: '',
        status: 'Resolved',
        challenge: '',
        focus: '',
        outcome: '',
        narrative: '',
        icon_name: 'TrendingUp'
      });
      fetchStories();
    } catch (error: any) {
      toast({ variant: 'destructive', title: "Save Failed", description: error.message });
    }
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setLogoFile(file);
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const uploadLogo = async () => {
    if (!logoFile) return;
    setUploadingLogo(true);

    try {
      const { error } = await supabase.storage
        .from('assets')
        .upload('logo.png', logoFile, {
          upsert: true,
          contentType: logoFile.type
        });

      if (error) throw error;

      toast({
        title: "Logo Synchronized",
        description: "The primary brand logo has been updated successfully.",
      });
      setLogoFile(null);
      setLogoPreview(null);
      fetchLogo();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Upload Failed",
        description: error.message || "Ensure 'assets' bucket exists and RLS policies from database.md have been executed.",
      });
    } finally {
      setUploadingLogo(false);
    }
  };

  const handleHeroBgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setHeroBgFile(file);
      setHeroBgPreview(URL.createObjectURL(file));
    }
  };

  const uploadHeroBg = async () => {
    if (!heroBgFile) return;
    setUploadingHeroBg(true);

    try {
      const { error } = await supabase.storage
        .from('assets')
        .upload('hero-bg.png', heroBgFile, {
          upsert: true,
          contentType: heroBgFile.type
        });

      if (error) throw error;

      toast({
        title: "Hero Background Synchronized",
        description: "The homepage hero backdrop has been successfully updated.",
      });
      setHeroBgFile(null);
      setHeroBgPreview(null);
      fetchHeroBg();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Upload Failed",
        description: error.message || "Check storage RLS policies in database.md.",
      });
    } finally {
      setUploadingHeroBg(false);
    }
  };

  const handleAssetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAssetFile(file);
      setAssetPreview(URL.createObjectURL(file));
    }
  };

  const uploadAsset = async () => {
    if (!assetFile || !selectedAssetId) return;
    setUploadingAsset(true);

    try {
      const fileName = `${selectedAssetId}.png`;
      const { error } = await supabase.storage
        .from('assets')
        .upload(fileName, assetFile, {
          upsert: true,
          contentType: assetFile.type
        });

      if (error) throw error;

      toast({
        title: "Asset Updated",
        description: `Asset '${selectedAssetId}' synchronized successfully.`,
      });
      setAssetFile(null);
      setAssetPreview(null);
      setSelectedAssetId(null);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Upload Failed",
        description: error.message,
      });
    } finally {
      setUploadingAsset(false);
    }
  };

  const exportToCsv = () => {
    if (filteredCases.length === 0) {
      toast({ title: "No Data", description: "There are no case records matching current filters to export." });
      return;
    }

    const headers = ["Case ID", "Registration Date", "Client Name", "Email", "Phone", "Country", "Category", "Risk Level", "Status", "Reported Amount", "Description"];
    const rows = filteredCases.map(c => [
      c.case_id,
      new Date(c.created_at).toISOString().split('T')[0],
      `"${(c.user_name || '').replace(/"/g, '""')}"`,
      `"${(c.user_email || '').replace(/"/g, '""')}"`,
      `"${(c.user_phone || '').replace(/"/g, '""')}"`,
      `"${(c.user_country || '').replace(/"/g, '""')}"`,
      `"${(c.case_type || '').replace(/"/g, '""')}"`,
      c.risk_level || 'Standard',
      c.status || 'Review Pending',
      `"${(c.form_values?.reportedLoss || c.form_values?.reportedAmount || '').replace(/"/g, '""')}"`,
      `"${(c.description || '').replace(/"/g, '""').replace(/\r?\n|\r/g, ' ')}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `EpicResurge_Cases_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Export Generated",
      description: `Successfully exported ${filteredCases.length} case records to CSV.`,
    });
  };

  const copyStorageSql = () => {
    const sql = `-- Run in Supabase SQL Editor:
INSERT INTO storage.buckets (id, name, public) VALUES ('assets', 'assets', true) ON CONFLICT (id) DO UPDATE SET public = true;
DROP POLICY IF EXISTS "Public Read Assets" ON storage.objects;
CREATE POLICY "Public Read Assets" ON storage.objects FOR SELECT USING (bucket_id = 'assets');
DROP POLICY IF EXISTS "Authenticated Manage Assets" ON storage.objects;
CREATE POLICY "Authenticated Manage Assets" ON storage.objects FOR ALL TO authenticated USING (bucket_id = 'assets') WITH CHECK (bucket_id = 'assets');`;
    navigator.clipboard.writeText(sql);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2500);
    toast({ title: "SQL Copied", description: "Storage policy commands copied to clipboard." });
  };

  // Filtered Cases
  const filteredCases = useMemo(() => {
    return cases.filter(c => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || [
        c.case_id,
        c.user_name,
        c.user_email,
        c.user_phone,
        c.user_country,
        c.case_type,
        c.description
      ].some(val => val && val.toLowerCase().includes(q));

      const matchesStatus = statusFilter === 'all' || c.status === statusFilter;
      const matchesRisk = riskFilter === 'all' || c.risk_level === riskFilter;
      const matchesCategory = categoryFilter === 'all' || c.case_type === categoryFilter;

      return matchesSearch && matchesStatus && matchesRisk && matchesCategory;
    });
  }, [cases, searchQuery, statusFilter, riskFilter, categoryFilter]);

  // Derived KPI statistics
  const pendingCount = useMemo(() => cases.filter(c => c.status === 'Review Pending').length, [cases]);
  const criticalCount = useMemo(() => cases.filter(c => c.risk_level === 'Critical' || c.risk_level === 'High').length, [cases]);
  const evidenceCount = useMemo(() => cases.filter(c => (c.evidence_files && c.evidence_files.length > 0) || c.evidence_integrity === 'Substantial').length, [cases]);
  const resolvedCount = useMemo(() => cases.filter(c => c.status === 'Resolved').length, [cases]);

  // Distinct Categories for Filter Dropdown
  const uniqueCategories = useMemo(() => {
    const set = new Set<string>();
    cases.forEach(c => { if (c.case_type) set.add(c.case_type); });
    return Array.from(set);
  }, [cases]);

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-blue-600/20 font-sans">
      
      {/* Top Corporate Navigation Bar */}
      <header className="h-20 bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-[1600px] h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Identity */}
          <div className="flex items-center gap-3.5">
            <div className={cn(
              "w-11 h-11 rounded-xl flex items-center justify-center transition-all overflow-hidden border border-slate-200/80 shadow-xs",
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
                <Shield className="w-6 h-6 text-white" />
              )}
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base md:text-lg tracking-tight text-[#0F172A] font-headline">EpicResurge</span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                  Operations Portal
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">Confidential Case Management & Restitution Engine</p>
            </div>
          </div>

          {/* Center Navigation Tabs (Desktop) */}
          <div className="hidden lg:flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/80">
            <button
              onClick={() => setActiveTab('inquiries')}
              className={cn(
                "flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all",
                activeTab === 'inquiries' 
                  ? "bg-white text-blue-700 shadow-xs font-bold" 
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Case Inquiries</span>
              <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] bg-slate-200/80 text-slate-700 font-bold">
                {cases.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('resolutions')}
              className={cn(
                "flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all",
                activeTab === 'resolutions' 
                  ? "bg-white text-blue-700 shadow-xs font-bold" 
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Resolutions</span>
              <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] bg-slate-200/80 text-slate-700 font-bold">
                {stories.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('branding')}
              className={cn(
                "flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all",
                activeTab === 'branding' 
                  ? "bg-white text-blue-700 shadow-xs font-bold" 
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Brand Assets</span>
            </button>

            <button
              onClick={() => setActiveTab('media')}
              className={cn(
                "flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all",
                activeTab === 'media' 
                  ? "bg-white text-blue-700 shadow-xs font-bold" 
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Media Library</span>
            </button>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2.5">
            
            {/* Live Database Status Indicator */}
            <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Database Connected</span>
            </div>

            {/* Quick Refresh */}
            <Button
              variant="outline"
              size="sm"
              onClick={fetchCases}
              disabled={refreshing}
              title="Refresh database records"
              className="h-9 px-3 border-slate-200 hover:bg-slate-100 text-slate-700 font-medium text-xs rounded-lg"
            >
              <RefreshCw className={cn("w-3.5 h-3.5 mr-1.5", refreshing && "animate-spin text-blue-600")} />
              <span className="hidden md:inline">Sync</span>
            </Button>

            {/* Mobile Navigation Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="lg:hidden h-9 px-2.5 border-slate-200 text-slate-700">
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-white border border-slate-200 shadow-md">
                <DropdownMenuLabel className="text-xs text-slate-500 uppercase font-bold tracking-wider">Navigation</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => setActiveTab('inquiries')} className="text-xs font-medium cursor-pointer">
                  <FileText className="w-4 h-4 mr-2 text-blue-600" /> Case Inquiries ({cases.length})
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActiveTab('resolutions')} className="text-xs font-medium cursor-pointer">
                  <Award className="w-4 h-4 mr-2 text-emerald-600" /> Case Resolutions ({stories.length})
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActiveTab('branding')} className="text-xs font-medium cursor-pointer">
                  <ImageIcon className="w-4 h-4 mr-2 text-purple-600" /> Brand Assets
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActiveTab('media')} className="text-xs font-medium cursor-pointer">
                  <Layers className="w-4 h-4 mr-2 text-amber-600" /> Media Library
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-slate-100" />
                <DropdownMenuItem onClick={handleLogout} className="text-xs font-medium text-rose-600 hover:bg-rose-50 cursor-pointer">
                  <LogOut className="w-4 h-4 mr-2" /> Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Sign Out Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="text-slate-600 hover:text-rose-600 hover:bg-rose-50 h-9 px-3 rounded-lg text-xs font-medium"
            >
              <LogOut className="w-3.5 h-3.5 md:mr-1.5" />
              <span className="hidden md:inline">Sign Out</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* ========================================================================= */}
        {/* TAB 1: CASE INQUIRIES                                                     */}
        {/* ========================================================================= */}
        {activeTab === 'inquiries' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* KPI Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              
              {/* Card 1: Total Volume */}
              <Card className="bg-white border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                    Total Volume
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-500">All Registered Inquiries</p>
                <div className="flex items-baseline justify-between mt-1">
                  <h3 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">{cases.length}</h3>
                  <span className="text-[11px] font-medium text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> 100% Synced
                  </span>
                </div>
              </Card>

              {/* Card 2: Pending Initial Assessment */}
              <Card className="bg-white border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                    Needs Action
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-500">Pending Initial Review</p>
                <div className="flex items-baseline justify-between mt-1">
                  <h3 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">{pendingCount}</h3>
                  <span className="text-[11px] font-medium text-slate-500">
                    24h turnaround target
                  </span>
                </div>
              </Card>

              {/* Card 3: High Priority / Critical */}
              <Card className="bg-white border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-full">
                    High Risk
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-500">Critical / High Severity</p>
                <div className="flex items-baseline justify-between mt-1">
                  <h3 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">{criticalCount}</h3>
                  <span className="text-[11px] font-medium text-slate-500">
                    Urgent recovery window
                  </span>
                </div>
              </Card>

              {/* Card 4: Documented Evidence */}
              <Card className="bg-white border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    Actionable
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-500">Cases With Evidence</p>
                <div className="flex items-baseline justify-between mt-1">
                  <h3 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">{evidenceCount}</h3>
                  <span className="text-[11px] font-medium text-slate-500">
                    Hashes & ledgers attached
                  </span>
                </div>
              </Card>
            </div>

            {/* Interactive Toolbar: Search, Filters & Action Buttons */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-4">
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
                
                {/* Search Bar */}
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by case ID, client name, email, phone, or country..."
                    className="w-full h-10 pl-10 pr-9 bg-slate-50 border border-slate-200 rounded-lg text-sm text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:border-blue-600 focus:outline-none transition-all"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Filter Dropdowns */}
                <div className="flex flex-wrap items-center gap-2.5">
                  
                  {/* Status Filter */}
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="h-10 w-[150px] bg-slate-50 border-slate-200 text-xs font-semibold text-slate-700">
                      <SelectValue placeholder="Status: All" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-slate-200">
                      <SelectItem value="all">Status: All</SelectItem>
                      <SelectItem value="Review Pending">Review Pending</SelectItem>
                      <SelectItem value="Under Investigation">Under Investigation</SelectItem>
                      <SelectItem value="Evidence Gathered">Evidence Gathered</SelectItem>
                      <SelectItem value="Legal Escalation">Legal Escalation</SelectItem>
                      <SelectItem value="Resolved">Resolved</SelectItem>
                      <SelectItem value="Closed">Closed</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* Risk Filter */}
                  <Select value={riskFilter} onValueChange={setRiskFilter}>
                    <SelectTrigger className="h-10 w-[130px] bg-slate-50 border-slate-200 text-xs font-semibold text-slate-700">
                      <SelectValue placeholder="Risk: All" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-slate-200">
                      <SelectItem value="all">Risk: All</SelectItem>
                      <SelectItem value="Critical">Critical</SelectItem>
                      <SelectItem value="High">High</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="Low">Low</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* Category Filter */}
                  {uniqueCategories.length > 0 && (
                    <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                      <SelectTrigger className="h-10 w-[170px] bg-slate-50 border-slate-200 text-xs font-semibold text-slate-700">
                        <SelectValue placeholder="Category: All" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-slate-200">
                        <SelectItem value="all">Category: All</SelectItem>
                        {uniqueCategories.map(cat => (
                          <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}

                  {/* Export CSV Button */}
                  <Button
                    variant="outline"
                    onClick={exportToCsv}
                    className="h-10 border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs rounded-lg px-3.5"
                    title="Export filtered records to spreadsheet"
                  >
                    <Download className="w-3.5 h-3.5 mr-1.5 text-slate-500" />
                    Export CSV
                  </Button>

                  {/* Log New Case Button */}
                  <Button
                    onClick={() => setIsNewCaseOpen(true)}
                    className="h-10 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-xs rounded-lg px-4 shadow-sm"
                  >
                    <Plus className="w-4 h-4 mr-1.5" />
                    Log New Case
                  </Button>
                </div>
              </div>

              {/* Filter Chips / Active Counts */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-slate-700">Displaying:</span>
                  <span className="font-bold text-blue-600">{filteredCases.length}</span>
                  <span>of {cases.length} records</span>
                  {(statusFilter !== 'all' || riskFilter !== 'all' || categoryFilter !== 'all' || searchQuery) && (
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setStatusFilter('all');
                        setRiskFilter('all');
                        setCategoryFilter('all');
                      }}
                      className="ml-2 text-blue-600 hover:underline font-semibold text-[11px]"
                    >
                      Clear all filters
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2 text-[11px]">
                  <span className="inline-flex items-center gap-1 text-amber-700">
                    <span className="w-2 h-2 rounded-full bg-amber-500" /> {pendingCount} Pending
                  </span>
                  <span className="inline-flex items-center gap-1 text-rose-700">
                    <span className="w-2 h-2 rounded-full bg-rose-500" /> {criticalCount} High Risk
                  </span>
                  <span className="inline-flex items-center gap-1 text-emerald-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" /> {resolvedCount} Resolved
                  </span>
                </div>
              </div>
            </div>

            {/* Inquiries Table Card */}
            <Card className="bg-white border-slate-200/90 shadow-xs rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-slate-50/90 border-b border-slate-200">
                    <TableRow className="hover:bg-transparent border-slate-200">
                      <TableHead className="text-xs font-bold text-slate-600 uppercase tracking-wider py-4 px-4 sm:px-6">Case Identifier</TableHead>
                      <TableHead className="text-xs font-bold text-slate-600 uppercase tracking-wider">Client Profile</TableHead>
                      <TableHead className="text-xs font-bold text-slate-600 uppercase tracking-wider">Scam Category</TableHead>
                      <TableHead className="text-xs font-bold text-slate-600 uppercase tracking-wider text-center">Risk Factor</TableHead>
                      <TableHead className="text-xs font-bold text-slate-600 uppercase tracking-wider text-center">Workflow Status</TableHead>
                      <TableHead className="text-xs font-bold text-slate-600 uppercase tracking-wider text-center">Evidence</TableHead>
                      <TableHead className="text-xs font-bold text-slate-600 uppercase tracking-wider text-right px-4 sm:px-6">Management</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {loading ? (
                      <TableRow>
                        <TableCell colSpan={7} className="h-64 text-center">
                          <Loader2 className="w-8 h-8 animate-spin mx-auto text-blue-600 mb-3" />
                          <p className="text-sm font-semibold text-slate-600">Loading Case Ledgers...</p>
                          <p className="text-xs text-slate-400 mt-1">Connecting to Supabase PostgreSQL cluster</p>
                        </TableCell>
                      </TableRow>
                    ) : filteredCases.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={7} className="h-72 text-center py-12">
                          <div className="max-w-md mx-auto space-y-3">
                            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                              <Search className="w-6 h-6" />
                            </div>
                            <h4 className="text-base font-bold text-slate-800">No Case Records Found</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">
                              {searchQuery || statusFilter !== 'all' || riskFilter !== 'all' || categoryFilter !== 'all'
                                ? "No client inquiries match the current search terms or filter criteria. Try resetting your filters."
                                : "No client inquiries have been submitted to the database yet. Click 'Log New Case' to manually register one."}
                            </p>
                            {(searchQuery || statusFilter !== 'all' || riskFilter !== 'all' || categoryFilter !== 'all') && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  setSearchQuery('');
                                  setStatusFilter('all');
                                  setRiskFilter('all');
                                  setCategoryFilter('all');
                                }}
                                className="mt-2 text-xs border-slate-200"
                              >
                                Reset All Filters
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredCases.map((c) => {
                        const isCritical = c.risk_level === 'Critical';
                        const isHigh = c.risk_level === 'High';
                        const isMedium = c.risk_level === 'Medium';
                        const isPending = c.status === 'Review Pending';
                        const isResolved = c.status === 'Resolved';
                        const fileCount = c.evidence_files?.length || 0;

                        return (
                          <TableRow 
                            key={c.id} 
                            onClick={() => setSelectedCase(c)}
                            className="border-b border-slate-100 hover:bg-slate-50/80 cursor-pointer group transition-colors"
                          >
                            {/* Case Identifier */}
                            <TableCell className="py-4 px-4 sm:px-6 whitespace-nowrap">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                                  <Fingerprint className="w-4 h-4" />
                                </div>
                                <div>
                                  <span className="font-bold text-sm text-[#0F172A] group-hover:text-blue-600 transition-colors font-mono">
                                    {c.case_id}
                                  </span>
                                  <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                                    <Calendar className="w-3 h-3" />
                                    {new Date(c.created_at).toLocaleDateString(undefined, {
                                      month: 'short',
                                      day: 'numeric',
                                      year: 'numeric'
                                    })}
                                  </p>
                                </div>
                              </div>
                            </TableCell>

                            {/* Client Profile */}
                            <TableCell className="whitespace-nowrap">
                              <div>
                                <p className="text-sm font-semibold text-slate-900">{c.user_name || 'Anonymous'}</p>
                                <p className="text-xs text-slate-500 font-mono">{c.user_email}</p>
                                <p className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
                                  <MapPin className="w-2.5 h-2.5" /> {c.user_country || 'United States'}
                                </p>
                              </div>
                            </TableCell>

                            {/* Scam Category */}
                            <TableCell className="whitespace-nowrap">
                              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/80">
                                {c.case_type || 'Unspecified'}
                              </span>
                              {c.form_values?.reportedLoss && (
                                <p className="text-[11px] font-bold text-slate-600 mt-1">
                                  Loss: {c.form_values.reportedLoss}
                                </p>
                              )}
                            </TableCell>

                            {/* Risk Factor */}
                            <TableCell className="text-center whitespace-nowrap">
                              <span className={cn(
                                "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border",
                                isCritical ? "bg-rose-50 text-rose-700 border-rose-200" :
                                isHigh ? "bg-amber-50 text-amber-700 border-amber-200" :
                                isMedium ? "bg-blue-50 text-blue-700 border-blue-200" :
                                "bg-slate-100 text-slate-700 border-slate-200"
                              )}>
                                <span className={cn(
                                  "w-1.5 h-1.5 rounded-full",
                                  isCritical ? "bg-rose-500 animate-pulse" :
                                  isHigh ? "bg-amber-500" :
                                  isMedium ? "bg-blue-500" : "bg-slate-400"
                                )} />
                                {c.risk_level || 'Standard'}
                              </span>
                            </TableCell>

                            {/* Workflow Status */}
                            <TableCell className="text-center whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <button className={cn(
                                    "inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all hover:shadow-xs",
                                    isPending ? "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100" :
                                    isResolved ? "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100" :
                                    "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100"
                                  )}>
                                    <span>{c.status || 'Review Pending'}</span>
                                    <ChevronDown className="w-3 h-3 opacity-60 ml-0.5" />
                                  </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="center" className="bg-white border-slate-200 shadow-lg text-xs font-medium w-44">
                                  <DropdownMenuLabel className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Update Status</DropdownMenuLabel>
                                  <DropdownMenuItem onClick={() => updateCaseStatus(c.id, 'Review Pending')}>
                                    <Clock className="w-3.5 h-3.5 mr-2 text-amber-500" /> Review Pending
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => updateCaseStatus(c.id, 'Under Investigation')}>
                                    <Activity className="w-3.5 h-3.5 mr-2 text-blue-500" /> Under Investigation
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => updateCaseStatus(c.id, 'Evidence Gathered')}>
                                    <ShieldCheck className="w-3.5 h-3.5 mr-2 text-purple-500" /> Evidence Gathered
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => updateCaseStatus(c.id, 'Legal Escalation')}>
                                    <Landmark className="w-3.5 h-3.5 mr-2 text-orange-500" /> Legal Escalation
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => updateCaseStatus(c.id, 'Resolved')}>
                                    <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-emerald-500" /> Mark Resolved
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => updateCaseStatus(c.id, 'Closed')}>
                                    <X className="w-3.5 h-3.5 mr-2 text-slate-400" /> Close Case
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>

                            {/* Evidence Files Count */}
                            <TableCell className="text-center whitespace-nowrap">
                              {fileCount > 0 ? (
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                  <FileCheck className="w-3 h-3" />
                                  {fileCount} {fileCount === 1 ? 'file' : 'files'}
                                </span>
                              ) : (
                                <span className="text-xs text-slate-400">None</span>
                              )}
                            </TableCell>

                            {/* Management Actions */}
                            <TableCell className="text-right px-4 sm:px-6 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                              <div className="flex items-center justify-end gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => setSelectedCase(c)}
                                  className="h-8 px-3 border-slate-200 hover:border-blue-600 hover:text-blue-600 text-xs font-semibold rounded-lg"
                                >
                                  Review
                                </Button>

                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg">
                                      <MoreVertical className="w-4 h-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end" className="bg-white border-slate-200 shadow-md w-44 text-xs font-medium">
                                    <DropdownMenuItem onClick={() => setSelectedCase(c)} className="cursor-pointer">
                                      <FileText className="w-3.5 h-3.5 mr-2 text-slate-500" /> View Full Dossier
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => window.open(`mailto:${c.user_email}?subject=EpicResurge Case Review: ${c.case_id}`)} className="cursor-pointer">
                                      <Mail className="w-3.5 h-3.5 mr-2 text-blue-500" /> Email Client
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator className="bg-slate-100" />
                                    <DropdownMenuItem 
                                      onClick={(e) => deleteCase(c.id, e)} 
                                      className="text-rose-600 hover:bg-rose-50 cursor-pointer"
                                    >
                                      <Trash2 className="w-3.5 h-3.5 mr-2" /> Delete Dossier
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      })
                    )}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: RESOLUTIONS & CASE INSIGHTS                                        */}
        {/* ========================================================================= */}
        {activeTab === 'resolutions' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-headline">Case Resolutions & Verified Outcomes</h3>
                <p className="text-xs text-slate-500 mt-1">
                  These verified forensic outcomes are published on the public website to demonstrate authentic restitution capabilities.
                </p>
              </div>

              <Button
                onClick={() => setIsStoryDialogOpen(true)}
                className="bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-xs rounded-lg px-4 h-10 shadow-sm"
              >
                <Plus className="w-4 h-4 mr-1.5" />
                Register New Outcome
              </Button>
            </div>

            {stories.length === 0 ? (
              <Card className="bg-white border-slate-200 rounded-xl p-12 text-center">
                <div className="max-w-md mx-auto space-y-3">
                  <Award className="w-10 h-10 text-slate-400 mx-auto" />
                  <h4 className="text-base font-bold text-slate-800">No Published Resolutions Yet</h4>
                  <p className="text-xs text-slate-500">
                    Add verified investigation case studies to showcase recovery milestones on the public homepage.
                  </p>
                  <Button onClick={() => setIsStoryDialogOpen(true)} className="bg-blue-600 text-white text-xs mt-2">
                    Add First Resolution
                  </Button>
                </div>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {stories.map((story) => (
                  <Card key={story.id} className="bg-white border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md transition-all rounded-xl p-5 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                          {story.case_id}
                        </span>
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                          {story.amount || 'Restitution Secured'}
                        </span>
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{story.case_type}</p>
                        <h4 className="text-sm font-bold text-slate-900 mt-1 line-clamp-2">{story.challenge}</h4>
                      </div>

                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-1.5 text-xs">
                        <p className="text-slate-500 text-[11px] font-semibold uppercase">Technical Outcome</p>
                        <p className="text-slate-700 font-medium line-clamp-2">{story.outcome}</p>
                      </div>

                      {story.narrative && (
                        <p className="text-xs text-slate-500 italic line-clamp-3">
                          "{story.narrative}"
                        </p>
                      )}
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                      <Badge variant="outline" className="text-[10px] font-semibold text-slate-600 border-slate-200">
                        {story.status}
                      </Badge>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteStory(story.id)}
                        className="text-slate-400 hover:text-rose-600 hover:bg-rose-50 h-8 px-2"
                      >
                        <Trash2 className="w-3.5 h-3.5 mr-1" />
                        <span className="text-xs">Delete</span>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: BRAND ASSETS & STORAGE MANAGEMENT                                 */}
        {/* ========================================================================= */}
        {activeTab === 'branding' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 font-headline">Brand Assets & Storage Synchronization</h3>
              <p className="text-xs text-slate-500 mt-1">
                Upload and synchronize public graphics stored in the Supabase <span className="font-mono font-bold text-slate-700">assets</span> bucket.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Logo Management Card */}
              <Card className="bg-white border-slate-200 shadow-xs rounded-xl p-6 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <ImageIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Platform Brand Logo</h4>
                      <p className="text-[11px] text-slate-500">Rendered across the navigation bar and footer</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-[10px] text-slate-600">assets/logo.png</Badge>
                </div>

                {/* Current Active Logo Preview */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">Active Logo</p>
                  <div className="h-16 flex items-center justify-center">
                    {logoUrl ? (
                      <img src={logoUrl} alt="Logo" className="max-h-14 max-w-full object-contain" />
                    ) : (
                      <div className="flex items-center gap-2 text-slate-400 text-xs">
                        <Shield className="w-5 h-5 text-blue-600" />
                        <span>Using default vector shield</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Upload Zone */}
                <div className="space-y-3">
                  <Label className="text-xs font-semibold text-slate-700">Upload Replacement Logo (PNG, SVG, or WebP)</Label>
                  <div className="relative border-2 border-dashed border-slate-200 hover:border-blue-500 rounded-xl p-6 text-center cursor-pointer transition-colors bg-slate-50/50">
                    <input 
                      type="file" 
                      accept="image/png,image/svg+xml,image/webp,image/jpeg" 
                      onChange={handleLogoChange}
                      className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    />
                    {logoPreview ? (
                      <div className="space-y-2">
                        <img src={logoPreview} alt="Preview" className="h-14 mx-auto object-contain" />
                        <p className="text-xs font-semibold text-blue-600">{logoFile?.name}</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Upload className="w-8 h-8 text-slate-400 mx-auto" />
                        <p className="text-xs font-semibold text-slate-700">Click or drag image file here</p>
                        <p className="text-[11px] text-slate-400">Recommended size: 250×60px transparent PNG</p>
                      </div>
                    )}
                  </div>

                  <Button
                    onClick={uploadLogo}
                    disabled={!logoFile || uploadingLogo}
                    className="w-full h-11 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow-sm"
                  >
                    {uploadingLogo ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        Uploading to Supabase...
                      </>
                    ) : (
                      <>
                        <Upload className="w-4 h-4 mr-2" />
                        Synchronize Brand Logo
                      </>
                    )}
                  </Button>
                </div>
              </Card>

              {/* Hero Background Card */}
              <Card className="bg-white border-slate-200 shadow-xs rounded-xl p-6 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Hero Section Backdrop</h4>
                      <p className="text-[11px] text-slate-500">Subtle backdrop graphic for the homepage hero</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-[10px] text-slate-600">assets/hero-bg.png</Badge>
                </div>

                {/* Current Active Hero Preview */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">Active Hero Backdrop</p>
                  <div className="h-16 flex items-center justify-center overflow-hidden rounded-lg bg-slate-900">
                    {heroBgUrl ? (
                      <img src={heroBgUrl} alt="Hero" className="w-full h-full object-cover opacity-75" />
                    ) : (
                      <span className="text-xs text-slate-400">Default animated SVG canvas</span>
                    )}
                  </div>
                </div>

                {/* Upload Zone */}
                <div className="space-y-3">
                  <Label className="text-xs font-semibold text-slate-700">Upload High-Res Backdrop (PNG, WebP, JPG)</Label>
                  <div className="relative border-2 border-dashed border-slate-200 hover:border-purple-500 rounded-xl p-6 text-center cursor-pointer transition-colors bg-slate-50/50">
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleHeroBgChange}
                      className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    />
                    {heroBgPreview ? (
                      <div className="space-y-2">
                        <img src={heroBgPreview} alt="Preview" className="h-14 mx-auto object-cover rounded" />
                        <p className="text-xs font-semibold text-purple-600">{heroBgFile?.name}</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Upload className="w-8 h-8 text-slate-400 mx-auto" />
                        <p className="text-xs font-semibold text-slate-700">Click or drag backdrop image</p>
                        <p className="text-[11px] text-slate-400">Recommended size: 1920×1080px (under 5MB)</p>
                      </div>
                    )}
                  </div>

                  <Button
                    onClick={uploadHeroBg}
                    disabled={!heroBgFile || uploadingHeroBg}
                    className="w-full h-11 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs rounded-xl shadow-sm"
                  >
                    {uploadingHeroBg ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        Uploading to Supabase...
                      </>
                    ) : (
                      <>
                        <Upload className="w-4 h-4 mr-2" />
                        Synchronize Hero Background
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            </div>

            {/* Storage RLS Helper Callout */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Supabase Storage RLS Configuration</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Ensure your Supabase project allows uploads to the <code className="bg-slate-100 text-blue-700 px-1 py-0.5 rounded font-mono">assets</code> bucket by having active policies on <code className="bg-slate-100 px-1 py-0.5 rounded font-mono">storage.objects</code>.
                    </p>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyStorageSql}
                  className="shrink-0 text-xs border-slate-200 hover:bg-slate-50 text-slate-700"
                >
                  {copiedSql ? (
                    <>
                      <Check className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
                      Copied SQL
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 mr-1.5" />
                      Copy RLS SQL
                    </>
                  )}
                </Button>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs text-slate-600 font-mono space-y-1">
                <p className="text-slate-400 text-[11px]">// If you hit error 42501 (policy violation) when uploading assets, execute in Supabase SQL Editor:</p>
                <p className="text-slate-800">INSERT INTO storage.buckets (id, name, public) VALUES ('assets', 'assets', true) ON CONFLICT (id) DO UPDATE SET public = true;</p>
                <p className="text-blue-700">CREATE POLICY "Allow authenticated manage assets" ON storage.objects FOR ALL TO authenticated USING (bucket_id = 'assets') WITH CHECK (bucket_id = 'assets');</p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: MEDIA LIBRARY                                                     */}
        {/* ========================================================================= */}
        {activeTab === 'media' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 font-headline">Technical Asset & Team Media Library</h3>
              <p className="text-xs text-slate-500 mt-1">
                Manage investigator portraits and platform photography. Click any asset to upload a custom high-resolution replacement.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {placeholderData.placeholderImages.map((asset) => {
                const isSelected = selectedAssetId === asset.id;
                return (
                  <Card
                    key={asset.id}
                    onClick={() => setSelectedAssetId(asset.id)}
                    className={cn(
                      "bg-white border-slate-200 hover:border-blue-500 shadow-xs hover:shadow-md transition-all rounded-xl p-4 cursor-pointer text-center space-y-3",
                      isSelected && "border-blue-600 ring-2 ring-blue-600/20 bg-blue-50/20"
                    )}
                  >
                    <div className="aspect-[4/3] bg-slate-100 rounded-lg overflow-hidden relative border border-slate-200">
                      <img 
                        src={asset.imageUrl} 
                        alt={asset.id} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800 capitalize">{asset.id.replace(/-/g, ' ')}</p>
                      <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{asset.description}</p>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Asset Replacement Drawer / Upload Form */}
            {selectedAssetId && (
              <Card className="bg-white border-blue-200 ring-1 ring-blue-200 p-6 rounded-xl space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Upload Replacement for: <span className="text-blue-600 font-mono">{selectedAssetId}.png</span>
                    </h4>
                    <p className="text-xs text-slate-500">Will replace the asset in the Supabase 'assets' bucket.</p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setSelectedAssetId(null)} className="h-8 text-xs text-slate-500">
                    Cancel
                  </Button>
                </div>

                <div className="relative border-2 border-dashed border-blue-200 hover:border-blue-500 rounded-xl p-8 text-center cursor-pointer transition-colors bg-blue-50/30">
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleAssetChange}
                    className="absolute inset-0 opacity-0 cursor-pointer z-10"
                  />
                  {assetPreview ? (
                    <div className="space-y-2">
                      <img src={assetPreview} alt="Preview" className="h-28 mx-auto object-contain rounded" />
                      <p className="text-xs font-semibold text-blue-600">{assetFile?.name}</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload className="w-8 h-8 text-blue-500 mx-auto" />
                      <p className="text-xs font-semibold text-slate-700">Select replacement image file</p>
                      <p className="text-[11px] text-slate-400">PNG or JPG recommended</p>
                    </div>
                  )}
                </div>

                <Button
                  onClick={uploadAsset}
                  disabled={!assetFile || uploadingAsset}
                  className="w-full h-11 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow-sm"
                >
                  {uploadingAsset ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      Synchronizing Asset...
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4 mr-2" />
                      Save & Publish {selectedAssetId}.png
                    </>
                  )}
                </Button>
              </Card>
            )}
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* MODAL 1: CONFIDENTIAL INVESTIGATION CASE DOSSIER                          */}
      {/* ========================================================================= */}
      <Dialog open={!!selectedCase} onOpenChange={(open) => !open && setSelectedCase(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white border-slate-200 p-0 rounded-2xl shadow-2xl">
          {selectedCase && (
            <div>
              {/* Dossier Header */}
              <div className="p-6 sm:p-8 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold bg-blue-600 text-white px-2.5 py-0.5 rounded">
                      {selectedCase.case_id}
                    </span>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                      Registered: {new Date(selectedCase.created_at).toLocaleString()}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-headline tracking-tight text-white">
                    Investigation Dossier — {selectedCase.user_name}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  {/* Status Selector in Modal */}
                  <Select 
                    value={selectedCase.status} 
                    onValueChange={(val) => updateCaseStatus(selectedCase.id, val)}
                  >
                    <SelectTrigger className="h-9 bg-slate-800 border-slate-700 text-xs font-semibold text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-slate-800 text-white text-xs">
                      <SelectItem value="Review Pending">Review Pending</SelectItem>
                      <SelectItem value="Under Investigation">Under Investigation</SelectItem>
                      <SelectItem value="Evidence Gathered">Evidence Gathered</SelectItem>
                      <SelectItem value="Legal Escalation">Legal Escalation</SelectItem>
                      <SelectItem value="Resolved">Resolved</SelectItem>
                      <SelectItem value="Closed">Closed</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.print()}
                    className="h-9 border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white text-xs"
                    title="Print formal case dossier"
                  >
                    <Printer className="w-3.5 h-3.5 mr-1.5" />
                    Print
                  </Button>
                </div>
              </div>

              {/* Dossier Body */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* 3 Overview Information Blocks */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  {/* Block 1: Contact Information */}
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider pb-2 border-b border-slate-200">
                      <User className="w-4 h-4 text-blue-600" />
                      Client Profile
                    </div>
                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase font-semibold">Full Name</span>
                        <p className="font-bold text-slate-900">{selectedCase.user_name}</p>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase font-semibold">Email</span>
                        <p className="font-mono text-blue-600">
                          <a href={`mailto:${selectedCase.user_email}`} className="hover:underline flex items-center gap-1">
                            {selectedCase.user_email} <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </p>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase font-semibold">Phone</span>
                        <p className="font-mono text-slate-800">{selectedCase.user_phone || 'Not provided'}</p>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase font-semibold">Jurisdiction</span>
                        <p className="font-semibold text-slate-800">{selectedCase.user_country || 'United States'}</p>
                      </div>
                    </div>
                  </div>

                  {/* Block 2: Investigation Parameters */}
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider pb-2 border-b border-slate-200">
                      <Target className="w-4 h-4 text-purple-600" />
                      Incident Scope
                    </div>
                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase font-semibold">Scam Category</span>
                        <p className="font-bold text-slate-900">{selectedCase.case_type}</p>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase font-semibold">Reported Loss</span>
                        <p className="font-bold text-emerald-700 text-sm">
                          {selectedCase.form_values?.reportedLoss || selectedCase.form_values?.reportedAmount || 'Undisclosed'}
                        </p>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase font-semibold">Risk Classification</span>
                        <p className="font-bold text-rose-700 uppercase">{selectedCase.risk_level || 'Standard'}</p>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase font-semibold">Evidence Integrity</span>
                        <p className="font-semibold text-slate-800">{selectedCase.evidence_integrity || 'Standard Intake'}</p>
                      </div>
                    </div>
                  </div>

                  {/* Block 3: Contact Preferences */}
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider pb-2 border-b border-slate-200">
                      <Clock className="w-4 h-4 text-amber-600" />
                      Client Preferences
                    </div>
                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase font-semibold">Preferred Channel</span>
                        <p className="font-semibold text-slate-800">{selectedCase.preferred_method || 'Email'}</p>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase font-semibold">Best Contact Window</span>
                        <p className="font-semibold text-slate-800">{selectedCase.best_contact_time || 'Business Hours'}</p>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase font-semibold">Assigned Status</span>
                        <p className="font-semibold text-blue-700">{selectedCase.status}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Victim Statement & Narrative */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                    <FileText className="w-4 h-4 text-slate-500" />
                    Victim Incident Statement
                  </div>
                  <div className="p-5 bg-slate-50 rounded-xl border-l-4 border-l-blue-600 border border-slate-200 text-sm text-slate-700 leading-relaxed font-sans whitespace-pre-wrap">
                    "{selectedCase.description || 'No detailed narrative entered.'}"
                  </div>
                </div>

                {/* Evidence Attachments */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      Submitted Evidence Files ({selectedCase.evidence_files?.length || 0})
                    </div>
                  </div>

                  {selectedCase.evidence_files && selectedCase.evidence_files.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedCase.evidence_files.map((file, idx) => (
                        <a
                          key={idx}
                          href={file.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3.5 bg-slate-50 hover:bg-blue-50/50 rounded-xl border border-slate-200 hover:border-blue-300 transition-all group"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                              <FileText className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-semibold text-slate-800 truncate group-hover:text-blue-700">
                              {file.name}
                            </span>
                          </div>
                          <Download className="w-4 h-4 text-slate-400 group-hover:text-blue-600 shrink-0" />
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 bg-slate-50 rounded-xl border border-dashed border-slate-200 text-center text-xs text-slate-400">
                      No document attachments were uploaded during this case intake.
                    </div>
                  )}
                </div>

                {/* Additional Platform Data If Present */}
                {selectedCase.form_values && Object.keys(selectedCase.form_values).length > 0 && (
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">Intake Form Metadata</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                      {Object.entries(selectedCase.form_values).map(([key, val]: any) => (
                        <div key={key}>
                          <span className="text-[10px] text-slate-400 uppercase font-semibold block">{key.replace(/([A-Z])/g, ' $1')}</span>
                          <span className="font-semibold text-slate-800">{String(val)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Preliminary Findings If Present */}
                {selectedCase.result_data?.preliminaryCaseFindings && (
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">Preliminary Assessment Findings</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {Object.entries(selectedCase.result_data.preliminaryCaseFindings).map(([key, val]: any) => (
                        <div key={key} className="p-3 bg-blue-50/50 rounded-lg border border-blue-100 text-xs">
                          <span className="text-[10px] text-blue-600 uppercase font-bold block">{key.replace(/([A-Z])/g, ' $1')}</span>
                          <span className="font-semibold text-slate-900 mt-0.5 block">{String(val)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Dossier Footer */}
              <div className="p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => deleteCase(selectedCase.id)}
                  className="text-xs font-semibold"
                >
                  <Trash2 className="w-3.5 h-3.5 mr-1.5" />
                  Delete Case Record
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedCase(null)}
                  className="border-slate-300 text-xs font-semibold"
                >
                  Close Dossier
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* ========================================================================= */}
      {/* MODAL 2: LOG NEW CASE / MANUAL INTAKE                                     */}
      {/* ========================================================================= */}
      <Dialog open={isNewCaseOpen} onOpenChange={setIsNewCaseOpen}>
        <DialogContent className="max-w-xl bg-white border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <DialogHeader className="pb-4 border-b border-slate-100">
            <DialogTitle className="text-xl font-bold font-headline text-slate-900">
              Register New Case Inquiry
            </DialogTitle>
            <DialogDescription className="text-xs text-slate-500">
              Record a client case received via phone, email, or direct investigator consultation.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleCreateCase} className="space-y-4 pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold text-slate-700">Case ID (Optional)</Label>
                <Input
                  placeholder="e.g. EPR-78291"
                  value={newCaseForm.case_id}
                  onChange={(e) => setNewCaseForm({...newCaseForm, case_id: e.target.value})}
                  className="h-10 text-xs bg-slate-50 border-slate-200"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs font-semibold text-slate-700">Scam Category *</Label>
                <Select 
                  value={newCaseForm.case_type} 
                  onValueChange={(val) => setNewCaseForm({...newCaseForm, case_type: val})}
                >
                  <SelectTrigger className="h-10 text-xs bg-slate-50 border-slate-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-slate-200 text-xs">
                    <SelectItem value="Cryptocurrency Scam">Cryptocurrency Scam</SelectItem>
                    <SelectItem value="Loan Fraud Investigation">Loan Fraud Investigation</SelectItem>
                    <SelectItem value="Bad Broker Triage">Bad Broker Triage</SelectItem>
                    <SelectItem value="Romance Scam Recovery">Romance Scam Recovery</SelectItem>
                    <SelectItem value="Bank Transfer Fraud">Bank Transfer / Wire Fraud</SelectItem>
                    <SelectItem value="Other">Other Category</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold text-slate-700">Client Full Name *</Label>
                <Input
                  required
                  placeholder="Full legal name"
                  value={newCaseForm.user_name}
                  onChange={(e) => setNewCaseForm({...newCaseForm, user_name: e.target.value})}
                  className="h-10 text-xs bg-slate-50 border-slate-200"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs font-semibold text-slate-700">Client Email *</Label>
                <Input
                  required
                  type="email"
                  placeholder="client@example.com"
                  value={newCaseForm.user_email}
                  onChange={(e) => setNewCaseForm({...newCaseForm, user_email: e.target.value})}
                  className="h-10 text-xs bg-slate-50 border-slate-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold text-slate-700">Phone</Label>
                <Input
                  placeholder="+1 (555) 000-0000"
                  value={newCaseForm.user_phone}
                  onChange={(e) => setNewCaseForm({...newCaseForm, user_phone: e.target.value})}
                  className="h-10 text-xs bg-slate-50 border-slate-200"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs font-semibold text-slate-700">Country</Label>
                <Input
                  placeholder="e.g. United Kingdom"
                  value={newCaseForm.user_country}
                  onChange={(e) => setNewCaseForm({...newCaseForm, user_country: e.target.value})}
                  className="h-10 text-xs bg-slate-50 border-slate-200"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs font-semibold text-slate-700">Reported Loss</Label>
                <Input
                  placeholder="e.g. $45,000"
                  value={newCaseForm.amount}
                  onChange={(e) => setNewCaseForm({...newCaseForm, amount: e.target.value})}
                  className="h-10 text-xs bg-slate-50 border-slate-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold text-slate-700">Risk Level</Label>
                <Select 
                  value={newCaseForm.risk_level} 
                  onValueChange={(val) => setNewCaseForm({...newCaseForm, risk_level: val})}
                >
                  <SelectTrigger className="h-10 text-xs bg-slate-50 border-slate-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-slate-200 text-xs">
                    <SelectItem value="Critical">Critical (Immediate urgency)</SelectItem>
                    <SelectItem value="High">High Priority</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs font-semibold text-slate-700">Initial Status</Label>
                <Select 
                  value={newCaseForm.status} 
                  onValueChange={(val) => setNewCaseForm({...newCaseForm, status: val})}
                >
                  <SelectTrigger className="h-10 text-xs bg-slate-50 border-slate-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-slate-200 text-xs">
                    <SelectItem value="Review Pending">Review Pending</SelectItem>
                    <SelectItem value="Under Investigation">Under Investigation</SelectItem>
                    <SelectItem value="Evidence Gathered">Evidence Gathered</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-slate-700">Incident Narrative / Case Notes</Label>
              <Textarea
                rows={4}
                placeholder="Describe what occurred, dates, suspect platform, communication methods, and funds involved..."
                value={newCaseForm.description}
                onChange={(e) => setNewCaseForm({...newCaseForm, description: e.target.value})}
                className="text-xs bg-slate-50 border-slate-200 resize-none"
              />
            </div>

            <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsNewCaseOpen(false)}
                className="text-xs border-slate-200"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                disabled={submittingCase}
                className="bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-xs rounded-lg px-5 h-10 shadow-sm"
              >
                {submittingCase ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    Recording Case...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Record Inquiry
                  </>
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* ========================================================================= */}
      {/* MODAL 3: REGISTER RESOLVED CASE STUDY                                     */}
      {/* ========================================================================= */}
      <Dialog open={isStoryDialogOpen} onOpenChange={setIsStoryDialogOpen}>
        <DialogContent className="max-w-xl bg-white border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <DialogHeader className="pb-4 border-b border-slate-100">
            <DialogTitle className="text-xl font-bold font-headline text-slate-900">
              Register Verified Case Resolution
            </DialogTitle>
            <DialogDescription className="text-xs text-slate-500">
              Publish an authentic, anonymized investigation outcome to the public website.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold text-slate-700">Case ID Reference *</Label>
                <Input 
                  placeholder="e.g. EPR-94102" 
                  value={storyForm.case_id} 
                  onChange={e => setStoryForm({...storyForm, case_id: e.target.value})}
                  className="h-10 text-xs bg-slate-50 border-slate-200 font-mono"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs font-semibold text-slate-700">Incident Division *</Label>
                <Input 
                  placeholder="e.g. Crypto Trading Fraud" 
                  value={storyForm.case_type} 
                  onChange={e => setStoryForm({...storyForm, case_type: e.target.value})}
                  className="h-10 text-xs bg-slate-50 border-slate-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold text-slate-700">Value Resolved / Restituted *</Label>
                <Input 
                  placeholder="e.g. $142,500 USDT" 
                  value={storyForm.amount} 
                  onChange={e => setStoryForm({...storyForm, amount: e.target.value})}
                  className="h-10 text-xs bg-slate-50 border-slate-200 font-semibold text-emerald-700"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs font-semibold text-slate-700">Visual Class</Label>
                <Select value={storyForm.icon_name} onValueChange={val => setStoryForm({...storyForm, icon_name: val})}>
                  <SelectTrigger className="h-10 text-xs bg-slate-50 border-slate-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-slate-200 text-xs">
                    <SelectItem value="TrendingUp">Market / Investment</SelectItem>
                    <SelectItem value="Wallet">Digital Asset / Crypto</SelectItem>
                    <SelectItem value="Landmark">Banking & Wire</SelectItem>
                    <SelectItem value="Briefcase">Commercial Fraud</SelectItem>
                    <SelectItem value="Search">Forensic Tracing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-slate-700">Technical Challenge *</Label>
              <Input 
                placeholder="e.g. Obfuscated multi-hop peeling chains across 3 mixers" 
                value={storyForm.challenge} 
                onChange={e => setStoryForm({...storyForm, challenge: e.target.value})}
                className="h-10 text-xs bg-slate-50 border-slate-200"
              />
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-slate-700">Investigative Focus</Label>
              <Input 
                placeholder="e.g. Destination cluster identification and exchange freeze order liaison" 
                value={storyForm.focus} 
                onChange={e => setStoryForm({...storyForm, focus: e.target.value})}
                className="h-10 text-xs bg-slate-50 border-slate-200"
              />
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-slate-700">Technical Outcome</Label>
              <Input 
                placeholder="e.g. Successful exchange interdiction resulting in full fund release" 
                value={storyForm.outcome} 
                onChange={e => setStoryForm({...storyForm, outcome: e.target.value})}
                className="h-10 text-xs bg-slate-50 border-slate-200"
              />
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-slate-700">Executive Summary Narrative</Label>
              <Textarea 
                placeholder="Short anonymized summary of the client engagement and final restitution..." 
                value={storyForm.narrative} 
                onChange={e => setStoryForm({...storyForm, narrative: e.target.value})}
                className="text-xs bg-slate-50 border-slate-200 min-h-[80px]"
              />
            </div>

            <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
              <Button variant="outline" onClick={() => setIsStoryDialogOpen(false)} className="text-xs border-slate-200">
                Cancel
              </Button>

              <Button onClick={saveStory} className="bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-xs rounded-lg px-5 h-10 shadow-sm">
                Publish Resolution
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
