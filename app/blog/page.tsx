"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Sparkles, ArrowUpRight, ArrowRight, Clock, Tag } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  initials: string;
  color: string;
  featured?: boolean;
}

const posts: BlogPost[] = [
  {
    id: 'what-ai-literacy-means',
    title: 'What AI Literacy Actually Means for Kids in 2026',
    excerpt:
      'Beyond prompt engineering and chatbots — we break down the foundational concepts every young builder needs to navigate an AI-native world with confidence and critical thinking.',
    category: 'Education',
    readTime: '7 min read',
    date: 'October 22, 2026',
    author: 'Amara Osei',
    authorRole: 'Chief Learning Officer',
    initials: 'AO',
    color: 'bg-[#e81b87]',
    featured: true,
  },
  {
    id: 'from-accra-to-yc',
    title: 'From Accra to Y Combinator: A Path School Founder\'s Story',
    excerpt:
      'Meet Abena — a 19-year-old who started her first AI product in a Path School batch at 16. She shares the lessons, mentors, and pivots that led her to YC S26.',
    category: 'Student Stories',
    readTime: '9 min read',
    date: 'October 14, 2026',
    author: 'Kwame Asante',
    authorRole: 'Co-Founder & CEO',
    initials: 'KA',
    color: 'bg-[#6c3696]',
    featured: true,
  },
  {
    id: 'running-a-school-chapter',
    title: 'How to Run a Thriving Tech Chapter at Your School',
    excerpt:
      'A practical guide for school coordinators on setting up, recruiting students, structuring sessions, and keeping a Path School chapter energised across an academic term.',
    category: 'School Partners',
    readTime: '6 min read',
    date: 'October 7, 2026',
    author: 'Fatima Al-Amin',
    authorRole: 'Head of Partnerships',
    initials: 'FA',
    color: 'bg-emerald-600',
  },
  {
    id: 'parents-guide-to-coding',
    title: 'A Parent\'s Guide to Tech Education: Separating Hype from Reality',
    excerpt:
      'Should your child learn Python, robotics, or AI first? We cut through the noise and give parents a clear framework for choosing the right program at the right time.',
    category: 'For Parents',
    readTime: '5 min read',
    date: 'September 30, 2026',
    author: 'Dr. Evelyn Chen',
    authorRole: 'Academic Advisor',
    initials: 'EC',
    color: 'bg-[#150824]',
  },
  {
    id: 'why-entrepreneurship-belongs-in-school',
    title: 'Why Entrepreneurship Belongs in Every Secondary School Curriculum',
    excerpt:
      'Entrepreneurship is not just for aspiring CEOs. We make the case for why every student — regardless of career path — benefits from building, shipping, and selling something real.',
    category: 'Education',
    readTime: '8 min read',
    date: 'September 22, 2026',
    author: 'Sophia Nkrumah',
    authorRole: 'Lead Mentor — Entrepreneurship',
    initials: 'SN',
    color: 'bg-[#e81b87]',
  },
  {
    id: 'demo-day-prep-guide',
    title: 'The Path School Demo Day Prep Guide: 4 Weeks to a Winning Pitch',
    excerpt:
      'Our mentors share the exact four-week sprint framework they use to take student projects from rough prototype to confident, investor-ready demo day presentation.',
    category: 'Resources',
    readTime: '10 min read',
    date: 'September 15, 2026',
    author: 'Kofi Boateng',
    authorRole: 'Lead Mentor — AI & Programming',
    initials: 'KB',
    color: 'bg-[#6c3696]',
  },
];

const categories = ['All', 'Education', 'Student Stories', 'School Partners', 'For Parents', 'Resources'];

const categoryColors: Record<string, string> = {
  Education: 'bg-[#6c3696]/10 text-[#6c3696]',
  'Student Stories': 'bg-[#e81b87]/10 text-[#e81b87]',
  'School Partners': 'bg-emerald-100 text-emerald-700',
  'For Parents': 'bg-amber-100 text-amber-700',
  Resources: 'bg-gray-100 text-gray-700',
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = posts.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  );

  const featured = posts.filter((p) => p.featured);
  const showFeatured = activeCategory === 'All';

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#fbfbf9] text-[#16082a] selection:bg-[#e81b87] selection:text-white">
      <Header />

      <main className="flex-grow">



        {/* Featured Posts */}
        {showFeatured && (
          <section className="py-14 sm:py-20 px-6 sm:px-8 max-w-6xl mx-auto">
            <h2 className="text-xs font-sans font-bold uppercase tracking-widest text-[#6c3696] mb-7">Featured</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
              {featured.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl border border-gray-200/80 p-8 shadow-2xs hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${categoryColors[post.category] || 'bg-gray-100 text-gray-700'}`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-sans font-bold text-[#150824] group-hover:text-[#6c3696] transition-colors leading-snug mb-3">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-5">{post.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-full ${post.color} text-white text-xs font-bold flex items-center justify-center`}>
                        {post.initials}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#150824]">{post.author}</p>
                        <p className="text-[11px] text-gray-400">{post.date}</p>
                      </div>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#150824] hover:text-white text-gray-500 flex items-center justify-center transition-all group-hover:bg-[#6c3696] group-hover:text-white cursor-pointer">
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className={`px-6 sm:px-8 max-w-6xl mx-auto ${showFeatured ? 'pb-16 sm:pb-20' : 'py-14 sm:py-20'}`}>
          {/* Category Filter */}
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <h2 className="text-xs font-sans font-bold uppercase tracking-widest text-[#6c3696]">
              {activeCategory === 'All' ? 'All Articles' : activeCategory}
            </h2>
            <div className="flex items-center gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#150824] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="divide-y divide-gray-200/80">
            {filtered.map((post) => (
              <article
                key={post.id}
                className="group py-7 flex items-start gap-5 cursor-pointer hover:bg-black/[0.015] -mx-4 px-4 rounded-xl transition-all"
              >
                {/* Author Avatar */}
                <div className={`w-10 h-10 rounded-full ${post.color} text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5`}>
                  {post.initials}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${categoryColors[post.category] || 'bg-gray-100 text-gray-700'}`}>
                      <Tag className="w-2.5 h-2.5 inline mr-1" />
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />{post.readTime}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-sans font-bold text-[#150824] group-hover:text-[#6c3696] transition-colors leading-snug mb-1.5">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <p className="text-xs text-gray-400 mt-2 font-medium">{post.author} · {post.authorRole}</p>
                </div>

                {/* Arrow */}
                <div className="shrink-0 mt-1 text-gray-300 group-hover:text-[#6c3696] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </article>
            ))}
          </div>
        </section>


      </main>

      <Footer />
    </div>
  );
}

