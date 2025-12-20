'use client';

import React from 'react';
import { Brain, Heart, Smartphone } from 'lucide-react';

const AcademySubNav = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-[72px] z-40 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-2 md:px-6">
        {/* Cập nhật:
           - flex-nowrap: Bắt buộc nằm 1 hàng.
           - gap-1: Khoảng cách nhỏ trên mobile để tiết kiệm diện tích.
           - justify-center: Căn giữa.
        */}
        <div className="flex items-center justify-center flex-nowrap gap-1 md:gap-4 py-3">
          
          <button className="px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-bold bg-slate-900 text-white shadow-md transition whitespace-nowrap">
            Mới nhất
          </button>
          
          <button onClick={() => scrollToSection('section-brain')} className="px-2 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-bold bg-white text-slate-600 border border-slate-200 hover:bg-orange-50 hover:text-orange-600 transition whitespace-nowrap flex items-center gap-1">
            <Brain className="w-3 h-3 md:w-4 md:h-4" /> Não bộ
          </button>
          
          <button onClick={() => scrollToSection('section-play')} className="px-2 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-bold bg-white text-slate-600 border border-slate-200 hover:bg-blue-50 hover:text-blue-600 transition whitespace-nowrap flex items-center gap-1">
            <Heart className="w-3 h-3 md:w-4 md:h-4" /> Kết nối
          </button>
          
          <button onClick={() => scrollToSection('section-tech')} className="px-2 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-bold bg-white text-slate-600 border border-slate-200 hover:bg-purple-50 hover:text-purple-600 transition whitespace-nowrap flex items-center gap-1">
            <Smartphone className="w-3 h-3 md:w-4 md:h-4" /> Công nghệ
          </button>

        </div>
      </div>
    </div>
  );
};

export default AcademySubNav;