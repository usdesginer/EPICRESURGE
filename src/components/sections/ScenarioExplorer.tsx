'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  TrendingUp, 
  Wallet, 
  HeartHandshake, 
  BarChart, 
  Key, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Search, 
  ShieldCheck, 
  Clock, 
  Scale, 
  FileCheck2,
  ChevronRight,
  Shield
} from 'lucide-react';
import { SectionReveal } from '@/components/ui/section-reveal';
import { Button } from '@/components/ui/button';

interface Scenario {
  id: string;
  name: string;
  shortLabel: string;
  icon: any;
  categoryBadge: string;
  feasibility: string;
  feasibilityColor: string;
  summary: string;
  howItWorks: string;
  scammerTactics: string[];
  ourActionPlan: {
    phase: string;
    title: string;
    action: string;
    deliverable: string;
  }[];
  expectedTimeline: string;
  keyAdvice: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "broker",
    name: "Broker Refuses to Release Withdrawal",
    shortLabel: "Broker Withdrawal",
    icon: TrendingUp,
    categoryBadge: "Forex & CFD Trading",
    feasibility: "High Traceability",
    feasibilityColor: "text-[#10B981] border-[#10B981]/30 bg-[#10B981]/10",
    summary: "You deposited money to trade forex, gold, or crypto. Your account shows high profits, but whenever you try to withdraw, your request is rejected or frozen.",
    howItWorks: "Most fake broker platforms are closed simulations: the trading charts and profit numbers you see are completely fabricated. When you attempt to withdraw, the broker invents fictitious fees—such as a 'liquidity tax', 'anti-money laundering clearance fee', or 'account upgrade deposit'. Paying these fees only leads to more demands.",
    scammerTactics: [
      "Claiming you must pay a 10%–20% 'capital gains tax' before withdrawal",
      "Suddenly freezing the account for 'suspicious activity' or 'margin calls'",
      "Account manager disappearing or becoming aggressive when you ask for your money back",
      "Demanding access to your computer via AnyDesk or TeamViewer"
    ],
    ourActionPlan: [
      {
        phase: "Phase 01",
        title: "Platform & Wire Routing Audit",
        action: "We unmask the offshore hosting infrastructure, corporate proxy shell, and identify the receiving payment gateways or merchant crypto deposit addresses.",
        deliverable: "Domain Infrastructure & Entity Dossier"
      },
      {
        phase: "Phase 02",
        title: "Fiat & Exchange Ledger Tracing",
        action: "We trace wire transactions through banking intermediary correspondent nodes and follow crypto deposits directly to centralized exchange accounts.",
        deliverable: "On-Chain & Wire Fund Movement Map"
      },
      {
        phase: "Phase 03",
        title: "Interdiction & Police Subpoena Package",
        action: "We deliver court-ready forensic reports to exchange legal compliance officers to freeze the perpetrator's accounts and assist local cybercrime authorities.",
        deliverable: "Formal Legal Freeze Request Package"
      }
    ],
    expectedTimeline: "Initial trace completed in 24–48 hours; exchange compliance freeze petitions submitted within 5 business days.",
    keyAdvice: "Never pay a 'withdrawal fee' or 'release tax'. Legitimate brokers deduct fees from existing balances—they never require fresh deposits."
  },
  {
    id: "crypto-drainer",
    name: "Stolen Crypto & Drained Wallets",
    shortLabel: "Crypto Theft & Drainers",
    icon: Wallet,
    categoryBadge: "Blockchain Forensics",
    feasibility: "Public Ledger Audit",
    feasibilityColor: "text-[#38BDF8] border-[#38BDF8]/30 bg-[#38BDF8]/10",
    summary: "Your tokens or NFTs vanished after connecting your wallet to a website, signing a malicious permit transaction, or downloading infected software.",
    howItWorks: "Malicious smart contracts (sweepers and drainers) exploit ERC-20 'Permit' or 'SetApprovalForAll' functions. Once signed, the script automatically sweeps all assets from your address into a laundering network, hopping through DEXs and mixers before attempting to cash out at KYC-verified exchanges.",
    scammerTactics: [
      "Fake airdrop claims requiring wallet signatures",
      "Counterfeit Uniswap, OpenSea, or PancakeSwap phishing clones",
      "Malicious Telegram / Discord bots offering 'technical customer support'",
      "Quick automated splitting of funds across dozens of intermediate addresses"
    ],
    ourActionPlan: [
      {
        phase: "Phase 01",
        title: "Smart Contract Exploit Decompilation",
        action: "We analyze the transaction payload to isolate the malicious approval transaction, revoke permissions, and secure any remaining connected assets.",
        deliverable: "Smart Contract Audit & Revocation Protocol"
      },
      {
        phase: "Phase 02",
        title: "Multi-Chain Cluster Tracing",
        action: "We track the stolen tokens across bridges (e.g., Ethereum to Avalanche or Solana) and mixers using enterprise forensic clustering tools.",
        deliverable: "Cross-Chain Visual Transaction Graph"
      },
      {
        phase: "Phase 03",
        title: "Exchange Node Identification & Blacklisting",
        action: "We identify the centralized exchange (Binance, OKX, Bybit, Kraken, Coinbase) where the thief attempts to liquidate the crypto for fiat currency, issuing emergency freeze alerts.",
        deliverable: "Law Enforcement & Exchange Alert Brief"
      }
    ],
    expectedTimeline: "Automated wallet triage within 4 hours; full multi-chain forensic report in 48 hours.",
    keyAdvice: "Immediately revoke all smart contract token approvals on tools like Revoke.cash or move any remaining assets to a brand new hardware wallet."
  },
  {
    id: "romance",
    name: "Online Contact Urged Investment (Pig Butchering)",
    shortLabel: "Romance / Contact Scam",
    icon: HeartHandshake,
    categoryBadge: "Sha Zhu Pan / Imposter Fraud",
    feasibility: "Multi-Hop Audit",
    feasibilityColor: "text-[#38BDF8] border-[#38BDF8]/30 bg-[#38BDF8]/10",
    summary: "Someone you met on a dating app, WhatsApp, or LinkedIn built a friendly or romantic relationship with you over weeks, then encouraged you to invest in a 'special' trading portal.",
    howItWorks: "Known internationally as 'Pig Butchering' (Sha Zhu Pan), these operations are run by industrial syndicates. They allow small initial withdrawals to build your confidence, then encourage life-savings deposits. Once you attempt a large withdrawal, customer service locks the account and demands exorbitant taxes.",
    scammerTactics: [
      "Friendly stranger messaging 'by mistake' on WhatsApp or Instagram",
      "Claims of having an 'insider uncle' or proprietary algorithm with guaranteed returns",
      "Fake customer service insisting that 'Anti-Money Laundering verification' requires a 25% deposit",
      "Guilt-tripping you or offering to pay 'half of your fee' to convince you to send more money"
    ],
    ourActionPlan: [
      {
        phase: "Phase 01",
        title: "Communication & Transaction Archiving",
        action: "We extract phone numbers, chat logs, and receiving crypto addresses to identify which organized crime syndicate is running the infrastructure.",
        deliverable: "Digital Threat Profile & Entity Classification"
      },
      {
        phase: "Phase 02",
        title: "Syndicate Consolidation Hub Tracing",
        action: "Syndicates pool thousands of victim deposits into central deposit hubs. We trace the movement of your funds into these primary consolidation pools.",
        deliverable: "Syndicate Hub Flow Analysis"
      },
      {
        phase: "Phase 03",
        title: "International Police & Interpol Coordination",
        action: "We prepare standardized evidentiary packages for federal task forces (FBI IC3, Eurojust, local financial intelligence units) and exchange risk teams.",
        deliverable: "Multi-Jurisdictional Evidentiary Dossier"
      }
    ],
    expectedTimeline: "Case intake and risk profile built in 24 hours; coordination packages issued within 5 to 7 days.",
    keyAdvice: "You are not alone and you have nothing to be ashamed of. These syndicates use professional psychological manipulation. Cease all contact immediately."
  },
  {
    id: "ponzi",
    name: "High-Yield Investment Program (HYIP) / Ponzi",
    shortLabel: "High-Yield Ponzi Scheme",
    icon: BarChart,
    categoryBadge: "Investment Fraud",
    feasibility: "Pool Mapping",
    feasibilityColor: "text-[#F59E0B] border-[#F59E0B]/30 bg-[#F59E0B]/10",
    summary: "You invested in a platform advertising guaranteed 1% to 5% daily returns through AI trading, crypto mining, or foreign real estate. The platform suddenly went offline.",
    howItWorks: "Classic Ponzi schemes use funds from new investors to pay small 'returns' to earlier investors. Once recruitment slows or the operators decide to exit, they execute an 'exit scam'—shuttering the website, disabling Telegram groups, and transferring the pooled treasury to private wallets.",
    scammerTactics: [
      "Promises of zero-risk, high daily guaranteed yields",
      "Multi-level referral bonuses encouraging you to invite friends and family",
      "Sudden maintenance announcements followed by disabled withdrawals",
      "Announcing a 'system migration' that requires you to deposit more to migrate"
    ],
    ourActionPlan: [
      {
        phase: "Phase 01",
        title: "Treasury Pool & Smart Contract Mapping",
        action: "We map the entire deposit inflow structure to calculate total victim pool losses and locate the primary mastermind treasury addresses.",
        deliverable: "Treasury Inflow / Outflow Audit"
      },
      {
        phase: "Phase 02",
        title: "Exit-Scam Liquidation Tracking",
        action: "We track the exit transfers as operators attempt to liquidate through over-the-counter (OTC) brokers, nested exchanges, or privacy protocols.",
        deliverable: "Liquidation Node Interdiction Map"
      },
      {
        phase: "Phase 03",
        title: "Class Action & Regulatory Briefing",
        action: "We consolidate findings into an actionable report suitable for joint legal action, class claims, and submissions to securities regulators (SEC, CFTC, FCA).",
        deliverable: "Joint Regulatory Evidentiary Report"
      }
    ],
    expectedTimeline: "Treasury pool mapping in 48 hours; formal forensic dossier ready in 7 business days.",
    keyAdvice: "Do not wait for the platform to 'finish maintenance' if withdrawals have been stopped for more than 48 hours. Early tracing increases recovery likelihood."
  },
  {
    id: "locked-wallet",
    name: "Lost Wallet Password or Partial Seed Phrase",
    shortLabel: "Locked Crypto Wallet",
    icon: Key,
    categoryBadge: "Cryptographic Recovery",
    feasibility: "Air-Gapped Lab",
    feasibilityColor: "text-[#10B981] border-[#10B981]/30 bg-[#10B981]/10",
    summary: "Your funds are not stolen, but you cannot access them due to a forgotten password, corrupted wallet.dat file, or incomplete BIP39 backup words.",
    howItWorks: "Non-custodial cryptocurrency wallets rely on mathematical key derivation. If you have partial seed words, forgotten characters in your passphrase, or a damaged hardware device (Trezor, Ledger), specialized computational recovery algorithms can reconstruct the missing cryptographic components.",
    scammerTactics: [
      "Warning: Never share your partial seed phrase with unverified websites or online forms",
      "Avoid online 'seed checkers' that transmit your private words over the internet",
      "Be wary of fake Ledger / Trezor firmware update emails asking for 24 words"
    ],
    ourActionPlan: [
      {
        phase: "Phase 01",
        title: "Air-Gapped Environment Preparation",
        action: "All recovery computations are performed inside our physically isolated, air-gapped forensic lab with no connection to the internet.",
        deliverable: "Zero-Knowledge Custody Protocol"
      },
      {
        phase: "Phase 02",
        title: "Cryptographic Permutation Analysis",
        action: "Using high-performance GPU clusters and custom dictionary rules based on your recall, we compute billions of cryptographic permutations to identify the missing seed words.",
        deliverable: "Algorithmic Key Reconstruction"
      },
      {
        phase: "Phase 03",
        title: "Secure Cold Storage Handover",
        action: "Once the master private key or keystore is unlocked, assets are transferred to a brand new, secure cold storage address owned exclusively by you.",
        deliverable: "Restored Access Verification"
      }
    ],
    expectedTimeline: "Dictionary feasibility audit completed within 24 hours; computational search runs from 1 to 14 days depending on entropy.",
    keyAdvice: "Never enter your seed phrase into any online tool or AI prompt. Real forensic recovery is strictly performed on air-gapped hardware."
  },
  {
    id: "task-job",
    name: "Remote Employment & Task Recharging Scam",
    shortLabel: "Task & Job Scam",
    icon: Briefcase,
    categoryBadge: "Recruitment Fraud",
    feasibility: "Direct Payment Trace",
    feasibilityColor: "text-[#38BDF8] border-[#38BDF8]/30 bg-[#38BDF8]/10",
    summary: "You were offered a flexible remote job clicking 'optimize' buttons for apps or products. To complete 'orders', you were asked to deposit cryptocurrency into an online portal.",
    howItWorks: "Scammers pose as recruitment agents from established marketing agencies. Victims are paid a small real commission on day one to build trust. On subsequent days, they are hit with 'combo tasks' or 'negative balances' that require depositing escalating amounts of money to unlock earnings.",
    scammerTactics: [
      "Unsolicited WhatsApp or SMS job offers offering $200–$500 per day for simple clicks",
      "Artificial 'workbench' websites with simulated task completion meters",
      "WhatsApp/Telegram 'group chat' filled with fake coworkers claiming they made huge profits",
      "Demands for immediate payments in USDT to 'reset the task system'"
    ],
    ourActionPlan: [
      {
        phase: "Phase 01",
        title: "Merchant Gateway & Address Audit",
        action: "We audit the specific USDT/crypto receiving addresses provided by the 'customer service manager' to determine payment processor or exchange destinations.",
        deliverable: "Payment Gateway Trace Dossier"
      },
      {
        phase: "Phase 02",
        title: "Counterfeit Domain & Host Takedown",
        action: "We issue formal abuse notices to registrars and hosting providers hosting the fraudulent portal to preserve server logs and prevent further victim targeting.",
        deliverable: "Hosting Provider Forensic Log Extraction"
      },
      {
        phase: "Phase 03",
        title: "Bank & Exchange Restitution Brief",
        action: "We compile the full sequence of deposits, chat pressure, and transaction receipts into a certified complaint package for your bank and exchange compliance.",
        deliverable: "Bank & Exchange Fraud Report Package"
      }
    ],
    expectedTimeline: "Evidence review and gateway trace completed in 24 hours.",
    keyAdvice: "Real employers never require employees to deposit money to work or receive earned salary. Stop sending funds immediately."
  }
];

export function ScenarioExplorer() {
  const [activeScenario, setActiveScenario] = useState<Scenario>(SCENARIOS[0]);

  return (
    <section id="scenarios" className="py-24 bg-[#080F1D] relative border-b border-[#1E2E48]">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header: Desktop 36-44px */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111D31] border border-[#1E2E48] text-[#38BDF8] text-xs font-semibold mb-4">
              <Search className="w-4 h-4" />
              <span>Interactive Problem Solver</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-headline font-bold mb-4 text-[#F8FAFC]">
              Choose Your Situation to See How We Help
            </h2>
            
            <p className="text-base md:text-[17px] text-[#94A3B8] leading-relaxed max-w-2xl mx-auto font-normal">
              Select what happened to you. We explain the exact scam mechanics, how our specialists trace your funds, and what immediate action you should take.
            </p>
          </SectionReveal>
        </div>

        {/* Scenario Selection Tabs Bar */}
        <div className="max-w-6xl mx-auto mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {SCENARIOS.map((sc) => {
              const Icon = sc.icon;
              const isSelected = activeScenario.id === sc.id;
              return (
                <button
                  key={sc.id}
                  type="button"
                  onClick={() => setActiveScenario(sc)}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between group ${
                    isSelected 
                      ? 'border-[#38BDF8] bg-[#2563EB]/15 text-[#F8FAFC] shadow-sm' 
                      : 'border-[#1E2E48] bg-[#111D31] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-slate-700'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2.5 transition-colors ${
                    isSelected ? 'bg-[#2563EB] text-white' : 'bg-[#0E1726] text-[#94A3B8] group-hover:text-[#38BDF8]'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-xs font-semibold leading-snug line-clamp-2 ${isSelected ? 'text-[#F8FAFC]' : 'text-[#94A3B8]'}`}>
                    {sc.shortLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Scenario Detailed Interactive Card */}
        <div className="max-w-6xl mx-auto">
          <SectionReveal key={activeScenario.id} className="w-full">
            <div className="rounded-2xl bg-[#111D31] border border-[#1E2E48] shadow-lg shadow-black/25 overflow-hidden p-6 md:p-10">
              
              {/* Header inside the card */}
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-[#1E2E48] gap-4">
                <div className="flex items-start md:items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#0E1726] border border-[#1E2E48] flex items-center justify-center text-[#38BDF8] shrink-0">
                    <activeScenario.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-[#0E1726] border border-[#1E2E48] text-[#38BDF8]">
                        {activeScenario.categoryBadge}
                      </span>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-md border flex items-center gap-1 ${activeScenario.feasibilityColor}`}>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {activeScenario.feasibility}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-headline font-bold text-[#F8FAFC]">
                      {activeScenario.name}
                    </h3>
                  </div>
                </div>

                <Link href="#forensic-intake" className="shrink-0">
                  <Button className="h-11 px-6 bg-[#2563EB] hover:bg-blue-600 text-[#F8FAFC] font-semibold text-xs rounded-xl shadow-md transition-all flex items-center gap-2">
                    <span>Audit This Case for Free</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>

              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-12 gap-8 items-start mb-8">
                
                {/* Left Column (5 cols): What Happened & Red Flags */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] mb-2">
                      Understanding the Fraud
                    </h4>
                    <p className="text-sm md:text-[15px] text-[#F8FAFC]/90 leading-relaxed font-normal">
                      {activeScenario.howItWorks}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[#0E1726] border border-[#162338]">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC] mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-[#F59E0B]" />
                      <span>Common Deceptions in This Scam</span>
                    </h5>
                    <ul className="space-y-2.5">
                      {activeScenario.scammerTactics.map((tactic, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#94A3B8]">
                          <ChevronRight className="w-3.5 h-3.5 text-[#F59E0B] shrink-0 mt-0.5" />
                          <span>{tactic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Immediate Safety Advice */}
                  <div className="p-4 rounded-xl bg-[#0E1726] border border-[#38BDF8]/25 text-xs md:text-sm text-[#94A3B8] leading-relaxed">
                    <strong className="text-[#38BDF8] block mb-1">Immediate Recommendation:</strong>
                    {activeScenario.keyAdvice}
                  </div>
                </div>

                {/* Right Column (7 cols): Our 3-Phase Action Plan & Deliverables */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                      Our 3-Phase Investigation & Action Plan
                    </h4>
                    <span className="text-xs text-[#94A3B8] flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>{activeScenario.expectedTimeline}</span>
                    </span>
                  </div>

                  <div className="space-y-3">
                    {activeScenario.ourActionPlan.map((step, sIdx) => (
                      <div 
                        key={sIdx}
                        className="p-4 rounded-xl bg-[#0E1726] border border-[#162338] hover:border-[#1E2E48] transition-all space-y-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#2563EB]/15 text-[#38BDF8]">
                            {step.phase}
                          </span>
                          <span className="text-[11px] text-[#10B981] font-medium flex items-center gap-1">
                            <FileCheck2 className="w-3.5 h-3.5" />
                            {step.deliverable}
                          </span>
                        </div>
                        <h5 className="text-sm md:text-[15px] font-bold text-[#F8FAFC]">
                          {step.title}
                        </h5>
                        <p className="text-xs md:text-sm text-[#94A3B8] leading-relaxed font-normal">
                          {step.action}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Trust Footer Bar inside Card */}
                  <div className="p-4 rounded-xl bg-[#0E1726] border border-[#162338] flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                    <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                      <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                      <span>Delaware corporate oversight & zero upfront review fee</span>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <Link href="#forensic-intake" className="w-full sm:w-auto">
                        <Button className="w-full sm:w-auto h-10 px-5 bg-[#2563EB] hover:bg-blue-600 text-[#F8FAFC] font-semibold text-xs rounded-xl shadow-md">
                          Request Case Review
                        </Button>
                      </Link>
                      <a href="mailto:investigator@epicresurge.com" className="w-full sm:w-auto">
                        <Button variant="outline" className="w-full sm:w-auto h-10 border-[#1E2E48] bg-[#111D31] hover:bg-[#162540] text-[#F8FAFC] text-xs rounded-xl">
                          Ask Investigator
                        </Button>
                      </a>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </SectionReveal>
        </div>

      </div>
    </section>
  );
}

