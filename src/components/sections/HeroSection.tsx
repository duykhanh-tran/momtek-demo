'use client'; // Chuyển thành Client Component để dùng hook
import React from 'react';
import Image from 'next/image';
import { Star, Sparkles, Play, CheckCircle, Users } from 'lucide-react';
import { HERO_CONTENT } from '@/lib/constants';
import { useModal } from '@/context/ModalContext'; // Import hook

const HeroSection = () => {
  const { openQuiz, openVideo } = useModal(); // Lấy hàm mở modal

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* ... (Giữ nguyên phần Background) ... */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_CONTENT.bg_image}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/90 to-slate-900/95 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-white space-y-6 text-center md:text-left">
          {/* ... (Giữ nguyên badge, title, desc) ... */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/50 border border-blue-500 text-blue-200 text-xs font-bold uppercase tracking-wider mx-auto md:mx-0 animate-pulse">
            <Star className="w-3 h-3" /> {HERO_CONTENT.badge}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            {HERO_CONTENT.title_1} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
              {HERO_CONTENT.title_highlight}
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-lg mx-auto md:mx-0 font-medium">
            {HERO_CONTENT.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* Nút mở Quiz */}
            <button 
              onClick={openQuiz}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-orange-500/20 transition hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              <Sparkles className="w-5 h-5 group-hover:animate-spin" /> 
              Khám phá Phong cách Dạy con
            </button>
            
            {/* Nút mở Video */}
            <button 
              onClick={() => openVideo('https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1')}
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg backdrop-blur-sm transition flex items-center justify-center gap-2 group"
            >
              <span className="bg-white text-blue-900 rounded-full p-1 group-hover:scale-110 transition duration-300">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </span> 
              Xem Video Intro
            </button>
          </div>
          
          {/* ... (Giữ nguyên footer stats) ... */}
          <div className="pt-4 flex items-center justify-center md:justify-start gap-6 opacity-80 text-xs text-slate-400">
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-400" /> Phương pháp đã kiểm chứng</span>
            <span className="hidden md:flex items-center gap-1"><Users className="w-4 h-4 text-green-400" /> 50,000+ phụ huynh tin dùng</span>
          </div>
        </div>
        
        {/* ... (Giữ nguyên ảnh bên phải) ... */}
        <div className="relative hidden md:block group cursor-pointer">
          <div className="absolute inset-0 bg-blue-500 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
          <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 transform rotate-1 group-hover:rotate-0 transition duration-500">
            <Image 
              src={HERO_CONTENT.bg_image} 
              alt="Momtek Happiness" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;