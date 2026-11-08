import React from 'react';
import Link from 'next/link';
import { Play, ArrowRight } from 'lucide-react';

interface LatestCardProps {
  tag: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl?: string;
  tagColor?: 'black' | 'green' | 'blue' | 'red';
  isVideo?: boolean;
}

export default function LatestCard({
  tag,
  title,
  date,
  excerpt,
  imageUrl,
  tagColor = 'black',
  isVideo = false,
}: LatestCardProps) {
  
  const badgeColorMap = {
    black: 'bg-[#150824]/5 text-[#150824] border-[#150824]/20',
    green: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    blue: 'bg-purple-50 text-[#6c3696] border-purple-200',
    red: 'bg-[#fdf2f8] text-[#e81b87] border-[#fbcfe8]',
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 hover:border-[#6c3696]/40 hover:shadow-[0_12px_30px_-6px_rgba(108,54,150,0.15)] transition-all duration-300 flex flex-col h-full group">
      
      {/* Top Header Row with Pill Tag */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <span className={`text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full border ${badgeColorMap[tagColor]}`}>
          {tag}
        </span>
        <span className="text-xs text-gray-400 font-medium">
          {date}
        </span>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-5 mb-4">
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-[#150824] group-hover:text-[#6c3696] transition-colors leading-snug mb-3">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {excerpt}
          </p>
        </div>
        
        {imageUrl && (
          <div className="w-full md:w-36 h-36 shrink-0 relative rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            {isVideo && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="w-10 h-10 rounded-full bg-white/90 text-[#16082a] flex items-center justify-center shadow-md">
                  <Play className="w-4 h-4 ml-0.5 fill-current" />
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom CTA Arrow Link */}
      <div className="pt-4 border-t border-gray-100 mt-auto flex items-center justify-between">
        <Link 
          href="/enroll" 
          className="text-xs font-bold text-[#150824] group-hover:text-[#6c3696] flex items-center gap-2 uppercase tracking-wider transition-colors"
        >
          <span>Explore Curriculum</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <span className="text-[11px] font-semibold text-gray-400">
          Certificate Eligible
        </span>
      </div>
    </div>
  );
}

