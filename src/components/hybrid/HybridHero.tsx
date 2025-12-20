import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { HYBRID_HERO } from '@/lib/hybrid-data';

const HybridHero = () => {
  return (
    <section className="relative bg-slate-950 text-white pt-32 pb-24 overflow-hidden">
      {/* Background Noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        {/* Left Image (Avatar) */}
        <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-orange-500 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition duration-700"></div>
            <div className="relative w-full h-full rounded-full border-4 border-slate-800 overflow-hidden z-10">
                <Image 
                    src={HYBRID_HERO.image} 
                    alt="Founder" 
                    fill 
                    className="object-cover"
                />
            </div>
            {/* Mobile Play Button overlay */}
            <button className="absolute inset-0 flex items-center justify-center z-20 md:hidden">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                    <Play className="w-6 h-6 fill-white" />
                </div>
            </button>
        </div>

        {/* Right Content */}
        <div className="text-center md:text-left flex-1">
            <span className="text-orange-400 font-bold uppercase tracking-widest text-xs mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">
                {HYBRID_HERO.label}
            </span>
            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight italic">
                {HYBRID_HERO.title_1}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
                    {HYBRID_HERO.title_highlight}
                 </span>
                 <br className="hidden md:block" /> {HYBRID_HERO.title_2}
            </h1>
            <p className="text-slate-400 text-lg font-light max-w-2xl leading-relaxed italic mb-8 mx-auto md:mx-0">
                "{HYBRID_HERO.desc}"
            </p>

            {/* <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-10">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-blue-900/40 transition transform hover:-translate-y-1 flex items-center gap-2 w-full sm:w-auto justify-center">
                    Tìm hiểu lộ trình
                </button>
                
                <button className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 hover:bg-white/5 transition w-full sm:w-auto justify-center">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition shadow-lg shadow-orange-900/20">
                        <Play className="w-5 h-5 fill-current text-white" />
                    </div>
                    <span className="font-bold text-sm">Xem Video Triết lý</span>
                </button>
            </div> */}

            <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="text-right border-r border-slate-800 pr-4">
                    <p className="font-bold text-white text-sm">{HYBRID_HERO.author}</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">{HYBRID_HERO.role}</p>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default HybridHero;