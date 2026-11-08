"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  MessageCircle, 
  Check, 
  BookOpen, 
  GraduationCap, 
  FileText, 
  Award, 
  Info,
  Calendar,
  CheckCircle2
} from 'lucide-react';

export default function PrivateTuitionPage() {
  const whatsappNumber = "233505295410"; // Ghana format: 233 + number without leading 0
  
  const [selectedCurriculum, setSelectedCurriculum] = useState('Cambridge (IGCSE / A-Levels)');
  const [selectedSubject, setSelectedSubject] = useState('Mathematics');

  const whatsappMessage = encodeURIComponent(
    `Hello! I'm inquiring about private tutoring for my child in curricular subjects at Path School.\nCurriculum: ${selectedCurriculum}\nSubject: ${selectedSubject}`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const curricularSubjects = [
    {
      category: "Mathematics",
      description: "Foundational to advanced problem solving",
      items: ["Core & Extended Mathematics", "Additional Mathematics", "Pure Mathematics", "Statistics & Probability", "Calculus"]
    },
    {
      category: "Natural Sciences",
      description: "Rigorous scientific concept mastery",
      items: ["Physics (Theory & Practical)", "Chemistry", "Biology", "Integrated Science"]
    },
    {
      category: "Languages & Humanities",
      description: "Analytical reading, writing & critical thinking",
      items: ["English Language", "English Literature", "Economics", "Business Studies", "Geography"]
    },
    {
      category: "Curricula & Exam Boards",
      description: "Syllabus-aligned preparation & past paper drills",
      items: ["Cambridge (Checkpoint, IGCSE, AS/A-Levels)", "International Baccalaureate (IB MYP & DP)", "WASSCE (Ghana & West Africa)", "American Curriculum & SATs"]
    }
  ];

  const benefits = [
    "One-on-one academic instruction strictly tailored to your child's school curriculum and syllabus",
    "Targeted preparation for terminal exams (Cambridge IGCSE, A-Levels, IB, WASSCE, and Checkpoints)",
    "Personalized diagnostic reviews to identify and bridge specific subject gaps and misconceptions",
    "Comprehensive past paper walkthroughs, exam time-management drills, and mark-scheme mastery",
    "Flexible after-school and weekend schedules aligned with your child's school timetable"
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f8f7f4] text-[#16082a]">
      <Header />

      <main className="flex-grow py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Main Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-sm border border-gray-200 flex flex-col gap-10">

            {/* Centered heading spanning full card width */}
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#16082a] leading-tight mb-4 tracking-tight">
                Private Tutoring
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto">
                Dedicated one-on-one academic instruction focused <strong className="text-[#16082a] font-semibold">strictly on school curricular subjects</strong>. We help students conquer challenging subjects, master their school syllabi, and achieve top grades in board examinations.
              </p>
            </div>

            {/* Two-column body */}
            <div className="flex flex-col lg:flex-row gap-12 items-start">

            <div className="flex-1 space-y-6">

              {/* Curricular Scope Callout with Brand Colors */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#f7f1fb] via-[#fbf8fe] to-[#fdf2f8] border border-[#e3d2f2] flex items-start gap-3.5 text-xs sm:text-sm text-[#150824] leading-relaxed shadow-2xs">
                <div className="w-8 h-8 rounded-xl bg-[#6c3696]/10 text-[#6c3696] flex items-center justify-center shrink-0 mt-0.5 border border-[#e3d2f2]/60">
                  <Info className="w-4 h-4" />
                </div>
                <div>
                  <strong className="font-semibold block mb-1 text-[#6c3696]">Academic Curricula Notice:</strong>
                  <span className="text-gray-700">
                    Our private tutoring service is exclusively for standard academic and school curricular subjects (Mathematics, Sciences, English, and Exam Preparation). For our technology, AI, and entrepreneurship tracks, please explore our{' '}
                    <Link href="/enroll" className="font-semibold text-[#6c3696] hover:text-[#e81b87] underline transition-colors">
                      academy batches &rarr;
                    </Link>
                  </span>
                </div>
              </div>

              {/* Core Academic Benefits */}
              <ul className="space-y-3.5 pt-2">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
                    <div className="mt-0.5 bg-purple-50 p-1 rounded-full text-[#6c3696] shrink-0 border border-purple-200">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Quick Curriculum / Subject Picker for WhatsApp */}
              <div className="pt-4 border-t border-gray-100 flex flex-col items-center text-center">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                  Select your child&apos;s curriculum &amp; subject to chat
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 w-full">
                  <div>
                    <label htmlFor="curriculum" className="block text-[11px] font-semibold text-gray-600 mb-1 text-left">
                      Curriculum / Exam Board
                    </label>
                    <select
                      id="curriculum"
                      value={selectedCurriculum}
                      onChange={(e) => setSelectedCurriculum(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#6c3696] transition-all cursor-pointer"
                    >
                      <option value="Cambridge (IGCSE / A-Levels)">Cambridge (IGCSE / A-Levels)</option>
                      <option value="International Baccalaureate (IB)">International Baccalaureate (IB)</option>
                      <option value="WASSCE (Ghana / WAEC)">WASSCE (Ghana / WAEC)</option>
                      <option value="American Curriculum / SATs">American Curriculum / SATs</option>
                      <option value="Primary / Checkpoint">Primary / Checkpoint</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-[11px] font-semibold text-gray-600 mb-1 text-left">
                      Subject
                    </label>
                    <select
                      id="subject"
                      value={selectedSubject}
                      onChange={(e) => setSelectedSubject(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#6c3696] transition-all cursor-pointer"
                    >
                      <option value="Mathematics">Mathematics</option>
                      <option value="Additional Mathematics">Additional Mathematics</option>
                      <option value="Physics">Physics</option>
                      <option value="Chemistry">Chemistry</option>
                      <option value="Biology">Biology</option>
                      <option value="English Language & Literature">English Language &amp; Literature</option>
                      <option value="Economics">Economics</option>
                      <option value="General Science">General Science</option>
                      <option value="General Studies">General Studies</option>
                    </select>
                  </div>
                </div>

                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-8 rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-md hover:-translate-y-0.5 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Inquire on WhatsApp</span>
                </a>
                <p className="text-xs text-gray-400 mt-3 font-semibold uppercase tracking-wider">
                  Academic advisors typically reply within a few minutes.
                </p>
              </div>

            </div>
            
            {/* Right Card with Visual Badge */}
            <div className="w-full lg:w-80 shrink-0 rounded-3xl overflow-hidden shadow-xl relative group border border-gray-100">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/tutoring-hero.jpg')" }}
              ></div>
              
              <div className="relative p-6 flex items-end justify-center min-h-[460px] h-full text-center">
                <div className="rounded-xl px-5 py-4 text-white space-y-1.5 w-full" style={{ background: 'rgba(0,0,0,0.42)', backdropFilter: 'blur(6px)' }}>
                  <h3 className="text-lg font-extrabold text-white">
                    Curricular Subjects
                  </h3>
                  <p className="text-gray-200 font-medium tracking-wide text-xs">
                    School Syllabus &amp; Exam Preparation
                  </p>
                  
                  <div className="pt-3 border-t border-white/20 mt-2 text-[11px] text-white/80 space-y-1">
                    <p>&bull; Cambridge, IB &amp; WASSCE</p>
                    <p>&bull; Math, Sciences &amp; English</p>
                    <p>&bull; One-on-One Personalized Focus</p>
                  </div>
                </div>
              </div>
            </div>

            </div>

          </div>

          {/* Curricular Subjects Breakdown Grid */}
          <div className="pt-4">
            <div className="text-center max-w-xl mx-auto mb-8">
              <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#16082a] tracking-tight mb-2">
                Curricular Subjects &amp; Syllabi Covered
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {curricularSubjects.map((subject, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-2xs hover:shadow-sm transition-all"
                >
                  <h3 className="font-bold text-[#16082a] text-base mb-1">
                    {subject.category}
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">
                    {subject.description}
                  </p>

                  <ul className="space-y-2 text-xs text-gray-700">
                    {subject.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#6c3696] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
