"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  School,
  Globe,
  Users,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Mail,
  MessageCircle,
  BookOpen,
  Trophy,
  MapPin,
  Handshake,
  Sparkles,
  Building2,
  GraduationCap,
  LayoutGrid,
} from 'lucide-react';

export default function PathForSchoolPage() {
  const whatsappNumber = "233505295410";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello! I'm interested in partnering with Path School to run a chapter at our institution.")}`;

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const partnershipTiers = [
    {
      id: 'local-chapter',
      title: 'Local School Chapter',
      badge: 'Domestic Partnership',
      icon: School,
      description:
        'Designed for primary and secondary schools looking to embed a structured Path School chapter directly into their extracurricular or academic programs.',
      eligibility:
        'Open to registered schools with at least one committed faculty lead and a student body of 30 or more.',
      benefits: [
        'Fully branded chapter setup & onboarding',
        'Curated AI, coding & entrepreneurship curriculum',
        'Dedicated mentor assigned to the chapter',
        'Bi-weekly student progress reports',
        'Annual chapter showcase & certification ceremony',
      ],
    },
    {
      id: 'international-chapter',
      title: 'International School Chapter',
      badge: 'Global Partnership',
      icon: Globe,
      description:
        'For international schools and academies seeking to bring globally recognised tech and entrepreneurship programs to their student community.',
      eligibility:
        'Open to internationally accredited schools, bilingual academies, and overseas campuses of established institutions.',
      benefits: [
        'Multi-language curriculum support',
        'Global cohort integration with students from 15+ countries',
        'Cross-border batch collaborations',
        'International chapter rankings & leaderboards',
        'Access to Path School Global Alumni Network',
      ],
    },
    {
      id: 'district-partner',
      title: 'School District / Network Partner',
      badge: 'Multi-School Rollout',
      icon: Building2,
      description:
        'For school districts, educational NGOs, or school networks that want to scale the Path School chapter model across multiple institutions at once.',
      eligibility:
        'Open to districts, foundations, or education networks overseeing 3+ schools.',
      benefits: [
        'Centralised admin dashboard for all chapters',
        'Volume pricing & flexible per-school licensing',
        'Dedicated partnership success manager',
        'District-wide student analytics & outcomes reporting',
        'Custom curriculum co-design with Path School team',
      ],
    },
  ];

  const howItWorks = [
    {
      step: '01',
      color: 'bg-[#150824]',
      title: 'Express Interest',
      description:
        "Reach out via email or WhatsApp. Share your school's name, location, student count, and your vision for the chapter.",
    },
    {
      step: '02',
      color: 'bg-[#6c3696]',
      title: 'Partnership Discovery Call',
      description:
        'A 30-minute call with a Path School partnership lead to align on goals, chapter structure, and the right program tier.',
    },
    {
      step: '03',
      color: 'bg-[#e81b87]',
      title: 'Chapter Setup & Training',
      description:
        'We onboard your designated faculty lead, set up the chapter portal, and run a faculty orientation on the curriculum.',
    },
    {
      step: '04',
      color: 'bg-emerald-600',
      title: 'Launch & Grow',
      description:
        'Kick off your first batch! Students register, are placed in tracks, and start building under mentor guidance.',
    },
  ];

  const stats = [
    { value: '40+', label: 'School partners worldwide' },
    { value: '15+', label: 'Countries represented' },
    { value: '2,000+', label: 'Students through chapters' },
    { value: '98%', label: 'School partner retention' },
  ];

  const whyPathSchool = [
    {
      icon: BookOpen,
      title: 'Battle-Tested Curriculum',
      description:
        'Our programs are designed for ages 8–20 and cover AI, coding, entrepreneurship, creative design, and more — no experience required.',
    },
    {
      icon: Users,
      title: 'Mentor-Driven Batches',
      description:
        'Every chapter cohort is supported by a dedicated Path School mentor who provides live feedback and guidance throughout the term.',
    },
    {
      icon: Trophy,
      title: 'Certification & Recognition',
      description:
        'Students earn official Path School certificates on completion. Chapter schools receive co-branded recognition across our network.',
    },
    {
      icon: LayoutGrid,
      title: 'Flexible Chapter Models',
      description:
        "Run chapters as after-school clubs, electives, or integrated coursework. We adapt to your school's schedule and goals.",
    },
    {
      icon: MapPin,
      title: 'Local & Global Presence',
      description:
        'Active chapters across Accra, Lagos, London, Nairobi, and beyond — with cross-chapter events and global student showcases.',
    },
    {
      icon: Handshake,
      title: 'Dedicated Support',
      description:
        'From onboarding to graduation, your school has a dedicated partnership success manager and priority access to our team.',
    },
  ];

  const faqs = [
    {
      q: 'What is a Path School Chapter?',
      a: "A Path School Chapter is a licensed program run within your school, led by a Path School–trained faculty coordinator and a dedicated Path School mentor. It operates under your school's banner while following the Path School curriculum and quality standards.",
    },
    {
      q: 'Does our school need any technical infrastructure to run a chapter?',
      a: 'Minimal requirements — a computer lab or student devices with internet access, and a committed faculty lead. Path School provides all learning materials, mentor support, and the digital chapter portal.',
    },
    {
      q: 'Is there a cost to partner with Path School?',
      a: 'Partnership pricing is tiered based on school size and chapter model. We offer subsidised rates for public schools and NGO-backed institutions. Contact our partnerships team for a tailored proposal.',
    },
    {
      q: 'Can international schools run chapters in languages other than English?',
      a: 'Yes. Path School supports multi-language chapter delivery. Curriculum guides and mentor briefings are available in French, Portuguese, and Arabic, with more languages being added. Speak to our team about your specific needs.',
    },
    {
      q: 'How many students can participate in a chapter?',
      a: 'Chapters can accommodate between 15 and 120 students per term, depending on your tier. Larger cohorts are split into smaller learning batches of 12–15 students each to ensure quality.',
    },
    {
      q: 'What tracks are available for school chapters?',
      a: 'All Path School tracks are available: AI Programming & Training, Launch a Startup, Marketing & Enterprise Sales, and Creative Design. Schools can offer one or multiple tracks per term.',
    },
    {
      q: 'How does certification work for chapter students?',
      a: "Students who complete a chapter batch receive an official Path School completion certificate, co-branded with your school's name. Outstanding students may be nominated for Path School Scholar status and alumni network access.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#fbfbf9] text-[#16082a] selection:bg-[#e81b87] selection:text-white">
      <Header />

      <main className="flex-grow bg-gradient-to-b from-[#f7f1fb]/50 via-white to-[#fbfbf9]">

        {/* ========================================================
            HERO SECTION
           ======================================================== */}
        <section className="relative py-16 sm:py-24 px-6 sm:px-8 border-b border-[#ede4f5]/80 overflow-hidden">

          {/* Subtle background glows */}
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#6c3696]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#e81b87]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative z-10">

            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-serif font-normal text-[#150824] leading-[1.15] tracking-tight mb-6">
              Path for School
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
              Partner with Path School to launch a <strong className="text-[#150824] font-semibold">chapter at your institution</strong>.
              Bring world-class AI, coding, and entrepreneurship education to your students — locally and globally.
            </p>


          </div>
        </section>

        {/* ========================================================
            PARTNERSHIP TIERS
           ======================================================== */}
        <section id="tiers" className="py-16 sm:py-24 bg-white border-y border-gray-200/80 px-6 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#150824] tracking-tight mb-3">
                Partnership Models
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Choose the chapter model that fits your institution's scale and ambitions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {partnershipTiers.map((tier) => {
                const Icon = tier.icon;
                return (
                  <div
                    key={tier.id}
                    className="bg-[#fbfbf9] rounded-2xl border border-gray-200/80 p-8 sm:p-10 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-5">
                        <div className="w-12 h-12 rounded-xl bg-[#6c3696]/10 flex items-center justify-center text-[#6c3696]">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-semibold px-3 py-1 bg-gray-100 text-gray-800 rounded-full">
                          {tier.badge}
                        </span>
                      </div>

                      <h3 className="text-2xl font-serif font-normal text-[#150824] mb-3">
                        {tier.title}
                      </h3>

                      <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        {tier.description}
                      </p>

                      <div className="mb-6 p-4 rounded-xl bg-white border border-gray-100">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Who this is for</h4>
                        <p className="text-xs text-gray-700 leading-relaxed">{tier.eligibility}</p>
                      </div>

                      <div className="space-y-2 mb-8">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">What's Included</h4>
                        {tier.benefits.map((b, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-px" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <a
                      href="#partner"
                      className="inline-flex items-center justify-center gap-1.5 w-full py-3 px-4 rounded-xl border border-[#150824] text-[#150824] hover:bg-[#150824] hover:text-white transition-all text-xs font-semibold uppercase tracking-wider cursor-pointer"
                    >
                      <span>Apply for this model</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            HOW IT WORKS
           ======================================================== */}
        <section id="how-it-works" className="py-16 sm:py-24 px-6 sm:px-8 max-w-5xl mx-auto scroll-mt-10">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#150824] tracking-tight mb-3">
              How a Partnership Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, i) => (
              <div key={i} className="relative">
                <span className={`w-11 h-11 rounded-full ${item.color} text-white font-bold text-sm flex items-center justify-center mb-4`}>
                  {item.step}
                </span>
                <h4 className="text-base font-semibold text-[#150824] mb-2">{item.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Become a Chapter Partner CTA */}
      <div className="py-12 px-6 text-center border-t border-gray-200/70 bg-[#fbfbf9]">
        <a
          href="#partner"
          className="inline-flex items-center gap-2 bg-[#150824] hover:bg-[#6c3696] text-white px-10 py-4 rounded-full text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg cursor-pointer"
        >
          <span>Become a Chapter Partner</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <Footer />
    </div>
  );
}
