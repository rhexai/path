"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export default function TalentManagementPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/events-subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, eventName: 'Talent Management - Early Access' }),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f8f7f4] text-[#16082a]">
      <Header />

      <main className="flex-grow flex items-center justify-center py-20 md:py-28 px-6">
        <div className="max-w-xl w-full text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#f0eaf8] text-[#6c3696] border border-[#ded1ee] mb-6">
            <span>Coming Soon</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#16082a] leading-tight mb-4 tracking-tight">
            Talent Management
          </h1>

          {/* Subtext */}
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg mx-auto mb-10">
            A dedicated talent representation, fellowship matchmaking, and executive advisory initiative connecting standout Path School builders and alumni with leading tech teams.
          </p>

          {/* Email Capture or Success State */}
          <div className="max-w-md mx-auto mb-8">
            {status === 'success' ? (
              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-xs">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                <h3 className="font-bold text-[#16082a] text-base mb-1">You&apos;re on the early access list</h3>
                <p className="text-gray-600 text-sm">We&apos;ll notify {email} as soon as applications open.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 text-base sm:text-sm focus:outline-none focus:border-[#6c3696] bg-white shadow-xs text-[#16082a]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-[#16140f] hover:bg-[#6c3696] text-white px-7 py-3 rounded-full font-serif italic text-sm transition-all shadow-sm hover:shadow-md cursor-pointer shrink-0 disabled:opacity-50"
                >
                  {status === 'loading' ? 'Saving...' : 'Notify Me'}
                </button>
              </form>
            )}
          </div>

          {/* Back link */}

        </div>
      </main>

      <Footer />
    </div>
  );
}
