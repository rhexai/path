"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<'programs' | 'about' | 'involved' | null>(null);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileInvolvedOpen, setMobileInvolvedOpen] = useState(false);

  const programs: { name: string; href: string; badge?: string }[] = [
    { name: "AI Agent Programming & Training", href: "/ai-agent-programming" },
    { name: "Launch a Startup", href: "/launch-a-startup" },
    { name: "Marketing & Enterprise Sales", href: "/marketing-enterprise-sales" },
    { name: "Creative Design", href: "/creative-design" },
    { name: "Bootcamps", href: "/events" },
    { name: "Webinars", href: "/events" },
    { name: "Talent Management", href: "/talent-management", badge: "Coming Soon" },
  ];

  const aboutLinks: { name: string; href: string; external?: boolean }[] = [
    { name: "Explore Path", href: "/explore-path" },
    { name: "People", href: "/people" },
    { name: "Partners", href: "/partners" },
    { name: "FAQ", href: "/faq" },
    { name: "Newsletter", href: "/newsletter" },
  ];

  const involvedLinks: { name: string; href: string; external?: boolean }[] = [
    { name: "Launch a Chapter", href: "/path-for-school" },
    {
      name: "Mentor Talents",
      href: `https://wa.me/233505295410?text=${encodeURIComponent("Hello! I'm interested in mentoring talents at Path School.")}`,
      external: true,
    },
    { name: "Partner with Us", href: "/partners" },
    {
      name: "Work at Path",
      href: `https://wa.me/233505295410?text=${encodeURIComponent("Hello! I'm interested in working at Path School and exploring open roles.")}`,
      external: true,
    },
  ];

  return (
    <header className="w-full bg-white z-50 sticky top-0 border-b border-gray-200/80 shadow-2xs">
      <div className="w-full px-6 sm:px-8 lg:px-10 py-3 md:py-3.5 relative flex items-center justify-between md:justify-center">

        {/* Mobile Header: Logo and Toggle */}
        <div className="flex md:hidden items-center justify-between w-full">
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/path-logo.png"
              alt="Path School"
              className="h-9 w-auto object-contain"
            />
          </Link>
          <button
            className="p-2 text-[#16140f] hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Header: 3 Left Links - Centered Logo - 3 Right Links */}
        <nav className="hidden md:flex items-center justify-center gap-4 lg:gap-5 xl:gap-6 text-sm font-medium text-[#150824] tracking-tight font-sans">

          {/* Left Item 1: Our Programs (Dropdown) */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('programs')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              onClick={() => setOpenDropdown(openDropdown === 'programs' ? null : 'programs')}
              className="inline-flex items-center gap-1 hover:text-[#6c3696] transition-colors whitespace-nowrap cursor-pointer py-1 group"
            >
              <span>Our Programs</span>
              <ChevronDown className={`w-3.5 h-3.5 text-gray-400 group-hover:text-[#6c3696] transition-transform duration-200 ${openDropdown === 'programs' ? 'rotate-180 text-[#6c3696]' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            <div className={`absolute top-full left-0 pt-2 z-50 transition-all duration-150 ${openDropdown === 'programs' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none'}`}>
              <div className="w-72 bg-white rounded-xl shadow-xl border border-gray-100/90 py-2 text-sm font-medium text-[#150824] font-sans">
                {programs.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-center justify-between px-4 py-2 hover:bg-[#f7f1fb] hover:text-[#6c3696] transition-colors"
                  >
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="text-[10px] font-semibold bg-[#f0eaf8] text-[#6c3696] px-2 py-0.5 rounded-full border border-[#ded1ee]">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Left Item 2: Private Tuition */}
          <Link href="/private-tuition" className="hover:text-[#6c3696] transition-colors whitespace-nowrap py-1">
            Private Tuition
          </Link>

          {/* Left Item 3: Scholarships */}
          <Link href="/scholarships" className="hover:text-[#6c3696] transition-colors whitespace-nowrap py-1">
            Scholarships
          </Link>

          {/* Logo at the center */}
          <Link href="/" className="flex items-center shrink-0 mx-1.5 lg:mx-2.5 group">
            <img
              src="/path-logo.png"
              alt="Path School"
              className="h-10 md:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Right Item 1: Events */}
          <Link href="/events" className="hover:text-[#6c3696] transition-colors whitespace-nowrap py-1">
            Events
          </Link>

          {/* Right Item 2: Path for Schools */}
          <Link href="/path-for-school" className="hover:text-[#6c3696] transition-colors whitespace-nowrap py-1">
            Path for Schools
          </Link>

          {/* Right Item 3: About Path (Dropdown) */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('about')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              onClick={() => setOpenDropdown(openDropdown === 'about' ? null : 'about')}
              className="inline-flex items-center gap-1 hover:text-[#6c3696] transition-colors whitespace-nowrap cursor-pointer py-1 group"
            >
              <span>About Path</span>
              <ChevronDown className={`w-3.5 h-3.5 text-gray-400 group-hover:text-[#6c3696] transition-transform duration-200 ${openDropdown === 'about' ? 'rotate-180 text-[#6c3696]' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            <div className={`absolute top-full right-0 lg:left-0 pt-2 z-50 transition-all duration-150 ${openDropdown === 'about' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none'}`}>
              <div className="w-52 bg-white rounded-xl shadow-xl border border-gray-100/90 py-2 text-sm font-medium text-[#150824] font-sans">
                {aboutLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-center justify-between px-4 py-2 hover:bg-[#f7f1fb] hover:text-[#6c3696] transition-colors"
                  >
                    <span>{item.name}</span>
                    {item.external && <ExternalLink className="w-3.5 h-3.5 opacity-50" />}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Top Right Corner: Get Involved (Dropdown) & Apply Card */}
        <div className="hidden md:flex items-center gap-3.5 lg:gap-4 absolute right-6 sm:right-8 lg:right-10 top-1/2 -translate-y-1/2 font-sans">
          {/* Dropdown: Get Involved */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('involved')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              onClick={() => setOpenDropdown(openDropdown === 'involved' ? null : 'involved')}
              className="inline-flex items-center gap-1 text-xs font-medium text-[#150824] hover:text-[#6c3696] transition-colors whitespace-nowrap cursor-pointer py-1 group font-sans"
            >
              <span>Get Involved</span>
              <ChevronDown className={`w-3 h-3 text-gray-400 group-hover:text-[#6c3696] transition-transform duration-200 ${openDropdown === 'involved' ? 'rotate-180 text-[#6c3696]' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            <div className={`absolute top-full right-0 pt-2 z-50 transition-all duration-150 ${openDropdown === 'involved' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none'}`}>
              <div className="w-48 bg-white rounded-xl shadow-xl border border-gray-100/90 py-2 text-xs font-medium text-[#150824] font-sans">
                {involvedLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    onClick={() => setOpenDropdown(null)}
                    className="block px-4 py-2 hover:bg-[#f7f1fb] hover:text-[#6c3696] transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/enroll"
            className="bg-[#16140f] hover:bg-[#6c3696] text-white text-[15px] font-serif italic px-5 py-1.5 rounded-full shadow-2xs hover:shadow-xs transition-all whitespace-nowrap"
          >
            Apply
          </Link>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-5 flex flex-col gap-2 shadow-lg animate-in slide-in-from-top-2 max-h-[calc(100dvh-64px)] overflow-y-auto overscroll-contain">
          <nav className="flex flex-col text-[15px] font-medium text-[#150824] font-sans">

            {/* Mobile Our Programs Accordion */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                className="w-full flex items-center justify-between py-2.5 hover:text-[#6c3696] transition-colors cursor-pointer"
              >
                <span>Our Programs</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileProgramsOpen ? 'rotate-180 text-[#6c3696]' : ''}`} />
              </button>
              {mobileProgramsOpen && (
                <div className="pl-3 pb-2 flex flex-col gap-1.5 text-sm text-gray-700 bg-gray-50/80 rounded-lg p-2.5 mb-2">
                  {programs.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="py-1 flex items-center justify-between hover:text-[#6c3696] transition-colors"
                    >
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="text-[10px] font-semibold bg-[#f0eaf8] text-[#6c3696] px-2 py-0.5 rounded-full border border-[#ded1ee]">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/private-tuition"
              onClick={() => setIsMenuOpen(false)}
              className="py-2.5 border-b border-gray-100 hover:text-[#6c3696] transition-colors"
            >
              Private Tuition
            </Link>

            <Link
              href="/scholarships"
              onClick={() => setIsMenuOpen(false)}
              className="py-2.5 border-b border-gray-100 hover:text-[#6c3696] transition-colors"
            >
              Scholarships
            </Link>

            <Link
              href="/events"
              onClick={() => setIsMenuOpen(false)}
              className="py-2.5 border-b border-gray-100 hover:text-[#6c3696] transition-colors"
            >
              Events
            </Link>

            <Link
              href="/path-for-school"
              onClick={() => setIsMenuOpen(false)}
              className="py-2.5 border-b border-gray-100 hover:text-[#6c3696] transition-colors"
            >
              Path for Schools
            </Link>

            {/* Mobile About Path Accordion */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="w-full flex items-center justify-between py-2.5 hover:text-[#6c3696] transition-colors cursor-pointer"
              >
                <span>About Path</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAboutOpen ? 'rotate-180 text-[#6c3696]' : ''}`} />
              </button>
              {mobileAboutOpen && (
                <div className="pl-3 pb-2 flex flex-col gap-1.5 text-sm text-gray-700 bg-gray-50/80 rounded-lg p-2.5 mb-2">
                  {aboutLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      onClick={() => setIsMenuOpen(false)}
                      className="py-1 flex items-center justify-between hover:text-[#6c3696] transition-colors"
                    >
                      <span>{item.name}</span>
                      {item.external && <ExternalLink className="w-3.5 h-3.5 opacity-50" />}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="flex flex-col gap-2 pt-3 border-t border-gray-100">
            {/* Mobile Get Involved Accordion */}
            <div>
              <button
                onClick={() => setMobileInvolvedOpen(!mobileInvolvedOpen)}
                className="w-full flex items-center justify-between py-2 text-xs font-medium text-[#150824] hover:text-[#6c3696] transition-colors cursor-pointer font-sans"
              >
                <span>Get Involved</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileInvolvedOpen ? 'rotate-180 text-[#6c3696]' : ''}`} />
              </button>
              {mobileInvolvedOpen && (
                <div className="pl-3 pb-1 flex flex-col gap-1 text-xs text-gray-700 bg-gray-50/80 rounded-lg p-2 mb-2 font-sans">
                  {involvedLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      onClick={() => setIsMenuOpen(false)}
                      className="py-1 hover:text-[#6c3696] transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/enroll"
              onClick={() => setIsMenuOpen(false)}
              className="text-center bg-[#16140f] hover:bg-[#6c3696] text-white py-2 rounded-full font-serif italic text-base transition-colors shadow-2xs mt-1"
            >
              Apply
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
