"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter-subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
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
    <div className="min-h-screen flex flex-col font-sans bg-[#fbfbf9] text-[#16082a] selection:bg-[#e81b87] selection:text-white">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center py-24 sm:py-36 px-6 text-center">
        <div className="max-w-3xl mx-auto w-full">
          <h1 className="text-3xl sm:text-4xl font-serif font-normal text-[#150824] leading-[1.2] tracking-tight mb-4">
            Subscribe to Path&apos;s Newsletter
          </h1>

          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xl mx-auto mb-8">
            Keep up with the latest news, launches, and events from the Path School community.
          </p>

          {status === 'success' ? (
            <div className="inline-flex flex-col items-center gap-3 bg-white border border-gray-200 rounded-2xl p-8 shadow-xs max-w-md mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              <h3 className="text-lg font-serif font-semibold text-[#150824]">
                You&apos;re subscribed!
              </h3>
              <p className="text-xs text-gray-600">
                We&apos;ve added <span className="font-semibold text-[#150824]">{email}</span> to our weekly dispatch list.
              </p>
              <button
                onClick={() => {
                  setStatus('idle');
                  setEmail('');
                  setShowInput(false);
                }}
                className="mt-2 text-xs font-semibold text-[#6c3696] hover:underline cursor-pointer"
              >
                Subscribe another email
              </button>
            </div>
          ) : showInput ? (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto mb-8">
              <div className="flex flex-col sm:flex-row items-center gap-2.5">
                <input
                  type="email"
                  required
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-6 py-3.5 rounded-full border border-gray-300 text-base sm:text-sm focus:outline-none focus:border-black bg-white shadow-2xs text-[#16082a]"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black hover:bg-neutral-800 text-white px-7 py-3.5 rounded-full font-serif italic text-base transition-all shadow-md cursor-pointer shrink-0 disabled:opacity-50"
                >
                  <span>{status === 'loading' ? 'Subscribing...' : 'Subscribe'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              {status === 'error' && (
                <p className="text-red-500 text-xs mt-3">Something went wrong. Please try again.</p>
              )}
            </form>
          ) : (
            <div className="mb-8">
              <button
                onClick={() => setShowInput(true)}
                className="inline-block bg-black hover:bg-neutral-900 text-white px-10 sm:px-12 py-4 rounded-full font-serif italic text-xl sm:text-2xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                Sign in to subscribe!
              </button>
            </div>
          )}

          <div>
            <Link
              href="/events"
              className="text-sm text-gray-800 hover:text-black underline underline-offset-4 decoration-gray-400 hover:decoration-black transition-colors"
            >
              View Events
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
