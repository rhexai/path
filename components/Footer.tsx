import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#f6f5f2]">
      {/* Decorative brand gradient divider rule */}
      <div className="h-[3px] bg-gradient-to-r from-[#6c3696] via-[#e81b87] to-[#6c3696] w-full"></div>

      {/* Main Multi-Column Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-16 bg-[#f6f5f2]">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-12 sm:mb-16 text-xs">
          
          {/* Column 1: Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-[#16082a] text-sm mb-1">Quick Links</h4>
            <Link href="/enroll" className="text-gray-700 hover:text-[#6c3696] transition-colors">Enroll Now</Link>
            <Link href="/events" className="text-gray-700 hover:text-[#6c3696] transition-colors">Events</Link>
            <Link href="/events" className="text-gray-700 hover:text-[#6c3696] transition-colors">Webinars</Link>
            <Link href="/scholarships" className="text-gray-700 hover:text-[#6c3696] transition-colors">Scholarships</Link>
            <Link href="/newsletter" className="text-gray-700 hover:text-[#6c3696] transition-colors">Newsletter</Link>
            <Link href="/faq" className="text-gray-700 hover:text-[#6c3696] transition-colors">FAQ</Link>
          </div>

          {/* Column 2: Our Programs */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-[#16082a] text-sm mb-1">Our Programs</h4>
            <Link href="/ai-agent-programming" className="text-gray-700 hover:text-[#6c3696] transition-colors leading-relaxed">
              AI Agent Programming & Training
            </Link>
            <Link href="/launch-a-startup" className="text-gray-700 hover:text-[#6c3696] transition-colors leading-relaxed">
              Launch a Startup
            </Link>
            <Link href="/marketing-enterprise-sales" className="text-gray-700 hover:text-[#6c3696] transition-colors leading-relaxed">
              Marketing & Enterprise Sales
            </Link>
            <Link href="/creative-design" className="text-gray-700 hover:text-[#6c3696] transition-colors leading-relaxed">
              Creative Design
            </Link>
            <Link href="/private-tuition" className="text-gray-700 hover:text-[#6c3696] transition-colors">
              Private Tuition
            </Link>
            <Link href="/talent-management" className="text-gray-700 hover:text-[#6c3696] transition-colors">
              Talent Management
            </Link>
          </div>

          {/* Column 3: School & Chapters */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-[#16082a] text-sm mb-1">Schools & Chapters</h4>
            <Link href="/path-for-school" className="text-gray-700 hover:text-[#6c3696] transition-colors">Path for School</Link>
            <Link href="/path-for-school#tiers" className="text-gray-700 hover:text-[#6c3696] transition-colors">Partnership Models</Link>
            <Link href="/path-for-school#how-it-works" className="text-gray-700 hover:text-[#6c3696] transition-colors">How It Works</Link>
            <Link href="/path-for-school#partner" className="text-gray-700 hover:text-[#6c3696] transition-colors">Become a Partner</Link>
            <Link href="/scholarships" className="text-gray-700 hover:text-[#6c3696] transition-colors">Student Scholarships</Link>
          </div>

          {/* Column 4: Community */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-[#16082a] text-sm mb-1">Community</h4>
            <Link href="/events" className="text-gray-700 hover:text-[#6c3696] transition-colors">Upcoming Events</Link>
            <Link href="/newsletter" className="text-gray-700 hover:text-[#6c3696] transition-colors">Newsletter</Link>
            <Link href="/events" className="text-gray-700 hover:text-[#6c3696] transition-colors">Demo Days</Link>
            <Link href="/events" className="text-gray-700 hover:text-[#6c3696] transition-colors">Hackathons</Link>
          </div>

          {/* Column 5: Partner with Path */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-[#16082a] text-sm mb-1">Partner with Path</h4>
            <Link href="/partners" className="text-gray-700 hover:text-[#6c3696] transition-colors">All Partners</Link>
            <Link href="/partners#become-partner" className="text-gray-700 hover:text-[#6c3696] transition-colors">Corporate Partners</Link>
            <Link href="/path-for-school" className="text-gray-700 hover:text-[#6c3696] transition-colors leading-relaxed">School & Academic Partners</Link>
            <Link href="/partners#become-partner" className="text-gray-700 hover:text-[#6c3696] transition-colors">NGO & Foundation Partners</Link>
          </div>

          {/* Column 6: Organization */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-[#16082a] text-sm mb-1">Organization</h4>
            <Link href="/" className="text-gray-700 hover:text-[#6c3696] transition-colors">Our Mission & Vision</Link>
            <Link href="/people" className="text-gray-700 hover:text-[#6c3696] transition-colors">Our Leadership</Link>
            <Link href="/people" className="text-gray-700 hover:text-[#6c3696] transition-colors">Our Team</Link>
            <Link href="/faq" className="text-gray-700 hover:text-[#6c3696] transition-colors">FAQ</Link>
            <Link href="mailto:press@pathschool.io" className="text-gray-700 hover:text-[#6c3696] transition-colors">Press & Media</Link>
            <Link href="mailto:careers@pathschool.io" className="text-gray-700 hover:text-[#6c3696] transition-colors">Careers</Link>
          </div>

          {/* Column 7: Support & Logos */}
          <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
            <div>
              <h4 className="font-bold text-[#16082a] text-sm mb-1">Support</h4>
              <Link href="mailto:hello@pathschool.io" className="text-gray-700 hover:text-[#6c3696] transition-colors block mb-1">Contact Us</Link>
              <Link href="/faq" className="text-gray-700 hover:text-[#6c3696] transition-colors block mb-1">FAQ</Link>
              <Link href="/scholarships" className="text-gray-700 hover:text-[#6c3696] transition-colors block">Scholarships</Link>
            </div>

            {/* Official Path School Brand Mark */}
            <div className="pt-2 border-t border-[#dfd9ce]">
              <Link href="/" className="inline-block mb-4">
                <img 
                  src="/path-logo.png" 
                  alt="Path School" 
                  className="h-10 md:h-12 w-auto object-contain" 
                />
              </Link>

              {/* Stay Connected */}
              <span className="font-bold text-[#16082a] text-xs block mb-1">Stay Connected</span>
              <span className="text-[11px] text-gray-500 block mb-2 font-medium">@visitpathschool</span>
              <div className="flex flex-wrap gap-2">
                {/* YouTube */}
                <a 
                  href="https://youtube.com/@visitpathschool" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="YouTube @visitpathschool"
                  className="w-7 h-7 bg-[#16082a] text-white rounded-full flex items-center justify-center hover:bg-[#e81b87] transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd">
                    <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77 1.56.42 7.81.42 7.81.42s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77.42-1.56.42-4.81.42-4.81s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a 
                  href="https://instagram.com/visitpathschool" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram @visitpathschool"
                  className="w-7 h-7 bg-[#16082a] text-white rounded-full flex items-center justify-center hover:bg-[#e81b87] transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><circle cx="17.5" cy="6.5" r="1"></circle></svg>
                </a>

                {/* X (formerly Twitter) */}
                <a 
                  href="https://x.com/visitpathschool" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="X (Twitter) @visitpathschool"
                  className="w-7 h-7 bg-[#16082a] text-white rounded-full flex items-center justify-center hover:bg-[#e81b87] transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com/company/visitpathschool" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn @visitpathschool"
                  className="w-7 h-7 bg-[#16082a] text-white rounded-full flex items-center justify-center hover:bg-[#e81b87] transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>

                {/* TikTok */}
                <a 
                  href="https://tiktok.com/@visitpathschool" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="TikTok @visitpathschool"
                  className="w-7 h-7 bg-[#16082a] text-white rounded-full flex items-center justify-center hover:bg-[#e81b87] transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a 
                  href="https://facebook.com/visitpathschool" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook @visitpathschool"
                  className="w-7 h-7 bg-[#16082a] text-white rounded-full flex items-center justify-center hover:bg-[#e81b87] transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Row */}
        <div className="pt-8 border-t border-[#dfd9ce] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <div className="flex flex-wrap gap-4 md:gap-6">
            <Link href="#" className="hover:text-[#16082a] transition-colors">Accessibility</Link>
            <Link href="#" className="hover:text-[#16082a] transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-[#16082a] transition-colors">Sitemap</Link>
            <Link href="#" className="hover:text-[#16082a] transition-colors">Terms of use</Link>
            <Link href="#" className="hover:text-[#16082a] transition-colors">Purchasing Terms</Link>
            <Link href="#" className="hover:text-[#16082a] transition-colors">Advertising & Sponsorship</Link>
          </div>
          <p>© 2026 Path School (Gablecorp). All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}


