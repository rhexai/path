"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Sparkles, 
  HeartHandshake, 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight,
} from 'lucide-react';

export default function ScholarshipsPage() {
  const scholarshipTracks = [
    {
      id: 'need-based',
      title: 'Need-Based Opportunity Grant',
      badge: 'Up to 50% Tuition Aid',
      icon: HeartHandshake,
      description: 'Created to ensure that family financial constraints never prevent an inquisitive, ambitious student from learning AI, coding, and entrepreneurship.',
      eligibility: 'Open to motivated students from lower-income households or underrepresented communities.',
      benefits: ['Up to 50% batch tuition coverage', 'Compute & software tool allowances', '1-on-1 mentor guidance']
    },
    {
      id: 'regional-chapter',
      title: 'Regional Chapter & Community Bursaries',
      badge: 'Local Chapter Support',
      icon: Globe,
      description: 'Funded by alumni, venture philanthropists, and partner tech firms to empower regional talent across Accra, Lagos, London, Nairobi, and beyond.',
      eligibility: 'Students affiliated with or living near active Path School local chapters or community hubs.',
      benefits: ['Partial term funding (up to 50%)', 'Access to in-person chapter workshops', 'Peer study circle matching']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#fbfbf9] text-[#16082a] selection:bg-[#e81b87] selection:text-white">
      <Header />

      <main className="flex-grow">
        
        {/* ========================================================
            HERO SECTION
           ======================================================== */}
        <section className="relative py-16 sm:py-24 px-6 sm:px-8 border-b border-[#ede4f5]/80 overflow-hidden bg-gradient-to-b from-[#f7f1fb]/50 via-white to-[#fbfbf9]">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#e81b87]/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#6c3696]/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-serif font-normal text-[#150824] leading-[1.15] tracking-tight mb-6">
              Scholarships &amp; Financial Aid
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
              We believe every ambitious young mind deserves the chance to build the future. 
              Path School awards grants of up to <strong className="text-[#150824] font-semibold">50% tuition coverage</strong> to ensure talent and curiosity, never background, define a young person&apos;s trajectory.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#inquire"
                className="inline-flex items-center gap-2 bg-[#150824] hover:bg-[#2b104c] text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Apply for Financial Support</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Key Pillars Row (Up to 50% and Need-Blind) */}
            <div className="mt-14 pt-10 border-t border-gray-200/70 max-w-md mx-auto grid grid-cols-2 gap-8 text-center">
              <div>
                <p className="text-xl sm:text-2xl font-sans font-bold text-[#6c3696]">Up to 50%</p>
                <p className="text-xs text-gray-600 mt-1 font-sans">Need &amp; merit tuition coverage</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-sans font-bold text-[#150824]">Need-Blind</p>
                <p className="text-xs text-gray-600 mt-1 font-sans">Admissions review policy</p>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================
            SCHOLARSHIP TRACKS / CATEGORIES (2 Programs)
           ======================================================== */}
        <section id="tracks" className="py-16 sm:py-24 px-6 sm:px-8 max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#150824] tracking-tight mb-3">
              Scholarship Programs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scholarshipTracks.map((sch) => {
              const IconComponent = sch.icon;
              return (
                <div 
                  key={sch.id}
                  className="bg-white rounded-2xl border border-gray-200/80 p-8 sm:p-10 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#6c3696]/10 flex items-center justify-center text-[#6c3696]">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 bg-gray-100 text-gray-800 rounded-full">
                        {sch.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-serif font-normal text-[#150824] mb-3">
                      {sch.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {sch.description}
                    </p>

                    <div className="mb-6 p-4 rounded-xl bg-[#f8f7f4] border border-gray-100">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Who should apply</h4>
                      <p className="text-xs text-gray-700 leading-relaxed">{sch.eligibility}</p>
                    </div>

                    <div className="space-y-2 mb-8">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">Award Includes</h4>
                      {sch.benefits.map((b, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#inquire"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-3 px-4 rounded-xl border border-[#150824] text-[#150824] hover:bg-[#150824] hover:text-white transition-all text-xs font-semibold uppercase tracking-wider cursor-pointer"
                  >
                    <span>Inquire for this grant</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </section>


      </main>

      <Footer />
    </div>
  );
}
