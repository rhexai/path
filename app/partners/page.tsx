"use client";

import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  CheckCircle2,
  ArrowRight,
  Mail,
} from 'lucide-react';

const currentPartners = [
  { name: 'Flowboard Team Inc.', category: 'Software & AI', logo: '/partner-flowboard.jpg' },
  { name: 'BMG Africa', category: 'Marketing Technology', logo: '/partner-bmg.png' },
  { name: 'Dynaspace International', category: 'Co-Workspace & Events', logo: '/partner-dynaspace.jpg' },
  { name: 'Credit Power Ltd.', category: 'Finance', logo: '/partner-creditpower.jpg' },
];

const partnerBenefits = [
  'Co-branding on all chapter materials and student certifications',
  "Access to Path School's global student and alumni network",
  'Priority speaking slots at demo days and community events',
  'Quarterly partner impact reports with student outcome data',
  'Early access to Path School talent pipeline for internships and roles',
  'Custom curriculum co-design opportunities',
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#fbfbf9] text-[#16082a] selection:bg-[#e81b87] selection:text-white">
      <Header />

      <main className="flex-grow">

        {/* Hero */}
        <section className="relative py-16 sm:py-24 px-6 sm:px-8 border-b border-[#ede4f5]/80 overflow-hidden bg-gradient-to-b from-[#f7f1fb]/50 via-white to-[#fbfbf9]">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#e81b87]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#6c3696]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#150824] leading-[1.15] tracking-tight mb-6">
              Building the Future, Together
            </h1>

            <p className="text-sm text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10 italic">
              Path School partners with schools, corporations, NGOs, and community organizations to expand access to world-class tech education for the next generation of builders.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#become-partner"
                className="inline-flex items-center gap-2 bg-[#150824] hover:bg-[#2b104c] text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg"
              >
                <span>Become a Partner</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="py-16 sm:py-20 px-6 sm:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-12">
              <h2 className="text-3xl font-serif font-normal text-[#150824] tracking-tight mb-3">Our Partners</h2>
              <p className="text-sm text-gray-600">A growing network of organizations supporting Path School students worldwide.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {currentPartners.map((p, i) => (
                <div key={i} className="flex flex-col items-center gap-4 bg-white border border-gray-200/80 rounded-2xl p-8">
                  <div className="relative w-36 h-24">
                    <Image
                      src={p.logo}
                      alt={p.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-[#150824] leading-tight">{p.name}</p>
                    <p className="text-xs text-gray-400 mt-1">{p.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Benefits */}
        <section className="py-16 sm:py-24 px-6 sm:px-8 max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-normal text-[#150824] tracking-tight mb-3">Why Partner With Us</h2>
            <p className="text-sm text-gray-600">Partnership with Path School is a high-leverage investment in the next generation of innovators.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {partnerBenefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Become a Partner CTA */}
        <section id="become-partner" className="py-20 px-6 sm:px-8 max-w-3xl mx-auto scroll-mt-10">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#150824] tracking-tight mb-3">
              Partner With Us
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xl mx-auto mb-8 italic">
              Whether you&apos;re a school, company, or community organization — we&apos;d love to explore how a partnership can create lasting impact for young builders in your community.
            </p>

            <div className="flex items-center justify-center mb-6">
              <a
                href="mailto:partners@pathschool.org?subject=Path%20School%20Partnership%20Inquiry"
                className="inline-flex items-center gap-2.5 text-[#150824] hover:underline text-sm font-semibold tracking-wide transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>partners@pathschool.org</span>
              </a>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
