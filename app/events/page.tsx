"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  ArrowUpRight, 
  Calendar, 
  MapPin, 
  Clock, 
  X, 
  CheckCircle2, 
  Mail, 
  Users, 
  Sparkles, 
  Search,
  ExternalLink,
  Share2
} from 'lucide-react';

interface EventItem {
  id: string;
  title: string;
  date: string;
  time?: string;
  location: string;
  city: string;
  mode: 'in-person' | 'virtual' | 'hybrid';
  category: 'Hackathon' | 'Bootcamp' | 'Paper Club' | 'Demo Day' | 'Campus Tour' | 'Webinars' | 'Webinar';
  image: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  hosts: { name: string; role: string }[];
  agenda?: { time: string; activity: string }[];
  externalUrl?: string;
}

const EVENTS_DATA: EventItem[] = [
  {
    id: 'young-founders-demo-day',
    title: 'Young Founders Demo Day',
    date: 'Friday, March 13',
    time: 'Time TBA',
    location: 'Accra, Ghana & Live Stream',
    city: 'Accra, GH',
    mode: 'hybrid',
    category: 'Demo Day',
    image: '/events/demo_day.jpg',
    shortDesc: 'Standout youth founder teams unveil their AI applications, developer platforms, and hardware prototypes before mentors, angels, and supporters.',
    fullDesc: 'Experience the next generation of builders. Ambitious high school and college founders from Path School will take the stage to demonstrate working software, real-world customer traction, and novel AI systems. Join us in person in Accra or watch the live stream from anywhere in the world.',
    highlights: [
      'Rapid live product demos — working software, no slides',
      'Distinguished panel of active seed-stage investors and mentors',
      'Interactive product demo stations following mainstage presentations',
      'Open to in-person attendees in Accra and global live stream viewers',
    ],
    hosts: [
      { name: 'Path School Incubator', role: 'Program Directors' },
      { name: 'Guest Venture Partners', role: 'Silicon Valley Angel Syndicate' },
    ],
    agenda: [
      { time: 'TBA', activity: 'Mainstage Keynote & Showcase Intro' },
      { time: 'TBA', activity: 'Batch Demos: AI & Developer Tools' },
      { time: 'TBA', activity: 'Batch Demos: Consumer & Robotics' },
      { time: 'TBA', activity: 'Awards Announcement & Demo Booth Exhibition' },
    ],
  },
  {
    id: 'path-meetup-january',
    title: 'Path Monthly Meetup — January 27',
    date: 'Monday, January 16',
    time: 'Time TBA',
    location: 'Accra, Ghana',
    city: 'Accra, GH',
    mode: 'in-person',
    category: 'Bootcamp',
    image: '/events/startup_school_taipei.jpg',
    shortDesc: 'A casual community gathering for Path School students, parents, alumni, and mentors. Connect, share projects, and hear what\'s coming next.',
    fullDesc: 'Join us for the January Path Meetup — a relaxed in-person gathering for the entire Path School community. Whether you are a current student, a parent, an alumni founder, or a mentor, come connect, share what you have been building, and learn what\'s planned for the upcoming batches.',
    highlights: [
      'Community networking across students, parents, and mentors',
      'Student project showcases and work-in-progress demos',
      'Sneak peek at upcoming Path School batch curriculum',
      'Open Q&A with the Path School team',
    ],
    hosts: [
      { name: 'Path School Team', role: 'Community & Programs' },
    ],
    agenda: [
      { time: 'TBA', activity: 'Doors Open & Welcome' },
      { time: 'TBA', activity: 'Student Project Showcases' },
      { time: 'TBA', activity: 'Open Community Q&A' },
      { time: 'TBA', activity: 'Networking & Mixer' },
    ],
  },
  {
    id: 'program-orientation-26-27',
    title: 'Program Orientation 26/27',
    date: 'Thursday, January 9',
    time: 'Time TBA',
    location: 'Accra, Ghana',
    city: 'Accra, GH',
    mode: 'in-person',
    category: 'Campus Tour',
    image: '/events/campus_autumn.jpg',
    shortDesc: 'Official orientation for all incoming Path School students and families for the 2026/27 programme year. Meet your batch, mentors, and lead instructors.',
    fullDesc: 'The Path School 26/27 Program Orientation is the official kick-off for all incoming students and their families. Come meet your batch mates, get paired with your lead instructor, receive your first project brief, and understand what the upcoming term will look like. Parents are warmly encouraged to attend.',
    highlights: [
      'Meet your batch and lead instructor for the 26/27 year',
      'Receive your first project brief and batch schedule',
      'Parent information session and Q&A',
      'Tour of the Path School facilities and tools',
    ],
    hosts: [
      { name: 'George Aleesu', role: 'President & CEO, Path School' },
      { name: 'Path School Faculty', role: 'Lead Instructors & Mentors' },
    ],
    agenda: [
      { time: 'TBA', activity: 'Welcome & Introductions' },
      { time: 'TBA', activity: 'Batch Pairing & Instructor Meet' },
      { time: 'TBA', activity: 'Parent Information Session' },
      { time: 'TBA', activity: 'First Project Brief & Kickoff' },
    ],
  },
];

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // RSVP Form state in modal
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpEmail, setRsvpEmail] = useState('');
  const [rsvpStatus, setRsvpStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [rsvpMessage, setRsvpMessage] = useState('');

  // Bottom subscribe form state
  const [bottomEmail, setBottomEmail] = useState('');
  const [bottomStatus, setBottomStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedEvent(null);
      }
    };
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedEvent]);

  // Handle modal RSVP submission
  const handleRsvpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvpEmail || !selectedEvent) return;

    setRsvpStatus('loading');
    try {
      const res = await fetch('/api/events-subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: rsvpEmail,
          name: rsvpName,
          eventTitle: selectedEvent.title,
          eventDate: selectedEvent.date,
          eventLocation: selectedEvent.location
        })
      });

      if (res.ok) {
        setRsvpStatus('success');
        setRsvpMessage(`You're registered! We've sent ticket details to ${rsvpEmail}.`);
      } else {
        setRsvpStatus('error');
        setRsvpMessage('Registration encountered an issue. Please try again.');
      }
    } catch {
      setRsvpStatus('error');
      setRsvpMessage('Network error. Please try again.');
    }
  };

  // Handle bottom newsletter subscription
  const handleBottomSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bottomEmail) return;

    setBottomStatus('loading');
    try {
      const res = await fetch('/api/events-subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: bottomEmail })
      });

      if (res.ok) {
        setBottomStatus('success');
      } else {
        setBottomStatus('error');
      }
    } catch {
      setBottomStatus('error');
    }
  };

  // Generate Google Calendar Link
  const getGoogleCalendarUrl = (event: EventItem) => {
    const title = encodeURIComponent(event.title);
    const details = encodeURIComponent(`${event.fullDesc}\n\nMore info: https://pathschool.io/events`);
    const location = encodeURIComponent(`${event.location} (${event.mode})`);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  // Filter events
  const filteredEvents = EVENTS_DATA.filter((event) => {
    const matchesCategory = 
      activeCategory === 'All' || 
      event.category === activeCategory ||
      (activeCategory === 'Webinars' && (event.category === 'Webinar' || event.category === 'Webinars'));
    const matchesSearch = 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.date.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['All', 'Hackathon', 'Bootcamp', 'Paper Club', 'Demo Day', 'Campus Tour', 'Webinars'];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#fbfbf9] text-[#16082a] selection:bg-[#e81b87] selection:text-white">
      {/* Site Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Title & Subtitle Matching Screenshot */}
          <div className="text-center mb-10 sm:mb-14">
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-normal text-[#150824] tracking-tight leading-tight mb-3 sm:mb-4">
              Upcoming Events
            </h1>
          
          </div>

          {/* Optional Category Filter Pills & Search */}
          <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-gray-200/80 pb-4">
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full sm:w-auto scrollbar-none py-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#150824] text-white shadow-2xs'
                      : 'text-gray-500 hover:text-[#150824] hover:bg-black/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64 shrink-0">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search events, cities..."
                className="w-full pl-9 pr-3 py-1.5 bg-white border border-gray-200/80 rounded-full text-base sm:text-sm text-[#150824] placeholder-gray-400 focus:outline-none focus:border-[#6c3696] transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Events List Container Matching Screenshot */}
          <div className="border-t border-gray-200/80">
            {filteredEvents.length === 0 ? (
              <div className="py-16 text-center">
                <p className="text-gray-500 text-sm">No events match your search criteria.</p>
                <button
                  onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                  className="mt-3 text-xs font-semibold text-[#6c3696] hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="divide-y divide-gray-200/80">
                {filteredEvents.map((event) => (
                  <div
                    key={event.id}
                    onClick={() => {
                      setSelectedEvent(event);
                      setRsvpStatus('idle');
                      setRsvpMessage('');
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedEvent(event);
                      }
                    }}
                    aria-label={`View details and register for ${event.title}`}
                    className="group py-6 sm:py-7 flex items-center justify-between gap-4 sm:gap-6 cursor-pointer hover:bg-black/[0.02] -mx-3 sm:-mx-4 px-3 sm:px-4 rounded-xl transition-all"
                  >
                    {/* Left: Thumbnail Image */}
                    <div className="w-28 h-20 sm:w-36 sm:h-24 md:w-40 md:h-24 rounded-lg overflow-hidden shrink-0 bg-gray-100 border border-gray-200/60 shadow-2xs">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Middle: Title, Date, and Location */}
                    <div className="flex-1 min-w-0 pr-2">
                      <h2 className="text-base sm:text-lg md:text-[19px] font-semibold text-[#150824] group-hover:text-[#6c3696] transition-colors leading-snug">
                        {event.title}
                      </h2>
                      <div className="text-xs sm:text-sm md:text-base text-[#737373] mt-1.5 flex flex-wrap items-center gap-x-5 gap-y-0.5 font-normal">
                        <span>{event.date}</span>
                        <span>{event.location}</span>
                      </div>
                    </div>

                    {/* Right: Up-Right Arrow Icon */}
                    <div className="shrink-0 flex items-center justify-center text-gray-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                      <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.75} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </main>

      {/* ========================================================
          EVENT DETAIL & RSVP MODAL
         ======================================================== */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedEvent(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-event-title"
        >
          <div 
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative h-48 sm:h-64 w-full bg-gray-900 overflow-hidden shrink-0">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedEvent(null)}
                aria-label="Close dialog"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Badges on Banner */}
              <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="inline-block px-2.5 py-1 bg-white/20 backdrop-blur-md text-white text-[11px] font-semibold uppercase tracking-wider rounded-md mb-2 border border-white/20">
                    {selectedEvent.category} &bull; {selectedEvent.mode.toUpperCase()}
                  </span>
                  <h2 id="modal-event-title" className="text-2xl sm:text-3xl font-serif font-normal text-white drop-shadow-sm">
                    {selectedEvent.title}
                  </h2>
                </div>
              </div>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              {/* Event Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#fbfbf9] border border-gray-200/80 p-4 rounded-xl text-xs sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-[#6c3696] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-gray-900">{selectedEvent.date}</span>
                    <span className="text-gray-500 text-xs">{selectedEvent.time || 'Schedule announced upon registration'}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#6c3696] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-gray-900">{selectedEvent.location}</span>
                    <span className="text-gray-500 text-xs">{selectedEvent.city}</span>
                  </div>
                </div>
              </div>

              {/* Add to Calendar Action */}
              <div className="flex items-center gap-3">
                <a
                  href={getGoogleCalendarUrl(selectedEvent)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#150824] hover:text-[#6c3696] bg-gray-100 hover:bg-gray-200/80 px-3 py-1.5 rounded-lg transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Add to Google Calendar</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => {
                    if (navigator.clipboard) {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Event link copied to clipboard!');
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200/80 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Event</span>
                </button>
              </div>

              {/* Full Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">About This Event</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {selectedEvent.fullDesc}
                </p>
              </div>

              {/* Key Highlights */}
              {selectedEvent.highlights && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2.5">What to Expect</h4>
                  <ul className="space-y-1.5">
                    {selectedEvent.highlights.map((h, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-gray-700 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Agenda / Schedule if available */}
              {selectedEvent.agenda && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2.5">Schedule</h4>
                  <div className="space-y-2 border-l-2 border-[#6c3696]/20 pl-4">
                    {selectedEvent.agenda.map((slot, idx) => (
                      <div key={idx} className="text-xs sm:text-sm">
                        <span className="font-semibold text-gray-900">{slot.time}</span> &mdash;{' '}
                        <span className="text-gray-600">{slot.activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Hosts & Speakers */}
              {selectedEvent.hosts && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Featured Speakers & Hosts</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedEvent.hosts.map((host, idx) => (
                      <div key={idx} className="bg-gray-50 border border-gray-100 rounded-lg p-2.5">
                        <p className="text-xs font-bold text-gray-900">{host.name}</p>
                        <p className="text-[11px] text-gray-500">{host.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Registration / RSVP Form */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-sm font-bold text-gray-900 mb-1">Reserve Your Spot</h4>
                <p className="text-xs text-gray-500 mb-4">
                  Tickets are free for students, parents, and registered community members. Space is limited.
                </p>

                {rsvpStatus === 'success' ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <h5 className="text-sm font-bold text-emerald-950 mb-1">Registration Confirmed</h5>
                    <p className="text-xs text-emerald-800">{rsvpMessage}</p>
                    <button
                      onClick={() => {
                        setRsvpStatus('idle');
                        setRsvpEmail('');
                        setRsvpName('');
                      }}
                      className="mt-3 text-xs font-bold text-[#6c3696] hover:underline"
                    >
                      Register another guest
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleRsvpSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="rsvp-name" className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Full Name
                        </label>
                        <input
                          id="rsvp-name"
                          type="text"
                          required
                          value={rsvpName}
                          onChange={(e) => setRsvpName(e.target.value)}
                          placeholder="e.g. Jane Doe"
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-base sm:text-sm text-gray-900 focus:outline-none focus:border-[#6c3696] focus:bg-white transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="rsvp-email" className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Email Address
                        </label>
                        <input
                          id="rsvp-email"
                          type="email"
                          required
                          value={rsvpEmail}
                          onChange={(e) => setRsvpEmail(e.target.value)}
                          placeholder="jane@example.com"
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-base sm:text-sm text-gray-900 focus:outline-none focus:border-[#6c3696] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={rsvpStatus === 'loading'}
                      className="w-full bg-[#150824] hover:bg-[#2b104c] text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs disabled:opacity-60 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>{rsvpStatus === 'loading' ? 'Registering...' : 'Complete Free Registration'}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    {rsvpStatus === 'error' && (
                      <p className="text-red-500 text-xs text-center">{rsvpMessage}</p>
                    )}
                  </form>
                )}
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
