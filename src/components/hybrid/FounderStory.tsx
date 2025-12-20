import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { FOUNDER_STORY } from '@/lib/hybrid-data';

const FounderStory = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
          
          {/* Ảnh: Full width trên mobile, 50% trên desktop */}
          <div className="w-full md:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition duration-500 h-[300px] md:h-[500px]">
               <Image 
                 src={FOUNDER_STORY.image} 
                 alt={FOUNDER_STORY.name} 
                 fill
                 className="object-cover"
               />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6 md:p-8">
                <p className="text-white font-bold text-base md:text-lg">{FOUNDER_STORY.name}</p>
                <p className="text-slate-300 text-xs md:text-sm">{FOUNDER_STORY.role}</p>
              </div>
            </div>
          </div>

          {/* Nội dung text */}
          <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
            <Quote className="w-10 h-10 md:w-12 md:h-12 text-orange-200 fill-current" />
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              {FOUNDER_STORY.quote}
            </h2>
            <div className="text-base md:text-lg text-slate-600 space-y-4 leading-relaxed">
              <p>{FOUNDER_STORY.p1}</p>
              <p>{FOUNDER_STORY.p2}</p>
            </div>
            <div className="pt-2 md:pt-4">
              <span className="inline-block border-b-2 border-orange-500 pb-1 text-slate-900 font-bold text-sm md:text-base">Khởi nguồn của Momtek Hybrid</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FounderStory;