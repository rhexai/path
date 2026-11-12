"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import {
  Check,
  X,
  ChevronDown,
  Award
} from 'lucide-react';
import dynamic from 'next/dynamic';

const PaymentButton = dynamic(() => import('@/components/PaymentButton'), { ssr: false });

export default function LessonsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    phone: '',
    email: '',
    age: '',
    track: 'AI Programming & Training'
  });

  const paystackAmount = billingPeriod === 'monthly' ? 95000 : 1026000; // 95,000 pesewas (950 GHS) / 1,026,000 pesewas (10,260 GHS)

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const onSuccess = () => {
    resetForm();
    alert("Payment successful! Thank you for enrolling.");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.parentName && formData.studentName && formData.phone && formData.email && formData.age) {
      setIsSubmitting(true);
      try {
        const response = await fetch('/api/enroll', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            billingPeriod,
            amount: billingPeriod === 'monthly' ? 'GH₵ 950' : 'GH₵ 10,260',
          }),
        });

        if (!response.ok) {
          console.warn('Backend enrollment response non-200, continuing to payment');
        }
      } catch (error) {
        console.warn('Error submitting form notification, continuing to payment:', error);
      } finally {
        setIsSubmitting(false);
        setFormSubmitted(true);
      }
    }
  };

  const resetForm = () => {
    setIsModalOpen(false);
    setFormSubmitted(false);
    setFormData({
      parentName: '',
      studentName: '',
      phone: '',
      email: '',
      age: '',
      track: 'AI Programming & Training'
    });
  };

  const featuresPremium = [
    "Full access to selected track (AI Programming & Training, Launch a Startup, Marketing & Enterprise Sales, or Creative Design)",
    "Guided, step-by-step curriculum designed for kids, teens, and youth aged 8–20",
    "Live feedback, support and office hours with mentors",
    "Real-world projects that build portfolio-level confidence",
    "Official Path School completion certificates"
  ];

  const faqs = [
    {
      question: "What is included in Batch Enrollment?",
      answer: "Batch Enrollment includes live mentor support, personalized project feedback, small peer batches of 12–15, official certifications, and end-to-end hands-on project labs."
    },
    {
      question: "Can my child switch tracks after enrolling?",
      answer: "Yes. Students can switch or adjust their selected track (AI Programming & Training, Launch a Startup, Marketing & Enterprise Sales, or Creative Design) with their mentor."
    },
    {
      question: "Do students need prior coding or design experience?",
      answer: "No prior experience is necessary. Students are matched into age-appropriate peer batches (ages 8–20) and begin with intuitive, hands-on fundamentals."
    },
    {
      question: "How does the monthly and annual subscription work?",
      answer: "The monthly option is GH₵ 950 per month with cancel-anytime flexibility. The annual option is GH₵ 10,260, saving 10% for the full year."
    },
    {
      question: "Do you offer scholarships or financial aid?",
      answer: "Yes. Path School offers need-based and merit scholarships of up to 50% to ensure motivated young builders can participate. Visit our dedicated Scholarships page (/scholarships) to learn more and inquire."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f8f7f4] text-[#16082a]">
      <Header />

      <main className="flex-grow py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Batch Enrollment Section */}
          <section className="mb-16 md:mb-20 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#16082a] leading-tight tracking-tight mb-4">
              Batch Enrollment
            </h1>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 max-w-xl mx-auto">
              Path School provides the support network and a proven methodology to get your child to traction.
            </p>

            <div className="mb-8">
              <span className="text-3xl font-bold text-[#16082a]">GH₵ 950</span>
              <span className="text-sm text-gray-500 font-medium"> / month</span>
            </div>

            <ul className="space-y-3.5 mb-8 max-w-lg mx-auto text-left">
              {featuresPremium.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-base text-gray-700">
                  <div className="mt-1 bg-emerald-100/70 p-1 rounded-full text-emerald-700 shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span className="leading-snug">{feat}</span>
                </li>
              ))}
            </ul>

            <div className="flex justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center bg-[#16140f] hover:bg-[#6c3696] text-white px-10 py-3.5 rounded-full font-serif italic text-base transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                Subscribe &amp; Enroll
              </button>
            </div>
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
                      className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-200 ${
                        openFaq === idx ? 'rotate-180 text-[#6c3696]' : ''
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


        </div>
      </main>

      {/* Subscription / Enrollment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#16082a]/70 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200 border border-gray-100 max-h-[90dvh] flex flex-col">

            {/* Close Button */}
            <button
              onClick={resetForm}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 text-gray-400 hover:text-gray-700 transition-colors z-10 p-1.5 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!formSubmitted ? (
              <div className="p-6 sm:p-8 md:p-10 overflow-y-auto">
                <div className="text-center mb-6">
                  <div className="inline-block border border-purple-200 bg-purple-50 text-[#6c3696] text-xs font-semibold px-3.5 py-1 rounded-full mb-3">
                    Admissions
                  </div>

                  <h3 className="text-2xl md:text-3xl font-serif font-normal text-[#16082a]">
                    Enroll Child in Path School
                  </h3>
                </div>

                {/* Billing Cycle Toggle */}
                <div className="bg-gray-100 p-1 rounded-full flex gap-1 mb-8">
                  <button
                    type="button"
                    onClick={() => setBillingPeriod('monthly')}
                    className={`flex-1 py-2.5 rounded-full text-xs font-bold transition-all uppercase tracking-wider ${
                      billingPeriod === 'monthly' ? 'bg-[#16140f] text-white shadow-sm' : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    Monthly (GH₵ 950)
                  </button>
                  <button
                    type="button"
                    onClick={() => setBillingPeriod('annual')}
                    className={`flex-1 py-2.5 rounded-full text-xs font-bold transition-all uppercase tracking-wider flex items-center justify-center gap-1.5 ${
                      billingPeriod === 'annual' ? 'bg-[#16140f] text-white shadow-sm' : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    Annual (GH₵ 10,260) <span className="bg-[#6c3696] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">Save 10%</span>
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="parentName" className="block text-xs font-semibold text-gray-700 mb-1.5">Parent name</label>
                    <input
                      required
                      type="text"
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-base sm:text-sm text-gray-900 focus:outline-none focus:border-[#6c3696] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="studentName" className="block text-xs font-semibold text-gray-700 mb-1.5">Student name</label>
                    <input
                      required
                      type="text"
                      id="studentName"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-base sm:text-sm text-gray-900 focus:outline-none focus:border-[#6c3696] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1.5">Phone number</label>
                    <input
                      required
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-base sm:text-sm text-gray-900 focus:outline-none focus:border-[#6c3696] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1.5">Email address</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="parent@example.com"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-base sm:text-sm text-gray-900 focus:outline-none focus:border-[#6c3696] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="age" className="block text-xs font-semibold text-gray-700 mb-1.5">Student age</label>
                      <input
                        required
                        type="number"
                        id="age"
                        name="age"
                        min="5"
                        max="20"
                        value={formData.age}
                        onChange={handleInputChange}
                        placeholder="14"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-base sm:text-sm text-gray-900 focus:outline-none focus:border-[#6c3696] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="track" className="block text-xs font-semibold text-gray-700 mb-1.5">Preferred track</label>
                      <select
                        id="track"
                        name="track"
                        value={formData.track}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-base sm:text-sm text-gray-900 focus:outline-none focus:border-[#6c3696] focus:bg-white transition-all"
                      >
                        <option>AI Programming &amp; Training</option>
                        <option>Launch a Startup</option>
                        <option>Marketing &amp; Enterprise Sales</option>
                        <option>Creative Design</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#16140f] hover:bg-[#6c3696] text-white py-3.5 px-6 rounded-full font-serif italic text-base transition-all mt-4 flex items-center justify-center shadow-sm disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? 'Submitting...' : 'Confirm Subscription & Enroll'}
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-6 sm:p-8 md:p-10 text-center flex flex-col items-center overflow-y-auto">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-normal text-[#16082a] mb-3">
                  Enrollment Submitted!
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-sm">
                  Thank you, <strong>{formData.parentName}</strong>! We have received your request to enroll your child in our <strong>{formData.track}</strong> track ({billingPeriod === 'monthly' ? 'GH₵ 950 / month' : 'GH₵ 10,260 / year'}). An advisor will reach out to <strong>{formData.email}</strong> shortly with details and next steps. Please click the button below to proceed to payment and complete your subscription.
                </p>
                <PaymentButton
                  email={formData.email}
                  amount={paystackAmount}
                  onSuccess={onSuccess}
                />
              </div>
            )}

          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
