import React from 'react';
import Image from 'next/image';
import { Zap, Music, Play } from 'lucide-react';

export default function HeroHybrid() {
  return (
    <section className="relative bg-slate-950 text-white py-20 md:py-28 flex items-center min-h-[650px] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[500px] md:h-[500px] bg-blue-600/20 rounded-full blur-[60px] md:blur-[120px] z-0 pointer-events-none translate-x-1/4 -translate-y-1/4"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            
            {/* Left Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-blue-800/30 border border-blue-500/50 text-blue-200 text-[9px] md:text-xs font-bold uppercase tracking-wider mb-4 md:mb-6">
                    <Zap className="w-3 h-3 md:w-3.5 md:h-3.5 mr-1" /> 
                    Công nghệ Giáo dục 4.0
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-black text-white mb-4 md:mb-6 leading-tight">
                    Sách Blend - Sức mạnh của  <br/>
                    Truyền thông và Công nghệ 
                </h1>

                <p className="text-sm md:text-lg text-slate-400 mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
                    Sách Blend Momtek kết hợp giá trị sách truyền thống với sức mạnh của Video,Audio và AI chấm điểm ngay trên điện thoại của mẹ đem lại trải nghiệm học tập tốt nhất .
                </p>

                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 md:gap-4 pt-2">
                    <a href="#how-it-works" className="flex items-center gap-3 px-5 py-3 md:px-6 md:py-4 rounded-full border border-slate-700 hover:bg-slate-800 transition justify-center group bg-slate-900/50 backdrop-blur-sm shadow-xl">
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition">
                             <Play className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                        </div>
                        <span className="font-bold text-slate-200 group-hover:text-white text-sm md:text-base">Khám phá nguyên lý</span>
                    </a>
                </div>
            </div>
            
            {/* Right Content - Minh họa Scan 3D */}
            <div className="w-full md:w-1/2 relative flex justify-center py-4 md:py-0">
                <div className="relative w-72 h-[450px] md:w-80 md:h-[480px] bg-slate-900 rounded-[2rem] shadow-2xl border-4 border-slate-700 z-10 overflow-hidden">
                    <div className="absolute inset-0 bg-slate-950 flex flex-col">
                        {/* Camera View Simulation */}
                        <div className="h-2/3 bg-slate-800 relative overflow-hidden group">
                            <Image 
                                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop" 
                                alt="Book Scan"
                                fill
                                className="object-cover opacity-60 group-hover:scale-105 transition duration-700"
                            />
                            {/* Scan Frame Overlay */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-white/30 rounded-xl">
                                <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-blue-500 rounded-tl-lg"></div>
                                <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-blue-500 rounded-tr-lg"></div>
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-blue-500 rounded-bl-lg"></div>
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-blue-500 rounded-br-lg"></div>
                                {/* Scan Line Animation */}
                                <div className="absolute left-0 w-full h-0.5 bg-blue-500 shadow-[0_0_10px_#3b82f6] animate-scan"></div>
                            </div>
                            <div className="absolute bottom-4 left-0 w-full text-center text-blue-200 text-xs font-bold animate-pulse">Đang quét mã học liệu...</div>
                        </div>
                        
                        {/* Pop-up Content */}
                        <div className="h-1/3 bg-slate-900 p-4 rounded-t-2xl -mt-4 z-10 shadow-[0_-4px_20px_rgba(0,0,0,0.5)] relative border-t border-slate-800">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-blue-900/50 rounded-lg flex items-center justify-center text-blue-400">
                                    <Music className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Đã mở khóa</p>
                                    <p className="font-bold text-white text-sm">Bài hát: The Apple Tree</p>
                                </div>
                            </div>
                            <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition text-white rounded-lg text-sm font-bold shadow-lg shadow-blue-900/20">Bắt đầu học ngay</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}