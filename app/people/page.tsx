"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Globe, ArrowUpRight } from 'lucide-react';

const team = [
  {
    name: 'George Aleesu',
    role: 'President & CEO',
    location: 'Accra, Ghana',
    bio: 'Serial entrepreneur and builder. Previously founded two ed-tech ventures backed by Y Combinator and Founders Factory Africa.',
    avatar: '/george-aleesu.jpg',
    initials: 'GA',
    color: 'bg-[#6c3696]',
  },
  {
    name: 'Joshua Kpatson',
    role: 'General Partner & Head of Creative Design',
    location: 'Accra, Ghana',
    bio: 'General Partner and Head of Creative Design. Leads creative direction, product design systems, and visual identity across Path School programs.',
    avatar: '/joshua-kpatson.png',
    initials: 'JK',
    color: 'bg-[#e81b87]',
  },
  {
    name: 'Josh Teye Otchie',
    role: 'General Partner & Director of Operations',
    location: 'Accra, Ghana',
    bio: 'General Partner and Director of Operations. Oversees program delivery, operational strategy, and chapter expansion across Path School.',
    avatar: '/josh-teye-otchie.jpg',
    initials: 'JO',
    color: 'bg-[#150824]',
  },
  {
    name: 'Appiah Gifty',
    role: 'Chief of Staff',
    location: 'Accra, Ghana',
    bio: 'Chief of Staff. Leads executive initiatives, strategic operations, and cross-functional project execution across Path School.',
    avatar: '/appiah-gifty.jpg',
    initials: 'AG',
    color: 'bg-emerald-600',
  },
  {
    name: 'Richmond Sallah',
    role: 'Director of Finance',
    location: 'Accra, Ghana',
    bio: 'Director of Finance. Manages financial strategy, capital allocation, budget management, and fiscal governance across Path School.',
    avatar: '/richmond-sallah.jpg',
    initials: 'RS',
    color: 'bg-amber-600',
  },
  {
    name: 'Caleb Kpatson',
    role: 'Director of Enrollment & Programs',
    location: 'Accra, Ghana',
    bio: 'Director of Enrollment & Programs. Leads admissions, cohort enrollment pipelines, and academic program delivery across Path School.',
    avatar: null,
    initials: 'CK',
    color: 'bg-[#6c3696]',
  },
  {
    name: 'Sandra Anyomi',
    role: 'Program Coordinator',
    location: 'Accra, Ghana',
    bio: 'Program Coordinator. Coordinates cohort operations, student onboarding, schedule management, and learner engagement across Path School programs.',
    avatar: null,
    initials: 'SA',
    color: 'bg-[#e81b87]',
  },
  {
    name: 'Eric Nartey',
    role: 'Instructor, AI & Robotics',
    location: 'Accra, Ghana',
    bio: 'Instructor, AI & Robotics. Mentors and guides student builders through hands-on AI model development, robotics engineering, and hardware-software integration.',
    avatar: null,
    initials: 'EN',
    color: 'bg-[#150824]',
  },
];

const advisors = [
  {
    name: 'Mr. Abe Worwui',
    role: 'Founder & CEO',
    affiliation: 'Dynaspace International',
    avatar: '/abe-worwui.jpg',
    initials: 'AW',
    color: 'bg-[#150824]',
  },
  {
    name: 'Olasunkanmi (Sunday) Arowolo',
    role: 'Lecturer, Lagos State University',
    affiliation: 'Founder, Research Africa Publications',
    avatar: '/olasunkanmi-arowolo.jpg',
    initials: 'OA',
    color: 'bg-[#6c3696]',
  },
  {
    name: 'Dr. A. Kayode Coker',
    role: 'Honorary Research Fellow, Univ. of Wolverhampton',
    affiliation: 'Ex-Engineering Coordinator, Saudi Aramco Shell',
    avatar: '/kayode-coker.jpg',
    initials: 'KC',
    color: 'bg-[#150824]',
  },
];

export default function PeoplePage() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [imgError, setImgError] = useState<Record<number, boolean>>({});

  const toggleBio = (i: number) => {
    setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <div className="min-h-screen flex flex-col font-serif bg-[#fbfbf9] text-[#16082a] selection:bg-[#e81b87] selection:text-white">
      <Header />

      <main className="flex-grow">


        {/* Team Grid */}
        <section className="py-12 sm:py-20 lg:py-24 px-4 sm:px-8 max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#150824] tracking-tight">Team</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-start">
            {team.map((person, i) => {
              const isExpanded = !!expanded[i];
              const hasImgError = !!imgError[i];
              return (
                <div key={i} className="bg-white rounded-2xl border border-gray-200/80 p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all text-center flex flex-col justify-between">
                  <div>
                    {person.avatar && !hasImgError ? (
                      <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-5 rounded-full overflow-hidden border-2 border-gray-200/80 shadow-md">
                        <img
                          src={person.avatar}
                          alt={person.name}
                          onError={() => setImgError((prev) => ({ ...prev, [i]: true }))}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    ) : (
                      <div className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full ${person.color} text-white flex items-center justify-center text-3xl font-bold mx-auto mb-4 sm:mb-5 font-serif shadow-md`}>
                        {person.initials}
                      </div>
                    )}
                    <h3 className="text-sm font-semibold text-[#150824] mb-0.5 font-serif">{person.name}</h3>
                    <p className="text-xs font-medium text-[#6c3696] mb-1 font-serif">{person.role}</p>
                    <div className="flex items-center justify-center gap-1 text-xs text-gray-400 mb-3 font-serif">
                      <Globe className="w-3 h-3" />
                      <span>{person.location}</span>
                    </div>

                    <button
                      onClick={() => toggleBio(i)}
                      className="text-xs font-semibold text-[#6c3696] hover:text-[#522973] hover:underline cursor-pointer inline-flex items-center gap-1 font-sans py-1.5 px-3 rounded-full hover:bg-purple-50 transition-colors"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Show less ↑' : 'Learn more →'}</span>
                    </button>

                    {isExpanded && (
                      <p className="text-xs text-gray-600 leading-relaxed font-serif mt-3 pt-3 border-t border-gray-100 animate-in fade-in duration-200 text-left sm:text-center">
                        {person.bio}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Advisors */}
        <section className="py-12 sm:py-20 bg-white border-y border-gray-200/80 px-4 sm:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
              <h2 className="text-3xl font-serif font-normal text-[#150824] tracking-tight mb-2 sm:mb-3">Advisors</h2>
              <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">Seasoned leaders guiding Path School's strategic direction and academic standards.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 max-w-3xl mx-auto">
              {advisors.map((a, i) => (
                <div key={i} className="text-center p-4 rounded-xl bg-gray-50/50 sm:bg-transparent">
                  {a.avatar ? (
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-gray-200/80 shadow-md mx-auto mb-4">
                      <img
                        src={a.avatar}
                        alt={a.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  ) : (
                    <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full ${a.color} text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4 font-serif shadow-md`}>
                      {a.initials}
                    </div>
                  )}
                  <p className="text-sm sm:text-base font-bold text-[#150824]">{a.name}</p>
                  <p className="text-xs text-[#6c3696] font-semibold mt-0.5 leading-snug">{a.role}</p>
                  <p className="text-xs text-gray-500 mt-1 leading-snug">{a.affiliation}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-14 sm:py-20 px-4 sm:px-8 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-[#150824] tracking-tight mb-3 sm:mb-4">
            Join the Team
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto">
            We are always looking for passionate educators, engineers, mentors, and operators who believe in the next generation of builders. Explore open roles or reach out directly.
          </p>
          <a
            href="mailto:careers@pathschool.io?subject=Joining%20the%20Path%20School%20Team"
            className="inline-flex items-center justify-center gap-2 bg-[#150824] hover:bg-[#2b104c] active:scale-[0.98] text-white px-7 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg w-full sm:w-auto"
          >
            <span>Work at Path School</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </section>

      </main>

      <Footer />
    </div>
  );
}

