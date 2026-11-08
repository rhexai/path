"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

interface FaqCategory {
  category: string;
  items: FaqItem[];
}

const faqData: FaqCategory[] = [
  {
    category: 'About Path School',
    items: [
      {
        q: 'What is Path School?',
        a: 'Path School is a youth tech education company that teaches children and young people aged 8–20 the skills of the future: AI programming, entrepreneurship, creative design, and enterprise sales. We run small-batch, mentor-led cohorts both online and through school chapter partnerships.',
      },
      {
        q: 'Who is Path School designed for?',
        a: 'Path School is built for curious young people aged 8–20 — from complete beginners to intermediate builders. Our programs are also designed with parents in mind, offering transparency, regular progress updates, and a structured learning environment.',
      },
      {
        q: 'Where is Path School based?',
        a: 'Path School was founded in Accra. New Chapters coming soon.',
      },
    ],
  },
  {
    category: 'Programs & Tracks',
    items: [
      {
        q: 'What tracks does Path School offer?',
        a: 'We offer four core tracks: AI Agent Programming & Training, Launch a Startup, Marketing & Enterprise Sales, and Creative Design. Each track is a structured, project-based curriculum delivered in small peer batches with a dedicated mentor.',
      },
      {
        q: 'Does my child need prior experience to join?',
        a: 'No prior experience is required for any track. We assess each student\'s starting point and place them in an age-appropriate batch (8–12, 13–16, or 17–20). Curiosity and a desire to build are the only prerequisites.',
      },
      {
        q: 'How long is a batch?',
        a: 'Each batch runs for one term — approximately 24 months. Students have live sessions with their batch and mentor, plus independent project work and in-person sessions and events.',
      },
      {
        q: 'Can my child switch tracks after enrolling?',
        a: 'Yes. Students can discuss a track change with their mentor at any point in the term. We want every student to be engaged and excited about what they are building.',
      },
    ],
  },
  {
    category: 'Enrollment & Fees',
    items: [
      {
        q: 'How much does enrollment cost?',
        a: 'Batch enrollment is GH₵ 950 per month. Private tuition sessions are available at a separate rate. Scholarships of up to 50% are available for eligible students — visit our Scholarships page to learn more.',
      },
      {
        q: 'How do I enroll my child?',
        a: 'Visit our Batch Enrollment page, select a track, and complete the enrollment form. An advisor will confirm your child\'s batch placement and send next steps within 48 hours.',
      },
      {
        q: 'Are there scholarships or financial aid options?',
        a: 'Yes. Path School awards need-based and merit scholarships of up to 50% tuition coverage. All financial inquiries are strictly confidential. Visit /scholarships to apply or contact scholarships@pathschool.io.',
      },
      {
        q: 'Can I cancel my subscription at any time?',
        a: 'Yes. Monthly subscriptions can be cancelled at any time before the next billing cycle. Annual subscriptions are non-refundable after the first 14 days.',
      },
    ],
  },
  {
    category: 'School & Chapter Partnerships',
    items: [
      {
        q: 'How can my school partner with Path School?',
        a: 'Schools can partner with us to run an official Path School Chapter. We offer three models: Local School Chapter, International School Chapter, and School District/Network Partner. Visit /path-for-school to learn more and express interest.',
      },
      {
        q: 'What does a school chapter include?',
        a: 'A chapter includes a fully branded setup, curated curriculum, a dedicated Path School mentor for the cohort, faculty training, student progress reports, and an annual chapter showcase and certification ceremony.',
      },
    ],
  },
  {
    category: 'Mentors & Certification',
    items: [
      {
        q: 'Who are the Path School mentors?',
        a: 'Our mentors are experienced practitioners — engineers, designers, founders, and growth experts — who have worked at leading tech companies and startups. Every batch cohort has a dedicated lead mentor.',
      },
      {
        q: 'Does my child receive a certificate on completion?',
        a: 'Yes. Students who successfully complete a batch term receive an official Path School completion certificate. Outstanding performers may be nominated for Path School Scholar recognition and access to our alumni network.',
      },
      {
        q: 'What happens after a batch ends?',
        a: 'Graduates join the Path School alumni community, gaining access to events, mentorship connections, chapter showcases, and Path School\'s talent network. Many alumni go on to enroll in additional tracks or apply to fellowships.',
      },
    ],
  },
];

export default function FaqPage() {

  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggle = (key: string) => setOpenItem(openItem === key ? null : key);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#fbfbf9] text-[#16082a] selection:bg-[#e81b87] selection:text-white">
      <Header />

      <main className="flex-grow">

        {/* Hero */}
        <section className="relative py-16 sm:py-24 px-6 sm:px-8 border-b border-[#ede4f5]/80 overflow-hidden bg-gradient-to-b from-[#f7f1fb]/50 via-white to-[#fbfbf9]">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#6c3696]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl font-serif font-normal text-[#150824] leading-[1.15] tracking-tight mb-6">
              Frequently Asked Questions
            </h1>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16 sm:py-20 px-6 sm:px-8 max-w-4xl mx-auto">
          <div className="space-y-14">
            {faqData.map((section, si) => (
              <div key={si}>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#6c3696] mb-5 pb-3 border-b border-[#ede4f5]">
                  {section.category}
                </h2>
                <div className="space-y-3">
                  {section.items.map((item, qi) => {
                    const key = `${si}-${qi}`;
                    const isOpen = openItem === key;
                    return (
                      <div key={qi} className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all">
                        <button
                          onClick={() => toggle(key)}
                          className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#150824] hover:text-[#6c3696] transition-colors cursor-pointer"
                        >
                          <span>{item.q}</span>
                          <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#6c3696]' : 'text-gray-400'}`} />
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}

