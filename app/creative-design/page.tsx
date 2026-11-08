"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Check, ChevronDown } from 'lucide-react';

export default function CreativeDesignPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };


  const yearOneItems = [
    "Composition, color, typography, hierarchy, and space",
    "Training the eye: what makes great design great",
    "Digital design tools, taught step by step",
    "Visual storytelling and creative expression",
    "Giving and receiving critique",
    "First brand and poster projects"
  ];

  const yearTwoItems = [
    "Complete brand identity systems: logos, visual language, and voice",
    "UX and product design: research, wireframes, prototypes, and testing",
    "AI-assisted creativity that speeds up the process without replacing taste",
    "Design for live projects: startups, nonprofits, and partners",
    "Presentation and storytelling for design work",
    "Capstone: A professional portfolio and public showcase of the student’s best work"
  ];

  const programStructure = [
    { label: "Format", value: "Hybrid. Interactive online sessions plus a hands-on studio lab." },
    { label: "Weekly rhythm", value: "2 live sessions, hands-on lab time, and one-on-one mentor check-ins." },
    { label: "Batch size", value: "Small batches of 12–15 students, so every student gets individual feedback on their work." },
    { label: "Mentors", value: "Working designers, creative directors, and design-minded founders who’ve shipped real work." },
    { label: "Projects over exams", value: "Students are evaluated on what they create, not what they memorize." },
    { label: "Admissions", value: "Open in select batches. Every batch runs for a minimum of 2 years." }
  ];

  const outcomes = [
    "A standout portfolio of real-world work built over two years",
    "A repeatable creative process that works even when inspiration runs dry",
    "A distinctive creative voice that’s recognizably their own",
    "The ability to collaborate with developers, marketers, and founders",
    "The confidence to present work and take feedback gracefully"
  ];

  const parentPillars = [
    {
      title: "A creative outlet with real direction",
      desc: "Passion becomes professional skill."
    },
    {
      title: "A portfolio that opens doors",
      desc: "It’s useful for school applications, scholarships, and future careers."
    },
    {
      title: "Constructive critique, with care",
      desc: "Mentors teach feedback as a growth tool, not a judgment."
    },
    {
      title: "Real work, safely",
      desc: "Live projects are carefully curated and supervised under strict educational safeguards."
    }
  ];

  const faqs = [
    {
      question: "Does my child need to be good at drawing?",
      answer: "No. Design is about thinking, taste, and problem-solving. We guide students from zero to confident creators."
    },
    {
      question: "What software will they use?",
      answer: "Students master industry-standard tools including Figma, Adobe Creative Suite (Illustrator, Photoshop), and modern AI design assistants. Everything is taught step by step from the start."
    },
    {
      question: "Will the work be real or just practice?",
      answer: "Both. Foundational exercises build skill, and live projects build the portfolio."
    },
    {
      question: "Why two years?",
      answer: "Taste and craft develop with time and repetition. Two years lets students grow from first sketches to professional-level work."
    },
    {
      question: "How are students evaluated?",
      answer: "Through projects and portfolios. There are no exams."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f8f7f4] text-[#16082a]">
      <Header />

      <main className="flex-grow py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          
          {/* Hero Section */}
          <section className="mb-12 md:mb-16 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#16082a] leading-tight tracking-tight">
              Creative Design
            </h1>
          </section>

          {/* Design is how ideas become desirable */}
          <section className="mb-16 md:mb-20 pt-10 border-t border-gray-200/70">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#16082a] mb-6">
              Design is how ideas become desirable
            </h2>
            <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                Think about the products you love, the brands you trust, the apps you can’t put down. Behind each one is a designer who made thousands of decisions about how it looks, feels, and works, and who understood people well enough to get them right.
              </p>
              <p>
                In a crowded world, design is a leader’s advantage. Path School’s Creative Design program is a two-year studio experience that develops craft, taste, and strategic thinking together, so our students create work that doesn’t just look good. It works.
              </p>
            </div>
          </section>


          {/* The two-year journey */}
          <section className="mb-16 md:mb-20 pt-10 border-t border-gray-200/70">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#16082a] mb-8">
              The two-year journey
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Year 1 */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#16082a] mb-4 pb-2 border-b border-gray-200">
                  Year 1: Eye, craft, and foundations
                </h3>
                <ul className="space-y-3">
                  {yearOneItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <div className="mt-1 bg-emerald-100/70 p-1 rounded-full text-emerald-700 shrink-0">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Year 2 */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#16082a] mb-4 pb-2 border-b border-gray-200">
                  Year 2: Systems, products, and real projects
                </h3>
                <ul className="space-y-3">
                  {yearTwoItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <div className="mt-1 bg-emerald-100/70 p-1 rounded-full text-emerald-700 shrink-0">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* How the program works */}
          <section className="mb-16 md:mb-20 pt-10 border-t border-gray-200/70">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#16082a] mb-6">
              How the program works
            </h2>
            <div className="space-y-4">
              {programStructure.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-base">
                  <span className="font-bold text-[#16082a] sm:w-44 shrink-0">
                    {item.label}:
                  </span>
                  <span className="text-gray-600 leading-relaxed">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* What your child leaves with */}
          <section className="mb-16 md:mb-20 pt-10 border-t border-gray-200/70">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#16082a] mb-6">
              What your child leaves with
            </h2>
            <ul className="space-y-3.5">
              {outcomes.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-base text-gray-700">
                  <div className="mt-1 bg-emerald-100/70 p-1 rounded-full text-emerald-700 shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* The designer-founder advantage */}
          <section className="mb-16 md:mb-20 pt-10 border-t border-gray-200/70">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#16082a] mb-4">
              The designer-founder advantage
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              The most influential companies of our time were shaped by people who obsessed over design. We’re training a generation who can do the same: creatives who understand business, and leaders who understand craft.
            </p>
          </section>

          {/* For parents */}
          <section className="mb-16 md:mb-20 pt-10 border-t border-gray-200/70">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#16082a] mb-4">
              For parents
            </h2>
            <div className="space-y-3">
              {parentPillars.map((p, idx) => (
                <div key={idx} className="flex items-start gap-3 text-base">
                  <div className="mt-1 bg-purple-100/70 p-1 rounded-full text-[#6c3696] shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <div>
                    <span className="font-bold text-[#16082a]">{p.title}. </span>
                    <span className="text-gray-600">{p.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* What students say */}
          <section className="mb-16 md:mb-20 pt-10 border-t border-gray-200/70">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#16082a] mb-6">
              What students say
            </h2>
            <blockquote className="pl-6 border-l-2 border-[#6c3696] my-6">
              <p className="text-lg md:text-xl font-serif italic text-gray-800 leading-relaxed mb-3">
                &ldquo;Learning Figma, design systems, and visual hierarchy at Path School helped me build the entire UI and brand identity for a student startup. Presenting my portfolio on Demo Day was an unforgettable milestone.&rdquo;
              </p>
              <footer className="text-sm font-medium text-gray-500">
                — Maya T., Age 16, Creative Design Track
              </footer>
            </blockquote>
          </section>

          {/* Frequently asked questions */}
          <section className="mb-16 md:mb-20 pt-10 border-t border-gray-200/70">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#16082a] mb-6">
              Frequently asked questions
            </h2>
            <div className="divide-y divide-gray-200/70">
              {faqs.map((faq, idx) => (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between text-left py-2 gap-4 hover:text-[#6c3696] transition-colors cursor-pointer group"
                  >
                    <span className="text-base sm:text-lg font-bold text-[#16082a] group-hover:text-[#6c3696]">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-200 ${
                        openFaq === idx ? 'rotate-180 text-[#6c3696]' : ''
                      }`} 
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="pt-2 pb-3 text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Closing Section */}
          <section className="pt-10 border-t border-gray-200/70 text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#16082a] mb-8">
              Design things people can’t ignore.
            </h2>
            <div className="flex justify-center">
              <Link 
                href="/enroll"
                className="inline-flex items-center justify-center bg-[#16140f] hover:bg-[#6c3696] text-white px-10 py-3.5 rounded-full font-serif italic text-base transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                Apply to our Studio Program
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
