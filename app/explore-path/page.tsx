"use client";

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Rocket,
  Palette,
  TrendingUp,
  GraduationCap,
  Users,
  Compass,
  CheckCircle2,
  Award,
  Globe,
} from 'lucide-react';

const pillars = [
  {
    icon: Compass,
    title: 'Builder-First Curriculum',
    description:
      'We replace passive lectures with real builds. From day one, students develop functional software, venture prototypes, and creative systems that solve real problems.',
  },
  {
    icon: Users,
    title: 'Elite Mentor Network',
    description:
      'Students learn directly from practicing engineers, startup founders, and design leads who bring industry rigor and personal mentorship to every session.',
  },
  {
    icon: Award,
    title: 'Long-Term Trajectory',
    description:
      'Deep, multi-year learning journeys that allow young builders to compound knowledge, master foundational tools, and graduate with a formidable portfolio.',
  },
  {
    icon: Globe,
    title: 'Global Community',
    description:
      'Founded in Accra with an international outlook, our batches connect ambitious learners across borders to share ideas, build together, and compete globally.',
  },
];

const tracks = [
  {
    title: 'AI Agent Programming',
    category: 'Engineering & Intelligence',
    description:
      'Explore autonomous agents, LLM architectures, Python automation, and software development foundations for the next era of computing.',
    href: '/ai-agent-programming',
    icon: Cpu,
    tag: 'Flagship Track',
    color: 'border-purple-200/80 hover:border-purple-300',
  },
  {
    title: 'Launch a Startup',
    category: 'Venture & Entrepreneurship',
    description:
      'Take an idea from validation and customer discovery to MVP development, unit economics, pitch decks, and investor demo days.',
    href: '/launch-a-startup',
    icon: Rocket,
    tag: 'Venture Track',
    color: 'border-pink-200/80 hover:border-pink-300',
  },
  {
    title: 'Creative Design & Media',
    category: 'UI/UX & Brand Identity',
    description:
      'Master product design, interaction principles, visual systems, Figma, and digital storytelling to build memorable user experiences.',
    href: '/creative-design',
    icon: Palette,
    tag: 'Creative Track',
    color: 'border-blue-200/80 hover:border-blue-300',
  },
  {
    title: 'Marketing & Enterprise Sales',
    category: 'Growth & Business Execution',
    description:
      'Learn go-to-market strategy, positioning, enterprise sales pipelines, digital acquisition, and growth experiments that scale ventures.',
    href: '/marketing-enterprise-sales',
    icon: TrendingUp,
    tag: 'Growth Track',
    color: 'border-amber-200/80 hover:border-amber-300',
  },
  {
    title: 'Private Tuition & Mentorship',
    category: 'Bespoke Academic Rigor',
    description:
      'One-on-one personalized instruction tailored to international exam boards, advanced STEM concepts, and individual learning goals.',
    href: '/private-tuition',
    icon: GraduationCap,
    tag: '1-on-1 Instruction',
    color: 'border-emerald-200/80 hover:border-emerald-300',
  },
];

const learningPhases = [
  {
    step: '01',
    title: 'Discovery & Foundations',
    desc: 'Master the mental models, first principles, and modern toolchains required to understand modern technology and business.',
  },
  {
    step: '02',
    title: 'Applied Prototyping',
    desc: 'Work in small batches under mentor guidance to design, code, and iterate on working solutions to real-world challenges.',
  },
  {
    step: '03',
    title: 'Venture & Product Build',
    desc: 'Bring a flagship initiative to life with user testing, refinement, and professional-grade deployment or presentation.',
  },
  {
    step: '04',
    title: 'Showcase & Demo Day',
    desc: 'Present projects to the Path School community, industry leaders, and parents at our quarterly student showcase.',
  },
];

export default function ExplorePathPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#fbfbf9] text-[#16082a] selection:bg-[#e81b87] selection:text-white">
      <Header />

      <main className="flex-grow bg-gradient-to-b from-[#f7f1fb]/50 via-white to-[#fbfbf9]">
        {/* Hero Section */}
        <section className="relative py-14 sm:py-20 px-6 sm:px-8 border-b border-[#ede4f5]/80 overflow-hidden">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#e81b87]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#6c3696]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#150824] leading-[1.15] tracking-tight">
              Explore Path School
            </h1>
          </div>
        </section>

        {/* Pillars / The Path Difference */}
        <section className="py-20 sm:py-28 px-6 sm:px-8 max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#150824] tracking-tight mb-4">
              The Path Difference
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Education should not just prepare students for the future — it should empower them to build it right now.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-200/80 p-6 sm:p-7 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#6c3696]/10 flex items-center justify-center text-[#6c3696] mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#150824] mb-2">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Learning Tracks */}
        <section id="tracks" className="py-20 sm:py-28 px-6 sm:px-8 border-t border-gray-200/80 scroll-mt-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#150824] tracking-tight mb-4">
                Curriculum Tracks
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Choose a specialized track or combine disciplines across engineering, venture creation, and digital arts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tracks.map((track, i) => {
                const Icon = track.icon;
                return (
                  <Link
                    key={i}
                    href={track.href}
                    className={`group bg-white rounded-2xl border ${track.color} p-7 transition-all hover:shadow-md flex flex-col justify-between`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#fbfbf9] border border-gray-200/70 flex items-center justify-center text-[#150824] group-hover:text-[#6c3696] transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 bg-[#fbfbf9] px-2.5 py-1 rounded-full border border-gray-200/60">
                          {track.tag}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-[#6c3696] mb-1">{track.category}</p>
                      <h3 className="text-lg font-bold text-[#150824] mb-2.5 group-hover:text-[#6c3696] transition-colors">
                        {track.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                        {track.description}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#150824] group-hover:text-[#6c3696] transition-colors pt-2 border-t border-gray-200/60">
                      <span>Explore track details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* How We Learn */}
        <section className="py-20 sm:py-28 px-6 sm:px-8 max-w-5xl mx-auto border-t border-gray-200/80">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#150824] tracking-tight">
              How Students Progress
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPhases.map((phase, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200/80 p-6 shadow-2xs">
                <span className="font-serif text-2xl font-normal text-[#6c3696]/60 mb-3 block">
                  {phase.step}
                </span>
                <h3 className="text-base font-bold text-[#150824] mb-2">{phase.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Explore More Links / Secondary Navigation */}
        <section className="py-20 px-6 sm:px-8 border-t border-gray-200/80">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-serif font-normal text-[#150824] mb-2">
                Discover More About Path
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Explore the leadership team, community partnerships, upcoming events, and financial aid.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/people"
                className="p-5 bg-white rounded-xl border border-gray-200 hover:border-[#6c3696] transition-all hover:shadow-xs group"
              >
                <p className="text-sm font-bold text-[#150824] group-hover:text-[#6c3696] flex items-center justify-between">
                  <span>Our Leadership</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
                </p>
                <p className="text-xs text-gray-500 mt-1">Meet our founders, advisors, and team.</p>
              </Link>

              <Link
                href="/partners"
                className="p-5 bg-white rounded-xl border border-gray-200 hover:border-[#6c3696] transition-all hover:shadow-xs group"
              >
                <p className="text-sm font-bold text-[#150824] group-hover:text-[#6c3696] flex items-center justify-between">
                  <span>Partners & Hubs</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
                </p>
                <p className="text-xs text-gray-500 mt-1">Collaborations across tech, hubs, and education.</p>
              </Link>

              <Link
                href="/scholarships"
                className="p-5 bg-white rounded-xl border border-gray-200 hover:border-[#6c3696] transition-all hover:shadow-xs group"
              >
                <p className="text-sm font-bold text-[#150824] group-hover:text-[#6c3696] flex items-center justify-between">
                  <span>Scholarships</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
                </p>
                <p className="text-xs text-gray-500 mt-1">Need-blind aid of up to 50% for builders.</p>
              </Link>

              <Link
                href="/faq"
                className="p-5 bg-white rounded-xl border border-gray-200 hover:border-[#6c3696] transition-all hover:shadow-xs group"
              >
                <p className="text-sm font-bold text-[#150824] group-hover:text-[#6c3696] flex items-center justify-between">
                  <span>Common Questions</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
                </p>
                <p className="text-xs text-gray-500 mt-1">Everything about admissions and sessions.</p>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

