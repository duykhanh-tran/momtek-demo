import React from 'react';
import Image from 'next/image';
import { ArrowRight, Play, Home,Inbox } from 'lucide-react';
import Link from 'next/link';

const MentorHero = () => {
  return (
    <section className="relative bg-slate-950 text-white pt-16 pb-12 md:pt-28 md:pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[500px] md:h-[500px] bg-blue-600/20 rounded-full blur-[60px] md:blur-[120px] z-0 pointer-events-none translate-x-1/4 -translate-y-1/4"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          
          {/* Right Image */}
          <div className="w-full md:w-1/2 relative perspective-1000 group order-1 md:order-2">
            <div className="relative z-10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-2 md:border-4 border-slate-800 bg-slate-900 transition duration-700 aspect-[16/10] md:aspect-auto md:h-[450px]">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                alt="Momtek Learning"
                fill
                className="object-cover"
                priority
              />
              
              {/* Floating Badge */}
              <div className="absolute top-3 right-3 md:top-6 md:right-6 bg-white/95 backdrop-blur px-2.5 py-1 md:px-4 md:py-2 rounded-lg md:rounded-xl shadow-lg border border-blue-100 animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="font-bold text-slate-800 text-center md:text-sm">Đội ngũ Momtek <br />Tận tâm - Chuyên nghiệp - Yêu trẻ </span>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl opacity-50 -z-10"></div>
          </div>

          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-blue-800/30 border border-blue-500/50 text-blue-200 text-[9px] md:text-xs font-bold uppercase tracking-wider mb-4 md:mb-6">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              MOMTEK'S MENTOR
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-black text-white mb-4 md:mb-6 leading-tight">
              Không chỉ là giáo viên , <br />
              <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent"> 
              chúng tôi là bạn đồng hành của Mẹ .
              </span> 
            </h1>

            <p className="text-sm md:text-lg text-slate-400 mb-6 md:mb-8 leading-relaxed border-l-0 pl-0 max-w-xl mx-auto md:mx-0">
              Gặp gỡ đội ngũ giáo viên, chuyên gia tiếng Anh không chỉ sở hữu chứng chỉ quốc tế, mà còn mang trái tim ấm áp của những người làm cha mẹ.
            </p>

            {/* BUTTON GROUP: Đã gộp vào 1 div và đặt nằm cạnh nhau */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 md:gap-4 mb-8 pt-2">
                
                {/* Nút 1: Màu xanh (Primary) */}
                <Link href="#pricing" className="flex items-center gap-3 px-5 py-3 md:px-6 md:py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/30 transition justify-center group border border-transparent">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition">
                        <Inbox className="w-3 h-3 md:w-4 md:h-4 fill-white" />
                    </div>
                    <span className="font-bold text-sm md:text-base">Chat với Mentor</span>
                </Link>

                {/* Nút 2: Màu tối/Kính (Secondary) */}
                <a href="#how-it-works" className="flex items-center gap-3 px-5 py-3 md:px-6 md:py-4 rounded-full border border-slate-700 hover:bg-slate-800 transition justify-center group bg-slate-900/50 backdrop-blur-sm shadow-xl">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition">
                            <Play className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                    </div>
                    <span className="font-bold text-slate-200 group-hover:text-white text-sm md:text-base">Xem quy trình</span>
                </a>

            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default MentorHero;