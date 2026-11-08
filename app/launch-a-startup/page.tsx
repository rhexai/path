"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Check, ChevronDown } from 'lucide-react';

export default function LaunchAStartupPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const ageGroups = [
    {
      name: "Explorers",
      ages: "Ages 8–11",
      description: "Young “kidpreneurs” learn to notice problems, think up solutions, and run mini ventures, such as a product, a service, or a small project, building creativity, confidence, and money sense."
    },
    {
      name: "Builders",
      ages: "Ages 12–15",
      description: "Students validate real ideas, build early products, learn to talk to customers, and launch small businesses and projects."
    },
    {
      name: "Founders",
      ages: "Ages 16–20",
      description: "Serious venture-building: customer discovery, MVPs, traction, pricing, team-building, fundraising, and pitching to real investors and partners."
    }
  ];

  const yearOneItems = [
    "Spotting real problems worth solving",
    "Customer discovery: talking to people and listening well",
    "Creativity, resourcefulness, and the founder mindset",
    "Building first prototypes with modern tools, including AI and no-code",
    "Basic money skills: earning, pricing, budgeting, and value",
    "Teamwork and communication"
  ];

  const yearTwoItems = [
    "Building and refining a real product or venture",
    "Getting first users and measurable traction",
    "Business models, finances, legal basics, and growth",
    "Team-building, leadership, and handling setbacks",
    "Fundraising and pitching, scaled to each age group",
    "Capstone: Presenting your venture at Demo Day to mentors, partners, and investors"
  ];

  const programStructure = [
    { label: "Format", value: "Hybrid. Interactive online sessions plus a hands-on studio lab." },
    { label: "Weekly rhythm", value: "2 live sessions, hands-on lab time, and one-on-one mentor check-ins." },
    { label: "Batch size", value: "Small batches of 12–15 students. Founders grow faster together." },
    { label: "Mentors", value: "Founders, operators, and product builders who’ve launched real ventures and shipped real products." },
    { label: "Projects over exams", value: "Students are evaluated on what they build, not what you memorize." },
    { label: "Admissions", value: "Open in select batches. Every batch runs for a minimum of 2 years." }
  ];

  const outcomes = [
    "A real venture with measurable traction, not a classroom exercise",
    "A founder’s toolkit of frameworks, habits, and skills for life",
    "A network of mentors, peers, and advisors who back their next move",
    "Confidence in pitching, leading, and speaking up",
    "Resilience, learned by facing real obstacles with real support",
    "A track record that stands out in any application, interview, or investor meeting"
  ];

  const parentPillars = [
    {
      title: "Age-appropriate ventures",
      desc: "Younger students run safe, small-scale projects."
    },
    {
      title: "Mentors who know your child",
      desc: "Small batches and regular one-on-one check-ins."
    },
    {
      title: "Visible progress",
      desc: "Demos, showcases, and portfolios, not just report cards."
    },
    {
      title: "Open communication",
      desc: "Regular parent progress summaries, showcase invites, and direct mentor touchpoints."
    }
  ];

  const faqs = [
    {
      question: "Does my child need an idea already?",
      answer: "No. We help students find problems worth solving."
    },
    {
      question: "Is the program only for future CEOs?",
      answer: "No. These skills, like creativity, communication, and initiative, help in any career."
    },
    {
      question: "Why two years?",
      answer: "Companies aren’t built in a few weeks. Two years gives students time to try, fail, learn, and truly launch."
    },
    {
      question: "Do students keep their ventures?",
      answer: "Students and their families retain 100% ownership and intellectual property of everything they create. Path School takes zero equity."
    },
    {
      question: "Is there funding?",
      answer: "Top projects receive micro-grant seed capital for prototyping, and older batches present directly to angel investors, mentors, and venture partners at Demo Day."
    },
    {
      question: "How are students evaluated?",
      answer: "By what they build, test, and launch. There are no exams."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f8f7f4] text-[#16082a]">
      <Header />

      <main className="flex-grow py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          
          {/* Hero Section */}
          <section className="mb-16 md:mb-20 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#16082a] leading-tight mb-4 tracking-tight">
              Launch a Startup
            </h1>

            <p className="text-gray-700 text-lg sm:text-xl font-serif italic max-w-2xl mx-auto mb-8 leading-relaxed">
              A startup incubator where young founders go from first idea to real customers, with mentors and a batch of builders beside them.
            </p>

            {/* Centered Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Link 
                href="/enroll"
                className="inline-flex items-center justify-center bg-[#16140f] hover:bg-[#6c3696] text-white px-9 py-3.5 rounded-full font-serif italic text-base transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                Apply for the Next Batch
              </Link>
              <Link 
                href="#mentors"
                className="inline-flex items-center justify-center border border-gray-300 hover:border-[#6c3696] hover:text-[#6c3696] bg-white text-[#16082a] px-8 py-3.5 rounded-full font-serif italic text-base transition-all shadow-xs cursor-pointer"
              >
                Meet the Mentors
              </Link>
            </div>

            {/* Metadata Tags */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-semibold text-gray-600">
              <span className="bg-[#f0eaf8] text-[#6c3696] px-3 py-1 rounded-full border border-[#ded1ee]">Ages 8–20</span>
              <span className="text-gray-400">•</span>
              <span className="bg-white/80 border border-gray-200 px-3 py-1 rounded-full">Hybrid</span>
              <span className="text-gray-400">•</span>
              <span className="bg-white/80 border border-gray-200 px-3 py-1 rounded-full">Small batches of 12–15</span>
              <span className="text-gray-400">•</span>
              <span className="bg-white/80 border border-gray-200 px-3 py-1 rounded-full">Admissions in select batches</span>
            </div>
          </section>

          {/* Founders aren’t born. They start. */}
          <section className="mb-16 md:mb-20 pt-10 border-t border-gray-200/70">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#16082a] mb-6">
              Founders aren’t born. They start.
            </h2>
            <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                Somewhere right now, a young person has an idea that could solve a real problem, and they’re waiting: for permission, for age, for confidence, for someone to say “go.”
              </p>
              <p>
                Here’s what every founder eventually learns: nobody feels ready. The ones who build great companies are the ones who start anyway, learn quickly, and keep going.
              </p>
              <p>
                Launch a Startup is Path School’s flagship incubator track. Inspired by the world’s best startup programs and designed for young people, it runs for a minimum of two years, because building a founder takes longer than building a pitch. We believe you learn to build a company by building one.
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
              You don’t need a perfect idea. You need curiosity, drive, and the willingness to test your assumptions with real people.
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
                  Year 1: Think like a founder
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
                  Year 2: Build and launch
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
          <section id="mentors" className="mb-16 md:mb-20 pt-10 border-t border-gray-200/70">
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

          {/* For parents */}
          <section className="mb-16 md:mb-20 pt-10 border-t border-gray-200/70">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#16082a] mb-4">
              For parents
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              We’re not asking your child to take wild risks. We’re teaching them to take smart ones, with guidance every step of the way. Along the way, students develop communication, financial awareness, leadership, and independence, whether or not they start a company as adults.
            </p>
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

          {/* Why Path School */}
          <section className="mb-16 md:mb-20 pt-10 border-t border-gray-200/70">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#16082a] mb-4">
              Why Path School
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Many programs teach about entrepreneurship. We make students entrepreneurs. They’ll be challenged and sometimes uncomfortable, and they’ll be supported the whole way, because the fastest route to leadership is doing the thing.
            </p>
          </section>

          {/* What founders say */}
          <section className="mb-16 md:mb-20 pt-10 border-t border-gray-200/70">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#16082a] mb-6">
              What founders say
            </h2>
            <blockquote className="pl-6 border-l-2 border-[#6c3696] my-6">
              <p className="text-lg md:text-xl font-serif italic text-gray-800 leading-relaxed mb-3">
                &ldquo;Building my first venture with real paying customers at age 15 taught me more than any textbook ever could. Having active founders and mentors critique my pitch every week gave me the confidence to launch.&rdquo;
              </p>
              <footer className="text-sm font-medium text-gray-500">
                — David A., Age 15, Founder of EcoTrack
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

          {/* Closing Section: Ready to build? */}
          <section className="pt-10 border-t border-gray-200/70 text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#16082a] mb-8">
              The best time to start was yesterday. The second best is today.
            </h2>
            <div className="flex justify-center">
              <Link 
                href="/enroll"
                className="inline-flex items-center justify-center bg-[#16140f] hover:bg-[#6c3696] text-white px-10 py-3.5 rounded-full font-serif italic text-base transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                Apply to the Startup Program
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
