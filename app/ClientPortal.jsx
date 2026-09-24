'use client';

import React, { useState } from 'react';
import {
Building2,
UserCheck,
Sparkles,
ShieldCheck,
ArrowRight,
TrendingUp,
Users,
CreditCard,
Briefcase,
CheckCircle2
} from 'lucide-react';

export default function ClientPortal() {
const [activePortal, setActivePortal] = useState('realtor');

return (
<div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
{/* Navigation Bar */}
<header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="bg-indigo-600 p-2 rounded-lg text-white">
<Sparkles className="w-5 h-5" />
</div>
<span className="font-bold text-xl tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
Culture on Cue
</span>
</div>
<div className="flex items-center gap-4">
<button className="text-sm text-slate-400 hover:text-white transition">Sign In</button>
<button className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition">
Get Started
</button>
</div>
</header>

{/* Hero Section */}
<main className="max-w-6xl mx-auto px-6 py-16">
<div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
<span className="inline-flex items-center gap-2 bg-indigo-950/80 border border-indigo-800/50 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full">
<ShieldCheck className="w-3.5 h-3.5" /> Next-Gen Real Estate Platform
</span>
<h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
Elevate Your Real Estate Practice with <span className="text-indigo-400">Culture on Cue</span>
</h1>
<p className="text-slate-400 text-lg">
Empowering individual Realtors and Brokerages with seamless workflows, real-time analytics, and client management tools.
</p>
</div>

{/* Portal Switcher Tabs */}
<div className="flex justify-center mb-10">
<div className="bg-slate-900 p-1.5 rounded-xl border border-slate-800 flex gap-2">
<button
onClick={() => setActivePortal('realtor')}
className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition ${
activePortal === 'realtor'
? 'bg-indigo-600 text-white shadow-lg'
: 'text-slate-400 hover:text-white'
}`}
>
<UserCheck className="w-4 h-4" /> Realtor Portal
</button>
<button
onClick={() => setActivePortal('brokerage')}
className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition ${
activePortal === 'brokerage'
? 'bg-indigo-600 text-white shadow-lg'
: 'text-slate-400 hover:text-white'
}`}
>
<Building2 className="w-4 h-4" /> Brokerage Portal
</button>
</div>
</div>

{/* Dynamic Portal Showcase */}
{activePortal === 'realtor' ? (
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
<div className="w-10 h-10 bg-indigo-900/50 rounded-lg flex items-center justify-center text-indigo-400">
<Users className="w-5 h-5" />
</div>
<h3 className="font-semibold text-lg text-white">Client Management</h3>
<p className="text-slate-400 text-sm">Organize buyer/seller pipelines with automated touchpoints and notes.</p>
</div>
<div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
<div className="w-10 h-10 bg-indigo-900/50 rounded-lg flex items-center justify-center text-indigo-400">
<TrendingUp className="w-5 h-5" />
</div>
<h3 className="font-semibold text-lg text-white">Performance Analytics</h3>
<p className="text-slate-400 text-sm">Track commission splits, target revenue, and closed transactions seamlessly.</p>
</div>
<div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
<div className="w-10 h-10 bg-indigo-900/50 rounded-lg flex items-center justify-center text-indigo-400">
<CreditCard className="w-5 h-5" />
</div>
<h3 className="font-semibold text-lg text-white">Instant Invoicing</h3>
<p className="text-slate-400 text-sm">Send Stripe-powered transaction invoices and collect fees quickly.</p>
</div>
</div>
) : (
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
<div className="w-10 h-10 bg-indigo-900/50 rounded-lg flex items-center justify-center text-indigo-400">
<Briefcase className="w-5 h-5" />
</div>
<h3 className="font-semibold text-lg text-white">Agent Roster Hub</h3>
<p className="text-slate-400 text-sm">Manage entire teams, onboard agents, and oversee deal flows company-wide.</p>
</div>
<div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
<div className="w-10 h-10 bg-indigo-900/50 rounded-lg flex items-center justify-center text-indigo-400">
<CheckCircle2 className="w-5 h-5" />
</div>
<h3 className="font-semibold text-lg text-white">Compliance & Review</h3>
<p className="text-slate-400 text-sm">Automated document review and broker signature workflows.</p>
</div>
<div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
<div className="w-10 h-10 bg-indigo-900/50 rounded-lg flex items-center justify-center text-indigo-400">
<Building2 className="w-5 h-5" />
</div>
<h3 className="font-semibold text-lg text-white">Multi-Office Reports</h3>
<p className="text-slate-400 text-sm">High-level financial overviews and market volume analysis across branches.</p>
</div>
</div>
)}

{/* Action Callout */}
<div className="mt-16 bg-gradient-to-r from-indigo-900/40 via-slate-900 to-slate-900 border border-indigo-800/40 p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="space-y-1 text-center sm:text-left">
<h3 className="text-xl font-bold text-white">Ready to streamline your business?</h3>
<p className="text-slate-400 text-sm">Connect Supabase & Stripe in minutes from your dashboard.</p>
</div>
<button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2 transition whitespace-nowrap">
Launch Portal <ArrowRight className="w-4 h-4" />
</button>
</div>
</main>
</div>
);
}
