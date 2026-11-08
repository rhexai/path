"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Check, ChevronDown } from 'lucide-react';

export default function AIAgentProgrammingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const audience = [
    "Curious beginners who’ve used AI tools and want to understand how they work, with no prior coding experience required",
    "Young coders who want to level up from basic programming to building intelligent, autonomous systems",
    "Future founders who want to build AI-powered products without depending on someone else’s technical team",
    "Creative thinkers who see problems everywhere and want the tools to solve them"
  ];

  const curriculum = [
    {
      title: "Foundations: How modern AI really works",
      description: "Understand what large language models are, what they’re good at, and where they fail. You’ll learn how to think about AI systems clearly, without hype, so you can build with confidence instead of guesswork."
    },
    {
      title: "Prompt design and agent behavior",
      description: "Learn to give AI precise, effective instructions. You’ll practice designing prompts, writing system instructions, and shaping an agent’s personality, boundaries, and decision-making."
    },
    {
      title: "Tools, memory, and multi-step reasoning",
      description: "An agent becomes powerful when it can do things. You’ll connect agents to tools like search, databases, calendars, and external services, and give them memory so they stay useful over time."
    },
    {
      title: "Programming your agents",
      description: "You’ll write real code (we’ll teach you what you need, starting where you are) to build agents from scratch and orchestrate multi-step workflows that run autonomously."
    },
    {
      title: "Training, testing, and evaluation",
      description: "Building is half the job. You’ll learn how to measure whether your agent actually works, catch mistakes, reduce errors, and improve performance with real data and real feedback."
    },
    {
      title: "Responsible AI",
      description: "Powerful tools demand good judgment. You’ll explore safety, privacy, bias, and ethics so the things you build are trustworthy."
    },
    {
      title: "Capstone: Ship a live agent",
      description: "You’ll finish by launching an AI agent project to real users, solving a problem you chose, and presenting it on Demo Day."
    }
  ];

  const programStructure = [
    { label: "Target age", value: "Kids, teens, and youth aged 8–20 (organized into age-appropriate peer batches)" },
    { label: "Format & Batches", value: "Admissions run in select batches; all batches run for a minimum of 2 years" },
    { label: "Delivery", value: "Hybrid (online interactive sessions & hands-on studio lab)" },
    { label: "Weekly rhythm", value: "2 live sessions, hands-on lab time, and one-on-one mentor check-ins" },
    { label: "Batch size", value: "Small batches of 12–15 students so you get real, individualized attention" },
    { label: "Mentors", value: "Practicing engineers, AI founders, and product builders who’ve shipped real systems" },
    { label: "Projects over exams", value: "You’re evaluated on what you build, not what you memorize" }
  ];

  const outcomes = [
    "A portfolio of deployed AI projects you can show to employers, investors, universities, and customers",
    "A practical, honest understanding of how AI systems work and where they break",
    "The ability to turn an idea into a working product, fast",
    "A network of peers and mentors in the AI space",
    "The confidence that comes from having built something real"
  ];

  const faqs = [
    {
      question: "Do I need to know how to code?",
      answer: "No. We start with the fundamentals and build up. If you already code, you’ll go deeper and faster."
    },
    {
      question: "What will I actually build?",
      answer: "Everything from simple assistants to autonomous, multi-step agents, finishing with a capstone project that goes live."
    },
    {
      question: "Who owns what I create?",
      answer: "You own 100% of the intellectual property, code, and products you build during the program."
    },
    {
      question: "What equipment do I need?",
      answer: "A laptop and an internet connection. We’ll provide the rest."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f8f7f4] text-[#16082a]">
      <Header />

      <main className="flex-grow py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Hero Section */}
          <section className="mb-16 md:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#16082a] leading-tight mb-6 tracking-tight">
              AI Agent Programming &amp; Training
            </h1>

            <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed mb-8">
              <p>
                A few years ago, AI was something you read about. Today it writes code, answers customers, analyzes data, books meetings, and runs entire workflows. The next wave is AI agents: systems that don’t just respond to a question, but reason through a goal, use tools, make decisions, and take action on their own.
              </p>
              <p>
                Whoever builds and directs these agents will shape how businesses run in the coming decades. At Path School, we think that person could be you, and that you shouldn’t have to wait until college or a first job to start.
              </p>
              <p>
                Our AI Agent Programming &amp; Training program takes you from curious user to confident builder. You won’t spend months on theory before touching anything real. From the first week, you’ll be building, testing, breaking, and improving agents that solve real problems.
              </p>
            </div>

            <div className="flex justify-center pt-4">
              <Link
                href="/enroll"
                className="inline-flex items-center justify-center bg-[#16140f] hover:bg-[#6c3696] text-white px-9 py-3.5 rounded-full font-serif italic text-base transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                Apply to the AI Program
              </Link>
            </div>
          </section>

          {/* Who this program is for */}
          <section className="mb-16 md:mb-20 pt-10 border-t border-gray-200/70">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#16082a] mb-6">
              Who this program is for
            </h2>
            <ul className="space-y-3.5 mb-6">
              {audience.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-base text-gray-700">
                  <div className="mt-1 bg-emerald-100/70 p-1 rounded-full text-emerald-700 shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 text-base md:text-lg italic font-serif">
              If you’re ambitious, willing to experiment, and not afraid to fail on the way to something that works, you belong here.
            </p>
          </section>

          {/* What you’ll learn and build */}
          <section className="mb-16 md:mb-20 pt-10 border-t border-gray-200/70">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#16082a] mb-8">
              What you’ll learn and build
            </h2>
            <div className="space-y-8">
              {curriculum.map((module, idx) => (
                <div key={idx} className="flex flex-col gap-1.5">
                  <h3 className="text-lg md:text-xl font-bold text-[#16082a]">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {module.description}
                  </p>
                </div>
              ))}
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

          {/* What you’ll leave with */}
          <section className="mb-16 md:mb-20 pt-10 border-t border-gray-200/70">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#16082a] mb-6">
              What you’ll leave with
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

          {/* What students say */}
          <section className="mb-16 md:mb-20 pt-10 border-t border-gray-200/70">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#16082a] mb-6">
              What students say
            </h2>
            <blockquote className="pl-6 border-l-2 border-[#6c3696] my-6">
              <p className="text-lg md:text-xl font-serif italic text-gray-800 leading-relaxed mb-3">
                &ldquo;Building an autonomous agent that could research competitors, draft summaries, and alert our team in Slack completely demystified AI for me. Within three weeks, I went from prompting ChatGPT to orchestrating multi-agent systems.&rdquo;
              </p>
              <footer className="text-sm font-medium text-gray-500">
                — Kwame M., Age 16, Autonomous Research Agent
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
                      className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-200 ${openFaq === idx ? 'rotate-180 text-[#6c3696]' : ''
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

          {/* Ready to build what’s next? */}
          <section className="pt-10 border-t border-gray-200/70 text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#16082a] mb-4">
              Ready to build what’s next?
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              The people leading the AI era won’t be the ones who watched from the sidelines. Start building with us.
            </p>
            <div className="flex justify-center">
              <Link
                href="/enroll"
                className="inline-flex items-center justify-center bg-[#16140f] hover:bg-[#6c3696] text-white px-9 py-3.5 rounded-full font-serif italic text-base transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                Apply to the AI Program
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
