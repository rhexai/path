"use client";

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft,
  Sparkles, 
  ExternalLink,
  BookOpen,
  Users,
  Award,
  Globe,
  Briefcase,
  ArrowUpRight
} from 'lucide-react';

export default function Home() {
  const [spotlightIndex, setSpotlightIndex] = React.useState(0);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-[#e81b87] selection:text-white relative">
      
      {/* Fixed Vertical Feedback Button on Left Edge (Screenshot 4) */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-[#595959] text-white text-[11px] font-semibold tracking-wider py-2.5 px-2 rounded-r-md -rotate-90 origin-bottom-left cursor-pointer shadow-md hover:bg-[#404040] transition-colors">
          Feedback
        </div>
      </div>

      <Header />

      <main className="flex-grow">
        
        {/* ========================================================
            SECTION 1: HERO
           ======================================================== */}
        <section className="relative bg-[#150824] text-white overflow-hidden py-20 sm:py-28 lg:py-36 border-b border-purple-950/40 min-h-[580px] lg:min-h-[660px] flex items-center">
          
          {/* Background Image showing through color overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/students-robotics-hd.jpg" 
              alt="Students collaborating on hands-on electronics and robotics projects" 
              className="w-full h-full object-cover object-[center_30%] sm:object-center scale-105"
            />
            {/* Light brand tint allowing the photo colors to shine through vibrantly */}
            <div className="absolute inset-0 bg-[#150824]/30 sm:bg-[#150824]/25"></div>
            {/* Subtle center and edge gradient for text clarity while keeping the scene bright */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#150824]/35 via-transparent to-[#150824]/55 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#150824]/60 via-transparent to-[#150824]/30 pointer-events-none"></div>
          </div>

          {/* Glowing Purple & Magenta Neon Beam / Corner Accent on Top Right */}
          <div className="absolute top-0 right-0 w-[420px] h-[420px] pointer-events-none overflow-hidden z-1">
            {/* The diagonal ray beam matching logo purple and magenta sparkle */}
            <div className="absolute -top-24 right-12 w-6 h-[460px] bg-gradient-to-b from-[#e81b87] via-[#6c3696] to-transparent transform rotate-45 blur-xs opacity-90 shadow-[0_0_40px_rgba(232,27,135,0.4)]"></div>
            <div className="absolute -top-20 right-16 w-32 h-[460px] bg-gradient-to-b from-[#6c3696]/40 via-[#e81b87]/20 to-transparent transform rotate-45 blur-2xl pointer-events-none"></div>
          </div>

          <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10 w-full flex flex-col items-center text-center">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
              <h1 className="text-3xl sm:text-5xl lg:text-[60px] xl:text-[66px] font-serif font-normal sm:font-medium tracking-tight leading-[1.15] text-white mb-6 max-w-4xl text-center drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
                Incubator-academy for <br className="hidden sm:inline" /><span className="italic">ambitious young talents</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed max-w-2xl mb-10 font-normal mx-auto text-center drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
                A new kind of education for a new kind of world. Through hands-on learning, real-world projects, and entrepreneurial thinking, students move beyond asking &ldquo;What if?&rdquo; to building what comes next.
              </p>

              {/* Hero CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
                <Link 
                  href="/explore-path"
                  className="font-serif inline-flex items-center justify-center gap-2.5 bg-white text-[#150824] hover:bg-gray-100 px-7 sm:px-8 py-3.5 rounded-full font-medium text-base tracking-normal shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer group"
                >
                  <span className="italic">Explore Path School</span>
                  <ArrowUpRight className="w-4 h-4 text-[#150824] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <Link 
                  href="/enroll"
                  className="font-serif inline-flex items-center justify-center gap-2 border border-white/30 backdrop-blur-sm bg-white/5 text-white hover:bg-white/15 hover:border-white/50 px-7 py-3.5 rounded-full font-medium text-base tracking-normal transition-all cursor-pointer"
                >
                  <span>Apply Now</span>
                </Link>
              </div>
            </div>
          </div>
        </section>


        {/* ========================================================
            SECTION 2: DUAL CARD SPOTLIGHT (Screenshot 2)
           ======================================================== */}
        <section className="py-16 md:py-24 bg-[#f6f5f2]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              
              {/* Left Card: 3D Turning Spotlight Card */}
              <div className="relative [perspective:1400px] min-h-[440px] sm:min-h-[480px] lg:min-h-full">
                
                {/* 3D Rotating Flipper */}
                <div 
                  className={`w-full h-full min-h-[440px] sm:min-h-[480px] lg:min-h-full relative transition-transform duration-700 ease-in-out [transform-style:preserve-3d] ${
                    spotlightIndex === 1 ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
                  }`}
                >
                  
                  {/* Front Face (Side 1: Manifesto) */}
                  <div className="absolute inset-0 w-full h-full rounded-[28px] overflow-hidden p-6 sm:p-8 md:p-12 flex flex-col justify-between text-white bg-black shadow-md [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
                    {/* Background Image without Color Tint */}
                    <div className="absolute inset-0 z-0">
                      <img 
                        src="/vr-builder.jpg" 
                        alt="Student exploring technology and virtual worlds" 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Top spacer */}
                    <div className="relative z-10"></div>

                    {/* Bottom Content */}
                    <div className="relative z-10 pt-20 sm:pt-36">
                      <h3 className="text-xl sm:text-3xl lg:text-[34px] font-serif font-normal text-white mb-6 tracking-tight leading-snug drop-shadow-sm">
                        For curious minds.<br />
                        For ambitious builders.<br />
                        For the next generation of creators.
                      </h3>

                      <div>
                        <Link 
                          href="/enroll"
                          className="inline-block bg-white text-[#092635] hover:bg-gray-100 px-7 py-3 rounded-full font-serif italic text-sm transition-colors shadow-md hover:shadow-lg"
                        >
                          Enrollment
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Back Face (Side 2: Student Spotlight) */}
                  <div className="absolute inset-0 w-full h-full rounded-[28px] overflow-hidden bg-black shadow-md [transform:rotateY(180deg)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
                    <img 
                      src="/student-smiling-campus.jpg" 
                      alt="Young student smiling outdoors on campus" 
                      className="w-full h-full object-cover object-[30%_20%] group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Subtle dark tint for text contrast while keeping photo vibrant */}
                    <div className="absolute inset-0 bg-black/45 pointer-events-none"></div>

                    {/* Centered Text */}
                    <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10 md:p-12 text-center z-10 pointer-events-none">
                      <p className="font-serif font-normal sm:font-medium text-white text-lg sm:text-2xl lg:text-[26px] leading-relaxed tracking-tight max-w-md drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                        Our talents explore fields that are changing the world, learn from people working in those areas and apply what they learn through practical projects.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Column: White Card with AI Standard + List Items */}
              <div className="flex flex-col justify-between gap-6">
                
                {/* Top Rounded Card */}
                <div className="bg-white rounded-[28px] p-6 sm:p-8 md:p-10 border border-gray-300 shadow-xs flex flex-col justify-between">
                  <div>
                    {/* Badges */}
                    <div className="flex items-center gap-2.5 sm:gap-3 mb-6 flex-wrap">
                      <span className="border border-gray-300 text-gray-800 text-xs font-semibold px-4 py-1.5 rounded-full inline-flex items-center justify-center text-center whitespace-nowrap">
                        Ages 8–20
                      </span>
                      <span className="border border-gray-300 text-gray-800 text-xs font-semibold px-4 py-1.5 rounded-full inline-flex items-center justify-center text-center whitespace-nowrap">
                        Hands-on AI & Robotics
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#150824] mb-4 leading-tight tracking-tight">
                      Path School is a learning community for curious young people who want to understand the world, explore new possibilities and create things that make a difference.
                    </h3>
                    
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                      AI, Robotics, Research, Blockchain, Fintech, Future of Work, Hardware, Renewable Energy, etc
                    </p>
                  </div>

                  {/* Brand Purple Pill Button */}
                  <div>
                    <Link 
                      href="/explore-path"
                      className="inline-block bg-[#6c3696] hover:bg-[#58267d] text-white px-7 py-3 rounded-full font-bold text-xs tracking-wider uppercase transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>

                {/* Bottom List Items (Screenshot 2) */}
                <div className="bg-transparent flex flex-col">
                  
                  {/* Item 1 */}
                  <Link 
                    href="/ai-agent-programming" 
                    className="pt-4 pb-4 border-t border-gray-300 flex items-center justify-between group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="border border-gray-300 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full inline-flex items-center justify-center text-center whitespace-nowrap">
                          Program
                        </span>
                        <span className="border border-gray-300 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full inline-flex items-center justify-center text-center whitespace-nowrap">
                          Hands-on
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-bold text-[#150824] group-hover:text-[#6c3696] transition-colors">
                        AI Agent Programming, Robotics &amp; Autonomous Systems
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-[#6c3696] group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                  </Link>

                  {/* Item 2 */}
                  <Link 
                    href="/launch-a-startup" 
                    className="pt-4 pb-4 border-t border-gray-300 flex items-center justify-between group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="border border-gray-300 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full inline-flex items-center justify-center text-center whitespace-nowrap">
                          Incubator
                        </span>
                        <span className="border border-gray-300 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full inline-flex items-center justify-center text-center whitespace-nowrap">
                          Venture Track
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-bold text-[#150824] group-hover:text-[#6c3696] transition-colors">
                        From Idea to Launch: Building Real Products That People Actually Use
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-[#6c3696] group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                  </Link>

                  {/* Carousel Arrows on Bottom Right */}
                  <div className="flex items-center justify-end gap-3 pt-4">
                    <button 
                      onClick={() => setSpotlightIndex((prev) => (prev === 0 ? 1 : 0))}
                      aria-label="Previous card side" 
                      className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center text-gray-500 hover:border-gray-800 hover:text-black transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => setSpotlightIndex((prev) => (prev === 0 ? 1 : 0))}
                      aria-label="Next card side" 
                      className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center text-gray-500 hover:border-gray-800 hover:text-black transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ========================================================
            SECTION 3: PROJECT MANAGE YOUR BUSINESS BANNER & COMMUNITY TEXT (Screenshot 3 & Screenshot 8)
           ======================================================== */}
        <section className="py-12 md:py-16 bg-[#f6f5f2]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            
            {/* Full-Width Rounded Container (Screenshot 3) */}
            <div className="relative rounded-[28px] overflow-hidden bg-white border border-gray-200/80 text-[#16082a] shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[340px] sm:min-h-[380px]">
                
                {/* Left Content */}
                <div className="lg:col-span-7 p-6 sm:p-10 md:p-16 flex flex-col justify-center z-10">
                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#16082a] tracking-tight leading-[1.15] mb-4">
                    You want the best possible opportunities for your child. So do we.
                  </h2>
                  <p className="text-sm sm:text-lg md:text-xl text-gray-600 font-normal mb-8 max-w-lg leading-relaxed">
                    Practical experiences that introduce your child to new skills and ideas.
                  </p>
                  <div>
                    <Link 
                      href="/explore-path"
                      className="inline-flex items-center justify-center gap-2.5 bg-[#150824] text-white hover:bg-[#2b104c] px-7 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-colors shadow-md w-full sm:w-auto"
                    >
                      <span>Explore Path</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Right Image Container */}
                <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto overflow-hidden">
                  <img 
                    src="/path-young-coder.jpg" 
                    alt="Young Path School student smiling at computer workstation" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>

              </div>
            </div>

          </div>
        </section>


        {/* ========================================================
            SECTION 5: THREE HORIZONTAL ROWS & CERTIFICATIONS TICKER (Screenshot 7)
           ======================================================== */}
        <section className="py-16 md:py-24 bg-[#f6f5f2]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            
            <div className="flex flex-col">
              
              {/* Row 1: A community of builders */}
              <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4">
                  <h3 className="font-serif font-normal text-2xl sm:text-3xl md:text-[32px] text-[#16082a] tracking-tight leading-snug">
                    A community of builders
                  </h3>
                </div>
                
                <div className="md:col-span-4 flex flex-col gap-4">
                  <p className="text-[#3b2d54] text-sm sm:text-base leading-relaxed font-normal">
                    Join a network of ambitious young creators, engineers, and mentors collaborating on practical projects, sharing knowledge, and building together.
                  </p>
                  <div>
                    <Link 
                      href="/explore-path"
                      className="font-serif inline-flex items-center gap-1 text-xs sm:text-sm font-normal text-[#16082a] hover:text-[#6c3696] transition-colors group"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="w-3 h-3 text-[#16082a] group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>

                <div className="md:col-span-4 flex justify-center sm:justify-start md:justify-end">
                  <div className="w-full max-w-full sm:max-w-[340px] h-52 sm:h-48 rounded-[20px] overflow-hidden shadow-lg border border-gray-200">
                    <img 
                      src="/path-connect-network.jpg" 
                      alt="A community of builders at Path School events" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                </div>
              </div>

              {/* Divider 1 */}
              <div className="h-[1px] bg-[#dfd9ce] w-full"></div>

              {/* Row 2: Work worth sharing */}
              <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4">
                  <h3 className="font-serif font-normal text-2xl sm:text-3xl md:text-[32px] text-[#16082a] tracking-tight leading-snug">
                    Work worth sharing
                  </h3>
                </div>
                
                <div className="md:col-span-4 flex flex-col gap-4">
                  <p className="text-[#3b2d54] text-sm sm:text-base leading-relaxed font-normal">
                    Go beyond theoretical exercises by creating functional apps, robotics prototypes, and digital products you are proud to showcase to the world.
                  </p>
                  <div>
                    <Link 
                      href="/explore-path"
                      className="font-serif inline-flex items-center gap-1 text-xs sm:text-sm font-normal text-[#16082a] hover:text-[#6c3696] transition-colors group"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="w-3 h-3 text-[#16082a] group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>

                <div className="md:col-span-4 flex justify-center sm:justify-start md:justify-end">
                  <div className="w-full max-w-full sm:max-w-[340px] h-52 sm:h-48 rounded-[20px] overflow-hidden shadow-lg border border-gray-200">
                    <img 
                      src="/path-give-back.jpg" 
                      alt="Work worth sharing through mentorship and community education" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                </div>
              </div>

              {/* Divider 2 */}
              <div className="h-[1px] bg-[#dfd9ce] w-full"></div>

              {/* Row 3: A world of possibilities */}
              <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4">
                  <h3 className="font-serif font-normal text-2xl sm:text-3xl md:text-[32px] text-[#16082a] tracking-tight leading-snug">
                    A world of possibilities
                  </h3>
                </div>
                
                <div className="md:col-span-4 flex flex-col gap-4">
                  <p className="text-[#3b2d54] text-sm sm:text-base leading-relaxed font-normal">
                    Explore emerging technologies from artificial intelligence to autonomous systems, unlocking new pathways and opportunities for the future.
                  </p>
                  <div>
                    <Link 
                      href="/explore-path"
                      className="font-serif inline-flex items-center gap-1 text-xs sm:text-sm font-normal text-[#16082a] hover:text-[#6c3696] transition-colors group"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="w-3 h-3 text-[#16082a] group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>

                <div className="md:col-span-4 flex justify-center sm:justify-start md:justify-end">
                  <div className="w-full max-w-full sm:max-w-[340px] h-52 sm:h-48 rounded-[20px] overflow-hidden shadow-lg border border-gray-200">
                    <img 
                      src="/path-level-up.jpg" 
                      alt="A world of possibilities with hands-on coding workshops" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================
            SECTION: BUILDING REAL PRODUCTS THAT PEOPLE USE
           ======================================================== */}
        <section className="bg-white py-20 sm:py-28 border-t border-gray-200/80">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Narrative Content */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-5xl text-[#150824] tracking-tight leading-[1.15] mb-6">
                  Build real products that <br className="hidden sm:inline" />
                  <span className="italic">people actually use</span>.
                </h2>

                <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light mb-8 max-w-xl">
                  At Path School, education isn&apos;t theoretical. Students move beyond isolated coding exercises and hypothetical slide decks to build, launch, and operate production-grade software, hardware, and services that solve genuine problems, process live transactions, and serve real customers.
                </p>

                <div>
                  <Link 
                    href="/enroll"
                    className="inline-flex items-center gap-2 bg-[#150824] hover:bg-[#6c3696] text-white px-8 py-3.5 rounded-full font-serif italic text-base transition-all shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <span>Start Building</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Showcase */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-200/80 bg-gray-100 group">
                  <img 
                    src="/real-world-products.jpg" 
                    alt="Customer using contactless mobile phone payment at checkout terminal" 
                    className="w-full h-full object-cover aspect-[4/3] sm:aspect-[16/11] group-hover:scale-102 transition-transform duration-700" 
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION: APPLY CTA (Y Combinator Style)
           ======================================================== */}
        <section className="bg-[#fcfaf7] pt-20 pb-12 sm:pt-28 sm:pb-16 border-t border-gray-100/80 overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
            <h2 className="font-serif italic font-normal text-3xl sm:text-4xl lg:text-5xl leading-[1.15] text-[#16140f] tracking-tight mb-4">
              It&apos;s never too early to apply.
            </h2>
            <p className="font-sans font-light text-sm sm:text-base text-[#16140f] max-w-xl mx-auto mb-8">
              We fund companies with no revenue, product, or fully baked idea.
            </p>
            <Link 
              href="/enroll"
              className="inline-flex items-center justify-center rounded-full bg-[#16140f] hover:bg-[#6c3696] text-white px-11 py-3.5 font-serif italic text-2xl transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              Apply
            </Link>
          </div>

          {/* 5-Photo Strip */}
          <div className="mt-12 sm:mt-20 px-3 sm:px-6 max-w-[1500px] mx-auto">
            <div className="flex sm:grid sm:grid-cols-5 gap-3 sm:gap-3.5 md:gap-4 overflow-x-auto sm:overflow-visible pb-3 sm:pb-0 snap-x no-scrollbar -mx-3 sm:mx-0 px-3 sm:px-0">
              
              {/* 1: Robotics */}
              <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-square bg-[#091522] shadow-2xs min-w-[140px] sm:min-w-0 flex-1 shrink-0 snap-center">
                <img 
                  src="/yc-strip/strip-1.jpg" 
                  alt="Autonomous quadruped robot dog" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/45 transition-colors duration-300 pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center p-2.5 sm:p-4 z-10 pointer-events-none text-center">
                  <span className="font-serif font-medium sm:font-semibold text-white text-xs sm:text-base md:text-lg lg:text-xl tracking-tight leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] block group-hover:scale-105 transition-transform duration-300">
                    Robotics
                  </span>
                </div>
              </div>

              {/* 2: Blockchain */}
              <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-square bg-[#091522] shadow-2xs min-w-[140px] sm:min-w-0 flex-1 shrink-0 snap-center">
                <img 
                  src="/yc-strip/strip-2.jpg" 
                  alt="Fintech and cryptocurrency technology" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/45 transition-colors duration-300 pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center p-2.5 sm:p-4 z-10 pointer-events-none text-center">
                  <span className="font-serif font-medium sm:font-semibold text-white text-xs sm:text-base md:text-lg lg:text-xl tracking-tight leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] block group-hover:scale-105 transition-transform duration-300">
                    Blockchain
                  </span>
                </div>
              </div>

              {/* 3: Autonomy */}
              <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-square bg-[#091522] shadow-2xs min-w-[140px] sm:min-w-0 flex-1 shrink-0 snap-center">
                <img 
                  src="/yc-strip/strip-3.jpg" 
                  alt="Autonomous delivery rover vehicle" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/45 transition-colors duration-300 pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center p-2.5 sm:p-4 z-10 pointer-events-none text-center">
                  <span className="font-serif font-medium sm:font-semibold text-white text-xs sm:text-base md:text-lg lg:text-xl tracking-tight leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] block group-hover:scale-105 transition-transform duration-300">
                    Autonomy
                  </span>
                </div>
              </div>

              {/* 4: Fintech */}
              <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-square bg-[#091522] shadow-2xs min-w-[140px] sm:min-w-0 flex-1 shrink-0 snap-center">
                <img 
                  src="/yc-strip/strip-4.jpg" 
                  alt="Mobile commerce and digital payments" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/45 transition-colors duration-300 pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center p-2.5 sm:p-4 z-10 pointer-events-none text-center">
                  <span className="font-serif font-medium sm:font-semibold text-white text-xs sm:text-base md:text-lg lg:text-xl tracking-tight leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] block group-hover:scale-105 transition-transform duration-300">
                    Fintech
                  </span>
                </div>
              </div>

              {/* 5: Creative Design */}
              <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-square bg-[#091522] shadow-2xs min-w-[140px] sm:min-w-0 flex-1 shrink-0 snap-center">
                <img 
                  src="/yc-strip/strip-5.jpg" 
                  alt="Creative design and media production on laptop" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/45 transition-colors duration-300 pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center p-2.5 sm:p-4 z-10 pointer-events-none text-center">
                  <span className="font-serif font-medium sm:font-semibold text-white text-xs sm:text-base md:text-lg lg:text-xl tracking-tight leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] block group-hover:scale-105 transition-transform duration-300">
                    Creative Design
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
