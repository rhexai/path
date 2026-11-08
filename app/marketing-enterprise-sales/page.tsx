"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Check, ChevronDown } from 'lucide-react';

export default function MarketingEnterpriseSalesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const ageGroups = [
    {
      name: "Explorers",
      ages: "Ages 8–11",
      description: "Confident communication, storytelling, and creativity. Students learn to share ideas clearly, present with confidence, and “sell” small projects in safe, playful settings."
    },
    {
      name: "Builders",
      ages: "Ages 12–15",
      description: "Brand-building, social and content marketing, and the foundations of selling, with guided, supervised real-world practice."
    },
    {
      name: "Founders",
      ages: "Ages 16–20",
      description: "Growth marketing, outreach, discovery calls, enterprise sales, negotiation, and live campaigns for real products and companies."
    }
  ];

  const yearOneItems = [
    "Communicating clearly, presentation mastery, and speaking with confidence",
    "Understanding people: what they want, need, and worry about (buyer psychology)",
    "Positioning and storytelling: why something matters, and to whom",
    "Brand basics: voice, identity, positioning, and building trust",
    "Content creation, copywriting, and launching first marketing projects",
    "Sales funnels & lead magnets: understanding customer journey stages (TOFU, MOFU, BOFU)",
    "Introduction to CRMs (HubSpot & Notion): managing contacts, pipelines, and leads",
    "Listening and stakeholder empathy: the foundation of all great selling"
  ];

  const yearTwoItems = [
    "Modern growth marketing: multi-channel content, social, community, and email marketing",
    "Multi-platform paid advertising: launching & managing live ads on Meta, Google, TikTok, LinkedIn & YouTube",
    "Marketing attribution, conversion pixels, UTM tracking, and reading data to optimize campaigns",
    "AI agents in marketing and sales: automated prospect research, outreach bots, and intelligent workflows",
    "Enterprise CRM mastery (HubSpot, Salesforce): pipeline management, lead scoring, and deal tracking",
    "The fundamentals of selling: consultative discovery, qualification frameworks, and objection handling",
    "Enterprise sales: navigating decision-makers, proposals, contract negotiation, and closing deals",
    "Outreach and prospecting with real practice, fully supervised and age-appropriate",
    "Capstone: Running a live marketing and sales campaign for a real product or company, with measurable results"
  ];

  const programStructure = [
    { label: "Format", value: "Hybrid. Interactive online sessions plus a hands-on studio lab." },
    { label: "Weekly rhythm", value: "2 live sessions, hands-on lab time, and one-on-one mentor check-ins." },
    { label: "Batch size", value: "Small batches of 12–15 students, so every student gets practice and feedback." },
    { label: "Mentors", value: "Marketers, sales leaders, and founders who’ve built revenue from scratch." },
    { label: "Projects over exams", value: "Students are evaluated on the campaigns they run and the results they earn, not what they memorize." },
    { label: "Admissions", value: "Open in select batches. Every batch runs for a minimum of 2 years." }
  ];

  const outcomes = [
    "A tested playbook for finding, reaching, and winning customers through ads, funnels, and outreach",
    "Hands-on mastery of industry-standard CRMs (HubSpot, Salesforce) and performance ad platforms",
    "Practical deployment of autonomous AI agents for sales automation, prospecting, and lead enrichment",
    "Real experience with multi-touch attribution, conversion tracking, and pipeline forecasting",
    "Confidence in pitching, presenting, negotiating, and closing high-value deals with real executives",
    "A portfolio of live campaign case studies, ROAS reports, and revenue-generating results"
  ];

  const faqs = [
    {
      question: "My child is shy. Is this right for them?",
      answer: "Yes. Small batches and step-by-step practice build confidence gradually and safely."
    },
    {
      question: "Will students contact real customers?",
      answer: "Older students will, with guidance and supervision. Younger students practice in safe, simulated, and classroom settings."
    },
    {
      question: "Why two years?",
      answer: "Communication and persuasion are skills built through repetition and feedback. Two years lets students grow from confident speakers into capable closers."
    },
    {
      question: "Is this only for future salespeople?",
      answer: "No. These skills serve founders, designers, engineers, and leaders in every field."
    },
    {
      question: "How are students evaluated?",
      answer: "By campaigns, pitches, and results. There are no exams."
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
              Marketing &amp; Enterprise Sales
            </h1>
          </section>

          {/* The skill nobody teaches you */}
          <section className="mb-16 md:mb-20 pt-10 border-t border-gray-200/70">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#16082a] mb-6">
              The skill nobody teaches you
            </h2>
            <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                Ask any founder what separates companies that thrive from companies that vanish, and you’ll hear the same thing: someone figured out how to get customers.
              </p>
              <p>
                Yet most schools never teach it. A student can graduate knowing a thousand things and still not know how to introduce themselves to a stranger, explain why something matters, or ask for what they want.
              </p>
              <p>
                Our Marketing &amp; Enterprise Sales program fixes that. Across two years, students build communication, persuasion, and sales skills step by step, from confident speaking to closing real deals. These skills make them valuable on any team and unstoppable on their own.
              </p>
            </div>
          </section>

          {/* Who this program is for */}
          <section className="mb-16 md:mb-20 pt-10 border-t border-gray-200/70">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#16082a] mb-6">
              Who this program is for
            </h2>
            <p className="text-gray-600 text-base mb-6">
              Students are placed in age-appropriate peer batches:
            </p>
            
            <div className="space-y-6 mb-8">
              {ageGroups.map((group, idx) => (
                <div key={idx} className="flex flex-col gap-1.5">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-lg font-bold text-[#16082a]">
                      {group.name}
                    </h3>
                    <span className="text-xs font-semibold text-[#6c3696] bg-[#f0eaf8] px-2.5 py-0.5 rounded-full">
                      {group.ages}
                    </span>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {group.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-gray-700 text-base md:text-lg italic font-serif">
              You don’t need experience, and you don’t need to be outgoing. Shy students often become our strongest communicators, because confidence comes from practice.
            </p>
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
                  Year 1: Voice, story, and confidence
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
                  Year 2: Campaigns, outreach, and closing
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

          {/* Why this matters now */}
          <section className="mb-16 md:mb-20 pt-10 border-t border-gray-200/70">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#16082a] mb-4">
              Why this matters now
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              In a world where anyone can build a product with AI in a weekend, the advantage goes to people who can reach the right audience and earn their trust. Distribution and persuasion are the new superpowers, and our students learn them early.
            </p>
          </section>

          {/* For parents */}
          <section className="mb-16 md:mb-20 pt-10 border-t border-gray-200/70">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#16082a] mb-4">
              For parents
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Selling here means communicating honestly, understanding others, and creating value. We teach ethics, respect, and integrity alongside technique. Younger students practice in safe, supervised, classroom-style settings. Real-world outreach for older students is guided and age-appropriate with complete safety and mentor supervision.
            </p>
          </section>

          {/* What students say */}
          <section className="mb-16 md:mb-20 pt-10 border-t border-gray-200/70">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#16082a] mb-6">
              What students say
            </h2>
            <blockquote className="pl-6 border-l-2 border-[#6c3696] my-6">
              <p className="text-lg md:text-xl font-serif italic text-gray-800 leading-relaxed mb-3">
                &ldquo;Before Path School, I was terrified of pitching my ideas. In Year 2, our team ran a live multi-channel outreach campaign that landed three corporate pilot deals. It completely changed how I speak, negotiate, and lead.&rdquo;
              </p>
              <footer className="text-sm font-medium text-gray-500">
                — Sarah K., Age 16, Enterprise Sales Track
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
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#16082a] mb-4">
              Great ideas don’t sell themselves, people do.
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Learn to sell the future you’re building.
            </p>
            <div className="flex justify-center">
              <Link 
                href="/enroll"
                className="inline-flex items-center justify-center bg-[#16140f] hover:bg-[#6c3696] text-white px-10 py-3.5 rounded-full font-serif italic text-base transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                Apply to the Marketing &amp; Sales Program
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
